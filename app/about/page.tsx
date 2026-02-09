import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Zenku Studio",
  description:
    "Wir sind ein fokussiertes Studio für High-Performance Websites mit klarem Conversion-Fokus.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <h1 className="text-4xl font-semibold md:text-5xl">Kleines Team. Große Wirkung.</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-300">
        Zenku Studio arbeitet an der Schnittstelle aus Produktdesign, Frontend-Engineering und
        technischem SEO. Unser Anspruch: Websites, die nicht nur schön aussehen, sondern Umsatzhebel
        sind.
      </p>
      <div className="glass rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Wie wir arbeiten</h2>
        <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-300">
          <li>• Klarer Fokus auf Business-KPIs statt Vanity Metrics.</li>
          <li>• Enge Zusammenarbeit mit Marketing und Vertrieb.</li>
          <li>• Technische Qualität, die langfristig skaliert.</li>
        </ul>
      </div>
    </div>
  );
}
