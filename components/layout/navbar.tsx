"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

const links = [
  ["/", "Start"],
  ["/projects", "Projekte"],
  ["/services", "Leistungen"],
  ["/pricing", "Preise"],
  ["/about", "Über uns"],
  ["/contact", "Kontakt"],
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(980px,calc(100%-1.5rem))]">
      <div className="mx-auto flex items-center justify-between rounded-full border border-black/10 bg-white/75 px-4 py-2 shadow-lg shadow-black/10 backdrop-blur-xl dark:border-white/15 dark:bg-black/45 dark:shadow-black/40">
        <Link href="/" className="font-semibold tracking-tight">
          Zenku Studio
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white",
                pathname === href && "bg-black text-white dark:bg-white dark:text-black",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-violet-500/25"
          >
            Call buchen
          </Link>
        </div>
      </div>
    </header>
  );
}
