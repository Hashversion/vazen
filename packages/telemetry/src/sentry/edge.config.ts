import * as Sentry from "@sentry/nextjs";

import { env } from "#env";

/**
 *
 * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/
 *
 * - This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
 * - The config you add here will be used whenever one of the edge features is loaded.
 * - Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
 *
 */

export const initSentry = (): ReturnType<typeof Sentry.init> =>
  Sentry.init({
    dsn: env().NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    enabled: process.env.NODE_ENV === "production",
    tracesSampleRate: 0.1,
    enableLogs: true,
    debug: false,
  });
