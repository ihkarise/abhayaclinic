# Performance Baseline

Measured with **Lighthouse 13.4.1** against the **production build** (`npm run
build` → `astro preview`), desktop preset, headless Chromium. This is the
Phase 1.5 baseline, not a synthetic target-chasing exercise.

## Scores (home page)
| Category | Score | Target | Status |
| --- | --- | --- | --- |
| Performance | 90 | 95+ | Below — see note |
| Accessibility | 100 | 95+ | ✅ |
| Best Practices | 96 | 95+ | ✅ (one env-only item) |
| SEO | 100 | 100 | ✅ |

Representative content routes (`/conditions/allergic-rhinitis/`, `/blog/…`,
`/contact/`) scored identically: **P90 / A100 / B96 / S100**.

## Core Web Vitals (lab)
| Metric | Value | Target |
| --- | --- | --- |
| LCP | 0.4 s | ≤ 2.5 s ✅ |
| CLS | 0 | ≤ 0.1 ✅ |
| TBT | 0 ms | (INP proxy) ✅ |
| FCP | 0.4 s | — |

Field vitals are excellent: no layout shift, no blocking JS (the only script is
the inlined mobile-menu toggle).

## Why Performance is 90, not 95+
Two related causes, both understood and non-artificial:

1. **Environment artifact.** This sandbox blocks Google's font CDN, so the
   `fonts.googleapis.com` request fails with `ERR_CONNECTION_RESET`
   (status `-1`). This single failed request is *also* the only
   Best-Practices `errors-in-console` item (hence B96, not 100). In production
   the request succeeds and this disappears.
2. **Third-party fonts.** Even when it loads, the external Google Fonts request
   is the main remaining performance cost.

**Fix (Phase 8, documented):** self-host + subset the two font families. This
removes the third-party request entirely, eliminates the console error
(→ B100), and is expected to lift Performance to 95+. No code depends on the
external host.

## JavaScript / asset weight
| Asset | Size |
| --- | --- |
| Total JS shipped | **0 bytes** external (mobile-menu script inlined) |
| CSS (one file, Tailwind, purged) | ~28 KB uncompressed |
| Raster images | 0 (all placeholders are CSS; real images pending) |
| Fonts | 2 families × 5 weights, `display=swap` (self-host pending) |

## How to reproduce
```bash
npm run build
npm run preview            # serves dist/ at http://localhost:4321
CHROME_PATH=<chromium> lighthouse http://localhost:4321/ \
  --preset=desktop --only-categories=performance,accessibility,best-practices,seo
```

## Follow-ups (Phase 8)
- [ ] Self-host + subset fonts (primary perf + console-error fix).
- [ ] Add real optimized hero/clinic images via `astro:assets` (watch LCP).
- [ ] Add Lighthouse CI to the pipeline with score thresholds.
- [ ] Re-baseline against the live GitLab Pages production URL.
