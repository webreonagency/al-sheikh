/**
 * Product categories, featured sweets and gallery imagery.
 *
 * OWNER CONFIRMATION NEEDED
 * -------------------------
 * The individual items named here (kalakand, barfi, gulab jamun, halwa puri,
 * samosas, birthday cakes, biscuits, pizza) are mentions found in public
 * customer reviews of the business — they are NOT a confirmed current
 * catalogue. They are flagged `source: "review-mention"` below.
 *
 * Do not add prices, weights, sizes, ingredients, stock status or dietary
 * claims here until the owner confirms them in writing. The site never
 * displays prices or ordering actions for these items.
 *
 * IMAGERY
 * -------
 * Photographs are editorial food imagery created for this website. They are
 * illustrative: they are not photographs of this shop, its counter or its
 * actual products. Replace each `src` with the bakery's own photography as
 * it becomes available — no other code changes are needed.
 */

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const images = {
  heroTray: {
    src: "/images/hero-mithai.jpg",
    alt: "A brass tray of assorted mithai — kalakand, barfi, ladoo and gulab jamun",
    width: 1920,
    height: 1280,
  },
  kalakand: {
    src: "/images/kalakand-barfi.jpg",
    alt: "Kalakand and barfi pieces stacked on a plate with pistachio and rose petals",
    width: 1920,
    height: 1280,
  },
  gulabJamun: {
    src: "/images/gulab-jamun.jpg",
    alt: "Gulab jamun in syrup in a brass bowl, topped with pistachio and saffron",
    width: 1920,
    height: 1280,
  },
  celebrationCake: {
    src: "/images/celebration-cake.jpg",
    alt: "A celebration cake with cream, fruit and flowers, surrounded by bakery treats",
    width: 1920,
    height: 1280,
  },
  nashta: {
    src: "/images/halwa-puri-nashta.jpg",
    alt: "A halwa puri breakfast thali with puris, halwa and chickpea curry",
    width: 1920,
    height: 1280,
  },
  samosa: {
    src: "/images/samosa-snacks.jpg",
    alt: "Crisp golden samosas with tamarind chutney",
    width: 1920,
    height: 1280,
  },
  biscuits: {
    src: "/images/biscuits-bakery.jpg",
    alt: "Assorted bakery biscuits and rusks with a cup of chai",
    width: 1920,
    height: 1280,
  },
  mithaiBox: {
    src: "/images/mithai-box.jpg",
    alt: "An open box of assorted colourful mithai arranged in compartments",
    width: 1920,
    height: 1280,
  },
} satisfies Record<string, SiteImage>;

export type Category = {
  id: string;
  name: string;
  description: string;
  image: SiteImage;
  /** Editorial accent used for the category's number chip and hover wash. */
  accent: "saffron" | "pistachio" | "guava" | "pomegranate";
};

export const categories: Category[] = [
  {
    id: "mithai",
    name: "Traditional Mithai",
    description:
      "The sweets Lahore celebrates with — kalakand, barfi, gulab jamun and the familiar counter favourites for guests, gifts and good news.",
    image: images.mithaiBox,
    accent: "saffron",
  },
  {
    id: "cakes-bakery",
    name: "Cakes & Bakery",
    description:
      "Birthday cakes and bakery shelves for the days that deserve a little ceremony — and the ordinary days that don't need an excuse.",
    image: images.celebrationCake,
    accent: "guava",
  },
  {
    id: "biscuits",
    name: "Biscuits & Bakery Treats",
    description:
      "The chai-time shelf: biscuits, rusks and small baked treats that disappear faster than anyone admits.",
    image: images.biscuits,
    accent: "pomegranate",
  },
  {
    id: "nashta",
    name: "Breakfast & Nashta",
    description:
      "Halwa puri mornings, the Lahori way — a slow start, a full thali, and something sweet to finish.",
    image: images.nashta,
    accent: "pistachio",
  },
  {
    id: "savoury",
    name: "Savoury Snacks",
    description:
      "Samosas and savoury bites for the journey home, the office tea break, and everyone who came in 'just for one thing'.",
    image: images.samosa,
    accent: "saffron",
  },
];

export type FeaturedSweet = {
  id: string;
  name: string;
  description: string;
  image: SiteImage;
  /** Every featured item is a public-review mention, not a confirmed line. */
  source: "review-mention";
  tall?: boolean;
};

export const featuredSweets: FeaturedSweet[] = [
  {
    id: "kalakand",
    name: "Kalakand",
    description:
      "Soft, grainy and milky — the sweet customers mention by name. Best eaten slowly, shared reluctantly.",
    image: images.kalakand,
    source: "review-mention",
    tall: true,
  },
  {
    id: "barfi",
    name: "Barfi",
    description:
      "Cut in clean diamonds and finished with pistachio, barfi is the box-filler of every celebration in the city.",
    image: images.heroTray,
    source: "review-mention",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    description:
      "Warm, syrup-soaked and unapologetically indulgent. The one nobody ever buys just one of.",
    image: images.gulabJamun,
    source: "review-mention",
  },
  {
    id: "assorted-mithai",
    name: "Assorted Mithai",
    description:
      "A mixed box for when choosing is impossible — a little of everything, ready for guests and good news.",
    image: images.mithaiBox,
    source: "review-mention",
  },
];

export const galleryImages: (SiteImage & { caption: string })[] = [
  { ...images.heroTray, caption: "The mithai tray" },
  { ...images.gulabJamun, caption: "Gulab jamun, warm in syrup" },
  { ...images.celebrationCake, caption: "For celebration days" },
  { ...images.kalakand, caption: "Kalakand & barfi" },
  { ...images.nashta, caption: "Halwa puri mornings" },
  { ...images.mithaiBox, caption: "A box to share" },
  { ...images.samosa, caption: "Samosas, straight to chutney" },
  { ...images.biscuits, caption: "Biscuits & chai" },
];

/** Sweet names for the saffron ticker between the hero and categories. */
export const tickerItems = [
  "Kalakand",
  "Barfi",
  "Gulab Jamun",
  "Halwa Puri",
  "Birthday Cakes",
  "Samosas",
  "Biscuits & Rusks",
  "Assorted Mithai",
];
