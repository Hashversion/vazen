"use client";

import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/lib/orpc.client";

export function WaitlistCount() {
  const { data, isError, isLoading } = useQuery(orpc.earlyAccess.getWaitlistCount.queryOptions());

  return (
    <div>
      {isLoading && <p>loading....</p>}
      {isError && <p>Something went wrong</p>}
      {data?.count}
    </div>
  );
}
