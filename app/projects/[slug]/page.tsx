import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.shortSummary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-5xl space-y-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.shortSummary,
          keywords: project.stack.join(", "),
          datePublished: `${project.year}-01-01`,
        }}
      />
      <header>
        <p className="text-sm text-violet-500">
          {project.industry} · {project.year}
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">{project.shortSummary}</p>
      </header>

      <div className="mask-fade relative h-[460px] overflow-hidden rounded-3xl border border-black/10 dark:border-white/10">
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {project.results.map((result) => (
          <div key={result.label} className="glass rounded-2xl p-5">
            <p className="text-2xl font-semibold">{result.value}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">{result.label}</p>
          </div>
        ))}
      </section>

      <section className="glass rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Problem → Lösung → Ergebnis</h2>
        <p className="mt-4">
          <strong>Challenge:</strong> {project.sections.challenge}
        </p>
        <p className="mt-3">
          <strong>Approach:</strong> {project.sections.approach}
        </p>
        <p className="mt-3">
          <strong>Outcome:</strong> {project.sections.outcome}
        </p>
      </section>

      {project.testimonial && (
        <blockquote className="rounded-3xl border border-black/10 p-8 italic dark:border-white/10">
          “{project.testimonial.quote}”
          <footer className="mt-3 text-sm not-italic text-zinc-500">
            {project.testimonial.name}, {project.testimonial.role}
          </footer>
        </blockquote>
      )}
    </article>
  );
}
