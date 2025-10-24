import "server-only";
import { headers } from "next/headers";
import { createORPCContext } from "@/orpc";
import { router } from "@/orpc/root";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createRouterClient } from "@orpc/server";

const { env: CloudflareEnv } = await getCloudflareContext({ async: true });
globalThis.$client = createRouterClient(router, {
  context: async () => {
    const ctx = await createORPCContext({ headers: await headers(), CloudflareEnv: CloudflareEnv });
    return ctx;
  },
});
