# Straße · Punktezähler

Eigenständige, installierbare Webapp zum Punktezählen beim Würfelspiel Straße.

## Funktionen

- Beliebig viele Mitspieler
- Eigene, dauerhaft sichtbare Farbe pro Spieler
- Schaltfläche **+ Mitspieler hinzufügen** direkt unter der Namensliste
- Zielpunktzahl frei manuell einstellbar; Standard: **10.000 Punkte**
- Straßenwert frei manuell einstellbar; Standard: **3.500 Punkte**
- Zugbank, Niete, Undo und automatischer Spielerwechsel
- Optionaler Mindesteintritt und exakte Zielregel
- Helles und dunkles Design
- Vollbildmodus, PWA-Installation und Offline-Nutzung
- Lokale Speicherung ohne Datenübertragung

## Lokal starten

```bash
cd strasse-punktezaehler
python3 -m http.server 8080
```

Danach `http://localhost:8080` öffnen.
