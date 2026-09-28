# RaadRondje

RaadRondje is een raadspel voor meerdere spelers, speelbaar in je browser en op je telefoon. Het is een PWA, dus je kunt het ook op je beginscherm zetten.

Speel direct online: https://glennbuilds.github.io/RaadSpelletje/

## Lokaal draaien

Je hebt alleen [Node.js](https://nodejs.org/) nodig; er zijn geen dependencies.

```bash
npm start
```

Open daarna http://127.0.0.1:4173. Op je telefoon (op hetzelfde wifi-netwerk) gebruik je `http://<ip-adres-van-deze-mac>:4173`.

De poort en host kun je aanpassen met de omgevingsvariabelen `PORT` en `HOST`.

## Tests

```bash
npm test
```

De tests gebruiken de ingebouwde test runner van Node (`node --test`) en staan in `tests/`.

## Projectstructuur

- `index.html` – startpagina van de app
- `src/main.js` – spellogica en interface
- `src/round-picker.mjs` – kiest per ronde unieke kaarten voor elke speler
- `src/styles.css` – opmaak
- `server.js` – kleine lokale webserver
- `manifest.webmanifest`, `public-sw.js`, `icons/` – PWA-instellingen, service worker en app-iconen
