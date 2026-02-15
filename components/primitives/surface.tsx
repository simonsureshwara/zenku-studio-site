import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SurfaceVariant = "card" | "panel" | "glass" | "recessed";

const variantClass: Record<SurfaceVariant, string> = {
  card: "bg-surface border border-default shadow-depth-1",
  panel:
    "bg-[linear-gradient(to_bottom,var(--surface-2),var(--surface))] border border-default shadow-depth-2",
  glass: "glass",
  recessed: "bg-surface-2 border border-default shadow-recessed",
};

export function Surface({
  variant = "card",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { variant?: SurfaceVariant }) {
  return <div className={cn("rounded-[var(--radius-card)]", variantClass[variant], className)} {...props} />;
}

