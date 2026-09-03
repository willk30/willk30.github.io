---
layout: page
title: Research
permalink: /research/
description: Priority-aware spatial optimization, from a single deck to a full landing force.
nav: true
nav_order: 1
---

Classical packing models ask one question: does everything fit? In many real layouts that is not the question that matters. What has to come off first, what needs to stay together, and how the load balances all determine whether a feasible plan is a useful one. My research builds optimization models and scalable solution methods for these **priority-aware spatial problems**, motivated by military combat loading and applicable wherever prioritized groups must be assigned to constrained space over time.

The dissertation work progresses through three connected problems.

<div class="thrust">
  <div class="thrust-num">01</div>
  <div class="thrust-body">
    <h3>Prioritized 2-D orthogonal packing</h3>
    <p>
      A generalized single-bin framework that embeds a <em>prioritization matrix</em> into 2-D orthogonal packing, borrowing weighted-distance objectives from facility layout planning. High-priority items are drawn toward the bin's access point while functionally related items stay clustered. Because the resulting mixed-integer program does not scale, the work introduces a <strong>sliding-window matheuristic</strong> that solves a sequence of small, overlapping subproblems over priority-ordered item subsets, together with lower bounds for assessing solution quality. The matheuristic outperforms a direct solver run and adapted heuristic and metaheuristic alternatives on both runtime and layout quality.
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
    <h3>Combat loading with load balancing</h3>
    <p>
      Extends the framework to loading equipment onto a maritime transport vessel, where the deck and cargo set are fixed upstream and the real decision is internal arrangement. The key addition is hard <strong>center-of-gravity feasibility</strong>, a global constraint that couples every item's placement, plus fixed deck obstacles and material separation rules. Three approaches are compared: a monolithic MILP, the sliding-window matheuristic, and a variant with in-stride balancing penalties, all followed by a repair step that selectively relaxes and re-optimizes positions to recover balance with minimal disruption to the prioritized layout. The matheuristic pipelines produce balanced, high-quality single-vessel plans in minutes, fast enough to compare several loading configurations during time-critical planning.
    </p>
    <p class="thrust-links">
      <a href="https://doi.org/10.1016/j.omega.2026.103638">Omega, 2026</a>
      <a href="https://doi.org/10.31224/6041">Preprint</a>
      <a href="https://doi.org/10.5061/dryad.vt4b8gv5z">Data and code</a>
      <a href="https://news.ncsu.edu/2026/08/cracking-the-packing-code-new-models-incorporate-item-priority-location-and-weight-distribution/">NC State News</a>
    </p>
  </div>
</div>

<div class="thrust">
  <div class="thrust-num">03</div>
  <div class="thrust-body">
    <h3>Multi-vessel selection and wave scheduling</h3>
    <p>
      Scales from one deck to a full landing force: which equipment groups go on which vessels of a heterogeneous fleet, and which vessels land in which wave. The integrated assignment, scheduling, and packing problem is characterized as a <strong>bilevel mixed-integer program</strong> in which strategic upper-level decisions induce lower-level packing responses. Exact decomposition is intractable because the packing subproblem must be re-solved constantly, so the work develops a <strong>genetic algorithm</strong> guided by a fast rectangular-liquid packing bound as a proxy objective, with a wave-aware partitioned crossover that preserves meaningful solution structure. A large factorial study shows that congestion dominates vessel selection and that no single vessel type is universally preferred.
    </p>
    <p class="thrust-links">
      <a href="/publications/">Dissertation, 2026</a>
    </p>
  </div>
</div>

## Methods and tools

The common thread is designing search that stays tractable when exact evaluation is too expensive. That means decomposing monolithic models into sequences of solvable pieces, building lower bounds and proxy oracles that are cheap enough to call inside a metaheuristic, and validating everything with large computational experiments. The codebase is written in **Julia** with **JuMP** and **Gurobi**, with heavy use of solver callbacks, warm starts, and parameter tuning. Experiments run on university HPC clusters and, for the evolutionary work, on NVIDIA GPUs using a CUDA implementation of the genetic algorithm with GPU proxy evaluation and CPU re-validation of elite solutions.

## Current directions

- **Nested, multi-level packing.** Items are loaded into modules such as pallets and containers, and modules are loaded into transport assets. The contents chosen for each module induce the relationships among modules at the next level up, so readiness has to be composed across arrival, handling, and access at every level.
- **Decision support for planners.** Moving from research prototypes toward tools that produce operationally credible load plans quickly, and that expose the trade-offs between accessibility, cohesion, and balance rather than hiding them.
- **Student research at NPS.** Working with Operations Research master's students on thesis problems where combinatorial optimization, computational methods, and defense logistics meet.

## Earlier work

Before the dissertation, I led development of a cloud-based visualization and data collection application for large wargames and experimentation events, presented at the Army Operations Research Symposium and the MORS Symposium. That work received the AORS Best Presentation award in the Wargaming Working Group in 2021.
