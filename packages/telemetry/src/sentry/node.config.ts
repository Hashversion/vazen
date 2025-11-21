import * as Sentry from "@sentry/nextjs";
import { env } from "#env";

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
    dsn: env().SENTRY_DSN,
    tracesSampleRate: 1,
    debug: false,
    integrations: [Sentry.consoleLoggingIntegration({ levels: ["log", "error", "warn"] })],
  });
