import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Call buchen oder Projekt direkt anfragen.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <section className="glass rounded-[2rem] p-8 text-center md:p-12">
        <h1 className="text-4xl font-semibold md:text-5xl">
          Lass uns euer nächstes Wachstumssystem bauen.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-300">
          In 30 Minuten analysieren wir eure Website, identifizieren die größten Hebel und zeigen
          eine klare Roadmap.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={siteConfig.calendlyUrl}
            className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-medium text-white"
          >
            Call buchen
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="glass rounded-full px-6 py-3 font-medium"
          >
            {siteConfig.email}
          </a>
        </div>
      </section>
    </div>
  );
}
