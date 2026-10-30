import { tickerItems } from "@/data/products";

/** Saffron ticker of sweet names between the hero and the categories. */
export function Ticker() {
  return (
    <div className="ticker-track overflow-hidden bg-saffron py-3.5" aria-hidden>
      <div className="animate-ticker flex w-max items-center gap-8 pr-8">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {tickerItems.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-semibold text-pomegranate-ink"
              >
                {item}
                <span className="h-2 w-2 rotate-45 bg-pomegranate" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
