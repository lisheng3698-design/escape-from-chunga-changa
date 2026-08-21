# Escape from Chunga Changa — Post-launch SEO audit

Audit date: 2026-08-21 (Asia/Shanghai)

## Release verified

- Launch date: `2026-08-21`
- Canonical production URL: <https://www.escapefromchungachanga.com/>
- Apex behavior: <https://escapefromchungachanga.com/> returns HTTPS `301` to the canonical `www` URL
- Cloudflare Pages project: `escapefromchungachanga-com`
- Production preview: <https://escapefromchungachanga-com.pages.dev/>
- GitHub production branch: `main`
- Audited site commit: `649dcd5` (official-link release)
- Cloudflare deployment status: `success`
- Cloudflare custom domain: `www.escapefromchungachanga.com` — `active`
- Authoritative DNS: Spaceship (`launch1.spaceship.net`, `launch2.spaceship.net`)
- DNS layout: Spaceship CNAME `www` to `escapefromchungachanga-com.pages.dev`; apex uses Spaceship FreeSSL 301 redirect

Production route checks passed: homepage `200`, how-to-play `200`, about `200`, contact `200`, privacy `200`, terms `200`, robots `200`, sitemap `200`, the IndexNow key file `200`, and an unknown path `404`. The deployed homepage contains no iframe and its play calls-to-action open the public Yandex Games page in a new tab. Production CSP now sets `frame-src 'none'`.

## Production Lighthouse (mobile)

Fetched from the canonical custom domain at `2026-08-21T12:34:47.507Z`.

| Category | Score |
| --- | ---: |
| SEO | **100** |
| Accessibility | **100** |
| Best Practices | **100** |
| Performance | 92 |

Canonical, crawlability, HTTP status and robots audits all passed. SEO, Accessibility and Best Practices each reached 100. Performance is a separate category and is not represented by the SEO score.

## Web.Cafe / 哥飞 keyword baseline

| Field | Result |
| --- | --- |
| Keyword | `escape from chunga changa` |
| Source | 普通任务 |
| Market | US / English |
| Web.Cafe KD | **53 / 100 — 中等** |
| Keyword type | `generic` |
| Search volume | API 未返回 |
| Trend | API 未返回 |
| Quality referring-domain budget | 70–150 (midpoint 100) |
| Directory-style budget | 240–590 (midpoint 390) |
| Cache | Hit; still counted as one API query |
| Ahrefs | 默认跳过（用户未要求） |
| Review status | 部分复核 |

The score is ranking difficulty, not a website quality percentage. A score of 100 would mean extremely difficult competition, so it is not a target to optimize toward.

Decisive competition signals:

- The first six Web.Cafe results are dedicated inner pages; the query is already contested by Google Play, Playhop, YouTube, Kiz10 and Miniplay.
- The weakest enriched result in that snapshot is still `playhop.com` at DR 62.
- The SERP favors dedicated play or store pages. Without a distribution license, this site uses the safer product form: original guidance plus a clearly labeled link to the official Yandex Games destination.
- A new exact-match domain can satisfy the intent well, but rankings should not be promised without search-demand validation, indexing and sustained link acquisition.

## Six-gate decision

| Gate | Status | Evidence |
| --- | --- | --- |
| Search volume and trend | `data_gap` | Web.Cafe returned neither field; no value was fabricated. |
| Non-brand and suitable intent | `passed` | Web.Cafe classified the keyword as `generic`; intent is browser play plus game information. |
| Current SERP has a stealable position | `data_gap` | No paid DataForSEO refresh was requested; the cached Web.Cafe baseline shows a difficult, platform-heavy SERP. |
| Competition cost is bearable | `failed` for short-term top-10 expectations | KD 53 and 70–150 quality referring domains are too costly for a brand-new site to treat as a quick win. |
| Product/page truly satisfies intent | `partial` | The page satisfies guide and official-navigation intent with fast-start instructions, tips, FAQs and clear disclosure. It intentionally does not satisfy on-site play intent because the owner has not authorized embedding. |
| Final selection | `conditional` | Keep the site live as a focused game property, but treat ranking as a medium-term content and link-building project. |

Target-site assignment: **EDM独立站** (independent game-guide site, high confidence).

## Data-channel consumption

- Web.Cafe: 1 keyword queried; 1 success; 0 failures; 1 cache hit.
- Ahrefs: skipped by default because the user did not request manual Ahrefs verification.
- DataForSEO: not queried for this ordinary post-launch task.
- SEM / SIM: not queried.
- Google allintitle / Trends calibration: not queried; search-volume and trend remain explicit gaps.
- Lighthouse: one local external-link mobile run plus one production external-link mobile run; final production scores are reported above.

Raw evidence is saved in `gefei-web-cafe-kd-2026-08-21.json`; Lighthouse JSON artifacts remain local and are intentionally ignored by Git.

## Discovery and indexing submissions

- `robots.txt` advertises the canonical XML sitemap.
- The sitemap contains the three indexable canonical URLs: homepage, how-to-play and about.
- A root-level IndexNow key file was deployed and verified with production HTTP `200`.
- The homepage IndexNow request returned HTTP `202` (accepted while key validation was pending).
- Subsequent how-to-play and about IndexNow requests returned HTTP `200`, confirming successful key validation and URL receipt.
- IndexNow submission was sent through Bing's official endpoint and is shared with participating IndexNow search engines.
- Google Search Console currently reports that the signed-in account has not verified the new domain property. Sitemap submission and individual Google indexing requests remain pending DNS TXT ownership verification; they must not be reported as completed or indexed yet.

Submission means the crawler has been notified. It does not guarantee that a search engine has already crawled, indexed or ranked the URL.
