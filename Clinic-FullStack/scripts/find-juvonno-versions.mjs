import fs from 'fs';

const transcriptPath =
  'C:/Users/Admin/.cursor/projects/d-Clinic-FullStack/agent-transcripts/e7b988d0-9849-4c12-b67a-00a21a647313/e7b988d0-9849-4c12-b67a-00a21a647313.jsonl';

const raw = fs.readFileSync(transcriptPath, 'utf8');
const lines = raw.split('\n');
const allWrites = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.includes('"Write"') || !line.includes('contents')) continue;
  try {
    const obj = JSON.parse(line);
    const blocks = obj.message?.content ?? [];
    for (const block of blocks) {
      if (block.name !== 'Write') continue;
      const { path, contents } = block.input ?? {};
      if (path && contents && path.includes('Clinic-FullStack/frontend')) {
        allWrites.push({ line: i + 1, path: path.replace(/\\/g, '/'), contents });
      }
    }
  } catch {
    // skip
  }
}

// Find LandingPage versions
const landingPages = allWrites.filter((w) => w.path.includes('LandingPage.jsx'));
console.log('LandingPage writes:', landingPages.length);
landingPages.forEach((w, idx) => {
  const hasTrust = w.contents.includes('TrustSlider');
  const hasTailor = w.contents.includes('TailorSection');
  const hasLogo = w.contents.includes('LogoCarousel');
  console.log(`  #${idx + 1} line ${w.line}: Trust=${hasTrust} Tailor=${hasTailor} Logo=${hasLogo}`);
});

// Find latest Juvonno LandingPage (TrustSlider + TailorSection)
const juvonnoLanding = [...landingPages].reverse().find(
  (w) => w.contents.includes('TrustSlider') && w.contents.includes('TailorSection'),
);
console.log('\nBest LandingPage at line:', juvonnoLanding?.line);

// Same for index.css - find Outlier theme version
const cssWrites = allWrites.filter((w) => w.path.endsWith('index.css'));
cssWrites.forEach((w, idx) => {
  const outlier = w.contents.includes('f7c7c8') || w.contents.includes('tokens.css');
  console.log(`CSS #${idx + 1} line ${w.line}: outlier=${outlier}`);
});

const bestCss = [...cssWrites].reverse().find((w) => w.contents.includes('tokens.css'));
console.log('Best CSS at line:', bestCss?.line);

// tailwind - find outlier version
const twWrites = allWrites.filter((w) => w.path.includes('tailwind.config'));
twWrites.forEach((w) => {
  const outlier = w.contents.includes('soft-pink') || w.contents.includes('softPink');
  console.log(`TW ${w.path.split('/').pop()} line ${w.line}: outlier=${outlier}`);
});
