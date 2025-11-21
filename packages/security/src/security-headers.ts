import { defaults } from "@nosecone/next";
import type { Options as NoseconeOptions } from "@nosecone/next";
import { env } from "../env";

const isDev = process.env.NODE_ENV === "development";

/**
 *  ### Resources
 * - nosecone - https://docs.arcjet.com/nosecone/quick-start
 * - posthog - https://posthog.com/docs/advanced/content-security-policy
 */
export const securityHeadersOptions: NoseconeOptions = {
  ...defaults,
  contentSecurityPolicy: {
    ...defaults.contentSecurityPolicy,
    directives: {
      ...defaults.contentSecurityPolicy.directives,
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        ...(isDev ? (["'unsafe-eval'"] as const) : []),
        "https://*.posthog.com",
      ],
      connectSrc: [
        ...defaults.contentSecurityPolicy.directives.connectSrc,
        "https://*.posthog.com",
        "https://*.sentry.io",
      ],
      workerSrc: [...defaults.contentSecurityPolicy.directives.workerSrc, "blob:", "data:"],
      imgSrc: [...defaults.contentSecurityPolicy.directives.imgSrc, "https://*.posthog.com"],
      styleSrc: [...defaults.contentSecurityPolicy.directives.styleSrc, "https://*.posthog.com"],
      fontSrc: [...defaults.contentSecurityPolicy.directives.fontSrc, "https://*.posthog.com"],
      mediaSrc: [...defaults.contentSecurityPolicy.directives.mediaSrc, "https://*.posthog.com"],
      frameAncestors: ["'self'", "https://*.posthog.com"],
      upgradeInsecureRequests: !isDev,
      reportUri: [env().NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT],
    },
  },
  crossOriginEmbedderPolicy: { policy: "credentialless" },
};

export { createMiddleware as securityHeadersMiddleware } from "@nosecone/next";
