# Font Strategy

Documents the intended production font setup. Self-hosting is planned (Phase 8);
this file defines exactly what to host so it can be done without guesswork.

## Current fonts (intended, unchanged)
| Role | Family | Weights in use | Source today |
| --- | --- | --- | --- |
| Headings | Montserrat | 600, 700 | Google Fonts `<link>` |
| Body / UI | Poppins | 400, 500, 600 | Google Fonts `<link>` |

Total: **2 families, 5 weights**, `display=swap`. No italics loaded. Defined in
`src/styles/global.css` (`--font-heading`, `--font-sans`).

## Why change
- The external Google Fonts request is the main remaining performance cost and,
  in the sandbox, the source of the only console error (`ERR_CONNECTION_RESET`)
  — see PERFORMANCE-BASELINE.md.
- Self-hosting removes a third-party origin (privacy + reliability) and the
  render dependency.

## Plan (Phase 8 — execute in order)
1. **Confirm exact families/weights** = the 5 above (don't add weights for
   convenience).
2. **Licensing:** Montserrat and Poppins are both under the SIL Open Font
   License 1.1 → self-hosting permitted. Keep the license files with the fonts.
3. **Obtain WOFF2** for the 5 weights (latin + latin-ext subsets; add Malayalam
   subset only if Malayalam text is rendered — currently the UI is English).
4. **Subset** to the needed unicode ranges to cut file size.
5. **Serve locally** from `public/fonts/…` (or via `astro:assets`/Fontsource),
   with `@font-face` `font-display: swap`.
6. **Preload** only the critical above-the-fold weights (e.g. Poppins 400/600,
   Montserrat 700) with `<link rel="preload" as="font" type="font/woff2"
   crossorigin>`. Do not preload all 5.
7. Remove the Google Fonts `<link>` + preconnects from `BaseLayout.astro`.
8. Re-run Lighthouse; expect Performance ≥95 and the console error cleared.

## Guardrails
- Do **not** drop weights or families purely to raise a score if it harms
  readability or brand. The 5-weight set is already lean.
- Keep the visual identity identical through the switch (same families).

## Status
- [ ] Not yet implemented (deferred to Phase 8). Current setup is functional and
      correct in production; only performance/privacy improve with self-hosting.
