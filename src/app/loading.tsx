export default function Loading() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="h-4 w-40 rounded-sm bg-accent loading-shimmer" />
          <div className="mt-6 h-12 w-full max-w-2xl rounded-md bg-surface-strong loading-shimmer" />
          <div className="mt-3 h-12 w-5/6 rounded-md bg-surface-strong loading-shimmer" />
          <div className="mt-6 grid gap-3">
            <div className="h-4 w-full max-w-xl rounded-sm bg-surface loading-shimmer" />
            <div className="h-4 w-4/5 max-w-lg rounded-sm bg-surface loading-shimmer" />
          </div>
        </div>
        <div className="min-h-80 rounded-lg border border-border bg-deep-navy p-6 loading-shimmer" />
      </div>
    </section>
  );
}
