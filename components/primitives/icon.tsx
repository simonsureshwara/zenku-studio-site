import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconSize = "sm" | "md" | "lg";

const sizeClass: Record<IconSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function Icon({
  icon: IconComponent,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: IconSize;
  className?: string;
}) {
  return <IconComponent className={cn(sizeClass[size], className)} strokeWidth={1.9} aria-hidden="true" />;
}

