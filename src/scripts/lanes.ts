// Hero background: a calm perspective grid with slow blue pulses travelling
// along the lanes. Tuned for a light page — low contrast, slow, no flashing.
// Pauses off-screen; draws a single static frame for reduced-motion users.

type Pulse = { lane: number; d: number; speed: number; len: number; alpha: number };

const FAR = 40;
const NEAR = 1;
const LANES = 18;

export function mountLanes(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w = 0, h = 0, raf = 0, visible = true, offset = 0;
  let last = performance.now();
  const pulses: Pulse[] = [];

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const proj = (d: number) => (1 / d - 1 / FAR) / (1 / NEAR - 1 / FAR);
  const vp = () => ({ x: w * 0.72, y: h * 0.38 });
  const pt = (lane: number, d: number) => {
    const v = vp();
    const spread = Math.max(w, h) * 2.4;
    const lx = v.x - spread / 2 + (lane / (LANES - 1)) * spread;
    const t = proj(d);
    return { x: v.x + (lx - v.x) * t, y: v.y + (h * 1.05 - v.y) * t, t };
  };

  const spawn = (d = FAR) =>
    pulses.push({
      lane: Math.floor(Math.random() * LANES),
      d,
      speed: 3 + Math.random() * 4,
      len: 3 + Math.random() * 4,
      alpha: 0.35 + Math.random() * 0.45,
    });

  const draw = (dt: number) => {
    const v = vp();
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < LANES; i++) {
      const a = pt(i, FAR), b = pt(i, NEAR);
      const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
      g.addColorStop(0, 'rgba(31,95,209,0)');
      g.addColorStop(1, 'rgba(31,95,209,0.2)');
      ctx.strokeStyle = g;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    }

    offset = (offset + dt * 1.6) % 3;
    for (let k = 0; k < 16; k++) {
      const d = NEAR + k * 3 - offset;
      if (d <= NEAR || d > FAR) continue;
      const t = proj(d);
      const y = v.y + (h * 1.05 - v.y) * t;
      ctx.strokeStyle = `rgba(31,95,209,${0.025 + t * 0.12})`;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.d -= dt * p.speed;
      if (p.d <= NEAR) { pulses.splice(i, 1); continue; }
      const head = pt(p.lane, p.d);
      const tail = pt(p.lane, Math.min(FAR, p.d + p.len));
      const a = p.alpha * Math.min(1, head.t * 2 + 0.1);
      const g = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
      g.addColorStop(0, 'rgba(31,95,209,0)');
      g.addColorStop(1, `rgba(31,95,209,${a})`);
      ctx.strokeStyle = g;
      ctx.lineWidth = 1 + head.t * 2.2;
      ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(tail.x, tail.y); ctx.lineTo(head.x, head.y); ctx.stroke();
    }
  };

  const tick = (now: number) => {
    raf = requestAnimationFrame(tick);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (!visible) return;
    if (Math.random() < 12 * dt) spawn();
    draw(dt);
  };

  resize();
  for (let i = 0; i < 26; i++) spawn(NEAR + Math.random() * (FAR - NEAR));
  const ro = new ResizeObserver(() => { resize(); if (reduce) draw(0); });
  ro.observe(canvas);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
  io.observe(canvas);

  if (reduce) draw(0);
  else raf = requestAnimationFrame(tick);

  return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
}
