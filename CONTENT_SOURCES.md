# Portfolio content evidence

Reviewed 3 November 2026 against the local Bazaruto-family checkouts. This is an editorial evidence register, not a record of current production deployment. The public portfolio intentionally omits private repository links, product screenshots, customer data and fabricated metrics.

## Supplied background

The existing portfolio supplies career dates, titles, education, UX collaboration, ownership of Quick Builder and Agent Assistant, contact details and the CV. Career dates were corrected by the user on 3 November 2026: Nawiri began in December 2022; NTT ended in 2022. The site and local downloadable CV use those dates. No mentoring, team size, revenue, adoption or performance figures have been inferred.

## Quick Builder

Local checkout: `../bazaruto`.

- `36d40b732e` / #7141: accommodation cleanup considers other itinerary usage as well as the current stay map. See `app/assets/javascripts/modules/itinerary-builder-screen/quick-builder/accommodation/getUnusedAccommodationIds.ts` and accompanying screen tests.
- `2c98d3cfd0` / #7160 and `0a9e19923e` / #7185: protect accommodations in use and explain disabled removal.
- `c320bc0371` / #7133: apply Review routes and refresh saved pricing. Includes route save, pricing coordination, controller/service changes and regression coverage. `pricing/useQuickBuilderPricingState.ts` explicitly handles pricing completion arriving before a save response.
- `8eb0f4e400` / #7188: saved journey boundaries and lookup failures, with frontend and Rails regression coverage.

These support descriptions of implemented behaviour and test coverage. They do not establish a measured conversion increase, task completion improvement or current hosted CI result.

## Agent Assistant

Local checkout: `../agent-assistant`.

- Existing supplied ownership and `app/ARCHITECTURE.md`, `app/ui/ARCHITECTURE.md`: FastAPI, Preact, streaming services, structured bridges and host integration.
- `8bc14f8` / #298: exact stay/party checks, indexed discovery separated from live confirmation, explicit unconfirmed states, prompt tests and evaluation changes. The diff in `resources/prompts/safari_assistant.md` establishes the precise availability policy used in the case study.
- `../bazaruto`, `d89e0b1cd6` / #7199 and `550ae7d5cf` / #7310: supplier implementation and separate contract test suites are available in local history. Their presence is not proof of production enablement.
- `docs/problems.md` and frontend architecture describe the shared error contract. Do not attribute every collaborator's error-observability contribution solely to Kagiso.

Live supplier acceptance and rollout are not claimed complete. No production accuracy, booking or adoption metric is asserted.

## Modernization

- Agent Assistant: `c946555` / #321, `c7be739` / #322, `bde8858` / #324, `3770de6` / #325 and `2cad012` / #326 establish the staged lint/TypeScript, test tooling, Preact, Markdown and local tooling programme in local history.
- Wakala local branch: Node 24 `938c32b`, ESLint changes including `b2c1d34` and `9c21902`, Jest 30 `9486720`, stack coordination `ad13839` and Rails asset check `a89c0c7`. The portfolio describes an ongoing Vite migration, not a completed production release.
- Bazaruto: initial Bootstrap change `78530aa849` / #7242, revert `8cc07102a7` / #7283, follow-up compatibility commits `8c21d0f25b` and `d45d175030`. The portfolio explicitly distinguishes rollback and follow-up work.

No current cross-project CI, deployment clearance or measured productivity benefit was verified for this portfolio task.
