# Escape from Chunga Changa

Static English-language guide site for `escapefromchungachanga.com`, with clearly labeled external links to the official game page on Yandex Games.

## Local preview

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Deployment

The site is designed for Cloudflare Pages with no build command and the repository root as the output directory.

The game is not hosted or embedded by this project. Every play call-to-action opens the public provider page in a new tab:

`https://yandex.com/games/app/escape-from-chunga-changa-563425?language=en`

This external-link approach avoids implying a distribution license and keeps game delivery, accounts, advertising, purchases, progress, and platform data handling on Yandex Games.

No login, registration, subscription, payment, database, or first-party analytics module is included.
