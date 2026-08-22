# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server (usually http://localhost:5173)
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # eslint .
```

There is no test suite configured in this repo.

## Architecture

React + Vite marketing site (no backend, no state management library) for OG Infinitum, an Indian student-development ecosystem brand. Routing is client-side via `react-router-dom` (`^6`).

**Content/presentation split — this is the core convention of the codebase:**
- All copy lives in `src/data/siteContent.js` (nav, footer, per-page content) and `src/data/pillars.js` (the eight ecosystem "pillars": OG CareerX, OG Skills Hub, OG Mentors Circle, OG Certify, OG InternX, OG Placements, Overseas Gateway, OG Parent Connect).
- Pages/components read from these data files rather than hard-coding text. When asked to change copy, edit the data files — page/component files generally shouldn't need touching for content-only changes.
- `src/data/pillars.js` uses a single content schema (fields like `intro`, `stages`, `tagList`, `cards`, `flow`, `designedFor`, `whoCanBenefit`, `ecosystemLink`, `note`, `closing`) rendered through one reusable template, `src/pages/PillarPage.jsx`, at the route `/pillars/:slug`. Every section in `PillarPage.jsx` is conditionally rendered based on whether the corresponding field exists on the pillar object — to add/remove a section for a given pillar, add/remove that field in `pillars.js` rather than editing the template. `getPillarBySlug`/`pillars` are exported helpers from that file.

**Routing** (`src/App.jsx`): all routes are nested under a single `Layout` route element (`src/components/Layout.jsx`, which renders `Header` + `<Outlet />` + `Footer`). One page component per route lives in `src/pages/`. `ScrollToTop` resets scroll position on navigation.

**Shared UI building blocks** (`src/components/`): `Hero`, `SectionHeading`, `CardGrid`, `PillarCard`, `JourneySteps`, `CTASection` are the reusable primitives that page components and `PillarPage` compose together — check here before adding a new component for a section-like layout.

**Styling**: plain CSS, no CSS-in-JS or Tailwind. `src/theme.css` defines design tokens as CSS custom properties (navy/gold brand palette, fonts, radii, shadows, container width) matching overseasgateway.com's brand color (#16273D). `src/index.css` holds global/base styles; component-scoped stylesheets (e.g. `header.css`, `footer.css`, `components.css`) are imported directly by their components.

**Contact form** (`src/pages/Contact.jsx`): UI-only, no backend wired up — `handleSubmit` just flips local state to show a thank-you message. Wiring it to a real CRM/email service is still open.

**Unverified content**: where the source content draft called out a number/claim that isn't confirmed (e.g. impact counters), the site displays the category rather than an invented figure. Don't fill in placeholder stats with made-up numbers.
