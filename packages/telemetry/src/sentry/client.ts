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
    debug: false,
    // Preserve v10 default collection (sendDefaultPii unset). v11 collects
    // everything by default, so pin the restrictive baseline explicitly.
    dataCollection: {
      userInfo: false,
      cookies: false,
      httpHeaders: {
        request: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
        response: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
      },
      httpBodies: [],
      urlQueryParams: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
      genAI: { inputs: false, outputs: false },
      databaseQueryData: false,
      graphQL: { document: false, variables: false },
    },
    // 10% of sessions
    replaysSessionSampleRate: 0.1,
    // 100% of sessions with errors
    replaysOnErrorSampleRate: 1,
  });
