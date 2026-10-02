type ProjectVisualProps = {
  title: string;
  category: string;
  accent: string;
  compact?: boolean;
};

export function ProjectVisual({
  title,
  category,
  accent,
  compact = false,
}: ProjectVisualProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-border bg-deep-navy text-pure-white ${
        compact ? "h-44" : "min-h-80"
      }`}
      style={{ "--project-accent": accent } as React.CSSProperties}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--project-accent)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute right-5 top-5 h-20 w-20 rounded-lg border border-white/15 bg-white/5" />
      <div className="absolute bottom-6 left-6 right-6">
        <div className="mb-5 grid gap-2">
          <span className="h-2 w-20 rounded-sm bg-[var(--project-accent)]" />
          <span className="h-2 w-36 rounded-sm bg-white/45" />
          <span className="h-2 w-28 rounded-sm bg-white/25" />
        </div>
        <p className="text-sm font-semibold text-white/65">{category}</p>
        <p className="mt-2 font-heading text-2xl font-semibold leading-tight">
          {title}
        </p>
      </div>
    </div>
  );
}
