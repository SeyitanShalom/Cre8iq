import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { ProjectVisual } from "@/components/project-visual";
import { sampleProjects } from "@/lib/placeholder-content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sampleProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = sampleProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14">
        <div>
          <p className="text-base font-semibold text-accent-strong dark:text-accent">
            {project.category} / {project.year}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            {project.summary}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="border-t border-border pt-4">
              <p className="text-sm font-semibold text-muted">Client</p>
              <p className="mt-2 text-base font-semibold">{project.client}</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-sm font-semibold text-muted">Role</p>
              <p className="mt-2 text-base font-semibold">{project.role}</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-sm font-semibold text-muted">Format</p>
              <p className="mt-2 text-base font-semibold">{project.format}</p>
            </div>
          </div>
        </div>

        <ProjectVisual
          title={project.title}
          category={project.category}
          accent={project.accent}
        />
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-18 sm:px-10 lg:grid-cols-3 lg:px-14">
          <article>
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Challenge
            </p>
            <p className="mt-4 text-lg leading-8 text-muted">
              {project.challenge}
            </p>
          </article>
          <article>
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Direction
            </p>
            <p className="mt-4 text-lg leading-8 text-muted">
              I focused on the pieces that would make the work feel clearer,
              more intentional, and easier to apply across real touchpoints.
            </p>
          </article>
          <article>
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Outcome
            </p>
            <p className="mt-4 text-lg leading-8 text-muted">
              {project.outcome}
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-18 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-14">
        <div>
          <p className="text-base font-semibold text-accent-strong dark:text-accent">
            Project details
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
            A concise preview of what the full case study can hold.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-heading text-2xl font-semibold">Highlights</h3>
            <ul className="mt-5 grid gap-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="border-l-2 border-accent pl-3 text-base leading-7 text-muted"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-heading text-2xl font-semibold">Tools</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-border bg-background px-3 py-1 text-sm font-semibold text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-6 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:px-14">
          <p className="max-w-2xl text-lg leading-8 text-muted">
            A deeper project archive can include expanded galleries, process
            notes, outcomes, and more detailed case study sections.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 text-base font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-accent"
          >
            Back to portfolio
          </Link>
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
