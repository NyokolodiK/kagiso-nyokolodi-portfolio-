# Kagiso Nyokolodi — Portfolio

A local portfolio built with Next.js App Router, TypeScript, CSS Modules and MDX. Home, About and three case studies are pre-rendered. Fonts are self-hosted; there are no analytics, authentication or databases. A small number of isolated client components power the interactive pieces.

The design is a dark agent-runtime system: near-black surfaces, electric blue and mint signal accents, hairline grids, rounded glass and console panels, and live status dots. Oversized Archivo Variable display headings are paired with IBM Plex Sans for reading and IBM Plex Mono for metadata, giving the interface an engineered, technical tone. Mint carries primary actions with dark text; blue remains a supporting accent for links, rules and labels. The home hero centres on a large 3D system map: four layered plates that orbit by pointer drag, snap back to a reset view, and can be selected by click or keyboard to inspect the contract behind each one. A conceptual five-step execution trace above the map frames the visual language: read context, plan, call tools, check evidence, respond. A separate interaction lab further down the page walks through a frontend workflow and an AI-assisted flow using local sample data. Both demonstrations run in the browser and make no API calls. Content focuses on engineering decisions, implementation outcomes and the scope of responsibility.

## Run

```sh
npm install --cache .local-tools/npm-cache
npm run dev
```

Use the printed local URL. For a production preview, run `npm run build` followed by `npm run start`. Add `-- --port 3001` when another app occupies port 3000.

Set `NEXT_PUBLIC_SITE_URL` at build time to override the canonical origin used by metadata, the sitemap and robots.

## Validate

```sh
npm run lint
npm run typecheck
npm run build
```

Browser QA notes are in `VALIDATION.md`. Captures belong in `output/playwright/`.

## Content

- `app/page.tsx`: introduction, 3D system map, selected work, interaction lab, principal practice and contact.
- `app/about/page.tsx`: profile, approach, supplied career history and education.
- `app/work/*/page.mdx`: Quick Builder, Agent Assistant and platform modernization.
- `app/layout.tsx`: Archivo Variable, IBM Plex Sans/IBM Plex Mono, metadata, Person JSON-LD and viewport theme.
- `app/opengraph-image.tsx`: generated 1200×630 social card.
- `app/sitemap.ts` and `app/robots.ts`: crawl metadata built from `lib/site.ts`.
- `app/globals.css`: shared design tokens, typography, reduced-motion rules.
- `components/SystemStack.tsx`: draggable 3D system-map explorer used in the hero.
- `components/engineering-lab/`: isolated interactive frontend/AI demonstration.
- `components/CaseStudy.tsx`: common study structure and navigation.
- `components/Visual.tsx`: original conceptual illustrations; no proprietary screenshots.
- `public/Kagiso_Nyokolodi_CV.pdf`: CV with employment dates corrected to match the user’s supplied timeline.

`CONTENT_SOURCES.md` records the local evidence behind the case studies. Career facts and ownership come from the supplied portfolio. Technical examples are grounded in project source and history. No quantitative impact, team size, mentoring history or testimonials have been invented. Ongoing migrations and acceptance work are distinguished from implemented behaviour.

This repository has not been deployed or published as part of the redesign.
