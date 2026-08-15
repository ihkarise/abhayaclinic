/**
 * Gallery category model (Phase 3C — Milestone 1).
 *
 * Pure, image-free logic: this module defines the ordered set of gallery
 * categories and a deterministic mapping from a gallery image's filename stem
 * to one of those categories. It contains NO image imports and NO rendering —
 * it can be reasoned about and tested without any real asset present, and it
 * does not touch the Phase 3B media foundation (`src/lib/media.ts`).
 *
 * Convention: a gallery image is assigned to a category by a documented
 * filename PREFIX (e.g. `clinic-waiting-area.jpg` → Clinic). Files whose stem
 * matches no known prefix fall back to the `all` bucket only — they are never
 * dropped and never cause an error. Full spec: `docs/GALLERY-CONVENTION.md`.
 *
 * The `all` category is the default view (shows every image). It is listed
 * first so a UI can render chips directly from `galleryCategories` in order.
 */

/** Stable, machine-safe identifier for a gallery category. */
export type CategorySlug =
  | 'all'
  | 'clinic'
  | 'educational'
  | 'allergy-awareness'
  | 'events'
  | 'social-campaigns';

export interface GalleryCategory {
  /** Stable identifier used in markup/state (e.g. `data-category`). */
  slug: CategorySlug;
  /** Human-readable chip label. */
  label: string;
  /**
   * Filename-stem prefix that assigns an image to this category. The `all`
   * category has no prefix (it is the catch-all view), so its prefix is `null`.
   */
  prefix: string | null;
}

/**
 * Ordered categories. `all` first (default view), then the five content
 * categories in the fixed display order. Rendering the filter chips from this
 * array keeps the UI and the matching logic in a single source of truth.
 */
export const galleryCategories: readonly GalleryCategory[] = [
  { slug: 'all', label: 'All', prefix: null },
  { slug: 'clinic', label: 'Clinic', prefix: 'clinic-' },
  { slug: 'educational', label: 'Educational', prefix: 'educational-' },
  { slug: 'allergy-awareness', label: 'Allergy Awareness', prefix: 'allergy-awareness-' },
  { slug: 'events', label: 'Events', prefix: 'events-' },
  { slug: 'social-campaigns', label: 'Social Campaigns', prefix: 'social-' },
] as const;

/**
 * The concrete (non-`all`) categories with a real prefix, checked in order.
 * `allergy-awareness-` is a superset-prefixed string, but order here does not
 * matter because the prefixes are mutually exclusive by design.
 */
const matchableCategories = galleryCategories.filter(
  (c): c is GalleryCategory & { prefix: string } => c.prefix !== null
);

/**
 * Map a gallery image's filename STEM (the filename without its extension,
 * e.g. `clinic-waiting-area`) to a category slug.
 *
 * Deterministic and total: every input returns a valid `CategorySlug`.
 * Matching is case-insensitive on the prefix. A stem that matches no known
 * prefix returns `'all'`, meaning it is only surfaced in the default view —
 * it is never hidden entirely and never throws.
 *
 * @param stem filename without extension (media.ts already strips the ext).
 * @returns the matching category slug, or `'all'` when nothing matches.
 */
export function categoryForStem(stem: string): CategorySlug {
  const normalized = stem.trim().toLowerCase();
  const match = matchableCategories.find((c) =>
    normalized.startsWith(c.prefix.toLowerCase())
  );
  return match ? match.slug : 'all';
}

/** Look up a category definition by slug (or `undefined` if not a known slug). */
export function getCategory(slug: string): GalleryCategory | undefined {
  return galleryCategories.find((c) => c.slug === slug);
}
