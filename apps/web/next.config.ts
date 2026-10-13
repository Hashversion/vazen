import bundleAnalyzer from "@next/bundle-analyzer";
import { withSentry } from "@repo/telemetry/sentry/with-sentry";
import { varlockNextConfigPlugin } from "@varlock/nextjs-integration/plugin";
import type { NextConfig } from "next";

import { ENV } from "./env";

const withVarlock = varlockNextConfigPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  poweredByHeader: false,
  typedRoutes: true,
  cacheComponents: true,
  partialPrefetching: true,
  compress: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
    browserToTerminal: true,
  },
  transpilePackages: ["@repo/ui"],
  allowedDevOrigins: ["local.web.vazen.id", "*.local.web.vazen.id"],
};

const bundleAnalyzerPlugin = bundleAnalyzer({
  enabled: ENV.ANALYZE,
});

export default withVarlock(withSentry(bundleAnalyzerPlugin(nextConfig)));
