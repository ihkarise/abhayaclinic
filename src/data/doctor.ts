/**
 * Doctor profile — single source of truth.
 *
 * VERIFICATION POLICY (see docs/DOCTOR-CONTENT-VERIFICATION.md):
 * Only fields with `verified: true`-grade information are populated. Anything
 * unconfirmed is left `null` and MUST NOT be rendered as an empty heading.
 * Never invent qualifications, registration numbers, years of experience,
 * memberships, specialties, awards or affiliations.
 *
 * Sources for currently-populated fields: the clinic's own former website
 * (About page + footer). These are the clinic's own statements about itself.
 */

export interface Qualification {
  degree: string;
  institution: string;
  year?: number | null;
}

export const doctor = {
  name: 'Dr Varun Vasudev',
  professionalTitle: 'Homoeopathic Physician',

  /** Real portrait pending — see docs/BRAND-ASSET-REQUIREMENTS.md. */
  photo: null as null | { src: string; alt: string },

  qualifications: [
    { degree: 'BHMS', institution: 'Martin Homoeopathic Medical College, Coimbatore', year: null },
  ] as Qualification[],

  /** Medical council registration number — NOT verified. Do not invent. */
  registration: null as null | string,

  /** Years of experience — NOT verified. Do not infer. */
  experience: null as null | string,

  /**
   * Areas of focus (allergy-first). These are topic areas the clinic addresses,
   * not claims of specialist certification.
   */
  areasOfFocus: [
    'Allergic rhinitis',
    'Sinus allergy',
    'Asthma & wheezing',
    'Adenoid enlargement',
    'Eczema',
    'Urticaria',
  ],

  /** Short, source-supported biography. No invented detail. */
  professionalBio:
    'Dr Varun Vasudev completed his BHMS from Martin Homoeopathic Medical College, Coimbatore, and is a third-generation doctor. He consults with patients both in person at the clinic in Nilambur and online.',

  consultationApproach:
    'Each consultation begins by understanding your symptoms, history and likely triggers, so that guidance can be tailored to your individual situation. Dr Varun Vasudev also offers counselling and health guidance as part of whole-person care.',

  /**
   * Health-education involvement — stated by the clinic on its former site.
   */
  healthEducation:
    'Dr Varun Vasudev has a long-standing interest in health education — sharing health information through articles and social media, and conducting health awareness sessions in the community.',

  /** Third-generation-doctor statement, from the clinic's own former site. */
  thirdGeneration: true,
} as const;

export type Doctor = typeof doctor;
