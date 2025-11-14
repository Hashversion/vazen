import { headers } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createRouterClient } from "@orpc/server";
import { createContext } from "@repo/api/orpc";
import { router } from "@repo/api/router";
import "server-only";

const { env: cloudflareEnv } = await getCloudflareContext({ async: true });
globalThis.$client = createRouterClient(router, {
  context: async () => {
    const ctx = await createContext({ headers: await headers(), cloudflareEnv });
    return ctx;
  },
});
