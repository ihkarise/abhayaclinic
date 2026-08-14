# Allergy SEO Architecture

The site's topical authority is built around a single primary topic: **allergy**.
This document defines the cluster, per-condition search intent, and the
conversion path. It intentionally contains **no invented metrics** — search
volume, keyword difficulty and rankings are marked **pending** until real
keyword research is performed and doctor-approved.

## Primary topic
**Allergy** — allergy care and patient education for Nilambur/Malappuram, Kerala,
and online consultation across India.

## Core condition pages (currently approved, doctor review pending)
| Condition | URL | Status |
| --- | --- | --- |
| Allergic Rhinitis | `/conditions/allergic-rhinitis/` | Live, `medicalReviewed: false` |
| Sinus Allergy | `/conditions/sinus-allergy/` | Live, `medicalReviewed: false` |
| Asthma & Wheezing | `/conditions/asthma-wheezing/` | Live, `medicalReviewed: false` |
| Adenoid Enlargement | `/conditions/adenoid-enlargement/` | Live, `medicalReviewed: false` |
| Eczema | `/conditions/eczema/` | Live, `medicalReviewed: false` |
| Urticaria (Hives) | `/conditions/urticaria/` | Live, `medicalReviewed: false` |

> Additional allergy topics are added only after doctor approval. Non-allergy
> topics from the old site are **not** migrated (see `CONTENT-MIGRATION.md`).

## Topical cluster map
```
ALLERGY (pillar: /conditions/)
├── Allergic Rhinitis            ← hub condition
│   ├── Symptoms (article)
│   ├── Common triggers (article)
│   ├── Seasonal allergies (article)
│   └── Allergy in children (article)
├── Sinus Allergy
├── Asthma & Wheezing
├── Adenoid Enlargement          ← children's cluster
├── Eczema                       ← skin cluster
└── Urticaria (Hives)            ← skin cluster
```
Blog categories mirror the clusters: `allergies`, `respiratory-health`,
`skin-health`, `childrens-allergy-health`, `general-health`, `clinic-updates`.

## Per-condition search intent & CTA
_(Intent classification is editorial; volume/difficulty are **pending research**.)_

| Condition | Primary intent | Secondary intents | Recommended page | Related articles (planned) | Conversion CTA |
| --- | --- | --- | --- | --- | --- |
| Allergic Rhinitis | Informational ("what is / symptoms") | Triggers, seasonal, children, treatment options | `/conditions/allergic-rhinitis/` | Symptoms · Triggers · Seasonal · Children | WhatsApp (condition-prefilled) |
| Sinus Allergy | Informational + local | Sinus vs infection, headaches | `/conditions/sinus-allergy/` | Sinus vs cold · Congestion relief | WhatsApp |
| Asthma & Wheezing | Informational + concern | Triggers, children, emergency signs | `/conditions/asthma-wheezing/` | Wheeze causes · Triggers | WhatsApp |
| Adenoid Enlargement | Parent-informational | Mouth breathing, snoring, surgery question | `/conditions/adenoid-enlargement/` | Mouth breathing · Child sleep | WhatsApp |
| Eczema | Informational | Triggers, skincare, flare management | `/conditions/eczema/` | Triggers · Daily skincare | WhatsApp |
| Urticaria | Informational | Causes, chronic hives, emergency signs | `/conditions/urticaria/` | Hive causes · Chronic hives | WhatsApp |

## Internal linking model (implemented + planned)
- **Condition → related conditions** (implemented, `related[]` in frontmatter).
- **Condition → condition-specific WhatsApp CTA** (implemented).
- **Article → parent condition + related articles** (planned as blog grows).
- **Home → pillar, clusters, latest articles** (implemented).
- No orphan pages (verified via link check).

## Structured data
`MedicalClinic` + `Physician` + `WebSite` sitewide; `BreadcrumbList` on all
inner pages; `FAQPage` on condition pages with real Q&A; `Article` on blog
posts. No ratings/reviews are emitted.

## Guardrails
- Build pages for genuine reader value, not because a keyword exists.
- No thin "we treat X" pages — each condition explains symptoms, triggers,
  who is affected, when to seek help, and consultation approach.
- Medical accuracy over keyword density; every condition currently carries the
  "not a substitute for medical advice" note until reviewed.

## Pending
- [ ] Real keyword research (volume, difficulty, SERP intent) — **not started**.
- [ ] Doctor approval of the final condition list.
- [ ] Article production plan (small, high-value set — no mass generation).
