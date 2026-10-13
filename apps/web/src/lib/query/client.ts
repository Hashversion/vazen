import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";

import { serializer } from "@/lib/orpc/serializer";

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        queryKeyHashFn(queryKey) {
          return JSON.stringify(serializer.serialize(queryKey));
        },
        // > 0 to prevent immediate refetching on mount
        staleTime: 60 * 1000,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
        serializeData(data) {
          return serializer.serialize(data);
        },
      },
      hydrate: {
        deserializeData(data) {
          return serializer.deserialize(data);
        },
      },
    },
  });
}
