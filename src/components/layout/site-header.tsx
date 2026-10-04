"use client";

import gsap from "gsap";
import {
  ArrowRight,
  BriefcaseBusiness,
  Home,
  Layers3,
  Menu,
  Send,
  UserRound,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/lib/site";

function isActiveLink(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

const navIcons = {
  "/": Home,
  "/about": UserRound,
  "/services": Layers3,
  "/portfolio": BriefcaseBusiness,
  "/contact": Send,
};

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const chromeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chrome = chromeRef.current;

    if (!chrome || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.fromTo(
      chrome,
      { autoAlpha: 0, y: -18, scale: 0.96 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: "expo.out", delay: 0.16 },
    );
  }, []);

  return (
    <header className="fixed left-1/2 top-4 z-[80] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 text-foreground">
      <div
        ref={chromeRef}
        className="cre8iq-glass flex min-h-16 items-center justify-between gap-4 rounded-full px-3 py-2"
      >
        <Link
          href="/"
          aria-label="Cre8iq home"
          className="button-lift flex h-11 items-center rounded-full  px-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setIsMenuOpen(false)}
        >
          <BrandLogo className="h-auto w-24 sm:w-28" priority />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {siteConfig.navLinks.map((link) => {
            const isActive = isActiveLink(pathname, link.href);
            const NavIcon = navIcons[link.href as keyof typeof navIcons];

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isActive
                    ? "border-border bg-surface text-foreground"
                    : "border-transparent text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                {NavIcon ? <NavIcon aria-hidden="true" className="h-4 w-4" /> : null}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="button-lift inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-deep-navy hover:bg-pure-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Work with me
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="button-lift flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="motion-mobile-menu cre8iq-glass mt-3 rounded-[1.75rem] p-3 lg:hidden"
        >
          <div className="grid gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = isActiveLink(pathname, link.href);
              const NavIcon = navIcons[link.href as keyof typeof navIcons];

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActive
                      ? "bg-surface text-foreground"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {NavIcon ? <NavIcon aria-hidden="true" className="h-5 w-5" /> : null}
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
