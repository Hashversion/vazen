import { createRouterClient } from "@orpc/server";
import { createContext } from "@repo/rpc/context";
import type { Context } from "@repo/rpc/context";
import { appRouter } from "@repo/rpc/routers/index";
import { headers } from "next/headers";
import "server-only";

globalThis.$client = createRouterClient(appRouter, {
  context: async () => {
    const ctx = (await createContext({ headers: await headers() })) as Context;
    return ctx;
  },
});
