import Image from "next/image";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { business } from "@/data/business";
import { featuredSweets } from "@/data/products";

export function FeaturedSweets() {
  const [lead, ...rest] = featuredSweets;
  return (
    <section id="favourites" className="on-dark bg-cocoa">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <SectionHeading
              tone="light"
              title="Made to make your day sweeter."
              intro="The names that come up again and again when Lahore talks about this counter."
            />
          </Reveal>
          <Reveal delay={120}>
            <a
              href={business.phone.href}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-saffron px-6 py-3 font-bold text-pomegranate-ink transition-all duration-200 hover:bg-saffron-soft active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Ask what&apos;s fresh today
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Lead sweet — tall editorial feature */}
          <Reveal variant="clip" className="group relative min-h-[26rem] overflow-hidden rounded-[1.75rem] lg:min-h-full">
            <article className="relative h-full w-full">
              <Image
                src={lead.image.src}
                alt={lead.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-pomegranate-ink/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="font-display text-lg italic text-saffron">The one they ask for by name</p>
                <h3 className="mt-1 font-display text-4xl font-semibold text-milk sm:text-5xl">
                  {lead.name}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-milk/85">{lead.description}</p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {rest.map((sweet, i) => (
              <Reveal
                key={sweet.id}
                delay={i * 90}
                className="group overflow-hidden rounded-[1.75rem] bg-pomegranate"
              >
                <article className="grid sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-48 overflow-hidden">
                    <Image
                      src={sweet.image.src}
                      alt={sweet.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-7">
                    <h3 className="font-display text-3xl font-semibold text-milk">{sweet.name}</h3>
                    <p className="mt-2 leading-relaxed text-milk/80">{sweet.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <p className="mt-8 text-sm leading-relaxed text-milk/60">
            Favourites shown here are the items customers mention most in
            public reviews of the shop. The counter changes through the day —
            call <a href={business.phone.href} className="rounded font-semibold text-saffron underline decoration-saffron/40 underline-offset-4 hover:decoration-saffron">{business.phone.display}</a>{" "}
            to confirm what is available before a special trip.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
