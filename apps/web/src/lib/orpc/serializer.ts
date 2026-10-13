import { RPCJsonSerializer } from "@orpc/client";

export const serializer = new RPCJsonSerializer({
  // put custom handlers here, e.g. handlers: { ... }
});
