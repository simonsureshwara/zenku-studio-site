"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const isDark = isClient ? resolvedTheme !== "light" : false;
  const label = isClient
    ? isDark
      ? "Helles Design aktivieren"
      : "Dunkles Design aktivieren"
    : "Design umschalten";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "ui-transition focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-default bg-surface/85 text-muted shadow-depth-1 backdrop-blur-xl hover:bg-surface-2 hover:text-text",
        className,
      )}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
