"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { useState } from "react";

import { createQueryClient } from "@/lib/query/client";

export function Providers(props: { children: React.ReactNode }) {
  // oxlint-disable-next-line react/hook-use-state
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>{props.children}</NuqsAdapter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
