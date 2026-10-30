# Design plan — Al-Sheikh Sweets

Two-pass plan per the Anthropic frontend-design skill, reviewed against the
brief before implementation. The UI/UX Pro Max `--design-system` output is
persisted in `design-system/al-sheikh-sweets/MASTER.md`; where it conflicts
with the client's brief, the brief wins (see "Review" below).

## Pass 1 — token system

**Colour (client palette, semantic names)**
- Pomegranate `#791C3B` — primary brand canvas, header/footer, hero
- Saffron `#F4BD36` — the recognisable accent: CTAs on dark, seals, ticker
- Pistachio `#879B59` — savoury / nashta sections, quiet balance
- Warm milk `#FFF1D9` — light ground (used in blocks, never for every section)
- Deep cocoa `#291C18` — catalogue section, body text on light
- Guava `#E66F56` — small celebratory accents only

**Type**
- Fraunces (display serif, soft optical sizing) — headlines, wordmark.
  Chosen over the skill search's Playfair Display: Playfair is the default
  "luxury food" pairing and reads templated; Fraunces has the warm, edible,
  slightly old-style character of a Lahori sweet counter.
- Manrope — body and UI, high legibility at small sizes.
- Noto Nastaliq Urdu — one authentic Urdu line in the hero and footer only.

**Layout concept**
Pomegranate hero, asymmetric: headline left, a large plate-round mithai
photograph right, a smaller round gulab-jamun inset overlapping its edge,
the brand seal turning very slowly on the seam. Every following section has
its own composition — an offset category mosaic, a cocoa catalogue with one
tall feature, a saffron bakery spread, an oversized-type story, a masonry
gallery, a giant-number reviews block, a split visit panel. No repeated
card rows.

**Principles**
- Spend the boldness in the hero and the colour blocking; keep the rest
  disciplined.
- Food is always the largest thing on screen.
- One orchestrated load sequence in the hero; scroll reveals are clipped
  image reveals and short text rises, used sparingly — never a fade-up on
  every element.
- Copy says only what is verified. No prices, no invented history.

## Pass 2 — review against the brief (what was changed and why)

- The generated design system recommended Brutalism, instant transitions,
  sharp corners, Playfair Display + Inter and a stone/gold palette. That is
  a generic default that contradicts the client's pomegranate/saffron
  identity and warm, celebratory brief — **rejected**, except its useful
  parts: feature-showcase section order, standard-tier stagger motion, and
  its pre-delivery accessibility checklist.
- A warm-cream-everywhere layout (the common AI bakery default) was
  rejected: sections alternate pomegranate, warm milk, cocoa, saffron and
  pistachio blocks so the page feels colourful like a mithai counter.
- Eyebrow labels above every heading, single-word italic headline accents
  and numbered section markers were dropped — they are template chrome,
  not information.
- Photography is editorial imagery created for this site. It is never
  captioned as the real shop, counter or products; the data file marks
  every image replaceable with the bakery's own photography.
