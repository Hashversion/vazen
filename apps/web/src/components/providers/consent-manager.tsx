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
      }}
    >
      <CookieBanner
        theme={{
          "banner.overlay": "!bg-black/30",
          "banner.root": "!font-geist",
          "banner.footer.accept-button": "!rounded-full",
          "banner.footer.reject-button": "!rounded-full",
          "banner.footer.customize-button": "!rounded-full",
        }}
        scrollLock={true}
        trapFocus={true}
      />
      <ConsentManagerDialog
        theme={{
          "dialog.root": "!font-geist",
          "dialog.footer": "!hidden",
          "widget.accordion.item": "!rounded-full",
          "widget.footer.reject-button": "!rounded-full",
          "widget.footer.accept-button": "!rounded-full",
          "widget.footer.save-button": "!rounded-full",
        }}
      />
      <ConsentManagerClient>{children}</ConsentManagerClient>
    </ConsentManagerProvider>
  );
}
