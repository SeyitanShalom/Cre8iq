import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { ProjectCard } from "@/components/project-card";
import { ProjectGallery } from "@/components/project-gallery";
import { ProjectVisual } from "@/components/project-visual";
import { defaultSeo } from "@/lib/seo";
import {
  getPortfolioProjects,
  getProject,
  getRelatedProjects,
  type PortfolioProject,
} from "@/content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const projects = await getPortfolioProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | Cre8iq",
    };
  }

  return {
    title: project.seoTitle || project.title,
    description: project.seoDescription || project.summary,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Cre8iq`,
      description: project.seoDescription || project.summary,
      url: `/portfolio/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.imageUrl || defaultSeo.image,
          width: 1200,
          height: 630,
          alt: project.imageAlt || `${project.title} by Cre8iq`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Cre8iq`,
      description: project.seoDescription || project.summary,
      images: [project.imageUrl || defaultSeo.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(project);

  return (
    <>
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-14">
        <div>
          <Link
            href="/portfolio"
            className="text-link-motion text-sm font-semibold text-accent-strong hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-accent dark:hover:text-foreground"
          >
            Back to portfolio
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-accent px-3 py-1 text-sm font-semibold text-deep-navy">
              {project.format}
            </span>
            <span className="text-sm font-semibold text-muted">
              {project.category} / {project.year}
            </span>
          </div>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            {project.summary}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <MetaBlock label="Client" value={project.client} />
            <MetaBlock label="Role" value={project.role} />
            <MetaBlock label="Primary service" value={project.services[0]} />
          </div>
        </div>

        <ProjectVisual
          title={project.title}
          category={project.category}
          accent={project.accent}
          visual={project.visual}
          imageUrl={project.imageUrl}
          imageAlt={project.imageAlt}
          priority
        />
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 sm:px-10 lg:grid-cols-4 lg:px-14">
          <NarrativeBlock title="Overview" body={project.overview} />
          <NarrativeBlock title="Challenge" body={project.challenge} />
          <NarrativeBlock title="Direction" body={project.direction} />
          <NarrativeBlock title="Outcome" body={project.outcome} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 sm:px-10 lg:px-14">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Project gallery
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
              Polished mockups that show the work across real touchpoints.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-md border border-border bg-surface px-3 py-1 text-sm font-semibold text-muted"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <ProjectGallery project={project} />
        </div>
      </section>

      {project.caseStudy ? (
        <CaseStudyLayout project={project} />
      ) : (
        <SimpleProjectLayout project={project} />
      )}

      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-6 py-18 sm:px-10 lg:px-14">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-base font-semibold text-accent-strong dark:text-accent">
                Related work
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
                More sample projects with a similar creative direction.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="button-lift inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 text-base font-semibold text-foreground hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-accent"
            >
              View all work
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {relatedProjects.map((relatedProject) => (
              <ProjectCard key={relatedProject.slug} project={relatedProject} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Have a similar project?"
        title="Let us shape a visual direction, product flow, or website with the same level of care."
        description="Send the project context and what needs to improve. I will help you define the next practical step."
        primaryHref="/contact"
        primaryLabel="Start a project"
        secondaryHref="/services"
        secondaryLabel="View services"
      />
    </>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border pt-4">
      <p className="text-sm font-semibold text-muted">{label}</p>
      <p className="mt-2 text-base font-semibold">{value}</p>
    </div>
  );
}

function NarrativeBlock({ title, body }: { title: string; body: string }) {
  return (
    <article>
      <p className="text-base font-semibold text-accent-strong dark:text-accent">
        {title}
      </p>
      <p className="mt-4 text-base leading-7 text-muted">{body}</p>
    </article>
  );
}

function CaseStudyLayout({ project }: { project: PortfolioProject }) {
  const caseStudy = project.caseStudy;

  if (!caseStudy) {
    return null;
  }

  return (
    <section className="border-t border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-18 sm:px-10 lg:grid-cols-[0.74fr_1.26fr] lg:px-14">
        <div>
          <p className="text-base font-semibold text-accent-strong dark:text-accent">
            Case study
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
            The thinking behind the finished direction.
          </h2>

          <div className="mt-8 grid gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="interactive-card rounded-lg border border-border bg-surface p-5 hover:border-accent"
              >
                <p className="font-heading text-3xl font-semibold text-accent-strong dark:text-accent">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-muted">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <article className="interactive-card rounded-lg border border-border bg-surface p-6 hover:border-accent">
            <h3 className="font-heading text-2xl font-semibold">Goals</h3>
            <ul className="mt-5 grid gap-3">
              {project.goals.map((goal) => (
                <li
                  key={goal}
                  className="border-l-2 border-accent pl-3 text-base leading-7 text-muted"
                >
                  {goal}
                </li>
              ))}
            </ul>
          </article>

          <article className="interactive-card rounded-lg border border-border bg-surface p-6 hover:border-accent">
            <h3 className="font-heading text-2xl font-semibold">Process</h3>
            <ol className="mt-5 grid gap-4">
              {caseStudy.process.map((step, index) => (
                <li
                  key={step}
                  className="grid gap-3 border-l-2 border-border pl-4 sm:grid-cols-[3rem_1fr]"
                >
                  <span className="font-heading text-2xl font-semibold text-accent-strong dark:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-7 text-muted">{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="interactive-card rounded-lg border border-border bg-surface p-6 hover:border-accent">
            <h3 className="font-heading text-2xl font-semibold">Solution</h3>
            <p className="mt-4 text-base leading-7 text-muted">
              {caseStudy.solution}
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {caseStudy.results.map((result) => (
                <p
                  key={result}
                  className="rounded-md border border-border bg-background p-4 text-sm font-semibold leading-6 text-muted"
                >
                  {result}
                </p>
              ))}
            </div>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            {caseStudy.sections.map((section) => (
              <article
                key={section.title}
                className="interactive-card rounded-lg border border-border bg-surface p-6 hover:border-accent"
              >
                <h3 className="font-heading text-2xl font-semibold">
                  {section.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted">
                  {section.description}
                </p>
                <ul className="mt-5 grid gap-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="border-l-2 border-accent pl-3 text-base leading-7 text-muted"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SimpleProjectLayout({ project }: { project: PortfolioProject }) {
  const simpleProject = project.simpleProject;

  if (!simpleProject) {
    return null;
  }

  return (
    <section className="border-t border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-18 sm:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:px-14">
        <div>
          <p className="text-base font-semibold text-accent-strong dark:text-accent">
            Simple project
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
            A compact project record focused on scope, output, and handoff.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            {simpleProject.scope}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <DetailList title="Deliverables" items={simpleProject.deliverables} />
          <DetailList title="Handoff" items={simpleProject.handoff} />
          <DetailList title="Highlights" items={project.highlights} />
          <DetailList title="Tools" items={project.tools} compact />
        </div>
      </div>
    </section>
  );
}

function DetailList({
  title,
  items,
  compact = false,
}: {
  title: string;
  items: string[];
  compact?: boolean;
}) {
  return (
    <article className="interactive-card rounded-lg border border-border bg-surface p-6 hover:border-accent">
      <h3 className="font-heading text-2xl font-semibold">{title}</h3>
      <ul className={`mt-5 ${compact ? "flex flex-wrap gap-2" : "grid gap-3"}`}>
        {items.map((item) => (
          <li
            key={item}
            className={
              compact
                ? "rounded-md border border-border bg-background px-3 py-1 text-sm font-semibold text-muted"
                : "border-l-2 border-accent pl-3 text-base leading-7 text-muted"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
