import { polarClient } from "@polar-sh/better-auth";
import { adminClient, magicLinkClient, passkeyClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  plugins: [adminClient(), magicLinkClient(), passkeyClient(), polarClient()],
});

export type Session = typeof authClient.$Infer.Session;
