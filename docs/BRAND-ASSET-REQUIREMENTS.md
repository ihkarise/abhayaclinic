# Brand Asset Requirements

No real photographic or logo assets exist yet. **Nothing is invented** — no
fabricated clinic photos, no AI-generated doctor likeness. This document lists
every required asset so real material can be supplied and dropped in.

> **Hard rule:** the doctor's identity (portrait) must be a real photograph with
> usage consent. Never use an AI-generated or stock face as Dr Varun Vasudev.

## Intake foundation (Phase 3B)
Every slot below has a documented drop-in path under `src/assets/` (or
`public/` for the three static files). Naming and full instructions:
`src/assets/README.md`. Once a correctly-named file is added, `src/lib/media.ts`
picks it up automatically on the next build and the page that uses it swaps
from its CSS placeholder to the real, optimized image — no code change
required. Run `npm run assets:check` at any time for a present/missing report.

## Asset register
| Asset | Required? | Purpose | Recommended dimensions | Format | Drop-in path | Status | Owner/source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Abhaya logo (primary) | Yes | Header, footer, brand | Vector, ~160×40 footprint | SVG (+ PNG fallback) | `src/assets/brand/logo-primary.*` | **Missing** (text "A" placeholder in use) | Clinic |
| Logo mark (icon only) | Yes | Favicon base, compact header | Square, scalable | SVG | `src/assets/brand/logo-mark.*` | **Missing** | Clinic |
| Favicon | Yes | Browser tab | 32×32, 16×16 | ICO (+ existing SVG) | `public/favicon.ico` | SVG placeholder only | Derive from logo |
| Apple touch icon | Yes | iOS home screen | 180×180 | PNG | `public/apple-touch-icon.png` | **Missing** | Derive from logo |
| OG / social image | Yes | Link previews | 1200×630 | JPG or WebP | `public/og-image.jpg` | **Missing** (referenced in meta) | Clinic + design |
| Doctor portrait | Yes | Doctor page, home, About | ~800×800 (+ 2× ) | AVIF + WebP master | `src/assets/photos/doctor/doctor-portrait.*` | **Missing** — real photo + consent | Doctor |
| Clinic exterior | Yes | Contact/location, gallery | ~1600 wide | AVIF + WebP | `src/assets/photos/clinic/clinic-exterior.*` | **Missing** | Clinic |
| Clinic interior | Recommended | About, gallery | ~1600 wide | AVIF + WebP | `src/assets/photos/clinic/clinic-interior.*` | **Missing** | Clinic |
| Consultation photo | Recommended | Home, services | ~1200 wide | AVIF + WebP | `src/assets/photos/clinic/consultation.*` | **Missing** | Clinic (with consent) |
| Hero image | Recommended | Home hero (LCP) | ~1600×1200 max, responsive | AVIF + WebP | `src/assets/photos/hero/hero.*` | **Missing** (CSS placeholder) | Clinic/design |
| Allergy-awareness / educational imagery | Optional | Gallery, blog | varies | AVIF + WebP | `src/assets/photos/gallery/*.*` (descriptive filenames) | **Missing** | Clinic/design |

## Colour & type (already defined — do not redesign yet)
- Green identity tokens live in `src/styles/global.css`
  (`--color-primary #0E7A4B`, `--color-primary-dark`, `--color-leaf`,
  `--color-soft`, `--color-mist`, `--color-canvas`).
- Fonts: Montserrat (headings), Poppins (body). See FONT-STRATEGY.md.

## Handling rules when assets arrive
- Drop the file at the exact path in the register above — `src/lib/media.ts`
  and the pages that call it (`Header`, home, doctor page, gallery) already do
  the rest via `astro:assets` (`<Image>`): optimized modern-format output
  (WebP) at intrinsic width/height, so there is no layout shift (CLS). The
  wired call sites use `<Image>` at a fixed size (single WebP per slot); AVIF
  and a multi-width responsive `srcset` are an available future enhancement —
  switch a slot to `<Picture>` with `formats={['avif','webp']}` and a `widths`
  list when that's wanted (the "AVIF + WebP" register column is the target,
  not yet what the build emits). See IMAGE-AUDIT.md.
- Descriptive filenames; meaningful `alt`; decorative → `alt=""`. Gallery `alt`
  is derived from the filename (see `src/assets/README.md`), so name the file
  the way you'd describe the photo.
- Eager-load only the hero (LCP); lazy-load the rest — already set on the
  wired slots.
- Doctor face used sparingly (doctor page + one home section + About) — not in
  every section (spec §21).
- Patient imagery is consent-gated with EXIF/GPS stripped (see CONTENT-GOVERNANCE.md).

## OG image specifics
Once supplied, place at `public/og-image.jpg` (1200×630). It is already
referenced by the `<SEO>` component (`site.defaultOgImage`); the reference is
harmless until the file exists, then previews work immediately. Article pages
can override with their own `featuredImage`.

## Action items
- [ ] Provide official Abhaya logo (SVG) + icon mark → `src/assets/brand/`.
- [ ] Provide real doctor portrait + written usage consent → `src/assets/photos/doctor/`.
- [ ] Provide clinic exterior/interior photos → `src/assets/photos/clinic/`.
- [ ] Provide/approve OG image (or approve a branded template) → `public/og-image.jpg`.
- [ ] Generate favicon.ico + apple-touch-icon.png from the final logo → `public/`.

Track progress at any time with `npm run assets:check`.
