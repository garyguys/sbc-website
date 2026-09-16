// Writes public/sitemap.xml from the data files, so every member profile and
// resource article is listed for search engines. Runs automatically before
// `npm run build` (see package.json). No need to edit by hand.
import { writeFileSync } from 'node:fs';
import { members } from '../src/data/members.js';
import { publishedResources } from '../src/data/resources.js';

const SITE = 'https://www.seniorsbc.com';
const today = new Date().toISOString().slice(0, 10);

const urls = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/directory', priority: '0.9', changefreq: 'weekly' },
    { loc: '/events', priority: '0.8', changefreq: 'weekly' },
    { loc: '/resources', priority: '0.7', changefreq: 'monthly' },
    ...members.map((m) => ({ loc: `/directory/${m.slug}`, priority: '0.8', changefreq: 'monthly' })),
    ...publishedResources().map((r) => ({ loc: `/resources/${r.slug}`, priority: '0.6', changefreq: 'yearly' })),
    { loc: '/privacy', priority: '0.2', changefreq: 'yearly' },
    { loc: '/terms', priority: '0.2', changefreq: 'yearly' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
        (u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
    )
    .join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap: ${urls.length} URLs`);
