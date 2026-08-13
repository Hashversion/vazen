"use client";

import { useState } from "react";

import { Icons } from "@/components/ui/icons";

export function CopyCodeBlock({
  value,
  prefix = "$",
}: {
  value: string;
  copiedLabel?: string;
  copyLabel?: string;
  prefix?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group flex h-10 cursor-pointer items-center gap-3 rounded-xl bg-neutral-200 pr-3 pl-4 text-sm font-medium transition-all active:scale-[0.98] dark:bg-neutral-800"
    >
      <span className="text-muted-foreground font-mono select-none">
        {prefix}
      </span>
      <span className="font-commitmono text-[13px] text-balance text-neutral-900 dark:text-neutral-50">
        {value}
      </span>
      <span className="bg-accent flex size-6 items-center justify-center rounded-lg text-neutral-800 transition-colors group-hover:bg-neutral-300 dark:text-white dark:group-hover:bg-neutral-700">
        {copied ? <Icons.Check /> : <Icons.Copy />}
      </span>
    </button>
  );
}
