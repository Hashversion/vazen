import type { SecondaryStorage } from "better-auth/db";
import type { CloudflareEnv } from "./server";

export function secondaryStorage(cloudflareEnv: CloudflareEnv): SecondaryStorage | undefined {
  if (!cloudflareEnv.AUTH_CACHE) return undefined;

  const { get: KV_GET, put: KV_SET, delete: KV_DELETE } = cloudflareEnv.AUTH_CACHE;

  return {
    get: async (key) => {
      const value = (await KV_GET<string | null>(key)) ?? null;

      if (typeof value === "string") {
        return value;
      }

      return value ? JSON.stringify(value) : null;
    },

    set: async (key, value, ttl) => {
      if (ttl) {
        await KV_SET(key, value, { expiration: ttl });
      } else {
        await KV_SET(key, value);
      }
    },

    delete: async (key) => {
      await KV_DELETE(key);
    },
  };
}
