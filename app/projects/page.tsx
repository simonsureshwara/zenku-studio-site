import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Projekte",
  description: "Ausgewählte Projekte von Zenku Studio mit messbaren Ergebnissen.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Start", item: "https://zenku.studio/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Projekte",
              item: "https://zenku.studio/projects",
            },
          ],
        }}
      />
      <h1 className="text-4xl font-semibold md:text-5xl">Projekte mit echtem Geschäftsergebnis</h1>
      <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-300">
        Jedes Projekt verbindet Designqualität mit Conversion-Logik, Performance und sauberem
        Tracking.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-md dark:border-white/10 dark:bg-white/5"
          >
            <div className="mask-fade relative h-60 overflow-hidden">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-violet-500">{project.industry}</p>
              <h2 className="mt-2 text-2xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">{project.shortSummary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
