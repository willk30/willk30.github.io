# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

Will Kirschenman's personal academic site: Jekyll + a vendored copy of the al-folio theme (no `remote_theme`; layouts, includes, and SCSS live in the repo). Deployed to GitHub Pages by `.github/workflows/deploy.yml` on pushes to `master`.

Will is an Assistant Professor of Operations Research at the Naval Postgraduate School (Ph.D., NC State, 2026). The site is framed academically; contact info is the NPS email only. Do not add phone numbers, office locations, or home addresses.

## Where content lives

- `_pages/about.md` home page (layout `about`; news + selected papers + social icons)
- `_pages/research.md` research overview (three dissertation thrusts, methods, current directions)
- `_pages/publications.html` sections driven by `keywords={refereed|trade|thesis}` in `_bibliography/papers.bib`
- `_pages/talks.md` renders `_data/talks.yml`
- `_pages/teaching.md` renders `_data/teaching.yml`
- `_pages/writing.md` renders `_data/writing.yml`
- `_pages/cv.md` uses layout `cv` and `_data/cv.yml` (al-folio list format: `title`, `type`, `contents`); PDF in `assets/pdf/`
- `_pages/news.md` full news list; `_news/` items are inline announcements
- `_sass/_custom.scss` all styling overrides (imported last from `assets/css/main.scss`)
- `files/`, `documents/` slide decks and posters; the CV PDF links to these exact paths, so do not rename them

## Conventions

- Keep `_bibliography/papers.bib` as the single source for publications; `_data/cv.yml` carries a short human-readable list that should be kept in sync.
- Custom bib fields supported by `_layouts/bib.liquid`: `preprint`, `data` (in addition to upstream `html`, `pdf`, `code`, `slides`, `poster`, `supp`, `video`).
- News items: `inline: true`, filename `YYYY-MM-DD-slug.md`, date in front matter with timezone.
- Dark mode is the default for first-time visitors (`assets/js/theme.js`); light and system remain available via the toggle.
- Build locally with `bundle exec jekyll build` before pushing; Sass deprecation warnings from upstream al-folio are expected.

## Plugins

Only the gems in `Gemfile` are available (jekyll-scholar, jekyll-feed, jekyll-sitemap, jekyll-archives, jekyll-paginate-v2, jekyll-email-protect, jemoji). `jekyll-imagemagick` is not installed, so `imagemagick.enabled` stays `false`.
