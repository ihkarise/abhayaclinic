# Content Governance

Rules that keep the site medically responsible and legally safe. Covers medical
review, before/after, testimonials, and the content-production cap.

## 1. Medical review gating (implemented)
Schemas (`src/content.config.ts`) carry `status`
(`draft`/`in-review`/`approved`/`published`), `medicalReviewed`, `reviewedBy`,
`reviewedAt`.

- A "Medically reviewed by … on …" line renders **only** when
  `medicalReviewed === true` AND `reviewedBy` AND `reviewedAt` are all present
  (enforced in the condition and blog templates).
- Until then, a general "not a substitute for medical advice" note shows.
- Never set these fields without a real review. Never invent a reviewer or date.
- No cure / guaranteed / 100% / "best outcome" / success-rate language anywhere
  (verified clean, Phase 1.5).

## 2. Before / After — "Patient Progress" (governance)
Collection: `beforeAfter` (`src/content/before-after/`). Fields: `caseId`,
`condition`, `conditionLabel`, `description`, `beforeImage`, `afterImage`,
`beforeAlt`, `afterAlt`, `consentConfirmed`, `published`.

Rules:
- **Nothing renders** unless `consentConfirmed === true` AND `published === true`
  (double gate). Current state: template `_example.md` only, both false → the
  page shows an honest empty state.
- Present it as **"Patient Progress"**, not "proof of cure".
- Do **not** imply `before = disease` → `after = guaranteed cure`.
- No invented diagnosis, treatment method, duration, or outcome.
- Images: written consent, EXIF/GPS stripped, no names/phone numbers/documents/
  prescriptions/identifiers. (Reference PDFs from the old site contain
  identifiable body parts + a phone watermark — must **not** be reused as-is.)
- "Individual results vary" framing.

## 3. Testimonials (governance)
Collection: `testimonials` (`src/content/testimonials/`). Fields: `name`,
`quote`, `rating?`, `date?`, `conditionLabel?`, `consentObtained`, `published`.

Rules:
- We **do not create** testimonials. Only genuine, clinic-authorised quotes.
- **Nothing renders** unless `consentObtained === true` AND `published === true`.
- `rating` stored **only if genuinely provided** by the patient.
- **No aggregateRating / reviewCount structured data is ever generated** (spec
  §25, §57). (Fabricated `Sarah M./Rahul K./Amina P.` testimonials from the old
  scaffold were removed in Phase 1.)
- Current state: `_example.md` template only, both gates false → Patient Stories
  page shows an honest empty state.

## 4. Content production cap (this phase)
- **No mass generation.** Maximum initial seed: **3–5 articles**, and only where
  verified information supports them. Currently **1** seed article exists.
- Every article must have: a real purpose, a real search intent
  (ALLERGY-SEARCH-INTENT-MAP.md), a deliberate internal-link destination, a
  medical-review requirement, and clear reader value.
- No AI content farm; no thin pages to inflate indexed URLs.

## 5. Publication checklist (per medical page)
- [ ] Facts verified / no unsupported claims.
- [ ] Emergency red-flags where clinically relevant.
- [ ] Internal links set (parent condition + related).
- [ ] WhatsApp CTA present.
- [ ] Medical disclaimer present.
- [ ] Review fields set **only** after a real review.
