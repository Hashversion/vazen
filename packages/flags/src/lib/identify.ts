import type { StatsigUser } from "@flags-sdk/statsig";
import type { Identify } from "flags";
import { dedupe } from "flags/next";

import { getStableId } from "./stable-id";

const getDeploymentEnv = () => {
  const env = process.env.VERCEL_ENV;

  if (env === "production") {
    return "production";
  }

  if (env === "preview") {
    return "staging";
  }

  return "development";
};

export const identify = dedupe(async () => {
  const stableId = await getStableId();

  return {
    userID: stableId.value,
    statsigEnvironment: {
      tier: getDeploymentEnv(),
    },
  };
}) satisfies Identify<StatsigUser>;
