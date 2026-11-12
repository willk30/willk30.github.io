---
layout: page
title: Research
permalink: /research/
description: Packing, load planning, and the methods I use to solve them.
nav: true
nav_order: 3
---

A lot of packing models only ask whether everything fits. The problems I care about also ask what has to come off first, what should stay together, and whether the load still balances. Most of that work started from combat load planning; the same structure shows up in warehouses, humanitarian logistics, and container operations.

My dissertation followed three connected problems.

<div class="thrust">
  <div class="thrust-num">01</div>
  <div class="thrust-body">
    <h3>Prioritized 2-D packing</h3>
    <p>
      Put a priority matrix into ordinary 2-D packing so high-priority items sit near the access point and related items stay together. The full MIP is too slow, so I solve a sliding window of small subproblems over priority-ordered subsets, with lower bounds to check quality. That beats a direct solver and the usual heuristic baselines on both time and layout.
    </p>
    <p class="thrust-links">
      <a href="https://doi.org/10.1002/nav.70087">Naval Research Logistics, 2026</a>
      <a href="https://doi.org/10.31224/4647">Preprint</a>
      <a href="https://doi.org/10.5061/dryad.8pk0p2p1z">Data and code</a>
    </p>
  </div>
</div>

<div class="thrust">
  <div class="thrust-num">02</div>
  <div class="thrust-body">
    <h3>Combat loading with balance</h3>
    <p>
      Same idea on a ship deck: cargo and deck layout are mostly fixed, and the real decision is where everything goes. Add a hard center-of-gravity constraint, deck obstacles, and separation rules. I compared a big MILP, the sliding-window approach, and a version with in-stride balance penalties, then a repair pass to recover balance without wrecking the priority layout. Useful plans come back in minutes.
    </p>
    <p class="thrust-links">
      <a href="https://doi.org/10.1016/j.omega.2026.103638">Omega, 2026</a>
      <a href="https://doi.org/10.31224/6041">Preprint</a>
      <a href="https://doi.org/10.5061/dryad.vt4b8gv5z">Data and code</a>
      <a href="https://news.ncsu.edu/2026/08/cracking-the-packing-code-new-models-incorporate-item-priority-location-and-weight-distribution/">NC State News</a>
      <a href="https://www.eurekalert.org/news-releases/1141737">EurekAlert!</a>
      <a href="/writing/#press-and-coverage">More coverage</a>
    </p>
  </div>
</div>

<div class="thrust">
  <div class="thrust-num">03</div>
  <div class="thrust-body">
    <h3>Multi-vessel selection and waves</h3>
    <p>
      Scale up from one deck to a landing force: which groups go on which ships, and which ships land in which wave. Exact decomposition keeps re-solving packing and falls over, so I used a genetic algorithm with a fast packing bound as a proxy, plus a crossover that respects wave structure. Congestion dominates vessel choice; no single ship type wins everywhere.
    </p>
    <p class="thrust-links">
      <a href="/publications/">Dissertation, 2026</a>
    </p>
  </div>
</div>

## Methods and tools

I spend a lot of time making search cheap enough when exact evaluation is not. That usually means breaking big models into pieces, building fast bounds or proxies for metaheuristics, and running large computational experiments. Code is in **Julia** with **JuMP** and **Gurobi**. Bigger runs go on university HPC; the evolutionary work also uses NVIDIA GPUs.

## Current directions

- Nested packing: items into modules, modules into transports, with readiness composed across levels.
- Tools planners can actually use, not just research prototypes.
- Thesis work with NPS OR master's students on optimization and defense logistics.

## Earlier work

Before the dissertation I built a cloud visualization and data-collection app for large wargames, presented at AORS and MORS. That talk won the AORS Best Presentation award in the Wargaming Working Group in 2021.
