# Current-State Audit — Personal Portfolio

**Date:** 2026-07-31
**Auditor:** Automated + manual code review (Claude Code)
**Baseline commit:** `df4a7eb`
**Method:** Full source review of `index.html` (1,495 lines), `Js/app.js` (314 lines), 10 CSS files (~2,900 lines), plus Lighthouse 12 run against a local server (`python3 -m http.server`, Chrome headless, mobile emulation). Real-network scores will be *worse* than these because the CDN request chain adds latency a localhost run doesn't measure.

This document is the baseline the redesign is measured against (brief §2).

---

## 0. CRITICAL — Security (found during audit, outside brief headings)

### 0.1 GitHub personal access token committed to a public repository
`Js/app.js:249` contains a hardcoded PAT (`ghp_YD1x…`) used to call the GitHub API from the browser. It is public to anyone who views source or the repo history.

**Action required immediately, before any redesign work:** revoke the token at github.com → Settings → Developer settings → Personal access tokens; then remove it from code. Because it is in git history, removal from the working tree alone is not sufficient — treat the token as burned regardless.

### 0.2 Client-side GitHub API crawl on every page load
`Js/app.js:227-284` (`fetchTotalCommits`) paginates commits across **18 repositories** on every visit — dozens of sequential network requests to render one vanity number. This burns rate limit, delays interactivity, and is why a token ended up in client code at all. The commit count must be computed at build time, not in the visitor's browser.

---

## 2.1 Visual design reads as templated / generic / amateur

- **Hero is a wall of clichés:** "Hello, my name is" + typed.js rotating job titles (`index.html:131-133`) is the single most copied developer-portfolio pattern in existence. It communicates "followed a YouTube tutorial," not "senior professional."
- **A `<marquee>` element** (`index.html:140-143`) — deprecated since HTML 4.01 — scrolls a "website is being updated" apology across the hero. First impression: unfinished.
- **Stat counters animate from 0 with `data-target="0"`** (`index.html:190-194`): "0 Years of Experience, 0 Projects Completed" is what renders if JS fails, and the numbers are fake-precise vanity metrics either way.
- **Three different icon systems load simultaneously** — Font Awesome (three separate ways: `index.html:27, 44, 52`), Boxicons (`:32`), and Unicons (`:37`). No single visual voice.
- **Coverflow certificate carousel** (Swiper `coverflow` effect, `app.js:143-160`) presents school attendance/behaviour certificates with the same weight as professional credentials — an aesthetic and positioning misstep.
- **One Google Font (Montserrat), one weight, loaded render-blocking from Google's CDN** (`index.html:49`): no typographic hierarchy, no display/body pairing, FOUT on load.

## 2.2 Unstructured, unmaintainable, duplicated front-end code

- **No build system.** `package.json` declares a single dependency (`swiper@^12.1.2`) that is **never used** — the page loads Swiper **4.5.1** from a CDN instead (`index.html:11`, `index.html:1489`). The npm dependency and the shipped library are eight major versions apart.
- **Dead references shipped to production:** `/css/cv.css` (`index.html:20`) → **404** (file does not exist); `/js/isotope.pkgd.min.js` (`index.html:1490`) → **404**. Verified against a local server.
- **jQuery 3.6.0 loaded** (`index.html:39`) but `app.js` contains zero jQuery usage.
- **Invalid HTML:** `<link rel="icon">` placed *before* `<head>` (`index.html:3`); `<a>` elements nested inside `<button>` (`index.html:146-155`, repeated ×4); `target` attribute misused as a URL (`target="https://github.com/…"`, `index.html:160`); malformed color values `rgba(255, 255, 255, 0.8` missing the closing paren (`index.html:74` and every nav icon).
- **Global-scope collisions:** `var typed` declared twice (`app.js:77`, `app.js:90`); implicit global `i` in the inline skills script (`index.html:980`); logic split between `app.js` and an inline `<script>` mid-document (`index.html:972-991`).
- **Unthrottled scroll handler queries the DOM on every scroll event** (`app.js:130-139`) — `document.querySelector` inside the scroll callback.
- **Repository hygiene:** 17 MB of `.mp4` files and 9.4 MB of images tracked in git; seven `.DS_Store` files still tracked despite the recent `.gitignore` commit; folder naming is inconsistent (`Js/`, `css/`, `Projects/Projects CSS/` with a space, `Inventroy` typo) — case-sensitivity landmines for Linux hosting (`/js/…` vs `/Js/…` both referenced: `index.html:1490-1493`).
- **README badges point at the wrong repositories** (`jokes-platform` discussions/stars badges in this repo's README).

## 2.3 Weak information hierarchy

- **There is no `<h1>` for the page identity.** The name "Muhammad Abdullah" is a `<div class="text-2">` (`index.html:132`). Meanwhile *four* `<h1>` elements are spent on skill-group labels ("Frontend development", `index.html:277, 346, 438, 493`) — heading order fails Lighthouse (`heading-order`).
- **The five-second test fails:** the first viewport contains a greeting, a rotating job title, an apology marquee, and four zero-counters. Who this person is and why to hire them is not stated anywhere above the fold.
- **Skills are logo-grid filler, not evidence:** ~20 technologies including Julia, Go, Shell, and "Machine Learning" as a category with no supporting project — exactly the buzzword inflation brief §6.10 bans.
- **Certificates are presented undifferentiated:** GCSE results, school attendance awards, and "Lockdown Legend" certificates sit alongside a BTEC Diploma in one carousel — the strongest credentials are buried by the weakest.
- **Two different contact emails** on one page (`index.html:1430` vs the form action `index.html:1440`).

## 2.4 No narrative or emotional progression

- The page is a stack of disconnected template sections (Home → About → Qualification → Projects → Contact) with **no scroll choreography at all** — one scroll-position class toggle (`app.js:130-139`) is the entire scroll experience.
- `window.onload → scrollTo(0,0)` (`app.js:1-4`) forcibly resets the visitor's scroll position — actively hostile to the browser's own restore behaviour.
- No storyboard, no arc (hook → proof → CTA), no pacing. Section order buries the strongest content (projects) below a certificate carousel.

## 2.5 Inconsistent spacing, typography, colour, components

- **No design tokens.** Zero CSS custom properties for colour, space, or type; values are hard-coded per file (9 stylesheets, ~2,900 lines).
- `css/about.css` alone is 1,267 lines with 17 media queries — per-section breakpoint forks instead of a fluid system.
- 9 uses of `!important` across stylesheets — specificity battles already lost.
- Buttons, cards, and section titles are styled independently in each section's CSS file; there is no shared component layer.

## 2.6 Poor / unmeasured performance, accessibility, responsiveness

**Lighthouse 12, mobile emulation, localhost (real-world will be worse):**

| Category | Score | Target (brief §7.1) |
|---|---|---|
| Performance | **45** | ≥ 95 |
| Accessibility | **59** | ≥ 95 |
| Best Practices | **69** | ≥ 95 |
| SEO | **73** | ≥ 95 |

**Core Web Vitals (lab):** LCP **13.5 s** (target < 2.5 s) · CLS **0.522** (target < 0.1) · FCP 3.8 s · TTI 13.9 s. Two of three CWV are catastrophically red.

**Contributing causes measured:** 12+ render-blocking external stylesheets/scripts in `<head>` (5 from CDNs); 49 KiB unused CSS; 68 KiB unused JS; images without `width`/`height` (`image-aspect-ratio` fail → the 0.522 CLS); console errors on load (`errors-in-console` — the 404s and API failures above).

**Accessibility failures (Lighthouse binary fails, all WCAG-mapped):**
- `html-has-lang` — no `lang` attribute on `<html>` (`index.html:2`)
- `image-alt` — certificate images with no alt text (`index.html:1035+`)
- `button-name` / `link-name` — icon-only nav links and social buttons with no accessible name
- `color-contrast` — failing text/background pairs
- `landmark-one-main` — no `<main>`; no skip link anywhere
- `list` — `<div id="navbar__logo">` as a direct child of `<ul>` (`index.html:66-69`)
- `target-size` — touch targets too small/dense
- Contact form inputs use placeholder-only labels, no `<label>` elements (`index.html:1443-1467`)
- `prefers-reduced-motion` is not referenced anywhere in the codebase (typed.js, Swiper autoplay-adjacent motion, counters all run unconditionally)

**SEO/metadata:** zero `<meta name="description">`, zero Open Graph/Twitter tags, no canonical, no JSON-LD, no sitemap/robots.txt (`meta-description`, `link-text` fails). Title is "Muhammad's Portfolio" — no discipline, no name surname, no keywords.

**JS-dependence:** stats render "0", skills accordion, project filter, and certificate carousel are all inert or broken without JS; no `<noscript>` provision (brief §5.7 fail).

---

## Baseline summary (what "done" is measured against)

| Dimension | Today | Acceptance (brief) |
|---|---|---|
| Lighthouse P/A/BP/SEO (mobile) | 45 / 59 / 69 / 73 | ≥ 95 each (§7.1) |
| LCP / CLS | 13.5 s / 0.522 | < 2.5 s / < 0.1 (§7.2) |
| Design tokens | 0 custom properties | 100% token-driven styles (§4.3) |
| Content source | hand-edited 1,495-line HTML | structured data files (§6.9) |
| Secrets in repo | 1 leaked PAT | 0, with history treated as burned (§0.1) |
| Reduced-motion support | none | complete alternate experience (§5.6) |
| CI quality gates | none | lint + tests + Lighthouse CI + bundle budget (§11) |

Raw Lighthouse JSON: retained from audit run (`lh-mobile.json`); re-run with `npx lighthouse http://localhost:8123 --output=json` after serving the repo root.
