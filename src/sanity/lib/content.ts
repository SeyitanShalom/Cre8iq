import { groq } from "next-sanity";
import { cache } from "react";
import {
  getProjectBySlug,
  getRelatedProjects as getFallbackRelatedProjects,
  homepageStats,
  processSteps,
  sampleProjects,
  testimonials,
  type HomepageStat,
  type PortfolioProject,
  type ProjectFormat,
  type ProjectGalleryItem,
  type ProjectVisualType,
  type Testimonial,
} from "@/lib/placeholder-content";
import { siteConfig } from "@/lib/site";
import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";

export type SiteService = (typeof siteConfig.services)[number];

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

type SanityProjectDocument = Partial<
  Omit<PortfolioProject, "gallery" | "caseStudy" | "simpleProject">
> & {
  slug?: string;
  format?: string;
  visual?: string;
  gallery?: Array<
    Partial<ProjectGalleryItem> & {
      visual?: string;
    }
  >;
  caseStudy?: PortfolioProject["caseStudy"];
  simpleProject?: PortfolioProject["simpleProject"];
};

type SanityServiceDocument = Partial<SiteService> & {
  slug?: string;
};

type SanityTestimonialDocument = {
  quote?: string;
  name?: string;
  role?: string;
  avatarUrl?: string;
  avatarAlt?: string;
  featured?: boolean;
};

type SanityHomePageDocument = Partial<
  Omit<
    HomePageContent,
    | "stats"
    | "processSteps"
    | "featuredProjects"
    | "featuredServices"
    | "featuredTestimonials"
  >
> & {
  stats?: HomepageStat[];
  featuredProjects?: SanityProjectDocument[];
  featuredServices?: SanityServiceDocument[];
  featuredTestimonials?: SanityTestimonialDocument[];
};

const projectProjection = groq`{
  title,
  "slug": slug.current,
  category,
  format,
  featured,
  year,
  client,
  role,
  accent,
  visual,
  summary,
  overview,
  challenge,
  direction,
  outcome,
  services,
  tools,
  highlights,
  goals,
  metrics[]{value, label},
  "imageUrl": featuredImage.asset->url,
  "imageAlt": featuredImage.alt,
  gallery[]{
    title,
    label,
    description,
    visual,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  },
  caseStudy{
    process,
    solution,
    results,
    sections[]{title, description, points}
  },
  simpleProject{
    scope,
    deliverables,
    handoff
  },
  seoTitle,
  seoDescription
}`;

const serviceProjection = groq`{
  title,
  "slug": slug.current,
  eyebrow,
  summary,
  description,
  deliverables,
  process
}`;

const testimonialProjection = groq`{
  quote,
  "name": clientName,
  "role": clientRoleCompany,
  "avatarUrl": avatar.asset->url,
  "avatarAlt": avatar.alt,
  featured
}`;

const projectsQuery = groq`*[_type == "project"] | order(featured desc, year desc, title asc) ${projectProjection}`;
const servicesQuery = groq`*[_type == "service"] | order(sortOrder asc, title asc) ${serviceProjection}`;
const testimonialsQuery = groq`*[_type == "testimonial"] | order(featured desc, sortOrder asc, clientName asc) ${testimonialProjection}`;
const homepageQuery = groq`*[_type == "homepage"][0]{
  announcement,
  heroEyebrow,
  heroHeadline,
  heroSubtext,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  stats[]{value, label},
  featuredProjects[]->${projectProjection},
  featuredServices[]->${serviceProjection},
  featuredTestimonials[]->${testimonialProjection}
}`;

const visualTypes: ProjectVisualType[] = [
  "brand-system",
  "dashboard",
  "website",
  "social-kit",
  "mobile-app",
  "landing-page",
];

const projectFormats: ProjectFormat[] = ["Case study", "Simple project"];

const fallbackHomeText = {
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
  if (!isSanityConfigured) {
    return sampleProjects;
  }

  try {
    const documents = await client.fetch<SanityProjectDocument[]>(
      projectsQuery,
      {},
      { next: { revalidate: 60 } },
    );

    return documents.length ? documents.map(normalizeProject) : sampleProjects;
  } catch {
    return sampleProjects;
  }
});

export const getProject = cache(async function getProject(slug: string) {
  const projects = await getPortfolioProjects();

  return projects.find((project) => project.slug === slug);
});

export const getRelatedProjects = cache(async function getRelatedProjects(
  project: PortfolioProject,
  count = 2,
) {
  const projects = await getPortfolioProjects();
  const hasCmsSource = projects.some((item) => item.slug === project.slug);

  if (!hasCmsSource) {
    return getFallbackRelatedProjects(project, count);
  }

  return projects
    .filter((item) => item.slug !== project.slug)
    .sort((first, second) => {
      const firstScore =
        Number(first.category === project.category) +
        first.services.filter((service) => project.services.includes(service))
          .length;
      const secondScore =
        Number(second.category === project.category) +
        second.services.filter((service) => project.services.includes(service))
          .length;

      return secondScore - firstScore;
    })
    .slice(0, count);
});

export const getServices = cache(async function getServices() {
  if (!isSanityConfigured) {
    return siteConfig.services;
  }

  try {
    const documents = await client.fetch<SanityServiceDocument[]>(
      servicesQuery,
      {},
      { next: { revalidate: 60 } },
    );

    return documents.length
      ? documents.map(normalizeService)
      : siteConfig.services;
  } catch {
    return siteConfig.services;
  }
});

export const getService = cache(async function getService(slug: string) {
  const services = await getServices();

  return services.find((service) => service.slug === slug);
});

export const getTestimonials = cache(async function getTestimonials() {
  if (!isSanityConfigured) {
    return testimonials;
  }

  try {
    const documents = await client.fetch<SanityTestimonialDocument[]>(
      testimonialsQuery,
      {},
      { next: { revalidate: 60 } },
    );

    return documents.length
      ? documents.map(normalizeTestimonial)
      : testimonials;
  } catch {
    return testimonials;
  }
});

export const getHomePageContent = cache(async function getHomePageContent(): Promise<HomePageContent> {
  const [projects, services, testimonialItems] = await Promise.all([
    getPortfolioProjects(),
    getServices(),
    getTestimonials(),
  ]);

  const fallbackContent: HomePageContent = {
    ...fallbackHomeText,
    stats: homepageStats,
    processSteps,
    featuredProjects: getFeaturedItems(projects, 3),
    featuredServices: getFeaturedItems(services, 3),
    featuredTestimonials: getFeaturedItems(testimonialItems, 3),
  };

  if (!isSanityConfigured) {
    return fallbackContent;
  }

  try {
    const document = await client.fetch<SanityHomePageDocument | null>(
      homepageQuery,
      {},
      { next: { revalidate: 60 } },
    );

    if (!document) {
      return fallbackContent;
    }

    return {
      announcement: document.announcement,
      heroEyebrow: document.heroEyebrow || fallbackContent.heroEyebrow,
      heroHeadline: document.heroHeadline || fallbackContent.heroHeadline,
      heroSubtext: document.heroSubtext || fallbackContent.heroSubtext,
      primaryCtaText: document.primaryCtaText || fallbackContent.primaryCtaText,
      primaryCtaLink: document.primaryCtaLink || fallbackContent.primaryCtaLink,
      secondaryCtaText:
        document.secondaryCtaText || fallbackContent.secondaryCtaText,
      secondaryCtaLink:
        document.secondaryCtaLink || fallbackContent.secondaryCtaLink,
      stats: document.stats?.length ? document.stats : fallbackContent.stats,
      processSteps,
      featuredProjects: document.featuredProjects?.length
        ? document.featuredProjects.map(normalizeProject)
        : fallbackContent.featuredProjects,
      featuredServices: document.featuredServices?.length
        ? document.featuredServices.map(normalizeService)
        : fallbackContent.featuredServices,
      featuredTestimonials: document.featuredTestimonials?.length
        ? document.featuredTestimonials.map(normalizeTestimonial)
        : fallbackContent.featuredTestimonials,
    };
  } catch {
    return fallbackContent;
  }
});

function normalizeProject(document: SanityProjectDocument): PortfolioProject {
  const fallback =
    (document.slug ? getProjectBySlug(document.slug) : undefined) ||
    sampleProjects[0];

  const format = isProjectFormat(document.format)
    ? document.format
    : fallback.format;
  const visual = isProjectVisual(document.visual)
    ? document.visual
    : fallback.visual;
  const gallery = document.gallery?.length
    ? document.gallery.map((item, index) => ({
        title: item.title || fallback.gallery[index]?.title || "Project view",
        label: item.label || fallback.gallery[index]?.label || "Gallery",
        description:
          item.description ||
          fallback.gallery[index]?.description ||
          "A project touchpoint prepared for portfolio presentation.",
        visual: isProjectVisual(item.visual)
          ? item.visual
          : fallback.gallery[index]?.visual || visual,
        imageUrl: item.imageUrl,
        imageAlt: item.imageAlt,
      }))
    : fallback.gallery;

  return {
    ...fallback,
    title: document.title || fallback.title,
    slug: document.slug || fallback.slug,
    category: document.category || fallback.category,
    format,
    featured: document.featured ?? fallback.featured,
    year: document.year || fallback.year,
    client: document.client || fallback.client,
    role: document.role || fallback.role,
    accent: document.accent || fallback.accent,
    visual,
    imageUrl: document.imageUrl,
    imageAlt: document.imageAlt,
    summary: document.summary || fallback.summary,
    overview: document.overview || fallback.overview,
    challenge: document.challenge || fallback.challenge,
    direction: document.direction || fallback.direction,
    outcome: document.outcome || fallback.outcome,
    services: document.services?.length ? document.services : fallback.services,
    tools: document.tools?.length ? document.tools : fallback.tools,
    highlights: document.highlights?.length
      ? document.highlights
      : fallback.highlights,
    goals: document.goals?.length ? document.goals : fallback.goals,
    metrics: document.metrics?.length ? document.metrics : fallback.metrics,
    gallery,
    caseStudy:
      format === "Case study"
        ? document.caseStudy || fallback.caseStudy
        : undefined,
    simpleProject:
      format === "Simple project"
        ? document.simpleProject || fallback.simpleProject
        : undefined,
    seoTitle: document.seoTitle || fallback.seoTitle,
    seoDescription: document.seoDescription || fallback.seoDescription,
  };
}

function normalizeService(document: SanityServiceDocument): SiteService {
  const fallback =
    siteConfig.services.find((service) => service.slug === document.slug) ||
    siteConfig.services[0];

  return {
    ...fallback,
    title: document.title || fallback.title,
    slug: document.slug || fallback.slug,
    eyebrow: document.eyebrow || fallback.eyebrow,
    summary: document.summary || fallback.summary,
    description: document.description || fallback.description,
    deliverables: document.deliverables?.length
      ? document.deliverables
      : fallback.deliverables,
    process: document.process?.length ? document.process : fallback.process,
  };
}

function normalizeTestimonial(
  document: SanityTestimonialDocument,
): Testimonial {
  const fallback = testimonials[0];

  return {
    quote: document.quote || fallback.quote,
    name: document.name || fallback.name,
    role: document.role || fallback.role,
    avatarUrl: document.avatarUrl,
    avatarAlt: document.avatarAlt,
    featured: document.featured ?? fallback.featured,
  };
}

function getFeaturedItems<T>(items: T[], count: number) {
  const featured = items.filter(
    (item) => Boolean((item as { featured?: boolean }).featured),
  );

  return (featured.length ? featured : items).slice(0, count);
}

function isProjectFormat(value: unknown): value is ProjectFormat {
  return typeof value === "string" && projectFormats.includes(value as ProjectFormat);
}

function isProjectVisual(value: unknown): value is ProjectVisualType {
  return typeof value === "string" && visualTypes.includes(value as ProjectVisualType);
}
