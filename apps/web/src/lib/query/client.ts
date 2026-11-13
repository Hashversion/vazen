import { createHydrationOptions } from "@orpc/tanstack-query";
import { QueryClient } from "@tanstack/react-query";

import { serializer } from "@/lib/orpc/serializer";

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // > 0 to prevent immediate refetching on mount
        staleTime: 60 * 1000,
      },
      // Why :: dehydrate/hydrate oRPC types (Date, Set, Map) across SSR boundary.
      ...createHydrationOptions(serializer),
    },
  });
}
