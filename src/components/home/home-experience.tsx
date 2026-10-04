"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ProjectVisual } from "@/components/project-visual";
import type { HomePageContent, PortfolioProject } from "@/content";

type HomeExperienceProps = {
  home: HomePageContent;
};

export function HomeExperience({ home }: HomeExperienceProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const headlineLines = useMemo(
    () => splitIntoLines(home.heroHeadline, 3),
    [home.heroHeadline],
  );
  const marqueeItems = useMemo(
    () =>
      [
        ...home.featuredServices.map((service) => service.title),
        ...home.featuredProjects.map((project) => project.client),
        "Cre8iq",
        "Lagos",
      ].filter(Boolean),
    [home.featuredProjects, home.featuredServices],
  );
  const manifestoWords = useMemo(
    () =>
      `${home.heroSubtext} Three connected ways I help brands look and work better. A clear creative path keeps the final work focused.`
        .split(" ")
        .filter(Boolean),
    [home.heroSubtext],
  );
  const activeQuote = home.featuredTestimonials[activeTestimonial];
  const spotlightProject = home.featuredProjects[0];

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(root.querySelectorAll("[data-gsap-initial]"), {
        autoAlpha: 1,
        y: 0,
      });
      return;
    }

    let cleanupMouse: (() => void) | undefined;
    const context = gsap.context(() => {
      const heroLines = gsap.utils.toArray<HTMLElement>("[data-hero-line]");
      const heroCopy = gsap.utils.toArray<HTMLElement>("[data-hero-copy]");

      gsap.set(heroLines, { yPercent: 120, rotate: 2 });
      gsap.set(heroCopy, { autoAlpha: 0, y: 24 });

      gsap
        .timeline({ delay: 0.18 })
        .to(
          heroLines,
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.25,
            stagger: 0.09,
            ease: "expo.out",
          },
        )
        .to(
          heroCopy,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.55",
        );

      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

      if (hasFinePointer) {
        const handleMouseMove = (event: MouseEvent) => {
          const x = (event.clientX / window.innerWidth - 0.5) * 22;
          const y = (event.clientY / window.innerHeight - 0.5) * 22;

          gsap.to(heroLines, {
            x,
            y: y * 0.4,
            duration: 1.35,
            stagger: 0.01,
            ease: "power2.out",
          });
        };

        window.addEventListener("mousemove", handleMouseMove);
        cleanupMouse = () =>
          window.removeEventListener("mousemove", handleMouseMove);
      }

      gsap.to("[data-manifesto-word]", {
        color: "var(--foreground)",
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-manifesto]",
          start: "top 78%",
          end: "bottom 48%",
          scrub: 1,
        },
      });

      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 28,
          ease: "none",
        });
      }

      gsap.utils
        .toArray<HTMLElement>("[data-home-reveal]")
        .forEach((element, index) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              delay: Math.min(index * 0.03, 0.18),
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 84%",
                once: true,
              },
            },
          );
        });

      gsap.utils.toArray<HTMLElement>("[data-counter-value]").forEach((el) => {
        const rawValue = el.dataset.counterValue || el.textContent || "0";
        const match = rawValue.match(/\d+/);

        if (!match) {
          return;
        }

        const target = Number(match[0]);
        const paddedLength = match[0].startsWith("0") ? match[0].length : 0;
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 2.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            const current = Math.ceil(counter.value)
              .toString()
              .padStart(paddedLength, "0");
            el.textContent = rawValue.replace(/\d+/, current);
          },
        });
      });
    }, root);

    return () => {
      cleanupMouse?.();
      context.revert();
    };
  }, []);

  useEffect(() => {
    if (home.featuredTestimonials.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveTestimonial(
        (current) => (current + 1) % home.featuredTestimonials.length,
      );
    }, 6200);

    return () => window.clearInterval(interval);
  }, [home.featuredTestimonials.length]);

  useEffect(() => {
    const quote = testimonialRef.current;

    if (!quote || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.fromTo(
      quote,
      { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, duration: 0.72, ease: "power3.out" },
    );
  }, [activeTestimonial]);

  return (
    <div ref={rootRef} className="text-foreground">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-14 pt-32 sm:px-10 lg:px-14">
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-7xl flex-col justify-between">
          <div>
            <div data-hero-copy className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase text-muted">
                {home.announcement || home.heroEyebrow}
              </span>
              <span className="h-px w-10 bg-accent" />
              <span className="text-sm text-muted">Remote collaboration</span>
            </div>

            <h1 className="mt-10 max-w-5xl font-heading text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-6xl">
              {headlineLines.map((line, index) => (
                <span key={line} className="block overflow-hidden pb-4">
                  <span
                    data-hero-line
                    className={`block will-change-transform ${
                      index === 1 ? "text-muted" : ""
                    }`}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div className="grid gap-10 pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div data-hero-copy>
              <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
                {home.heroSubtext}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={home.primaryCtaLink}
                  className="button-lift inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 text-base font-semibold text-deep-navy hover:bg-surface-strong hover:text-pure-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {home.primaryCtaText}
                </Link>
                <Link
                  href={home.secondaryCtaLink}
                  className="button-lift inline-flex min-h-12 items-center justify-center rounded-full border border-border px-7 text-base font-semibold text-foreground hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {home.secondaryCtaText}
                </Link>
              </div>
            </div>

            <div
              data-hero-copy
              className="grid gap-4 sm:grid-cols-3 lg:justify-self-end"
            >
              {home.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t border-border pt-5 text-left"
                >
                  <p className="font-heading text-3xl font-semibold text-accent md:text-4xl">
                    <span data-counter-value={stat.value}>
                      {stat.value}
                    </span>
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        data-manifesto
        className="relative overflow-hidden border-t border-border px-6 py-24 sm:px-10 md:py-32 lg:px-14"
      >
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-12 text-xs font-semibold uppercase text-muted">
            Manifesto
          </p>
          <p className="cre8iq-word-idle flex flex-wrap justify-center gap-x-3 gap-y-3 font-heading text-2xl leading-tight sm:text-3xl md:text-4xl">
            {manifestoWords.map((word, index) => (
              <span key={`${word}-${index}`} data-manifesto-word>
                {word}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border py-16">
        <p className="relative z-10 mb-10 text-center text-xs font-semibold uppercase text-muted">
          Creative range
        </p>
        <div className="cre8iq-edge-mask relative z-10 flex overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex w-fit shrink-0 items-center gap-14 whitespace-nowrap px-7 will-change-transform md:gap-24"
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="font-heading text-2xl text-muted transition-colors duration-500 hover:text-foreground md:text-4xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative overflow-hidden border-t border-border px-6 py-24 sm:px-10 md:py-32 lg:px-14"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div data-home-reveal className="max-w-3xl">
            <p className="text-sm font-semibold text-accent">Services</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
              Three connected ways I help brands look and work better.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {home.featuredServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                data-home-reveal
                className="cre8iq-glass-card group relative min-h-80 rounded-lg p-6 transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="cre8iq-faint-text font-heading text-4xl transition-colors duration-500 group-hover:text-accent">
                      0{index + 1}
                    </p>
                    <p className="mt-8 text-sm font-semibold text-accent">
                      {service.eyebrow}
                    </p>
                    <h3 className="mt-4 font-heading text-2xl font-semibold">
                      {service.title}
                    </h3>
                  </div>
                  <div>
                    <div className="mb-6 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                    <p className="text-base leading-7 text-muted transition-colors duration-500 group-hover:text-foreground">
                      {service.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="relative overflow-hidden border-t border-border px-6 py-24 sm:px-10 md:py-32 lg:px-14"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div
            data-home-reveal
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-accent">Featured work</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                A sample of the kind of work Cre8iq is built to hold.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="button-lift inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-base font-semibold text-foreground hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              See portfolio
            </Link>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {spotlightProject ? (
              <div data-home-reveal className="lg:sticky lg:top-28 lg:self-start">
                <ProjectVisual
                  title={spotlightProject.title}
                  category={spotlightProject.category}
                  accent={spotlightProject.accent}
                  visual={spotlightProject.visual}
                  imageUrl={spotlightProject.imageUrl}
                  imageAlt={spotlightProject.imageAlt}
                  priority
                />
              </div>
            ) : null}

            <div data-home-reveal className="border-t border-border">
              {home.featuredProjects.map((project, index) => (
                <WorkRow key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border px-6 py-24 sm:px-10 md:py-32 lg:px-14">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div data-home-reveal className="max-w-3xl">
            <p className="text-sm font-semibold text-accent">My process</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
              A clear creative path keeps the final work focused.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {home.processSteps.map((step, index) => (
              <article
                key={step.title}
                data-home-reveal
                className="cre8iq-glass-card rounded-lg p-6 transition-colors duration-500"
              >
                <p className="font-heading text-3xl font-semibold text-accent">
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

      {activeQuote ? (
        <section className="relative overflow-hidden border-t border-border px-6 py-24 sm:px-10 md:py-32 lg:px-14">
          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div data-home-reveal>
              <p className="text-sm font-semibold text-accent">Testimonials</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight">
                Early proof points for the kind of client experience I want
                Cre8iq to stand for.
              </h2>
            </div>
            <div
              data-home-reveal
              className="cre8iq-glass-card rounded-lg p-7 sm:p-10"
            >
              <div ref={testimonialRef}>
                <blockquote className="font-heading text-2xl leading-tight text-foreground sm:text-3xl">
                  &ldquo;{activeQuote.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8">
                  <p className="text-lg font-semibold text-foreground">
                    {activeQuote.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {activeQuote.role}
                  </p>
                </figcaption>
              </div>

              {home.featuredTestimonials.length > 1 ? (
                <div className="mt-8 flex gap-3">
                  {home.featuredTestimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.name}
                      type="button"
                      aria-label={`Show testimonial from ${testimonial.name}`}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeTestimonial === index
                          ? "w-8 bg-accent"
                          : "w-2.5 bg-surface-strong hover:bg-accent"
                      }`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

function WorkRow({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      data-cursor="interactive"
      className="group relative grid gap-4 overflow-hidden border-b border-border py-7 transition-colors duration-500 hover:bg-surface md:grid-cols-[4rem_1fr_0.7fr_4rem] md:items-center md:px-4"
    >
      <div className="absolute inset-0 translate-y-full bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 transition-transform duration-500 group-hover:translate-y-0" />
      <span className="relative z-10 text-sm font-semibold text-muted transition-colors duration-500 group-hover:text-foreground">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="relative z-10 font-heading text-2xl font-semibold text-foreground transition-all duration-500 group-hover:translate-x-3 group-hover:text-accent md:text-4xl">
        {project.title}
      </h3>
      <p className="relative z-10 text-base leading-7 text-muted transition-colors duration-500 group-hover:text-foreground">
        {project.category}
      </p>
      <span className="relative z-10 text-sm font-semibold text-muted transition-colors duration-500 group-hover:text-foreground">
        {project.year}
      </span>
    </Link>
  );
}

function splitIntoLines(text: string, desiredLines: number) {
  const words = text.split(" ").filter(Boolean);
  const lines: string[] = [];
  const wordsPerLine = Math.ceil(words.length / desiredLines);

  for (let index = 0; index < desiredLines; index += 1) {
    const line = words
      .slice(index * wordsPerLine, (index + 1) * wordsPerLine)
      .join(" ");

    if (line) {
      lines.push(line);
    }
  }

  return lines.length ? lines : [text];
}
