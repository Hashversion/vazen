import "server-only";
import { publicProcedure } from "../orpc";
import { earlyAccessRouter } from "./early-access";

export const appRouter = {
  healthCheck: publicProcedure.handler(() => "OK"),
  earlyAccess: earlyAccessRouter,
};

export type AppRouter = typeof appRouter;
