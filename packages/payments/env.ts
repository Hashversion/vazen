import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = () =>
  createEnv({
    server: {
      POLAR_ACCESS_TOKEN: z.string(),
      POLAR_WEBHOOK_SECRET: z.string(),
    },
    runtimeEnv: {
      POLAR_ACCESS_TOKEN: process.env.POLAR_ACCESS_TOKEN,
      POLAR_WEBHOOK_SECRET: process.env.POLAR_WEBHOOK_SECRET,
    },
  });
