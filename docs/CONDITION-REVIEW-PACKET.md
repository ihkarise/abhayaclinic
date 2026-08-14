# Condition Review Packet — for Dr Varun Vasudev

Purpose: let the doctor review the six existing condition pages efficiently and
sign each off. **These are review-ready drafts — nothing here is marked as
medically reviewed.** Every clinical statement currently on each page is listed
below so it can be **Confirmed**, **Edited**, or **Removed**.

## Scope & locked decisions (Phase 3A)
- The six conditions below are the **working set only**. The **final list of
  conditions Abhaya publicly owns is still the doctor's decision** — this packet
  does not assume these six are the final clinical scope.
- No conditions were added, removed, or renamed.
- All six remain `medicalReviewed: false` with the general disclaimer showing.

## How to sign off a page (per condition, once reviewed)
In the page's frontmatter (`src/content/conditions/<slug>.md`) set:
```yaml
medicalReviewed: true
reviewedBy: "Dr Varun Vasudev"        # or the reviewing clinician
reviewedAt: 2026-08-14                  # actual review date
```
Only then does the site render "Medically reviewed by … on …". Do **not** set
these until the review actually happens. If any statement should change, edit
the corresponding field in the same file (symptoms/triggers/faq/etc.).

## Content-safety status (already verified, all six)
- No cure / guaranteed / 100% / "best outcome" / success-rate language.
- No treatment-efficacy, outcome, duration, or diagnosis-from-symptom claims.
- Framed as **education**, with a "not a substitute for medical advice" note.
- Emergency red-flags present on **Asthma & Wheezing** and **Urticaria**.

## Doctor decisions that apply to all pages
- [ ] Confirm the six conditions are within Abhaya's scope (or mark which are
      not, to drop/redirect — see URL-MIGRATION-MAP.md).
- [ ] Confirm whether the homoeopathic/consultation framing is worded acceptably.
- [ ] Confirm emergency red-flags: are they needed on any of the four pages that
      currently have none (rhinitis, sinus, adenoids, eczema)?

---

## 1. Allergic Rhinitis — `/conditions/allergic-rhinitis/`
**Summary claim:** "Frequent sneezing, runny or blocked nose, itchy eyes and postnasal drip triggered by allergens such as dust, pollen or pet dander."
**Mechanism stated:** nose lining reacts to airborne substances the body treats as harmful.

- [ ] **Symptoms list** — sneezing (esp. mornings); runny/blocked nose; itching (nose/eyes/throat/ears); watery/red eyes; postnasal drip/throat clearing; reduced smell; disturbed sleep.
- [ ] **Triggers list** — house dust/dust mites; pollen (seasonal); pet dander/feathers; mould/damp; strong smells/smoke/temperature change.
- [ ] **Who may experience it** — begins childhood or adulthood; often with asthma/eczema/sinus; family history common.
- [ ] **When to seek help** — frequent/sleep-disturbing/interfering symptoms; not settling; with breathing difficulty or recurrent sinus infections.
- [ ] **Consultation approach** — history + trigger + impact review; tailored care; further evaluation where relevant.
- [ ] **FAQ 1** — rhinitis vs common cold (viral, self-limiting vs recurrent, trigger-linked).
- [ ] **FAQ 2** — in children: sneezing, blocked nose, mouth breathing, poor sleep, concentration.
- [ ] **FAQ 3** — seasonal vs year-round (dust) patterns.
- **Flags/questions:** [ ] Add an emergency red-flag (e.g. acute breathing difficulty)? [ ] Any wording to soften/strengthen?
- **Sign-off:** reviewedBy ________  reviewedAt ________  Decision: ☐ Confirm ☐ Edit ☐ Remove

## 2. Sinus Allergy — `/conditions/sinus-allergy/`
**Summary claim:** "Persistent nasal congestion, facial pressure, headaches and recurrent sinus discomfort linked to allergic inflammation."
**Mechanism stated:** sinus lining inflames/swells, often continuing from nasal allergy.

- [ ] **Symptoms** — blocked nose; facial pressure (cheeks/forehead/eyes); recurrent headaches; thick discharge/postnasal drip; reduced smell/taste; worse bending forward.
- [ ] **Triggers** — ongoing rhinitis/airborne allergens; dust/smoke/pollution; damp/mould; frequent URIs.
- [ ] **Who** — long-standing nasal allergy, frequent colds, recurrent-sinus tendency.
- [ ] **When to seek help** — recurring/long-lasting pressure & congestion; frequent headaches; sleep/daily impact.
- [ ] **Consultation approach** — frequency/triggers/history review; individualized planning; evaluation where appropriate.
- [ ] **FAQ 1** — allergic sinus symptoms (allergen-driven inflammation) vs infection (bacteria/virus); can overlap.
- **Flags/questions:** [ ] Emergency red-flag needed (e.g. high fever, severe one-sided facial swelling)? [ ] Confirm sinus/rhinitis relationship wording.
- **Sign-off:** reviewedBy ________  reviewedAt ________  Decision: ☐ Confirm ☐ Edit ☐ Remove

## 3. Asthma & Wheezing — `/conditions/asthma-wheezing/`
**Summary claim:** "Recurring cough, wheezing, chest tightness and breathing difficulty that may be triggered or worsened by allergens."
**Mechanism stated:** narrowing and inflammation of the airways.

- [ ] **Symptoms** — recurrent cough (night/early morning); wheeze/whistle; chest tightness; shortness of breath; flares with triggers/infections.
- [ ] **Triggers** — airborne allergens; respiratory infections; cold air/smoke/strong smells; exertion in sensitive people.
- [ ] **Who** — often childhood onset, any age; linked with rhinitis/eczema; familial.
- [ ] **When to seek help** — take breathing seriously; **prompt care for severe breathlessness**; consult for recurring cough/wheeze/tightness.
- [ ] **Consultation approach** — pattern/trigger/history review; ongoing conditions may need monitoring & coordination of care.
- [ ] **FAQ 1** — wheezing isn't always asthma; assess recurring symptoms.
- [x] **Emergency red-flag present:** "Severe or sudden breathing difficulty is a medical emergency — seek immediate care."
- **Flags/questions:** [ ] Confirm the emergency wording is adequate. [ ] Confirm allergic-asthma framing vs asthma generally.
- **Sign-off:** reviewedBy ________  reviewedAt ________  Decision: ☐ Confirm ☐ Edit ☐ Remove

## 4. Adenoid Enlargement — `/conditions/adenoid-enlargement/`
**Summary claim:** "Mouth breathing, snoring, a persistently blocked nose and disturbed sleep in children, often linked to allergy and recurrent infections."
**Mechanism stated:** adenoid tissue (immune tissue behind the nose) enlarges and blocks the nasal airway.

- [ ] **Symptoms** — blocked nose/mouth breathing; snoring/noisy breathing; restless sleep; nasal-sounding speech; frequent colds/ear/sinus problems.
- [ ] **Triggers** — ongoing nasal allergy/inflammation; recurrent URIs.
- [ ] **Who** — most common in children; with rhinitis & recurrent infections.
- [ ] **When to seek help** — ongoing mouth breathing, loud snoring, disturbed sleep, recurrent nose/throat/ear problems.
- [ ] **Consultation approach** — child's sleep/breathing/infection & allergy history; discuss care; evaluation where appropriate.
- [ ] **FAQ 1** — persistent mouth breathing: nasal blockage from adenoids, allergy, or both.
- **Flags/questions:** [ ] Confirm scope — is adenoid management within Abhaya's offering, or referral-oriented? [ ] Red-flag for significant sleep-disordered breathing (e.g. witnessed apnoea)? [ ] Confirm "part of the immune system" wording.
- **Sign-off:** reviewedBy ________  reviewedAt ________  Decision: ☐ Confirm ☐ Edit ☐ Remove

## 5. Eczema — `/conditions/eczema/`
**Summary claim:** "Dry, itchy, inflamed skin that can flare and settle over time, often linked to allergy and sensitive skin."
**Terminology used:** "Eczema (atopic dermatitis)."

- [ ] **Symptoms** — dry/rough/scaly skin; persistent (sometimes intense) itch; redness/inflammation; cracking/weeping/thickening over time; sleep/daily impact.
- [ ] **Triggers** — soaps/detergents/irritants; dust/pollen/allergens; heat/sweating/dry weather; stress and, in some, certain foods.
- [ ] **Who** — often childhood onset, can start/continue in adulthood; with rhinitis/asthma.
- [ ] **When to seek help** — itch disturbing sleep; frequently inflamed/infected skin; flare impact on comfort/confidence.
- [ ] **Consultation approach** — flare pattern/triggers/routine/history; tailored care & skin-care guidance.
- [ ] **FAQ 1** — eczema is not contagious; sensitivity/inflammation, though broken skin can become infected.
- **Flags/questions:** [ ] Confirm "atopic dermatitis" equivalence is acceptable as used. [ ] Red-flag for signs of skin infection (spreading redness, pus, fever)?
- **Sign-off:** reviewedBy ________  reviewedAt ________  Decision: ☐ Confirm ☐ Edit ☐ Remove

## 6. Urticaria (Hives) — `/conditions/urticaria/`
**Summary claim:** "Recurring itchy hives, welts and skin reactions that can appear suddenly and vary from day to day."
**Mechanism stated:** raised, itchy welts; may appear without an obvious cause.

- [ ] **Symptoms** — raised itchy welts/wheals; surrounding redness; welts that change shape/move/come and go; itch disturbing sleep.
- [ ] **Triggers** — certain foods/additives in sensitive people; insect bites/stings; heat/cold/pressure/sunlight in some; infections; sometimes none identifiable.
- [ ] **Who** — any age; once, occasionally, or recurring.
- [ ] **When to seek help** — recurring/long-lasting hives; sleep/daily impact; **urgent care if swelling of lips/tongue/throat or any breathing difficulty**.
- [ ] **Consultation approach** — timing/appearance/triggers/history; individualized planning; evaluation where needed.
- [ ] **FAQ 1** — recurring hives have many causes; sometimes no single trigger found.
- [x] **Emergency red-flag present:** "swelling of the face, lips or throat, or any difficulty breathing — seek emergency care immediately."
- **Flags/questions:** [ ] Confirm angioedema/anaphylaxis red-flag wording is adequate. [ ] Confirm acute vs chronic urticaria framing.
- **Sign-off:** reviewedBy ________  reviewedAt ________  Decision: ☐ Confirm ☐ Edit ☐ Remove

---

## After review
1. For each **Confirm**: set `medicalReviewed/reviewedBy/reviewedAt` in that file.
2. For each **Edit**: change the specific field, then set the review fields.
3. For each **Remove**: tell the developer — the page is unpublished/redirected
   (do not silently delete; record in URL-MIGRATION-MAP.md).
4. Update `MEDICAL-REVIEW-QUEUE.md` statuses to match.
