/* Priority Deck — interactive packing hero for the home page */
(() => {
  const canvas = document.getElementById("priority-deck");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const fillEl = document.getElementById("deck-fill");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let mode = "priority";
  let mouse = { x: 0, y: 0 };
  let selected = null;
  let t = 0;

  const items = [
    { id: "omega", label: "Omega", w: 110, h: 70, pri: 1, mass: 8 },
    { id: "nrl", label: "NRL", w: 95, h: 62, pri: 1, mass: 7 },
    { id: "a1", label: "P1-A", w: 70, h: 48, pri: 1, mass: 5 },
    { id: "a2", label: "P1-B", w: 58, h: 58, pri: 1, mass: 6 },
    { id: "b1", label: "P2-A", w: 84, h: 44, pri: 2, mass: 4 },
    { id: "b2", label: "P2-B", w: 64, h: 52, pri: 2, mass: 5 },
    { id: "b3", label: "P2-C", w: 48, h: 48, pri: 2, mass: 3 },
    { id: "c1", label: "P3-A", w: 72, h: 36, pri: 3, mass: 2 },
    { id: "c2", label: "P3-B", w: 54, h: 40, pri: 3, mass: 3 },
    { id: "c3", label: "P3-C", w: 40, h: 40, pri: 3, mass: 2 },
    { id: "c4", label: "P3-D", w: 60, h: 28, pri: 3, mass: 2 },
  ].map((it, i) => ({
    ...it,
    x: 40 + (i % 4) * 140,
    y: 80 + Math.floor(i / 4) * 120,
    tx: 0,
    ty: 0,
  }));

  function colorFor(it) {
    if (selected === it.id) return "#efe8dc";
    if (it.pri === 1) return "#1ec8c3";
    if (it.pri === 2) return "#0891b2";
    return "#5b8a9a";
  }

  function packLayout() {
    const pad = 24;
    const rampX = pad;
    const W = canvas.width - pad * 2;
    const sorted = [...items].sort((a, b) => {
      if (mode === "priority") return a.pri - b.pri || b.w * b.h - a.w * a.h;
      if (mode === "balance") return b.mass - a.mass || a.pri - b.pri;
      return a.pri - b.pri || a.id.localeCompare(b.id);
    });

    let x = rampX,
      y = pad,
      rowH = 0,
      gap = 10;
    const placed = [];
    let leftX = rampX,
      rightX = rampX + W / 2 + gap;
    let leftY = pad,
      rightY = pad,
      leftH = 0,
      rightH = 0;

    sorted.forEach((it, idx) => {
      if (mode !== "balance" && mode !== "fleet" && x + it.w > rampX + W) {
        x = rampX;
        y += rowH + gap;
        rowH = 0;
      }
      let tx = x,
        ty = y;
      // Priority mode: items are already sorted P1→P3, so the shelf packer
      // places high-priority crates nearest the ramp without a post-hoc pull
      // that would collapse spacing and cause overlaps.
      if (mode === "balance") {
        const toLeft = idx % 2 === 0;
        if (toLeft) {
          if (leftX + it.w > rampX + W / 2 - gap) {
            leftX = rampX;
            leftY += leftH + gap;
            leftH = 0;
          }
          tx = leftX;
          ty = leftY;
          leftX += it.w + gap;
          leftH = Math.max(leftH, it.h);
        } else {
          if (rightX + it.w > rampX + W) {
            rightX = rampX + W / 2 + gap;
            rightY += rightH + gap;
            rightH = 0;
          }
          tx = rightX;
          ty = rightY;
          rightX += it.w + gap;
          rightH = Math.max(rightH, it.h);
        }
        ty = Math.min(Math.max(pad, ty), canvas.height - pad - it.h);
      }
      if (mode === "fleet") {
        const lane = it.pri - 1;
        const laneW = W / 3;
        const count = placed.filter((p) => p.pri === it.pri).length;
        tx = rampX + lane * laneW + 8 + (count % 2) * (it.w * 0.2);
        ty = pad + 20 + count * (it.h + 8);
      }
      it.tx = tx;
      it.ty = Math.min(ty, canvas.height - pad - it.h);
      placed.push(it);
      if (mode !== "fleet" && mode !== "balance") {
        x += it.w + gap;
        rowH = Math.max(rowH, it.h);
      }
    });
  }

  function resize() {
    const frame = canvas.parentElement;
    const w = Math.max(320, frame.clientWidth);
    const h = Math.max(380, frame.clientHeight || 420);
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    packLayout();
    if (reduceMotion) {
      items.forEach((it) => {
        it.x = it.tx;
        it.y = it.ty;
      });
    }
  }

  function draw() {
    if (!reduceMotion) t += 0.016;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const grd = ctx.createLinearGradient(0, 0, 70, 0);
    grd.addColorStop(0, "rgba(30,200,195,0.18)");
    grd.addColorStop(1, "transparent");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 70, canvas.height);

    if (mode === "balance") {
      ctx.strokeStyle = "rgba(239,232,220,0.25)";
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 16);
      ctx.lineTo(canvas.width / 2, canvas.height - 16);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "rgba(239,232,220,0.5)";
      ctx.font = "10px IBM Plex Mono, monospace";
      ctx.fillText("CG AXIS", canvas.width / 2 + 6, 28);
    }

    if (mode === "fleet") {
      for (let i = 1; i < 3; i++) {
        const x = (canvas.width / 3) * i;
        ctx.strokeStyle = "rgba(30,200,195,0.2)";
        ctx.beginPath();
        ctx.moveTo(x, 12);
        ctx.lineTo(x, canvas.height - 12);
        ctx.stroke();
      }
      ctx.fillStyle = "rgba(30,200,195,0.55)";
      ctx.font = "10px IBM Plex Mono, monospace";
      ctx.fillText("VESSEL A", 16, 22);
      ctx.fillText("VESSEL B", canvas.width / 3 + 16, 22);
      ctx.fillText("VESSEL C", (canvas.width * 2) / 3 + 16, 22);
    }

    let area = 0;
    items.forEach((it, i) => {
      const nudgeX = reduceMotion ? 0 : (mouse.x - canvas.width / 2) * 0.012 * (4 - it.pri);
      const nudgeY = reduceMotion ? 0 : (mouse.y - canvas.height / 2) * 0.01;
      const ease = reduceMotion ? 1 : 0.08;
      it.x += (it.tx + nudgeX - it.x) * ease;
      it.y += (it.ty + nudgeY - it.y) * ease;
      const bob = reduceMotion ? 0 : Math.sin(t * 1.5 + i) * 1.2;

      ctx.fillStyle = colorFor(it);
      ctx.globalAlpha = selected && selected !== it.id ? 0.35 : 0.92;
      ctx.fillRect(it.x, it.y + bob, it.w, it.h);
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "rgba(6,20,26,0.45)";
      ctx.strokeRect(it.x + 0.5, it.y + bob + 0.5, it.w - 1, it.h - 1);

      ctx.fillStyle = "#06141a";
      ctx.font = "600 11px IBM Plex Mono, monospace";
      ctx.fillText(it.label, it.x + 8, it.y + bob + 18);
      ctx.font = "10px IBM Plex Mono, monospace";
      ctx.globalAlpha = 0.7;
      ctx.fillText("P" + it.pri, it.x + 8, it.y + bob + 34);
      ctx.globalAlpha = 1;
      area += it.w * it.h;
    });

    if (fillEl) {
      const fill = Math.min(99, Math.round((area / (canvas.width * canvas.height)) * 100 + 28));
      fillEl.textContent = fill + "%";
    }
    requestAnimationFrame(draw);
  }

  canvas.addEventListener("mousemove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });

  canvas.addEventListener("click", (e) => {
    const r = canvas.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const hit = [...items]
      .reverse()
      .find((it) => x >= it.x && x <= it.x + it.w && y >= it.y && y <= it.y + it.h);
    selected = hit ? hit.id : null;
    if (hit && (hit.id === "omega" || hit.id === "nrl")) {
      const papers = document.querySelector(".publications");
      if (papers) papers.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  document.querySelectorAll("#deck-thrusts .deck-thrust").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      document.querySelectorAll("#deck-thrusts .deck-thrust").forEach((t) => t.classList.remove("active"));
      el.classList.add("active");
      mode = el.dataset.mode;
      packLayout();
    });
  });

  window.addEventListener("resize", resize);
  resize();
  packLayout();
  draw();
})();
