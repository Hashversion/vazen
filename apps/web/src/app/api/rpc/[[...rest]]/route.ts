import { getCloudflareContext } from "@opennextjs/cloudflare";
import { RPCHandler } from "@orpc/server/fetch";
import { createContext } from "@repo/api/context";
import { appRouter } from "@repo/api/routers/index";

const handler = new RPCHandler(appRouter);

async function handleRequest(request: Request) {
  const { env: cloudflareEnv } = getCloudflareContext();
  const { response } = await handler.handle(request, {
    prefix: "/api/rpc",
    context: await createContext({ headers: request.headers, cloudflareEnv }),
  });

  return response ?? new Response("Not found", { status: 404 });
}

export const HEAD = handleRequest;
export const GET = handleRequest;
export const POST = handleRequest;
export const PUT = handleRequest;
export const PATCH = handleRequest;
export const DELETE = handleRequest;
