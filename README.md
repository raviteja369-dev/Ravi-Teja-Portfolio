# Ravi Teja Akula — Portfolio

A responsive, macOS-inspired portfolio workstation built with React, Vite, Zustand, GSAP, and Lucide React.

## Prerequisites

- Node.js 20.19+ or 22.12+
- npm

## Local development

```sh
npm install
npm run dev
```

Open the local URL Vite prints in your browser.

## Production build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Structure

- `src/data.js` — centralized resume-supported portfolio content
- `src/store.js` — Zustand desktop window and appearance state
- `src/main.jsx` — desktop shell, mobile app view, and portfolio applications
- `src/style.css` — design system, desktop and mobile layouts, accessibility states
- `public/` — favicon and the supplied resume PDF

## Updating portfolio content

Edit `src/data.js`. Projects, terminal responses, Finder items, skills, education, experience, research, achievements, and certificates all read from this shared module. Repository and demo links are intentionally absent because none were present in the resume.

Update a project's `repo` or `demo` fields only after verifying the destination. Update `contact.email`, `contact.github`, and `contact.linkedin` with verified public destinations.

## Replacing the profile avatar

The About and Settings views currently use the initials fallback `RT`. To add a real portrait, put the image at `public/images/profile.jpg` and update the reusable `ProfileAvatar` component in `src/main.jsx` to render that image with the existing initials as its fallback. No personal photo was supplied with the resume.

## Adding projects and resume files

Add project records to `portfolio.projects` in `src/data.js`; include only supported details and links. Finder and the project browser use that shared list automatically. The project cards link directly to their supplied GitHub repositories; live demo links are omitted until available.

The portfolio preview and download use `public/resume.pdf`, a flattened one-page copy with the phone number replaced by “Phone private.” The original PDF is preserved byte-for-byte in `private-source/Ravi Teja resume.pdf`; it is not copied into `dist/`. Replace the public PDF with an updated copy that has been checked for private contact details, or update `portfolio.resume.path` and `filename` in the data module. The Resume app renders its PDF page with PDF.js. Certificate links are listed as clickable links in the Certificates app.

## Vercel deployment

Import this project into Vercel or run `npx vercel`. The included `vercel.json` rewrites app routes to the Vite entry point. Set the project framework preset to Vite and use `npm run build` / `dist` if Vercel does not detect them automatically.

## Notes

- Links in the resume PDF were extracted and placed in the contact and certificate views.
- Credential URLs were taken from the source PDF. The available web fetcher could not independently load the credential pages, so their current reachability was not verified.
- Project cards open the corresponding GitHub repositories in a new tab.
- The dynamic clock uses the visitor's local browser time.
- On narrow screens, desktop windows switch to a full-screen, tap-first app view with a home screen and bottom navigation.
