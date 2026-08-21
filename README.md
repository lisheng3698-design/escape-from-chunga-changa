# Escape from Chunga Changa

Static English-language play-and-guide site for `escapefromchungachanga.com`.

## Local preview

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Deployment

The site is designed for Cloudflare Pages with no build command and the repository root as the output directory.

The public provider page is:

```html
<iframe src="https://yandex.com/games/app/563425?language=en"
        width="100%" height="600" frameborder="0" allowfullscreen></iframe>
```

That page currently returns `X-Frame-Options: DENY` / a restrictive `frame-ancestors` policy when framed by a third-party domain. The live player therefore uses the official `app-563425.cdn.games.yandex.net` iframe URL that the Yandex play page itself loads. The public provider page remains the external fallback link.

No login, registration, subscription, payment, database, or first-party analytics module is included.
