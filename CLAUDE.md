# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an al-folio Jekyll site - a modern academic website template built with Jekyll and deployed on GitHub Pages. The site is for Will Kirschenman, a PhD student in Operations Research at NC State University. **The site has been migrated from Academic Pages to al-folio template for enhanced academic features.**

## Development Commands

### Local Development
```bash
# Install Ruby dependencies
bundle install

# Install Node.js dependencies
npm install

# Build JavaScript assets
npm run build:js

# Serve the site locally (recommended)
bundle exec jekyll serve -l -H localhost

# Watch for JavaScript changes (in separate terminal)
npm run watch:js
```

### Docker Development
```bash
# Build and run with Docker
docker compose up
```

## Architecture

### Jekyll Collections
The site uses Jekyll collections to organize different types of content:
- `_bibliography/` - BibTeX files for publications (NEW - replaces individual markdown files)
- `_news/` - News and announcements (NEW)
- `_projects/` - Research projects (replaces `_portfolio/`)
- `_talks/` - Conference presentations and talks
- `_teaching/` - Teaching experience
- `_posts/` - Blog posts

### Key Configuration Files
- `_config.yml` - Main Jekyll configuration with al-folio specific settings
- `_bibliography/papers.bib` - BibTeX bibliography file for publications
- `package.json` - Node.js dependencies for JavaScript assets

### Publications Management
**Key Change**: Publications are now managed via BibTeX files instead of individual markdown files:
- Add publications to `_bibliography/papers.bib`
- Uses jekyll-scholar plugin for automatic rendering
- Supports badges, abstracts, PDFs, and author highlighting
- Set `selected={true}` in BibTeX for featured publications

### Styling and Theme
- `_sass/` - SCSS source files (al-folio theme)
- `assets/` - Images, CSS, JS assets (moved from separate directories)
- Dark/light mode support built-in
- Responsive design optimized for academic content

### Special al-folio Features
- Dynamic bibliography generation from BibTeX
- Publication badges (Altmetric, Dimensions, Google Scholar)
- Advanced search functionality
- Responsive image optimization
- Social media integration
- CV generation from structured data

## Content Management

### Publications
Add to `_bibliography/papers.bib`:
```bibtex
@article{key2024,
  title={Paper Title},
  author={Author, Name and Coauthor, Name},
  journal={Journal Name},
  year={2024},
  pdf={url-to-pdf},
  abstract={Abstract text},
  selected={true}
}
```

### Projects
Create in `_projects/` with frontmatter:
```yaml
---
layout: page
title: Project Title
description: Brief description
img: assets/img/project-image.jpg
importance: 1
category: research
---
```

### News Items
Add to `_news/`:
```yaml
---
layout: post
date: 2024-01-01 12:00:00-0400
inline: true
---
News content here.
```

## Migration Notes

**This site was migrated from Academic Pages to al-folio on 2024-12-01:**

### Major Changes:
1. **Publications**: Converted from individual markdown files to BibTeX format
2. **Projects**: Moved from `_portfolio/` to `_projects/` with new schema
3. **Theme**: Complete overhaul to al-folio with dark mode support
4. **Dependencies**: Added jekyll-scholar and other al-folio specific plugins
5. **Images**: Moved to `assets/img/` directory structure

### Content Preservation:
- All original publications migrated to BibTeX format
- CV content updated with al-folio layout
- About page redesigned for al-folio theme
- News items created for recent updates

### Backup:
- Original Academic Pages files backed up in `backup_original/`

## File Structure
```
├── _bibliography/         # BibTeX files for publications
├── _includes/             # Jekyll includes (al-folio theme)
├── _layouts/              # Jekyll layouts (al-folio theme)
├── _news/                 # News and announcements
├── _pages/                # Main site pages
├── _projects/             # Research projects (was _portfolio/)
├── _sass/                 # SCSS styling (al-folio theme)
├── _talks/                # Conference talks
├── _teaching/             # Teaching experience
├── assets/                # Images, CSS, JS assets
├── backup_original/       # Backup of original Academic Pages files
├── _config.yml            # Main Jekyll configuration (al-folio)
├── Gemfile                # Ruby dependencies (al-folio)
└── package.json           # Node.js dependencies (NEW)
```