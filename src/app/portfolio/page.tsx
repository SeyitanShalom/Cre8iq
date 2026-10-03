import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PortfolioBrowser } from "@/components/portfolio-browser";
import { SectionIntro } from "@/components/section-intro";
import {
  getProjectCategories,
  getProjectServices,
} from "@/lib/placeholder-content";
import { getPortfolioProjects } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore sample Cre8iq portfolio projects across design, product, and web development.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
        <SectionIntro
          eyebrow="Portfolio"
          title="Selected sample work across brand visuals, product design, and web development."
          description="A focused archive of visual systems, product concepts, and refined web experiences, shaped to show both the thinking and the finish."
        />

        <PortfolioBrowser
          projects={projects}
          categories={getProjectCategories(projects)}
          services={getProjectServices(projects)}
        />
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
