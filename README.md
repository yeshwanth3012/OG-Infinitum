# OG Infinitum — Website

A React + Vite website for OG Infinitum, built from the project's Master Content Draft, with a navy/gold theme
inspired by overseasgateway.com's brand color (#16273D).

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

- `src/data/siteContent.js` — copy for Home, About, Ecosystem, Partners, Counsellor Network, Institutions, Impact,
  Resources, Contact, Leadership, plus nav/footer.
- `src/data/pillars.js` — full content for the eight ecosystem pillars (OG CareerX, OG Skills Hub, OG Mentors
  Circle, OG Certify, OG InternX, OG Placements, Overseas Gateway, OG Parent Connect), rendered through one
  reusable `PillarPage` template at `/pillars/:slug`.
- `src/components/` — Header, Footer, Hero, SectionHeading, CardGrid, PillarCard, JourneySteps, CTASection.
- `src/pages/` — one file per route.
- `src/theme.css` — color, font and spacing tokens.

## Notes

- All copy comes directly from the OG Infinitum Master Content Draft. Anywhere the source document called out an
  unverified number or claim (e.g. impact counters), the site shows the category rather than inventing a figure —
  fill those in once real numbers are confirmed.
- The contact form is UI-only (no backend wired up yet); wire `handleSubmit` in `src/pages/Contact.jsx` to your
  CRM/email service of choice.
- Update `src/data/*.js` to edit copy — the pages themselves shouldn't need touching for content changes.
