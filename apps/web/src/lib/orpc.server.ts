import "server-only";

import { headers } from "next/headers";
import { createRouterClient } from "@orpc/server";
import { router } from "@/orpc/root";
import { createORPCContext } from "@/orpc";

globalThis.$client = createRouterClient(router, {
  context: async () => {
    const ctx = await createORPCContext({ headers: await headers() });
    return ctx;
  },
});
