"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { services, faqs } from "@/data/content";
import { FaqAccordion } from "@/components/ui/faq-accordion";

const stats = [
  ["+120", "umgesetzte Projekte"],
  ["95+", "Lighthouse Score"],
  ["3.1x", "Ø Conversion-Uplift"],
];

export default function Home() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const y = useTransform(scrollY, [0, 500], [0, reduced ? 0 : 60]);

  return (
    <div className="mx-auto max-w-6xl space-y-24">
      <section className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-gradient-to-br from-white to-zinc-100 p-8 shadow-xl shadow-black/10 dark:border-white/10 dark:from-zinc-900 dark:to-zinc-950 md:p-14">
        <motion.div
          style={{ y }}
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
        />
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">Premium Web Systems</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Wir bauen Websites, die <span className="serif-accent">Leads</span> liefern – schnell,
          messbar und visuell auf Premium-Niveau.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Zenku Studio verbindet Conversion-Strategie, UI/UX und technische Exzellenz zu digitalen
          Erlebnissen, die verkaufen.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/30"
            href="/contact"
          >
            Projekt anfragen
          </Link>
          <Link className="glass rounded-full px-6 py-3 font-medium" href="/projects">
            Cases ansehen
          </Link>
        </div>
      </section>

      <Reveal>
        <section className="grid gap-4 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <article key={label} className="glass rounded-3xl p-6 text-center">
              <p className="text-3xl font-semibold">{value}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{label}</p>
            </article>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Leistungen mit <span className="serif-accent">Impact</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="glass rounded-3xl p-6 transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="glass rounded-[2rem] p-8 md:p-12">
          <h2 className="text-3xl font-semibold">Ablauf: von Idee bis Conversion</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {["Analyse & Positionierung", "Design & Development", "Launch & Optimierung"].map(
              (step, idx) => (
                <li
                  key={step}
                  className="rounded-2xl border border-black/10 p-5 dark:border-white/10"
                >
                  <p className="text-sm text-violet-500">0{idx + 1}</p>
                  <p className="mt-2 font-medium">{step}</p>
                </li>
              ),
            )}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="mb-6 text-3xl font-semibold">Häufige Fragen</h2>
          <FaqAccordion items={faqs} />
        </section>
      </Reveal>
    </div>
  );
}
