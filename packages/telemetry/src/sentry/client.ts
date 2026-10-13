import * as Sentry from "@sentry/nextjs";

import { ENV } from "#env";

/**
 *
 * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/
 *
 * - This file configures the initialization of Sentry on the client.
 * - The config you add here will be used whenever a users loads a page in their browser.
 *
 */

export const initSentry = (): ReturnType<typeof Sentry.init> =>
  Sentry.init({
    dsn: ENV.NEXT_PUBLIC_SENTRY_DSN,
    environment: ENV.APP_ENV,
    enabled: ENV.APP_ENV === "production",
    tracesSampleRate: 0.1,
    enableLogs: true,
    debug: false,
    // 10% of sessions
    replaysSessionSampleRate: 0.1,
    // 100% of sessions with errors
    replaysOnErrorSampleRate: 1,
  });
