import { Ratelimit } from "@upstash/ratelimit";
import type { RatelimitConfig } from "@upstash/ratelimit";

import { redis } from "./client";
import { RATE_LIMIT_PREFIX } from "./prefix";

export const createRateLimiter = (props: Omit<RatelimitConfig, "redis">) =>
  new Ratelimit({
    redis,
    limiter: props.limiter ?? Ratelimit.slidingWindow(10, "10 s"),
    prefix: props.prefix ?? RATE_LIMIT_PREFIX,
  });

export const { slidingWindow } = Ratelimit;
