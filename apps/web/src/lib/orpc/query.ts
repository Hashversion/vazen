import { createTanstackQueryUtils } from "@orpc/tanstack-query";

import { client } from "./client";
import { serializer } from "./serializer";

export const orpc = createTanstackQueryUtils(client, { serializer });
