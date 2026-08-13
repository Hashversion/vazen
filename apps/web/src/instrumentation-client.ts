import { initializeAnalytics } from "@repo/analytics";
import { initSentry } from "@repo/telemetry/sentry/client";
import * as Sentry from "@sentry/nextjs";

initializeAnalytics();
initSentry();

// oxlint-disable-next-line import/namespace
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
