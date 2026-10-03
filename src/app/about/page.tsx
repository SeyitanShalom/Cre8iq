import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { SectionIntro } from "@/components/section-intro";
import { processSteps, tools } from "@/lib/placeholder-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the personal creative direction behind Cre8iq and the design approach shaping the portfolio.",
  alternates: {
    canonical: "/about",
  },
};

const strengths = [
  {
    title: "Visual taste",
    description:
      "I care about the mood, hierarchy, spacing, and finish that make a brand feel more deliberate.",
  },
  {
    title: "Product clarity",
    description:
      "I think through how people move, decide, scan, and understand a digital experience.",
  },
  {
    title: "Build awareness",
    description:
      "I design with implementation in mind so the final website can feel close to the intended direction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14">
        <SectionIntro
          eyebrow="About Cre8iq"
          title="Cre8iq is my personal creative space for design that feels thoughtful, useful, and refined."
          description="I work across graphic design, UI/UX product design, and web development. That mix helps me think about how a brand looks, how a product feels, and how a website actually works once people start using it."
        />

        <div className="grid content-end gap-4">
          {strengths.map((strength) => (
            <article
              key={strength.title}
              className="interactive-card rounded-lg border border-border bg-surface p-6 hover:border-accent"
            >
              <h2 className="font-heading text-2xl font-semibold">
                {strength.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-muted">
                {strength.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-18 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-14">
          <div>
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              What I bring together
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
              A practical blend of creativity, structure, and frontend thinking.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="interactive-card rounded-lg border border-border bg-background p-6 hover:border-accent">
              <h3 className="font-heading text-2xl font-semibold">
                Design with direction
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                Every visual choice should support a clearer message, a better
                first impression, or a smoother user decision.
              </p>
            </div>
            <div className="interactive-card rounded-lg border border-border bg-background p-6 hover:border-accent">
              <h3 className="font-heading text-2xl font-semibold">
                Development with taste
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">
                The build should protect the design quality while staying fast,
                responsive, and easy to keep improving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 sm:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-base font-semibold text-accent-strong dark:text-accent">
              Process
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
              I like work that moves with calm, clear steps.
            </h2>
            <a
              href={siteConfig.resumeUrl}
              download
              className="button-lift mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-semibold text-deep-navy hover:bg-accent-strong hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Download CV
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="interactive-card rounded-lg border border-border bg-surface p-6 hover:border-accent"
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
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-7xl px-6 py-18 sm:px-10 lg:px-14">
          <p className="text-base font-semibold text-accent-strong dark:text-accent">
            Tools
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight">
            Tools I use to shape visuals, interfaces, and responsive websites.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="button-lift rounded-md border border-border bg-background px-4 py-2 text-base font-semibold text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with me"
        title="Bring a clear idea, rough idea, or messy idea. I can help shape it."
        description="The strongest projects usually start with honest context: what you are building, who it is for, and what needs to feel better."
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/portfolio"
        secondaryLabel="View work"
      />
    </>
  );
}
