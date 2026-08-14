# SEO Inventory

One row per indexable page. Titles auto-suffixed with `| Abhaya Allergy Center`
by the `<SEO>` component unless already present. Canonical base is
`https://abhayaallergycenter.com`.

| URL | Type | Primary topic | Title (before suffix) | Schema | Indexable |
| --- | --- | --- | --- | --- | --- |
| `/` | Home | Allergy clinic, Nilambur | Abhaya Allergy Center \| Allergy Care in Nilambur, Kerala | MedicalClinic + WebSite + Physician | ✅ |
| `/about/` | About | About the clinic | About Abhaya Allergy Center | MedicalClinic + Breadcrumb | ✅ |
| `/about/dr-varun-vasudev/` | Profile | The doctor | Dr Varun Vasudev | Physician + Breadcrumb | ✅ |
| `/conditions/` | Index | Allergy conditions | Allergy Conditions | Breadcrumb | ✅ |
| `/conditions/allergic-rhinitis/` | Condition | Allergic rhinitis | Allergic Rhinitis \| Symptoms & Allergy Consultation | Breadcrumb + FAQPage | ✅ |
| `/conditions/sinus-allergy/` | Condition | Sinus allergy | Sinus Allergy \| Symptoms & Allergy Consultation | Breadcrumb + FAQPage | ✅ |
| `/conditions/asthma-wheezing/` | Condition | Asthma & wheezing | Asthma & Wheezing \| … | Breadcrumb + FAQPage | ✅ |
| `/conditions/adenoid-enlargement/` | Condition | Adenoids (children) | Adenoid Enlargement \| … | Breadcrumb + FAQPage | ✅ |
| `/conditions/eczema/` | Condition | Eczema | Eczema \| … | Breadcrumb + FAQPage | ✅ |
| `/conditions/urticaria/` | Condition | Hives/urticaria | Urticaria (Hives) \| … | Breadcrumb + FAQPage | ✅ |
| `/services/` | Index | Consultation services | Consultation Services | Breadcrumb | ✅ |
| `/services/in-person-consultation/` | Service | In-person consult | In-person Consultation | Breadcrumb | ✅ |
| `/services/online-consultation/` | Service | Online consult | Online Consultation | Breadcrumb | ✅ |
| `/services/follow-up-consultation/` | Service | Follow-up | Follow-up Consultation | Breadcrumb | ✅ |
| `/services/counselling/` | Service | Counselling | Counselling & Guidance | Breadcrumb | ✅ |
| `/patient-stories/` | Index | Testimonials | Patient Stories | Breadcrumb | ✅ |
| `/before-after/` | Index | Patient progress | Before & After / Patient Progress | Breadcrumb | ✅ |
| `/gallery/` | Index | Gallery | Gallery | Breadcrumb | ✅ |
| `/blog/` | Index | Allergy education | Health Blog \| Allergy Education & Health Information | Breadcrumb | ✅ |
| `/blog/understanding-allergy-triggers/` | Article | Allergy triggers | Understanding Your Allergy Triggers… | Article + Breadcrumb | ✅ |
| `/blog/category/allergies/` | Category | Allergies | Allergies \| Health Blog | Breadcrumb | ✅ |
| `/contact/` | Contact | Contact/location | Contact | MedicalClinic + Breadcrumb | ✅ |
| `/book-consultation/` | Convert | Booking | Book a Consultation | Breadcrumb | ✅ |
| `/privacy-policy/` | Legal | Privacy | Privacy Policy | Breadcrumb | ✅ |
| `/medical-disclaimer/` | Legal | Disclaimer | Medical Disclaimer | Breadcrumb | ✅ |
| `/404` | Utility | — | Page Not Found | — | ⛔ noindex |

## Rules
- Every indexable page: unique `<title>`, meta description, self-canonical, OG +
  Twitter tags — all from the `<SEO>` component. No manual duplication.
- No page canonicalises to `drvarunvasudev.com` or `ihkarise.github.io`.
- Structured data carries **no** ratings/reviews.
- FAQ schema emitted only where real Q&A content exists.

## Internal linking (implemented)
- Home → conditions, services, blog, doctor, contact.
- Condition page → related conditions + condition-specific WhatsApp CTA.
- Blog article → category, medical disclaimer, WhatsApp CTA.
- Footer → all major sections. No orphan pages.

## To do
- [ ] Fill meta descriptions for pages currently using summaries as fallback
      (all present, but review for hand-tuning).
- [ ] Add `og-image.jpg`.
- [ ] Expand internal links from articles → condition pages as blog grows.
