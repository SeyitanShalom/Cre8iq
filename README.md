# Cre8iq Portfolio Website

Cre8iq is a premium personal creative portfolio for a graphic designer, UI/UX/product designer, and web developer. The website should feel polished and high-end while still making it clear that Cre8iq is a personal work brand, not a large agency.

This README is the living project brief. It should be updated at the end of every build phase with what was completed, what changed, and what still needs attention.

## Project Goals

- Attract freelance/client work.
- Support job and opportunity applications.
- Present services clearly.
- Showcase graphic design, UI/UX/product design, and web development projects.
- Build trust around Cre8iq as a premium personal creative brand.
- Allow portfolio content to be managed through a CMS without editing code.

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
- CMS-managed portfolio projects.
- CMS-managed services.
- CMS-managed testimonials.
- CMS-managed homepage featured content.
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

The test content should be easy to replace from the CMS later.

## Recommended Tech Stack

The current project is already a Next.js app.

- Frontend: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- CMS: Sanity
- Animations: Framer Motion
- Deployment target: Vercel
- Media: Sanity image CDN
- Contact handling: To be decided later, likely Resend, Formspree, or a serverless endpoint

## CMS Requirements

The CMS should manage portfolio projects, services, testimonials, and homepage featured content.

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
- Confirm CMS scope.
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

Status: Not started

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

### Phase 5: CMS Integration

Status: Not started

Goals:

- Add Sanity CMS.
- Create CMS schemas for projects, services, testimonials, and homepage content.
- Replace test data with CMS-driven content.
- Configure Sanity image handling.

Exit criteria:

- Content can be created and edited from Sanity.
- Website pages read the correct data from the CMS.
- Test content can be replaced without code changes.

### Phase 6: Motion, Polish, and Interaction

Status: Not started

Goals:

- Add subtle premium animations.
- Refine hover states, transitions, and page rhythm.
- Improve loading, empty, and fallback states.
- Polish responsive details.

Exit criteria:

- Interactions feel smooth and refined.
- No text overlaps or layout breaks across common viewport sizes.
- Light and dark modes both feel intentional.

### Phase 7: SEO, Accessibility, and Performance

Status: Not started

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

### Phase 8: Testing and Deployment Preparation

Status: Not started

Goals:

- Run lint/build checks.
- Test CMS data flow.
- Test contact links and forms.
- Test responsiveness.
- Prepare deployment environment variables.
- Prepare Vercel deployment.

Exit criteria:

- Production build passes.
- Site is ready to deploy.
- Any missing user-provided assets are clearly listed.

### Phase 9: Deployment and Handover

Status: Not started

Goals:

- Deploy the website.
- Confirm production behavior.
- Document CMS usage basics.
- Document how to update projects, services, testimonials, and homepage content.
- Update README with final launch notes.

Exit criteria:

- Live site is available.
- CMS workflow is documented.
- User can update portfolio content independently.

## Phase Log

### 2026-10-02: Phase 0 Started

- Confirmed the brand name, purpose, colors, fonts, tone, contact details, pages, theme behavior, CMS scope, and portfolio content requirements.
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

## Open Decisions

- Social media links.
- Actual resume/CV file.
- Real portfolio project content.
- Real testimonials.
- Contact form provider.
- Final hosting/domain choice.

## Development Commands

```bash
npm run dev
npm run build
npm run lint
```
