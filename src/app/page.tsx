import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { CtaBand } from "@/components/cta-band";
import { ProjectCard } from "@/components/project-card";
import {
  homepageStats,
  processSteps,
  sampleProjects,
  testimonials,
} from "@/lib/placeholder-content";
import { siteConfig } from "@/lib/site";

const featuredProjects = sampleProjects.slice(0, 3);

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-deep-navy text-pure-white">
        <div className="absolute inset-y-10 right-[-6rem] hidden w-[42rem] opacity-[0.08] lg:block">
          <BrandLogo className="h-auto w-full" priority />
        </div>
        <div className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl flex-col justify-between px-6 py-14 sm:px-10 lg:px-14">
          <div className="max-w-5xl">
            <p className="text-base font-semibold text-accent">
              Premium personal creative / Lagos, Nigeria
            </p>
            <h1 className="mt-6 font-heading text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">
              I design brand visuals, product experiences, and websites that
              feel clear, beautiful, and built to work.
            </h1>
          </div>

          <div className="grid gap-10 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <p className="max-w-xl text-lg leading-8 text-white/72">
              Cre8iq is my personal creative brand for thoughtful visual
              systems, intuitive digital products, and refined web experiences
              that help ideas look sharper and move with more confidence.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {homepageStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t border-white/15 pt-5"
                >
                  <p className="font-heading text-4xl font-semibold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/64">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-semibold text-deep-navy transition-colors hover:bg-pure-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View selected work
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-6 text-base font-semibold text-pure-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 sm:px-10 lg:px-14">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Featured work
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              A sample of the kind of work Cre8iq is built to hold.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 text-base font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-accent"
          >
            See portfolio
          </Link>
        </div>

        <div className="mt-10 grid gap-5">
          <ProjectCard project={featuredProjects[0]} featured />
          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.slice(1).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-18 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">
          <div>
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Services
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
              Three connected ways I help brands look and work better.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {siteConfig.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-lg border border-border bg-background p-6 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <p className="text-sm font-semibold text-accent-strong dark:text-accent">
                  {service.eyebrow}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted">
                  {service.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 sm:px-10 lg:px-14">
        <div className="max-w-3xl">
          <p className="text-base font-semibold text-accent-strong dark:text-accent">
            My process
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            A clear creative path keeps the final work focused.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <p className="font-heading text-3xl font-semibold text-accent-strong dark:text-accent">
                0{index + 1}
              </p>
              <h3 className="mt-5 font-heading text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-7xl px-6 py-18 sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Testimonials
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
              Early proof points for the kind of client experience I want
              Cre8iq to stand for.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-lg border border-border bg-background p-6"
              >
                <blockquote className="text-lg leading-8 text-foreground">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-heading text-lg font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when the idea is ready"
        title="Let us turn the next brand, interface, or website into something sharper."
        description="Send the project goal, timeline, and what you already have. I will help you shape the next step with clarity."
        primaryHref="/contact"
        primaryLabel="Contact Cre8iq"
        secondaryHref="/services"
        secondaryLabel="Explore services"
      />
    </>
  );
}
