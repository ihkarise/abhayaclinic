import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
    medicalReviewed: z.boolean().default(false),
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
      medicalReviewed: z.boolean().default(false),
      reviewedBy: z.string().optional(),
      reviewedAt: z.coerce.date().optional(),
      draft: z.boolean().default(true),
      canonical: z.string().url().optional(),
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
    draft: z.boolean().default(true),
  }),
});

export const collections = { conditions, services, blog, patientStories };
