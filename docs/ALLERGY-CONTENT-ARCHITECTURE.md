# Allergy Content Architecture

Information architecture first — **not** an article-writing plan. This defines
how allergy content is organised so topical authority builds around one primary
topic and every page funnels toward a WhatsApp consultation.

## Content flow
```
Primary Topic (Allergy)
        ↓
Core Condition pages            /conditions/<slug>/
        ↓
Supporting Questions (FAQ on each condition + explainer articles)
        ↓
Educational Articles            /blog/<slug>/  (grouped by category)
        ↓
Internal Links (article ↔ condition ↔ related article)
        ↓
Consultation CTA (WhatsApp, context-prefilled)
```

## Layers

### 1. Primary topic — Allergy
The pillar concept. Represented by the conditions index `/conditions/` and
reinforced sitewide (nav, home "allergy focus" section, `MedicalClinic`
`medicalSpecialty: Allergology`).

### 2. Core condition pages (hubs)
Each approved condition is an authority hub with a consistent template
(see CONDITION template in the main spec §6 and CURRENT-ROUTES.md):
H1 → intro → what it is → symptoms → triggers → who may experience it →
when to seek help → consultation approach → FAQ → related conditions →
related articles → WhatsApp CTA → medical disclaimer.

Current hubs (all `medicalReviewed: false`, doctor confirmation pending):
allergic-rhinitis, sinus-allergy, asthma-wheezing, adenoid-enlargement,
eczema, urticaria.

### 3. Supporting questions
Real questions patients ask, answered as: (a) FAQ blocks on the condition page
(emit `FAQPage` schema), and (b) dedicated explainer articles where a question
deserves depth (symptoms, triggers, seasonal, children).

### 4. Educational articles (spokes)
Blog posts that expand a specific question and link back to their parent
condition hub. Grouped by category (see below). Produced in **small, verified
batches** — never mass-generated.

### 5. Internal links
- Article → parent condition hub (up)
- Condition hub → related conditions + relevant articles (across/down)
- Every page → contextual WhatsApp CTA (convert)
- No orphans (enforced by link check in verification).

### 6. Conversion
Primary: WhatsApp (condition-prefilled message). Secondary: Call / Directions.

## Blog categories (mapped to clusters)
| Category | Cluster it serves |
| --- | --- |
| `allergies` | Allergic rhinitis, sinus, general allergy (dominant) |
| `respiratory-health` | Asthma & wheezing, adenoids |
| `skin-health` | Eczema, urticaria |
| `childrens-allergy-health` | Adenoids, allergy in children |
| `general-health` | Broader education, prevention |
| `clinic-updates` | Clinic news/awareness |

## Content clusters (initial map — topics pending doctor approval)
```
ALLERGIC RHINITIS  (hub: /conditions/allergic-rhinitis/)
├── What is allergic rhinitis?
├── Common symptoms
├── Common triggers
├── Seasonal allergy
├── Allergy in children
├── When to seek medical advice
└── FAQ (on hub)

SINUS / NASAL ALLERGY  (hub: /conditions/sinus-allergy/)
├── Symptoms
├── Triggers
├── Seasonal patterns
└── FAQ (on hub)

RESPIRATORY  (hubs: asthma-wheezing, adenoid-enlargement)
├── Wheezing — when it matters
├── Asthma triggers
├── Mouth breathing & snoring in children (adenoids)
└── FAQ (on hubs)

SKIN ALLERGY  (hubs: eczema, urticaria)
├── Eczema triggers & daily care
├── Urticaria (hives) — causes & when to worry
├── Common skin-allergy triggers
└── FAQ (on hubs)
```

## Rules
- Build a page only for a genuine reader need — no keyword doorway pages
  (see spec §8), no city×keyword permutations.
- Medical accuracy over keyword density.
- Every hub currently carries the "not a substitute for medical advice" note
  until `medicalReviewed: true`.
- Article production capped this phase (see CONTENT-GOVERNANCE.md).

## Pending
- [ ] Doctor approval of the final condition list and cluster topics.
- [ ] Real keyword research (see ALLERGY-SEARCH-INTENT-MAP.md — currently intent
      is editorial, no volume/difficulty claimed).
