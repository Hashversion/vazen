import { securityHeadersMiddleware, securityHeadersOptions } from "@repo/security/security-headers";

const securityHeaders = securityHeadersMiddleware(securityHeadersOptions);

/**
 *
 *  ### Best practises
 *  @see https://vercel.com/blog/postmortem-on-next-js-middleware-bypass
 *  - strictly do not use proxy for auth, do auth things it in data access layer
 *  - use proxy.ts as just routing infrastructure
 *
 */
export default function proxy() {
  return securityHeaders();
}
