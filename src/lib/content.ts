import type { CollectionEntry } from 'astro:content';

/**
 * Publication gates. A page is only ever emitted for content that is
 * explicitly `status: published`. Because `status` defaults to `draft` in the
 * schema, forgetting to set it keeps content OFF the public site — the safe
 * default for a medical website (see docs/CONTENT-GOVERNANCE.md).
 *
 * Every public collection query MUST run through one of these.
 */

type WithStatus = { data: { status?: string } };

/** Conditions, services, patient stories: published only. */
export function isPublished<T extends WithStatus>(entry: T): boolean {
  return entry.data.status === 'published';
}

/** Blog posts: published status AND not a draft (both gates must pass). */
export function isPublishedPost(entry: CollectionEntry<'blog'>): boolean {
  return entry.data.status === 'published' && !entry.data.draft;
}
