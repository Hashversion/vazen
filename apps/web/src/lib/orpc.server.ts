import { headers } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createRouterClient } from "@orpc/server";
import { createContext } from "@repo/api/context";
import { appRouter } from "@repo/api/routers/index";
import "server-only";

const { env: cloudflareEnv } = await getCloudflareContext({ async: true });

globalThis.$client = createRouterClient(appRouter, {
  context: async () => {
    const ctx = await createContext({ headers: await headers(), cloudflareEnv });
    return ctx;
  },
});
