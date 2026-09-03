---
layout: page
title: Talks
permalink: /talks/
description: Invited seminars, conference presentations, and posters.
nav: true
nav_order: 3
---

{% assign talks = site.data.talks | sort: "date" | reverse %}
{% assign years = talks | map: "year" | uniq %}
<div class="talks">
{% for year in years %}
  <h2 class="year-heading">{{ year }}</h2>
  {% for t in talks %}
    {% if t.year == year %}
    <div class="talk-item{% if t.upcoming %} upcoming{% endif %}">
      <div class="talk-meta">
        <span class="talk-type">{{ t.type }}</span>
        {% if t.upcoming %}<span class="tag tag-accent">Upcoming</span>{% endif %}
        {% if t.award %}<span class="tag tag-award"><i class="fa-solid fa-award"></i> {{ t.award }}</span>{% endif %}
      </div>
      <h3 class="talk-title">{{ t.title }}</h3>
      <p class="talk-venue">{{ t.event }}{% if t.location %}, {{ t.location }}{% endif %}{% if t.when %} · {{ t.when }}{% endif %}</p>
      {% if t.coauthors %}<p class="talk-coauthors">with {{ t.coauthors }}</p>{% endif %}
      {% if t.links %}
      <p class="talk-links">
        {% for l in t.links %}<a href="{{ l.url }}" class="btn btn-sm z-depth-0" role="button">{{ l.name }}</a>{% endfor %}
      </p>
      {% endif %}
    </div>
    {% endif %}
  {% endfor %}
{% endfor %}
</div>
