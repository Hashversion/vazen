import { withSentryConfig } from "@sentry/nextjs/config";

import { ENV } from "#env";

export const sentryConfig: Parameters<typeof withSentryConfig>[1] = {
  org: ENV.SENTRY_ORG,
  project: ENV.SENTRY_PROJECT,
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
