import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import { getPortfolioProjects, getServices } from "@/sanity/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, services] = await Promise.all([
    getPortfolioProjects(),
    getServices(),
  ]);
  const lastModified = new Date();

  const staticRoutes = siteConfig.navLinks.map((link) => ({
    url: absoluteUrl(link.href),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: link.href === "/" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: absoluteUrl(`/portfolio/${project.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.8 : 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
