"use client";

import { ClientSideOptionsProvider } from "@c15t/nextjs/client";
import { usePostHog } from "@repo/analytics/posthog";

export function ConsentManagerClient({ children }: { children: React.ReactNode }) {
  const posthog = usePostHog();

  return (
    <ClientSideOptionsProvider
      callbacks={{
        onConsentSet({ preferences }) {
          if (preferences.measurement) {
            posthog.opt_in_capturing();
          } else {
            posthog.opt_out_capturing();
          }
        },
        onError(error) {
          console.error("Consent error:", error);
        },
      }}
    >
      {children}
    </ClientSideOptionsProvider>
  );
}
