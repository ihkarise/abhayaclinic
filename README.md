# Abhaya Allergy Center

Allergy-first, SEO-focused, WhatsApp-first website for **Abhaya Allergy Center**
(Dr Varun Vasudev), Nilambur, Kerala.

Built with **Astro + TypeScript + Tailwind CSS** as a static site.
Production domain: `https://abhayaallergycenter.com`.

## Quick start
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # astro check
npm run build      # → dist/
npm run preview
```

## Structure
- `src/config/site.ts` — domain & brand (single source of truth)
- `src/data/clinic.ts` — address, phone, WhatsApp, hours, social (single source)
- `src/data/navigation.ts` — nav links
- `src/lib/` — `whatsapp.ts` (CTA links), `schema.ts` (JSON-LD)
- `src/content/` — typed collections: conditions, services, blog, patient-stories
- `src/components/` — SEO, Header, Footer, CTAs, Breadcrumbs
- `src/layouts/BaseLayout.astro` — head, SEO, header/footer/floating CTA
- `src/pages/` — file-based routes
- `docs/` — architecture, routes, SEO, performance, migration & deployment docs

## Editing content
Add a Markdown file under `src/content/<collection>/`. Schemas are enforced in
`src/content.config.ts`. Blog articles default to `draft: true` and
`medicalReviewed: false` — set `draft: false` to publish; only set
`medicalReviewed: true` after a real doctor review.

## Deployment
- **Now:** GitHub Actions (`.github/workflows/deploy.yml`) for dev preview.
- **Production target:** GitLab Pages via `.gitlab-ci.yml` on the custom domain.

See **`docs/DEPLOYMENT.md`**. Repository migration to GitLab happens only after
production approval.

## Important content rules
This is a medical site. No invented cures, statistics, outcomes, testimonials,
credentials, or structured-data ratings. Unverified facts are logged in
`docs/MISSING-INFORMATION.md`, not guessed.
