import type { JSX } from "react";

export function StackPill({
  icon,
  stackName,
}: {
  stackName: string;
  icon: JSX.Element;
}) {
  return (
    <div className="bg-muted flex w-fit items-center justify-center gap-3 rounded-[24px] px-3 py-2 [corner-shape:squircle]">
      {icon}
      {stackName}
    </div>
  );
}
