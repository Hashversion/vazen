import { createFlag } from "../lib/create-flag";

export const bannerFlag = createFlag({ key: "enable_banner_flag" });

// What :: precomputed together by the app proxy, which rewrites to /{code}
export const rootFlags = [bannerFlag];
