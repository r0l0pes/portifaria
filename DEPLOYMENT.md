# Deployment Guide for Vercel

## Pre-Deployment Checklist ✅

All the following have been completed:

- [x] Created `vercel.json` with build configuration and SPA routing
- [x] Configured security headers (X-Frame-Options, CSP, etc.)
- [x] Linked project to Vercel via CLI
- [x] Initial production deployment successful
- [x] Added custom domain `rodrigolopes.eu` to project

## Current Status

- **Preview URL:** [https://portifaria.vercel.app](https://portifaria.vercel.app)
- **Production URL:** [https://rodrigolopes.eu](https://rodrigolopes.eu) (Awaiting DNS update)

## Domain Migration (Gandi)

To finalize the migration from Netlify to Vercel, follow these steps in your Gandi account:

### Method: Change Nameservers (Recommended)

1. Log in to [Gandi.net](https://admin.gandi.net/)
2. Go to **Domain Name** > `rodrigolopes.eu`
3. Click on the **Nameservers** tab
4. Replace the existing Netlify nameservers (nsone.net) with Vercel's:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
5. Save changes.

*Propagation can take anywhere from 1 to 24 hours, but usually happens within minutes.*

## Maintenance & Updates

### Automatic Deploys (Recommended)
Vercel is configured to watch your GitHub repository. Any push to the `main` branch will trigger a production deployment automatically.

### Manual Deploys via CLI
If you want to deploy manually:
```bash
npx vercel --prod
```

## Security & Performance

The site is configured in `vercel.json` with:
- **SPA Rewrites**: All routes serve `index.html` to allow React Router to handle navigation.
- **Security Headers**:
  - `X-Frame-Options: DENY`
  - `Content-Security-Policy`: Configured for Google Tag Manager and Fonts.
  - `Strict-Transport-Security`: Handled automatically by Vercel.

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
