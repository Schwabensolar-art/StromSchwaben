import type { APIRoute } from 'astro';
import { ratgeberListe, ratgeberUrl } from '../../lib/util';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Feed für Newsletter-Automatisierung (z. B. Brevo RSS-Kampagne) und Feed-Reader. */
export const GET: APIRoute = async ({ site }) => {
  const liste = await ratgeberListe();
  const items = liste.map((e) => {
    const link = new URL(ratgeberUrl(e), site).href;
    return `<item><title>${esc(e.data.titel)}</title><link>${link}</link><guid>${link}</guid>` +
      `<pubDate>${e.data.veroeffentlicht.toUTCString()}</pubDate><category>${esc(e.data.kategorie)}</category>` +
      `<description>${esc(e.data.beschreibung)}</description></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel>` +
    `<title>StromSchwaben Wissen</title><link>${new URL('/wissen/', site).href}</link>` +
    `<description>Energiewissen mit Quellen: Förderung, Strompreise, Heizung, Photovoltaik.</description>` +
    `<language>de-de</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
