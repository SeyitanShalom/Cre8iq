# Cre8iq Deployment Checklist

Use this checklist before deploying to Vercel.

## Required Environment Variables

Set these in Vercel Project Settings > Environment Variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

`NEXT_PUBLIC_SITE_URL` controls canonical URLs, sitemap URLs, and social metadata.

## Local Content Setup

- Edit portfolio content in `src/content/local-content.ts`.
- Edit navigation, contact details, and the resume path in `src/lib/site.ts`.
- Add image files to `public/images/` and reference them with `/images/...` paths.
- Read `CONTENT_GUIDE.md` before adding or replacing live content.

## Local Checks

```bash
npm run preflight
npm run check
```

To smoke-test a running local or deployed site:

```bash
npm run start -- --port 3000
npm run smoke
```

For a deployed URL:

```bash
SMOKE_BASE_URL=https://your-production-domain.com npm run smoke
```

PowerShell:

```powershell
$env:SMOKE_BASE_URL="https://your-production-domain.com"; npm run smoke
```

## Phase 9 Handover Checks

- Read `CONTENT_GUIDE.md` before adding live content.
- Add live services, projects, testimonials, and homepage content in `src/content/local-content.ts`.
- Replace the resume/CV placeholder in `public/resume/`.
- Re-run `npm run preflight` after production environment variables are set.
- Run the deployed smoke test with `SMOKE_BASE_URL` set to the production URL.
- Check the public pages after deploying content changes:
  - Home
  - About
  - Services
  - Service detail
  - Portfolio
  - Project detail
  - Contact
  - `robots.txt`
  - `sitemap.xml`
  - `opengraph-image`

## Known Launch Blockers

- Replace the placeholder resume/CV file.
- Add real portfolio projects and testimonials in the local content file.
- Add final social links when available.
- Decide the contact form provider if a full form is needed instead of email/WhatsApp CTAs.
