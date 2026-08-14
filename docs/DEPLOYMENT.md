# Deployment

## Overview
The site is a static Astro build. Two deployment surfaces exist:

1. **GitHub (development phase, current).** `.github/workflows/deploy.yml`
   builds and publishes to GitHub Pages for preview. Retained until the GitLab
   migration is explicitly approved. **Do not delete it yet.**
2. **GitLab Pages (final production target).** `.gitlab-ci.yml` builds and
   deploys to the custom domain `https://abhayaallergycenter.com/`.

## Build
```bash
npm ci
npm run typecheck   # astro check — blocks deploy on type errors
npm run build       # → dist/
```

## Migration flow (GitHub → GitLab)
```
GitHub development  →  Production approval  →  Create GitLab project
      →  Push repo to GitLab  →  GitLab CI builds (.gitlab-ci.yml)
      →  GitLab Pages serves  →  Add custom domain + DNS + HTTPS
      →  Verify canonical/sitemap/robots  →  Submit sitemap to Search Console
```
Do **not** migrate the repository or configure production DNS until explicitly
instructed.

## `.gitlab-ci.yml` (already in repo)
Stages: `install` (`npm ci`) → `validate` (`typecheck` + `build`) → `pages`
(move `dist/` → `public/`, deploy). Node 22. Deploys only from the default
branch. A failed typecheck or build blocks deployment.

> **Astro + GitLab Pages note:** Astro outputs to `dist/`, but GitLab Pages
> serves from `public/`. The `pages` job renames `dist` → `public`. Because the
> project also has a source `public/` for static assets, those assets are
> already copied into `dist/` during the build, so the rename is safe.

## Custom domain & DNS (production)
1. In the GitLab project: **Deploy → Pages → New Domain** →
   `abhayaallergycenter.com` (and optionally `www`).
2. Add the DNS records GitLab shows:
   - `A` / `ALIAS` record for the apex domain to GitLab Pages IP.
   - `TXT` verification record.
3. Enable **"Force HTTPS"** and **"Automatic certificate management (Let's
   Encrypt)"** once the domain verifies.
4. Confirm `site: https://abhayaallergycenter.com` in `astro.config.mjs` (set).
   No `base` path — the site runs at the domain root.

## Redirects (old → new URLs)
GitLab Pages supports a `public/_redirects` file (Netlify-style syntax).
Generate it from `URL-MIGRATION-MAP.md` before launch, e.g.:
```
/en/about-us            /about/                       301
/en/doctor              /about/dr-varun-vasudev/      301
/en/contact-us          /contact/                     301
/en/appointment         /book-consultation/           301
```
Do not use client-side JS redirects. (This file is not yet created — pending the
finalised URL list; see `URL-MIGRATION-MAP.md`.)

## Post-launch checklist
- [ ] `robots.txt` reachable and references the sitemap.
- [ ] `sitemap-index.xml` reachable; contains only canonical indexable URLs.
- [ ] Submit sitemap to Google Search Console; verify domain.
- [ ] Spot-check canonical tags point to `abhayaallergycenter.com`.
- [ ] Test old URLs resolve via `_redirects`.
- [ ] Verify WhatsApp / call / directions CTAs on mobile.

## Secrets
None required for a static build. Do not commit tokens. CMS (Decap/GitLab)
credentials, when added, use OAuth (PKCE) — no secrets in the repo.
