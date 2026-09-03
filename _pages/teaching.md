---
layout: page
title: Teaching
permalink: /teaching/
description: Computational methods for operations research and data analytics.
nav: true
nav_order: 4
---

My teaching at NPS centers on the Operations Research Department's computational methods sequence for the Operations Analysis curriculum. The goal is practical: help students acquire, prepare, and analyze data; automate and scale their analyses; and use remote and high-performance computing resources, so that they have the tools and the confidence to fulfill the potential of their coursework and thesis research. Modern AI coding assistants are part of that toolkit, taught alongside the verification habits needed to use them well.

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

## For students

If you are an NPS student interested in a thesis in optimization, computational methods, or defense logistics, I would be glad to talk. Email me with a short note on what you are interested in and the courses you have taken so far.
