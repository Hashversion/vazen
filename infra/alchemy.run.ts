import * as Alchemy from "alchemy";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

// Local file state until the first provider + resource is added.
export default Alchemy.Stack(
  "vazen",
  {
    providers: Layer.empty,
    state: Alchemy.localState(),
  },
  Effect.succeed({})
);
