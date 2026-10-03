import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-14">
      <div>
        <p className="text-base font-semibold text-accent-strong dark:text-accent">
          404
        </p>
        <h1 className="mt-4 font-heading text-5xl font-semibold leading-tight">
          This page is not in the portfolio.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          The link may have moved, or the project may not be published yet.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/portfolio"
            className="button-lift inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-semibold text-deep-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View portfolio
          </Link>
          <Link
            href="/"
            className="button-lift inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 text-base font-semibold text-foreground hover:border-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-accent"
          >
            Go home
          </Link>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-surface p-6">
        <div className="grid gap-3">
          <span className="h-3 w-24 rounded-sm bg-accent" />
          <span className="h-3 w-3/4 rounded-sm bg-foreground/25" />
          <span className="h-3 w-1/2 rounded-sm bg-foreground/15" />
        </div>
        <div className="mt-10 grid grid-cols-3 gap-3">
          <span className="aspect-square rounded-md bg-accent" />
          <span className="aspect-square rounded-md bg-surface-strong" />
          <span className="aspect-square rounded-md bg-deep-navy dark:bg-background" />
        </div>
      </div>
    </section>
  );
}
