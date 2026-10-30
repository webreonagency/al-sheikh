import type { Metadata } from "next";
import { Fraunces, Manrope, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { business, siteUrl } from "@/data/business";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const nastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-nastaliq",
  subsets: ["arabic"],
  weight: ["400", "600"],
  display: "swap",
});

const description =
  "Al-Sheikh Sweets in Al-Faisal Town, Lahore — traditional mithai, cakes and bakery, halwa puri breakfasts and savoury snacks. Open daily 7:00 AM to midnight on Zarrar Road.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Al-Sheikh Sweets — Mithai & Bakery in Lahore",
    template: "%s · Al-Sheikh Sweets, Lahore",
  },
  description,
  keywords: [
    "Al-Sheikh Sweets",
    "mithai Lahore",
    "sweets shop Lahore",
    "bakery Al-Faisal Town",
    "kalakand",
    "barfi",
    "gulab jamun",
    "halwa puri Lahore",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Al-Sheikh Sweets",
    title: "Al-Sheikh Sweets — A little sweetness. A lot of happiness.",
    description,
    locale: "en_PK",
    images: [
      {
        url: "/images/hero-mithai.jpg",
        width: 1920,
        height: 1280,
        alt: "A brass tray of assorted mithai at Al-Sheikh Sweets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Sheikh Sweets — Mithai & Bakery in Lahore",
    description,
    images: ["/images/hero-mithai.jpg"],
  },
  robots: { index: true, follow: true },
};

/** Schema.org Bakery structured data — verified business details only. */
const bakerySchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: business.name,
  description,
  telephone: business.phone.display,
  image: `${siteUrl}/images/hero-mithai.jpg`,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zarrar Road, Block B, Cantonment, Al-Faisal Town",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  openingHoursSpecification: business.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: "07:00",
    closes: "00:00",
  })),
  servesCuisine: ["Pakistani sweets", "Bakery"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${nastaliq.variable} antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bakerySchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-saffron focus:px-5 focus:py-3 focus:font-bold focus:text-pomegranate-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
