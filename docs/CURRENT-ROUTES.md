# Current Routes — Abhaya Allergy Center

All routes are statically generated with trailing slashes. 26 pages total.

| URL | Source | Type | Indexable |
| --- | --- | --- | --- |
| `/` | `pages/index.astro` | Home | ✅ |
| `/about/` | `pages/about/index.astro` | About Abhaya | ✅ |
| `/about/dr-varun-vasudev/` | `pages/about/dr-varun-vasudev.astro` | Doctor profile | ✅ |
| `/conditions/` | `pages/conditions/index.astro` | Conditions index | ✅ |
| `/conditions/allergic-rhinitis/` | `[...slug]` + content | Condition | ✅ |
| `/conditions/sinus-allergy/` | `[...slug]` + content | Condition | ✅ |
| `/conditions/asthma-wheezing/` | `[...slug]` + content | Condition | ✅ |
| `/conditions/adenoid-enlargement/` | `[...slug]` + content | Condition | ✅ |
| `/conditions/eczema/` | `[...slug]` + content | Condition | ✅ |
| `/conditions/urticaria/` | `[...slug]` + content | Condition | ✅ |
| `/services/` | `pages/services/index.astro` | Services index | ✅ |
| `/services/in-person-consultation/` | `[...slug]` + content | Service | ✅ |
| `/services/online-consultation/` | `[...slug]` + content | Service | ✅ |
| `/services/follow-up-consultation/` | `[...slug]` + content | Service | ✅ |
| `/services/counselling/` | `[...slug]` + content | Service | ✅ |
| `/patient-stories/` | `pages/patient-stories/index.astro` | Stories (empty state) | ✅ |
| `/before-after/` | `pages/before-after/index.astro` | Progress (empty state) | ✅ |
| `/gallery/` | `pages/gallery/index.astro` | Gallery (empty state) | ✅ |
| `/blog/` | `pages/blog/index.astro` | Blog index | ✅ |
| `/blog/understanding-allergy-triggers/` | `[...slug]` + content | Article | ✅ |
| `/blog/category/allergies/` | `category/[category]` | Category | ✅ |
| `/contact/` | `pages/contact/index.astro` | Contact | ✅ |
| `/book-consultation/` | `pages/book-consultation/index.astro` | Booking | ✅ |
| `/privacy-policy/` | `pages/privacy-policy.astro` | Legal | ✅ |
| `/medical-disclaimer/` | `pages/medical-disclaimer.astro` | Legal | ✅ |
| `/404.html` | `pages/404.astro` | 404 | ⛔ noindex |
| `/rss.xml` | `pages/rss.xml.ts` | RSS feed | n/a |
| `/sitemap-index.xml` | @astrojs/sitemap | Sitemap | n/a |
| `/robots.txt` | `public/robots.txt` | Robots | n/a |

## Old React SPA routes (removed)
`/`, `/about-dr-varun`, `/allergy-conditions`, `/:conditionId`, `/gallery`,
`/testimonials`, `/blog`, `/blog/:slug`, `/contact`, `/book-appointment`,
`/privacy-policy`, `/disclaimer`. Mapping in `URL-MIGRATION-MAP.md`.

## Category routes
`/blog/category/<category>/` is generated only for categories that have at
least one published (non-draft) article. Empty categories produce no page.
