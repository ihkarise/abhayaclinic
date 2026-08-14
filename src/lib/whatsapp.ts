import { clinic } from '@data/clinic';

/**
 * Build a WhatsApp deep link with an optional prefilled message.
 * Single place that constructs wa.me URLs — never hand-build them elsewhere.
 */
export function whatsappUrl(message?: string): string {
  const base = clinic.whatsapp.baseUrl;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Context-specific prefilled messages for CTAs. */
export const whatsappMessages: Record<string, string> = {
  default:
    'Hello Abhaya Allergy Center, I would like to know more about consultation.',
  booking:
    'Hello Abhaya Allergy Center, I would like to book a consultation with Dr Varun Vasudev.',
  online:
    'Hello Abhaya Allergy Center, I would like to book an online consultation.',
};

/**
 * Message for a specific allergy condition, e.g.
 * "...consultation for allergic rhinitis."
 */
export function conditionMessage(conditionTitle: string): string {
  return `Hello Abhaya Allergy Center, I would like to know more about consultation for ${conditionTitle.toLowerCase()}.`;
}
