"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, MapPin, Star } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { business, googleMapsUrl } from "@/data/business";
import { images } from "@/data/products";
import type { CSSProperties } from "react";

export function Hero() {
  const plateRef = useRef<HTMLDivElement>(null);

  /* Gentle parallax on the plate only, transform-only, off for reduced motion. */
  useEffect(() => {
    const el = plateRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        el.style.transform = `translateY(${y * 0.06}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="on-dark relative overflow-hidden bg-pomegranate">
      {/* Ornamental dotted rings, drawn from the seal motif */}
      <div
        aria-hidden
        className="absolute -left-40 top-24 h-96 w-96 rounded-full border-2 border-dashed border-saffron/25"
      />
      <div
        aria-hidden
        className="absolute -bottom-52 left-1/3 h-[28rem] w-[28rem] rounded-full border-2 border-dashed border-milk/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_85%_10%,rgb(244_189_54/0.14),transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-36 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-6 lg:px-8 lg:pb-24 lg:pt-48">
        {/* Copy */}
        <div className="max-w-2xl">
          <p
            className="hero-rise font-urdu text-2xl text-saffron"
            lang="ur"
            dir="rtl"
            style={{ "--rise-delay": "0ms", lineHeight: 2.3, textAlign: "left" } as CSSProperties}
          >
            الشیخ سویٹس · لاہور
          </p>
          <h1
            className="hero-rise mt-4 font-display text-[2.9rem] font-semibold leading-[1.02] tracking-tight text-milk sm:text-6xl lg:text-7xl"
            style={{ "--rise-delay": "90ms" } as CSSProperties}
          >
            A little sweetness.
            <br />
            A lot of happiness.
          </h1>
          <p
            className="hero-rise mt-6 max-w-lg text-lg leading-relaxed text-milk/85"
            style={{ "--rise-delay": "190ms" } as CSSProperties}
          >
            Discover the flavours of Al-Sheikh Sweets. From traditional mithai
            to delightful bakery treats, there&apos;s something for every
            craving and celebration — right here in Al-Faisal Town, Lahore.
          </p>

          <div
            className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--rise-delay": "290ms" } as CSSProperties}
          >
            <a
              href="#sweets"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-saffron px-7 py-3.5 text-base font-bold text-pomegranate-ink shadow-[0_14px_30px_-10px_rgb(244_189_54/0.55)] transition-all duration-200 hover:bg-saffron-soft active:scale-[0.98]"
            >
              Explore our sweets
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border-2 border-milk/35 px-7 py-3.5 font-bold text-milk transition-all duration-200 hover:border-milk hover:bg-white/10 active:scale-[0.98]"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Find our shop
            </a>
          </div>

          <p
            className="hero-rise mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-milk/80"
            style={{ "--rise-delay": "390ms" } as CSSProperties}
          >
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-saffron text-saffron" aria-hidden />
              {business.googleRating.value} on Google
            </span>
            <span aria-hidden className="h-1 w-1 rotate-45 bg-saffron" />
            <span>{business.googleRating.count.toLocaleString()} reviews</span>
            <span aria-hidden className="h-1 w-1 rotate-45 bg-saffron" />
            <span>Open today until midnight</span>
          </p>
        </div>

        {/* Plate composition */}
        <div className="relative mx-auto w-full max-w-[24rem] sm:max-w-[30rem] lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-6 rounded-full bg-saffron/90 sm:inset-10"
          />
          <div ref={plateRef} className="plate-in relative will-change-transform">
            <div className="relative aspect-square overflow-hidden rounded-full shadow-plate ring-8 ring-milk/15">
              <Image
                src={images.heroTray.src}
                alt={images.heroTray.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 44vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Inset round: gulab jamun */}
          <div className="animate-drift absolute -bottom-4 left-0 w-32 sm:-left-4 sm:w-44">
            <div className="relative aspect-square overflow-hidden rounded-full shadow-lift ring-4 ring-pomegranate">
              <Image
                src={images.gulabJamun.src}
                alt={images.gulabJamun.alt}
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Turning seal */}
          <div className="absolute -top-3 right-2 sm:right-6">
            <LogoMark className="animate-spin-slow h-24 w-24 drop-shadow-[0_10px_20px_rgb(67_14_32/0.5)] sm:h-28 sm:w-28" />
          </div>

          <p className="absolute -right-1 bottom-6 hidden rotate-3 rounded-2xl bg-milk px-4 py-3 font-display text-lg font-semibold text-pomegranate shadow-lift sm:block">
            Mithai, the Lahori way
          </p>
        </div>
      </div>
    </section>
  );
}
