# Gallery Category Convention

_Phase 3C — Milestone 1. Defines how a gallery image is assigned to a category.
This is a naming convention only; it introduces **no new required assets** and
does not change the Phase 3B media foundation (`src/lib/media.ts`) or the live
gallery. The logic lives in `src/lib/gallery.ts`._

## How categorization works

A gallery image is assigned to a category by its **filename prefix**. Drop the
image into `src/assets/photos/gallery/` (per `src/assets/README.md`) using a
descriptive, hyphenated filename that **starts with the category prefix**.

| Category | Chip label | Filename prefix | Example filename |
| --- | --- | --- | --- |
| Clinic | Clinic | `clinic-` | `clinic-waiting-area.jpg` |
| Educational | Educational | `educational-` | `educational-pollen-seasons.jpg` |
| Allergy Awareness | Allergy Awareness | `allergy-awareness-` | `allergy-awareness-camp-2026.jpg` |
| Events | Events | `events-` | `events-world-allergy-day.jpg` |
| Social Campaigns | Social Campaigns | `social-` | `social-instagram-dust-mites.jpg` |

The **All** view always shows every image regardless of prefix.

## Rules

- **Prefixes are exact and case-insensitive.** `Clinic-Reception.jpg` and
  `clinic-reception.jpg` both map to **Clinic**.
- **Prefixes are mutually exclusive** — a filename matches at most one category.
- **Unmatched filenames are safe.** A gallery image whose name matches no prefix
  (e.g. `reception.jpg`) is **not** dropped and does **not** error — it simply
  appears under **All** only. Prefer adding a prefix so it also appears under its
  category chip.
- **The rest of the filename is still the description.** As in Phase 3B, the
  filename (hyphens/underscores → spaces) becomes the image `alt` text, so keep
  it descriptive after the prefix (`clinic-waiting-area` → alt "clinic waiting
  area"). Name the file the way you'd describe the photo to someone who can't see
  it.
- **Descriptive, not `IMG_1234`.** Camera-default names carry no prefix and no
  meaning; rename before dropping in.

## Where this is used

- `src/lib/gallery.ts` — `galleryCategories` (ordered category list, `All`
  first) and `categoryForStem(stem)` (pure, deterministic filename-stem →
  category mapping; returns `'all'` for unmatched stems).
- Filtering UI wiring (later milestones) reads these definitions so the chips
  and the matching logic stay in one source of truth.

## Not affected by this convention

- `src/lib/media.ts` (Phase 3B media getters) — unchanged.
- The image pipeline (`astro:assets <Image>` → single-width WebP) — unchanged.
- Existing gallery behavior and its empty state — unchanged at Milestone 1.
