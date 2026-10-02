import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { ProjectCard } from "@/components/project-card";
import { SectionIntro } from "@/components/section-intro";
import { sampleProjects } from "@/lib/placeholder-content";

export const metadata: Metadata = {
  title: "Portfolio | Cre8iq",
  description:
    "Explore sample Cre8iq portfolio projects across design, product, and web development.",
};

const categories = Array.from(
  new Set(sampleProjects.map((project) => project.category)),
);

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
        <SectionIntro
          eyebrow="Portfolio"
          title="Selected sample work across brand visuals, product design, and web development."
          description="A focused archive of visual systems, product concepts, and refined web experiences, shaped to show both the thinking and the finish."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-muted"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Have work that needs this kind of presentation?"
        title="Let us shape the next project into something clear, polished, and easy to explore."
        description="A strong project page should make the problem, process, and final direction feel simple to understand."
        primaryHref="/contact"
        primaryLabel="Discuss a project"
        secondaryHref="/services"
        secondaryLabel="Explore services"
      />
    </>
  );
}
