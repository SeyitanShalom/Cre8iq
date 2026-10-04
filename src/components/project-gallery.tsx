import { ProjectVisual } from "@/components/project-visual";
import type { PortfolioProject } from "@/content";

type ProjectGalleryProps = {
  project: PortfolioProject;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {project.gallery.map((item) => (
        <article
          key={item.title}
          className="interactive-card rounded-lg border border-border bg-background p-4 hover:border-accent"
        >
          <ProjectVisual
            title={item.title}
            category={item.label}
            accent={project.accent}
            visual={item.visual}
            imageUrl={item.imageUrl}
            imageAlt={item.imageAlt}
            compact
          />
          <div className="mt-5">
            <p className="text-sm font-semibold text-accent-strong dark:text-accent">
              {item.label}
            </p>
            <h3 className="mt-2 font-heading text-2xl font-semibold">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-muted">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
