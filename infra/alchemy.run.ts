import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Alchemy from "alchemy";
import * as Effect from "effect/Effect";

export default Alchemy.Stack(
  "vazen",
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state({ name: "vazen" }),
  },
  Effect.succeed({})
);
