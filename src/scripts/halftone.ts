// Caldera hero halftone: ember dots on a plasma-violet → ember gradient.
// Dot size follows a diagonal ramp (sparse bottom-left, merging to solid
// orange top-right) plus a slow travelling wave and a soft bump under the
// pointer. Static single frame for reduced-motion users; pauses off-screen.

const VIOLET = [82, 74, 233];
const EMBER = [252, 80, 0];

const mix = (a: number[], b: number[], t: number) =>
  `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)})`;

export function mountHalftone(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w = 0, h = 0, raf = 0, visible = true;
  let px = -9999, py = -9999, tpx = -9999, tpy = -9999;
  const start = performance.now();

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = (t: number) => {
    // Base: violet bottom-left → ember top-right
    const g = ctx.createLinearGradient(0, h, w, 0);
    g.addColorStop(0, mix(VIOLET, VIOLET, 0));
    g.addColorStop(0.55, mix(VIOLET, EMBER, 0.35));
    g.addColorStop(1, mix(VIOLET, EMBER, 1));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    const step = Math.max(9, Math.min(14, w / 48));
    const maxR = step * 0.72; // > step/2 lets dots merge into solid colour
    ctx.fillStyle = `rgb(${EMBER[0]},${EMBER[1]},${EMBER[2]})`;
    ctx.beginPath();
    for (let y = step / 2; y < h + step; y += step) {
      for (let x = step / 2; x < w + step; x += step) {
        const nx = x / w, ny = 1 - y / h;
        const ramp = (nx * 0.62 + ny * 0.62) - 0.18;
        const wave = 0.16 * Math.sin(nx * 7 + t * 0.9) * Math.cos(ny * 5 - t * 0.6)
                   + 0.08 * Math.sin((nx + ny) * 13 - t * 1.4);
        const dx = x - px, dy = y - py;
        const bump = 0.45 * Math.exp(-(dx * dx + dy * dy) / (2 * 90 * 90));
        const v = Math.max(0, Math.min(1, ramp + wave + bump));
        const r = maxR * Math.pow(v, 1.15);
        if (r < 0.35) continue;
        ctx.moveTo(x + r, y);
        ctx.arc(x, y, r, 0, Math.PI * 2);
      }
    }
    ctx.fill();
  };

  const tick = (now: number) => {
    raf = requestAnimationFrame(tick);
    if (!visible) return;
    px += (tpx - px) * 0.08;
    py += (tpy - py) * 0.08;
    draw((now - start) / 1000);
  };

  const onMove = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    tpx = e.clientX - r.left;
    tpy = e.clientY - r.top;
    if (px < -9000) { px = tpx; py = tpy; }
  };
  const onLeave = () => { tpx = -9999; tpy = -9999; };

  resize();
  const ro = new ResizeObserver(() => { resize(); if (reduce) draw(0); });
  ro.observe(canvas);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
  io.observe(canvas);

  if (reduce) {
    draw(0);
  } else {
    canvas.addEventListener('pointermove', onMove, { passive: true });
    canvas.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(tick);
  }

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    canvas.removeEventListener('pointermove', onMove);
    canvas.removeEventListener('pointerleave', onLeave);
  };
}
