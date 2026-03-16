import { checkout, polar, webhooks } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import { env } from "../env";

const polarClient = new Polar({
  accessToken: env().POLAR_ACCESS_TOKEN,
  /**
   * @see https://polar.sh/docs/integrate/sandbox
   */
  server: env().POLAR_ENVIRONMENT,
});

type PolarOptions = Parameters<typeof polar>[0];

export const polarOptions = {
  client: polarClient,
  createCustomerOnSignUp: true,
  use: [
    checkout(),
    /**
     * @see https://polar.sh/docs/integrate/webhooks/endpoints
     */
    webhooks({
      secret: env().POLAR_WEBHOOK_SECRET,
    }),
  ],
} satisfies PolarOptions;
