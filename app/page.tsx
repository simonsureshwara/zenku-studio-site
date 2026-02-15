"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Gauge } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { TubesBackground } from "@/components/ui/neon-flow";
import { faqs } from "@/data/content";
import { projects } from "@/data/projects";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const primaryMetric = {
  value: "95+",
  label: "Lighthouse Performance im Durchschnitt",
  context: "ueber Live-Projekte nach Relaunch",
};

const secondaryMetrics = [
  { value: "120+", label: "umgesetzte Projekte" },
  { value: "50+", label: "betreute Unternehmen" },
  { value: "Nachweisbar", label: "Conversion-Steigerungen bei Relaunches" },
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

function SnapSection({
  className,
  children,
  fullHeight = true,
  contentPadding = true,
}: {
  className?: string;
  children: ReactNode;
  fullHeight?: boolean;
  contentPadding?: boolean;
}) {
  return (
    <section className={fullHeight ? "min-h-screen min-h-[100svh]" : ""}>
      <div
        className={`${fullHeight ? "flex min-h-screen min-h-[100svh] w-full flex-col justify-center" : ""} ${fullHeight && contentPadding ? "py-12 md:py-16" : ""} ${className ?? ""}`}
      >
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const y = useTransform(scrollY, [0, 500], [0, reduced ? 0 : 60]);
  const featuredTestimonial = projects.find((project) => project.testimonial)?.testimonial;

  return (
    <div className="mx-auto max-w-6xl space-y-[var(--section-gap)]">
      <SnapSection
        fullHeight={false}
        contentPadding={false}
        className="w-full"
      >
        <div className="relative flex max-h-[100svh] flex-col">
          <section className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-xl shadow-black/10 dark:border-white/10">
            <TubesBackground className="h-[58vh] min-h-[420px] max-h-[600px] rounded-[2rem] md:h-[58vh]">
              <motion.div
                style={{ y }}
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
              />
              <div className="flex h-full flex-col justify-center p-8 md:p-14">
                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">Zenku Studio</p>
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                  Digitale Infrastruktur fuer Unternehmen mit{" "}
                  <span className="serif-accent">Wachstum</span>.
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-white/80">
                  Strategie, Website, SEO und Performance - strukturiert betreut und langfristig
                  optimiert.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link className={buttonVariants({ variant: "primary", size: "lg" })} href="/contact">
                    Kostenloses Analysegespraech
                  </Link>
                  <Link className={buttonVariants({ variant: "secondary", size: "lg" })} href="/pricing">
                    Leistungen & Modelle ansehen
                  </Link>
                </div>
              </div>
            </TubesBackground>
          </section>

          <div className="ui-3d-stage mt-[var(--hero-metrics-gap)] grid gap-[var(--hero-metrics-gap)] md:grid-cols-12">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="ui-metric-card ui-metric-card--primary ui-transition ui-3d-card relative p-5 text-zinc-100 md:col-span-5 md:p-6"
            >
              <div className="mb-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/90">
                <Gauge className="h-3 w-3" />
              </div>
              <p className="text-4xl font-semibold md:text-5xl">{primaryMetric.value}</p>
              <p className="mt-1.5 max-w-[28ch] text-[1rem] text-zinc-100">{primaryMetric.label}</p>
              <p className="mt-1.5 text-xs text-zinc-400">{primaryMetric.context}</p>
              <span className="mt-3 block h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500/90 to-cyan-400/70" />
            </motion.article>

            <div className="grid gap-[var(--hero-metrics-gap)] md:col-span-7 md:grid-cols-7">
              {secondaryMetrics.map((metric, idx) => {
                const spanClass = idx === 0 ? "md:col-span-4" : idx === 1 ? "md:col-span-3" : "md:col-span-7";
                return (
                  <motion.article
                    key={metric.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.34,
                      ease: [0.22, 1, 0.36, 1],
                      delay: idx === 0 ? 0.06 : idx === 1 ? 0.12 : 0.18,
                    }}
                    className={`ui-metric-card ui-metric-card--secondary ui-transition ui-3d-card relative p-4 text-zinc-100 md:p-4 ${spanClass}`}
                  >
                    <p className="text-3xl font-semibold md:text-4xl">{metric.value}</p>
                    <p className="mt-1.5 max-w-[28ch] text-sm text-zinc-200">{metric.label}</p>
                    <span className="mt-3 block h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500/80 to-cyan-400/60" />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </SnapSection>

      <Reveal>
        <SnapSection>
          <h2 className="section-heading">
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
          <p className="section-lead mt-6 max-w-3xl">
            Zenku Studio uebernimmt die digitale Infrastruktur zentral: von der strategischen Basis bis zur
            laufenden Performance-Optimierung.
          </p>
        </SnapSection>
      </Reveal>

      <Reveal>
        <SnapSection>
          <h2 className="section-heading">Das Zenku Wachstumssystem</h2>
          <p className="section-lead mt-3 max-w-3xl">
            Drei klar definierte Modelle fuer unterschiedliche Wachstumsphasen.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {systemModels.map((model) => (
              <Card key={model.name} className="ui-elevate p-6">
                <p className="text-sm uppercase tracking-[0.15em] text-muted">{model.name}</p>
                <CardTitle className="mt-3">{model.intro}</CardTitle>
                <CardDescription className="mt-2 text-sm">{model.fit}</CardDescription>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-text/90">
                  {model.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-muted">
            Alle Modelle sind modular aufgebaut und klar definiert. Transparente Festpreise ab 1.490 EUR
            pro Monat.
          </p>
          <div className="mt-6">
            <Link className={buttonVariants({ variant: "secondary", size: "md" })} href="/pricing">
              Leistungen & Preise im Detail
            </Link>
          </div>
        </SnapSection>
      </Reveal>

      <Reveal>
        <SnapSection>
          <h2 className="section-heading">Leistungen mit klarem Geschaeftsnutzen</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serviceOutcomes.map((service) => (
              <Card key={service.title} className="ui-elevate p-6">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </Card>
            ))}
          </div>
        </SnapSection>
      </Reveal>

      <Reveal>
        <SnapSection className="glass rounded-[2rem] p-8 shadow-depth-1 md:p-12">
          <h2 className="section-heading">Analyse, Aufbau, Optimierung</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {processSteps.map((step, idx) => (
              <Card key={step.title} className="p-5">
                <CardContent className="p-0">
                  <p className="text-sm text-[var(--brand-400)]">0{idx + 1}</p>
                  <p className="mt-2 text-xl font-medium leading-[1.2] text-text">{step.title}</p>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </ol>
        </SnapSection>
      </Reveal>

      <Reveal>
        <SnapSection className="glass rounded-[2rem] p-8 shadow-depth-1 md:p-12">
          <h2 className="section-heading">Stimmen aus Projekten</h2>
          <blockquote className="mt-6 text-xl leading-relaxed">
            {featuredTestimonial?.quote ??
              "Die Zusammenarbeit war strukturiert, transparent und in der Umsetzung durchgehend verlaesslich."}
          </blockquote>
          <p className="mt-4 text-sm text-muted">
            {featuredTestimonial?.name ?? "Kundin aus dem Gesundheitsbereich"} -{" "}
            {featuredTestimonial?.role ?? "Geschaeftsfuehrung"}
          </p>
        </SnapSection>
      </Reveal>

      <Reveal>
        <SnapSection>
          <h2 className="section-heading">Struktur statt Einzelperson</h2>
          <p className="mt-4 max-w-4xl text-muted">
            Zenku Studio arbeitet mit einem internationalen Netzwerk aus Strategen, Designern,
            Entwicklern und Performance-Spezialisten. Die Zusammenarbeit wird zentral gesteuert, mit
            einem festen Ansprechpartner.
          </p>
          <p className="mt-4 max-w-4xl text-muted">
            Simon Sureshwara begleitet jedes Projekt als Lead Strategist und Ansprechpartner fuer
            Strategie, Priorisierung und Ergebnisqualitaet.
          </p>
        </SnapSection>
      </Reveal>

      <Reveal>
        <SnapSection>
          <h2 className="section-heading mb-6">Haeufige Fragen</h2>
          <FaqAccordion items={faqs} />
        </SnapSection>
      </Reveal>

      <Reveal>
        <SnapSection className="glass rounded-[2rem] p-8 text-center shadow-depth-1 md:p-12">
          <h2 className="section-heading">
            Lassen Sie uns Ihre digitale Infrastruktur strukturieren.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted">
            In einem unverbindlichen Analysegespraech klaeren wir Ausgangslage, Potenziale und das
            passende Modell fuer Ihr Unternehmen.
          </p>
          <div className="mt-8">
            <Link className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mx-auto")} href="/contact">
              Kostenloses Analysegespraech vereinbaren
            </Link>
          </div>
        </SnapSection>
      </Reveal>
    </div>
  );
}
