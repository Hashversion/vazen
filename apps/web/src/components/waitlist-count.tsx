"use client";

import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/lib/orpc.client";

export function WaitlistCount() {
  const { data, isError, isLoading } = useQuery(orpc.earlyAccess.getWaitlistCount.queryOptions());

  return (
    <div>
      {isLoading && <p>loading....</p>}
      {isError && <p>failed to fetch waitlist count!</p>}
      {data?.count}
    </div>
  );
}
