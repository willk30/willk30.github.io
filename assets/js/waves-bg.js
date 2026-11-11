/* Subtle wave backdrop for the home hero */
(() => {
  const canvas = document.getElementById("waves-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let t = 0;

  function resize() {
    const parent = canvas.parentElement;
    const w = parent.clientWidth;
    const h = Math.max(180, parent.clientHeight * 0.42);
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
  }

  function draw() {
    if (!reduceMotion) t += 0.014;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let layer = 0; layer < 3; layer++) {
      ctx.beginPath();
      const base = canvas.height * (0.32 + layer * 0.18);
      const amp = 10 + layer * 5;
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x <= canvas.width; x += 6) {
        const y = base + Math.sin(x * 0.012 + t * (1 + layer * 0.2) + layer) * amp;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fillStyle = `rgba(196,138,74,${0.05 + layer * 0.045})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(232,223,208,${0.12 + layer * 0.08})`;
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
})();
