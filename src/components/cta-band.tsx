import Link from "next/link";

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
  return (
    <section className="cre8iq-aurora-soft relative overflow-hidden border-t border-border bg-background text-foreground">
      <div className="cre8iq-grid-field absolute inset-0 opacity-20" />
      <div className="cre8iq-gradient-ribbon absolute left-1/2 top-1/2 h-40 w-[72rem] max-w-[150vw] -translate-x-1/2 -translate-y-1/2 opacity-65" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[1fr_0.42fr] lg:items-center lg:px-14">
        <div data-gsap-reveal>
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
                className="button-lift inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-base font-semibold text-foreground hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {secondaryLabel}
              </Link>
            </div>
          ) : null}
        </div>
        <div data-gsap-reveal className="flex lg:justify-end">
          <Link
            href={primaryHref}
            className="group relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-accent text-center text-base font-semibold text-deep-navy transition-transform duration-500 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:h-44 md:w-44"
          >
            <span className="absolute inset-0 scale-0 rounded-full bg-accent-strong transition-transform duration-500 group-hover:scale-100" />
            <span className="relative z-10 max-w-24 group-hover:text-pure-white">
              {primaryLabel}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
