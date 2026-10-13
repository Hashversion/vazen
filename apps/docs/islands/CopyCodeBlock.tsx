import { useState } from "react";

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Copy</title>
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Copied</title>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function CopyCodeBlock({
  value,
  prefix = "$",
}: {
  value: string;
  prefix?: string;
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
        {copied ? <CheckIcon /> : <CopyIcon />}
      </span>
    </button>
  );
}
