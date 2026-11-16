import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { readdirSync, readFileSync } from 'node:fs';
import { ratgeberListe, ratgeberUrl, isoDatum } from '../lib/util';

/** Sitemap aus den statischen Altseiten in /public und allen Wissens-Sammlungen. */
export const GET: APIRoute = async ({ site }) => {
  const urls: [string, string][] = [];
  for (const f of readdirSync('public').filter((f) => f.endsWith('.html'))) {
    const html = readFileSync(`public/${f}`, 'utf-8');
    if (html.includes('noindex')) continue;
    const m = html.match(/"dateModified":\s*"(\d{4}-\d{2}-\d{2})/) ?? html.match(/"datePublished":\s*"(\d{4}-\d{2}-\d{2})/);
    urls.push([f === 'index.html' ? '/' : `/${f}`, m?.[1] ?? '']);
  }
  const heute = isoDatum(new Date());
  for (const p of ['/wissen/', '/wissen/ratgeber/', '/lexikon/', '/mythen/', '/foerderung/', '/wissen/so-arbeiten-wir/']) urls.push([p, heute]);
  for (const e of await ratgeberListe()) if (!e.data.entwurf) urls.push([ratgeberUrl(e), isoDatum(e.data.aktualisiert ?? e.data.veroeffentlicht)]);
  for (const e of await getCollection('lexikon')) urls.push([`/lexikon/${e.id}/`, isoDatum(e.data.geprueft)]);
  for (const e of await getCollection('mythen')) urls.push([`/mythen/${e.id}/`, isoDatum(e.data.geprueft)]);
  for (const e of await getCollection('foerderung')) urls.push([`/foerderung/${e.id}/`, isoDatum(e.data.geprueft)]);

  const body = urls.map(([p, d]) => `<url><loc>${new URL(p, site).href}</loc>${d ? `<lastmod>${d}</lastmod>` : ''}</url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
