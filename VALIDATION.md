# Validation — 28 October 2026

Project: /Users/kagisonyokolodi/Documents/Bazaruto/kagiso-nyokolodi-portfolio

## Passed

- `npm run lint`
- `npm run typecheck`
- `npm run build` — Home, About and both MDX case studies pre-rendered as static pages.
- HTTP 200: `/`, `/about`, `/work/quick-builder`, `/work/agent-assistant` and `/Kagiso_Nyokolodi_CV.pdf`. Unknown routes render the custom 404.
- CV: Library version 3; 116,639 bytes; `application/pdf`.
- Visual inspection of full-page screenshots at 1440, 390 and 320 widths for Home, About, both case studies and the 404 page.
- No horizontal overflow at 320, 390 or 1440 widths; document scroll width equals viewport width on every checked page.
- One `h1` per page, zero unnamed links, and no unexpected console errors.
- Axe 4.4.1 audit at 1440 and 390 widths across Home, About, both case studies and the 404 page: **zero violations** against `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` and `best-practice`.
- Keyboard: first Tab exposes a visible "Skip to content" link; Enter moves focus to `#main` with the sticky header accounted for.
- Reduced motion: `prefers-reduced-motion: reduce` disables the marquee, load animations and transitions, and restores instant scrolling.
- Content, career facts, case-study copy and CV were preserved. Conceptual visuals remain original illustrations, not product screenshots.
- Case-study pull quotes were corrected to inherit the intended serif scale and text colour instead of the body-paragraph override.

## Limits

- Chromium via Playwright only; no full screen-reader session or real-device Safari/Firefox testing.
- No Lighthouse performance or SEO audit was run.
- Screenshots were inspected manually; no automated visual-regression baseline exists.

## Scope

New standalone project only. No existing project or parent configuration edited. No git initialization, commit, push, PR, deployment or external publishing.
Local production preview: http://127.0.0.1:3000
