---
layout: page
title: Writing
permalink: /writing/
description: Essays, interviews, and articles for practitioners.
nav: true
nav_order: 5
---

## Field Essays

I write occasional essays on working with AI coding agents and modern analytical tooling at [willk30.substack.com](https://willk30.substack.com). They are written for analysts and researchers who want to get real work done with these tools, not for people building them.

<div class="essay-list">
{% for e in site.data.writing.essays %}
  <a class="essay-item" href="{{ e.url }}">
    <span class="essay-date">{{ e.date | date: "%b %-d, %Y" }}</span>
    <span class="essay-title">{{ e.title }}</span>
  </a>
{% endfor %}
</div>

<p><a href="https://willk30.substack.com" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-newspaper"></i> All essays on Substack</a></p>

## Interviews and media

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
