import "server-only";
import { headers } from "next/headers";
import { createORPCContext } from "@/orpc";
import { router } from "@/orpc/root";
import { createRouterClient } from "@orpc/server";

globalThis.$client = createRouterClient(router, {
  context: async () => {
    const ctx = await createORPCContext({ headers: await headers() });
    return ctx;
  },
});
