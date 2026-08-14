# Brand Asset Requirements

No real photographic or logo assets exist yet. **Nothing is invented** — no
fabricated clinic photos, no AI-generated doctor likeness. This document lists
every required asset so real material can be supplied and dropped in.

> **Hard rule:** the doctor's identity (portrait) must be a real photograph with
> usage consent. Never use an AI-generated or stock face as Dr Varun Vasudev.

## Asset register
| Asset | Required? | Purpose | Recommended dimensions | Format | Status | Owner/source |
| --- | --- | --- | --- | --- | --- | --- |
| Abhaya logo (primary) | Yes | Header, footer, brand | Vector, ~160×40 footprint | SVG (+ PNG fallback) | **Missing** (text "A" placeholder in use) | Clinic |
| Logo mark (icon only) | Yes | Favicon base, compact header | Square, scalable | SVG | **Missing** | Clinic |
| Favicon | Yes | Browser tab | 32×32, 16×16 | ICO (+ existing SVG) | SVG placeholder only | Derive from logo |
| Apple touch icon | Yes | iOS home screen | 180×180 | PNG | **Missing** | Derive from logo |
| OG / social image | Yes | Link previews | 1200×630 | JPG or WebP | **Missing** (referenced in meta) | Clinic + design |
| Doctor portrait | Yes | Doctor page, home, About | ~800×800 (+ 2× ) | AVIF + WebP master | **Missing** — real photo + consent | Doctor |
| Clinic exterior | Yes | Contact/location, gallery | ~1600 wide | AVIF + WebP | **Missing** | Clinic |
| Clinic interior | Recommended | About, gallery | ~1600 wide | AVIF + WebP | **Missing** | Clinic |
| Consultation photo | Recommended | Home, services | ~1200 wide | AVIF + WebP | **Missing** | Clinic (with consent) |
| Hero image | Recommended | Home hero (LCP) | ~1600×1200 max, responsive | AVIF + WebP | **Missing** (CSS placeholder) | Clinic/design |
| Allergy-awareness / educational imagery | Optional | Gallery, blog | varies | AVIF + WebP | **Missing** | Clinic/design |

## Colour & type (already defined — do not redesign yet)
- Green identity tokens live in `src/styles/global.css`
  (`--color-primary #0E7A4B`, `--color-primary-dark`, `--color-leaf`,
  `--color-soft`, `--color-mist`, `--color-canvas`).
- Fonts: Montserrat (headings), Poppins (body). See FONT-STRATEGY.md.

## Handling rules when assets arrive
- Process through `astro:assets` (`<Image>`/`<Picture>`) for AVIF/WebP +
  responsive `srcset` + intrinsic dimensions (no CLS). See IMAGE-AUDIT.md.
- Descriptive filenames; meaningful `alt`; decorative → `alt=""`.
- Eager-load only the hero (LCP); lazy-load the rest.
- Doctor face used sparingly (doctor page + one home section + About) — not in
  every section (spec §21).
- Patient imagery is consent-gated with EXIF/GPS stripped (see CONTENT-GOVERNANCE.md).

## OG image specifics
Once supplied, place at `public/og-image.jpg` (1200×630). It is already
referenced by the `<SEO>` component (`site.defaultOgImage`); the reference is
harmless until the file exists, then previews work immediately. Article pages
can override with their own `featuredImage`.

## Action items
- [ ] Provide official Abhaya logo (SVG) + icon mark.
- [ ] Provide real doctor portrait + written usage consent.
- [ ] Provide clinic exterior/interior photos.
- [ ] Provide/approve OG image (or approve a branded template).
- [ ] Generate favicon.ico + apple-touch-icon.png from the final logo.
