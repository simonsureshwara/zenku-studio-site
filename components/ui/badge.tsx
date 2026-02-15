"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "solid" | "soft" | "success" | "warning" | "danger" | "info";

const styles: Record<BadgeVariant, string> = {
  solid: "bg-[var(--brand-600)] text-white",
  soft: "bg-[color-mix(in_oklab,var(--brand-600)_18%,transparent)] text-[var(--brand-300)]",
  success: "bg-[var(--success-soft)] text-[var(--success-text)]",
  warning: "bg-[var(--warning-soft)] text-[var(--warning-text)]",
  danger: "bg-[var(--danger-soft)] text-[var(--danger-text)]",
  info: "bg-[var(--info-soft)] text-[var(--info-text)]",
};

export function Badge({
  className,
  variant = "soft",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium leading-[1.2] tracking-[0.01em]",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
