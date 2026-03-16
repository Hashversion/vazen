import { ORPCError, os } from "@orpc/server";
import "server-only";
import { z } from "zod";
import type { ORPCContext } from "./context";

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

export const publicProcedure = o;

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
