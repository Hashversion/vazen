import { auth } from "@repo/auth/server";
import { getDb } from "@repo/db";

interface CloudflareEnv {
  HYPERDRIVE: Hyperdrive;
  AUTH_CACHE: KVNamespace;
}

export async function createORPCContext(options: { headers: Headers; cloudflareEnv: CloudflareEnv }) {
  const session = await auth(options.cloudflareEnv).api.getSession({ headers: options.headers });

  return {
    db: getDb(options.cloudflareEnv),
    session: session?.session,
    user: session?.user,
    ...options,
  };
}

export type ORPCContext = Awaited<ReturnType<typeof createORPCContext>>;
export const createContext = createORPCContext;
