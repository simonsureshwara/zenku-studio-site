import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ClusterGap = "tight" | "base" | "sep";

const gapClass: Record<ClusterGap, string> = {
  tight: "gap-2",
  base: "gap-4",
  sep: "gap-6",
};

export function Cluster({
  gap = "base",
  align = "center",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { gap?: ClusterGap; align?: "start" | "center" | "end" }) {
  const alignClass = align === "start" ? "items-start" : align === "end" ? "items-end" : "items-center";
  return <div className={cn("flex flex-wrap", alignClass, gapClass[gap], className)} {...props} />;
}

