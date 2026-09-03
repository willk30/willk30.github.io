# willk30.github.io

Personal academic website for William Kirschenman, Assistant Professor of Operations Research at the Naval Postgraduate School. Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme (vendored into this repo), deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml` on every push to `master`.

Live site: https://willk30.github.io

## Editing content

| What | Where |
|---|---|
| Home page bio | `_pages/about.md` |
| Research overview | `_pages/research.md` |
| Publications | `_bibliography/papers.bib` (rendered by jekyll-scholar; venue badges in `_data/venues.yml`) |
| Talks | `_data/talks.yml` (rendered by `_pages/talks.md`) |
| Teaching | `_data/teaching.yml` (rendered by `_pages/teaching.md`) |
| Writing, media | `_data/writing.yml` (rendered by `_pages/writing.md`) |
| CV page | `_data/cv.yml`; PDF at `assets/pdf/Kirschenman_CV.pdf` |
| News items | `_news/YYYY-MM-DD-slug.md` (newest six show on the home page; all show at `/news/`) |
| Slides, posters | `files/` and `documents/` (paths referenced from the CV PDF) |
| Site settings, social links | `_config.yml` |
| Styling overrides | `_sass/_custom.scss` |

### Adding a publication

Append a BibTeX entry to `_bibliography/papers.bib`. Custom fields the layout understands:

- `abbr` venue badge (colors/URLs in `_data/venues.yml`)
- `keywords` one of `refereed`, `trade`, `thesis` (controls which section it appears in)
- `selected={true}` shows it on the home page
- `html` publisher link, `pdf`, `preprint`, `data`, `code`, `slides`, `poster`
- `bibtex_show={true}` adds a BibTeX button

### Adding a news item

Create `_news/2026-10-25-informs-2026.md`:

```yaml
---
layout: post
date: 2026-10-25 12:00:00-0700
inline: true
related_posts: false
---

One or two sentences, with links.
```

## Local development

```bash
bundle install
bundle exec jekyll serve --livereload
```

Ruby 3.2+ and Bundler are required. The `npm` step in the deploy workflow is a no-op kept for parity with upstream al-folio.
