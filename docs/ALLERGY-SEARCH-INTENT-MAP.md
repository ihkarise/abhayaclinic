# Allergy Search-Intent Map

An **architectural** mapping of user intent to page type and conversion path.

> **No metrics are claimed.** Search volume, keyword difficulty, rankings, CPC
> and traffic are **NOT** included because no keyword research has been performed.
> Intent classifications below are editorial judgement, to be validated by real
> research and doctor input before they drive any production decision.
> Status of keyword research: **PENDING / NOT STARTED.**

## Legend
- **Intent type:** Informational / Local / Transactional / Navigational.
- **Page type:** Condition hub, Explainer article, Service page, Contact/Local.

## Map

### Allergic Rhinitis
- **Primary intent:** Informational — understand symptoms and possible causes.
- **Secondary intents:** triggers; seasonal patterns; allergy in children;
  when to see a doctor; consultation options.
- **Core page:** `/conditions/allergic-rhinitis/`
- **Supporting articles (planned):** symptoms · common triggers · seasonal
  allergy · allergy in children.
- **Internal-link destination:** hub ↔ articles; hub → `/services/`.
- **Primary CTA:** WhatsApp (prefilled "consultation for allergic rhinitis").

### Sinus Allergy
- **Primary intent:** Informational — recurring congestion / facial pressure.
- **Secondary intents:** sinus vs infection; headaches; seasonal patterns.
- **Core page:** `/conditions/sinus-allergy/`
- **Supporting articles (planned):** sinus allergy vs sinus infection;
  congestion relief basics.
- **CTA:** WhatsApp.

### Asthma & Wheezing
- **Primary intent:** Informational + concern — recurring cough/wheeze.
- **Secondary intents:** triggers; children; emergency warning signs.
- **Core page:** `/conditions/asthma-wheezing/`
- **Supporting articles (planned):** what causes wheezing; common asthma triggers.
- **CTA:** WhatsApp. (Page also carries an emergency red-flag note.)

### Adenoid Enlargement
- **Primary intent:** Parent-informational — mouth breathing / snoring / sleep.
- **Secondary intents:** recurrent colds/ear issues; when evaluation matters.
- **Core page:** `/conditions/adenoid-enlargement/`
- **Supporting articles (planned):** mouth breathing in children; child sleep &
  blocked nose.
- **CTA:** WhatsApp.

### Eczema
- **Primary intent:** Informational — dry, itchy, inflamed skin.
- **Secondary intents:** triggers; daily skincare; flare management.
- **Core page:** `/conditions/eczema/`
- **Supporting articles (planned):** common eczema triggers; gentle daily skincare.
- **CTA:** WhatsApp.

### Urticaria (Hives)
- **Primary intent:** Informational — recurring itchy welts.
- **Secondary intents:** causes; chronic hives; emergency warning signs.
- **Core page:** `/conditions/urticaria/`
- **Supporting articles (planned):** what causes hives; chronic urticaria basics.
- **CTA:** WhatsApp. (Page carries an emergency red-flag note.)

## Cross-cutting intents (handled by existing pages, NOT doorway pages)
| Intent | Destination | Note |
| --- | --- | --- |
| "allergy doctor in Nilambur" | `/about/dr-varun-vasudev/` + `/contact/` | Real doctor + clinic pages, not a keyword page |
| "online allergy consultation" | `/services/online-consultation/` | Real service page |
| "book allergy consultation" | `/book-consultation/` | Conversion page |
| "where is the clinic" | `/contact/` | Local info from central clinic config |

**Explicitly not built:** `allergy treatment near me`, `best allergy doctor`,
`allergy treatment in <town>` as separate thin/doorway pages (see spec §8).

## Pending
- [ ] Real keyword research (volume, difficulty, SERP features, true intent).
- [ ] Validate intent classifications with the doctor.
- [ ] Prioritise the small first article set from this map (see CONTENT-GOVERNANCE.md).
