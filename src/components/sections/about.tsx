import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/data/products";

export function About() {
  return (
    <section id="story" className="on-dark bg-pistachio-deep">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <p className="max-w-4xl font-display text-3xl font-medium leading-snug text-milk sm:text-4xl lg:text-[2.9rem] lg:leading-[1.25]">
            In Al-Faisal Town, a box of mithai is how good news travels —
            from one home to the next, one celebration to another.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal variant="clip" className="relative overflow-hidden rounded-[2rem] shadow-plate">
            <Image
              src={images.mithaiBox.src}
              alt={images.mithaiBox.alt}
              width={images.mithaiBox.width}
              height={images.mithaiBox.height}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>

          <div className="space-y-6 text-lg leading-relaxed text-milk/90">
            <Reveal>
              <h2 className="font-display text-4xl font-semibold text-milk sm:text-5xl">
                A familiar taste, made for sharing.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p>
                Al-Sheikh Sweets is the neighbourhood&apos;s sweets and bakery
                shop on Zarrar Road — the place you stop on the way to a
                family dinner, on the way back from Friday prayers, and on
                every morning when halwa puri feels like the only correct
                decision.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                Customers describe an established local shop with a counter
                that covers the whole day: mithai and bakery in the morning,
                samosas by the afternoon, and a last box of something sweet
                picked up before the shutters come down at midnight. That is
                the whole idea — familiar flavours, generous boxes, and a shop
                that feels like it has always been on your street.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p lang="ur" dir="rtl" className="text-right font-urdu text-2xl leading-loose text-saffron">
                مٹھائی وہی، جو سب کو یاد رہے
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
