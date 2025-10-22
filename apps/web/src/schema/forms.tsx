import z from "zod";

export const waitlistSchema = z.object({
  name: z.string(),
  email: z.email(),
});
