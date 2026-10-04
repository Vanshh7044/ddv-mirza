import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PATH = path.resolve(__dirname, '../dist');
const SSR_PATH = path.resolve(__dirname, '../dist-ssr/entry-server.js');

// Static head tags in index.html that Helmet re-emits per page; strip them so each page has exactly one.
const HELMET_MANAGED = [
  /<link\s+rel=["']canonical["'][^>]*>\s*/gi,
  /<meta\s+name=["'](description|robots|keywords)["'][^>]*>\s*/gi,
  /<meta\s+property=["']og:(type|url|title|description|image|site_name|locale)["'][^>]*>\s*/gi,
  /<meta\s+name=["']twitter:(card|url|title|description|image)["'][^>]*>\s*/gi,
];

async function generateSSG() {
  console.log('🚀 Prerendering static pages...');

  for (const [p, hint] of [[DIST_PATH, 'client'], [SSR_PATH, 'SSR']]) {
    if (!fs.existsSync(p)) {
      console.error(`❌ ${path.relative(process.cwd(), p)} not found. Run the ${hint} build first.`);
      process.exit(1);
    }
  }

  const templateHtml = fs.readFileSync(path.join(DIST_PATH, 'index.html'), 'utf-8');
  const { render, getPrerenderPaths } = await import(pathToFileURL(SSR_PATH).href);
  const routes = getPrerenderPaths();

  let failed = 0;
  for (const [i, route] of routes.entries()) {
    try {
      const { html: appHtml, helmet } = render(route);

      let pageHtml = templateHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      if (helmet) {
        const titleStr = helmet.title?.toString() || '';
        if (titleStr) pageHtml = pageHtml.replace(/<title>.*?<\/title>/is, titleStr);

        for (const re of HELMET_MANAGED) pageHtml = pageHtml.replace(re, '');

        const headAdditions = [helmet.meta, helmet.link, helmet.script]
          .map((t) => t?.toString() || '')
          .filter(Boolean)
          .join('\n    ');
        if (headAdditions) pageHtml = pageHtml.replace('</head>', `    ${headAdditions}\n  </head>`);
      }

      const targetFile =
        route === '/'
          ? path.join(DIST_PATH, 'index.html')
          : path.join(DIST_PATH, `${route === '/404' ? '404' : route.slice(1)}.html`);
      fs.mkdirSync(path.dirname(targetFile), { recursive: true });
      fs.writeFileSync(targetFile, pageHtml, 'utf-8');
      console.log(`✅ [${i + 1}/${routes.length}] ${route}`);
    } catch (err) {
      failed++;
      console.error(`❌ Error rendering route ${route}:`, err);
    }
  }

  fs.rmSync(path.dirname(SSR_PATH), { recursive: true, force: true });

  if (failed) {
    console.error(`🛑 ${failed} route(s) failed to prerender.`);
    process.exit(1);
  }
  console.log(`🏁 Prerendered ${routes.length} pages.`);
}

generateSSG();
