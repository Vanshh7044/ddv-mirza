/** Favicons from the navbar logo (white compass on brand orange). Run: node scripts/make-favicons.cjs */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const OUT = path.resolve(__dirname, '../public');

// Lucide "compass" on a 24 grid, needle filled so it survives 16px.
const mark = (stroke) => `<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="${stroke}"/>
  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" fill="#fff" stroke="#fff" stroke-width="${stroke * 0.6}" stroke-linejoin="round"/>`;
// rounded tile (browser tabs) vs full-bleed square (iOS / Android mask their own shape)
// k = how big the 24-unit compass is drawn inside the 32-unit tile
const svg = ({ radius, k, stroke }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="${radius}" fill="#EA580C"/>
  <g transform="translate(${16 - 12 * k} ${16 - 12 * k}) scale(${k})">${mark(stroke)}</g>
</svg>`;

const tab = svg({ radius: 7, k: 1.2, stroke: 2.6 });
const full = svg({ radius: 0, k: 0.95, stroke: 2.2 });

(async () => {
  fs.writeFileSync(path.join(OUT, 'favicon.svg'), tab);
  const png = (src, size) => sharp(Buffer.from(src), { density: 72 * size / 32 * 4 }).resize(size, size).png().toBuffer();
  await sharp(await png(full, 180)).toFile(path.join(OUT, 'apple-touch-icon.png'));
  await sharp(await png(full, 192)).toFile(path.join(OUT, 'icon-192.png'));
  await sharp(await png(full, 512)).toFile(path.join(OUT, 'icon-512.png'));
  // favicon.ico with PNG-encoded 16/32/48 entries
  const sizes = [16, 32, 48];
  const imgs = await Promise.all(sizes.map((s) => png(tab, s)));
  const head = Buffer.alloc(6 + 16 * sizes.length);
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
  let offset = head.length;
  sizes.forEach((s, i) => {
    const e = 6 + 16 * i;
    head.writeUInt8(s, e); head.writeUInt8(s, e + 1); head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6);
    head.writeUInt32LE(imgs[i].length, e + 8); head.writeUInt32LE(offset, e + 12);
    offset += imgs[i].length;
  });
  fs.writeFileSync(path.join(OUT, 'favicon.ico'), Buffer.concat([head, ...imgs]));
  fs.writeFileSync(path.join(OUT, 'site.webmanifest'), JSON.stringify({
    name: 'Dubai Dune Tours', short_name: 'Dune Tours', start_url: '/', display: 'standalone',
    background_color: '#F8F6F0', theme_color: '#EA580C',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    ],
  }, null, 2));
  // preview sheet
  const prev = await Promise.all([16, 32, 48].map((s) => png(tab, s)));
  const big = await png(full, 180);
  await sharp({ create: { width: 420, height: 200, channels: 3, background: '#e5e7eb' } })
    .composite([{ input: prev[0], left: 10, top: 10 }, { input: prev[1], left: 40, top: 10 }, { input: prev[2], left: 90, top: 10 },
      { input: await sharp(prev[0]).resize(96, 96, { kernel: 'nearest' }).toBuffer(), left: 10, top: 80 }, { input: big, left: 230, top: 10 }])
    .png().toFile(path.join(__dirname, '../real-media/tmp/favicon-preview.png'));
  console.log('favicons done');
})();
