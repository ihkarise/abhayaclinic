# Doctor Content Verification

Audit of the information on `/about/dr-varun-vasudev/` (data source:
`src/data/doctor.ts`). Nothing here is invented. Items are separated into
**Verified**, **Needs verification**, and **Missing**.

> "Verified" means *stated by the clinic on its own former website*
> (drvarunvasudev.com About page + footer) or otherwise supplied by the clinic.
> It does **not** mean independently confirmed against a medical register.
> Independent confirmation is tracked under "Needs verification".

## Verified (clinic-stated source support)
| Field | Value | Source |
| --- | --- | --- |
| Name | Dr Varun Vasudev | Old site (About, footer), clinic branding |
| Qualification | BHMS | Old About page |
| Institution | Martin Homoeopathic Medical College, Coimbatore | Old About page |
| Family background | Third-generation doctor | Old About page (clinic's own statement) |
| Consultation modes | In-person (Nilambur) + online | Old About / "Why Choose Us" |
| Counselling & guidance | Offers counselling/health guidance | Old About / "Why Choose Us" |
| Health education | Health articles + social media + community health sessions | Old About page |

These are rendered on the doctor page.

## Needs verification (plausible, not yet confirmed)
| Field | Why it needs confirmation |
| --- | --- |
| BHMS graduation year | Not stated anywhere; do not guess |
| Medical council registration number | Required for a Physician profile; not published anywhere available |
| "Third-generation doctor" | Clinic's own claim — fine to state as the clinic's statement; confirm phrasing the clinic wants |
| Areas of focus wording | Currently allergy-first list; confirm it reflects the doctor's actual focus |
| Professional title | Using "Homoeopathic Physician"; confirm preferred title |

## Missing (required but unavailable — do NOT invent)
| Field | Status |
| --- | --- |
| Registration number | **Missing** |
| Years of experience | **Missing** — never infer |
| Additional qualifications / post-graduate study | **Missing** |
| Professional memberships / associations | **Missing** |
| Awards / recognitions | **Missing** |
| Hospital / institutional affiliations | **Missing** |
| Specialty certifications | **Missing** — "areas of focus" ≠ certified specialty |
| Verified doctor photograph | **Missing** — see BRAND-ASSET-REQUIREMENTS.md |
| Languages spoken | **Missing** |

## Rendering policy (implemented)
- `src/data/doctor.ts` holds every field; unconfirmed fields are `null`.
- The doctor page renders a section **only if** its field is populated — no
  empty "Registration" / "Experience" headings appear while those are `null`.
- `Physician` JSON-LD omits credentials/registration until verified.
- A single italic line notes that registration and further details will be
  added once verified (honest, not a fabricated placeholder value).

## Action items for the clinic
- [ ] Provide medical council registration number.
- [ ] Confirm years in practice (or decline to state).
- [ ] Confirm preferred professional title and areas of focus.
- [ ] Provide any additional qualifications/memberships (or confirm none to list).
- [ ] Provide a real doctor photograph with usage consent.
