# 🍄 Funghi Radar

App Android per la predizione della raccolta funghi basata su GPS, meteo, dati del suolo e segnalazioni web.

---

## Come ottenere l'APK in 5 passi

### 1 — Crea un repository GitHub
- Vai su [github.com/new](https://github.com/new)
- Nome: `funghi-radar`
- Visibilità: **Public** (necessario per Actions gratuite)
- Non aggiungere README né .gitignore
- Clicca **Create repository**

### 2 — Carica questi file
Nella pagina del repository appena creato:
- Clicca **uploading an existing file**
- Trascina **tutti i file e cartelle** di questo zip
- Scrivi come commit message: `Initial commit`
- Clicca **Commit changes**

> ⚠️ La cartella `.github/` deve essere inclusa — contiene la GitHub Action che compila l'APK.

### 3 — Attendi la compilazione
- Vai alla tab **Actions** del repository
- Vedrai un workflow "Build APK" in esecuzione (circa 5-8 minuti)
- Aspetta che diventi verde ✅

### 4 — Scarica l'APK
Nella tab **Releases** (colonna destra della pagina principale del repo) trovi il file `app-debug.apk`.

In alternativa: tab **Actions** → clicca sul workflow completato → sezione **Artifacts** → scarica `funghi-radar-debug`.

### 5 — Installa su Android
1. Trasferisci l'APK sul telefono (WhatsApp, email, cavo USB, Google Drive…)
2. Apri il file dal file manager
3. Se richiesto: **Impostazioni → Sicurezza → Origini sconosciute → Abilita** (solo per questa installazione)
4. Conferma l'installazione

---

## Primo avvio

1. Apri **Funghi Radar**
2. Inserisci la tua **API key Anthropic** nella barra in cima  
   (ottienila su [console.anthropic.com](https://console.anthropic.com) → API Keys)
3. Vai nel tab **Terreno** e seleziona la vegetazione della tua zona
4. Premi **Rileva posizione** — l'app farà il resto

---

## Aggiornare l'app

Per aggiornare dopo modifiche all'`index.html`:
1. Carica il nuovo `www/index.html` su GitHub (sostituzione del file)
2. La GitHub Action si rilancia automaticamente
3. Scarica il nuovo APK dalla tab Releases

---

## Note
- L'APK è **debug** (non firmato per il Play Store) — funziona perfettamente per uso personale
- I dati GPS, meteo (Open-Meteo) e suolo (SoilGrids) non richiedono API key
- Solo le funzioni AI e ricerca web usano la API key Anthropic
- I luoghi preferiti sono salvati localmente sul dispositivo
