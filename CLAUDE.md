# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Academic Pages Jekyll site - a personal academic website template built with Jekyll and deployed on GitHub Pages. The site is for Will Kirschenman, a PhD student in Operations Research at NC State University.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve the site locally (recommended)
jekyll serve -l -H localhost
# or
bundle exec jekyll serve -l -H localhost

# Build JavaScript assets
npm run build:js

# Watch for JavaScript changes
npm run watch:js
```

### Docker Development
```bash
# Build and run with Docker
docker compose up
```

### CV Management
```bash
# Update CV JSON from markdown CV
./scripts/update_cv_json.sh
```

## Architecture

### Jekyll Collections
The site uses Jekyll collections to organize different types of content:
- `_publications/` - Research publications
- `_talks/` - Conference presentations and talks
- `_teaching/` - Teaching experience
- `_portfolio/` - Portfolio items
- `_posts/` - Blog posts

### Key Configuration Files
- `_config.yml` - Main Jekyll configuration with site metadata, author info, and collection settings
- `_config_docker.yml` - Docker-specific configuration overrides
- `_data/cv.json` - CV data in JSON format
- `_data/navigation.yml` - Site navigation structure

### Content Generation
The `markdown_generator/` directory contains Jupyter notebooks and Python scripts for:
- Converting TSV files to markdown files for publications and talks
- Generating content from structured data
- Use `publications.py` or `talks.py` for command-line generation

### Styling
- `_sass/` - SCSS source files organized by component
- `assets/css/` - Compiled CSS and additional stylesheets
- The site uses a modified Minimal Mistakes theme

### Special Features
- Interactive talk map functionality (`talkmap.py`, `talkmap/`)
- CV conversion from markdown to JSON (`scripts/cv_markdown_to_json.py`)
- Custom includes for academic-specific layouts and components

## File Structure Notes
- Static files (PDFs, images) go in `files/` and `images/`
- Page templates are in `_layouts/`
- Reusable components are in `_includes/`
- Site pages are in `_pages/`
- All content uses YAML front matter for metadata