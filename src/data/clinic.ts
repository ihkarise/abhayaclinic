/**
 * Clinic data — single source of truth.
 *
 * Every phone number, WhatsApp link, address, opening hour and social URL
 * used anywhere in the site MUST come from here. Do not hard-code these
 * values in components or pages.
 *
 * Fields marked `verified: false` in docs/MISSING-INFORMATION.md must be
 * confirmed with the clinic before production launch.
 */

/** Digits-only international phone, no "+" or spaces — used for wa.me + tel:. */
const PRIMARY_WHATSAPP = '919188240272'; // TODO verify: old site also shows 919539760272

export const clinic = {
  legalName: 'Abhaya Allergy Center',
  /** Historic/registered name still on signage & documents. */
  formerName: 'Abhaya Homoeopathic Medical Center',
  doctor: 'Dr Varun Vasudev',

  phone: {
    display: '+91 91882 40272',
    tel: '+919188240272',
  },
  /** Secondary number shown on the old site; verify role before publishing. */
  phoneSecondary: {
    display: '+91 95397 60272',
    tel: '+919539760272',
  },

  whatsapp: {
    number: PRIMARY_WHATSAPP,
    /** Base wa.me link; use the WhatsApp helper to add a prefilled message. */
    baseUrl: `https://wa.me/${PRIMARY_WHATSAPP}`,
  },

  email: 'info@drvarunvasudev.com', // TODO verify final email on new domain

  address: {
    line1: 'PB Business Point',
    line2: 'Kovilakam Road, near HDFC Bank',
    locality: 'Nilambur',
    region: 'Kerala',
    postalCode: '679329',
    country: 'IN',
    countryName: 'India',
  },

  /** Google Maps place/directions URL. TODO: confirm official place URL. */
  maps: {
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Abhaya+Homoeopathic+Medical+Center+Nilambur',
    /** Coordinates NOT yet verified — see docs/MISSING-INFORMATION.md. */
    geo: null as null | { lat: number; lng: number },
  },

  /**
   * Opening hours. The old About page states Mon–Sat 9:00 AM – 7:00 PM;
   * the Contact page omits days. Treated as Mon–Sat pending confirmation.
   */
  hours: {
    summary: 'Mon – Sat, 9:00 AM – 7:00 PM',
    days: [
      { day: 'Monday', open: '09:00', close: '19:00' },
      { day: 'Tuesday', open: '09:00', close: '19:00' },
      { day: 'Wednesday', open: '09:00', close: '19:00' },
      { day: 'Thursday', open: '09:00', close: '19:00' },
      { day: 'Friday', open: '09:00', close: '19:00' },
      { day: 'Saturday', open: '09:00', close: '19:00' },
      { day: 'Sunday', open: null, close: null }, // closed (assumed)
    ],
  },

  social: {
    instagram: 'https://www.instagram.com/drvarunvaaz',
    facebook: '', // TODO confirm official Facebook URL
    youtube: 'https://youtube.com/@drvarunvasudev',
    twitter: '',
  },
} as const;

export type Clinic = typeof clinic;
