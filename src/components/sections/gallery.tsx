"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/data/products";

const tileSpans = [
  "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "sm:row-span-2 aspect-[4/3] sm:aspect-auto",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "sm:col-span-2 aspect-[4/3] sm:aspect-[8/3]",
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + galleryImages.length) % galleryImages.length,
      ),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, step]);

  return (
    <section id="gallery" className="bg-milk">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            title="From the counter, in colour."
            intro="A look at the flavours the shop is known for. These are editorial food photographs created for this website — visit us to see today's real counter."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {galleryImages.map((image, i) => (
            <Reveal as="li" key={image.src + image.caption} variant="clip" delay={(i % 3) * 80} className={tileSpans[i]}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block h-full min-h-52 w-full cursor-pointer overflow-hidden rounded-[1.5rem] text-left shadow-lift"
                aria-label={`Enlarge photo: ${image.caption}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-cocoa/80 to-transparent p-5 pt-12 font-display text-lg font-semibold text-milk">
                  {image.caption}
                  <Expand className="h-5 w-5 text-saffron" aria-hidden />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${galleryImages[active].caption}`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-pomegranate-ink p-4 sm:p-8"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-milk transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-milk transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-center font-display text-xl text-milk">
              {galleryImages[active].caption}
              <span className="ml-3 text-base text-milk/60">
                {active + 1} of {galleryImages.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-milk transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>
        </div>
      ) : null}
    </section>
  );
}
