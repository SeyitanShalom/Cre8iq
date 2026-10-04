# Cre8iq Local Content Guide

This portfolio now uses local TypeScript files as its content system. No third-party editor, Studio route, API keys, or external content service is required.

## Main Content Files

- Homepage text, stats, process, tools, services, testimonials, and portfolio projects: `src/content/local-content.ts`
- Content getter functions used by pages: `src/content/index.ts`
- Contact details, navigation, and resume path: `src/lib/site.ts`
- Resume/CV file: `public/resume/`
- Image assets: `public/images/`

## Editing Workflow

1. Edit the relevant data object in `src/content/local-content.ts`.
2. Keep project `slug` values stable after publishing links.
3. Add images to `public/images/` and reference them with paths like `/images/project-cover.jpg`.
4. Run `npm run check` before deploying.
5. Run `npm run smoke` against a local or deployed site when you want a route check.

## Projects

Each project supports simple portfolio entries and deeper case studies.

Important fields:

- `title`
- `slug`
- `category`
- `format`: `Case study` or `Simple project`
- `featured`
- `year`
- `client`
- `role`
- `accent`
- `visual`
- `summary`
- `services`
- `tools`
- `gallery`
- `caseStudy` or `simpleProject`
- `seoTitle`
- `seoDescription`

## Services

Services live in the exported `services` array. Keep the service `title` aligned with project `services` values so related project filtering keeps working.

## Images

Project and gallery images are optional. If `imageUrl` is omitted, the site renders the existing branded mockup visuals. For local images, use public paths:

```ts
imageUrl: "/images/aurelia-cover.jpg",
imageAlt: "Aurelia brand refresh mockup",
```

## Deployment Notes

Only `NEXT_PUBLIC_SITE_URL` is required for production metadata, canonical URLs, and the sitemap. Content changes are deployed with the codebase.
