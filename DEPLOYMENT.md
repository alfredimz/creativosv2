# Deployment Guide - Creativos Espacios

This guide provides comprehensive instructions for deploying the Creativos Espacios website to production.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Variables](#environment-variables)
3. [Building for Production](#building-for-production)
4. [Deployment Platforms](#deployment-platforms)
5. [Post-Deployment Verification](#post-deployment-verification)
6. [SEO Configuration](#seo-configuration)
7. [Analytics Setup](#analytics-setup)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- Git repository access
- EmailJS account configured
- Google Tag Manager container created
- Google Ads conversion tracking setup
- Domain configured (creativosespacios.mx)

---

## Environment Variables

### 1. Create Environment File

Copy the `.env.example` file to create your environment configuration:

```bash
# For local development
cp .env.example .env.local

# For production (if deploying with file-based config)
cp .env.example .env.production
```

### 2. Configure Required Variables

Update the following variables in your environment file:

#### Analytics & Tracking (Already Configured)
```bash
REACT_APP_GTM_ID=GTM-M2Z9THQF
REACT_APP_GA_CONVERSION=AW-11471696489
```

#### EmailJS Configuration (REQUIRED)
```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAIL_DESTINATION=ventas@creativosespacios.mx
```

**To get EmailJS credentials:**
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Create or select a service
3. Create an email template
4. Copy Service ID, Template ID, and Public Key

#### Application Configuration
```bash
REACT_APP_SITE_URL=https://www.creativosespacios.mx
REACT_APP_ENV=production
```

#### Feature Flags
```bash
REACT_APP_ENABLE_PWA=true
REACT_APP_ENABLE_ANALYTICS_DEV=false
REACT_APP_ENABLE_COOKIE_CONSENT=true
```

---

## Building for Production

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Production Build

```bash
npm run build
```

This will create an optimized production build in the `build/` directory.

**Expected Output:**
- Main JS bundle: ~146 KB (gzipped)
- Main CSS bundle: ~39 KB (gzipped)
- 41 route-based chunks
- Total build size: ~9.9 MB (before compression)

### 3. Test Production Build Locally

```bash
# Install serve globally if not already installed
npm install -g serve

# Serve the build directory
serve -s build -p 3000
```

Open http://localhost:3000 to verify the production build works correctly.

---

## Deployment Platforms

### Option 1: Vercel (Recommended)

Vercel provides seamless deployment for React applications with automatic SSL and CDN.

#### Deploy via CLI

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy to Production:**
```bash
vercel --prod
```

#### Deploy via Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Import Project"
4. Select your repository
5. Configure:
   - **Framework Preset:** Create React App
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`

6. Add environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add all `REACT_APP_*` variables from your `.env.production`

7. Deploy

#### Custom Domain Configuration (Vercel)

1. Go to Project Settings > Domains
2. Add domain: `creativosespacios.mx`
3. Add domain: `www.creativosespacios.mx`
4. Configure DNS records as instructed by Vercel

---

### Option 2: Netlify

Netlify offers similar features to Vercel with drag-and-drop deployment.

#### Deploy via Drag & Drop

1. Build your project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `build` folder to the drop zone

#### Deploy via CLI

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Login:**
```bash
netlify login
```

3. **Initialize:**
```bash
netlify init
```

4. **Deploy:**
```bash
netlify deploy --prod
```

#### Deploy via Git Integration

1. Push code to Git repository
2. Go to [Netlify Dashboard](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`

6. Add environment variables in Netlify dashboard:
   - Go to Site Settings > Build & Deploy > Environment
   - Add all `REACT_APP_*` variables

7. Deploy

#### Custom Domain Configuration (Netlify)

1. Go to Domain Settings
2. Add custom domain: `creativosespacios.mx`
3. Configure DNS records as instructed
4. Enable HTTPS (automatic with Let's Encrypt)

---

### Option 3: Traditional Hosting (Apache/Nginx)

For traditional web hosting with Apache or Nginx.

#### Apache Configuration

1. Build the project: `npm run build`
2. Upload `build/` contents to your web server
3. Create `.htaccess` file in the root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Set Cache Headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

#### Nginx Configuration

Add to your Nginx configuration:

```nginx
server {
    listen 80;
    server_name creativosespacios.mx www.creativosespacios.mx;
    root /var/www/creativos/build;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
    gzip_min_length 1000;

    # Cache Static Assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA Routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Service Worker
    location /service-worker.js {
        add_header Cache-Control "no-cache";
        expires 0;
    }
}
```

---

## Post-Deployment Verification

After deploying, verify the following:

### 1. Basic Functionality
- [ ] Homepage loads correctly
- [ ] Navigation works across all pages
- [ ] All 37 pages are accessible
- [ ] Images load properly
- [ ] Forms are functional
- [ ] Mobile responsive design works

### 2. SEO Verification
- [ ] Check meta tags: `curl -I https://www.creativosespacios.mx`
- [ ] Verify Open Graph tags in page source
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify canonical URLs point to correct domain
- [ ] Check robots.txt: `https://www.creativosespacios.mx/robots.txt`
- [ ] Check sitemap.xml: `https://www.creativosespacios.mx/sitemap.xml`

### 3. PWA Verification
- [ ] Test offline functionality
- [ ] Verify service worker registration in DevTools
- [ ] Check manifest.json loads correctly
- [ ] Test "Add to Home Screen" on mobile
- [ ] Verify offline page loads when disconnected

### 4. Performance Testing
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Run [GTmetrix](https://gtmetrix.com/)
- [ ] Check Core Web Vitals in Google Search Console
- [ ] Test load time from different geographic locations
- [ ] Verify Gzip compression is working

### 5. Analytics Verification
- [ ] Verify Google Tag Manager loads: Check Network tab for GTM-M2Z9THQF
- [ ] Test form submissions trigger conversions
- [ ] Verify MailChimp tracking works
- [ ] Check Google Analytics in real-time report
- [ ] Test conversion tracking with Google Tag Assistant

### 6. Accessibility Testing
- [ ] Run [WAVE accessibility tool](https://wave.webaim.org/)
- [ ] Test keyboard navigation
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Verify ARIA labels are present
- [ ] Check color contrast ratios

### 7. Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## SEO Configuration

### 1. Submit Sitemap to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.creativosespacios.mx`
3. Verify ownership (via DNS or HTML file)
4. Submit sitemap: `https://www.creativosespacios.mx/sitemap.xml`

### 2. Submit to Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site
3. Verify ownership
4. Submit sitemap

### 3. Configure Google My Business

1. Claim business listing
2. Add website URL: `https://www.creativosespacios.mx`
3. Ensure NAP (Name, Address, Phone) consistency

### 4. Set Up Google Analytics 4

1. Create GA4 property
2. Add measurement ID to Google Tag Manager
3. Configure enhanced measurement
4. Set up conversion events

---

## Analytics Setup

### Google Tag Manager Configuration

The site already includes GTM container ID: **GTM-M2Z9THQF**

#### Verify GTM Installation:

1. Open site in browser
2. Open DevTools > Network tab
3. Search for "gtm.js" - should load successfully
4. Use [Google Tag Assistant](https://tagassistant.google.com/) to verify tags fire

#### Configure Tags in GTM:

1. **Google Analytics 4 Tag**
   - Tag Type: Google Analytics: GA4 Configuration
   - Measurement ID: (your GA4 measurement ID)
   - Trigger: All Pages

2. **Google Ads Conversion Tag**
   - Tag Type: Google Ads Conversion Tracking
   - Conversion ID: AW-11471696489
   - Conversion Label: (your conversion label)
   - Trigger: Form Submission

3. **Form Submission Events**
   - Track conversions from:
     - Contact form (/contacto)
     - Quote form - Sales (/cotizador-venta)
     - Quote form - Rental (/cotizador-renta)
     - Customer profiler (/perfilador-cliente)

### EmailJS Setup

Forms are configured to use EmailJS. Current destination: **ventas@creativosespacios.mx**

1. Create EmailJS account
2. Add email service (Gmail, Outlook, etc.)
3. Create email templates for each form type
4. Update environment variables with credentials
5. Test each form after deployment

---

## Troubleshooting

### Issue: Blank Page After Deployment

**Cause:** Incorrect base path or routing configuration

**Solution:**
1. Check `package.json` has correct `homepage` field (should be "/" for root domain)
2. Verify `.htaccess` or server config has proper rewrite rules
3. Check browser console for JavaScript errors

### Issue: Routes Return 404

**Cause:** Server not configured for SPA routing

**Solution:**
- **Vercel:** Add `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

- **Netlify:** Add `_redirects` file in `public/`:
```
/*    /index.html   200
```

- **Apache:** Ensure `.htaccess` rewrite rules are present (see above)

### Issue: Environment Variables Not Working

**Cause:** Variables not prefixed with `REACT_APP_` or not set in hosting platform

**Solution:**
1. Ensure all variables start with `REACT_APP_`
2. Set variables in hosting platform dashboard
3. Redeploy after adding variables
4. Clear cache and rebuild

### Issue: Images Not Loading

**Cause:** Incorrect image paths or missing files

**Solution:**
1. Ensure images are in `public/images/` directory
2. Use relative paths starting with `/images/...`
3. Check image files were included in build
4. Verify Content-Type headers for images

### Issue: Forms Not Sending

**Cause:** EmailJS not configured or invalid credentials

**Solution:**
1. Verify EmailJS environment variables are set
2. Check EmailJS service is active
3. Verify email template IDs are correct
4. Check browser console for EmailJS errors
5. Test EmailJS credentials in their dashboard

### Issue: Service Worker Caching Issues

**Cause:** Old service worker serving cached content

**Solution:**
1. Clear browser cache and service workers
2. Unregister old service worker in DevTools > Application > Service Workers
3. Add cache busting to service worker
4. Use "Update on reload" in DevTools during development

### Issue: Analytics Not Tracking

**Cause:** GTM not loading or tags not firing

**Solution:**
1. Verify GTM container ID is correct: GTM-M2Z9THQF
2. Check Network tab for gtm.js loading
3. Use Google Tag Assistant Chrome extension
4. Preview tags in GTM dashboard
5. Ensure analytics scripts aren't blocked by ad blockers

### Issue: Poor Performance Scores

**Cause:** Large bundle size or unoptimized assets

**Solution:**
1. Enable Gzip/Brotli compression on server
2. Optimize images (use WebP format)
3. Enable browser caching
4. Use CDN for static assets
5. Check bundle analyzer for large dependencies:
```bash
npm install --save-dev webpack-bundle-analyzer
npm run build -- --stats
```

---

## Maintenance

### Regular Tasks

- **Weekly:**
  - Monitor Google Analytics for traffic patterns
  - Check Google Search Console for crawl errors
  - Review form submissions

- **Monthly:**
  - Update dependencies: `npm outdated`
  - Review and update content
  - Check Core Web Vitals metrics
  - Backup database/content

- **Quarterly:**
  - Security audit
  - Performance optimization review
  - SEO audit
  - Accessibility testing

### Security Best Practices

1. Keep dependencies updated
2. Use HTTPS only (enforce SSL)
3. Set security headers:
   ```
   X-Content-Type-Options: nosniff
   X-Frame-Options: SAMEORIGIN
   X-XSS-Protection: 1; mode=block
   Referrer-Policy: strict-origin-when-cross-origin
   ```
4. Monitor for security vulnerabilities: `npm audit`
5. Use Content Security Policy (CSP)

---

## Support

For deployment issues or questions:

- **Email:** ventas@creativosespacios.mx
- **Documentation:** See `.ai-docs/` folder in repository
- **Project Status:** See `.ai-docs/00_PROJECT_CONTEXT.md`

---

## Additional Resources

- [Create React App Deployment Docs](https://create-react-app.dev/docs/deployment/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Google Tag Manager Guide](https://support.google.com/tagmanager)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Google Search Console Help](https://support.google.com/webmasters/)

---

**Document Version:** 1.0
**Last Updated:** December 2024
**Project:** Creativos Espacios v2
**Status:** Ready for Production Deployment
