// Hero visual: perspective "synth lanes" — light pulses racing toward the
// viewer along converging lanes, with a moving floor grid and a mirrored
// ceiling. Pure 2D canvas, no dependencies. Reacts to pointer and scroll.

type Pulse = { lane: number; d: number; speed: number; len: number; color: string; hot: boolean };

const FAR = 46;
const NEAR = 0.9;
const LANES = 24;

export function mountLanes(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w = 0, h = 0, dpr = 1;
  let mx = 0, my = 0, tx = 0, ty = 0;
  let warp = 0;
  let gridOffset = 0;
  let raf = 0;
  let visible = true;
  let last = performance.now();
  const pulses: Pulse[] = [];

  const palette = ['rgba(239,236,230,', 'rgba(239,236,230,', 'rgba(255,90,31,', 'rgba(255,90,31,', 'rgba(127,209,255,'];

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  // depth -> 0..1 screen interpolation (1 = nearest)
  const proj = (d: number) => (1 / d - 1 / FAR) / (1 / NEAR - 1 / FAR);
  const vp = () => ({ x: w * 0.5 + mx * w * 0.09, y: h * 0.46 + my * h * 0.06 });
  const spread = () => Math.max(w, h * 1.2) * 2.6;
  const laneX = (i: number, v: { x: number }) => v.x - spread() / 2 + (i / (LANES - 1)) * spread();

  const point = (lane: number, d: number, v: { x: number; y: number }, ceiling = false) => {
    const t = proj(d);
    const by = ceiling ? -h * 0.12 : h * 1.12;
    return { x: v.x + (laneX(lane, v) - v.x) * t, y: v.y + (by - v.y) * t, t };
  };

  const spawn = (d = FAR) => {
    const hot = Math.random() < 0.38;
    pulses.push({
      lane: Math.floor(Math.random() * LANES),
      d,
      speed: 7 + Math.random() * 12,
      len: 2 + Math.random() * 5,
      color: hot ? palette[2 + Math.floor(Math.random() * 3)] : palette[Math.floor(Math.random() * 2)],
      hot,
    });
  };

  const drawFrame = (dt: number) => {
    const v = vp();
    ctx.clearRect(0, 0, w, h);

    // horizon glow
    const g = ctx.createRadialGradient(v.x, v.y, 0, v.x, v.y, Math.max(w, h) * 0.7);
    g.addColorStop(0, 'rgba(255,90,31,0.30)');
    g.addColorStop(0.18, 'rgba(255,90,31,0.10)');
    g.addColorStop(0.5, 'rgba(127,209,255,0.03)');
    g.addColorStop(1, 'rgba(10,11,13,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // lanes (floor + faint ceiling)
    for (const ceiling of [false, true]) {
      for (let i = 0; i < LANES; i++) {
        const a = point(i, FAR, v, ceiling);
        const b = point(i, NEAR, v, ceiling);
        const lg = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        const base = ceiling ? 0.035 : 0.09;
        lg.addColorStop(0, 'rgba(239,236,230,0)');
        lg.addColorStop(1, `rgba(239,236,230,${base})`);
        ctx.strokeStyle = lg;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    // moving floor grid
    gridOffset = (gridOffset + dt * (4 + warp * 30)) % 3;
    for (let k = 0; k < 18; k++) {
      const d = NEAR + k * 3 - gridOffset;
      if (d <= NEAR || d > FAR) continue;
      const t = proj(d);
      const y = v.y + (h * 1.12 - v.y) * t;
      ctx.strokeStyle = `rgba(239,236,230,${0.012 + t * 0.07})`;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // pulses
    ctx.globalCompositeOperation = 'lighter';
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.d -= dt * p.speed * (1 + warp * 3.5);
      if (p.d <= NEAR) { pulses.splice(i, 1); continue; }
      const head = point(p.lane, p.d, v);
      const tail = point(p.lane, Math.min(FAR, p.d + p.len * (1 + warp * 2)), v);
      const alpha = Math.min(1, head.t * 2.2 + 0.08);
      const lg = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
      lg.addColorStop(0, p.color + '0)');
      lg.addColorStop(1, p.color + alpha + ')');
      ctx.strokeStyle = lg;
      ctx.lineWidth = 0.6 + head.t * (p.hot ? 4 : 2.4);
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(tail.x, tail.y);
      ctx.lineTo(head.x, head.y);
      ctx.stroke();
      if (p.hot && head.t > 0.15) {
        ctx.fillStyle = p.color + alpha * 0.35 + ')';
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2 + head.t * 9, 0, Math.PI * 2);
        ctx.fill();
      }
      // mirrored ceiling streak, dimmer
      const ch = point(p.lane, p.d, v, true);
      const ct = point(p.lane, Math.min(FAR, p.d + p.len), v, true);
      ctx.strokeStyle = p.color + alpha * 0.25 + ')';
      ctx.lineWidth = 0.5 + ch.t * 1.4;
      ctx.beginPath();
      ctx.moveTo(ct.x, ct.y);
      ctx.lineTo(ch.x, ch.y);
      ctx.stroke();
    }
    ctx.globalCompositeOperation = 'source-over';

    // horizon line
    const hl = ctx.createLinearGradient(0, 0, w, 0);
    hl.addColorStop(0, 'rgba(255,90,31,0)');
    hl.addColorStop(0.5, 'rgba(255,138,92,0.55)');
    hl.addColorStop(1, 'rgba(255,90,31,0)');
    ctx.fillStyle = hl;
    ctx.fillRect(0, v.y - 0.5, w, 1);
  };

  const tick = (now: number) => {
    raf = requestAnimationFrame(tick);
    if (!visible) { last = now; return; }
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    mx += (tx - mx) * 0.05;
    my += (ty - my) * 0.05;
    const targetWarp = Math.min(1, window.scrollY / (h || 1));
    warp += (targetWarp - warp) * 0.08;
    const rate = 26 + warp * 60;
    if (Math.random() < rate * dt) spawn();
    drawFrame(dt);
  };

  const onMove = (e: PointerEvent) => {
    tx = (e.clientX / window.innerWidth) * 2 - 1;
    ty = (e.clientY / window.innerHeight) * 2 - 1;
  };

  resize();
  for (let i = 0; i < 70; i++) spawn(NEAR + Math.random() * (FAR - NEAR));

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
  io.observe(canvas);

  if (reduce) {
    drawFrame(0);
  } else {
    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
  }

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    window.removeEventListener('pointermove', onMove);
  };
}
