# Content Migration Matrix

Classifies old-site content against the new allergy-first positioning.
Status legend: **Kept** (migrated), **Rewritten** (rebuilt, claims removed),
**New** (created for this site), **Review** (needs doctor decision),
**Dropped** (not carried over).

## Pages
| Old page | Disposition | New URL | Notes |
| --- | --- | --- | --- |
| About Us | Rewritten | `/about/` | Mission/vision kept; aggressive claims dropped |
| Doctor | Rewritten | `/about/dr-varun-vasudev/` | Bio kept; credentials pending verification |
| Services | Split | `/services/` + `/conditions/` | Old page mixed conditions & services — now separated |
| Before & After | Rebuilt | `/before-after/` | Consent-gated; no unconsented images republished |
| Gallery | Rebuilt | `/gallery/` | Category structure; optimized images pending |
| Contact | Rewritten | `/contact/` | WhatsApp-first |
| Appointment | Rewritten | `/book-consultation/` | WhatsApp booking |
| Testimonials (prototype) | Dropped/New | `/patient-stories/` | Fabricated names removed; real, consented only |

## Conditions (allergy-first)
| Topic | Disposition | New URL |
| --- | --- | --- |
| Allergic Rhinitis | New (educational) | `/conditions/allergic-rhinitis/` |
| Sinus Allergy | New | `/conditions/sinus-allergy/` |
| Asthma & Wheezing | New | `/conditions/asthma-wheezing/` |
| Adenoid Enlargement | New | `/conditions/adenoid-enlargement/` |
| Eczema | New | `/conditions/eczema/` |
| Urticaria | New | `/conditions/urticaria/` |

## Old non-allergy topics — NOT auto-migrated
Per spec §7, these are **not** given pages automatically. Each needs a doctor
decision: Keep (offered + relevant?) / Redirect / Remove.

| Topic | Currently offered? | Relevant to allergy positioning? | Recommended | Decision |
| --- | --- | --- | --- | --- |
| Fibroid Uterus | ? | No | Redirect → `/services/` | ☐ |
| Psoriasis | ? | Partial (skin) | Review | ☐ |
| Thyroid disorders | ? | No | Redirect → `/services/` | ☐ |
| Infertility | ? | No | Redirect → `/services/` | ☐ |
| Calcaneal Spur | ? | No | Redirect → `/services/` | ☐ |
| Kidney Stone | ? | No | Redirect → `/services/` | ☐ |
| Gastric Ulcer | ? | No | Redirect → `/services/` | ☐ |
| Migraine | ? | No | Review | ☐ |
| Weightloss | ? | No | Review | ☐ |

## Claims removed (must NOT reappear)
- "Best Outcome for Every Patient Every Time Any where." (old hero/footer)
- "96% of women have proven benefit…" (old Fibroid copy)
- "curable" / "cure" framing on condition copy.
- Any percentage, statistic, or guaranteed-result language.

## Content safety rules applied
- No cure/efficacy/duration/outcome claims.
- Conditions written as **education**, not treatment promises.
- Every condition page carries a "not a substitute for medical advice" note
  while `medicalReviewed: false`.
- Emergency red-flags called out for asthma and urticaria.
