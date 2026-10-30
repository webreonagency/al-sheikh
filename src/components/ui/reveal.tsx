"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** "rise" for text blocks, "clip" for imagery. */
  variant?: "rise" | "clip";
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "figure";
};

/**
 * One-shot scroll reveal.
 *
 * Deliberately uses bounding-rect checks instead of IntersectionObserver:
 * an element clipped by its own `clip-path` (the "clip" variant starts
 * clipped to zero height) reports a zero intersection rect, so an observer
 * threshold would never fire for it. Rect checks are immune to that.
 *
 * Content is visible by default when JS is off or motion is reduced
 * (see the reduced-motion rules in globals.css).
 */
export function Reveal({
  children,
  className,
  variant = "rise",
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    let raf = 0;
    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        el.classList.add("is-in");
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${variant === "clip" ? "reveal-clip" : "reveal"} ${className ?? ""}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
