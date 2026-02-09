import type { Metadata } from "next";
import Link from "next/link";
import { pricingTiers } from "@/data/content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Preise",
  description: "Transparente Pakete für Launch, Growth und Scale.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Zenku Studio Website Pakete",
          offers: pricingTiers.map((tier) => ({
            "@type": "Offer",
            name: tier.name,
            priceCurrency: "EUR",
            price: tier.price.replace(/[^\d]/g, "") || "0",
            availability: "https://schema.org/InStock",
          })),
        }}
      />
      <h1 className="text-4xl font-semibold md:text-5xl">Pakete, die zu euren Zielen passen</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-300">
        Klare Leistungen, klare Timelines, klare Wirkung.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <article key={tier.name} className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-semibold">{tier.name}</h2>
            <p className="mt-2 text-3xl font-bold">{tier.price}</p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{tier.description}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {tier.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-white"
            >
              Kostenloser Check
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
