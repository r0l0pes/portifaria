# Deployment Guide for Netlify

## Pre-Deployment Checklist ✅

All the following have been completed:

- [x] Removed unused Gemini API key configuration
- [x] Added missing script tag to index.html
- [x] Generated package-lock.json for reproducible builds
- [x] Created netlify.toml with build configuration
- [x] Created public/_redirects for SPA routing
- [x] Added security headers in netlify.toml
- [x] Updated README with deployment instructions
- [x] Tested production build successfully
- [x] Build generates proper JavaScript bundle (583KB min, 177KB gzip)

## Quick Deploy to Netlify

### Method 1: Drag & Drop (Fastest)

1. Run the build:
   ```bash
   npm run build
   ```

2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag the `dist` folder to the deployment zone

4. Done! Netlify will give you a URL

### Method 2: Connect Git Repository (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [https://app.netlify.com/](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository
   - Netlify auto-detects settings from `netlify.toml`
   - Click "Deploy site"

3. **Configure Custom Domain (Optional):**
   - In Netlify dashboard → Site settings → Domain management
   - Add custom domain: `rodrigolopes.eu`
   - Follow DNS configuration instructions

### Method 3: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

## Post-Deployment Verification

After deployment, verify the following:

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] Dark mode toggle works
- [ ] Navigation works (Experience, Work, Writings, Contact)
- [ ] Case study modals open and close
- [ ] Blog post views work
- [ ] Archive view accessible
- [ ] Contact form opens email client
- [ ] All links (LinkedIn, GitHub) work
- [ ] Smooth scrolling works
- [ ] Mobile menu works on small screens

### Technical Tests
- [ ] Check browser console for errors
- [ ] Test on mobile devices
- [ ] Verify Open Graph tags: [https://www.opengraph.xyz/](https://www.opengraph.xyz/)
- [ ] Check page load speed: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
- [ ] Verify dark/light mode persistence

### SEO Checks
- [ ] Meta tags present (view page source)
- [ ] Social media preview works (share on LinkedIn/Twitter)
- [ ] Favicon appears in browser tab

## Build Information

**Current Build Output:**
- HTML: 3.16 kB (1.24 kB gzipped)
- JavaScript: 583.83 kB (177.40 kB gzipped)
- Total: ~587 kB (~179 kB over network)

**Dependencies Loaded from CDN:**
- Tailwind CSS
- Google Fonts (Inter)
- React 19.2.3 (via esm.sh)
- Recharts 3.6.0 (via esm.sh)
- Lucide React 0.562.0 (via esm.sh)

## Performance Optimization Notes

The bundle is currently 583 KB because:
- All case studies and blog content are bundled
- Recharts library adds significant size
- No code splitting implemented

**Future optimizations (optional):**
1. Implement code splitting for archive view
2. Lazy load Recharts
3. Consider static content in separate JSON files
4. Bundle Tailwind CSS instead of CDN

For now, the 177 KB gzipped size is acceptable for a portfolio site.

## Security Features

The following security headers are configured in `netlify.toml`:
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Privacy
- `Permissions-Policy` - Disables unnecessary browser features

## Troubleshooting

### Issue: 404 on page refresh
**Solution:** The `_redirects` file should handle this. If not:
- Check `netlify.toml` is in repository root
- Verify `public/_redirects` exists
- Redeploy

### Issue: Styles not loading
**Solution:** Check browser console. Tailwind CSS loads from CDN, requires internet.

### Issue: Dark mode not persisting
**Solution:** This is expected - dark mode state is not saved to localStorage (by design).

## Support

For Netlify-specific issues:
- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Community](https://answers.netlify.com/)

For build issues:
- Check build logs in Netlify dashboard
- Ensure Node.js version compatibility (v18+)
- Verify all dependencies installed

---

**Ready to deploy!** Choose your preferred method above and go live. 🚀
