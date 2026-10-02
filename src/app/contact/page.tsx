import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Cre8iq",
  description:
    "Contact Cre8iq for graphic design, UI/UX product design, and web development work.",
};

const projectTypes = [
  "Brand identity or social design",
  "Website design and frontend build",
  "Product interface or app design",
  "Portfolio, landing page, or creative direction",
];

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
      <div>
        <SectionIntro
          eyebrow="Contact"
          title="Have a project, opportunity, or collaboration in mind?"
          description="Send the context, the goal, and any timeline you already have. I will respond with the clearest next step."
        />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20for%20Cre8iq`}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-semibold text-deep-navy transition-colors hover:bg-accent-strong hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Email Cre8iq
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 text-base font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-accent"
          >
            Message on WhatsApp
          </a>
        </div>
        <a
          href={siteConfig.resumeUrl}
          download
          className="mt-4 inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 text-base font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-accent"
        >
          Download CV
        </a>
      </div>

      <div className="grid content-start gap-5">
        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="text-sm font-semibold uppercase text-muted">
            Direct details
          </p>
          <div className="mt-5 grid gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xl font-semibold transition-colors hover:text-accent-strong dark:hover:text-accent"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xl font-semibold transition-colors hover:text-accent-strong dark:hover:text-accent"
            >
              {siteConfig.whatsappDisplay}
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="text-sm font-semibold uppercase text-muted">
            Good starting points
          </p>
          <ul className="mt-5 grid gap-3">
            {projectTypes.map((type) => (
              <li
                key={type}
                className="border-l-2 border-accent pl-3 text-base leading-7 text-foreground"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-deep-navy p-6 text-pure-white">
          <p className="text-sm font-semibold uppercase text-accent">
            What to include
          </p>
          <p className="mt-4 text-lg leading-8 text-white/72">
            A short brief, your deadline, the kind of support you need, and any
            links or files that help explain the work.
          </p>
        </div>
      </div>
    </section>
  );
}
