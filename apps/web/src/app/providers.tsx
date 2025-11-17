"use client";

import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@repo/ui";
import { createQueryClient } from "@/lib/query/client";
import { ConsentManagementProvider } from "@/components/providers/consent-manager";

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <ThemeProvider>
      <ConsentManagementProvider>
        <QueryClientProvider client={queryClient}>
          {props.children}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ConsentManagementProvider>
    </ThemeProvider>
  );
}
