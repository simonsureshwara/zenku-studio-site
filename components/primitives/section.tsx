import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionTone = "default" | "surface" | "glass";

const toneClass: Record<SectionTone, string> = {
  default: "",
  surface: "bg-surface rounded-[var(--radius-card)] border border-default shadow-depth-1",
  glass: "glass rounded-[var(--radius-card)] shadow-depth-1",
};

export function Section({
  tone = "default",
  fullHeight = false,
  className,
  ...props
}: HTMLAttributes<HTMLElement> & { tone?: SectionTone; fullHeight?: boolean }) {
  return (
    <section
      className={cn(fullHeight ? "min-h-screen min-h-[100svh]" : "", "py-8 md:py-12", toneClass[tone], className)}
      {...props}
    />
  );
}

