# Image Audit

_Reviewed Phase 3B — still no real raster images shipped, but the intake +
rendering foundation is now wired. Asset requirements are consolidated in
`BRAND-ASSET-REQUIREMENTS.md`; patient-image privacy rules are in
`CONTENT-GOVERNANCE.md` (before/after + testimonials collections)._

## Current state
The site still ships **no real raster images** — nothing was fabricated to
fill the gap. What changed in Phase 3B is the plumbing: `src/lib/media.ts`
(via `import.meta.glob`) detects real files dropped into `src/assets/brand/`
and `src/assets/photos/*` and, when present, renders them through
`astro:assets <Image>` in place of the current CSS placeholder. Until a file
arrives at the documented path (`src/assets/README.md`), every visual (hero,
header mark, doctor portrait area, map preview, gallery grid) still renders
its existing lightweight placeholder (gradient / solid token / honest empty
state).

| Image | Source | Dimensions | Format | Alt text | Used on | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `public/favicon.svg` | authored | 32×32 (scalable) | SVG | n/a (icon) | all pages | Placeholder brand mark (letter "A"), pending real logo |

`<img>` tags in source: **0**. `astro:assets <Image>` usage: wired at 5 call
sites (`Header`, home hero, home doctor section, doctor page portrait,
gallery grid) — all conditional, all currently rendering `null` (no file
present yet) and falling back to the placeholder. Oversized images: **none**
(there are none yet).

## Consequence
There is no image-weight or layout-shift risk today (CLS measured 0). Images
become a performance concern only once real assets are added — so the rules
below apply from the first real image onward. Run `npm run assets:check` to
see, at a glance, which required assets are still missing.

## Required real assets (pending — see MISSING-INFORMATION.md)
| Asset | Target format | Target dimensions | Loading | Page | Priority |
| --- | --- | --- | --- | --- | --- |
| Brand logo (header/footer) | SVG | scalable | eager | all | High |
| `favicon.ico` | ICO | 32×32, 16×16 | — | all | Medium |
| `apple-touch-icon.png` | PNG | 180×180 | — | all | Medium |
| `og-image.jpg` | JPG/WebP | 1200×630 | — | social share | High |
| Hero image | AVIF + WebP | ~1600×1200 max, responsive | **eager (LCP)** | home | High |
| Doctor portrait | AVIF + WebP | ~800×800 | lazy | home, doctor | High |
| Clinic photos | AVIF + WebP | ~1200 wide | lazy | contact, gallery | Medium |
| Gallery images | AVIF + WebP | ~1200 wide, responsive | lazy | gallery | Medium |
| Before/After cases | AVIF + WebP | ~800 wide | lazy | before-after | Low (consent-gated) |

## Rules (enforced when assets are added)
- Use `astro:assets` `<Image>` / `<Picture>` for automatic AVIF/WebP,
  responsive `srcset`, and intrinsic width/height (prevents CLS).
- Descriptive filenames (`dr-varun-vasudev-consultation.jpg`, never `IMG_1234`).
- Meaningful `alt` on every content image; decorative images `alt=""`.
- Eager-load only the hero (LCP); lazy-load everything below the fold.
- No source image larger than needed; no CSS background image where a semantic
  `<img>` is appropriate.
- Patient/before-after images: consent confirmed, EXIF/GPS stripped, identifiers
  removed (see `beforeAfter` collection gates).

## Follow-ups
- [ ] Obtain official logo + branded icons + OG image.
- [ ] Add optimized hero and doctor images; re-measure LCP.
- [ ] Populate gallery with categorized, optimized images.
