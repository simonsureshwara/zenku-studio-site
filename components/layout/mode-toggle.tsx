"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Farbmodus umschalten"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 text-zinc-900 shadow-sm backdrop-blur transition hover:scale-105 dark:border-white/15 dark:bg-white/10 dark:text-zinc-50"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
