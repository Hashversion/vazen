import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  cacheComponents: true,
  typedRoutes: true,

  async rewrites() {
    return [
      // posthog proxy
      {
        source: "/_proxy/posthog/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/_proxy/posthog/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

initOpenNextCloudflareForDev();
export default nextConfig;
