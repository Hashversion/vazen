import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "@/lib/utils";
import { cn, cva } from "@/lib/utils";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap",
    "rounded-full text-sm font-medium transition-all outline-none cursor-pointer",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:ring-science-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black focus-visible:ring-offset-neutral-100 focus-visible:ring-2",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
  ),
  {
    variants: {
      variant: {
        default:
          "dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-100/90 bg-black text-neutral-100 hover:bg-black/90",
        outline: "border bg-black hover:bg-neutral-950 hover:text-neutral-100",
        link: "text-neutral-100 underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return <Comp className={cn(buttonVariants({ variant, size, className }))} data-slot="button" {...props} />;
}

export { Button, buttonVariants };
