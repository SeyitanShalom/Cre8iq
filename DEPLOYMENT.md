# Cre8iq Deployment Checklist

Use this checklist before deploying to Vercel.

## Required Environment Variables

Set these in Vercel Project Settings > Environment Variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-10-02
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

`NEXT_PUBLIC_SITE_URL` controls canonical URLs, sitemap URLs, and social metadata.

## Sanity Setup

- Add the production domain to Sanity CORS origins with credentials enabled.
- Keep `http://localhost:3000` in Sanity CORS for local Studio work.
- Confirm `/studio` opens and the logged-in Sanity account has project access.
- Create or confirm at least one project, service, testimonial, and homepage document.

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

## Known Launch Blockers

- Replace the placeholder resume/CV file.
- Add real portfolio projects and testimonials in Sanity.
- Add final social links when available.
- Decide the contact form provider if a full form is needed instead of email/WhatsApp CTAs.
