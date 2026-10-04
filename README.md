# Cre8iq Portfolio Website

Cre8iq is a premium personal creative portfolio for a graphic designer, UI/UX/product designer, and web developer. The website should feel polished and high-end while still making it clear that Cre8iq is a personal work brand, not a large agency.

This README is the living project brief. It should be updated at the end of every build phase with what was completed, what changed, and what still needs attention.

## Project Goals

- Attract freelance/client work.
- Support job and opportunity applications.
- Present services clearly.
- Showcase graphic design, UI/UX/product design, and web development projects.
- Build trust around Cre8iq as a premium personal creative brand.
- Allow portfolio content to be managed through local content files without a third-party service.

## Brand Direction

- Brand name: Cre8iq
- Brand type: Personal creative work brand
- Copy tone: Premium personal creative
- Visual style: Luxury, refined, spacious, modern, confident
- Logo: Cre8iq wordmark with teal `8`
- Logo asset provided: `Cre8iq copy.png`

### Brand Colors

| Name | Hex | Usage |
| --- | --- | --- |
| Vivid Teal | `#00acb5` | Primary accent |
| Deep Navy | `#001224` | Primary dark background |
| Pure White | `#ffffff` | Text and space |
| Light Teal | `#e3feff` | Secondary light background |
| Dark Teal | `#00575c` | Depth, contrast, hover states |

### Typography

- Heading font: Sora
- Body/UI font: Cabin

## Confirmed Pages

- Home
- About
- Services
- Service detail
- Portfolio
- Project detail / case study
- Contact

Optional future pages:

- Blog / Insights
- Pricing
- Resume page

## Core Features

- Responsive layout for mobile, tablet, and desktop.
- Light and dark mode.
- Theme should follow the visitor's system setting by default.
- Manual theme toggle should be available.
- Theme preference should be saved after the visitor changes it.
- Local-file managed portfolio projects.
- Local-file managed services.
- Local-file managed testimonials.
- Local-file managed homepage featured content.
- Portfolio filtering by category/service.
- Project pages should support both simple portfolio entries and full case studies.
- Contact form or contact CTA.
- WhatsApp contact link.
- Email contact link.
- Resume/CV download support.
- SEO metadata for main pages and project pages.
- Fast-loading optimized media.
- Accessible navigation, buttons, contrast, and form states.

## Contact Details

- Email: `cre8iq@gmail.com`
- WhatsApp: `+2349064750948`
- Social links: To be added later
- Resume/CV file: To be added later

## Content Strategy

Development should use polished test data until real content is available.

Initial test content should include:

- 4-6 sample portfolio projects.
- 3 core services.
- 2-3 sample testimonials.
- Homepage hero and featured content.

The test content should be easy to replace from the local content files later.

## Recommended Tech Stack

The current project is already a Next.js app.

- Frontend: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- Content: Local TypeScript content files
- Animations: Framer Motion
- Deployment target: Vercel
- Media: Local/public assets with Next image optimization
- Contact handling: To be decided later, likely Resend, Formspree, or a serverless endpoint

## Local Content Requirements

The local content system should manage portfolio projects, services, testimonials, and homepage featured content.

### Project Model

Fields:

- Title
- Slug
- Project type: simple portfolio item or full case study
- Category
- Featured image
- Gallery images
- Short description
- Full description
- Services provided
- Tools used
- Client name, optional
- Year
- Live website link, optional
- External design link, optional
- Featured project toggle
- SEO title
- SEO description

For full case studies, also support:

- Overview
- Challenge
- Goals
- Role
- Process
- Solution
- Results/outcomes
- Additional case study sections

### Service Model

Fields:

- Title
- Slug
- Short description
- Full description
- Service category
- Deliverables
- Featured service toggle

Core services:

- Graphic Design
- UI/UX / Product Design
- Web Development

### Testimonial Model

Fields:

- Client name
- Client role/company
- Quote
- Avatar/photo, optional
- Related project, optional
- Featured testimonial toggle

### Homepage Content Model

Fields:

- Hero headline
- Hero subtext
- Primary call-to-action text/link
- Secondary call-to-action text/link
- Featured projects
- Featured services
- Featured testimonials
- Optional announcement or availability message

## Build Phases

### Phase 0: Requirements and Planning

Status: Completed

Goals:

- Confirm the project purpose.
- Confirm brand direction, colors, typography, and tone.
- Confirm website pages and core features.
- Confirm local content scope.
- Create this README as the living project brief.

Exit criteria:

- README contains the agreed requirements and phase plan.
- User approves the direction before implementation begins.

### Phase 1: Project Foundation and Design System

Status: Completed

Goals:

- Review the existing Next.js structure.
- Add brand fonts.
- Add theme color tokens.
- Add light/dark theme foundation.
- Add logo asset to the project.
- Establish reusable layout primitives and global styling.

Exit criteria:

- App has the Cre8iq visual foundation.
- Theme switching foundation exists.
- No final page build is required yet.

Completed notes:

- Replaced the default Next.js metadata with Cre8iq metadata.
- Added Sora for headings and Cabin for body/UI text.
- Added global Cre8iq design tokens for light and dark mode.
- Added a system-aware theme initialization script.
- Copied the provided wordmark into `public/images/cre8iq-logo.png`.
- Added a reusable `BrandLogo` component.
- Replaced the default Next.js starter screen with a branded Cre8iq foundation screen.
- Added `turbopack.root` to `next.config.ts` to keep the project root explicit.
- Verified with `npm.cmd run lint`.
- Verified with `npm.cmd run build`.

### Phase 2: Core Layout and Navigation

Status: Completed

Goals:

- Build the main site shell.
- Add responsive navigation.
- Add footer.
- Add theme toggle.
- Add route structure for all confirmed pages.

Exit criteria:

- Visitors can navigate between all main pages.
- Layout works on mobile, tablet, and desktop.
- Theme toggle behaves correctly.

Completed notes:

- Added a shared site shell with header, footer, and skip link.
- Added responsive desktop and mobile navigation.
- Added active navigation states.
- Added a manual light/dark theme toggle that works with the Phase 1 theme system.
- Added route shells for Home, About, Services, Service Detail, Portfolio, Project Detail, and Contact.
- Added centralized site config for navigation, contact links, and service data.
- Added placeholder project data for initial portfolio routes.
- Verified with `npm.cmd run lint`.
- Verified with `npm.cmd run build`.
- Smoke-tested key local routes at `http://localhost:3000`.

### Phase 3: Static Page Experience

Status: Completed

Goals:

- Build Home, About, Services, Portfolio, and Contact page layouts using test data.
- Establish premium personal creative copy direction.
- Add responsive section layouts.
- Add contact CTAs for email and WhatsApp.
- Add CV download placeholder.

Exit criteria:

- Main pages are visually complete with test content.
- Contact paths are visible and usable.
- The site feels close to the intended brand direction.

Completed notes:

- Expanded placeholder content for homepage stats, process steps, tools, testimonials, services, and six sample projects.
- Rebuilt the Home page with a premium first screen, featured work, service previews, process, testimonials, and final CTA.
- Rebuilt the About page with personal brand positioning, strengths, process, tools, and CV download support.
- Rebuilt the Services page with detailed service cards, deliverables, process notes, and project-fit guidance.
- Expanded Service Detail pages with deliverables, process, related work, and service-specific CTA.
- Rebuilt the Portfolio page with project categories and richer project cards.
- Expanded Project Detail pages with visual previews, challenge/direction/outcome sections, highlights, and tools.
- Rebuilt the Contact page with email, WhatsApp, CV download, project-fit prompts, and direct contact details.
- Added `public/resume/cre8iq-resume-placeholder.txt` for temporary CV download support.
- Verified with `npm.cmd run lint`.
- Verified with `npm.cmd run build`.
- Smoke-tested key local routes and the resume placeholder at `http://localhost:3000`.

### Phase 4: Portfolio and Case Study System

Status: Completed

Goals:

- Build portfolio listing experience.
- Add filtering by category/service.
- Build project detail pages.
- Support simple projects and full case studies.
- Add polished project mockup/gallery presentation.

Exit criteria:

- Test projects render in the portfolio.
- Each project opens into the correct detail layout.
- Simple projects and case studies both work.

Completed notes:

- Expanded the placeholder portfolio data into a content-ready project model with project format, goals, metrics, galleries, simple-project handoff details, and full case-study sections.
- Added an interactive portfolio browser with filtering by discipline/category and service.
- Added portfolio archive counts, active filter states, clear filter behavior, and an empty-result state.
- Upgraded project cards with format labels, client/role context, service tags, and richer project previews.
- Rebuilt the reusable project visual system with distinct mockup styles for brand systems, dashboards, websites, social kits, mobile apps, and landing pages.
- Added polished project gallery presentation for each detail page.
- Rebuilt project detail pages so full case studies and simple projects render different content structures.
- Added related work and dynamic project metadata.
- Verified with `npm.cmd run lint`.
- Verified with `npm.cmd run build`.
- Smoke-tested production routes at `http://localhost:3000` for the portfolio index, one case study, and one simple project.

### Phase 5: Local Content System

Status: Completed

Goals:

- Create a local content source for projects, services, testimonials, and homepage content.
- Replace hardcoded page content with shared content getters.
- Keep content editable from the codebase without a third-party service.
- Support optional local project and gallery images.

Exit criteria:

- Content can be edited in local TypeScript files.
- Website pages read the correct data from the local content layer.
- Test content can be replaced from one documented content area.

Completed notes:

- Added a local content layer under `src/content`.
- Moved services, testimonials, homepage support content, and sample projects into editable local content exports.
- Added content getters for projects, services, testimonials, homepage content, related projects, and detail lookups.
- Updated the Home, Services, Service Detail, Portfolio, Project Detail, and sitemap routes to read through the local content layer.
- Kept generated project mockups as fallback previews when no local image is provided.
- Verified with `npm.cmd run lint`.
- Verified with `npm.cmd run build`.
- Smoke-tested production routes at `http://localhost:3000` for Home, Portfolio, Project Detail, Services, and Service Detail.

Needs attention:

- Replace sample projects and testimonials with real content in `src/content/local-content.ts`.
- Replace the placeholder resume/CV file before launch.

### Phase 6: Motion, Polish, and Interaction

Status: Completed

Goals:

- Add subtle premium animations.
- Refine hover states, transitions, and page rhythm.
- Improve loading, empty, and fallback states.
- Polish responsive details.

Exit criteria:

- Interactions feel smooth and refined.
- No text overlaps or layout breaks across common viewport sizes.
- Light and dark modes both feel intentional.

Completed notes:

- Added global motion and interaction primitives for page entrance, soft reveal, mobile menu entrance, card lift, button lift, text-link motion, mockup image scaling, and loading shimmer states.
- Added a route-aware page transition wrapper for smoother page changes.
- Added branded App Router fallback states: `loading.tsx`, `error.tsx`, and `not-found.tsx`.
- Refined header, navigation, mobile menu, theme toggle, CTA buttons, portfolio filters, project cards, service cards, testimonials, detail panels, and gallery cards.
- Added subtle generated mockup/image hover motion while respecting reduced-motion preferences.
- Improved empty/fallback presentation for portfolio filtering and missing pages.
- Verified with `npm.cmd run lint`.
- Verified with `npm.cmd run build`.
- Smoke-tested production routes on `http://localhost:3001` for Home, About, Portfolio, Project Detail, Services, Service Detail, Contact, and a 404 route.

### Phase 7: SEO, Accessibility, and Performance

Status: Completed

Goals:

- Add page metadata.
- Add dynamic project SEO.
- Add Open Graph/social preview metadata.
- Check color contrast.
- Check keyboard navigation.
- Optimize images and performance.

Exit criteria:

- Main pages have solid metadata.
- Project pages have dynamic metadata.
- Accessibility and performance issues are addressed.

Completed notes:

- Added centralized SEO helpers for site URL handling, absolute URLs, default SEO values, and JSON-LD data.
- Expanded global metadata with metadata base, title template, authorship, canonical URL, robots rules, Open Graph, and Twitter card defaults.
- Added Person and WebSite JSON-LD structured data.
- Added a generated Open Graph image route at `/opengraph-image`.
- Added `robots.txt` via `src/app/robots.ts`.
- Added `sitemap.xml` via `src/app/sitemap.ts`, including static pages, service detail pages, and project detail pages.
- Added dynamic metadata for service detail pages.
- Improved project detail metadata with canonical URLs, Open Graph images, and Twitter cards.
- Fixed page title templates so child pages do not duplicate `Cre8iq`.
- Added `NEXT_PUBLIC_SITE_URL` to `.env.local.example` for production canonical URLs and sitemap output.
- Added request-level caching around content helpers.
- Added image priority and quality controls for featured/project hero images.
- Checked core brand color contrast pairs; all tested pairs passed WCAG AA contrast thresholds for normal text.
- Verified with `npm.cmd run lint`.
- Verified with `npm.cmd run build`.
- Smoke-tested production routes on `http://localhost:3002` for core pages, detail pages, `robots.txt`, `sitemap.xml`, and `opengraph-image`.

### Phase 8: Testing and Deployment Preparation

Status: Completed

Goals:

- Run lint/build checks.
- Test local content data flow.
- Test contact links and forms.
- Test responsiveness.
- Prepare deployment environment variables.
- Prepare Vercel deployment.

Exit criteria:

- Production build passes.
- Site is ready to deploy.
- Any missing user-provided assets are clearly listed.

Completed notes:

- Added repeatable verification scripts:
  - `npm run check` for lint plus production build.
  - `npm run preflight` for deployment environment and required-file checks.
  - `npm run smoke` for route and SEO endpoint smoke checks against a running site.
- Added `scripts/preflight.mjs` to check required public env vars, required deployment files, contact config, ignored env files, and placeholder asset warnings.
- Added `scripts/smoke-test.mjs` to verify Home, About, Services, Service Detail, Portfolio, Project Detail, Contact, `robots.txt`, `sitemap.xml`, and `opengraph-image`.
- Added `DEPLOYMENT.md` with Vercel environment variables, local checks, deployed smoke-test command, and known launch blockers.
- Added `NEXT_PUBLIC_SITE_URL=http://localhost:3000` to the local env file for local canonical/sitemap testing.
- Verified contact configuration through preflight checks.
- Verified with `npm.cmd run preflight`.
- Verified with `npm.cmd run check`.
- Smoke-tested production routes on `http://localhost:3003` with `npm.cmd run smoke`.

Needs attention before launch:

- Set `NEXT_PUBLIC_SITE_URL` to the final production domain in Vercel.
- Replace the placeholder resume/CV file.
- Add real projects, services, testimonials, and homepage content in `src/content/local-content.ts`.
- Add social links when available.
- Decide whether email/WhatsApp CTAs are enough or a full contact form provider is needed.

### Phase 9: Deployment and Handover

Status: In progress

Goals:

- Deploy the website.
- Confirm production behavior.
- Document local content editing basics.
- Document how to update projects, services, testimonials, and homepage content.
- Update README with final launch notes.

Exit criteria:

- Live site is available.
- Local content workflow is documented.
- User can update portfolio content independently.

Completed notes:

- Added `CONTENT_GUIDE.md` with local editing basics for services, projects, testimonials, homepage content, images, and smoke testing.
- Expanded `DEPLOYMENT.md` with Phase 9 handover checks for local content, resume replacement, production env vars, and deployed route verification.
- Added a theme-aware sonar-grid background inspired by the 21st.dev reference, tuned for Cre8iq brand colors in light and dark mode.
- Blended the sonar treatment with the existing aurora, glassmorphism, and page background layers.

Needs attention before Phase 9 completion:

- Deploy to the final hosting target after the production URL is confirmed.
- Set `NEXT_PUBLIC_SITE_URL` to the final production domain.
- Add real services, projects, testimonials, and homepage content in `src/content/local-content.ts`.
- Replace the placeholder resume/CV file.
- Add social links when available.
- Decide whether email/WhatsApp CTAs are enough or a full contact form provider is needed.
- Run `npm run preflight`, `npm run check`, and deployed `npm run smoke` after production env vars and content are ready.

## Phase Log

### 2026-10-02: Phase 0 Started

- Confirmed the brand name, purpose, colors, fonts, tone, contact details, pages, theme behavior, local content scope, and portfolio content requirements.
- Created the first version of the living README project brief.
- User approved moving from planning into implementation.

### 2026-10-02: Phase 1 Completed

- Built the Cre8iq foundation layer in the existing Next.js app.
- Added brand fonts, color tokens, theme variables, and system-aware light/dark initialization.
- Added the provided logo asset and a reusable logo component.
- Replaced the default starter screen with a simple premium personal creative first screen.
- Lint passed with `npm.cmd run lint`.
- Production build passed with `npm.cmd run build`.

### 2026-10-02: Phase 2 Completed

- Built the shared site shell with responsive header, footer, skip link, navigation, and theme toggle.
- Added route shells for all confirmed pages and detail page patterns.
- Added centralized site config plus placeholder portfolio data.
- Lint passed with `npm.cmd run lint`.
- Production build passed with `npm.cmd run build`.
- Local route checks returned `200` for Home, About, Services, Service Detail, Portfolio, Project Detail, and Contact.

### 2026-10-02: Phase 3 Completed

- Expanded the static site experience using polished test data.
- Built richer Home, About, Services, Service Detail, Portfolio, Project Detail, and Contact pages.
- Added reusable presentation components for section intros, CTA bands, project cards, and project visuals.
- Added a temporary resume/CV placeholder file for download support.
- Lint passed with `npm.cmd run lint`.
- Production build passed with `npm.cmd run build`.
- Local route checks returned `200` for the main pages, detail pages, and resume placeholder.

### 2026-10-02: Phase 4 Completed

- Expanded sample portfolio projects with gallery entries, goals, metrics, case-study content, and simple-project handoff content.
- Added filtering by category and service on the Portfolio page.
- Added differentiated project detail layouts for case studies and simple portfolio entries.
- Added richer mockup/gallery presentation and related project recommendations.
- Added dynamic metadata for project detail pages.
- Lint passed with `npm.cmd run lint`.
- Production build passed with `npm.cmd run build`.
- Production route checks returned `200` for `/portfolio`, `/portfolio/aurelia-brand-refresh`, and `/portfolio/northline-studio-website`.

### 2026-10-02: Phase 5 Completed

- Added the local content layer under `src/content`.
- Added editable data for projects, services, testimonials, homepage content, process steps, and tools.
- Added local content getters for list pages, detail pages, homepage sections, related projects, and sitemap output.
- Updated the main content pages and detail pages to read from the local content layer.
- Updated `.env.local.example` so only `NEXT_PUBLIC_SITE_URL` is required for public metadata.
- Lint passed with `npm.cmd run lint`.
- Production build passed with `npm.cmd run build`.
- Production route checks returned `200` for `/`, `/portfolio`, `/portfolio/aurelia-brand-refresh`, `/services`, and `/services/graphic-design`.
- Real project and testimonial content still need to replace the sample local content before launch.

### 2026-10-02: Phase 6 Completed

- Added subtle motion and interaction primitives in global styles.
- Added route-level page transition behavior.
- Added branded loading, error, and not-found states.
- Refined hover, transition, and focus behavior across navigation, CTAs, filters, cards, galleries, mockups, and detail panels.
- Kept motion respectful of reduced-motion preferences.
- Lint passed with `npm.cmd run lint`.
- Production build passed with `npm.cmd run build`.
- Production route checks on port `3001` returned `200` for `/`, `/about`, `/portfolio`, `/portfolio/aurelia-brand-refresh`, `/services`, `/services/graphic-design`, and `/contact`; the test missing route returned `404` as expected.

### 2026-10-02: Phase 7 Completed

- Added site-wide SEO defaults, canonical handling, Open Graph, Twitter card metadata, and JSON-LD structured data.
- Added generated `/opengraph-image`, `/robots.txt`, and `/sitemap.xml` routes.
- Added dynamic service detail metadata and improved project detail metadata.
- Added `NEXT_PUBLIC_SITE_URL` to `.env.local.example` for production URL configuration.
- Added request-level caching around content helpers.
- Added priority/quality controls for important project images.
- Checked core light/dark brand color contrast pairs; tested pairs passed WCAG AA thresholds.
- Lint passed with `npm.cmd run lint`.
- Production build passed with `npm.cmd run build`.
- Production route checks on port `3002` returned `200` for `/`, `/about`, `/portfolio`, `/portfolio/aurelia-brand-refresh`, `/services`, `/services/graphic-design`, `/contact`, `/robots.txt`, `/sitemap.xml`, and `/opengraph-image`.

### 2026-10-02: Phase 8 Completed

- Added deployment-prep helper scripts for preflight checks and smoke testing.
- Added `npm run check`, `npm run preflight`, and `npm run smoke`.
- Added `DEPLOYMENT.md` with Vercel and smoke-test instructions.
- Added `NEXT_PUBLIC_SITE_URL=http://localhost:3000` to `.env.local` for local metadata and sitemap checks.
- Preflight passed with warnings for local `NEXT_PUBLIC_SITE_URL` and the placeholder resume/CV.
- Lint and production build passed with `npm.cmd run check`.
- Production smoke test on port `3003` passed for all configured smoke routes and SEO endpoints.

### 2026-10-03: Phase 9 Started

- Added a theme-aware sonar-grid background layer using the Cre8iq brand colors in light and dark mode.
- Tuned the global aurora and glassmorphism layers so the new background blends across the site.
- Added `CONTENT_GUIDE.md` with handover instructions for updating services, projects, testimonials, and homepage content in local files.
- Expanded `DEPLOYMENT.md` with Phase 9 handover checks and deployed smoke-test guidance.
- Updated Phase 9 status to in progress because the final production URL, live content, resume/CV, social links, and contact-form decision are still pending.

## Open Decisions

- Final production URL for `NEXT_PUBLIC_SITE_URL`.
- Social media links.
- Actual resume/CV file.
- Real portfolio project content.
- Real testimonials.
- Contact form provider.
- Final hosting/domain choice.

## Development Commands

```bash
npm run dev
npm run check
npm run preflight
npm run smoke
npm run build
npm run lint
```

## Development Troubleshooting

- If `npm run dev` says another Next dev server is already running, use the existing `http://localhost:3000` server or stop the listed PID before starting a new one.
