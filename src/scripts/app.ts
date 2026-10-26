import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { mountLanes } from './lanes';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

let lenis: Lenis | null = null;
let cleanups: Array<() => void> = [];

function initLenis() {
  if (reduce || lenis) return;
  lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------- split headings into masked words ---------- */
function splitWords(el: HTMLElement) {
  if (el.dataset.splitDone) return;
  el.dataset.splitDone = '1';
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent || '').split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          const mask = document.createElement('span');
          mask.className = 'split-mask';
          mask.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:0.12em;margin-bottom:-0.12em;';
          const word = document.createElement('span');
          word.className = 'split-word';
          word.textContent = part;
          mask.appendChild(word);
          frag.appendChild(mask);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  };
  walk(el);
}

function initSplits() {
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    splitWords(el);
    const words = el.querySelectorAll('.split-word');
    if (reduce) return;
    gsap.set(words, { yPercent: 110, rotate: 4 });
    const immediate = el.hasAttribute('data-split-now');
    gsap.to(words, {
      yPercent: 0,
      rotate: 0,
      duration: 1.15,
      ease: 'expo.out',
      stagger: 0.045,
      delay: immediate ? 0.25 : 0,
      scrollTrigger: immediate ? undefined : { trigger: el, start: 'top 85%' },
    });
  });
}

function initReveals() {
  if (reduce) return;
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    onEnter: (els) =>
      gsap.to(els, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08, overwrite: true }),
  });
}

/* ---------- header ---------- */
function initHeader() {
  const hdr = document.querySelector<HTMLElement>('[data-header]');
  if (!hdr) return;
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    const menuOpen = hdr.querySelector('[data-mnav]')?.classList.contains('is-open');
    hdr.classList.toggle('is-hidden', !menuOpen && y > lastY && y > 200);
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  cleanups.push(() => window.removeEventListener('scroll', onScroll));

  const btn = hdr.querySelector<HTMLButtonElement>('[data-drop-btn]');
  const panel = hdr.querySelector<HTMLElement>('[data-drop-panel]');
  btn?.addEventListener('click', () => {
    const open = panel?.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(!!open));
  });

  const burger = hdr.querySelector<HTMLButtonElement>('[data-burger]');
  const mnav = hdr.querySelector<HTMLElement>('[data-mnav]');
  burger?.addEventListener('click', () => {
    const open = mnav?.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(!!open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) lenis?.stop(); else lenis?.start();
  });
}

/* ---------- micro interactions ---------- */
function initMagnetic() {
  if (!fine || reduce) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.25);
      yTo((e.clientY - r.top - r.height / 2) * 0.35);
    });
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });
}

function initTilt() {
  if (!fine || reduce) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(el, { rotateY: px * 8, rotateX: -py * 8, transformPerspective: 900, duration: 0.6, ease: 'power3.out' });
    });
    el.addEventListener('pointerleave', () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.9, ease: 'expo.out' }));
  });
}

let cursorEl: HTMLElement | null = null;
function initCursor() {
  if (!fine || reduce) return;
  if (!cursorEl) {
    cursorEl = document.createElement('div');
    cursorEl.className = 'cursor';
    document.body.appendChild(cursorEl);
    const xTo = gsap.quickTo(cursorEl, 'x', { duration: 0.35, ease: 'power3' });
    const yTo = gsap.quickTo(cursorEl, 'y', { duration: 0.35, ease: 'power3' });
    window.addEventListener('pointermove', (e) => {
      cursorEl?.classList.add('is-on');
      xTo(e.clientX); yTo(e.clientY);
    }, { passive: true });
  } else if (!document.body.contains(cursorEl)) {
    document.body.appendChild(cursorEl);
  }
  document.querySelectorAll('a, button, summary, [data-tilt]').forEach((el) => {
    el.addEventListener('pointerenter', () => cursorEl?.classList.add('is-big'));
    el.addEventListener('pointerleave', () => cursorEl?.classList.remove('is-big'));
  });
}

/* ---------- section-specific ---------- */
function initHero() {
  const canvas = document.querySelector<HTMLCanvasElement>('[data-lanes]');
  if (canvas) cleanups.push(mountLanes(canvas));
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero || reduce) return;
  gsap.from(hero.querySelectorAll('[data-hero-in]'), {
    opacity: 0, y: 30, duration: 1.2, ease: 'expo.out', stagger: 0.1, delay: 0.7,
  });
  gsap.to(hero.querySelector('[data-hero-content]'), {
    yPercent: -18, opacity: 0.15, ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  });
}

function initStepsLane() {
  const fill = document.querySelector<HTMLElement>('[data-steps-fill]');
  const wrap = document.querySelector<HTMLElement>('[data-steps]');
  if (!fill || !wrap || reduce) return;
  const x = fill.dataset.stepsFill === 'x';
  gsap.fromTo(fill, x ? { scaleX: 0 } : { scaleY: 0 }, {
    ...(x ? { scaleX: 1, transformOrigin: 'left' } : { scaleY: 1, transformOrigin: 'top' }),
    ease: 'none',
    scrollTrigger: { trigger: wrap, start: 'top 60%', end: 'bottom 70%', scrub: true },
  });
}

function initCasesScroll() {
  const section = document.querySelector<HTMLElement>('[data-hscroll]');
  const track = section?.querySelector<HTMLElement>('[data-hscroll-track]');
  if (!section || !track || reduce) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    const dist = () => track.scrollWidth - window.innerWidth + 48;
    gsap.to(track, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => '+=' + dist(),
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
    const bar = section.querySelector<HTMLElement>('[data-hscroll-bar]');
    if (bar) gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: section, start: 'top top', end: () => '+=' + dist(), scrub: true } });
  });
  cleanups.push(() => mm.revert());
}

function initPeel() {
  const peel = document.querySelector<HTMLElement>('[data-peel]');
  if (!peel || reduce) return;
  const front = peel.querySelector('[data-peel-front]');
  gsap.timeline({ scrollTrigger: { trigger: peel, start: 'top 75%', end: 'bottom 35%', scrub: 1 } })
    .to(front, { rotateY: 16, rotateZ: -9, y: -60, x: -90, transformPerspective: 1000, ease: 'none' })
    .to(peel.querySelector('[data-peel-back]'), { y: 50, x: 60, rotateZ: 3, ease: 'none' }, 0);
}

function initGiant() {
  const giant = document.querySelector<HTMLElement>('[data-giant] span');
  if (!giant || reduce) return;
  gsap.from(giant, {
    yPercent: 60, scaleY: 1.4, opacity: 0, ease: 'expo.out', duration: 1.6,
    scrollTrigger: { trigger: giant, start: 'top 95%' },
  });
}

function initParallax() {
  if (reduce) return;
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const amt = parseFloat(el.dataset.parallax || '15');
    gsap.fromTo(el, { yPercent: -amt }, {
      yPercent: amt, ease: 'none',
      scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

function initCounters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count || '0');
    if (reduce) { el.textContent = String(end); return; }
    const obj = { v: 0 };
    gsap.to(obj, {
      v: end, duration: 1.8, ease: 'expo.out',
      onUpdate: () => { el.textContent = String(Math.round(obj.v)); },
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });
}

/* ---------- lifecycle ---------- */
function init() {
  document.documentElement.classList.add('js');
  initLenis();
  lenis?.start();
  initHeader();
  initHero();
  initSplits();
  initReveals();
  initStepsLane();
  initCasesScroll();
  initPeel();
  initParallax();
  initGiant();
  initCounters();
  initMagnetic();
  initTilt();
  initCursor();
  requestAnimationFrame(() => ScrollTrigger.refresh());
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

function teardown() {
  cleanups.forEach((fn) => fn());
  cleanups = [];
  ScrollTrigger.getAll().forEach((t) => t.kill());
  document.documentElement.style.overflow = '';
}

document.addEventListener('astro:page-load', init);
document.addEventListener('astro:before-swap', teardown);
document.addEventListener('astro:after-swap', () => {
  document.documentElement.classList.add('js');
  lenis?.scrollTo(0, { immediate: true });
});
