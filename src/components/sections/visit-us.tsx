import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  business,
  googleDirectionsUrl,
  googleMapEmbedUrl,
} from "@/data/business";
import { HoursList } from "@/components/sections/hours-list";

export function VisitUs() {
  return (
    <section id="visit" className="bg-milk-soft">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            title="Come and say salaam."
            intro="We are on Zarrar Road in Al-Faisal Town, Lahore — open every single day from early morning to midnight."
          />
        </Reveal>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] shadow-plate lg:grid-cols-[1fr_1.1fr]">
          {/* Details panel */}
          <div className="on-dark bg-pomegranate p-7 text-milk sm:p-10">
            <Reveal>
              <h3 className="flex items-start gap-3 font-display text-2xl font-semibold">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-saffron" aria-hidden />
                {business.name}
              </h3>
              <address className="mt-3 pl-9 leading-relaxed not-italic text-milk/85">
                {business.address.full}
              </address>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={business.phone.href}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-saffron px-5 py-3 font-bold text-pomegranate-ink transition-all duration-200 hover:bg-saffron-soft active:scale-[0.98]"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {business.phone.display}
                </a>
                <a
                  href={googleDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-milk/35 px-5 py-3 font-bold text-milk transition-all duration-200 hover:border-milk hover:bg-white/10 active:scale-[0.98]"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Directions
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h3 className="mt-10 flex items-center gap-3 font-display text-2xl font-semibold">
                <Clock className="h-6 w-6 shrink-0 text-saffron" aria-hidden />
                Opening hours
              </h3>
              <HoursList />
            </Reveal>
          </div>

          {/* Map */}
          <div className="relative min-h-[22rem] bg-milk">
            <iframe
              title="Map showing the location of Al-Sheikh Sweets, Zarrar Road, Al-Faisal Town, Lahore"
              src={googleMapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
