import "server-only";
import { os } from "@orpc/server";
import { z } from "zod";
import { getDb } from "@repo/db";

export async function createORPCContext(options: { headers: Headers }) {
  return {
    db: getDb(),
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
