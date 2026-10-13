import * as Sentry from "@sentry/nextjs";

import { ENV } from "#env";

/**
 *
 * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/
 *
 * - This file configures the initialization of Sentry on the server.
 * - The config you add here will be used whenever the server handles a request.
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
  });
