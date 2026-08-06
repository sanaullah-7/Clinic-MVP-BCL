import fs from 'fs';
import path from 'path';

const transcriptPath =
  'C:/Users/Admin/.cursor/projects/d-Clinic-FullStack/agent-transcripts/e7b988d0-9849-4c12-b67a-00a21a647313/e7b988d0-9849-4c12-b67a-00a21a647313.jsonl';

const frontendRoot = 'd:/Clinic-FullStack/frontend';
const raw = fs.readFileSync(transcriptPath, 'utf8');
const lines = raw.split('\n');

/** file suffix -> score function (higher = better Juvonno version) */
const scorers = {
  'LandingPage.jsx': (c) =>
    (c.includes('TrustSlider') ? 10 : 0) +
    (c.includes('TailorSection') ? 10 : 0) +
    (c.includes('IntegrationsSection') ? 5 : 0) -
    (c.includes('LogoCarousel') ? 8 : 0),
  'design-tokens.js': (c) => (c.includes('softPink') ? 10 : 0),
  'index.css': (c) =>
    (c.includes('tokens.css') ? 10 : 0) +
    (c.includes('section-inner') ? 5 : 0) +
    (c.includes('f7c7c8') ? 5 : 0),
  'tailwind.config.js': (c) => (c.includes('soft-pink') ? 10 : 0),
  'HeroSection.jsx': (c) =>
    (c.includes('ProductShowcase') ? 10 : 0) + (c.includes('hero-accent') ? 5 : 0),
  'features.js': (c) => (c.includes('PLATFORM_FEATURES') ? 10 : 0),
  'MarketingLayout.jsx': (c) =>
    (c.includes('Utility bar') || c.includes('utility bar') ? 10 : 0) +
    (c.includes('Book a Demo') ? 5 : 0),
  'TestimonialsSection.jsx': (c) =>
    (c.includes('Capterra') ? 10 : 0) + (c.includes('AWARDS') ? 5 : 0),
  'PracticeSizesSection.jsx': (c) => (c.includes('Small Practices') ? 10 : 0),
  'FeatureTabs.jsx': (c) => (c.includes('PLATFORM_FEATURES') ? 10 : 0),
  'Button.jsx': (c) => (c.includes('shadow-orange') || c.includes('#f7803c') ? 5 : 0),
};

const writesByRel = new Map();

for (const line of lines) {
  if (!line.includes('"Write"') || !line.includes('contents')) continue;
  try {
    const obj = JSON.parse(line);
    for (const block of obj.message?.content ?? []) {
      if (block.name !== 'Write') continue;
      const fullPath = (block.input?.path ?? '').replace(/\\/g, '/');
      if (!fullPath.includes('Clinic-FullStack/frontend/')) continue;
      const rel = fullPath.split('Clinic-FullStack/frontend/')[1];
      const contents = block.input.contents;
      if (!writesByRel.has(rel)) writesByRel.set(rel, []);
      writesByRel.get(rel).push(contents);
    }
  } catch {
    // skip
  }
}

function pickBest(rel, contentsList) {
  const basename = path.basename(rel);
  const scorer = scorers[basename];
  if (!scorer) return contentsList[contentsList.length - 1];
  let best = contentsList[0];
  let bestScore = scorer(best);
  for (const c of contentsList.slice(1)) {
    const s = scorer(c);
    if (s >= bestScore) {
      best = c;
      bestScore = s;
    }
  }
  return best;
}

const restoreList = [
  'src/constants/design-tokens.js',
  'src/styles/tokens.css',
  'src/styles/index.css',
  'tailwind.config.js',
  'src/app/layouts/MarketingLayout.jsx',
  'src/modules/landing/pages/LandingPage.jsx',
  'src/modules/landing/components/HeroSection.jsx',
  'src/modules/landing/components/ProductShowcase.jsx',
  'src/modules/landing/components/TrustSlider.jsx',
  'src/modules/landing/components/SectionShell.jsx',
  'src/modules/landing/components/FeatureTabs.jsx',
  'src/modules/landing/components/FeatureMockup.jsx',
  'src/modules/landing/components/TestimonialsSection.jsx',
  'src/modules/landing/components/PracticeSizesSection.jsx',
  'src/modules/landing/components/TailorSection.jsx',
  'src/modules/landing/components/IntegrationsSection.jsx',
  'src/modules/landing/components/SecuritySection.jsx',
  'src/modules/landing/components/FAQSection.jsx',
  'src/modules/landing/components/CTASection.jsx',
  'src/modules/landing/data/features.js',
  'src/modules/landing/data/testimonials.js',
  'src/components/atoms/Button.jsx',
  'src/components/atoms/Badge.jsx',
  'public/favicon.svg',
];

for (const rel of restoreList) {
  const versions = writesByRel.get(rel);
  if (!versions?.length) {
    console.warn('MISSING', rel);
    continue;
  }
  const content = pickBest(rel, versions);
  const out = path.join(frontendRoot, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, content);
  console.log('restored', rel);
}

console.log('done');
