import { generatePermutations } from "@repo/flags";
import { bannerFlag, rootFlags } from "@repo/flags/feature";
import { Button } from "@repo/ui/components/button";
import { notFound } from "next/navigation";

import APIHealth from "@/components/api-health";

// Why :: cacheComponents rejects an empty generateStaticParams
export async function generateStaticParams() {
  const codes = await generatePermutations(rootFlags);

  return codes.map((code) => ({ code }));
}

type Params = Promise<{ code: string }>;

// Why :: the code decides the shell, so no shared App Shell exists to prefetch
export const instant = false;

export default async function Page({ params }: { params: Params }) {
  "use cache";

  const { code } = await params;

  let isBannerEnabled: boolean;

  try {
    isBannerEnabled = await bannerFlag(code, rootFlags);
  } catch {
    // Why :: unlisted codes (direct visits) fail signature verification
    notFound();
  }

  return (
    <>
      {isBannerEnabled && (
        <div className="bg-black py-1 text-center text-sm text-white">
          <p>
            Banner enabled by feature flag: <code>enable_banner_flag</code>
          </p>
        </div>
      )}
      <div className="flex p-6">
        <div className="flex flex-col gap-4 text-sm">
          <div className="space-y-2">
            <h1 className="font-asul text-3xl font-medium">Vazen</h1>
            <p className="max-w-xs min-w-0">
              The production-grade starter kit for modern full-stack
              applications
            </p>
            <div className="flex items-center gap-3">
              <Button size="sm">Button</Button>
              <APIHealth />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
