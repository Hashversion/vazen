import { Button as ButtonPrimitive } from "@base-ui/react/button";

import type { VariantProps } from "../lib/utils";
import { cn, cva } from "../lib/utils";

const buttonVariants = cva(
  cn(
    "group/button inline-flex items-center justify-center",
    "shrink-0",
    "rounded-4xl border border-transparent",
    "bg-clip-padding",
    "text-sm whitespace-nowrap",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 select-none",
    "outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40"
  ),
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-3 py-3",
        icon: "size-9",
        "icon-lg": "size-10",
        "icon-sm": "size-8",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
      },
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        destructive:
          "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        outline:
          "border-border bg-input/30 hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
      },
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ className, size, variant }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
