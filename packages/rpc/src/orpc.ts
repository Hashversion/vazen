import { ORPCError, os } from "@orpc/server";

import type { Context } from "./context";

// Request logging is handled natively by EvlogHandlerPlugin on the RPCHandler
// (it tags rpc.method on the wide event); no procedure middleware needed.
// Logger init (configApiLogger) runs explicitly in the app's instrumentation
// hook, not as an import side effect here.
export const base = os.$context<Context>();
export const publicProcedure = base;

export const protectedProcedure = publicProcedure.use(({ context, next }) => {
  if (!context.user) {
    throw new ORPCError("UNAUTHORIZED");
  }

  return next({
    context: {
      session: context.session,
      user: context.user,
    },
  });
});

export const adminProcedure = publicProcedure.use(({ context, next }) => {
  if (!context.session || !context.user) {
    throw new ORPCError("UNAUTHORIZED");
  }

  if (context.user.role !== "admin") {
    throw new ORPCError("FORBIDDEN", {
      message: "You don't have right permission",
    });
  }

  return next({
    context: {
      session: context.session,
      user: context.user,
    },
  });
});
