import Image from "next/image";
import type { CSSProperties } from "react";
import type { ProjectVisualType } from "@/lib/placeholder-content";

type ProjectVisualProps = {
  title: string;
  category: string;
  accent: string;
  compact?: boolean;
  imageAlt?: string;
  imageUrl?: string;
  priority?: boolean;
  visual?: ProjectVisualType;
};

export function ProjectVisual({
  title,
  category,
  accent,
  compact = false,
  imageAlt,
  imageUrl,
  priority = false,
  visual = "website",
}: ProjectVisualProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-border bg-deep-navy text-pure-white ${
        compact ? "min-h-56" : "min-h-[26rem]"
      }`}
      style={{ "--project-accent": accent } as CSSProperties}
    >
      <div className="mockup-surface absolute inset-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            priority={priority}
            quality={85}
            sizes={
              compact
                ? "(min-width: 1024px) 38vw, 100vw"
                : "(min-width: 1024px) 50vw, 100vw"
            }
            className="object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-x-0 top-0 h-1 bg-[var(--project-accent)]" />
            <div className="cre8iq-mockup-grid absolute inset-0 opacity-20" />
            <div className="absolute inset-x-5 top-6">
              <VisualComposition visual={visual} compact={compact} />
            </div>
          </>
        )}
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-navy via-deep-navy/90 to-transparent ${
          compact ? "px-5 pb-5 pt-20" : "px-7 pb-7 pt-28"
        }`}
      >
        <p className="text-sm font-semibold text-white/65">{category}</p>
        <p
          className={`mt-2 font-heading font-semibold leading-tight ${
            compact ? "text-xl" : "text-3xl"
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

function VisualComposition({
  visual,
  compact,
}: {
  visual: ProjectVisualType;
  compact: boolean;
}) {
  if (visual === "brand-system") {
    return <BrandSystemMockup compact={compact} />;
  }

  if (visual === "dashboard") {
    return <DashboardMockup compact={compact} />;
  }

  if (visual === "social-kit") {
    return <SocialKitMockup compact={compact} />;
  }

  if (visual === "mobile-app") {
    return <MobileAppMockup compact={compact} />;
  }

  if (visual === "landing-page") {
    return <LandingPageMockup compact={compact} />;
  }

  return <WebsiteMockup compact={compact} />;
}

function BrandSystemMockup({ compact }: { compact: boolean }) {
  return (
    <div className={`grid gap-3 ${compact ? "grid-cols-[1fr_0.75fr]" : "grid-cols-[1fr_0.85fr]"}`}>
      <div className="rounded-md border border-white/15 bg-white/8 p-4 shadow-2xl shadow-deep-navy/20">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-sm bg-[var(--project-accent)]" />
          <div className="grid gap-1">
            <span className="h-2 w-20 rounded-sm bg-white/70" />
            <span className="h-2 w-12 rounded-sm bg-white/30" />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <span className="h-14 rounded-sm bg-white" />
          <span className="h-14 rounded-sm bg-[var(--project-accent)]" />
          <span className="h-14 rounded-sm bg-white/20" />
        </div>
        {!compact ? (
          <div className="mt-5 grid gap-2">
            <span className="h-2 w-full rounded-sm bg-white/45" />
            <span className="h-2 w-3/4 rounded-sm bg-white/25" />
          </div>
        ) : null}
      </div>
      <div className="grid gap-3">
        <span className="min-h-20 rounded-md border border-white/15 bg-white/10" />
        <span className="min-h-20 rounded-md border border-white/15 bg-[var(--project-accent)]" />
      </div>
    </div>
  );
}

function DashboardMockup({ compact }: { compact: boolean }) {
  return (
    <div className="rounded-md border border-white/15 bg-white/8 p-3 shadow-2xl shadow-deep-navy/20">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--project-accent)]" />
        </div>
        <span className="h-2 w-20 rounded-sm bg-white/35" />
      </div>
      <div className={`mt-4 grid gap-3 ${compact ? "grid-cols-2" : "grid-cols-[0.75fr_1.25fr]"}`}>
        <div className="grid gap-3">
          <span className="h-16 rounded-md bg-[var(--project-accent)]" />
          <span className="h-12 rounded-md bg-white/12" />
        </div>
        <div className="rounded-md bg-white/10 p-3">
          <div className="flex h-24 items-end gap-2">
            {[42, 68, 38, 78, 58, 90].map((height) => (
              <span
                key={height}
                className="flex-1 rounded-sm bg-white/35"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          {!compact ? (
            <div className="mt-4 grid gap-2">
              <span className="h-2 w-full rounded-sm bg-white/35" />
              <span className="h-2 w-2/3 rounded-sm bg-white/20" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function WebsiteMockup({ compact }: { compact: boolean }) {
  return (
    <div className="rounded-md border border-white/15 bg-white p-3 text-deep-navy shadow-2xl shadow-deep-navy/20">
      <div className="flex items-center justify-between border-b border-deep-navy/10 pb-3">
        <span className="h-3 w-20 rounded-sm bg-deep-navy" />
        <div className="flex gap-2">
          <span className="h-2 w-8 rounded-sm bg-deep-navy/20" />
          <span className="h-2 w-8 rounded-sm bg-deep-navy/20" />
          <span className="h-2 w-8 rounded-sm bg-[var(--project-accent)]" />
        </div>
      </div>
      <div className={`mt-4 grid gap-4 ${compact ? "" : "grid-cols-[1.1fr_0.9fr]"}`}>
        <div>
          <span className="block h-3 w-3/4 rounded-sm bg-deep-navy" />
          <span className="mt-3 block h-3 w-1/2 rounded-sm bg-deep-navy/35" />
          <span className="mt-5 block h-8 w-28 rounded-md bg-[var(--project-accent)]" />
        </div>
        {!compact ? (
          <div className="grid grid-cols-2 gap-2">
            <span className="h-16 rounded-md bg-deep-navy/10" />
            <span className="h-16 rounded-md bg-[var(--project-accent)]" />
            <span className="h-16 rounded-md bg-deep-navy/15" />
            <span className="h-16 rounded-md bg-deep-navy/10" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function SocialKitMockup({ compact }: { compact: boolean }) {
  return (
    <div className={`grid ${compact ? "grid-cols-3" : "grid-cols-4"} gap-2`}>
      {Array.from({ length: compact ? 6 : 8 }).map((_, index) => (
        <div
          key={index}
          className="aspect-square rounded-md border border-white/15 bg-white/10 p-2 shadow-xl shadow-deep-navy/10"
        >
          <span
            className={`block h-1.5 rounded-sm ${
              index % 3 === 0 ? "w-8 bg-[var(--project-accent)]" : "w-10 bg-white/45"
            }`}
          />
          <span className="mt-2 block h-1.5 w-3/4 rounded-sm bg-white/25" />
          <span className="mt-auto block" />
          <span className="mt-7 block h-5 rounded-sm bg-white/12" />
        </div>
      ))}
    </div>
  );
}

function MobileAppMockup({ compact }: { compact: boolean }) {
  return (
    <div className="flex justify-center gap-4">
      {[0, 1].map((item) => (
        <div
          key={item}
          className={`rounded-[1.4rem] border border-white/20 bg-white/10 p-2 shadow-2xl shadow-deep-navy/20 ${
            compact ? "h-40 w-24" : "h-64 w-36"
          }`}
        >
          <div className="h-full rounded-[1rem] bg-white p-3 text-deep-navy">
            <span className="mx-auto block h-1.5 w-8 rounded-sm bg-deep-navy/20" />
            <span className="mt-5 block h-3 w-2/3 rounded-sm bg-deep-navy" />
            <span className="mt-3 block h-2 w-full rounded-sm bg-deep-navy/25" />
            <span className="mt-2 block h-2 w-4/5 rounded-sm bg-deep-navy/20" />
            <div className="mt-5 grid gap-2">
              <span className="h-8 rounded-md bg-[var(--project-accent)]" />
              <span className="h-8 rounded-md bg-deep-navy/10" />
              {!compact ? <span className="h-8 rounded-md bg-deep-navy/10" /> : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LandingPageMockup({ compact }: { compact: boolean }) {
  return (
    <div className="rounded-md border border-white/15 bg-white/8 p-3 shadow-2xl shadow-deep-navy/20">
      <div className="rounded-md bg-white p-4 text-deep-navy">
        <div className="flex justify-between gap-4">
          <span className="h-3 w-24 rounded-sm bg-deep-navy" />
          <span className="h-3 w-16 rounded-sm bg-[var(--project-accent)]" />
        </div>
        <div className={`mt-6 grid gap-4 ${compact ? "" : "grid-cols-[1.2fr_0.8fr]"}`}>
          <div>
            <span className="block h-4 w-5/6 rounded-sm bg-deep-navy" />
            <span className="mt-3 block h-3 w-3/5 rounded-sm bg-deep-navy/30" />
            <span className="mt-5 block h-9 w-32 rounded-md bg-[var(--project-accent)]" />
          </div>
          {!compact ? <span className="h-28 rounded-md bg-deep-navy/10" /> : null}
        </div>
      </div>
      {!compact ? (
        <div className="mt-3 grid grid-cols-3 gap-2">
          <span className="h-16 rounded-md bg-white/10" />
          <span className="h-16 rounded-md bg-white/10" />
          <span className="h-16 rounded-md bg-white/10" />
        </div>
      ) : null}
    </div>
  );
}
