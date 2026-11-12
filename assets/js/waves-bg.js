/* Landing-wave backdrop for the home hero */
(() => {
  const canvas = document.getElementById("waves-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let t = 0;
  let raf = 0;

  function resize() {
    const parent = canvas.parentElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = parent.clientWidth;
    const h = Math.max(220, Math.round(parent.clientHeight * 0.55));
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!reduceMotion) t += 0.011;
    ctx.clearRect(0, 0, w, h);

    const layers = [
      { base: 0.28, amp: 18, speed: 1.0, fill: "rgba(196,138,74,0.07)", stroke: "rgba(232,223,208,0.10)" },
      { base: 0.42, amp: 14, speed: 1.25, fill: "rgba(12,28,46,0.55)", stroke: "rgba(232,223,208,0.16)" },
      { base: 0.58, amp: 11, speed: 0.85, fill: "rgba(7,17,28,0.72)", stroke: "rgba(196,138,74,0.22)" },
    ];

    layers.forEach((layer, i) => {
      ctx.beginPath();
      const y0 = h * layer.base;
      ctx.moveTo(0, h);
      ctx.lineTo(0, y0);
      for (let x = 0; x <= w; x += 5) {
        const y =
          y0 +
          Math.sin(x * 0.0105 + t * layer.speed + i * 1.1) * layer.amp +
          Math.sin(x * 0.023 + t * 0.6 + i) * (layer.amp * 0.35);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = layer.fill;
      ctx.fill();
      ctx.strokeStyle = layer.stroke;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    raf = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    cancelAnimationFrame(raf);
    resize();
    draw();
  });

  resize();
  draw();
})();
