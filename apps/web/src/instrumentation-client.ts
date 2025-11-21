// import * as Sentry from "@sentry/nextjs";

import { initializeAnalytics as initPostHog } from "@repo/analytics/posthog";

// import { initSentry } from "@repo/telemetry/sentry/client";

initPostHog();
// initSentry();

// export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
