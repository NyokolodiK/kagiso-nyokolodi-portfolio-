# Portfolio validation — 16–17 November 2026

## Automated checks

- `npm run lint` — passed.
- `npm run typecheck` — passed.
- `npm run build` — passed on Next.js 16.4.6 (Turbopack). Home, About, all three MDX case studies, the custom missing-page view, `opengraph-image`, `sitemap.xml` and `robots.txt` are pre-rendered.
- `npm audit` — 0 vulnerabilities. Next.js was upgraded from 16.4.3 to 16.4.6 for GHSA-mfr8-8qww-v76h; the dev-only lint chain also received a compatible `minimatch` update.
- `git diff --check` — passed.
- Production metadata checks passed: canonical, Open Graph and Twitter URLs resolve against `https://kagiso-nyokolodi.dev`; the Person JSON-LD block is present; `theme-color` is `#06090e`, `color-scheme` is `dark`; `sitemap.xml` and `robots.txt` return `200` with the expected content types.

## Browser checks

Chromium through Playwright, against the production build (Next.js 16.4.6 at `127.0.0.1:3210`):

- Home, About, Quick Builder, Agent Assistant, Platform modernization and the missing-page view checked at 1440, 820 and 390 (18 combinations).
- No horizontal overflow anywhere (`document.scrollWidth` matches `clientWidth`).
- Exactly one `h1` per page.
- No JavaScript page errors or failed requests. The only console entry is the expected `404` document response on the missing-page route; every other route is clean.
- The mobile menu opens at 390, sets `aria-expanded="true"`, exposes all four navigation links and closes on Escape.
- The skip link stays off-screen until focused, then appears at the top of the viewport.
- The interaction lab switches to AI applications (`aria-pressed="true"`), and Step 4 updates the live status region.
- The generated social card returns `image/png` at 1200×630.

## Agent-runtime redesign

- The light blueprint theme was replaced by a dark console language: near-black surfaces, electric-blue and mint signal accents, glass panels, fine grid lines, live status dots and trace connectors.
- Primary actions use the mint signal with dark text; blue remains a supporting accent for links, rules and labels rather than a button fill.
- Structure, routes, copy and the existing interactive components were preserved. No metrics or claims were added.
- The header carries an “Open to roles” status pill. The home hero adds a conceptual five-step execution trace: read context → plan → call tools → check evidence → respond.
- The system map is now presented as the “Runtime map”; the map, case studies, lab, About page and 404 page use the same dark token set.
- Trace responsive border logic was verified at 1440, 1080, 1000, 820, 641, 640, 600, 521, 520 and 390: five columns above 1080, three columns through 1000–641, two columns at 640–521, one column at 520 and below. Row separators and right-hand rules follow the column count; no stub borders remain.

## System map checks

The runtime map was rechecked at 1440 and 390:

- Clicking each plate updates the readout and `aria-pressed` state: Experience → Contracts → Services → Evidence.
- Keyboard focus plus Enter on a plate updates the same readout.
- A pointer drag changes `--rx/--ry` from `8deg/18deg`; Reset view restores both values exactly.
- At 390 the active-layer HUD is visible and follows selection (`03 / Services` after selecting Services).
- The footer reads `04 layers / 03 seams`.

## Contrast and accessibility

Dark-palette contrast against `--bg: #06090e`:

- `--ink` text — 17.34:1.
- `--muted` — 7.89:1.
- `--faint` — 6.01:1.
- `--accent: #7aa2ff` — 8.01:1.
- `--signal: #5cf2b8` — 14.10:1.
- `--on-signal: #04120d` on `--signal` — 13.53:1.

All pass WCAG AA for their use. Manual checks also confirmed labelled sections, a hidden-until-focused skip link, the mobile menu’s `aria-expanded` state, the lab’s live status region and the map’s live readout. An automated axe run was not part of this pass.

## Visual evidence

Fresh production captures are in `output/playwright/agentic/` (ignored by Git):

- `home-1440-prod.png`, `home-820-prod.png`, `home-390-prod.png`
- `about-1440-prod.png`, `about-820-prod.png`, `about-390-prod.png`
- `agent-assistant-1440-prod.png`, `agent-assistant-820-prod.png`, `agent-assistant-390-prod.png`
- `not-found-1440-prod.png`, `not-found-390-prod.png`
- `menu-390-prod.png`, `lab-ai-1440-prod.png`, `system-map-390-prod.png`
- `buttons-1440-prod.png`, `button-home-hover-prod.png`, `button-about-prod.png`, `button-lab-prod.png`
- `trace-390-prod.png`, `og-prod.png`

`qa-prod.json` records the route, interaction, metadata and HTTP checks. Older `v2-*`–`v6-*` captures are stale and superseded.

## Limits

Chromium only. No full screen-reader session, real-device Safari/Firefox verification, Lighthouse run, automated axe pass or automated visual-regression baseline. This validation covers the portfolio, not the runtime behaviour of the Bazaruto-family projects it describes.
