import { checkout, polar, webhooks } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import { env } from "../env";

const polarClient = new Polar({
  accessToken: env().POLAR_ACCESS_TOKEN,
  /**
   * @see https://polar.sh/docs/integrate/sandbox
   */
  server: "sandbox",
});

type PolarOptions = Parameters<typeof polar>[0];

/**
 *
 * - Polar Better Auth plugin configuration.
 * - This object is used to configure the `polar` plugin inside `better-auth`.
 *
 * @see https://polar.sh/docs/integrate/sdk/adapters/better-auth#polar-plugin-configuration-options
 * @type {PolarOptions} polar plugin configuration type extracted from the better-auth plugin
 */
export const polarOptions: PolarOptions = {
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
};
