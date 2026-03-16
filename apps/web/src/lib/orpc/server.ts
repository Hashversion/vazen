import { headers } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createRouterClient } from "@orpc/server";
import "server-only";
import { createContext } from "../../../../../packages/rpc/src/context";
import { appRouter } from "../../../../../packages/rpc/src/routers/index";

const { env: cloudflareEnv } = await getCloudflareContext({ async: true });

globalThis.$client = createRouterClient(appRouter, {
  context: async () => {
    const ctx = await createContext({ headers: await headers(), cloudflareEnv });
    return ctx;
  },
});
