# SKS World School — Admission Landing Page

Single-page, mobile-first admission enquiry landing page for **SKS World School,
Greater Noida West** (skswsgnw.ac.in). Built for Google / Meta Ads traffic — one
continuous scroll, no navigation menu, one goal: capture admission enquiries.

Stack: **Next.js 15 (App Router) + Tailwind CSS**, TypeScript.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start   # production
```

## Structure

| File | Purpose |
|---|---|
| `app/layout.tsx` | SEO metadata (title, description, canonical → skswsgnw.ac.in, OpenGraph, JSON-LD `School`) |
| `app/page.tsx` | Assembles all sections in order |
| `app/api/enquiry/route.ts` | Receives form submissions — **wire this to email / CRM / sheet (see TODO in file)** |
| `components/EnquiryModal.tsx` | Modal + context; `ApplyNowButton` opens it from anywhere |
| `components/EnquiryForm.tsx` | Name / Phone / Class / Submit — used inline (hero, final CTA) and in the modal |
| `components/*` | One file per section |

## Sections (in order)

1. Sticky top bar — logo + click-to-call helpline
2. Hero — headline, 5 trust bullets, inline enquiry form (above the fold on mobile), 2 stat callouts
3. Why Choose Us — 6 icon cards
4. Infrastructure — Academic / Arts & Culture / Sports & Recreation / Safety & Security
5. Class-wise admission tabs — Pre-Primary / Primary / Middle / Secondary & Sr. Secondary, each with a class-specific *Enquire* CTA
6. How to Apply — 5 steps
7. Age Eligibility table
8. Testimonials — 3 real parent quotes
9. FAQ accordion — native `<details>`, zero JavaScript
10. Final CTA — "Give Your Child a Head Start" + form + embedded Google Map
11. Minimal footer — address, phone, child helpline 1098, email, social icons

Plus a sticky **mobile bottom bar** (Call Now / Apply Now); *Apply Now* anywhere
opens the enquiry form as a modal.

## Design system

Ported from the reference theme **msc-warm-theme.vercel.app** and recoloured to
the SKS maroon / charcoal / cream / gold palette. All components reference
tokens — nothing hard-codes hex. Swap the values in
[`tailwind.config.ts`](tailwind.config.ts) when official brand hex arrives.

| token | value | used for |
|---|---|---|
| `brand` | `#7A1F2B` | maroon bands, buttons, headings on cream, checkmarks, table header |
| `charcoal` | `#1F211E` | dark bands, utility strip, footer |
| `cream` | `#FBF8F3` | page + light bands · `cream-border` `#E0D7C6` hairlines |
| `gold` | `#A8874E` | eyebrow labels (11.5px / 500 / 0.28em / uppercase) |
| `ink` | `#2A2622` | body text on cream |

- **Headings** — Marcellus serif, weight 400 (matches reference). **Body** — Karla. Both self-hosted via `next/font`.
- **Buttons** — flat, `3px` radius, no shadow, weight 500 (`.btn-primary`, `.btn-on-dark`).
- **Cards** — `10px` radius, `1px` `#E0D7C6` border, `0 4px 16px rgba(31,33,30,.09)` shadow (`.card` / `.card-dark`).
- **Full-bleed colour bands** rotate maroon → charcoal → cream down the page
  (`.band-maroon` / `.band-dark` / `.band-cream` in [`globals.css`](app/globals.css)
  recolour text + headings automatically).

## Hero carousel

[`components/HeroCarousel.tsx`](components/HeroCarousel.tsx) — full-bleed
auto-rotating background (4.5s crossfade, dots + desktop arrows), 5 real photos
from `skswsgnw.ac.in/wp-content/uploads/…` served through `next/image`. A layered
cream overlay keeps the maroon headline and white form card readable on every
slide. Auto-advance is disabled under `prefers-reduced-motion`. Swap the
`SLIDES` array to change images.

## Images

- Logo + 5 hero-carousel photos: loaded from `skswsgnw.ac.in` via `next/image`
  (host allow-listed in `next.config.mjs` `remotePatterns`).
- Infrastructure photos: `components/Placeholder.tsx` renders a lightweight
  textured block with descriptive `aria-label` (no network request). Replace
  with `<Image>` once specific campus photos are chosen.

## Performance notes

- ~112 KB First-Load JS; every section except the modal, tabs, form and bottom
  bar is a server component.
- FAQ accordion uses native `<details>` — no JS.
- Google Map is a lazy-loaded `<iframe>`.
- `scroll-behavior: smooth`; sticky bars use `backdrop-blur`.
