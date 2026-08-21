# Escape from Chunga Changa — Post-launch SEO audit

Audit date: 2026-08-21 (Asia/Shanghai)

## Release verified

- Cloudflare Pages project: `escapefromchungachanga-com`
- Production preview: <https://escapefromchungachanga-com.pages.dev/>
- GitHub production branch: `main`
- Audited commit: `2fd8dcaa1bf34fe0f72b3529f131f9a98dd494f4`
- Cloudflare deployment status: `success`

## Production Lighthouse (mobile)

Fetched from the deployed `pages.dev` production URL at `2026-08-21T09:34:05.778Z`.

| Category | Score |
| --- | ---: |
| SEO | **100** |
| Accessibility | **100** |
| Best Practices | **100** |
| Performance | 71 |

Canonical, crawlability, HTTP status and robots audits all passed. The performance score includes the third-party Yandex game iframe and live network conditions; it is separate from the SEO score.

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
- The correct page form is a dedicated playable page with original supporting guidance, which the launched site now provides.
- A new exact-match domain can satisfy the intent well, but rankings should not be promised without search-demand validation, indexing and sustained link acquisition.

## Six-gate decision

| Gate | Status | Evidence |
| --- | --- | --- |
| Search volume and trend | `data_gap` | Web.Cafe returned neither field; no value was fabricated. |
| Non-brand and suitable intent | `passed` | Web.Cafe classified the keyword as `generic`; intent is browser play plus game information. |
| Current SERP has a stealable position | `data_gap` | No paid DataForSEO refresh was requested; the cached Web.Cafe baseline shows a difficult, platform-heavy SERP. |
| Competition cost is bearable | `failed` for short-term top-10 expectations | KD 53 and 70–150 quality referring domains are too costly for a brand-new site to treat as a quick win. |
| Product/page truly satisfies intent | `passed` | The page supplies the playable Yandex game, fast-start instructions, tips, FAQs and clear independent-site disclosure. |
| Final selection | `conditional` | Keep the site live as a focused game property, but treat ranking as a medium-term content and link-building project. |

Target-site assignment: **EDM独立站** (game/play-and-guide site, high confidence).

## Data-channel consumption

- Web.Cafe: 1 keyword queried; 1 success; 0 failures; 1 cache hit.
- Ahrefs: skipped by default because the user did not request manual Ahrefs verification.
- DataForSEO: not queried for this ordinary post-launch task.
- SEM / SIM: not queried.
- Google allintitle / Trends calibration: not queried; search-volume and trend remain explicit gaps.
- Lighthouse: two local verification runs plus one production mobile run; final production scores are reported above.

Raw evidence is saved in `gefei-web-cafe-kd.json` and the local Lighthouse JSON artifacts.
