import { os } from "@orpc/server";
import { getDb } from "@repo/db";
import "server-only";
import { z } from "zod";

interface CloudflareEnv {
  HYPERDRIVE: Hyperdrive;
}

export async function createORPCContext(options: { headers: Headers; cloudflareEnv: CloudflareEnv }) {
  return {
    db: getDb(options.cloudflareEnv),
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

export const createContext = createORPCContext;
