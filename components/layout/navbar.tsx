"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const [menuOrigin, setMenuOrigin] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [menuRadius, setMenuRadius] = useState(0);

  const listVariants: Variants = {
    open: {
      transition: {
        delayChildren: 0.18,
        staggerChildren: 0.06,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    closed: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  const ctaVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    closed: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  const closeMobileMenu = () => setMobileOpen(false);
  const navigateFromMobileMenu = (href: string) => {
    setPendingHref(href);
    setMobileOpen(false);
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

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
  }, [mobileOpen]);

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
                "after:absolute after:inset-x-3 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-violet-500 after:to-cyan-400 after:will-change-transform after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100",
                pathname === href && "text-zinc-950 after:scale-x-100 dark:text-white",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => {
              if (mobileOpen) {
                closeMobileMenu();
                return;
              }

              const rect = menuButtonRef.current?.getBoundingClientRect();
              const originX = rect ? rect.left + rect.width / 2 : window.innerWidth;
              const originY = rect ? rect.top + rect.height / 2 : 0;

              const distances = [
                Math.hypot(originX - 0, originY - 0),
                Math.hypot(originX - window.innerWidth, originY - 0),
                Math.hypot(originX - 0, originY - window.innerHeight),
                Math.hypot(originX - window.innerWidth, originY - window.innerHeight),
              ];

              setMenuOrigin({ x: originX, y: originY });
              setMenuRadius(Math.max(...distances));
              setMobileOpen(true);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-violet-500/25 md:inline-flex"
          >
            Call buchen
          </Link>
        </div>
      </div>

      <AnimatePresence
        onExitComplete={() => {
          if (pendingHref) {
            router.push(pendingHref);
            setPendingHref(null);
          }
        }}
      >
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <motion.button
              type="button"
              aria-label="Menü schließen"
              onClick={closeMobileMenu}
              className="absolute inset-0 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-xl"
              initial={{
                clipPath: `circle(0px at ${menuOrigin.x}px ${menuOrigin.y}px)`,
              }}
              animate={{
                clipPath: `circle(${menuRadius}px at ${menuOrigin.x}px ${menuOrigin.y}px)`,
              }}
              exit={{
                clipPath: `circle(0px at ${menuOrigin.x}px ${menuOrigin.y}px)`,
              }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              onClick={closeMobileMenu}
            />

            <motion.div
              className="relative mx-auto flex h-full w-full max-w-3xl flex-col px-6 py-8"
              initial={{ opacity: 0, x: 18, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 18, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
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

              <motion.nav
                className="mt-10 flex flex-1 flex-col gap-6"
                variants={listVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {links.map(([href, label]) => (
                  <motion.div key={href} variants={itemVariants}>
                    <Link
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateFromMobileMenu(href);
                      }}
                      className={cn(
                        "relative w-fit text-3xl font-medium tracking-tight text-white/85 transition-colors hover:text-white",
                        "after:absolute after:inset-x-0 after:-bottom-2 after:h-[3px] after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-violet-500 after:to-cyan-400 after:will-change-transform after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100",
                        pathname === href && "text-white after:scale-x-100",
                      )}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div className="mt-10" variants={ctaVariants} initial="closed" animate="open" exit="closed">
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
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
