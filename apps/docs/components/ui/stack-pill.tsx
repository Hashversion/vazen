import type { JSX } from "react";

export function StackPill({
  icon,
  stackName,
}: {
  stackName: string;
  icon: JSX.Element;
}) {
  return (
    <div className="flex w-fit items-center justify-center gap-3 rounded-[24px] bg-neutral-200 px-3 py-2 [corner-shape:squircle] dark:bg-neutral-800">
      {icon}
      {stackName}
    </div>
  );
}
