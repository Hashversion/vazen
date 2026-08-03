import * as Sentry from "@sentry/nextjs";
import { initializeAnalytics } from "@repo/analytics";
import { initSentry } from "@repo/telemetry/sentry/client";

initializeAnalytics();
initSentry();

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
