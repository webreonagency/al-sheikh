import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  intro?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
};

/** A heading with a small diamond rule — used sparingly, not on every section. */
export function SectionHeading({
  title,
  intro,
  tone = "dark",
  align = "left",
}: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <span
        aria-hidden
        className={`mb-5 inline-block h-2.5 w-2.5 rotate-45 ${light ? "bg-saffron" : "bg-guava"}`}
      />
      <h2
        className={`font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl ${
          light ? "text-milk" : "text-pomegranate"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${
            light ? "text-milk/80" : "text-cocoa/75"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
