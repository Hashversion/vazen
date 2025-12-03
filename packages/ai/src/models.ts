import { createWorkersAI } from "workers-ai-provider";

export interface CloudflareEnv {
  AI: Ai;
}

export function createAI(cloudflareEnv: CloudflareEnv) {
  return createWorkersAI({
    binding: cloudflareEnv.AI,
  });
}
