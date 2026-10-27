# Synthlane — website redesign

A light, simple redesign of [synthlane.com](https://synthlane.com), built with **Astro**. The audience is senior management at companies, PSUs and government institutions, so the design is calm and readable: white and soft-grey sections, navy and blue accents, one clean sans-serif typeface, and only gentle motion (sections fade in, a slow animated grid behind each hero). Motion is switched off for visitors who set reduced motion.

Content, page structure and navigation follow the live site.

| Route | Sections |
| --- | --- |
| `/` | Hero, How white-label works, What we build, Google Cloud & AI, Why Us, Work our founders have led, CTA, FAQ |
| `/about-us` | Hero, Our Mission & Vision, Core Values, "Built to work behind your brand / We are Synthlane", FAQ |
| `/our-portfolio` | Work our founders have led (Zomato, Siemens), Projects (7 more) |
| `/solutions/*` | Software Development, Application Modernization, Software Consulting, Secure Cloud Engineering, AI & ML — core services, why Synthlane, founders' work, tech stack, step-by-step approach, FAQ |

Blogs, Privacy Policy, Careers and LinkedIn link to the existing live URLs. "Book a discovery call", "Book a Free Consultation" and "Let's Connect" go to the same cal.com link as the live site.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

Deploys as a static site to Vercel, Netlify, Cloudflare Pages or GitHub Pages with no config. All copy is in `src/data/site.ts`.

## Logos

`public/logos/` holds the logo files:

- **Clients:** Zomato, Siemens, Byju's (used for Toppr (Byju's)) — from [Simple Icons](https://simpleicons.org), in each brand's colour.
- **Tech stack:** Node.js, C++, .NET, React, Python, Java — from the Iconify `logos` set.

AlgoMage, Authlayer, Vinyo, BidYourStay, Qumulo and the AI-Powered Sales Calling Platform show their name as text, because no logo file was available. To add one, drop an SVG or PNG in `public/logos/` and set `logo: '/logos/<file>'` on that entry in `src/data/site.ts`.

## Before going live

- **Synthlane logo:** `src/components/Logo.astro` uses a placeholder mark next to the "Synthlane" wordmark. Put the real logo at `public/logo.svg` and set `USE_FILE = true`.
- **Solutions page descriptions:** headings, card titles, step names and FAQ questions match the live pages exactly. The one-line descriptions under them (marked `// ~` in `site.ts`) are close paraphrases — paste the exact copy from the Framer project over them.
- **FAQ answers:** the live site doesn't publish answer text in its pages. The answers here (marked `// answer:`) use only facts stated elsewhere on the site. Replace them with Synthlane's own.
- **AI & ML FAQ:** left out. On the live page, four of its five questions are a copy error ("What are digital forensics services?").
- **"Read Detailed Case Study":** the live buttons don't link anywhere. Here they go to the portfolio page; point them at case-study pages once those exist.
