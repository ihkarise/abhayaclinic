# Missing Information — needs verification before production

Nothing below is invented on the site. Where a fact is unconfirmed, the site
either uses a clearly-marked provisional value (in `src/data/clinic.ts`) or
shows an honest empty state. **Confirm each item with the clinic before launch.**

## Contact & business details
- [ ] **Verified WhatsApp number.** Old site shows two: `+91 91882 40272`
      (`9188240272`) and `+91 95397 60272` (`9539760272`). Primary is currently
      set to `9188240272` in `clinic.ts`. Confirm which is the WhatsApp line.
- [ ] **Official email** on the new domain (currently `info@drvarunvasudev.com`).
- [ ] **Exact clinic geo-coordinates** (lat/lng) — `clinic.maps.geo` is `null`;
      `LocalBusiness` geo is omitted until provided.
- [ ] **Official Google Business Profile / Maps place URL** (currently a generic
      directions query).
- [ ] **Opening days.** About page says Mon–Sat 9:00 AM–7:00 PM; Contact page
      omits days. Sunday assumed closed. Confirm.
- [ ] **Facebook / Twitter URLs** (blank in `clinic.social`). Instagram
      (`drvarunvaaz`) and YouTube (`@drvarunvasudev`) taken from the old footer —
      confirm still correct.

## Brand & doctor
- [ ] **Final brand name usage.** New name is "Abhaya Allergy Center"; signage /
      registration reads "Abhaya Homoeopathic Medical Center" (`clinic.formerName`).
- [ ] **Dr Varun Vasudev's full credentials** — registration number, any
      additional qualifications/memberships. Only "BHMS, Martin Homoeopathic
      Medical College, Coimbatore" is stated (from the old About page). Physician
      JSON-LD omits credentials until verified.
- [ ] **Doctor photo** (real, optimized) for the doctor page and home.

## Condition list
- [ ] **Doctor-approved final allergy condition list.** Current 6 are drawn from
      the old site's allergy-relevant items + the spec. Confirm which to keep,
      add or remove. (Old non-allergy services — Fibroid Uterus, Psoriasis,
      Thyroid, Infertility, Calcaneal Spur, Kidney Stone, Gastric Ulcer,
      Migraine, Weightloss — are intentionally **not** migrated; see
      `CONTENT-MIGRATION.md`.)
- [ ] **Medical review** of every condition page. All are `medicalReviewed: false`.

## Media assets
- [ ] **Real hero / clinic images** (optimized AVIF/WebP). Placeholders in use.
- [ ] **`public/og-image.jpg`** — branded 1200×630 social-share image (referenced
      by SEO meta; file not yet added).
- [ ] **`public/apple-touch-icon.png`** and **`public/favicon.ico`** (SVG favicon
      exists). Use official Abhaya branding.
- [ ] **Gallery images** with descriptive filenames, dimensions, alt text.

## Patient content (consent-gated)
- [ ] **Real testimonials** the clinic is authorized to publish (none on the site
      — fabricated ones from the scaffold were removed).
- [ ] **Before/after cases** — require written consent, EXIF/metadata scrub, and
      removal of identifiers. Note: the reference PDFs contain identifiable body
      parts and a phone-number watermark; do **not** republish as-is.

## Technical follow-ups
- [x] **Astro 7 upgrade** — DONE (Phase 1.5). Migrated 5.18.2 → 7.2.2 (current
      stable); resolved all `npm audit` advisories (3 → 0). See ARCHITECTURE.md.
- [ ] **Analytics** decision (privacy-friendly, e.g. Plausible) — update Privacy
      Policy accordingly.
- [ ] **Self-hosted fonts** (Phase 8 performance).
- [ ] **Final GitLab namespace/group** for CMS backend + `.gitlab-ci.yml` Pages.
