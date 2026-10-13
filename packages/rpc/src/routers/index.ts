import type { RouterClient } from "@orpc/server";
import { getLogger } from "@repo/telemetry/evlog/orpc";

import { protectedProcedure, publicProcedure } from "../orpc";

export const appRouter = {
  health: publicProcedure.handler(({ context }) => {
    getLogger(context)?.set({ route: "health" });
    return { ok: true };
  }),
  privateData: protectedProcedure.handler(({ context }) => ({
    message: "This is private",
    user: context.user,
  })),
};

export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<AppRouter>;
