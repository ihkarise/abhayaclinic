/**
 * Central site configuration — single source of truth for domain and brand.
 *
 * Used by: SEO component, canonical URLs, sitemap, Open Graph, JSON-LD,
 * RSS, and any absolute internal URL.
 *
 * IMPORTANT: the production canonical domain is abhayaallergycenter.com.
 * Do NOT hard-code the old domain (drvarunvasudev.com) or the GitHub Pages
 * domain (ihkarise.github.io) anywhere in the app.
 */
export const site = {
  url: 'https://abhayaallergycenter.com',
  name: 'Abhaya Allergy Center',
  shortName: 'Abhaya',
  /** Used to compose page titles, e.g. "Allergic Rhinitis | Abhaya Allergy Center". */
  titleSuffix: 'Abhaya Allergy Center',
  tagline: 'Allergy Care in Nilambur, Kerala',
  description:
    'Abhaya Allergy Center in Nilambur, Kerala focuses on allergy care — allergic rhinitis, sinus allergy, asthma & wheezing, eczema, urticaria and more. Consult Dr Varun Vasudev in person or online.',
  locale: 'en_IN',
  lang: 'en',
  /** Default social sharing image (branded). See docs/MISSING-INFORMATION.md. */
  defaultOgImage: '/og-image.jpg',
  themeColor: '#0E7A4B',
} as const;

export type Site = typeof site;
