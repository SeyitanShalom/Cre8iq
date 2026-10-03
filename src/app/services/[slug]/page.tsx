import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { SectionIntro } from "@/components/section-intro";
import {
  getPortfolioProjects,
  getService,
  getServices,
} from "@/sanity/lib/content";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.summary || service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Cre8iq`,
      description: service.summary || service.description,
      url: `/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Cre8iq`,
      description: service.summary || service.description,
    },
  };
}

export async function generateStaticParams() {
  const services = await getServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  const projects = await getPortfolioProjects();
  const relatedProjects = projects
    .filter((project) => project.services.includes(service.title))
    .slice(0, 3);

  return (
    <>
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
        <SectionIntro
          eyebrow={service.eyebrow}
          title={service.title}
          description={service.description}
        />

        <div className="grid content-end gap-4">
          <div className="rounded-lg border border-border bg-surface p-6">
            <p className="text-sm font-semibold uppercase text-muted">
              Useful for
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground">
              Brands, founders, personal brands, and product ideas that need a
              sharper creative direction without losing warmth.
            </p>
          </div>
          <Link
            href="/contact"
            className="button-lift inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-semibold text-deep-navy hover:bg-accent-strong hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Ask about this service
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-18 sm:px-10 lg:grid-cols-2 lg:px-14">
          <div>
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Deliverables
            </p>
            <div className="mt-6 grid gap-3">
              {service.deliverables.map((deliverable) => (
                <div
                  key={deliverable}
                  className="interactive-card rounded-lg border border-border bg-background p-5 hover:border-accent"
                >
                  <p className="font-heading text-xl font-semibold">
                    {deliverable}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Process
            </p>
            <div className="mt-6 grid gap-3">
              {service.process.map((step, index) => (
                <div
                  key={step}
                  className="interactive-card rounded-lg border border-border bg-background p-5 hover:border-accent"
                >
                  <p className="text-sm font-semibold text-muted">
                    Step 0{index + 1}
                  </p>
                  <p className="mt-2 font-heading text-xl font-semibold">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 sm:px-10 lg:px-14">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Related work
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
              Sample projects connected to this service.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="button-lift inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 text-base font-semibold text-foreground hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-accent"
          >
            View all work
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {relatedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="interactive-card rounded-lg border border-border bg-surface p-6 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <p className="text-sm font-semibold text-accent-strong dark:text-accent">
                {project.category}
              </p>
              <h3 className="mt-4 font-heading text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                {project.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Scope the work"
        title={`Need ${service.title.toLowerCase()} support for your next move?`}
        description="Share the goal, audience, timeline, and any existing assets. I will help turn that into a clear creative direction."
        primaryHref="/contact"
        primaryLabel="Start with this service"
        secondaryHref="/services"
        secondaryLabel="Compare services"
      />
    </>
  );
}
