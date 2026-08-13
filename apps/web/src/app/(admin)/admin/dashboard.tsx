"use client";
import type { authClient } from "@repo/auth/client";
import { useQuery } from "@tanstack/react-query";

import { orpc } from "@/lib/orpc/client";

export default function Dashboard({
  session,
}: {
  session: typeof authClient.$Infer.Session;
}) {
  const privateData = useQuery(orpc.privateData.queryOptions());

  return (
    <>
      <p>API: {privateData.data?.message}</p>
      <p>{session.user.name}</p>
    </>
  );
}
