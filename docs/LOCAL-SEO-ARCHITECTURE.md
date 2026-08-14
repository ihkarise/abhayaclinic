# Local SEO Architecture

Establishes Abhaya Allergy Center as a real local healthcare business. **All
business data comes from the single source of truth `src/data/clinic.ts`** and
is never duplicated by hand in components. Unverified values are marked and must
be confirmed before launch.

## NAP + business data (from `src/data/clinic.ts`)
| Field | Current value | Verified? |
| --- | --- | --- |
| Clinic name (public) | Abhaya Allergy Center | New positioning name |
| Registered/former name | Abhaya Homoeopathic Medical Center | On signage/records |
| Address | PB Business Point, Kovilakam Road, near HDFC Bank, Nilambur, Kerala 679329 | From old site — confirm |
| Phone | +91 91882 40272 | Confirm primary |
| Secondary phone | +91 95397 60272 | Confirm role |
| WhatsApp | 91 91882 40272 (provisional primary) | **Unresolved — owner to confirm** |
| Email | info@drvarunvasudev.com | Confirm final email on new domain |
| Opening hours | Mon–Sat 9:00 AM – 7:00 PM (Sun closed, assumed) | Confirm days |
| Coordinates (geo) | **null** — not set | **Missing** |
| Service area | Nilambur & Malappuram district; online across India | Confirm |

## Consistency guarantees (implemented)
- Header, Footer, Contact page, Book page, home "Visit the clinic", and
  `MedicalClinic` JSON-LD **all read from `clinic.ts`** — one edit updates
  everything. Verified in Phase 1.5 (no hardcoded numbers outside `clinic.ts`).
- `MedicalClinic` schema emits address + opening hours; `geo` is emitted **only
  when coordinates are set** (currently omitted, not faked).

## Structured data for local
- `MedicalClinic` (name, address, telephone, email, openingHoursSpecification,
  `medicalSpecialty: Allergology`, `sameAs` social) — sitewide via home + about
  + contact.
- `geo` (GeoCoordinates) — **pending real coordinates**; do not invent.
- `Physician` linked to the clinic via stable `@id`.

## Google Business Profile
- Required verified GBP URL: **Missing** (tracked in MISSING-INFORMATION.md).
- No GBP integration is created or claimed. When the profile is confirmed, add
  its URL to `clinic.ts` social/maps and to `sameAs`.

## On-page local signals (implemented / planned)
- [x] Address + hours in footer on every page (from central config).
- [x] Dedicated `/contact/` with address, phone, WhatsApp, hours, directions.
- [x] "Directions" links to Google Maps (no heavy iframe — perf-safe).
- [ ] Real geo-coordinates → enables accurate map + `geo` schema.
- [ ] Confirmed GBP → `sameAs` + citation consistency.
- [ ] Consistent NAP across any external citations/directories.

## Guardrails
- No invented coordinates, hours, GBP URL, or reviews.
- No city×keyword doorway pages for local reach (see spec §8); local relevance
  comes from genuine clinic + condition + service pages.

## Action items
- [ ] Confirm WhatsApp number, address, email, opening days.
- [ ] Provide exact clinic coordinates.
- [ ] Provide/confirm Google Business Profile URL.
- [ ] Confirm service-area statement.
