import { createRouterClient } from "@orpc/server";
import { createContext } from "@repo/rpc/context";
import type { Context } from "@repo/rpc/context";
import { appRouter } from "@repo/rpc/routers/index";
import { createRequestLogger } from "@repo/telemetry/evlog";
import { LOGGER_CONTEXT_SYMBOL } from "@repo/telemetry/evlog/orpc";
import { headers } from "next/headers";
import { after } from "next/server";
import "server-only";

globalThis.$client = createRouterClient(appRouter, {
  context: async () => {
    const ctx = createContext({ headers: await headers() }) as Context;
    return ctx;
  },
  interceptors: [
    async (options) => {
      const log = createRequestLogger({
        method: "RPC",
        path: options.path.join("."),
        waitUntil: (promise) => after(promise),
      });

      try {
        const result = await options.next({
          ...options,
          context: {
            ...options.context,
            [LOGGER_CONTEXT_SYMBOL]: log,
          },
        });

        log.emit();
        return result;
      } catch (error) {
        log.error(error instanceof Error ? error : String(error));
        log.emit();
        throw error;
      }
    },
  ],
});
