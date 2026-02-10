"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const router = useRouter();
  const [mobileMenuState, setMobileMenuState] = useState<"closed" | "open" | "closing">(
    "closed",
  );

  const isMobileMenuVisible = mobileMenuState !== "closed";
  const isMobileMenuOpen = mobileMenuState === "open";

  const openMobileMenu = () => setMobileMenuState("open");
  const closeMobileMenu = () => {
    setMobileMenuState((prev) => (prev === "closed" ? "closed" : "closing"));
    window.setTimeout(() => setMobileMenuState("closed"), 250);
  };

  const navigateFromMobileMenu = (href: string) => {
    closeMobileMenu();
    window.setTimeout(() => router.push(href), 250);
  };

  useEffect(() => {
    setMobileMenuState("closed");
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuVisible) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuVisible]);

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
                "relative px-3 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white",
                "after:absolute after:inset-x-3 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-fuchsia-500 after:via-cyan-400 after:to-lime-400 after:will-change-transform after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100",
                pathname === href && "text-zinc-950 after:scale-x-100 dark:text-white",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => (isMobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white md:hidden"
          >
            {isMobileMenuVisible ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-violet-500/25 md:inline-flex"
          >
            Call buchen
          </Link>
        </div>
      </div>

      {isMobileMenuVisible && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Menü schließen"
            onClick={closeMobileMenu}
            className={cn(
              "absolute inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-200 ease-in-out",
              mobileMenuState === "closing" ? "opacity-0" : "opacity-100",
            )}
          />
          <div
            className={cn(
              "relative mx-auto flex h-full w-full max-w-3xl flex-col px-6 py-8 transition-[transform,opacity] duration-200 ease-in-out",
              mobileMenuState === "closing"
                ? "translate-y-2 opacity-0"
                : "translate-y-0 opacity-100",
            )}
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-lg font-semibold tracking-tight text-white"
                onClick={(e) => {
                  e.preventDefault();
                  navigateFromMobileMenu("/");
                }}
              >
                Zenku Studio
              </Link>
              <button
                type="button"
                aria-label="Menü schließen"
                onClick={closeMobileMenu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col gap-6">
              {links.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateFromMobileMenu(href);
                  }}
                  className={cn(
                    "relative w-fit text-3xl font-medium tracking-tight text-white/85 transition-colors hover:text-white",
                    "after:absolute after:inset-x-0 after:-bottom-2 after:h-[3px] after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-fuchsia-500 after:via-cyan-400 after:to-lime-400 after:will-change-transform after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100",
                    pathname === href && "text-white after:scale-x-100",
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="mt-10">
              <Link
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateFromMobileMenu("/contact");
                }}
                className="block w-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 text-center text-base font-medium text-white shadow-lg shadow-violet-500/25"
              >
                Call buchen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
