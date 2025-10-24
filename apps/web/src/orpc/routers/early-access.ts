import { o } from "@/orpc";
import { z } from "zod";
import { waitlistSchema } from "@/schema/forms";

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
    .handler(async ({ context }) => {
      console.log(context.headers);
      //TODO :: get waitlist count from the db

      return { count: 100 };
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
