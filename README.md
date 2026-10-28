# Kagiso Nyokolodi — Portfolio

Standalone local portfolio built with Next.js App Router, TypeScript, CSS Modules and MDX. All pages are pre-rendered. No database, authentication, analytics, remote font requests or custom client components.

The visual direction is a dark engineering studio: near-black canvas, oversized Space Grotesk display type, electric lime accent, mono micro-labels, visible grid rules and high-contrast project cards.

## Run

Requires Node.js 20.9+ (tested with 24.11).

```sh
npm install --cache .local-tools/npm-cache
npm run dev
```

Open http://127.0.0.1:3000. For a production preview: `npm run build && npm start`.

## Validate

```sh
npm run typecheck
npm run lint
npm run build
```

## Content

- Homepage: `app/page.tsx` and `app/page.module.css`
- Career and education: `app/about/page.tsx` and `app/about/about.module.css`
- Case studies: `app/work/*/page.mdx`
- Shared tokens and base styles: `app/globals.css`
- Header and footer: `components/Shell.tsx`
- Case-study shell and contents rail: `components/CaseStudy.tsx`
- Paper identity card: `components/IdentityCard.tsx`
- Original conceptual visuals: `components/Visual.tsx`
- CV: `public/Kagiso_Nyokolodi_CV.pdf` (Library version 3)

Visuals are original conceptual illustrations, not product screenshots. Case studies describe supplied technical ownership and outcomes without invented quantitative impact, testimonials or private repository links. Agent Assistant is described as evolving work. TanStack migration is not claimed as shipped.

Fonts are self-hosted via Fontsource: Space Grotesk Variable for display type, DM Sans for body copy, IBM Plex Mono for labels and Instrument Serif for italic accents. Native anchor links, download links and pre-rendered content keep interaction lightweight. Browser validation records live in `VALIDATION.md`. Nothing is deployed or published.

Tooling compatibility: TypeScript is pinned to 6.0.3 because typescript-eslint does not yet support TypeScript 7. ESLint is pinned to 9.39.5 to satisfy the current Next.js React/import/accessibility plugin peer ranges; npm marks that ESLint major unsupported. Recheck these upstream ranges before upgrading.
