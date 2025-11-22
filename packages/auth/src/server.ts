import { polar } from "@polar-sh/better-auth";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, magicLink } from "better-auth/plugins";
import { passkey } from "better-auth/plugins/passkey";
import { getDb } from "@repo/db";
import { polarOptions } from "@repo/payments/polar";
import "server-only";
import { secondaryStorage } from "./secondary-storage";

export interface CloudflareEnv {
  HYPERDRIVE: Hyperdrive;
  AUTH_CACHE: KVNamespace;
}

export const auth = (cloudflareEnv: CloudflareEnv) => {
  const db = getDb(cloudflareEnv);

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "pg",
    }),

    secondaryStorage: secondaryStorage(cloudflareEnv),

    plugins: [
      admin(),
      magicLink({
        sendMagicLink: async () => {
          //TODO :: send magiclink email to user
        },
      }),
      passkey(),
      polar(polarOptions),
    ],

    advanced: {
      cookiePrefix: "vazen",
      useSecureCookies: true,
    },
  });
};

export type Session = ReturnType<typeof auth>["$Infer"]["Session"];
