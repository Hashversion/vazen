// What :: Vercel project config for the web app; the Vercel project's Root Directory is apps/web.
// Why :: Keep the deploy shape in git instead of the dashboard, so `vercel build` in CI stays reproducible.
// How :: Pin the Next.js preset, install from the pnpm workspace root, and build through turbo so the remote cache applies.
// Note :: Middleware and headers stay app-side (proxy.ts) — do not mirror them here.

import type { VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  framework: "nextjs",
  installCommand: "pnpm install --frozen-lockfile",
  buildCommand: "cd ../.. && turbo run build --filter=web",
};
