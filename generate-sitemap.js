// Dynamic XML Sitemap Generator for Riyadh Movers Services
// Generates production-ready, W3C-compliant sitemap.xml in public/

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { RIYADH_LOCATIONS } from './src/data/locationsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://riyadhmovers.sa';
const TODAY = new Date().toISOString().split('T')[0];

const corePages = [
  {
    url: `${BASE_URL}/`,
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    url: `${BASE_URL}/#services`,
    changefreq: 'weekly',
    priority: '0.90'
  },
  {
    url: `${BASE_URL}/#calculator`,
    changefreq: 'weekly',
    priority: '0.90'
  },
  {
    url: `${BASE_URL}/#areas`,
    changefreq: 'weekly',
    priority: '0.90'
  },
  {
    url: `${BASE_URL}/#gallery`,
    changefreq: 'weekly',
    priority: '0.80'
  },
  {
    url: `${BASE_URL}/#contact`,
    changefreq: 'weekly',
    priority: '0.80'
  }
];

const districtPages = RIYADH_LOCATIONS.map((loc) => ({
  url: `${BASE_URL}/${loc.slug}`,
  changefreq: 'weekly',
  priority: '0.85'
}));

const allUrls = [...corePages, ...districtPages];

const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xmlContent.trim() + '\n', 'utf-8');

console.log(`✅ Successfully generated sitemap.xml with ${allUrls.length} URLs at: ${outputPath}`);
