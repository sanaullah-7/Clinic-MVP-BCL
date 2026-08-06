import fs from 'fs';

const transcriptPath =
  'C:/Users/Admin/.cursor/projects/d-Clinic-FullStack/agent-transcripts/e7b988d0-9849-4c12-b67a-00a21a647313/e7b988d0-9849-4c12-b67a-00a21a647313.jsonl';

const raw = fs.readFileSync(transcriptPath, 'utf8');
const lines = raw.split('\n');
const allWrites = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line.includes('LandingPage.jsx') && !line.includes('"Write"')) continue;
  if (!line.includes('"Write"')) continue;
  try {
    const obj = JSON.parse(line);
    for (const block of obj.message?.content ?? []) {
      if (block.name !== 'Write') continue;
      const p = (block.input?.path ?? '').replace(/\\/g, '/');
      const c = block.input?.contents ?? '';
      if (p.includes('LandingPage.jsx')) {
        allWrites.push({ line: i + 1, path: p, contents: c });
      }
    }
  } catch (e) {
    if (line.includes('LandingPage.jsx')) console.log('parse fail line', i + 1, e.message.slice(0, 80));
  }
}

console.log('found', allWrites.length);
allWrites.forEach((w, idx) => {
  console.log(
    idx + 1,
    'line',
    w.line,
    'Trust',
    w.contents.includes('TrustSlider'),
    'Tailor',
    w.contents.includes('TailorSection'),
  );
});
