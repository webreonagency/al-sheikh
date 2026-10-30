"use client";

import { useEffect, useState } from "react";
import { business } from "@/data/business";

/**
 * Opening-hours list with a "Today" marker computed in the visitor's
 * browser, so the highlight is never baked in stale at build time.
 */
export function HoursList() {
  const [todayIndex, setTodayIndex] = useState(-1);

  useEffect(() => {
    const day = new Date().getDay(); // 0 = Sunday
    setTodayIndex(day === 0 ? 6 : day - 1); // hours array starts on Monday
  }, []);

  return (
    <ul className="mt-4 divide-y divide-white/10">
      {business.hours.map((h, i) => (
        <li
          key={h.day}
          className={`flex items-center justify-between py-2.5 ${
            i === todayIndex ? "font-bold text-saffron" : "text-milk/85"
          }`}
          aria-current={i === todayIndex ? "date" : undefined}
        >
          <span>
            {h.day}
            {i === todayIndex ? (
              <span className="ml-2 rounded-full bg-saffron px-2 py-0.5 text-xs font-bold text-pomegranate-ink">
                Today
              </span>
            ) : null}
          </span>
          <span>
            {h.open} – {h.close}
          </span>
        </li>
      ))}
    </ul>
  );
}
