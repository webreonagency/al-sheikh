# Al-Sheikh Sweets — Website

A premium, production-ready website for **Al-Sheikh Sweets**, a sweets and
bakery shop on Zarrar Road, Al-Faisal Town, Lahore, Pakistan.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Lucide
icons. No backend, accounts, database or online ordering — this is a
business website designed to be deployed on Vercel.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Where things live

| What | Where |
| --- | --- |
| Business details (address, phone, hours, Google rating) | `src/data/business.ts` |
| Categories, featured sweets, gallery, image list | `src/data/products.ts` |
| Navigation | `src/data/navigation.ts` |
| Page sections | `src/components/sections/` |
| Header, footer, mobile call bar | `src/components/layout/` |
| Logo (React + standalone SVG + favicon) | `src/components/logo.tsx`, `public/logo/`, `src/app/icon.svg` |
| Design plan & skill review | `docs/DESIGN-PLAN.md` |
| Generated design system (with client override note) | `design-system/al-sheikh-sweets/MASTER.md` |
| Food imagery | `public/images/` |

## Before going live — owner confirmation needed

1. **Production domain.** Set `NEXT_PUBLIC_SITE_URL` in the deployment
   environment. Canonical URLs, the sitemap and Open Graph URLs use it.
2. **Product catalogue.** The named items (kalakand, barfi, gulab jamun,
   halwa puri, samosas, birthday cakes, biscuits) come from public customer
   reviews, not a confirmed menu. Confirm the real catalogue — and any
   prices, if they should ever be shown — in `src/data/products.ts`.
   The site deliberately shows **no prices and no ordering**.
3. **Photography.** All food imagery is editorial imagery created for this
   website; it is not photography of the shop or its actual products.
   Replace files in `public/images/` with the bakery's own photography
   (same filenames, or update `src/data/products.ts`).
4. **Social profiles.** None were verified, so none are linked. Add
   verified URLs to `business.socials` in `src/data/business.ts`.
5. **Google rating.** `4.3 ★ · 1,039 reviews` is centralised in
   `business.googleRating` — update it as the listing changes.
6. **Services.** The site makes no claims about custom cake orders,
   catering, delivery or WhatsApp ordering, because none are confirmed.

## Design

Pomegranate `#791C3B` and saffron `#F4BD36` lead, with pistachio, warm
milk, deep cocoa and guava in supporting roles. Fraunces for display type,
Manrope for body, Noto Nastaliq Urdu for cultural details. The logo is an
original vector seal — a barfi diamond holding a gulab jamun round, ringed
like the lid of a mithai box.

Accessibility and motion: visible focus rings, 44px+ touch targets,
keyboard-operable gallery lightbox, and full `prefers-reduced-motion`
support. Responsive from 320px to widescreen, with a mobile call /
directions bar.

---

Website by [WebReOn Agency](https://webreon.agency).
