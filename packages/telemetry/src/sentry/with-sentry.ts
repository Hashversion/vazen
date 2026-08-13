import { withSentryConfig } from "@sentry/nextjs";

import { env } from "#env";

export const sentryConfig: Parameters<typeof withSentryConfig>[1] = {
  org: env().SENTRY_ORG,
  project: env().SENTRY_PROJECT,
  telemetry: false,
  silent: !process.env.CI,
  widenClientFileUpload: true,
};

/**
 * wraps the next.js config with sentry configuration.
 */
export const withSentry = (nextConfig: object): object => {
  const config = {
    ...nextConfig,
    transpilePackages: ["@sentry/nextjs"],
  };

  return withSentryConfig(config, sentryConfig);
};
