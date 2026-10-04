import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers3,
  Palette,
  PackageCheck,
  RefreshCw,
  Rocket,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectionIntro } from "@/components/section-intro";
import { getServices } from "@/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Cre8iq services across graphic design, UI/UX product design, and web development.",
  alternates: {
    canonical: "/services",
  },
};

const serviceIcons = {
  "graphic-design": Palette,
  "ui-ux-product-design": Layers3,
  "web-development": Code2,
};

const supportCards = [
  {
    eyebrow: "Best fit",
    title: "Launching something new",
    description:
      "Brand visuals, product screens, and a web presence can be shaped together from the beginning.",
    icon: Rocket,
  },
  {
    eyebrow: "Also useful for",
    title: "Refining an existing brand",
    description:
      "I can help tighten visuals, improve interface clarity, or rebuild a page that no longer represents the work well.",
    icon: RefreshCw,
  },
  {
    eyebrow: "Output",
    title: "Work that is ready to use",
    description:
      "The goal is not just a pretty presentation. It is a practical design or build that can support the next step.",
    icon: PackageCheck,
  },
];

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
        <SectionIntro
          eyebrow="Services"
          title="Design and development support for brands that need clarity, polish, and digital presence."
          description="Cre8iq connects visual design, product thinking, and frontend execution so your brand can look sharper and feel easier to use."
        />

        <div className="mt-12 grid gap-5">
          {services.map((service) => {
            const ServiceIcon =
              serviceIcons[service.slug as keyof typeof serviceIcons] || Sparkles;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="interactive-card group grid gap-8 rounded-lg border border-border bg-surface p-6 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:grid-cols-[0.75fr_1.25fr]"
              >
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-md border border-border bg-background/40 text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-deep-navy">
                    <ServiceIcon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <p className="mt-6 text-sm font-semibold text-accent-strong dark:text-accent">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-4 font-heading text-3xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-muted">
                    {service.description}
                  </p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong transition-colors group-hover:text-foreground dark:text-accent">
                    Explore service
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
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
                          className="flex gap-3 text-base leading-7 text-foreground"
                        >
                          <CheckCircle2
                            aria-hidden="true"
                            className="mt-1 h-5 w-5 shrink-0 text-accent"
                          />
                          <span>{deliverable}</span>
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
                          className="flex gap-3 text-base leading-7 text-muted"
                        >
                          <ArrowRight
                            aria-hidden="true"
                            className="mt-1 h-5 w-5 shrink-0 text-accent-strong dark:text-accent"
                          />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-18 sm:px-10 lg:grid-cols-3 lg:px-14">
          {supportCards.map((card) => {
            const CardIcon = card.icon;

            return (
              <div
                key={card.title}
                className="interactive-card rounded-lg border border-transparent p-5"
              >
                <CardIcon aria-hidden="true" className="h-7 w-7 text-accent" />
                <p className="mt-5 text-base font-semibold text-accent-strong dark:text-accent">
                  {card.eyebrow}
                </p>
                <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight">
                  {card.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">
                  {card.description}
                </p>
              </div>
            );
          })}
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
