import { cache } from "react";
import { headers } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { auth } from "@repo/auth/server";

export const getServerSession = cache(async () => {
  const { env } = getCloudflareContext();
  const session = await auth(env).api.getSession({
    headers: await headers(),
  });
  return session;
});
