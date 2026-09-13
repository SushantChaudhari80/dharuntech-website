# DharunTech Angular Website

Angular conversion of the supplied DharunTech HTML/CSS design.

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10+

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Production build

```bash
npm run build
```

The production output is generated under `dist/dharuntech-web/`.

## Project structure

- `src/app/components/` reusable page sections
- `src/app/directives/` shared UI directives
- `src/assets/images/` supplied design assets
- `src/styles.css` global design system and responsive styles
- `src/app/app.routes.ts` application routes

## Notes

- The original single-page design is implemented as a standalone Angular SPA.
- The original vanilla JavaScript interactions were converted to Angular state and a reusable `appReveal` directive.
- The enquiry form uses Angular Reactive Forms with client-side validation. It currently shows the original success message and does not send data to a backend.
- Product demo buttons open an Angular modal with the original "Coming Soon" behavior.
