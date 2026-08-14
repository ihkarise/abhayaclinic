# Image Audit

_Reviewed Phase 2 — unchanged: still no raster images. Asset requirements are
consolidated in `BRAND-ASSET-REQUIREMENTS.md`; patient-image privacy rules are
in `CONTENT-GOVERNANCE.md` (before/after + testimonials collections)._

## Current state
The site currently ships **no raster images**. All visuals (hero, doctor
portrait area, map preview, card art) are lightweight CSS placeholders
(gradients / solid tokens). The only image asset in the repo is the SVG
favicon.

| Image | Source | Dimensions | Format | Alt text | Used on | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `public/favicon.svg` | authored | 32×32 (scalable) | SVG | n/a (icon) | all pages | Placeholder brand mark (letter "A"), pending real logo |

`<img>` tags in source: **0**. `astro:assets <Image>` usage: **0**.
Oversized images: **none** (there are none yet).

## Consequence
There is no image-weight or layout-shift risk today (CLS measured 0). Images
become a performance concern only once real assets are added — so the rules
below apply from the first real image onward.

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
