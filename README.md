# StromSchwaben

Website und Wissensdatenbank von [stromschwaben.de](https://stromschwaben.de), gebaut mit [Astro](https://astro.build) und veröffentlicht über GitHub Pages.

## Aufbau

| Ordner | Inhalt |
|---|---|
| `public/` | Bestehende Seiten (Startseite, Solar-Rechner, ältere Artikel, Bilder). Werden 1:1 übernommen. |
| `src/content/ratgeber/` | Ratgeber-Artikel als Markdown, erscheinen unter `/wissen/<dateiname>/` |
| `src/content/lexikon/` | Lexikon-Begriffe, unter `/lexikon/<dateiname>/` |
| `src/content/mythen/` | Mythen-Checks, unter `/mythen/<dateiname>/` |
| `src/content/foerderung/` | Förderprogramme, unter `/foerderung/<dateiname>/` |
| `src/content.config.ts` | Pflichtfelder für alle Inhalte (z. B. Quellen, Prüfdatum) |
| `src/pages/`, `src/layouts/`, `src/components/` | Seitenvorlagen und Design |

## Neuen Artikel anlegen

1. Neue Datei in `src/content/ratgeber/`, Dateiname = Adresse, z. B. `balkonkraftwerk-2027.md`
2. Kopf mit den Pflichtfeldern ausfüllen (Vorlage: ein bestehender Artikel). Ohne mindestens zwei Quellen bricht der Build ab.
3. `entwurf: true` setzen, solange der Artikel noch nicht live soll.
4. Text in Markdown schreiben. Quellenverweise im Text: `<sup><a href="#q1">1</a></sup>`
5. Auf `main` übernehmen, die Seite baut sich in 1 bis 2 Minuten automatisch neu.

## Lokal ansehen

```bash
npm install
npm run dev
```

Dann http://localhost:4321/wissen/ öffnen. Mit `npm run build` wird die fertige Seite inklusive Suchindex in `dist/` erzeugt.

## Regeln für Inhalte

- Jede Zahl und jede Rechtsaussage braucht eine Quelle, bevorzugt Gesetz, Behörde oder Förderträger.
- Prüfdatum (`geprueft`) bei jeder Kontrolle aktualisieren. Förderprogramme mindestens alle 90 Tage prüfen; der Build warnt bei älteren Einträgen.
- Nichts als beschlossen darstellen, was noch Entwurf ist.
- Keine Gedankenstriche, keine Emojis, Du-Form.
