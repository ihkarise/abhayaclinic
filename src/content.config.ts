import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

/**
 * Editorial content-status workflow, shared across collections.
 *   draft        — being written, not for public view
 *   in-review    — awaiting medical/editorial review
 *   approved     — reviewed & signed off, not yet live
 *   published    — live on the site
 * A page renders publicly only when status === 'published' (and, where
 * relevant, consent is confirmed). This is independent of `medicalReviewed`,
 * which controls whether a "Medically reviewed by …" line may appear.
 */
const status = z
  .enum(['draft', 'in-review', 'approved', 'published'])
  .default('draft');

/** Medical review metadata. Never display a review that did not happen. */
const medicalReview = {
  medicalReviewed: z.boolean().default(false),
  reviewedBy: z.string().optional(),
  reviewedAt: z.coerce.date().optional(),
};

/** Reusable SEO overrides available on every content entry. */
const seo = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    noindex: z.boolean().default(false),
  })
  .optional();

const conditions = defineCollection({
  loader: glob({ base: './src/content/conditions', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    /** Ordering on the conditions index. */
    order: z.number().default(99),
    /** One-line summary used on cards and meta descriptions. */
    summary: z.string(),
    intro: z.string(),
    symptoms: z.array(z.string()).default([]),
    triggers: z.array(z.string()).default([]),
    whoAffected: z.string().optional(),
    whenToSeekHelp: z.string().optional(),
    consultationApproach: z.string().optional(),
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
    related: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    status,
    ...medicalReview,
    seo,
  }),
});

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    summary: z.string(),
    intro: z.string(),
    forWhom: z.string().optional(),
    howItWorks: z.array(z.string()).default([]),
    status,
    seo,
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      excerpt: z.string().optional(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      author: z.string().default('Dr Varun Vasudev'),
      authorBio: z.string().optional(),
      category: z.enum([
        'allergies',
        'respiratory-health',
        'skin-health',
        'childrens-allergy-health',
        'general-health',
        'clinic-updates',
      ]),
      tags: z.array(z.string()).default([]),
      featuredImage: image().optional(),
      imageAlt: z.string().optional(),
      status,
      ...medicalReview,
      /** Hard visibility gate kept for backward-compatible authoring. */
      draft: z.boolean().default(true),
      canonical: z.url().optional(),
    }),
});

const patientStories = defineCollection({
  loader: glob({ base: './src/content/patient-stories', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    condition: reference('conditions').optional(),
    conditionLabel: z.string().optional(),
    /** Consent MUST be true for an entry to render (enforced in template). */
    consentObtained: z.boolean().default(false),
    summary: z.string(),
    publishedAt: z.coerce.date().optional(),
    status,
    draft: z.boolean().default(true),
  }),
});

/**
 * Before / After patient-progress cases. Structural model only — no case
 * renders unless `consentConfirmed` AND `published` are both true (enforced in
 * the template). Never record an invented diagnosis, duration, method or
 * outcome, and never include identifying details.
 */
const beforeAfter = defineCollection({
  loader: glob({ base: './src/content/before-after', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      /** Stable id, e.g. "case-2026-001". */
      caseId: z.string(),
      condition: reference('conditions').optional(),
      conditionLabel: z.string(),
      /** Neutral, factual description. No diagnosis/outcome claims. */
      description: z.string(),
      beforeImage: image().optional(),
      afterImage: image().optional(),
      beforeAlt: z.string().optional(),
      afterAlt: z.string().optional(),
      /** Both gates must be true to render. */
      consentConfirmed: z.boolean().default(false),
      published: z.boolean().default(false),
    }),
});

export const collections = {
  conditions,
  services,
  blog,
  patientStories,
  beforeAfter,
};
