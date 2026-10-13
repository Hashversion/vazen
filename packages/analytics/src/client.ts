import posthog from "posthog-js";

import { ENV } from "#env";

export const initializeAnalytics = () => {
  posthog.init(ENV.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: ENV.NEXT_PUBLIC_POSTHOG_HOST,
    ui_host: "https://us.posthog.com",
    defaults: "2025-05-24",
  });
};
