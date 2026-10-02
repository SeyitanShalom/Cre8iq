import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import { sampleProjects } from "@/lib/placeholder-content";

type Project = (typeof sampleProjects)[number];

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`group grid gap-5 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        featured ? "lg:grid-cols-[0.95fr_1.05fr] lg:items-center" : ""
      }`}
    >
      <ProjectVisual
        title={project.title}
        category={project.category}
        accent={project.accent}
        compact={!featured}
      />
      <div className="p-1">
        <p className="text-sm font-semibold text-accent-strong dark:text-accent">
          {project.category} / {project.year}
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight">
          {project.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted">
          {project.summary}
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
        <p className="mt-6 text-sm font-semibold text-accent-strong transition-colors group-hover:text-foreground dark:text-accent">
          View project
        </p>
      </div>
    </Link>
  );
}
