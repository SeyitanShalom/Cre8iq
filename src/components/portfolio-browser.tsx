"use client";

import {
  BriefcaseBusiness,
  FileText,
  Filter,
  FolderKanban,
  Layers3,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { PortfolioProject } from "@/content";

const allFilter = "All";

type PortfolioBrowserProps = {
  projects: PortfolioProject[];
  categories: string[];
  services: string[];
};

export function PortfolioBrowser({
  projects,
  categories,
  services,
}: PortfolioBrowserProps) {
  const [activeCategory, setActiveCategory] = useState(allFilter);
  const [activeService, setActiveService] = useState(allFilter);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatches =
        activeCategory === allFilter || project.category === activeCategory;
      const serviceMatches =
        activeService === allFilter || project.services.includes(activeService);

      return categoryMatches && serviceMatches;
    });
  }, [activeCategory, activeService, projects]);

  const caseStudyCount = projects.filter(
    (project) => project.format === "Case study",
  ).length;
  const simpleProjectCount = projects.length - caseStudyCount;
  const hasActiveFilters =
    activeCategory !== allFilter || activeService !== allFilter;

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[18rem_1fr] lg:items-start">
      <aside className="interactive-card cre8iq-glass-card rounded-lg p-5 lg:sticky lg:top-24">
        <div>
          <div className="flex items-center gap-3">
            <FolderKanban aria-hidden="true" className="h-5 w-5 text-accent" />
            <p className="text-sm font-semibold uppercase text-muted">
              Portfolio system
            </p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <Stat
              icon={BriefcaseBusiness}
              value={projects.length.toString().padStart(2, "0")}
              label="Projects"
            />
            <Stat
              icon={FileText}
              value={caseStudyCount.toString().padStart(2, "0")}
              label="Case studies"
            />
            <Stat
              icon={Layers3}
              value={simpleProjectCount.toString().padStart(2, "0")}
              label="Simple"
            />
          </div>
        </div>

        <FilterGroup
          className="mt-8"
          label="Discipline"
          options={[allFilter, ...categories]}
          value={activeCategory}
          onChange={setActiveCategory}
        />

        <FilterGroup
          className="mt-8"
          label="Service"
          options={[allFilter, ...services]}
          value={activeService}
          onChange={setActiveService}
        />
      </aside>

      <div>
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-center">
          <p className="text-base font-semibold text-muted" aria-live="polite">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={() => {
                setActiveCategory(allFilter);
                setActiveService(allFilter);
              }}
              className="button-lift inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-semibold text-foreground hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-accent"
            >
              <X aria-hidden="true" className="h-4 w-4" />
              Clear filters
            </button>
          ) : null}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="motion-soft cre8iq-glass-card mt-6 rounded-lg p-8">
            <h2 className="font-heading text-2xl font-semibold">
              No projects match those filters yet.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              The local content files make this archive easy to expand. For
              now, clear one filter to browse the current sample work.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof BriefcaseBusiness;
  value: string;
  label: string;
}) {
  return (
    <div className="cre8iq-panel rounded-md px-2 py-3">
      <Icon aria-hidden="true" className="mx-auto mb-2 h-4 w-4 text-accent" />
      <p className="font-heading text-xl font-semibold text-accent-strong dark:text-accent">
        {value}
      </p>
      <p className="mt-1 text-xs font-semibold text-muted">{label}</p>
    </div>
  );
}

function FilterGroup({
  className,
  label,
  options,
  value,
  onChange,
}: {
  className?: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <Filter aria-hidden="true" className="h-4 w-4 text-accent" />
        <p className="text-sm font-semibold uppercase text-muted">{label}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 lg:grid">
        {options.map((option) => {
          const isActive = option === value;

          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option)}
              className={`button-lift min-h-10 rounded-md border px-3 text-left text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isActive
                  ? "border-accent bg-accent text-deep-navy"
                  : "border-border bg-background text-muted hover:border-accent hover:text-foreground"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
