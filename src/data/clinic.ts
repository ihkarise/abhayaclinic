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
    /**
     * Official Google Business Profile reviews view (owner-supplied, verified
     * against this listing: name "Abhaya Homoeopathic Medical Center", CID
     * 0x3ba63b77def5996b:0xed73d3be36a1734, ~11.2778,76.2250 = Nilambur).
     * `!1b1` opens the reviews tab. We only link out — no review content,
     * reviewer data, rating or count is ever stored or reproduced.
     */
    reviewsUrl:
      'https://www.google.com/maps/place/Abhaya+Homoeopathic+Medical+Center/@11.2778147,73.7860808,8z/data=!4m12!1m2!2m1!1sabhaya+homeo+clinic!3m8!1s0x3ba63b77def5996b:0xed73d3be36a1734!8m2!3d11.2778147!4d76.2250456!9m1!1b1!15sChNhYmhheWEgaG9tZW8gY2xpbmljWhUiE2FiaGF5YSBob21lbyBjbGluaWOSAQlob21lb3BhdGiaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTldYelZNWW1KbkVBReABAPoBBQj2AhBD!16s%2Fg%2F11kq3jrmjy',
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
