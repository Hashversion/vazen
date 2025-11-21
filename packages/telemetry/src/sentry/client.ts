import * as Sentry from "@sentry/nextjs";
import { env } from "#env";

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
    dsn: env().NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    debug: false,
    integrations: [
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
      Sentry.consoleLoggingIntegration({ levels: ["log", "error", "warn"] }),
    ],
  });
