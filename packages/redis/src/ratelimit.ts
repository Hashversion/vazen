import { Ratelimit } from "@upstash/ratelimit";
import type { Duration, RatelimitConfig } from "@upstash/ratelimit";

import { redis } from "./client";

export interface RateLimitOptions extends Omit<
  RatelimitConfig,
  "redis" | "limiter" | "prefix"
> {
  limit: number;
  window: Duration;
}

function resolveRateLimitConfig({
  limit,
  window,
  ...config
}: RateLimitOptions) {
  return {
    ...config,
    limiter: Ratelimit.slidingWindow(limit, window),
  };
}

export function rateLimit(namespace: string, options: RateLimitOptions) {
  return new Ratelimit({
    redis,
    prefix: namespace,
    ...resolveRateLimitConfig(options),
  });
}

export async function limitRequest(
  namespace: string,
  identifier: string,
  options: RateLimitOptions
) {
  return await rateLimit(namespace, options).limit(identifier);
}

export const ratelimit = {
  newsletter: rateLimit("newsletter", {
    limit: 3,
    window: "1 h",
  }),
};

export const fixedWindow = Ratelimit.fixedWindow.bind(Ratelimit);
export const slidingWindow = Ratelimit.slidingWindow.bind(Ratelimit);
export const tokenBucket = Ratelimit.tokenBucket.bind(Ratelimit);
