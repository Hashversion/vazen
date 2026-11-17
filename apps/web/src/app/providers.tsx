"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { useState } from "react";

import { createQueryClient } from "@/lib/query/client";

// Why :: ssr:false plus the dev gate — outside development the chunk is never fetched.
const Devtools = dynamic(
  async () => {
    const mod = await import("./devtools");
    return mod.Devtools;
  },
  { ssr: false }
);

export function Providers(props: { children: React.ReactNode }) {
  // oxlint-disable-next-line react/hook-use-state
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>{props.children}</NuqsAdapter>
      {process.env.NODE_ENV === "development" ? <Devtools /> : null}
    </QueryClientProvider>
  );
}
