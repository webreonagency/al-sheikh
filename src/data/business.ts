/**
 * Central business information for Al-Sheikh Sweets.
 *
 * Everything on the website that describes the business lives here so the
 * owner can update it in one place. Only verified details are included.
 * Items marked TODO need owner confirmation before they are relied on.
 */

export const business = {
  name: "Al-Sheikh Sweets",
  nameUrdu: "الشیخ سویٹس",
  tagline: "A little sweetness. A lot of happiness.",
  city: "Lahore, Pakistan",

  address: {
    // Verbatim address supplied for this website.
    full: "GCX3+CFR, Zarrar Road, Block B, Cantonment, Al-Faisal Town, Lahore, Punjab, Pakistan",
    short: "Zarrar Road, Al-Faisal Town, Lahore",
    plusCode: "GCX3+CFR Lahore",
  },

  phone: {
    display: "+92 42 36676519",
    href: "tel:+924236676519",
  },

  /** Open daily. Closing time is midnight (12:00 AM). */
  hours: [
    { day: "Monday", open: "7:00 AM", close: "12:00 AM" },
    { day: "Tuesday", open: "7:00 AM", close: "12:00 AM" },
    { day: "Wednesday", open: "7:00 AM", close: "12:00 AM" },
    { day: "Thursday", open: "7:00 AM", close: "12:00 AM" },
    { day: "Friday", open: "7:00 AM", close: "12:00 AM" },
    { day: "Saturday", open: "7:00 AM", close: "12:00 AM" },
    { day: "Sunday", open: "7:00 AM", close: "12:00 AM" },
  ] as const,
  hoursSummary: "Open Daily · 7:00 AM – Midnight",

  /**
   * Google rating shown on the business listing at the time this site was
   * built. Update these two numbers when the listing changes.
   * No individual testimonials are published: none were supplied, and
   * review snippets must never be turned into invented named quotes.
   */
  googleRating: {
    value: 4.3,
    count: 1039,
  },

  /**
   * TODO (owner): no social profiles were verified for this business, so
   * none are linked anywhere on the site. Add verified URLs here and they
   * can be surfaced in the footer.
   */
  socials: [] as { label: string; href: string }[],
} as const;

const mapsQuery = encodeURIComponent(
  "Al-Sheikh Sweets, Zarrar Road, Block B, Cantonment, Al-Faisal Town, Lahore, Punjab, Pakistan",
);

/** Google Maps search / directions link for the verified business address. */
export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
/** Keyless Google Maps embed for the Visit section. */
export const googleMapEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`;

/**
 * Production domain is not yet confirmed by the owner.
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment once it is, and
 * canonical URLs, the sitemap and Open Graph URLs follow automatically.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
