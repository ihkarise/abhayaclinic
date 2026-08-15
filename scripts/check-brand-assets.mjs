#!/usr/bin/env node
// Reports which required brand/media assets are present vs. still missing.
// See docs/BRAND-ASSET-REQUIREMENTS.md and src/assets/README.md.
import { existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const exts = ['svg', 'png', 'jpg', 'jpeg', 'webp', 'avif'];

function findByStem(dir, stem) {
  const full = join(root, dir);
  if (!existsSync(full)) return null;
  return readdirSync(full).find((f) =>
    exts.some((ext) => f.toLowerCase() === `${stem}.${ext}`)
  );
}

function countImages(dir) {
  const full = join(root, dir);
  if (!existsSync(full)) return 0;
  return readdirSync(full).filter((f) =>
    exts.some((ext) => f.toLowerCase().endsWith(`.${ext}`)) && f !== '.gitkeep'
  ).length;
}

const slots = [
  { label: 'Primary logo', required: true, check: () => findByStem('src/assets/brand', 'logo-primary') },
  { label: 'Logo mark (icon)', required: true, check: () => findByStem('src/assets/brand', 'logo-mark') },
  { label: 'Favicon (favicon.ico)', required: true, check: () => (existsSync(join(root, 'public/favicon.ico')) ? 'favicon.ico' : null) },
  { label: 'Apple touch icon', required: true, check: () => (existsSync(join(root, 'public/apple-touch-icon.png')) ? 'apple-touch-icon.png' : null) },
  { label: 'OG / social image', required: true, check: () => (existsSync(join(root, 'public/og-image.jpg')) ? 'og-image.jpg' : null) },
  { label: 'Doctor portrait', required: true, check: () => findByStem('src/assets/photos/doctor', 'doctor-portrait') },
  { label: 'Clinic exterior', required: true, check: () => findByStem('src/assets/photos/clinic', 'clinic-exterior') },
  { label: 'Clinic interior', required: false, check: () => findByStem('src/assets/photos/clinic', 'clinic-interior') },
  { label: 'Consultation photo', required: false, check: () => findByStem('src/assets/photos/clinic', 'consultation') },
  { label: 'Hero image', required: false, check: () => findByStem('src/assets/photos/hero', 'hero') },
];

console.log('\nBrand asset intake status\n' + '-'.repeat(40));
let missingRequired = 0;
for (const slot of slots) {
  const found = slot.check();
  const badge = found ? '✅' : slot.required ? '⬜ MISSING' : '⬜ missing (optional)';
  if (!found && slot.required) missingRequired++;
  console.log(`${badge.padEnd(22)} ${slot.label}${found ? ` (${found})` : ''}`);
}

const galleryCount = countImages('src/assets/photos/gallery');
console.log(`${(galleryCount > 0 ? '✅' : '⬜ missing (optional)').padEnd(22)} Gallery images (${galleryCount} found)`);

console.log('-'.repeat(40));
console.log(
  missingRequired === 0
    ? 'All required assets are present.\n'
    : `${missingRequired} required asset(s) still missing. See docs/BRAND-ASSET-REQUIREMENTS.md.\n`
);

process.exitCode = missingRequired > 0 ? 1 : 0;
