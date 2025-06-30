# William Kirschenman - Academic Website

This is the personal academic website for William Kirschenman, a PhD student in Operations Research at NC State University and U.S. Army Operations Research Analyst.

## About the Site

This website has been built using the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, which is specifically designed for academics and researchers. The theme provides advanced features for managing publications, projects, and academic content.

## Key Features

- **Dynamic Publications**: Automatic bibliography generation from BibTeX files
- **Project Showcase**: Organized display of research projects and implementations
- **Responsive Design**: Mobile-friendly and modern interface
- **Dark/Light Mode**: Built-in theme switching
- **Advanced Search**: Site-wide search functionality
- **CV Integration**: Dynamic CV generation from structured data

## Local Development

### Prerequisites

- Ruby (>= 2.7)
- Bundler
- Node.js (for JavaScript assets)

### Setup

1. **Install dependencies**:
   ```bash
   bundle install
   npm install
   ```

2. **Build JavaScript assets**:
   ```bash
   npm run build:js
   ```

3. **Serve locally**:
   ```bash
   bundle exec jekyll serve -l -H localhost
   ```

4. **Watch for JavaScript changes** (in separate terminal):
   ```bash
   npm run watch:js
   ```

### Docker Development

Alternatively, use Docker for development:

```bash
docker compose up
```

## Content Management

### Publications

Publications are managed via BibTeX files in `_bibliography/papers.bib`. Key features:

- Automatic citation formatting
- PDF links and abstracts
- Publication badges (Altmetric, Dimensions, etc.)
- Author highlighting

Example BibTeX entry:
```bibtex
@article{your_paper_2024,
  title={Your Paper Title},
  author={Your Name and Co-Author},
  journal={Journal Name},
  year={2024},
  pdf={link-to-pdf},
  abstract={Your abstract here},
  selected={true}
}
```

### Projects

Projects are stored in `_projects/` as Markdown files with YAML frontmatter:

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

### News

Site announcements and news items go in `_news/` as Markdown files:

```yaml
---
layout: post
date: 2024-01-01 12:00:00-0400
inline: true
---
Your news content here.
```

## Configuration

The main configuration is in `_config.yml`. Key sections:

- **Personal Information**: Name, email, social links
- **Jekyll Scholar**: Bibliography settings
- **Collections**: Content organization
- **Theme Options**: Dark mode, search, etc.

## Deployment

The site is configured for GitHub Pages deployment. Simply push to the `master` branch and GitHub will automatically build and deploy the site.

## Migration Notes

This site was migrated from Academic Pages to al-folio template. Key changes:

- Publications now use BibTeX format instead of individual markdown files
- Projects moved from `_portfolio/` to `_projects/`
- New theme system with dark/light mode support
- Enhanced CV layout and dynamic generation
- Improved mobile responsiveness

## File Structure

```
├── _bibliography/         # BibTeX files for publications
├── _includes/             # Jekyll includes (from al-folio)
├── _layouts/              # Jekyll layouts (from al-folio)
├── _news/                 # News and announcements
├── _pages/                # Main site pages
├── _projects/             # Research projects
├── _sass/                 # SCSS styling (from al-folio)
├── assets/                # Images, CSS, JS assets
├── _config.yml            # Main Jekyll configuration
└── Gemfile                # Ruby dependencies
```

## Troubleshooting

If you encounter issues:

1. **Bundle install fails**: Ensure Ruby and Bundler are properly installed
2. **Jekyll build errors**: Check `_config.yml` syntax and plugin dependencies  
3. **Missing images**: Ensure images are in `assets/img/` directory
4. **Publication display issues**: Verify BibTeX syntax in `_bibliography/papers.bib`

## Contact

For questions about this website or research collaborations:

- **Email**: wkkirsch@ncsu.edu
- **GitHub**: [willk30](https://github.com/willk30)
- **LinkedIn**: [william-kirschenman-11a78989](https://linkedin.com/in/william-kirschenman-11a78989)