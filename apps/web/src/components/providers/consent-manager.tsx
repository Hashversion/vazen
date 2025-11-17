import { ConsentManagerDialog, ConsentManagerProvider, CookieBanner } from "@c15t/nextjs";
import type { ReactNode } from "react";
import { ConsentManagerClient } from "./consent-manager.client";

export function ConsentManagementProvider({ children }: { children: ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary", "measurement"],
        ignoreGeoLocation: true, // Useful for development to always view the banner.
        legalLinks: {
          privacyPolicy: {
            href: "/privacy",
            label: "Privacy Policy",
          },
          termsOfService: {
            href: "/terms",
            label: "Terms of Service",
          },
        },
      }}
    >
      <CookieBanner
        theme={{
          "banner.overlay": "!bg-black/30",
          "banner.root": "!font-geist",
          "banner.card": "!rounded-none !border",
          "banner.footer.accept-button": "!rounded-none",
          "banner.footer.reject-button": "!rounded-none",
          "banner.footer.customize-button": "!rounded-none ",
        }}
        legalLinks={["privacyPolicy", "termsOfService"]}
        scrollLock={true}
        trapFocus={true}
      />
      <ConsentManagerDialog
        legalLinks={["privacyPolicy", "termsOfService"]}
        theme={{
          "dialog.root": "!rounded-none !font-geist",
          "dialog.footer": "!hidden",
          "widget.accordion.item": "!rounded-none",
          "widget.footer.reject-button": "!rounded-none",
          "widget.footer.accept-button": "!rounded-none",
          "widget.footer.save-button": "!rounded-none ",
        }}
      />
      <ConsentManagerClient>{children}</ConsentManagerClient>
    </ConsentManagerProvider>
  );
}
