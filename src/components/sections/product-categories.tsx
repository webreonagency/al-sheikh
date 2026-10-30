import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories } from "@/data/products";

const accentWash: Record<string, string> = {
  saffron: "group-hover:bg-saffron/25",
  pistachio: "group-hover:bg-pistachio/30",
  guava: "group-hover:bg-guava/25",
  pomegranate: "group-hover:bg-pomegranate/30",
};

const spans = [
  "lg:col-span-7 aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]",
  "lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]",
  "lg:col-span-4 aspect-[4/3]",
  "lg:col-span-4 aspect-[4/3]",
  "lg:col-span-4 aspect-[4/3]",
];

export function ProductCategories() {
  return (
    <section id="sweets" className="bg-milk">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            title="Something delicious for every moment."
            intro="Morning nashta, chai-time biscuits, a box of mithai for the in-laws, a cake because it's Tuesday — the counter at Al-Sheikh is organised around the moments of a Lahori day."
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {categories.map((category, i) => (
            <Reveal
              as="li"
              key={category.id}
              variant="clip"
              delay={(i % 3) * 90}
              className={`${spans[i]} group relative overflow-hidden rounded-[1.75rem] shadow-lift sm:col-span-1 ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <article className="relative h-full w-full">
                <Image
                  src={category.image.src}
                  alt={category.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-cocoa/0 transition-colors duration-500 ${accentWash[category.accent]}`}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-cocoa/85 via-cocoa/20 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-semibold text-milk sm:text-3xl">
                    {category.name}
                  </h3>
                  <p className="mt-2 max-w-md leading-relaxed text-milk/85">
                    {category.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
