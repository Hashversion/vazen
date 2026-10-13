import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import type { AppRouterClient } from "@repo/rpc/contract";

declare global {
  var $client: AppRouterClient | undefined;
}

const link = new RPCLink({
  // `origin` is omitted so the browser's current origin is used.
  url: "/api/rpc",
});

/**
 * Fallback to client-side client if server-side client is not available.
 */
export const client: AppRouterClient =
  globalThis.$client ?? createORPCClient(link);
export const orpc = createTanstackQueryUtils(client);
