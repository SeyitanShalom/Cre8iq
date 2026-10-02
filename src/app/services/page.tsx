import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectionIntro } from "@/components/section-intro";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Cre8iq",
  description:
    "Explore Cre8iq services across graphic design, UI/UX product design, and web development.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
        <SectionIntro
          eyebrow="Services"
          title="Design and development support for brands that need clarity, polish, and digital presence."
          description="Cre8iq connects visual design, product thinking, and frontend execution so your brand can look sharper and feel easier to use."
        />

        <div className="mt-12 grid gap-5">
          {siteConfig.services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="grid gap-8 rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:grid-cols-[0.75fr_1.25fr]"
            >
              <div>
                <p className="text-sm font-semibold text-accent-strong dark:text-accent">
                  {service.eyebrow}
                </p>
                <h2 className="mt-4 font-heading text-3xl font-semibold">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">
                  {service.description}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase text-muted">
                    Deliverables
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {service.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="border-l-2 border-accent pl-3 text-base leading-7 text-foreground"
                      >
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase text-muted">
                    How it moves
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {service.process.map((step) => (
                      <li
                        key={step}
                        className="border-l-2 border-border pl-3 text-base leading-7 text-muted"
                      >
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-18 sm:px-10 lg:grid-cols-3 lg:px-14">
          <div>
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Best fit
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight">
              Launching something new
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Brand visuals, product screens, and a web presence can be shaped
              together from the beginning.
            </p>
          </div>
          <div>
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Also useful for
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight">
              Refining an existing brand
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              I can help tighten visuals, improve interface clarity, or rebuild
              a page that no longer represents the work well.
            </p>
          </div>
          <div>
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Output
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight">
              Work that is ready to use
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              The goal is not just a pretty presentation. It is a practical
              design or build that can support the next step.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Need help choosing?"
        title="Tell me where the brand or product feels stuck, and I will help point the work in the right direction."
        description="You can start with the problem, the goal, or the kind of output you need. The first step is getting the scope clear."
        primaryHref="/contact"
        primaryLabel="Discuss a project"
        secondaryHref="/portfolio"
        secondaryLabel="See sample work"
      />
    </>
  );
}
