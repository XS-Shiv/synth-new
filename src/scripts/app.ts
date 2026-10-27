import { mountHalftone } from './halftone';

document.documentElement.classList.add('js');

document.querySelectorAll<HTMLCanvasElement>('[data-halftone]').forEach(mountHalftone);

// Fade sections in as they scroll into view
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }),
  { rootMargin: '0px 0px -8% 0px' },
);
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

// Solutions dropdown (click/keyboard; hover handled in CSS)
const dropBtn = document.querySelector<HTMLButtonElement>('[data-drop-btn]');
const dropPanel = document.querySelector<HTMLElement>('[data-drop-panel]');
dropBtn?.addEventListener('click', () => {
  const open = dropPanel?.classList.toggle('is-open');
  dropBtn.setAttribute('aria-expanded', String(!!open));
});
document.addEventListener('click', (e) => {
  if (!dropBtn || !dropPanel) return;
  if (!dropBtn.contains(e.target as Node) && !dropPanel.contains(e.target as Node)) {
    dropPanel.classList.remove('is-open');
    dropBtn.setAttribute('aria-expanded', 'false');
  }
});

// Mobile menu
const burger = document.querySelector<HTMLButtonElement>('[data-burger]');
const mnav = document.querySelector<HTMLElement>('[data-mnav]');
burger?.addEventListener('click', () => {
  const open = mnav?.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(!!open));
  document.documentElement.style.overflow = open ? 'hidden' : '';
});
