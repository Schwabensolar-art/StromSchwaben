import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Jede Faktenaussage braucht eine Quelle. Ohne Quellen bricht der Build ab. */
const quelle = z.object({
  titel: z.string(),
  url: z.url(),
  herausgeber: z.string(),
  datum: z.coerce.date().optional(),
});

export const KATEGORIEN = [
  'Strompreis & Tarife',
  'Heizung & Wärmepumpe',
  'Förderung',
  'Photovoltaik & Speicher',
  'Politik & Recht',
  'E-Mobilität',
] as const;

export const AUTOREN = {
  anton: { name: 'Anton Reuter', rolle: 'Mitgründer StromSchwaben' },
  manuel: { name: 'Manuel Langendörfer', rolle: 'Mitgründer StromSchwaben' },
  redaktion: { name: 'Redaktion StromSchwaben', rolle: 'Wissensredaktion' },
} as const;

const ratgeber = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ratgeber' }),
  schema: z.object({
    titel: z.string().max(80),
    beschreibung: z.string().min(80).max(170),
    kategorie: z.enum(KATEGORIEN),
    autor: z.enum(['anton', 'manuel', 'redaktion']).default('redaktion'),
    veroeffentlicht: z.coerce.date(),
    aktualisiert: z.coerce.date().optional(),
    geprueft: z.coerce.date(),
    kurzfassung: z.array(z.string()).min(2).max(5),
    quellen: z.array(quelle).min(2),
    lexikon: z.array(reference('lexikon')).default([]),
    faq: z.array(z.object({ frage: z.string(), antwort: z.string() })).default([]),
    entwurf: z.boolean().default(false),
  }),
});

const lexikon = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lexikon' }),
  schema: z.object({
    begriff: z.string(),
    kurz: z.string().max(200),
    synonyme: z.array(z.string()).default([]),
    verwandt: z.array(reference('lexikon')).default([]),
    quellen: z.array(quelle).default([]),
    geprueft: z.coerce.date(),
  }),
});

const mythen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mythen' }),
  schema: z.object({
    mythos: z.string(),
    urteil: z.enum(['falsch', 'teilweise richtig', 'richtig']),
    kurz: z.string().max(220),
    illustration: z.enum(['heizung', 'netz', 'co2', 'winter', 'smartmeter', 'speicher', 'altbau', 'energiebilanz', 'recycling', 'alterung', 'balkon', 'eauto', 'laerm', 'brand', 'dynamisch', 'rabatt', 'ostwest']),
    veroeffentlicht: z.coerce.date(),
    geprueft: z.coerce.date(),
    quellen: z.array(quelle).min(1),
  }),
});

const foerderung = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/foerderung' }),
  schema: z.object({
    name: z.string(),
    traeger: z.string(),
    ebene: z.enum(['Bund', 'Land', 'Kommune']),
    gebiet: z.string(),
    art: z.enum(['Zuschuss', 'Kredit', 'Steuervorteil', 'Kredit mit Zuschuss']),
    fuer: z.array(z.string()).min(1),
    kurz: z.string().max(220),
    hoehe: z.string(),
    status: z.enum(['offen', 'Mittel ausgeschöpft', 'Änderung angekündigt', 'beendet']),
    hinweis: z.string().optional(),
    antrag: z.url(),
    geprueft: z.coerce.date(),
    quellen: z.array(quelle).min(1),
  }),
});

export const collections = { ratgeber, lexikon, mythen, foerderung };
