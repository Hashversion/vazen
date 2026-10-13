import { redis } from "@repo/redis";
import type { SecondaryStorage } from "better-auth";

export const AUTH_PREFIX = "auth";

export function prefixRedisKey(prefix: string, key: string) {
  return `${prefix}:${key}`;
}

export const secondaryStorage: SecondaryStorage = {
  get(key) {
    return redis.get(prefixRedisKey(AUTH_PREFIX, key));
  },

  getAndDelete(key) {
    return redis.getdel(prefixRedisKey(AUTH_PREFIX, key));
  },

  async increment(key, ttl) {
    if (!Number.isInteger(ttl) || ttl <= 0) {
      throw new TypeError("Redis increment TTL must be a positive integer");
    }

    const storageKey = prefixRedisKey(AUTH_PREFIX, key);
    const [value] = await redis
      .multi()
      .incr(storageKey)
      .expire(storageKey, ttl, "NX")
      .exec();

    return value;
  },

  async set(key, value, ttl) {
    const storageKey = prefixRedisKey(AUTH_PREFIX, key);

    // oxlint-disable-next-line unicorn/prefer-ternary
    if (ttl) {
      await redis.set(storageKey, value, { ex: ttl });
    } else {
      await redis.set(storageKey, value);
    }
  },

  async delete(key) {
    await redis.del(prefixRedisKey(AUTH_PREFIX, key));
  },
};
