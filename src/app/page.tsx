import { CtaBand } from "@/components/cta-band";
import { HomeExperience } from "@/components/home/home-experience";
import { getHomePageContent } from "@/sanity/lib/content";

export default async function Home() {
  const home = await getHomePageContent();

  return (
    <>
      <HomeExperience home={home} />

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
