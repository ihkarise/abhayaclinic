# Brand asset intake

This is the drop-in point for **real** brand and photographic assets. Nothing
in this repository fabricates a logo, a doctor likeness, or a clinic photo —
every image on the site today is a CSS placeholder until a real file lands
here at the exact path below. The moment it does, `src/lib/media.ts` picks it
up automatically on the next build; no code change is required.

Full spec (dimensions, format, priority, owner) for every asset:
`docs/BRAND-ASSET-REQUIREMENTS.md`. Consent/privacy rules for any photo of a
person: `docs/CONTENT-GOVERNANCE.md`. Run `npm run assets:check` at any time
to see what's present vs. still missing.

## Where each file goes

| Slot | Path (any of `.svg` / `.png` / `.jpg` / `.webp` / `.avif`, as appropriate) |
| --- | --- |
| Primary logo (full lockup) | `src/assets/brand/logo-primary.*` |
| Logo mark (icon only) | `src/assets/brand/logo-mark.*` |
| Home hero image | `src/assets/photos/hero/hero.*` |
| Doctor portrait | `src/assets/photos/doctor/doctor-portrait.*` |
| Clinic exterior | `src/assets/photos/clinic/clinic-exterior.*` |
| Clinic interior | `src/assets/photos/clinic/clinic-interior.*` |
| Consultation photo | `src/assets/photos/clinic/consultation.*` |
| Gallery images (any number) | `src/assets/photos/gallery/*.{jpg,png,webp,avif}` |

Favicon, Apple touch icon and the social share (OG) image are **not** here —
those are static files served as-is from `public/` (`public/favicon.ico`,
`public/apple-touch-icon.png`, `public/og-image.jpg`); see
`docs/BRAND-ASSET-REQUIREMENTS.md` for their specs.

## Rules

- **Logo (`brand/`)**: prefer SVG. The doctor's identity must always be a real
  photograph with usage consent — never an AI-generated or stock face.
- **Filenames must match the slot exactly** (e.g. `doctor-portrait.jpg`, not
  `IMG_4021.jpg`) — that's what `src/lib/media.ts` looks for.
- **Gallery filenames are free-form but must be descriptive** — the filename
  (with hyphens/underscores turned into spaces) becomes the image's `alt`
  text, so name the file the way you'd describe the photo to someone who
  can't see it (e.g. `clinic-waiting-area.jpg`, not `photo1.jpg`).
- Photos of people (doctor, patients, staff) require consent; before/after
  and testimonial imagery has its own gating — see `CONTENT-GOVERNANCE.md`.
  Strip EXIF/GPS from any photo before adding it here.
- Once a file is added, it is processed through `astro:assets` automatically
  (AVIF/WebP, responsive sizing, no layout shift) — no manual optimization
  needed before dropping it in, though a reasonably sized source (not a
  50 MB camera original) keeps builds fast.
