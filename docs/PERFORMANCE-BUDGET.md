# Performance Budget

## Core Web Vitals targets (field)
| Metric | Target |
| --- | --- |
| LCP | ≤ 2.5 s |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |

## Lighthouse targets (lab)
| Category | Target |
| --- | --- |
| Performance | 95+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |

## JavaScript budget
- **Baseline: 0 KB app JS** on static pages. Astro ships no framework runtime by
  default.
- Current JS: only the header mobile-menu toggle (~0.5 KB inline, vanilla).
- Allowed additions, island-scoped only: gallery lightbox, patient-story
  filters, optional subtle animation. Each must be `client:visible`/`idle` and
  justified.
- **No** animation library for simple fades. Respect `prefers-reduced-motion`
  (already handled globally in `global.css`).

## Image budget
- Formats: AVIF preferred, WebP fallback; use Astro's `<Image>` / `astro:assets`
  for content images.
- Always set width/height (no CLS). Lazy-load below the fold; eager-load only the
  LCP hero.
- No source image wider than needed (hero ≤ ~1600px, cards ≤ ~800px).
- Descriptive filenames + alt text required (no `IMG_1234.jpg`).
- Current placeholders (CSS gradient blocks) carry no image weight; replace with
  optimized assets per `MISSING-INFORMATION.md`.

## Font budget
- 2 families (Montserrat, Poppins), **5 weights total** (M 600/700, P 400/500/600).
- `display=swap` + preconnect today. **Phase 8: self-host + subset** to remove
  the third-party request and eliminate swap flash.

## CSS budget
- Tailwind v4, purged to used classes at build. Design tokens centralised in
  `global.css`.

## Third-party script policy
- Default: **none.** No trackers, chat widgets, or embeds by default.
- WhatsApp is a plain `wa.me` link — no SDK.
- Google Maps: **do not** auto-embed a heavy iframe. Use a static preview +
  "Get Directions" link (implemented). Embed only if genuinely required, lazily.
- Analytics (if added): privacy-friendly, single lightweight script; document in
  Privacy Policy.

## Verification (Phase 9)
- [ ] Lighthouse CI in the pipeline.
- [ ] Real-device mobile check (360/390/412px).
- [ ] Confirm zero unexpected JS in the network panel on core pages.
