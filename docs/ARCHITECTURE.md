# Architecture — Abhaya Allergy Center

Target: a fast, SEO-first, allergy-focused, WhatsApp-first static site that can
grow from ~15 pages to 50+ without a rewrite.

## Stack
- **Astro 5** (static output, `trailingSlash: always`, `format: directory`)
- **TypeScript** (strict)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Astro Content Collections** (Zod-typed) for conditions, services, blog,
  patient stories
- **@astrojs/sitemap** + static `robots.txt` + RSS
- Zero client JS except a small vanilla mobile-menu script

## Directory layout
```
src/
├── config/
│   └── site.ts              # domain, brand, SEO defaults (single source)
├── data/
│   ├── clinic.ts            # address, phone, WhatsApp, hours, social (SSOT)
│   └── navigation.ts        # header + footer links
├── lib/
│   ├── whatsapp.ts          # wa.me link + prefilled message builder
│   └── schema.ts            # JSON-LD builders (Org, Website, Physician, …)
├── styles/
│   └── global.css           # design tokens + base + component styles
├── content.config.ts        # collection schemas
├── content/
│   ├── conditions/          # 6 allergy conditions (Markdown)
│   ├── services/            # 4 consultation services
│   ├── blog/                # articles (Markdown/MDX)
│   └── patient-stories/     # consent-gated, template only for now
├── components/
│   ├── SEO.astro            # title/meta/canonical/OG/Twitter/JSON-LD
│   ├── Header.astro         # sticky nav + accessible mobile menu
│   ├── Footer.astro
│   ├── Breadcrumbs.astro
│   ├── WhatsAppButton.astro # primary CTA (context-aware messages)
│   ├── CallButton.astro
│   ├── DirectionsButton.astro
│   ├── FloatingWhatsApp.astro
│   └── CtaBand.astro
├── layouts/
│   └── BaseLayout.astro     # <head>, skip link, header/footer/floating CTA
└── pages/                   # file-based routes (see CURRENT-ROUTES.md)
```

## Content model
See `src/content.config.ts` for the authoritative Zod schemas.

- **conditions** — title, order, summary, intro, symptoms[], triggers[],
  whoAffected, whenToSeekHelp, consultationApproach, faq[], related[],
  featured, `medicalReviewed` (default false), seo.
- **services** — title, order, summary, intro, forWhom, howItWorks[], seo.
- **blog** — full SEO/authoring model incl. `medicalReviewed` (default false),
  `reviewedBy`, `draft` (default true), `canonical`.
- **patientStories** — `consentObtained` (default false) + `draft` gate; the
  template enforces both before anything renders.

## SEO system
- One `<SEO>` component composes title (`… | Abhaya Allergy Center`),
  description, canonical (from `site.url`), OG + Twitter, optional `noindex`,
  and a JSON-LD graph.
- `lib/schema.ts` emits `MedicalClinic`, `WebSite`, `Physician`,
  `BreadcrumbList`, `Article`, `FAQPage` — linked by stable `@id`. **No
  aggregateRating / review nodes are ever emitted.**
- Sitemap auto-generated; `/admin` and `/404` excluded.

## CTA / conversion system
Primary conversion is **WhatsApp**. All wa.me links are built through
`lib/whatsapp.ts` (never hand-assembled). `WhatsAppButton` accepts a `context`
(default/booking/online) or a `condition` title to prefill a relevant message.

## Interactivity budget
Static by default. The only JS today is the header mobile-menu toggle (vanilla,
in-component). Future islands (gallery lightbox, story filters) will be added
only where interaction is real — see `PERFORMANCE-BUDGET.md`.

## Deployment
GitLab Pages via `.gitlab-ci.yml` (install → typecheck+build → deploy
`public/`). GitHub Actions workflow retained for the development phase. Custom
domain root, no `base` path. See `DEPLOYMENT.md`.

## CMS (deferred)
Decap CMS at `/admin/` with the GitLab backend (PKCE) is planned for a later
phase. The blog schema is already CMS-compatible, so integration needs no
content restructuring.
