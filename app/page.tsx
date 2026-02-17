"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { TubesBackground } from "@/components/ui/neon-flow";
import { clientLogos, faqs } from "@/data/content";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SecondaryMetric = {
  value: string;
  label: string;
  context?: string;
  spanClass: string;
  valueClass?: string;
  cardClass?: string;
};

const systemModels = [
  {
    name: "Foundation",
    price: "990 EUR / Monat",
    audience: "Handwerker & kleinere Dienstleister mit klar definiertem Angebot.",
    scope: [
      "Bis zu 5 Hauptseiten (z. B. Start, Leistungen, Ueber uns)",
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
    price: "2.190 EUR / Monat",
    audience: "Wachsende Unternehmen mit mehreren Leistungen oder aktiver Kundengewinnung.",
    scope: [
      "Bis zu 10 Hauptseiten (z. B. Start, Leistungen, Ueber uns)",
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
      "Passende Architektur fuer Ihr Ziel",
      "Erweiterte Funnel- & Tracking-Systeme",
      "Performance-Marketing auf mehreren Kanaelen",
      "Flexibles Stundenkontingent",
    ],
    positioning: "Strategische Systemfuehrung auf hoechstem Niveau.",
    featured: false,
  },
];

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

export function HomePage() {
  const t = useTranslations("Home");
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const y = useTransform(scrollY, [0, 500], [0, reduced ? 0 : 60]);

  const primaryMetric = {
    value: t("metrics.primary.value"),
    label: t("metrics.primary.label"),
    context: t("metrics.primary.context"),
  };

  const secondaryMetrics: SecondaryMetric[] = [
    {
      value: t("metrics.secondary.projects.value"),
      label: t("metrics.secondary.projects.label"),
      spanClass: "md:col-span-3",
    },
    {
      value: t("metrics.secondary.companies.value"),
      label: t("metrics.secondary.companies.label"),
      spanClass: "md:col-span-3",
    },
    {
      value: t("metrics.secondary.case.value"),
      label: t("metrics.secondary.case.label"),
      context: t("metrics.secondary.case.context"),
      spanClass: "md:col-span-6",
      valueClass: "text-2xl md:text-4xl",
      cardClass: "md:p-5",
    },
  ];

  const processSteps = [
    {
      title: t("process.steps.clarity.title"),
      description: t("process.steps.clarity.description"),
    },
    {
      title: t("process.steps.system.title"),
      description: t("process.steps.system.description"),
    },
    {
      title: t("process.steps.growth.title"),
      description: t("process.steps.growth.description"),
    },
  ];

  const serviceOutcomes = [
    {
      title: t("outcomes.item1.title"),
      description: t("outcomes.item1.description"),
    },
    {
      title: t("outcomes.item2.title"),
      description: t("outcomes.item2.description"),
    },
    {
      title: t("outcomes.item3.title"),
      description: t("outcomes.item3.description"),
    },
    {
      title: t("outcomes.item4.title"),
      description: t("outcomes.item4.description"),
    },
    {
      title: t("outcomes.item5.title"),
      description: t("outcomes.item5.description"),
    },
  ];

  const testimonial = {
    quote: t("testimonial.quote"),
    name: t("testimonial.name"),
    website: t("testimonial.website"),
    photo: "/testimonials/torsten-acht.avif",
    photoAlt: t("testimonial.photoAlt"),
  };

  return (
    <div className="mx-auto max-w-6xl space-y-[var(--section-gap)]">
      <ContentFrame fullHeight={false} contentPadding={false} className="w-full">
        <div className="relative flex flex-col">
          <section className="relative overflow-hidden rounded-[2rem] border border-default shadow-xl shadow-black/10">
            <TubesBackground className="rounded-[2rem]">
              <motion.div style={{ y }} className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="mx-auto flex w-full max-w-5xl flex-col justify-center px-8 py-12 md:px-14 md:py-16 lg:px-16 lg:py-20">
                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">{t("hero.eyebrow")}</p>
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">{t("hero.title")}</h1>
                <p className="mt-6 max-w-3xl text-lg text-white/80">{t("hero.subtitle")}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    className={cn(buttonVariants({ variant: "primary", size: "lg" }), "w-full justify-center sm:w-auto sm:min-w-[22rem]")}
                    href="/contact"
                  >
                    {t("hero.ctaPrimary")}
                  </Link>
                  <Link
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "lg" }),
                      "w-full justify-center sm:w-auto bg-black/45 text-white border-white/35 hover:bg-black/60 hover:text-white dark:bg-surface/85 dark:text-text dark:border-white/30 dark:hover:bg-surface-2",
                    )}
                    href="/pricing"
                  >
                    {t("hero.ctaSecondary")}
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

            <div className="grid gap-[var(--hero-metrics-gap)] md:col-span-7 md:grid-cols-6">
              {secondaryMetrics.map((metric) => {
                return (
                  <article
                    key={metric.label}
                    className={`ui-metric-card ui-metric-card--secondary ui-transition relative p-4 text-text md:p-4 ${metric.spanClass} ${metric.cardClass ?? ""}`}
                  >
                    <p className={`font-semibold ${metric.valueClass ?? "text-3xl md:text-4xl"}`}>{metric.value}</p>
                    <p className="mt-1.5 max-w-[28ch] text-sm text-muted">{metric.label}</p>
                    {metric.context ? <p className="mt-1 text-xs text-muted">{metric.context}</p> : null}
                    <span className="mt-3 block h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500/80 to-cyan-400/60" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </ContentFrame>

      <section className="py-16 md:py-24 lg:py-28">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted">{t("logos.eyebrow")}</p>
        <h2 className="mt-2 text-center text-xl font-semibold leading-[1.2] text-text md:text-2xl">{t("logos.title")}</h2>
        <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-muted">{t("logos.subtitle")}</p>

        {reduced ? (
          <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {clientLogos.map((logo) => (
              <li
                key={logo.name}
                className="mx-auto inline-flex h-[115px] w-[230px] items-center justify-center overflow-hidden rounded-2xl border border-default bg-surface/70 p-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={230}
                  height={115}
                  unoptimized
                  className="block h-full w-full object-contain p-0 opacity-80 saturate-0 grayscale transition-opacity duration-200 ease-out hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        ) : (
          <div
            className="group relative mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
            aria-label={t("logos.ariaLabel")}
          >
            <div className="animate-logo-loop flex w-max flex-nowrap items-center gap-3 group-hover:[animation-play-state:paused]">
              {[0, 1].map((groupIndex) => (
                <ul
                  key={groupIndex}
                  className="m-0 flex list-none flex-nowrap items-center gap-3 p-0"
                  aria-hidden={groupIndex === 1 ? "true" : undefined}
                >
                  {clientLogos.map((logo) => (
                    <li
                      key={`${groupIndex}-${logo.name}`}
                      className="relative inline-flex h-[115px] w-[230px] flex-none items-center justify-center overflow-hidden rounded-2xl border border-default bg-surface/70 p-0"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={230}
                        height={115}
                        unoptimized
                        className="block h-full w-full object-contain p-0 opacity-80 saturate-0 grayscale transition-opacity duration-200 ease-out hover:opacity-100"
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
              <h2 className="section-heading max-w-[27ch]">{t("problem.title")}</h2>
              <ul className="mt-8 space-y-4">
                {[t("problem.point1"), t("problem.point2"), t("problem.point3")].map((point) => (
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
                alt={t("problem.imageAlt")}
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
                alt={t("solution.imageAlt")}
                loading="lazy"
                decoding="async"
                className="h-full min-h-[440px] w-full object-cover"
              />
            </aside>

            <div>
              <h2 className="section-heading max-w-[26ch]">{t("solution.title")}</h2>
              <ul className="mt-8 space-y-4">
                {[t("solution.benefit1"), t("solution.benefit2"), t("solution.benefit3")].map((benefit) => (
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
                  {t("solution.ctaPrimary")}
                </Link>
                <Link className={buttonVariants({ variant: "secondary", size: "md" })} href="/pricing">
                  {t("solution.ctaSecondary")}
                </Link>
              </div>
            </div>
          </div>
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame className="glass rounded-[2rem] p-8 shadow-depth-1 md:p-12">
          <h2 className="section-heading">{t("process.title")}</h2>
          <p className="section-lead mt-3 max-w-3xl">{t("process.lead")}</p>
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
              {t("process.cta")}
            </Link>
          </div>
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame>
          <section className="mx-auto max-w-4xl text-center">
            <h2 className="section-heading">{t("testimonial.title")}</h2>
            <blockquote className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-2xl md:leading-[1.45]">
              {testimonial.quote}
            </blockquote>
            <div className="mt-10 inline-flex items-center gap-4 text-left">
              <img
                src={testimonial.photo}
                alt={testimonial.photoAlt}
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
            <h2 className="section-heading">{t("modelsIntro.title")}</h2>
            <p className="section-lead mt-3">{t("modelsIntro.lead")}</p>
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
              {t("modelsIntro.cta")}
            </Link>
          </div>
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame>
          <h2 className="section-heading">{t("outcomes.title")}</h2>
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
          <h2 className="section-heading">{t("team.title")}</h2>
          <p className="mt-4 max-w-4xl text-muted">{t("team.paragraph1")}</p>
          <p className="mt-4 max-w-4xl text-muted">{t("team.paragraph2")}</p>
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame>
          <h2 className="section-heading mb-6">{t("faq.title")}</h2>
          <FaqAccordion items={faqs} />
        </ContentFrame>
      </Reveal>

      <Reveal>
        <ContentFrame className="glass rounded-[2rem] p-8 text-center shadow-depth-1 md:p-12">
          <h2 className="section-heading">{t("finalCta.title")}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted">{t("finalCta.subtitle")}</p>
          <div className="mt-8">
            <Link className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mx-auto")} href="/contact">
              {t("finalCta.button")}
            </Link>
          </div>
        </ContentFrame>
      </Reveal>
    </div>
  );
}

export default function Home() {
  return <HomePage />;
}
