import { getCollection, type CollectionEntry } from 'astro:content';

export const datum = (d: Date) =>
  d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Berlin' });
export const datumKurz = (d: Date) =>
  d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Europe/Berlin' });
export const isoDatum = (d: Date) => d.toISOString().slice(0, 10);

export const slugify = (s: string) =>
  s.toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/&/g, 'und').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const lesezeit = (text = '') => Math.max(2, Math.round(text.split(/\s+/).length / 200));

/** Veröffentlichte Ratgeber, neueste zuerst. Entwürfe erscheinen nur lokal im Dev-Server. */
export async function ratgeberListe() {
  const alle = await getCollection('ratgeber', ({ data }) => import.meta.env.DEV || !data.entwurf);
  return alle.sort((a, b) => +(b.data.aktualisiert ?? b.data.veroeffentlicht) - +(a.data.aktualisiert ?? a.data.veroeffentlicht));
}

export const ratgeberUrl = (e: CollectionEntry<'ratgeber'>) => `/wissen/${e.id}/`;

/** Warnt im Build, wenn ein Eintrag länger als `tage` nicht geprüft wurde. */
export function pruefAlter(geprueft: Date, tage = 90) {
  return (Date.now() - +geprueft) / 864e5 > tage;
}
