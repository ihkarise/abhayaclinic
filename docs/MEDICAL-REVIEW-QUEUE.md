# Medical Review Queue

Every medical page and its review/publication state. A page may be **published**
(intentionally live as general education) while medical review is still
**pending** — the site never *displays* "Medically reviewed by …" unless
`medicalReviewed = true` AND `reviewedBy` AND `reviewedAt` are all present.

## Status vocabulary
- **Content status** (`status` frontmatter): `draft` → `in-review` → `approved`
  → `published`.
- **Medical review** (`medicalReviewed` + `reviewedBy` + `reviewedAt`):
  `Pending` until a real review happens. Never fabricate reviewer/date.
- **Publication**: whether the page is live.

## Condition pages
| Page | URL | Content status | Medical review | Reviewer | Review date | SEO | Publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Allergic Rhinitis | `/conditions/allergic-rhinitis/` | published | **Pending** | — | — | Ready | Live (general info) |
| Sinus Allergy | `/conditions/sinus-allergy/` | published | **Pending** | — | — | Ready | Live (general info) |
| Asthma & Wheezing | `/conditions/asthma-wheezing/` | published | **Pending** | — | — | Ready | Live (general info) |
| Adenoid Enlargement | `/conditions/adenoid-enlargement/` | published | **Pending** | — | — | Ready | Live (general info) |
| Eczema | `/conditions/eczema/` | published | **Pending** | — | — | Ready | Live (general info) |
| Urticaria (Hives) | `/conditions/urticaria/` | published | **Pending** | — | — | Ready | Live (general info) |

## Blog (medical/health articles)
| Page | URL | Content status | Medical review | Reviewer | Review date | SEO | Publication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Understanding Your Allergy Triggers | `/blog/understanding-allergy-triggers/` | published | **Pending** | — | — | Ready | Live (general info) |

## Doctor / clinic (non-condition, still review-worthy)
| Page | URL | Content status | Review | Notes |
| --- | --- | --- | --- | --- |
| Dr Varun Vasudev | `/about/dr-varun-vasudev/` | published | Verify facts | Credentials pending (see DOCTOR-CONTENT-VERIFICATION.md) |
| About Abhaya | `/about/` | published | Verify claims | Mission/vision reworded from old site |
| Services (×4) | `/services/…` | published | Low risk | No clinical claims |

## Doctor review instrument
A per-condition sign-off packet listing every clinical statement on each page
(Confirm / Edit / Remove) is in **`CONDITION-REVIEW-PACKET.md`**. Use it to run
the review, then set the frontmatter review fields below.

## Review workflow
1. Doctor reviews each condition/article for accuracy and safety.
2. On sign-off, set in frontmatter: `medicalReviewed: true`, `reviewedBy: "Dr Varun Vasudev"` (or the reviewing clinician), `reviewedAt: <date>`.
3. The condition/blog template then renders "Medically reviewed by … on …".
4. Until then, the general medical-disclaimer note remains.

## Guardrails
- Publishing as general education is allowed; **claiming a review that did not
  happen is not.**
- No cure/outcome/efficacy claims anywhere (verified clean in Phase 1.5).
- Emergency red-flags present on asthma and urticaria pages.

## Action items
- [ ] Doctor review pass over all 6 condition pages + the seed article.
- [ ] Set review frontmatter on sign-off.
- [ ] Re-audit content after any doctor edits.
