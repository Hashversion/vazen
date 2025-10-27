import { o } from "@/orpc";
import { waitlistSchema } from "@/schema/forms";
import { count } from "drizzle-orm";
import { z } from "zod";
import { waitlist } from "@repo/db/schema";

export const earlyAccessRouter = {
  getWaitlistCount: o
    .route({
      method: "GET",
      path: "/waitlist",
      summary: "",
      tags: [],
    })
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

  joinWaitlist: o
    .route({
      method: "POST",
      path: "/waitlist",
      summary: "",
      tags: [],
    })
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
