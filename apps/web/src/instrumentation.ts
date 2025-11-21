// import * as Sentry from "@sentry/nextjs";
// import { initSentry } from "@repo/telemetry/sentry/server";

export async function register() {
  // Conditionally import if facing runtime compatibility issues
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("@/lib/orpc.server");
  }

  // initSentry();
}

// export const onRequestError = Sentry.captureRequestError;
