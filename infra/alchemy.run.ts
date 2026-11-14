import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Infisical from "@alchemy.run/infisical";
import * as Alchemy from "alchemy";
import * as Effect from "effect/Effect";

const environments: Record<string, string> = {
  production: "production",
  staging: "staging",
};

export default Alchemy.Stack(
  "vazen",
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state({ workerName: "vazen-state" }),
    secrets: ({ stage }) =>
      Infisical.Secrets({
        project: "vazen",
        environment: environments[stage] ?? "development",
        path: "/infra",
      }),
  },
  Effect.succeed({})
);
