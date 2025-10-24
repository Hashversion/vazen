import "server-only";
import { earlyAccessRouter } from "./routers/early-access";

export const router = {
  earlyAccess: earlyAccessRouter,
};
