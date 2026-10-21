/**
 * Builds the website's images from REAL photos/videos only (client's NO-AI rule).
 * Output: public/images/real/*.webp (16:9, focus-cropped) + og-sunset.jpg (1200x630).
 * Run from repo root: node real-media/build-site-images.cjs
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const PHOTOS = path.join(__dirname, 'photos');
const OUT = path.join(ROOT, 'public', 'images', 'real');
const TMP = path.join(__dirname, 'tmp');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

const VIDEO = (n) => `C:/Users/vansh/Downloads/WhatsApp Video 2026-10-19 at 13.59.${n}.mp4`;

// name: [source, focusY (0 = top, 1 = bottom of the frame)]
const PHOTO_SLOTS = {
  'land-cruiser-sunset': ['photo-17', 0.34],
  'land-cruiser-peace': ['photo-19', 0.42],
  'camel-ride': ['photo-18', 0.4],
  'falcon-sunset': ['photo-04', 0.3],
  'falcon-dunes': ['photo-02', 0.33],
  'quad-bike': ['photo-07', 0.38],
  'dune-jump': ['photo-12', 0.5],
  'friends-dunes': ['photo-15', 0.5],
  'sunset-couple': ['photo-21', 0.3],
  'sunset-dunes': ['photo-16', 0.33],
  'sunset-dunes-2': ['photo-20', 0.33],
  'golden-hour-sand': ['photo-09', 0.42],
  'heart-sunset': ['photo-01', 0.3],
  'abaya-sunset': ['photo-10', 0.22],
  // batch 2026-10-21: camp, shows, food, buggies
  'camp-night': ['photo-38', 0.75],
  'camp-overview': ['photo-24', 0.6],
  'majlis': ['photo-32', 0.7],
  'camp-dining': ['photo-60', 0.5],
  'camp-lounge': ['photo-64', 0.6],
  'buffet': ['photo-47', 0.5],
  'buffet-station': ['photo-37', 0.5],
  'fire-show': ['photo-56', 0.35],
  'fire-show-wide': ['photo-31', 0.5],
  'fire-performer': ['photo-63', 0.35],
  'tanoura': ['photo-55', 0.45],
  'tanoura-led': ['photo-27', 0.6],
  'folk-dance': ['photo-51', 0.55],
  'belly-dance': ['photo-33', 0.5],
  'drum-dancer': ['photo-28', 0.4],
  'dune-buggy': ['photo-57', 0.6],
  'buggy-sunset': ['photo-49', 0.55],
  'buggy-dunes': ['photo-54', 0.62],
  'camel-ride-2': ['photo-30', 0.3],
  'sunset-kandura': ['photo-40', 0.38],
};

// Stills from the real show/dinner videos: [clip, second, focusY]
const VIDEO_SLOTS = {
  'show-dancer': ['12', 9.0, 0.35],
  'show-drums': ['04', 5.0, 0.22],
  'camp-dinner': ['05', 1.0, 0.62],
};

async function crop169(input, file, fy) {
  const m = await sharp(input).metadata();
  const w = m.width;
  const h = Math.round((w * 9) / 16);
  const top = Math.max(0, Math.min(m.height - h, Math.round((m.height - h) * fy)));
  const outW = Math.min(1600, Math.max(960, w)); // small video stills get a modest upscale
  await sharp(input)
    .extract({ left: 0, top, width: w, height: h })
    .resize(outW, Math.round((outW * 9) / 16), { kernel: 'lanczos3' })
    .sharpen({ sigma: 0.6 })
    .webp({ quality: 80 })
    .toFile(path.join(OUT, `${file}.webp`));
  console.log('  ✓', file);
}

(async () => {
  for (const [name, [src, fy]] of Object.entries(PHOTO_SLOTS)) await crop169(path.join(PHOTOS, `${src}.jpg`), name, fy);
  for (const [name, [clip, t, fy]] of Object.entries(VIDEO_SLOTS)) {
    const frame = path.join(TMP, `${name}.png`);
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', String(t), '-i', VIDEO(clip), '-frames:v', '1', frame]);
    await crop169(frame, name, fy);
  }
  // Open Graph / social share image (1200x630)
  const og = path.join(PHOTOS, 'photo-16.jpg');
  const m = await sharp(og).metadata();
  const h = Math.round(m.width * 630 / 1200);
  await sharp(og).extract({ left: 0, top: Math.round((m.height - h) * 0.42), width: m.width, height: h })
    .resize(1200, 630).jpeg({ quality: 85 }).toFile(path.join(OUT, 'og-sunset.jpg'));
  console.log('  ✓ og-sunset.jpg');
})();
