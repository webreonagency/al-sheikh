import { Navigation, Phone } from "lucide-react";
import { business, googleDirectionsUrl } from "@/data/business";

/** Fixed call / directions bar on small screens, clear of the footer content. */
export function MobileActionBar() {
  return (
    <div className="on-dark fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-pomegranate-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={business.phone.href}
          className="flex min-h-14 items-center justify-center gap-2 font-bold text-milk transition-colors active:bg-white/10"
        >
          <Phone className="h-5 w-5 text-saffron" aria-hidden />
          Call the shop
        </a>
        <a
          href={googleDirectionsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 bg-saffron font-bold text-pomegranate-ink transition-colors active:bg-saffron-soft"
        >
          <Navigation className="h-5 w-5" aria-hidden />
          Get directions
        </a>
      </div>
    </div>
  );
}
