import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Alchemy from "alchemy";
import * as Effect from "effect/Effect";

export default Alchemy.Stack(
  "ci",
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state({ workerName: "vazen-state" }),
  },
  Effect.gen(function* main() {
    const { accountId } = yield* yield* Cloudflare.CloudflareEnvironment;

    const apiToken = yield* Cloudflare.ApiToken.AccountApiToken("CIToken", {
      accountId,
      policies: [
        {
          effect: "allow",
          permissionGroups: [
            "Secrets Store Write",
            "Secrets Store Read",
            "Workers Scripts Write",
            "Workers Scripts Read",
            "Workers KV Storage Write",
            "Workers KV Storage Read",
            "Workers R2 Storage Write",
            "Workers R2 Storage Read",
            "Account Settings Write",
            "Account Settings Read",
            "Workers Tail Read",
          ],
          resources: {
            [`com.cloudflare.api.account.${accountId}`]: "*",
          },
        },
      ],
    });

    yield* Effect.log(
      "Minted CI token; value is in state (read with: alchemy state read --config stacks/ci.ts --profile admin)"
    );
    return { accountId, tokenId: apiToken.tokenId, value: apiToken.value };
  })
);
