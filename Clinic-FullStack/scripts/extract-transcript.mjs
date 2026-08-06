import fs from 'fs';

const transcriptPath =
  'C:/Users/Admin/.cursor/projects/d-Clinic-FullStack/agent-transcripts/e7b988d0-9849-4c12-b67a-00a21a647313/e7b988d0-9849-4c12-b67a-00a21a647313.jsonl';

const raw = fs.readFileSync(transcriptPath, 'utf8');
const lines = raw.split('\n');
const files = new Map();

for (const line of lines) {
  if (!line.includes('"Write"') || !line.includes('contents')) continue;
  try {
    const obj = JSON.parse(line);
    const blocks = obj.message?.content ?? [];
    for (const block of blocks) {
      if (block.name !== 'Write') continue;
      const { path, contents } = block.input ?? {};
      if (path && contents && path.includes('Clinic-FullStack')) {
        files.set(path.replace(/\\/g, '/'), contents);
      }
    }
  } catch {
    // skip malformed lines
  }
}

const outDir = 'd:/Clinic-FullStack/.recovered';
fs.mkdirSync(outDir, { recursive: true });

for (const [filePath, contents] of files) {
  const rel = filePath.split('Clinic-FullStack/')[1];
  if (!rel?.startsWith('frontend/')) continue;
  const outPath = `d:/Clinic-FullStack/.recovered/${rel.replace('frontend/', '')}`;
  fs.mkdirSync(outPath.split('/').slice(0, -1).join('/'), { recursive: true });
  fs.writeFileSync(outPath, contents);
  console.log('saved', rel);
}

console.log('total files:', files.size);
