import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type StackSpace = "tight" | "base" | "sep" | "block";

const spaceClass: Record<StackSpace, string> = {
  tight: "space-y-2",
  base: "space-y-4",
  sep: "space-y-6",
  block: "space-y-8",
};

export function Stack({
  space = "base",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { space?: StackSpace }) {
  return <div className={cn("flex flex-col", spaceClass[space], className)} {...props} />;
}

