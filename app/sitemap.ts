import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/services", "/pricing", "/about", "/contact"];
  const staticRoutes = routes.map((route) => ({
    url: `https://zenku.studio${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `https://zenku.studio/projects/${project.slug}`,
    lastModified: new Date(`${project.year}-01-01`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
