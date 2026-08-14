import { site } from '@config/site';
import { clinic } from '@data/clinic';

/**
 * JSON-LD builders. Only verified data is emitted.
 * No aggregateRating / review counts are ever produced — see spec §30, §57.
 */

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;
const DOCTOR_ID = `${site.url}/about/dr-varun-vasudev/#physician`;

export function organizationSchema() {
  const social = Object.values(clinic.social).filter(Boolean);
  return {
    '@type': 'MedicalClinic',
    '@id': ORG_ID,
    name: clinic.legalName,
    url: site.url,
    email: clinic.email,
    telephone: clinic.phone.tel,
    medicalSpecialty: 'Allergology',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
      addressLocality: clinic.address.locality,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    ...(clinic.maps.geo
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: clinic.maps.geo.lat,
            longitude: clinic.maps.geo.lng,
          },
        }
      : {}),
    openingHoursSpecification: clinic.hours.days
      .filter((d) => d.open && d.close)
      .map((d) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: d.day,
        opens: d.open,
        closes: d.close,
      })),
    ...(social.length ? { sameAs: social } : {}),
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    publisher: { '@id': ORG_ID },
    inLanguage: site.lang,
  };
}

export function physicianSchema() {
  return {
    '@type': 'Physician',
    '@id': DOCTOR_ID,
    name: clinic.doctor,
    url: `${site.url}/about/dr-varun-vasudev/`,
    medicalSpecialty: 'Allergology',
    worksFor: { '@id': ORG_ID },
    // Credentials intentionally omitted until verified (see MISSING-INFORMATION).
  };
}

export interface Crumb {
  name: string;
  url: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.url, site.url).href,
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  publishedAt: Date;
  updatedAt?: Date;
  image?: string;
}) {
  return {
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: new URL(opts.url, site.url).href,
    datePublished: opts.publishedAt.toISOString(),
    dateModified: (opts.updatedAt ?? opts.publishedAt).toISOString(),
    author: { '@id': DOCTOR_ID },
    publisher: { '@id': ORG_ID },
    ...(opts.image ? { image: new URL(opts.image, site.url).href } : {}),
  };
}

/** Wrap one or more node objects in a @graph document. */
export function graph(...nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
