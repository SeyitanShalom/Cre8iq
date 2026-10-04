import { ArrowUpRight, BriefcaseBusiness, Tag } from "lucide-react";
import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import type { PortfolioProject } from "@/content";

type ProjectCardProps = {
  project: PortfolioProject;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`interactive-card cre8iq-glass-card group grid gap-5 rounded-lg p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        featured ? "lg:grid-cols-[0.95fr_1.05fr] lg:items-center" : ""
      }`}
    >
      <ProjectVisual
        title={project.title}
        category={project.category}
        accent={project.accent}
        visual={project.visual}
        imageUrl={project.imageUrl}
        imageAlt={project.imageAlt}
        priority={featured}
        compact={!featured}
      />
      <div className="p-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-strong dark:text-accent">
            <BriefcaseBusiness aria-hidden="true" className="h-4 w-4" />
            {project.category} / {project.year}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-semibold text-muted">
            <Tag aria-hidden="true" className="h-3.5 w-3.5" />
            {project.format}
          </span>
        </div>
        <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight">
          {project.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted">
          {project.summary}
        </p>
        <p className="mt-4 text-sm font-semibold text-muted">
          {project.client} / {project.role}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="rounded-md border border-border px-3 py-1 text-sm font-semibold text-muted"
            >
              {service}
            </span>
          ))}
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong transition-colors group-hover:text-foreground dark:text-accent">
          View {project.format === "Case study" ? "case study" : "project"}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </p>
      </div>
    </Link>
  );
}
