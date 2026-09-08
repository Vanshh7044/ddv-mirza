// scripts/convert-to-webp.mjs
import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const INPUT_DIR = 'public/images';
const OUTPUT_DIR = 'public/images';
const QUALITY = 82;

const files = readdirSync(INPUT_DIR).filter(f => ['.jpg', '.jpeg'].includes(extname(f).toLowerCase()));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const inputPath = join(INPUT_DIR, file);
  const outputPath = join(OUTPUT_DIR, basename(file, extname(file)) + '.webp');
  
  const beforeSize = statSync(inputPath).size;
  totalBefore += beforeSize;

  await sharp(inputPath)
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(outputPath);
  
  const afterSize = statSync(outputPath).size;
  totalAfter += afterSize;

  const saving = Math.round((1 - afterSize / beforeSize) * 100);
  console.log(`✓ ${file} → ${basename(outputPath)}  ${Math.round(beforeSize/1024)}KB → ${Math.round(afterSize/1024)}KB  (${saving}% smaller)`);
}

console.log(`\n📦 Total: ${Math.round(totalBefore/1024)}KB → ${Math.round(totalAfter/1024)}KB  (${Math.round((1 - totalAfter/totalBefore)*100)}% savings)`);
