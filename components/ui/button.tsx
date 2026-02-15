"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
type ButtonSize = "sm" | "md" | "lg";

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  const base =
    "ui-transition ui-elevate focus-ring inline-flex items-center justify-center rounded-full font-medium disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

  const sizes: Record<ButtonSize, string> = {
    sm: "min-h-11 px-3 py-2 text-sm leading-[1.2]",
    md: "min-h-11 px-4 py-2.5 text-base leading-[1.2]",
    lg: "min-h-11 px-6 py-3 text-lg leading-[1.2]",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "ui-shine text-white shadow-depth-2 bg-[linear-gradient(90deg,var(--brand-600),var(--accent-600))]",
    secondary:
      "bg-surface-2 border border-default text-text shadow-depth-1 hover:shadow-depth-2",
    ghost: "bg-transparent text-text hover:bg-surface-2",
    destructive:
      "text-white shadow-depth-2 bg-[linear-gradient(90deg,var(--danger-solid),color-mix(in_oklab,var(--danger-solid)_72%,black))]",
  };

  return cn(base, sizes[size], variants[variant], className);
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => {
    return <button ref={ref} type={type} className={buttonVariants({ variant, size, className })} {...props} />;
  },
);

Button.displayName = "Button";

export { Button };
