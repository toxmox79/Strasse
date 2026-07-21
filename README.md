# Straße · Punktezähler — Build 4.1.0

Sauber neu verpackte Version ohne alte Icon-Dateien.

## Reihenfolge der Spielansicht

1. Aktueller Zug
2. Zugbank und Punkteingabe
3. Spielerübersicht
4. Verlauf

## Änderungen in Build 4.1.0

- Neues reduziertes App-Icon ohne Text und Spielfiguren
- S-förmige Straße, ein Würfel und die Spielerfarben
- Neue versionierte Icon-Dateinamen gegen Browser-/PWA-Cache
- Neuer Service-Worker-Cache `strasse-scorekeeper-v4-1`
- Zielpunktzahl frei editierbar, Standard 10.000
- Straßenwert frei editierbar, Standard 3.500
- Spieleranzahl ohne feste Obergrenze
- „+ Mitspieler hinzufügen“ direkt unter den Spielernamen

## Veröffentlichung

Den vollständigen Inhalt dieses Ordners auf GitHub Pages hochladen. Bei einer bereits installierten älteren PWA die App einmal schließen und neu öffnen. Durch die neuen Dateinamen werden alte Icons nicht wiederverwendet.

## Lokal starten

```bash
cd strasse-punktezaehler
python3 -m http.server 8080
```
