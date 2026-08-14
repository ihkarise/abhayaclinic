/** Primary navigation — single source of truth for header + footer links. */
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const primaryNav: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'About Abhaya', href: '/about/' },
      { label: 'Dr Varun Vasudev', href: '/about/dr-varun-vasudev/' },
    ],
  },
  { label: 'Allergy Conditions', href: '/conditions/' },
  { label: 'Services', href: '/services/' },
  { label: 'Patient Stories', href: '/patient-stories/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Health Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNav = {
  explore: [
    { label: 'About Abhaya', href: '/about/' },
    { label: 'Dr Varun Vasudev', href: '/about/dr-varun-vasudev/' },
    { label: 'Allergy Conditions', href: '/conditions/' },
    { label: 'Services', href: '/services/' },
    { label: 'Health Blog', href: '/blog/' },
  ],
  patient: [
    { label: 'Patient Stories', href: '/patient-stories/' },
    { label: 'Before & After', href: '/before-after/' },
    { label: 'Gallery', href: '/gallery/' },
    { label: 'Book Consultation', href: '/book-consultation/' },
    { label: 'Contact', href: '/contact/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Medical Disclaimer', href: '/medical-disclaimer/' },
  ],
};
