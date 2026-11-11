---
layout: page
title: Teaching
permalink: /teaching/
description: Courses I teach at NPS and have taught elsewhere.
nav: true
nav_order: 1
---

At NPS I teach in the OR department's computational methods sequence. Practical stuff: get data, clean it, analyze it, automate the boring parts, and use remote or HPC resources without fear. AI coding assistants are in the mix too — with the verification habits you need so they don't quietly invent things.

## Naval Postgraduate School

{% for c in site.data.teaching.nps %}
<div class="course-card">
  <div class="course-head">
    <span class="course-code">{{ c.code }}</span>
    <span class="course-role">{{ c.role }}</span>
  </div>
  <h3 class="course-title">{{ c.title }}</h3>
  <p class="course-terms">{{ c.terms }}</p>
  <p class="course-desc">{{ c.description }}</p>
  {% if c.links %}<p class="course-links">{% for l in c.links %}<a href="{{ l.url }}" class="btn btn-sm z-depth-0" role="button">{{ l.name }}</a>{% endfor %}</p>{% endif %}
</div>
{% endfor %}

## North Carolina State University

{% for c in site.data.teaching.ncsu %}
<div class="course-card">
  <div class="course-head">
    <span class="course-code">{{ c.code }}</span>
    <span class="course-role">{{ c.role }}</span>
  </div>
  <h3 class="course-title">{{ c.title }}</h3>
  <p class="course-terms">{{ c.terms }}</p>
  <p class="course-desc">{{ c.description }}</p>
  {% if c.links %}<p class="course-links">{% for l in c.links %}<a href="{{ l.url }}" class="btn btn-sm z-depth-0" role="button">{{ l.name }}</a>{% endfor %}</p>{% endif %}
</div>
{% endfor %}

## Thesis advising

At NPS I am currently advising or serving as second reader for master's theses in Spring 2027:

- **Capt Samantha Brooker**, U.S. Air Force (co-advisor) — quantifying healthcare delivery opportunity cost of military manpower devoted to exercises and deployments
- **MAJ Brandon De La Rosa**, U.S. Army (second reader) — optimizing the location of unmanned maritime logistics bases in the Pacific
- **ENS Anthony Todd**, U.S. Navy (second reader)
- **ENS Andrew Vandergrift**, U.S. Navy (co-advisor) — optimizing troop and equipment load allocation for airborne operations

## For students

If you are an NPS student interested in a thesis in optimization, computational methods, or defense logistics, I would be glad to talk. Email me with a short note on what you are interested in and the courses you have taken so far.
