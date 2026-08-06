import fs from 'fs';
import path from 'path';

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(jsx?)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const src = path.resolve('frontend/src');
let fixed = 0;

for (const file of walk(src)) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('React.createElement') && !/import React\b/.test(content)) {
    content = "import React from 'react';\n" + content;
    fs.writeFileSync(file, content);
    fixed++;
  }
}

console.log(`Fixed ${fixed} files.`);
