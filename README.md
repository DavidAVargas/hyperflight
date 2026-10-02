# Hyperflight

A cinematic personal brand site for **Hyperflight / Hyper Fitness RD**: a pro boxing coach, online fitness coach, gym owner, content creator (1M+ on TikTok) and filmmaker based in New Jersey.

Social media is where his audience lives, but brands and clients need somewhere more professional to land. This site gives him one link that explains everything he does and gets people to the right contact for what they want.

## Who it's for

The site is organized by **who is visiting** rather than by job title:

| Visitor | What they need | Where they go |
| --- | --- | --- |
| Brands & companies | Reach, audience, past collaborations | Partnerships → inquiry |
| Businesses needing video | Hyper Films: marketing, music videos, events | Video Production → book a shoot |
| People who want to box | Pro boxing coaching, technique and self-defense | Boxing → book a session |
| People who want to get fit | Personal training, in person or online | Fitness → start training |

## Design direction

The look is borrowed from a **film camera viewfinder**:

- Near-black background, warm off-white type and one accent color, a deep red used like a camera's REC light
- Condensed athletic display type (Big Shoulders) paired with monospace "camera readout" labels (JetBrains Mono)
- Small cinematic details, like a live 24fps timecode in the navbar and numbered scene-style navigation
- Dark-only, motion-forward, built mobile-first

## Progress

- [x] Navbar: transparent-to-blurred on scroll, numbered links, live timecode, full-screen mobile menu
- [x] Hero: shutter-open intro, portrait backdrop, brand and coaching calls to action
- [x] What I do: credentials ticker and four service cards (partnerships, video production, boxing, fitness) with looping footage
- [x] Partnerships: why brands work with him, with a pinned call to action
- [ ] Partnerships: example deal packages and how it works
- [ ] About: contact-sheet photo layout and short bio
- [ ] Contact: one inquiry form routed by topic
- [x] Footer: end-credits call to action, links, socials and oversized wordmark
- [ ] English / Spanish toggle

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- Storybook + Vitest for components
- pnpm

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001).

### Share previews

The Open Graph image (`app/opengraph-image.tsx`) and HF icons are generated at build time. On Vercel, link previews use the production URL automatically. For a custom domain, set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Project structure

```
app/                  Routes and root layout
components/_blocks/   Page sections (header, hero, footer...)
lib/site.ts           Site content: nav links, socials, CTAs
styles/               Global styles and theme tokens
utils/fonts.ts        Font setup
```

Most copy and links live in `lib/site.ts`, so content updates don't require touching components.

---

Designed and developed by [David A. Vargas](https://github.com/DavidAVargas).
