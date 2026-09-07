import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-surface hover:bg-white/90",
        secondary:
          "bg-white/90 text-surface hover:bg-white",
        ghost:
          "border border-white/[0.09] bg-white/[0.03] text-white/90 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
      },
      size: {
        sm: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm"
    }
  }
);

export { buttonVariants };

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
