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

export function limitRequest(
  namespace: string,
  identifier: string,
  options: RateLimitOptions
) {
  return rateLimit(namespace, options).limit(identifier);
}

export const ratelimit = {
  newsletter: rateLimit("newsletter", {
    limit: 3,
    window: "1 h",
  }),
};

export const { fixedWindow, slidingWindow, tokenBucket } = Ratelimit;
