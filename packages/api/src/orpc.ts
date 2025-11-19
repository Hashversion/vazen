import { ORPCError, os } from "@orpc/server";
import { auth } from "@repo/auth/server";
import { getDb } from "@repo/db";
import "server-only";
import { z } from "zod";

interface CloudflareEnv {
  HYPERDRIVE: Hyperdrive;
  AUTH_CACHE: KVNamespace;
}

export async function createORPCContext(options: { headers: Headers; cloudflareEnv: CloudflareEnv }) {
  const session = await auth(options.cloudflareEnv).api.getSession({ headers: options.headers });

  return {
    db: getDb(options.cloudflareEnv),
    session: session?.session,
    user: session?.user,
    ...options,
  };
}

export type ORPCContext = Awaited<ReturnType<typeof createORPCContext>>;

export const o = os.$context<ORPCContext>().errors({
  RATE_LIMITED: {
    message: "You're being rate limited.",
    data: z.object({
      retryAfter: z.number().int(),
    }),
  },
  INTERNAL_SERVER_ERROR: {
    message: "Internal Server Error.",
  },
});

export const protectedProcedure = o.use(({ context, next }) => {
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

export const adminProcedure = o.use(({ context, next }) => {
  if (!context.session || !context.user) {
    throw new ORPCError("UNAUTHORIZED");
  }

  if (context.user.role === "user") {
    throw new ORPCError("FORBIDDEN", { message: "You don't have right permission" });
  }

  return next({
    context: {
      session: context.session,
      user: context.user,
    },
  });
});

export const createContext = createORPCContext;
