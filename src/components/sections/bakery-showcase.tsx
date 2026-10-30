import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/data/products";

const shelf = ["Birthday cakes", "Pastries", "Biscuits & rusks", "Small treats for chai"];

export function BakeryShowcase() {
  return (
    <section id="bakery" className="relative overflow-hidden bg-saffron">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-2 border-dashed border-pomegranate/25"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="relative order-2 lg:order-1">
          <Reveal variant="clip" className="relative overflow-hidden rounded-[2rem] shadow-plate">
            <Image
              src={images.celebrationCake.src}
              alt={images.celebrationCake.alt}
              width={images.celebrationCake.width}
              height={images.celebrationCake.height}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal
            delay={140}
            className="absolute -bottom-10 -right-2 w-40 rotate-3 overflow-hidden rounded-[1.25rem] shadow-lift ring-4 ring-saffron sm:-right-6 sm:w-56"
          >
            <Image
              src={images.biscuits.src}
              alt={images.biscuits.alt}
              width={images.biscuits.width}
              height={images.biscuits.height}
              sizes="224px"
              className="aspect-square w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span aria-hidden className="mb-5 inline-block h-2.5 w-2.5 rotate-45 bg-pomegranate" />
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-pomegranate-ink sm:text-5xl lg:text-6xl">
              Make every occasion a little sweeter.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-pomegranate-ink/80">
              Birthdays, results days, Eid mornings, a promotion at work — in
              Lahore, good news travels with a cake. The bakery shelves at
              Al-Sheikh keep the celebration ready: cakes, pastries and the
              biscuits that somehow never survive the journey home.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {shelf.map((item) => (
                <li
                  key={item}
                  className="rounded-full border-2 border-pomegranate/25 bg-milk/60 px-4 py-2 font-semibold text-pomegranate-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-lg leading-relaxed text-pomegranate-ink/70">
              Planning something bigger? Call the shop and ask what the bakery
              can do for your date — we would rather you hear it from the
              counter than read a promise here.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
