import posthog from "posthog-js";
import { env } from "../env";

export const initializeAnalytics = () => {
  posthog.init(env().NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env().NEXT_PUBLIC_POSTHOG_HOST,
    ui_host: "https://us.posthog.com",
    defaults: "2025-05-24",
    cookieless_mode: "on_reject",
  });
  posthog.has_opted_out_capturing(); // Avoids accidental tracking without consent till c15t has loaded
};

export { usePostHog } from "posthog-js/react";
