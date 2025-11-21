import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = () => {
  return createEnv({
    client: {
      NEXT_PUBLIC_SENTRY_DSN: z.url(),
    },
    server: {
      SENTRY_ORG: z.string(),
      SENTRY_PROJECT: z.string(),
      SENTRY_DSN: z.url(),
    },
    runtimeEnv: {
      SENTRY_ORG: process.env.SENTRY_ORG,
      SENTRY_PROJECT: process.env.SENTRY_PROJECT,
      NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
      SENTRY_DSN: process.env.SENTRY_DSN,
    },
  });
};
