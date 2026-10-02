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
    <section className="border-t border-border bg-deep-navy text-pure-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:px-14">
        <div>
          <p className="text-base font-semibold text-accent">{eyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-white/72">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-semibold text-deep-navy transition-colors hover:bg-pure-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-6 text-base font-semibold text-pure-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
