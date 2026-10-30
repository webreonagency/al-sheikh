"use client";

import { useEffect, useState } from "react";
import { Clock, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { business } from "@/data/business";
import { navigation } from "@/data/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <header className="on-dark fixed inset-x-0 top-0 z-50">
      {/* Announcement strip */}
      <div className="bg-pomegranate-ink text-milk">
        <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-[0.8rem] font-semibold tracking-wide sm:justify-between">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-saffron" aria-hidden />
            {business.hoursSummary}
          </span>
          <span className="hidden sm:inline">{business.address.short}</span>
        </p>
      </div>

      {/* Main bar: transparent over the hero, solid pomegranate on scroll */}
      <div
        className={`transition-all duration-500 ${
          scrolled || open
            ? "bg-pomegranate shadow-[0_10px_30px_-12px_rgb(67_14_32/0.7)]"
            : "bg-pomegranate/0"
        }`}
        style={
          scrolled || open
            ? undefined
            : { background: "linear-gradient(to bottom, rgb(67 14 32 / 0.55), transparent)" }
        }
      >
        <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="#home" aria-label="Al-Sheikh Sweets — home" className="rounded-md">
            <Logo variant="light" />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {navigation.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2.5 text-[0.95rem] font-semibold text-milk/90 transition-colors duration-200 hover:bg-white/10 hover:text-milk"
              >
                {item.label}
              </a>
            ))}
            <a
              href={business.phone.href}
              className="ml-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-saffron px-5 font-bold text-pomegranate-ink transition-all duration-200 hover:bg-saffron-soft active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {business.phone.display}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-milk transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile navigation — a full pomegranate panel, not a squeezed desktop menu */}
      <div
        id="mobile-navigation"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[6.7rem] overflow-y-auto bg-pomegranate px-6 pb-10 pt-4 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-white/10">
            {navigation.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center justify-between py-3 font-display text-3xl font-medium text-milk transition-colors hover:text-saffron"
                >
                  {item.label}
                  <span aria-hidden className="text-sm text-saffron">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={business.phone.href}
            className="mt-8 flex min-h-13 items-center justify-center gap-2 rounded-full bg-saffron px-6 py-3.5 text-lg font-bold text-pomegranate-ink active:scale-[0.98]"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call {business.phone.display}
          </a>
          <p className="mt-6 text-center text-sm text-milk/70">
            {business.hoursSummary}
            <br />
            {business.address.short}
          </p>
        </nav>
      </div>
    </header>
  );
}
