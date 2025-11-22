import { count } from "drizzle-orm";
import { z } from "zod";
import { waitlist } from "@repo/db/schema";
import { publicProcedure } from "../orpc";
import { waitlistSchema } from "../schema/forms";

export const earlyAccessRouter = {
  getWaitlistCount: publicProcedure
    .input(z.void())
    .output(z.object({ count: z.number() }))
    .handler(async ({ context: ctx, errors }) => {
      const waitlistCount = await ctx.db.select({ count: count() }).from(waitlist);

      if (!waitlistCount[0]) {
        throw errors.INTERNAL_SERVER_ERROR;
      }

      return {
        count: waitlistCount[0].count,
      };
    }),

  joinWaitlist: publicProcedure
    .input(waitlistSchema)
    .output(z.object({ message: z.string(), email: z.email() }))
    .handler(async ({ input: { name, email } }) => {
      //TODO :: put the user email in the db

      return {
        message: "Yayy! you're on the waitlist",
        name,
        email,
      };
    }),
};
