# URL Migration Map

Maps known old URLs (old live site + old React prototype) to new canonical URLs.
Redirect mechanism for GitLab Pages is documented in `DEPLOYMENT.md`
(a `public/_redirects` file). Redirects are **301 (permanent)** unless noted.

## Old live site — `drvarunvasudev.com` (`/en/...`)
| Old URL | New URL | Notes |
| --- | --- | --- |
| `/en` , `/en/` , `/` | `/` | Home |
| `/en/about-us` | `/about/` | |
| `/en/doctor` | `/about/dr-varun-vasudev/` | Doctor profile |
| `/en/services` | `/services/` | Old "services" mixed conditions + services; see below |
| `/en/before-after` | `/before-after/` | |
| `/en/gallery` | `/gallery/` | |
| `/en/contact-us` | `/contact/` | |
| `/en/appointment` | `/book-consultation/` | |

### Old condition/service topics (were under Services)
Only allergy-relevant topics get dedicated pages. Non-allergy topics redirect to
the most relevant destination rather than the homepage (see `CONTENT-MIGRATION.md`).

| Old topic | New URL |
| --- | --- |
| Allergic Rhinitis | `/conditions/allergic-rhinitis/` |
| Psoriasis | `/conditions/` (no dedicated page; review) |
| Thyroid disorders | `/services/` (not offered under new positioning; review) |
| Infertility | `/services/` (review — general OP) |
| Fibroid Uterus | `/services/` (review) |
| Calcaneal Spur | `/services/` (review) |
| Kidney Stone | `/services/` (review) |
| Gastric Ulcer | `/services/` (review) |
| Migraine | `/services/` (review) |
| Weightloss | `/services/` (review) |

> These non-allergy redirects are **provisional** and must be confirmed with the
> doctor (keep / redirect / remove). Default target is `/services/` (general
> consultation) rather than losing the visitor to the homepage.

## Old React prototype — `ihkarise.github.io`
| Old URL | New URL |
| --- | --- |
| `/` | `/` |
| `/about-dr-varun` | `/about/dr-varun-vasudev/` |
| `/allergy-conditions` | `/conditions/` |
| `/allergic-rhinitis` (+ other `/:conditionId`) | `/conditions/<slug>/` |
| `/gallery` | `/gallery/` |
| `/testimonials` | `/patient-stories/` |
| `/blog` | `/blog/` |
| `/blog/:slug` | `/blog/<slug>/` |
| `/contact` | `/contact/` |
| `/book-appointment` | `/book-consultation/` |
| `/privacy-policy` | `/privacy-policy/` |
| `/disclaimer` | `/medical-disclaimer/` |

## Action items
- [ ] Crawl the old live site for the **complete** URL list (language variants,
      any `/ml/` Malayalam paths, individual service slugs) before launch.
- [ ] Confirm non-allergy topic dispositions with the doctor.
- [ ] Generate `public/_redirects` from this table once finalised.
