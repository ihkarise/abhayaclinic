/**
 * Brand-asset intake foundation (Phase 3B).
 *
 * No real logo or photo exists yet — nothing here invents one. Each getter
 * looks for a real file at a documented path under `src/assets/` (see
 * `src/assets/README.md` and `docs/BRAND-ASSET-REQUIREMENTS.md`) and returns
 * it if present, or `null`/`[]` when the slot is still empty. Callers fall
 * back to the existing CSS placeholder in that case, so the build never
 * breaks on a missing asset — and the moment a correctly-named file is
 * dropped in, it's picked up automatically on the next build.
 */
import type { ImageMetadata } from 'astro';

type ImageModule = { default: ImageMetadata };

const brandAssets = import.meta.glob<ImageModule>(
  '/src/assets/brand/*.{svg,png,jpg,jpeg,webp,avif}',
  { eager: true }
);

const photoAssets = import.meta.glob<ImageModule>(
  '/src/assets/photos/{hero,doctor,clinic}/*.{png,jpg,jpeg,webp,avif}',
  { eager: true }
);

const galleryAssets = import.meta.glob<ImageModule>(
  '/src/assets/photos/gallery/*.{png,jpg,jpeg,webp,avif}',
  { eager: true }
);

function findByStem(
  modules: Record<string, ImageModule>,
  stem: string
): ImageMetadata | null {
  const entry = Object.entries(modules).find(([path]) =>
    path.replace(/\.[^./]+$/, '').endsWith(`/${stem}`)
  );
  return entry ? entry[1].default : null;
}

/** Full logo lockup (mark + wordmark), if supplied. */
export function getBrandLogo(): ImageMetadata | null {
  return findByStem(brandAssets, 'logo-primary');
}

/** Icon-only logo mark, if supplied. */
export function getBrandMark(): ImageMetadata | null {
  return findByStem(brandAssets, 'logo-mark');
}

export type PhotoSlot =
  | 'hero'
  | 'doctor-portrait'
  | 'clinic-exterior'
  | 'clinic-interior'
  | 'consultation';

export function getPhoto(slot: PhotoSlot): ImageMetadata | null {
  return findByStem(photoAssets, slot);
}

export interface GalleryPhoto {
  image: ImageMetadata;
  /** Derived from the filename — see src/assets/README.md naming rule. */
  alt: string;
}

/** All gallery images present, sorted by filename. */
export function getGalleryPhotos(): GalleryPhoto[] {
  return Object.entries(galleryAssets)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, mod]) => {
      const stem = path.split('/').pop()!.replace(/\.[^./]+$/, '');
      const alt = stem.replace(/[-_]+/g, ' ').trim();
      return { image: mod.default, alt };
    });
}
