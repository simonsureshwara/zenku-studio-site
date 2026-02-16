"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { TubesBackground } from "@/components/ui/neon-flow";
import { clientLogos, faqs } from "@/data/content";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const primaryMetric = {
  value: "95+",
  label: "Lighthouse Performance im Durchschnitt",
  context: "ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ber Live-Projekte in Aufbau und Skalierung",
};

const secondaryMetrics = [
  { value: "120+", label: "umgesetzte Projekte" },
  { value: "50+", label: "betreute Unternehmen" },
  { value: "Messbare Ergebnisse", label: "Conversion-Verbesserungen bei Aufbau und Skalierung" },
];

const systemModels = [
  {
    name: "Foundation",
    price: "990 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ / Monat",
    audience: "Handwerker & kleinere Dienstleister mit klar definiertem Angebot.",
    scope: [
      "Bis zu 5 Hauptseiten (z. B. Start, Leistungen, ÃƒÆ’Ã†â€™Ãƒâ€¦Ã¢â‚¬Å“ber uns)",
      "Technisches Setup & Performance",
      "SEO-Grundstruktur",
      "Tracking & Analytics",
      "Basis Ads Setup",
      "Bis zu 4 Stunden strategische Betreuung pro Monat",
    ],
    positioning: "Solide digitale Grundlage ohne hohe Einmalinvestition.",
    featured: false,
  },
  {
    name: "Growth",
    price: "2.190 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ / Monat",
    audience: "Wachsende Unternehmen mit mehreren Leistungen oder aktiver Kundengewinnung.",
    scope: [
      "Bis zu 10 Hauptseiten (z. B. Start, Leistungen, ÃƒÆ’Ã†â€™Ãƒâ€¦Ã¢â‚¬Å“ber uns)",
      "Erweiterte SEO-Strategie",
      "Conversion-Optimierung",
      "Laufende Kampagnenbetreuung",
      "Detaillierte Reports",
      "Bis zu 10 Stunden strategische Betreuung pro Monat",
    ],
    positioning: "Strukturiertes Wachstum mit aktiver Performance-Steuerung.",
    featured: true,
  },
  {
    name: "Performance",
    price: "Individuell nach Analyse",
    audience: "Komplexe Strukturen, mehrere Standorte oder skalierende Unternehmen.",
    scope: [
      "Individuelle Systemanalyse",
      "Flexible oder unbegrenzte Seitenstruktur",
      "Passende Architektur fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼r Ihr Ziel",
      "Erweiterte Funnel- & Tracking-Systeme",
      "Performance-Marketing auf mehreren KanÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤len",
      "Flexibles Stundenkontingent",
    ],
    positioning: "Strategische SystemfÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼hrung auf hÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶chstem Niveau.",
    featured: false,
  },
];

const serviceOutcomes = [
  {
    title: "Websites, die Anfragen erzeugen",
    description:
      "Klare Seitenstruktur, nachvollziehbare NutzerfÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼hrung und ein Setup, das Interessenten in konkrete Anfragen ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼berfÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼hrt.",
  },
  {
    title: "Technische SEO als stabile Basis",
    description:
      "Indexierbarkeit, Geschwindigkeit und Struktur als Grundlage fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼r planbare Sichtbarkeit in der organischen Suche.",
  },
  {
    title: "Sauberes Tracking & Analytics",
    description:
      "Messbare Datenbasis fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼r bessere Entscheidungen mit klaren Ereignissen, Funnels und Reportings.",
  },
  {
    title: "Kontinuierliche Conversion-Optimierung",
    description:
      "RegelmÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ÃƒÆ’Ã†â€™Ãƒâ€¦Ã‚Â¸ige Verbesserung von SchlÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼sselseiten auf Basis von Verhalten, Daten und geschÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ftlicher PrioritÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤t.",
  },
  {
    title: "Langfristige Wachstumsbegleitung",
    description:
      "Strukturiertes Monatsmodell mit klaren Zielen, zentralem ÃƒÆ’Ã†â€™Ãƒâ€¦Ã¢â‚¬Å“berblick und laufender Weiterentwicklung.",
  },
];

const processSteps = [
  {
    title: "Klarheit",
    description:
      "Wir finden gemeinsam heraus, was Ihr Angebot online verkaufen soll ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ und was dafÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼r jetzt wirklich zÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤hlt.",
  },
  {
    title: "System",
    description:
      "Wir bauen Ihre Website neu oder optimieren bestehende Seiten und richten Tracking, SEO und Kampagnen sauber aus.",
  },
  {
    title: "Wachstum",
    description:
      "Wir betreuen fortlaufend, testen gezielt und verbessern Sichtbarkeit, Conversion und Performance anhand klarer Daten.",
  },
];

const testimonial = {
  quote:
    "Simon ist eingesprungen, als mein vorheriger Entwickler aufgegeben hat. Innerhalb weniger Tage hat er meine halbfertige Seite in eine voll funktionsfÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤hige Kursplattform verwandelt. Ich bin ihm fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼r seine Geschwindigkeit, UnterstÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼tzung und VerlÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤sslichkeit unglaublich dankbar.",
  name: "Torsten Acht",
  website: "teachmeyoga.de",
  photo: "/testimonials/torsten-acht.avif",
};

function ContentFrame({
  className,
  children,
  fullHeight = false,
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
        className={`${fullHeight ? "flex min-h-screen min-h-[100svh] w-full flex-col justify-center" : ""} ${
          contentPadding ? "py-12 md:py-20 lg:py-24" : ""
        } ${className ?? ""}`}
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

  return (
    <div className="mx-auto max-w-6xl space-y-[var(--section-gap)]">
      <ContentFrame fullHeight={false} contentPadding={false} className="w-full">
        <div className="relative flex max-h-[100svh] flex-col">
          <section className="relative overflow-hidden rounded-[2rem] border border-default shadow-xl shadow-black/10">
            <TubesBackground className="min-h-[520px] rounded-[2rem] md:min-h-[600px]">
              <motion.div style={{ y }} className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="flex h-full flex-col justify-center px-8 py-12 md:px-14 md:py-16">
                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">
                  F&uuml;r Unternehmen, die online Kunden gewinnen wollen
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                  Webdesign, Webentwicklung und Online-Marketing aus einer Hand
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-white/80">
                  Wir bauen Websites, die Vertrauen schaffen und &uuml;ber SEO, Ads und Tracking messbar Anfragen bringen.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    className={cn(buttonVariants({ variant: "primary", size: "lg" }), "w-full justify-center sm:w-auto sm:min-w-[22rem]")}
                    href="/contact"
                  >
                    Call buchen
                  </Link>
                  <Link
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "lg" }),
                      "w-full justify-center sm:w-auto bg-black/45 text-white border-white/35 hover:bg-black/60 hover:text-white dark:bg-surface/85 dark:text-text dark:border-white/30 dark:hover:bg-surface-2",
                    )}
                    href="/pricing"
                  >
                    Leistungen & Modelle ansehen
                  </Link>
                </div>
              </div>
            </TubesBackground>
          </section>

          <div className="mt-[var(--hero-metrics-gap)] grid gap-[var(--hero-metrics-gap)] md:grid-cols-12">
            <article className="ui-metric-card ui-metric-card--primary ui-transition relative p-5 text-text md:col-span-5 md:p-6">
              <p className="text-4xl font-semibold md:mt-1 md:text-5xl">{primaryMetric.value}</p>
              <p className="mt-1.5 max-w-[28ch] text-[1rem] text-text">{primaryMetric.label}</p>
              <p className="mt-1.5 text-xs text-muted">{primaryMetric.context}</p>
              <span className="mt-3 block h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500/90 to-cyan-400/70" />
            </article>

            <div className="grid gap-[var(--hero-metrics-gap)] md:col-span-7 md:grid-cols-7">
              {secondaryMetrics.map((metric, idx) => {
                const spanClass = idx === 0 ? "md:col-span-4" : idx === 1 ? "md:col-span-3" : "md:col-span-7";
                return (
                  <article
                    key={metric.label}
                    className={`ui-metric-card ui-metric-card--secondary ui-transition relative p-4 text-text md:p-4 ${spanClass}`}
                  >
                    <p className="text-3xl font-semibold md:text-4xl">{metric.value}</p>
                    <p className="mt-1.5 max-w-[28ch] text-sm text-muted">{metric.label}</p>
                    <span className="mt-3 block h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500/80 to-cyan-400/60" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </ContentFrame>

      <section className="py-16 md:py-24 lg:py-28">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted">Vertrauen aus realen Projekten</p>
        <h2 className="mt-2 text-center text-xl font-semibold leading-[1.2] text-text md:text-2xl">
          Unternehmen, die mit Zenku arbeiten
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-muted">
          AusgewÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤hlte Kunden aus Dienstleistung, Gesundheit, SaaS und E-Commerce.
        </p>

        {reduced ? (
          <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {clientLogos.map((logo) => (
              <li
                key={logo.name}
                className="glass relative mx-auto flex h-[115px] w-[230px] items-center justify-center overflow-hidden rounded-2xl p-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 22vw"
                  unoptimized
                  className="logo-mark"
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="logo-ticker-wrap mt-5" aria-label="Kundenlogos">
            <div className="logo-ticker-track">
              {[0, 1].map((groupIndex) => (
                <ul key={groupIndex} className="logo-ticker-group" aria-hidden={groupIndex === 1 ? "true" : undefined}>
                  {clientLogos.map((logo) => (
                    <li key={`${groupIndex}-${logo.name}`} className="logo-ticker-item">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="(max-width: 768px) 40vw, 14rem"
                        unoptimized
                        className="logo-mark"
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        )}
      </section>

      <Reveal>
        <ContentFrame>
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <h2 className="section-heading max-w-[27ch]">
                Sie mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶chten eine Website - aber wer kÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼mmert sich danach um Sichtbarkeit, Wartung und
                Wachstum?
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "FÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼r Design, Ads und Technik immer neue Ansprechpartner.",
                  "Viele Stimmen. Kein System.",
                  "Kein klarer ÃƒÆ’Ã†â€™Ãƒâ€¦Ã¢â‚¬Å“berblick.",
                ].map((point) => (
                  <li key={point} className="py-2">
                    <p className="flex items-start gap-3 text-lg font-medium leading-relaxed text-text">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--danger-solid)]" strokeWidth={1.9} />
                      <span>{point}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="glass relative overflow-hidden rounded-[2rem] border border-default">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="Erfolgreiches Team in einem professionellen Arbeitsumfeld"
                loading="lazy"
                decoding="async"
                className="h-full min-h-[440px] w-full object-cover"
              />
            </aside>
          </div>
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame>
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <aside className="glass relative overflow-hidden rounded-[2rem] border border-default">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80"
                alt="Erleichterte Unternehmerin in einem professionellen Umfeld"
                loading="lazy"
                decoding="async"
                className="h-full min-h-[440px] w-full object-cover"
              />
            </aside>

            <div>
              <h2 className="section-heading max-w-[26ch]">
                Ein Ansprechpartner. Ein System. Klarer ÃƒÆ’Ã†â€™Ãƒâ€¦Ã¢â‚¬Å“berblick.
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Website, Ads, Tracking und Wartung aus einer Hand.",
                  "Monatlich planbar statt Projekt-Chaos.",
                  "Struktur statt EinzelmaÃƒÆ’Ã†â€™Ãƒâ€¦Ã‚Â¸nahmen.",
                ].map((benefit) => (
                  <li key={benefit} className="py-2">
                    <p className="flex items-start gap-3 text-lg font-medium leading-relaxed text-text">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--success-solid)]" strokeWidth={1.9} />
                      <span>{benefit}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className={buttonVariants({ variant: "primary", size: "md" })} href="/contact">
                  Kostenloses AnalysegesprÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ch
                </Link>
                <Link className={buttonVariants({ variant: "secondary", size: "md" })} href="/pricing">
                  Leistungen & Preise ansehen
                </Link>
              </div>
            </div>
          </div>
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame className="glass rounded-[2rem] p-8 shadow-depth-1 md:p-12">
          <h2 className="section-heading">So lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤uft die Zusammenarbeit ab</h2>
          <p className="section-lead mt-3 max-w-3xl">
            Drei Schritte. Ein Ansprechpartner. Ein klares System.
          </p>
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
          <div className="mt-8">
            <Link className={buttonVariants({ variant: "primary", size: "md" })} href="/contact">
              Unverbindlich starten
            </Link>
          </div>
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame>
          <section className="mx-auto max-w-4xl text-center">
            <h2 className="section-heading">Was meine Kunden sagen</h2>
            <blockquote className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-2xl md:leading-[1.45]">
              {`ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾${testimonial.quote}ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“`}
            </blockquote>
            <div className="mt-10 inline-flex items-center gap-4 text-left">
              <img
                src={testimonial.photo}
                alt={`PortrÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤t von ${testimonial.name}`}
                loading="lazy"
                decoding="async"
                className="h-16 w-16 rounded-full border border-default object-cover shadow-depth-1"
              />
              <div>
                <p className="text-lg font-semibold leading-tight text-text">{testimonial.name}</p>
                <p className="mt-1 text-base leading-tight text-muted">{testimonial.website}</p>
              </div>
            </div>
          </section>
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame>
          <div className="max-w-3xl">
            <h2 className="section-heading">Das passende System fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼r Ihr Wachstum</h2>
            <p className="section-lead mt-3">
              Eine Website im monatlichen Modell. Mit Betreuung, Optimierung und klarer Struktur.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {systemModels.map((model) => (
              <Card
                key={model.name}
                className={cn("h-full p-6 md:p-7", model.featured && "border-[var(--brand-500)] shadow-depth-2 md:-translate-y-1")}
              >
                <p className="text-sm uppercase tracking-[0.15em] text-muted">{model.name}</p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-text">{model.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{model.audience}</p>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-text">
                  {model.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-500)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-muted">{model.positioning}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Link className={buttonVariants({ variant: "primary", size: "md" })} href="/contact">
              Unverbindlich starten
            </Link>
          </div>
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame>
          <h2 className="section-heading">Leistungen mit klarem GeschÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ftsnutzen</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serviceOutcomes.map((service) => (
              <Card key={service.title} className="ui-elevate p-6">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </Card>
            ))}
          </div>
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame>
          <h2 className="section-heading">Struktur statt Einzelperson</h2>
          <p className="mt-4 max-w-4xl text-muted">
            Zenku Studio arbeitet mit einem internationalen Netzwerk aus Strategen, Designern,
            Entwicklern und Performance-Spezialisten. Die Zusammenarbeit wird zentral gesteuert, mit
            einem festen Ansprechpartner.
          </p>
          <p className="mt-4 max-w-4xl text-muted">
            Simon Sureshwara begleitet jedes Projekt als Lead Strategist und Ansprechpartner fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼r
            Strategie, Priorisierung und ErgebnisqualitÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤t.
          </p>
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame>
          <h2 className="section-heading mb-6">HÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ufige Fragen</h2>
          <FaqAccordion items={faqs} />
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame className="glass rounded-[2rem] p-8 text-center shadow-depth-1 md:p-12">
          <h2 className="section-heading">
            Lassen Sie uns Ihre digitale Infrastruktur strukturieren.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted">
            In einem unverbindlichen AnalysegesprÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ch klÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ren wir Ausgangslage, Potenziale und das
            passende Modell fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼r Ihr Unternehmen.
          </p>
          <div className="mt-8">
            <Link className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mx-auto")} href="/contact">
              Kostenloses AnalysegesprÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¤ch vereinbaren
            </Link>
          </div>
        </ContentFrame>
      </Reveal>
    </div>
  );
}
