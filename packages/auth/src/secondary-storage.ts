import { redis } from "@repo/redis";
import type { SecondaryStorage } from "better-auth";

export const AUTH_PREFIX = "auth";

export function prefixRedisKey(prefix: string, key: string) {
  return `${prefix}:${key}`;
}

export function secondaryStorage(): SecondaryStorage | undefined {
  if (!redis) {
    return undefined;
  }

  return {
    get: async (key) => {
      const storageKey = prefixRedisKey(AUTH_PREFIX, key);
      const value = (await redis.get<string | null>(storageKey)) ?? null;

      if (typeof value === "string") {
        return value;
      }

      return value ? JSON.stringify(value) : null;
    },
    set: async (key, value, ttl) => {
      const storageKey = prefixRedisKey(AUTH_PREFIX, key);

      // oxlint-disable-next-line unicorn/prefer-ternary
      if (ttl) {
        await redis.set(storageKey, value, { ex: ttl });
      } else {
        await redis.set(storageKey, value);
      }
    },
    delete: async (key) => {
      await redis.del(prefixRedisKey(AUTH_PREFIX, key));
    },
  };
}
