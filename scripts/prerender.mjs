import puppeteer from 'puppeteer';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_PATH = path.join(__dirname, '../dist');

const ROUTES = [
  '/',
  '/desert-safari',
  '/evening-desert-safari',
  '/evening-safari/standard',
  '/evening-safari/premium',
  '/evening-safari/vip',
  '/morning-safari',
  '/self-drive',
  '/vip-traditional-arabic',
  '/private-desert-setup',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/cancellation-policy',
  '/404'
];

async function prerender() {
  console.log('🚀 Starting Dubai Dune Tours SSG Pre-rendering...');

  if (!fs.existsSync(DIST_PATH)) {
    console.error('❌ Error: dist/ folder not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // Start static file server
  const app = express();
  app.use(express.static(DIST_PATH));
  app.use((req, res) => {
    res.sendFile(path.join(DIST_PATH, 'index.html'));
  });

  const server = app.listen(0);
  const PORT = server.address().port;
  console.log(`📡 Temp server running at http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  try {
    let count = 0;
    for (const route of ROUTES) {
      count++;
      console.log(`📸 [${count}/${ROUTES.length}] Pre-rendering: ${route}`);
      const page = await browser.newPage();

      try {
        // Block heavy tracking and external scripts during build
        await page.setRequestInterception(true);
        page.on('request', (req) => {
          const url = req.url();
          if (
            url.includes('google-analytics') ||
            url.includes('googletagmanager') ||
            url.includes('facebook') ||
            url.includes('connect.facebook.net')
          ) {
            req.abort();
          } else {
            req.continue();
          }
        });

        await page.setViewport({ width: 1440, height: 900 });

        await page.goto(`http://localhost:${PORT}${route}`, {
          waitUntil: ['networkidle0', 'domcontentloaded'],
          timeout: 30000
        });

        // Wait for hydration and React-helmet metadata
        await new Promise(r => setTimeout(r, 400));

        const finalTitle = await page.title();
        let html = await page.content();

        // Ingest dynamic title & meta description into raw static <head>
        if (finalTitle && route !== '/') {
          html = html.replace(/<title>.*?<\/title>/i, `<title>${finalTitle}</title>`);
          try {
            const dynamicDesc = await page.$eval('meta[name="description"]', el => el.getAttribute('content'));
            if (dynamicDesc) {
              html = html.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="description" content="${dynamicDesc}" />`);
              html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:description" content="${dynamicDesc}" />`);
            }
          } catch (e) {}

          html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:title" content="${finalTitle}" />`);
          html = html.replace(/<meta\s+property=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="twitter:title" content="${finalTitle}" />`);
        }

        // Canonical URL
        const cleanRoute = route.length > 1 && route.endsWith('/') ? route.slice(0, -1) : route;
        const canonicalUrl = cleanRoute === '/' ? 'https://dubaidunetours.com/' : `https://dubaidunetours.com${cleanRoute}`;
        
        if (html.includes('<link rel="canonical"')) {
          html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
        } else {
          html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
        }

        // Target file path
        let targetFile;
        if (route === '/') {
          targetFile = path.join(DIST_PATH, 'index.html');
        } else if (route === '/404') {
          targetFile = path.join(DIST_PATH, '404.html');
        } else {
          const targetPath = path.join(DIST_PATH, route);
          const parentDir = path.dirname(targetPath);
          if (!fs.existsSync(parentDir)) {
            fs.mkdirSync(parentDir, { recursive: true });
          }
          targetFile = `${targetPath}.html`;
        }

        fs.writeFileSync(targetFile, html, 'utf-8');
        console.log(`✅ Saved: ${targetFile}`);
      } catch (err) {
        console.error(`⚠️ Error rendering ${route}:`, err.message);
      } finally {
        await page.close();
      }
    }
  } catch (err) {
    console.error('❌ Pre-rendering failed:', err);
  } finally {
    await browser.close();
    server.close();
    console.log('🏁 SSG Pre-rendering finished successfully!');
    process.exit(0);
  }
}

prerender();
