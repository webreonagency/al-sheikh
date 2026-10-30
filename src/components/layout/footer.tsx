import { Clock, MapPin, Phone } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { business, googleMapsUrl } from "@/data/business";
import { navigation } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark relative overflow-hidden bg-pomegranate text-milk">
      {/* Oversized watermark seal */}
      <LogoMark
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-[0.07]"
        disc="#FFF1D9"
        ring="#FFF1D9"
        diamond="#FFF1D9"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <LogoMark className="h-16 w-16" />
              <div className="leading-none">
                <p className="font-display text-3xl font-semibold">Al-Sheikh</p>
                <p className="mt-1.5 text-xs font-bold tracking-[0.42em] text-saffron">
                  SWEETS
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-relaxed text-milk/80">
              A neighbourhood sweets and bakery shop in Al-Faisal Town, Lahore —
              mithai for celebrations, bakery for everyday, and a warm welcome
              from morning to midnight.
            </p>
            <p lang="ur" dir="rtl" className="mt-5 text-right font-urdu text-xl leading-loose text-saffron sm:text-left">
              مٹھاس بھری خوشیاں، ہر دن
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-lg font-semibold text-saffron">Explore</h3>
            <ul className="mt-4 space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block rounded py-1.5 text-milk/85 transition-colors hover:text-saffron"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-lg font-semibold text-saffron">Visit us</h3>
            <address className="mt-4 space-y-4 not-italic leading-relaxed text-milk/85">
              <p className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-saffron" aria-hidden />
                <span>{business.address.full}</span>
              </p>
              <p>
                <a
                  href={business.phone.href}
                  className="inline-flex min-h-11 items-center gap-3 rounded transition-colors hover:text-saffron"
                >
                  <Phone className="h-5 w-5 shrink-0 text-saffron" aria-hidden />
                  {business.phone.display}
                </a>
              </p>
              <p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded py-1 font-semibold text-saffron underline decoration-saffron/40 underline-offset-4 transition-colors hover:decoration-saffron"
                >
                  Find us on Google Maps
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-saffron">Opening hours</h3>
            <p className="mt-4 flex items-start gap-3 leading-relaxed text-milk/85">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-saffron" aria-hidden />
              <span>
                Monday – Sunday
                <br />
                <span className="font-display text-2xl font-semibold text-milk">
                  7:00 AM – Midnight
                </span>
                <br />
                Open every day of the week.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-7 text-sm text-milk/70 sm:flex-row">
          <p>
            © {year} {business.name}, Lahore. All rights reserved.
          </p>
          <p>
            Powered By{" "}
            <a
              href="https://webreon.agency"
              target="_blank"
              rel="noreferrer"
              className="rounded font-bold text-milk underline decoration-saffron/50 underline-offset-4 transition-colors hover:text-saffron hover:decoration-saffron"
            >
              WebReOn Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
