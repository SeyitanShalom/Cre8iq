type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className="mb-4 text-base font-semibold text-accent-strong dark:text-accent">
        {eyebrow}
      </p>
      <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-6 text-lg leading-8 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
