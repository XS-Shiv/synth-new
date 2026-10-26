# Synthlane — website redesign

A redesign of [synthlane.com](https://synthlane.com) built with **Astro**, **GSAP (ScrollTrigger)** and **Lenis** smooth scrolling. Same content, page structure and navigation as the live site; new visuals, motion and flow.

## What's inside

| Route | Content |
| --- | --- |
| `/` | Animated "synth lanes" canvas hero, capability marquee, How white-label works (sticky stacked steps), What we build, Google Cloud & AI (orbit visual), Why Us (brand-peel card), Work our founders have led (pinned horizontal scroll), CTA, FAQ |
| `/about-us` | Hero, Mission & Vision, Core Values, "We are Synthlane" band, CTA, FAQ |
| `/our-portfolio` | Featured and latest work (9 projects) |
| `/solutions/*` | Software Development, Application Modernization, Software Consulting, Secure Cloud Engineering, AI & ML — services, why Synthlane, process, past work |

Blogs, Privacy Policy, Careers and LinkedIn link to the existing live URLs. Every "Book a discovery call" button goes to the same cal.com link as the live site.

**Motion:** split-word headline reveals, scroll-scrubbed parallax, magnetic buttons, card tilt, custom cursor, page transitions via Astro's `ClientRouter`. Everything respects `prefers-reduced-motion`. No images are loaded — all visuals are canvas, SVG and CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

Deploys as a static site to Vercel, Netlify, Cloudflare Pages or GitHub Pages with no config.

## Before going live

- **Logo** — the original logo file couldn't be downloaded from Framer's CDN during the build, so `src/components/Logo.astro` uses a placeholder mark with the "Synthlane" wordmark. Drop the real file at `public/logo.svg` and set `USE_FILE = true` in that component.
- **FAQ answers** — the live site's answers are collapsed and weren't scrapable. The answers in `src/data/site.ts` are written only from statements made elsewhere on the site. Confirm them with the Synthlane team.
- **Solutions pages** — card titles, services and process steps match the live pages; the short descriptions under each item are condensed.

All copy lives in `src/data/site.ts`.
