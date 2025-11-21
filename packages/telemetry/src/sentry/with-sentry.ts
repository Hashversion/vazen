import { withSentryConfig } from "@sentry/nextjs";
import { env } from "#env";

export const sentryConfig: Parameters<typeof withSentryConfig>[1] = {
  org: env().SENTRY_ORG,
  project: env().SENTRY_PROJECT,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  /**
   *
   * - make the tunnel route as unpredictable as possbile to bypass any ad-blockers
   * - strictly do not use generic routes like, /monitoring or /error-monitoring
   * - use '/_proxy/yrtnes' where 'yrtnes' is 'sentry' in reverse :)
   *
   */
  tunnelRoute: "/_proxy/sentry",
  disableLogger: true,
  telemetry: false,
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
