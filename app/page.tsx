"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { TubesBackground } from "@/components/ui/neon-flow";
import { faqs } from "@/data/content";
import { projects } from "@/data/projects";
import { FaqAccordion } from "@/components/ui/faq-accordion";

const stats = [
  ["50+", "betreute Unternehmen"],
  ["120+", "umgesetzte Projekte"],
  ["95+", "Lighthouse Performance im Durchschnitt"],
  ["Nachweisbar", "Conversion-Steigerungen bei Relaunches"],
];

const systemModels = [
  {
    name: "Foundation",
    intro: "Der professionelle digitale Start.",
    fit: "Fuer neue oder neu strukturierte Unternehmen.",
    focus: ["Infrastruktur", "Technisches SEO", "Tracking", "Strategische Basis"],
  },
  {
    name: "Growth",
    intro: "Strukturiertes digitales Wachstum.",
    fit: "Fuer expandierende Unternehmen.",
    focus: ["Sichtbarkeit", "Conversion", "Optimierung", "Priorisierte Betreuung"],
  },
  {
    name: "Performance",
    intro: "Skalierung mit Performance-Marketing.",
    fit: "Fuer Unternehmen mit klarem Skalierungsfokus.",
    focus: ["Google Ads", "Funnel-Optimierung", "Conversion-Tests", "Performance-Reporting"],
  },
];

const serviceOutcomes = [
  {
    title: "Websites, die Anfragen erzeugen",
    description:
      "Klare Seitenstruktur, nachvollziehbare Nutzerfuehrung und ein Setup, das Interessenten in konkrete Anfragen ueberfuehrt.",
  },
  {
    title: "Technische SEO als stabile Basis",
    description:
      "Indexierbarkeit, Geschwindigkeit und Struktur als Grundlage fuer planbare Sichtbarkeit in der organischen Suche.",
  },
  {
    title: "Sauberes Tracking & Analytics",
    description:
      "Messbare Datenbasis fuer bessere Entscheidungen mit klaren Ereignissen, Funnels und Reportings.",
  },
  {
    title: "Kontinuierliche Conversion-Optimierung",
    description:
      "Regelmaessige Verbesserung von Schluesselseiten auf Basis von Verhalten, Daten und geschaeftlicher Prioritaet.",
  },
  {
    title: "Langfristige Wachstumsbegleitung",
    description:
      "Strukturiertes Monatsmodell mit klaren Zielen, zentraler Verantwortung und laufender Weiterentwicklung.",
  },
];

const processSteps = [
  {
    title: "Analyse",
    description:
      "Wir analysieren Ausgangslage, Ziele und Potenziale und definieren eine klare digitale Priorisierung.",
  },
  {
    title: "Aufbau",
    description:
      "Wir setzen Infrastruktur, Website, SEO und Tracking strukturiert um und schaffen eine stabile Grundlage.",
  },
  {
    title: "Optimierung",
    description:
      "Wir verbessern kontinuierlich Sichtbarkeit, Conversion und Performance anhand messbarer Daten.",
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const y = useTransform(scrollY, [0, 500], [0, reduced ? 0 : 60]);
  const featuredTestimonial = projects.find((project) => project.testimonial)?.testimonial;

  return (
    <div className="mx-auto max-w-6xl space-y-24">
      <section className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-xl shadow-black/10 dark:border-white/10">
        <TubesBackground className="h-[65vh] min-h-[520px] max-h-[700px] rounded-[2rem] md:h-[68vh]">
          <motion.div
            style={{ y }}
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
          />
          <div className="flex h-full flex-col justify-center p-8 md:p-14">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">Zenku Studio</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Digitale Infrastruktur fuer Unternehmen mit <span className="serif-accent">Wachstum</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Strategie, Website, SEO und Performance - strukturiert betreut und langfristig optimiert.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/30"
                href="/contact"
              >
                Kostenloses Analysegespraech
              </Link>
              <Link className="glass rounded-full px-6 py-3 font-medium" href="/pricing">
                Leistungen & Modelle ansehen
              </Link>
            </div>
          </div>
        </TubesBackground>
      </section>

      <Reveal>
        <section className="grid gap-4 md:grid-cols-4">
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
            Viele Unternehmen investieren in Einzelmassnahmen - aber nicht in ein System.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Keine klare digitale Struktur",
              "SEO ohne langfristige Strategie",
              "Ads ohne sauberes Tracking",
              "Keine kontinuierliche Optimierung",
              "Mehrere Dienstleister ohne zentrale Verantwortung",
            ].map((point) => (
              <article key={point} className="glass rounded-3xl p-6">
                <p className="font-medium">{point}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-zinc-600 dark:text-zinc-300">
            Zenku Studio uebernimmt die digitale Infrastruktur zentral: von der strategischen Basis bis zur
            laufenden Performance-Optimierung.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="text-3xl font-semibold md:text-4xl">Das Zenku Wachstumssystem</h2>
          <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-300">
            Drei klar definierte Modelle fuer unterschiedliche Wachstumsphasen.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {systemModels.map((model) => (
              <article key={model.name} className="glass rounded-3xl p-6 transition hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
                  {model.name}
                </p>
                <h3 className="mt-3 text-xl font-medium">{model.intro}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{model.fit}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
                  {model.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-6 text-zinc-600 dark:text-zinc-300">
            Alle Modelle sind modular aufgebaut und klar definiert. Transparente Festpreise ab 1.490 EUR
            pro Monat.
          </p>
          <div className="mt-6">
            <Link className="glass rounded-full px-6 py-3 font-medium" href="/pricing">
              Leistungen & Preise im Detail
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="text-3xl font-semibold md:text-4xl">Leistungen mit klarem Geschaeftsnutzen</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serviceOutcomes.map((service) => (
              <article key={service.title} className="glass rounded-3xl p-6 transition hover:-translate-y-1">
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="glass rounded-[2rem] p-8 md:p-12">
          <h2 className="text-3xl font-semibold">Analyse, Aufbau, Optimierung</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {processSteps.map((step, idx) => (
              <li key={step.title} className="rounded-2xl border border-black/10 p-5 dark:border-white/10">
                <p className="text-sm text-violet-500">0{idx + 1}</p>
                <p className="mt-2 font-medium">{step.title}</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section className="glass rounded-[2rem] p-8 md:p-12">
          <h2 className="text-3xl font-semibold md:text-4xl">Stimmen aus Projekten</h2>
          <blockquote className="mt-6 text-xl leading-relaxed">
            {featuredTestimonial?.quote ??
              "Die Zusammenarbeit war strukturiert, transparent und in der Umsetzung durchgehend verlaesslich."}
          </blockquote>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
            {featuredTestimonial?.name ?? "Kundin aus dem Gesundheitsbereich"} -{" "}
            {featuredTestimonial?.role ?? "Geschaeftsfuehrung"}
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="text-3xl font-semibold md:text-4xl">Struktur statt Einzelperson</h2>
          <p className="mt-4 max-w-4xl text-zinc-600 dark:text-zinc-300">
            Zenku Studio arbeitet mit einem internationalen Netzwerk aus Strategen, Designern,
            Entwicklern und Performance-Spezialisten. Die Zusammenarbeit wird zentral gesteuert, mit
            einem festen Ansprechpartner.
          </p>
          <p className="mt-4 max-w-4xl text-zinc-600 dark:text-zinc-300">
            Simon Sureshwara begleitet jedes Projekt als Lead Strategist und Ansprechpartner fuer
            Strategie, Priorisierung und Ergebnisqualitaet.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="mb-6 text-3xl font-semibold">Haeufige Fragen</h2>
          <FaqAccordion items={faqs} />
        </section>
      </Reveal>

      <Reveal>
        <section className="glass rounded-[2rem] p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Lassen Sie uns Ihre digitale Infrastruktur strukturieren.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-zinc-600 dark:text-zinc-300">
            In einem unverbindlichen Analysegespraech klaeren wir Ausgangslage, Potenziale und das
            passende Modell fuer Ihr Unternehmen.
          </p>
          <div className="mt-8">
            <Link
              className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/30"
              href="/contact"
            >
              Kostenloses Analysegespraech vereinbaren
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
