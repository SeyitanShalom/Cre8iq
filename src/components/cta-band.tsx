"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

type CtaBandProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const revealItems = gsap.utils.toArray<HTMLElement>(
      "[data-cta-reveal]",
      section,
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(revealItems, { autoAlpha: 1, y: 0 });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        revealItems,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 86%",
            once: true,
          },
        },
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border text-foreground"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[1fr_0.42fr] lg:items-center lg:px-14">
        <div data-cta-reveal>
          <p className="text-sm font-semibold text-accent">{eyebrow}</p>
          <h2 className="mt-4 max-w-4xl font-heading text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            {description}
          </p>
          {secondaryHref && secondaryLabel ? (
            <div className="mt-8">
              <Link
                href={secondaryHref}
                className="button-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-base font-semibold text-foreground hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Sparkles aria-hidden="true" className="h-5 w-5" />
                {secondaryLabel}
              </Link>
            </div>
          ) : null}
        </div>
        <div data-cta-reveal className="flex lg:justify-end">
          <Link
            href={primaryHref}
            className="group relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-accent text-center text-base font-semibold text-deep-navy transition-transform duration-500 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:h-44 md:w-44"
          >
            <span className="absolute inset-0 scale-0 rounded-full bg-accent-strong transition-transform duration-500 group-hover:scale-100" />
            <span className="relative z-10 max-w-24 group-hover:text-pure-white">
              {primaryLabel}
            </span>
            <ArrowRight
              aria-hidden="true"
              className="absolute bottom-9 right-9 z-10 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-pure-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
