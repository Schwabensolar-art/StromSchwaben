---
titel: "Wie viel Strom bringt eine Solaranlage in der Region Stuttgart?"
beschreibung: "Eigene Berechnung mit PVGIS für Filderstadt, Stuttgart, Esslingen und Karlsruhe: Jahresertrag pro kWp nach Monat, Ausrichtung und Dachneigung."
kategorie: "Photovoltaik & Speicher"
autor: redaktion
veroeffentlicht: 2026-11-18
geprueft: 2026-11-18
kurzfassung:
  - "Eine nach Süden ausgerichtete Anlage mit 35 Grad Neigung erzeugt in der Region Stuttgart rund 1.130 bis 1.150 kWh pro kWp und Jahr. Eine 10-kWp-Anlage kommt damit auf etwa 11.500 kWh."
  - "Ost- und Westdächer liefern bei 30 Grad Neigung rund 80 Prozent des bestmöglichen Ertrags, flache Ost-West-Anlagen mit 15 Grad sogar 82 Prozent."
  - "Von November bis Februar entstehen nur 18 Prozent des Jahresertrags, von April bis September zwei Drittel."
  - "Von Jahr zu Jahr schwankt der Ertrag typischerweise um rund 6 Prozent nach oben oder unten."
quellen:
  - titel: "PVGIS 5.3: Photovoltaic Geographical Information System (Berechnung vom 18.11.2026)"
    url: "https://re.jrc.ec.europa.eu/pvg_tools/de/"
    herausgeber: "Gemeinsame Forschungsstelle (JRC) der Europäischen Kommission"
    datum: 2026-11-18
  - titel: "Aktuelle Fakten zur Photovoltaik in Deutschland"
    url: "https://www.ise.fraunhofer.de/de/veroeffentlichungen/studien/aktuelle-fakten-zur-photovoltaik-in-deutschland.html"
    herausgeber: "Fraunhofer ISE"
    datum: 2026-11-11
  - titel: "PVGIS-Dokumentation: Berechnung der PV-Leistung"
    url: "https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis/getting-started-pvgis/pvgis-user-manual_en"
    herausgeber: "Gemeinsame Forschungsstelle (JRC) der Europäischen Kommission"
lexikon: [kwp, spezifischer-ertrag, globalstrahlung, performance-ratio, eigenverbrauch]
faq:
  - frage: "Wie viel kWh bringt 1 kWp in Baden-Württemberg?"
    antwort: "In der Region Stuttgart und in Karlsruhe sind es bei Südausrichtung und 30 bis 45 Grad Neigung rund 1.130 bis 1.150 kWh pro Jahr. Bei Ost- oder Westausrichtung sind es etwa 880 bis 950 kWh, je nach Neigung."
  - frage: "Lohnt sich eine Solaranlage auf einem Norddach?"
    antwort: "Bei flacher Neigung um 15 Grad bringt ein Norddach noch rund 69 Prozent des bestmöglichen Ertrags. Ab 30 Grad Neigung sinkt der Wert auf etwa die Hälfte. Ob sich das rechnet, hängt vom Preis und vom Eigenverbrauch ab."
  - frage: "Was ist die beste Dachneigung für Photovoltaik?"
    antwort: "Laut unserer PVGIS-Berechnung für Filderstadt liegt das Optimum bei Süd mit 39 Grad. Zwischen 30 und 45 Grad liegt der Ertrag aber fast gleich hoch, die Unterschiede betragen nur rund ein Prozent."
---

Wie viel Strom eine Solaranlage erzeugt, hängt vor allem von drei Dingen ab: wie viel Sonne am Standort ankommt, in welche Himmelsrichtung das Dach zeigt und wie steil es ist. Statt mit bundesweiten Durchschnittswerten zu arbeiten, haben wir die Erträge für unsere Region selbst berechnet.

## So haben wir gerechnet

Grundlage ist **PVGIS**, das frei zugängliche Berechnungswerkzeug der Gemeinsamen Forschungsstelle der Europäischen Kommission.<sup><a href="#q1">1</a></sup> PVGIS nutzt Satellitendaten zur Sonneneinstrahlung und Wetterdaten aus den Jahren **2005 bis 2023** und berücksichtigt den Horizont am Standort, also zum Beispiel Hügel, die die Sonne früher verdecken.

Unsere Annahmen:

- **1 kWp** Modulleistung mit kristallinen Siliziummodulen, damit sich die Ergebnisse auf jede Anlagengröße hochrechnen lassen
- **14 Prozent Systemverluste**, der Standardwert von PVGIS für Kabel, Wechselrichter, Verschmutzung und Alterung<sup><a href="#q3">3</a></sup>
- Standorte: Filderstadt, Stuttgart, Esslingen und Karlsruhe, jeweils Ortsmitte

Das Ergebnis heißt **[spezifischer Ertrag](/lexikon/spezifischer-ertrag/)**: Kilowattstunden pro kWp und Jahr. Wer den Wert mit der Größe seiner Anlage malnimmt, bekommt den erwarteten Jahresertrag.

## Ergebnis: rund 1.140 kWh pro kWp

Bei Südausrichtung und 35 Grad Dachneigung kommen wir auf diese Werte:

| Standort | Süd, 35° | West, 35° | West im Vergleich zu Süd |
|---|---|---|---|
| Filderstadt | 1.150 kWh/kWp | 897 kWh/kWp | 78 % |
| Stuttgart | 1.126 kWh/kWp | 881 kWh/kWp | 78 % |
| Esslingen | 1.129 kWh/kWp | 881 kWh/kWp | 78 % |
| Karlsruhe | 1.136 kWh/kWp | 893 kWh/kWp | 79 % |

Die vier Orte liegen nur rund zwei Prozent auseinander. Für die Planung spielt der genaue Ort in der Region also eine kleinere Rolle als das eigene Dach.

**Beispiel:** Eine Anlage mit 10 kWp auf einem Süddach in Filderstadt erzeugt im Mittel rund **11.500 kWh im Jahr**.

## Welche Rolle Ausrichtung und Neigung spielen

Die folgende Tabelle zeigt den Jahresertrag in kWh pro kWp für Filderstadt. In Klammern steht der Anteil am bestmöglichen Ertrag, den PVGIS bei **Süd mit 39 Grad** errechnet (1.152 kWh/kWp).

| Ausrichtung | 15° | 30° | 45° | 60° | 90° (Fassade) |
|---|---|---|---|---|---|
| Süd | 1.079 (94 %) | 1.142 (99 %) | 1.148 (100 %) | 1.094 (95 %) | 817 (71 %) |
| Südost | 1.043 (91 %) | 1.082 (94 %) | 1.075 (93 %) | 1.018 (88 %) | 764 (66 %) |
| Südwest | 1.039 (90 %) | 1.074 (93 %) | 1.062 (92 %) | 1.002 (87 %) | 749 (65 %) |
| Ost | 951 (82 %) | 924 (80 %) | 875 (76 %) | 799 (69 %) | 573 (50 %) |
| West | 945 (82 %) | 911 (79 %) | 860 (75 %) | 783 (68 %) | 559 (48 %) |
| Nord | 800 (69 %) | 643 (56 %) | 492 (43 %) | 362 (31 %) | 200 (17 %) |

Ganz flach liegende Module (0 Grad) bringen 961 kWh/kWp, also 83 Prozent.

Was die Zahlen zeigen:

- **Das Optimum ist breit.** Zwischen 30 und 45 Grad Neigung liegt ein Süddach nahezu gleichauf. Auch Südost und Südwest verlieren nur 6 bis 7 Prozent.
- **Ost und West funktionieren gut,** vor allem bei flacher Neigung. Bei 15 Grad bringen sie 82 Prozent des Bestwerts. Das Fraunhofer ISE kommt mit eigener PVGIS-Rechnung für Freiburg auf ein ähnliches Bild: Ein Westdach mit 45 Grad liefert dort rund 26 Prozent weniger als ein Süddach.<sup><a href="#q2">2</a></sup> Bei uns sind es 25 Prozent.
- **Je steiler, desto stärker zählt die Richtung.** Bei 15 Grad trennen Süd und Nord 25 Prozentpunkte, bei 45 Grad schon 57.
- **Fassaden** bringen in Südrichtung noch 71 Prozent. Dafür erzeugen sie im Winter bei tief stehender Sonne vergleichsweise viel.

Ein Ost-West-Dach liefert zwar weniger Strom pro Modul, verteilt die Erzeugung aber auf Morgen und Nachmittag. Das passt oft besser zum Verbrauch im Haushalt. Mehr dazu steht im Faktencheck [Bringt ein Ost- oder Westdach weniger?](/mythen/ost-west-dach-weniger-ertrag/)

## Der Ertrag im Jahresverlauf

So verteilt sich der Ertrag eines Süddachs mit 35 Grad in Filderstadt auf die Monate, in kWh pro kWp:

| Monat | kWh/kWp | Monat | kWh/kWp |
|---|---|---|---|
| Januar | 46 | Juli | 136 |
| Februar | 66 | August | 124 |
| März | 105 | September | 111 |
| April | 122 | Oktober | 83 |
| Mai | 127 | November | 53 |
| Juni | 133 | Dezember | 44 |

Von **April bis September** entstehen rund **zwei Drittel** des Jahresertrags. Die vier Wintermonate November bis Februar steuern zusammen **18 Prozent** bei. Im Dezember erzeugt die Anlage etwa ein Drittel dessen, was sie im Juli schafft. Warum eine Solaranlage im Winter trotzdem nicht nutzlos ist, erklärt unser Faktencheck [Bringt eine Solaranlage im Winter nichts?](/mythen/solaranlage-winter-bringt-nichts/)

## Wie stark der Ertrag von Jahr zu Jahr schwankt

PVGIS gibt auch an, wie sehr die Jahreserträge zwischen 2005 und 2023 voneinander abwichen. Für Filderstadt beträgt die Standardabweichung **67 kWh pro kWp**, also knapp **6 Prozent**. Ein sonniges Jahr kann deshalb spürbar über dem Mittelwert liegen, ein trübes darunter. Wirtschaftlichkeitsrechnungen sollten deshalb mit Mittelwerten über viele Jahre arbeiten und nicht mit dem Ertrag eines einzelnen Sommers.

## Was die Rechnung nicht abbildet

PVGIS rechnet mit einem freien Dach. Diese Punkte kann nur eine Planung vor Ort erfassen:

- **Verschattung** durch Bäume, Nachbargebäude, Gauben oder Kamine. Sie kann den Ertrag deutlich senken.
- **Die tatsächliche Anlagenqualität.** Das Fraunhofer ISE nennt für neue Anlagen eine [Performance Ratio](/lexikon/performance-ratio/) von 80 bis 90 Prozent im Jahresmittel.<sup><a href="#q2">2</a></sup> Das entspricht ungefähr den Verlusten, mit denen wir gerechnet haben, kann im Einzelfall aber abweichen.
- **Abregelung.** Neue Anlagen dürfen bei negativen Strompreisen oder zur Netzentlastung zeitweise begrenzt werden. Wie das funktioniert, steht im Artikel zum [Solarspitzengesetz](/solarspitzengesetz-2026-pv-anlage.html).

## Einordnung

Laut Fraunhofer ISE liegt die mittlere [Globalstrahlung](/lexikon/globalstrahlung/) in Deutschland bei 1.102 kWh pro Quadratmeter und Jahr, gemessen vom Deutschen Wetterdienst für 2001 bis 2020. Je nach Standort weicht sie um rund 10 Prozent nach oben oder unten ab.<sup><a href="#q2">2</a></sup> PVGIS ermittelt für Filderstadt auf Basis anderer Satellitendaten rund 1.230 kWh pro Quadratmeter. Beide Werte sind wegen der unterschiedlichen Datengrundlage nicht eins zu eins vergleichbar. Sie zeigen aber, dass die Region Stuttgart zu den sonnigeren Gegenden Deutschlands gehört.

Wer seinen eigenen Wert ausrechnen möchte, kann PVGIS kostenlos selbst nutzen. Eine erste Abschätzung inklusive Ersparnis liefert auch unser [Solar-Rechner](/solar-rechner.html).
