import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { business, googleMapsUrl } from "@/data/business";

export function Reviews() {
  const { value, count } = business.googleRating;
  return (
    <section aria-labelledby="reviews-heading" className="on-dark bg-pomegranate">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr_auto] lg:gap-16">
          <Reveal>
            <p className="font-display text-[6.5rem] font-semibold leading-none text-saffron sm:text-[9rem]">
              {value.toFixed(1)}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="flex items-center gap-1.5"
              role="img"
              aria-label={`Rated ${value} out of 5 stars on Google`}
            >
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="h-7 w-7 fill-saffron text-saffron" aria-hidden />
              ))}
              <span className="relative inline-block h-7 w-7" aria-hidden>
                <Star className="absolute inset-0 h-7 w-7 text-saffron" />
                <span className="absolute inset-0 overflow-hidden" style={{ width: "30%" }}>
                  <Star className="h-7 w-7 fill-saffron text-saffron" />
                </span>
              </span>
            </div>
            <h2 id="reviews-heading" className="mt-4 font-display text-3xl font-semibold text-milk sm:text-4xl">
              Loved by the neighbourhood.
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-milk/80">
              That score comes from {count.toLocaleString()} reviews on the
              shop&apos;s Google listing — neighbours, families and a lot of
              people who came in for one thing and left with a box. Read them
              in their own words on Google.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-milk px-7 py-3.5 font-bold text-pomegranate transition-all duration-200 hover:bg-white active:scale-[0.98]"
            >
              Read our Google reviews
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
