import type { Metadata } from "next";
import { services } from "@/data/content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Webdesign, Entwicklung, SEO und Growth Services von Zenku Studio.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Webdesign und Webentwicklung",
          provider: { "@type": "Organization", name: "Zenku Studio" },
          areaServed: "DACH",
        }}
      />
      <h1 className="text-4xl font-semibold md:text-5xl">Leistungen für messbares Wachstum</h1>
      <div className="mt-10 grid gap-4">
        {services.map((service) => (
          <article key={service.title} className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-medium">{service.title}</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
