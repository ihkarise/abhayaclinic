# Architecture Audit — Abhaya Allergy Center

_Phase 0 deliverable. Audit of the repository as it existed before the Astro
rebuild, and the decisions taken._

## 1. What the repository was

A Google AI Studio–generated **React 19 + Vite 6 single-page application**.

| Aspect | Finding |
| --- | --- |
| Framework | React 19, Vite 6, `react-router-dom` v7 (`BrowserRouter`, client-side) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Extras | `motion` (animation), `lucide-react` (icons), unused `@google/genai` + `express` |
| Build | `vite build` + copy `index.html`→`404.html` (SPA fallback) |
| Size | 21 source files, ~1,000 LOC |
| Pages | 12 routes; **6 were one-line stubs** (About, Blog, Contact, Gallery, PrivacyPolicy, Disclaimer) |

## 2. Problems identified

### SEO (critical)
- Client-rendered SPA — no server HTML for crawlers.
- No per-route `<title>`/description/canonical. Global title was literally
  `"My Google AI Studio App"`.
- No sitemap, no `robots.txt`, no structured data (JSON-LD).

### Content authenticity (critical)
- Fabricated testimonials (`Sarah M.`, `Rahul K.`, `Amina P.`) with invented
  5-star ratings.
- `ConditionDetail` rendered placeholder `"Symptom description 1..4"` and a
  generic invented overview for every condition.
- Old source site carried claims that must **not** be reproduced:
  `"Best Outcome for Every Patient Every Time Any where"`, `"96% of women"`,
  `"curable"` — see `MISSING-INFORMATION.md` / `CONTENT-MIGRATION.md`.

### Routing
- `/:conditionId` catch-all mounted at the **router root** — any unknown path
  resolved as a "condition."
- Footer linked to `/allergic-rhinitis` (root) while the data/detail route
  expected `/allergy-conditions/...` — broken links.

### Data / maintainability
- WhatsApp/phone `919188240272` hard-coded in three components. No single
  source of truth.

### Positioning
- Branded "Homoeopathic Medical Center," not "Allergy Center."
- Primary CTA was "Book Appointment," not WhatsApp.

### Performance / accessibility
- Google Fonts via CSS `@import` (render-blocking), 2 families / ~10 weights.
- `motion` shipped for trivial fades.
- Text-only "A" logo, no real favicon / OG image / manifest.

### Deployment / config
- Canonical production domain configured nowhere.
- `.env.example` carried AI-Studio/Gemini scaffolding irrelevant to a static
  marketing site.

## 3. Preserve vs replace

### Preserved
- **Design identity** — green system (`#0E7A4B` primary, leaf, soft green),
  Montserrat/Poppins pairing (tokens ported into `src/styles/global.css`,
  leaf darkened to `#6FAE2F` for AA contrast).
- **Information-architecture ideas** — condition list, header/footer layout,
  floating WhatsApp widget, home flow (hero → about → conditions → CTA).
- **Real clinic content** extracted from the old site (address, hours, doctor
  bio, mission/vision) — carried into `src/data/clinic.ts` and the About pages.

### Replaced
- React SPA → **Astro static generation** (islands only where genuinely
  interactive: mobile nav today).
- `react-router-dom` → Astro file-based routing with semantic URLs.
- Hard-coded strings → `src/config/site.ts` + `src/data/clinic.ts` +
  `src/data/navigation.ts`.
- Fabricated content → real educational content or documented as missing.
- CSS `@import` fonts → `<link>` with reduced weight set + `display=swap`
  (self-hosting is a Phase 8 follow-up).

## 4. Decision: migrate to Astro

Confirmed appropriate. This is an SEO- and content-driven marketing site, not
an application. The React scaffold was ~90% placeholder, so sunk cost was low.
Astro gives static HTML, near-zero JS by default, Content Collections for
scalable content, and first-class sitemap/SEO tooling.

## 5. Security notes
- No secrets committed. The old `.env.example` (Gemini/AI-Studio) was removed;
  a static site needs no server secrets.
- Astro 5.18.2 is pinned. `npm audit` flags XSS advisories fixed only in Astro
  7 (a breaking major). Risk is negligible here (all rendered content is
  authored; no untrusted input reaches `define:vars`/spread props). **Follow-up:
  evaluate the Astro 7 upgrade** — logged in `MISSING-INFORMATION.md`.

## 6. Result of Phase 1
26 static pages build cleanly; `astro check` passes with 0 errors. See
`ARCHITECTURE.md` for the delivered structure.
