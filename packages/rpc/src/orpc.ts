import { ORPCError, os } from "@orpc/server";
import { auth } from "@repo/auth/server";

import type { Context } from "./context";

// Request logging is handled natively by EvlogHandlerPlugin on the RPCHandler
// (it tags rpc.method on the wide event); no procedure middleware needed.
// Logger init (configApiLogger) runs explicitly in the app's instrumentation
// hook, not as an import side effect here.
export const base = os.$context<Context>();
export const publicProcedure = base;

export const protectedProcedure = publicProcedure.use(
  async ({ context, next }) => {
    const authSession = await auth.api.getSession({
      headers: context.headers,
    });

    if (!authSession) {
      throw new ORPCError("UNAUTHORIZED");
    }

    return next({
      context: {
        ...context,
        session: authSession.session,
        user: authSession.user,
      },
    });
  }
);

export const adminProcedure = protectedProcedure.use(({ context, next }) => {
  if (context.user.role !== "admin") {
    throw new ORPCError("FORBIDDEN", {
      message: "You don't have right permission",
    });
  }

  return next({
    context,
  });
});
