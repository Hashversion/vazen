import { passkey } from "@better-auth/passkey";
import { polar } from "@polar-sh/better-auth";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, magicLink } from "better-auth/plugins";
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
    baseURL: {
      allowedHosts: [
        "localhost:3000", // Local development
        "*.workers.dev", // cloudflare workers
        "web.vazen.dev", // Production,
      ],
    },
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
      ipAddress: {
        ipAddressHeaders: ["cf-connecting-ip", "x-forwarded-for"],
      },
    },
  });
};

export type Session = ReturnType<typeof auth>["$Infer"]["Session"];
export type User = Session["user"];
