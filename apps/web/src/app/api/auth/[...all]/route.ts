import { getCloudflareContext } from "@opennextjs/cloudflare";
import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@repo/auth/server";

const { env } = await getCloudflareContext({ async: true });

export const { POST, GET } = toNextJsHandler(auth(env).handler);
