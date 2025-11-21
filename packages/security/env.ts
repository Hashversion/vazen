import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = () => {
  return createEnv({
    client: {
      NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT: z.url(),
    },
    runtimeEnv: {
      NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT: process.env.NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT,
    },
  });
};
