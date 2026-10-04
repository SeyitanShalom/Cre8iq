import { cache } from "react";
import {
  getRelatedProjects as getLocalRelatedProjects,
  homepageStats,
  processSteps,
  sampleProjects,
  services,
  testimonials,
  type HomepageStat,
  type PortfolioProject,
  type Testimonial,
} from "@/content/local-content";

export * from "@/content/local-content";

export type SiteService = (typeof services)[number];

export type HomePageContent = {
  announcement?: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubtext: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  stats: HomepageStat[];
  processSteps: typeof processSteps;
  featuredProjects: PortfolioProject[];
  featuredServices: SiteService[];
  featuredTestimonials: Testimonial[];
};

const homeText = {
  heroEyebrow: "Premium personal creative / Lagos, Nigeria",
  heroHeadline:
    "I design brand visuals, product experiences, and websites that feel clear, beautiful, and built to work.",
  heroSubtext:
    "Cre8iq is my personal creative brand for thoughtful visual systems, intuitive digital products, and refined web experiences that help ideas look sharper and move with more confidence.",
  primaryCtaText: "View selected work",
  primaryCtaLink: "/portfolio",
  secondaryCtaText: "Start a project",
  secondaryCtaLink: "/contact",
};

export const getPortfolioProjects = cache(async function getPortfolioProjects() {
  return sampleProjects;
});

export const getProject = cache(async function getProject(slug: string) {
  const projects = await getPortfolioProjects();

  return projects.find((project) => project.slug === slug);
});

export const getRelatedProjects = cache(async function getRelatedProjects(
  project: PortfolioProject,
  count = 2,
) {
  return getLocalRelatedProjects(project, count);
});

export const getServices = cache(async function getServices() {
  return services;
});

export const getService = cache(async function getService(slug: string) {
  const serviceItems = await getServices();

  return serviceItems.find((service) => service.slug === slug);
});

export const getTestimonials = cache(async function getTestimonials() {
  return testimonials;
});

export const getHomePageContent = cache(async function getHomePageContent(): Promise<HomePageContent> {
  const [projects, serviceItems, testimonialItems] = await Promise.all([
    getPortfolioProjects(),
    getServices(),
    getTestimonials(),
  ]);

  return {
    ...homeText,
    stats: homepageStats,
    processSteps,
    featuredProjects: getFeaturedItems(projects, 3),
    featuredServices: getFeaturedItems(serviceItems, 3),
    featuredTestimonials: getFeaturedItems(testimonialItems, 3),
  };
});

function getFeaturedItems<T>(items: readonly T[], count: number) {
  const featured = items.filter(
    (item) => Boolean((item as { featured?: boolean }).featured),
  );

  return (featured.length ? featured : items).slice(0, count);
}
