---
layout: page
title: Writing
permalink: /writing/
description: Notes on AI tools, plus press and interviews.
nav: true
nav_order: 2
---

## Field Essays

I write at [Will's AI Field Notes](https://willk30.substack.com) about using AI tools for actual work — mostly coding agents, models, and workflows.

<div class="essay-list">
{% for e in site.data.writing.essays %}
  <a class="essay-item" href="{{ e.url }}">
    <span class="essay-date">{{ e.date | date: "%b %-d, %Y" }}</span>
    <span class="essay-title">{{ e.title }}</span>
  </a>
{% endfor %}
</div>

<p>
  <a href="https://willk30.substack.com/s/field-essays" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-newspaper"></i> All field essays</a>
  <a href="https://willk30.substack.com/s/field-dispatches" class="btn btn-sm z-depth-0" role="button">Field dispatches</a>
</p>

## Recent field dispatches

Shorter notes from the same Substack. Full archive [here](https://willk30.substack.com/s/field-dispatches).

<div class="essay-list">
{% for e in site.data.writing.dispatches %}
  <a class="essay-item" href="{{ e.url }}">
    <span class="essay-date">{{ e.date | date: "%b %-d, %Y" }}</span>
    <span class="essay-title">{{ e.title }}</span>
  </a>
{% endfor %}
</div>

## Press and coverage
{: #press-and-coverage}

{% for m in site.data.writing.media %}
<div class="media-item">
  <span class="essay-date">{{ m.date | date: "%b %-d, %Y" }}</span>
  <div>
    <strong>{{ m.title }}</strong><br>
    {{ m.description }}
    {% if m.links %}<p class="media-links">{% for l in m.links %}<a href="{{ l.url }}" class="btn btn-sm z-depth-0" role="button">{{ l.name }}</a>{% endfor %}</p>{% endif %}
  </div>
</div>
{% endfor %}

## Articles for practitioners

Two articles in *Army Sustainment* translate the load-planning research for logistics practitioners. See the [publications](/publications/) page for full citations.

- [Automating Combat Loading to Strengthen LSCO Readiness](https://www.army.mil/article/293624/automating_combat_loading_to_strengthen_lsco_readiness) (2026)
- [Automated Vessel Selection and Combat Load Planning](https://www.army.mil/article/280367/automated_vessel_selection_and_combat_load_planning) (2024)

## Profiles

- [Google Scholar](https://scholar.google.com/citations?user=UlYcxSsAAAAJ)
- [ORCID](https://orcid.org/0009-0000-5514-7737)
- [ResearchGate](https://www.researchgate.net/profile/William-Kirschenman)
- [LinkedIn](https://www.linkedin.com/in/william-kirschenman-11a78989/)
- [GitHub](https://github.com/willk30)
- [NPS OR roster](https://nps.edu/web/or/roster)
- [Substack](https://willk30.substack.com)
