import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="cre8iq-aurora-soft relative overflow-hidden border-t border-border bg-background text-foreground">
      <div className="cre8iq-grid-field absolute inset-0 opacity-15" />
      <div className="cre8iq-gradient-ribbon absolute bottom-12 left-1/2 h-24 w-[58rem] max-w-[140vw] -translate-x-1/2 opacity-40" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-14">
        <div>
          <p className="font-heading text-2xl font-semibold text-foreground">
            Cre8iq
          </p>
          <p className="mt-4 max-w-md text-base leading-7 text-muted">
            My personal creative space for building thoughtful brands,
            intuitive interfaces, and refined websites.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-accent">
            Explore
          </p>
          <nav aria-label="Footer navigation" className="mt-4 grid gap-2">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-accent">
            Contact
          </p>
          <div className="mt-4 grid gap-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-base text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-base text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {siteConfig.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-border px-6 py-5 text-center text-sm text-muted">
        (c) 2026 Cre8iq. Built with a premium personal creative direction.
      </div>
    </footer>
  );
}
