import { os } from "@orpc/server";
import { z } from "zod";

export const base = os.$context<{ headers: Headers }>().errors({
  RATE_LIMITED: {
    message: "You're being rate limited.",
    data: z.object({
      retryAfter: z.number(),
    }),
  },
  INTERNAL_SERVER_ERROR: {
    message: "Internal Server Error.",
  },
});
