"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-10">
      <p className="text-base font-semibold text-accent-strong dark:text-accent">
        Something paused
      </p>
      <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
        The page could not finish loading.
      </h1>
      <p className="mt-5 text-lg leading-8 text-muted">
        This can happen while content is refreshing. Try again and the page will
        request the content once more.
      </p>
      <button
        type="button"
        onClick={reset}
        className="button-lift mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-semibold text-deep-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Try again
      </button>
    </section>
  );
}
