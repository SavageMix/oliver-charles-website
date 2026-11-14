# Website Build Guide — Master Reference & Prompt

Everything learned building the Oliver Charles Garden Design & Build site (Next.js static site + Express API on Render). Use this as the briefing document / prompt for any new client website.

---

## 1. Stack & Architecture

| Layer | Choice | Why |
|---|---|---|
| Frontend | Next.js 16 (App Router) + TypeScript + Tailwind | Static export, SSG, file-based routing, per-page SEO metadata |
| Build | `output: 'export'`, `distDir: 'dist'`, `trailingSlash: true`, `images: { unoptimized: true }` | Produces a plain static site an Express server can serve |
| API | Express 5 (`server.js`) — NOT Next API routes | Static export can't ship API routes; Express handles them at runtime |
| Email | Resend | Simple transactional API; `from` and `to` are the business mailbox |
| Hosting | Render (node `server.js` serving `dist/`) | One service hosts site + API |
| DNS | Cloudflare | DNS, proxying, SSL, redirect rules |
| Tracking | Google Ads (AW tag) + GA4 + GTM | ⚠️ See §4 — this should be ONE system on the next build |

**`package.json` scripts:**
```json
"dev": "next dev",
"build": "next build",
"start": "node server.js",
"lint": "next lint"
```

**Server endpoints:**
- `POST /api/contact` — contact form (rate limit: 10/hour/IP)
- `GET /api/reviews` — Google Places reviews proxy (rate limit: 100/15min)
- `GET /api/reviews/status` — diagnostic
- `GET /api/health` — monitoring
- `GET /sitemap.xml`, `GET /robots.txt` — explicit routes so crawlers always get correct content-type

---

## 2. THE #1 LESSON — One Domain, Everywhere, From Day One

We launched with a `.co.uk` → `.com` redirect while every SEO asset said `.co.uk`. Google ended up **indexing and displaying the redirecting domain**, so every organic visitor bounced through a 301. Took months to notice.

**Rules for the new build:**
1. Decide the canonical domain **before writing any code** (for UK trades, `.co.uk` usually wins on local trust — that's what we chose here).
2. Point ALL of these at the SAME final domain, with `www` chosen and used consistently:
   - `metadata` canonical helper `BASE_URL` (feeds every page's `<link rel="canonical">`)
   - `public/sitemap.xml` — every `<loc>`
   - `public/robots.txt` — `Host:` and `Sitemap:` lines
   - Schema.org `@id`, `url`, `sameAs`, `openGraph.url` in the root layout
   - Google Business Profile website link
   - Google Ads final URLs (must NOT redirect — Ads dislikes redirecting landing pages)
3. The other domain(s) get a Cloudflare **301 redirect rule with path preservation**: `old.com/*` → `https://www.newdomain.co.uk/$1`.
4. Apex domain → `www` redirect too, since all canonicals use `www`.
5. Verify after setup:
   ```bash
   curl -sI https://www.canonical.co.uk | head -5   # expect 200
   curl -sI https://old.com/some-page               # expect 301 → canonical URL, path preserved
   ```
   And check `site:canonicaldomain.co.uk` in Google after a few days.

---

## 3. Contact Form — The Correct Pattern

**Frontend (both forms — home hero + contact page):**
```typescript
const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:3001/api/contact'   // dev only: Express runs on 3001
  : '/api/contact';                        // production: RELATIVE — never hardcode the domain
```
**Why:** we originally hardcoded `https://www...co.uk/api/contact` and hit `CORS: Response to preflight request doesn't pass access control check: Redirect is not allowed for a preflight request` whenever the site was visited via the other domain. A relative URL is same-origin and immune to domain issues.

**Server (Express):**
- CORS allowlist of **exact origins** (both domains + localhost + optional `FRONTEND_URL` env var). Allow requests with no Origin header (curl, server-to-server).
- `trust proxy: 1` (required for correct client IPs behind Render).
- Validate server-side even though the form has `required` attributes (phone regex, required fields).
- **Email template must include EVERY form field** — we shipped one that collected email but never sent it. Keep template in sync with the form.

**Gotcha — rate limiting:** 10 submissions/hour/IP. While testing repeatedly you'll hit `429 Too many`. Don't mistake it for a bug (we did).

---

## 4. Google Tracking — Do It Right (Our Mistakes Included)

We ran **three overlapping systems** (GA4 direct + Google Ads tag direct + GTM) — a double-counting risk. On the new build pick **one**: either GTM-everything, or direct gtag only.

**Google Ads conversion tracking — the parts that matter:**
1. The base tag (`gtag('config', 'AW-XXXX')` in `<head>`) only LOADS the tag. It records **nothing** by itself.
2. A conversion requires an explicit event on success:
   ```typescript
   const gtag = (window as any).gtag;  // TypeScript doesn't know this global — without the cast, `next build` FAILS
   if (typeof gtag === 'function') {
     gtag('event', 'conversion', {
       send_to: 'AW-XXXXXXX/CONVERSION_LABEL',  // label = string after the slash
       value: 1.0,
       currency: 'GBP',
     });
   }
   ```
   Fire it only after `response.ok` — not on click, not on validation failure.
3. **Get the label:** Google Ads → Goals → Conversions → New conversion action → *Manually with code* → create → "See event snippet". Copy the part after `AW-.../`.
4. **Auto-detected conversions are URL-based** (e.g., "form submitted on page containing '/contact/'"). They can't catch forms on other pages. One manual conversion action fired from BOTH form components covers the whole site.
5. **Don't run an auto-detected conversion AND a manual one on the same page** — one lead records twice. Keep one as "Secondary" or remove it.
6. Workflow that worked: add the code with a `REPLACE_WITH_CONVERSION_LABEL` placeholder, push, then swap the real label in when the client brings it from their Google Ads call.

**CSP — helmet will silently block Google otherwise.** Console fills with `Refused to connect ... violates Content Security Policy: connect-src 'self'`. Directives need the FULL Google family, including **regional analytics subdomains**:
```javascript
connectSrc: ["'self'",
  "https://www.googletagmanager.com", "https://*.googletagmanager.com",
  "https://www.google-analytics.com", "https://*.google-analytics.com",
  "https://*.analytics.google.com",        // ← region1.analytics.google.com etc. — easy to miss
  "https://ad.doubleclick.net", "https://googleads.g.doubleclick.net",
  "https://www.googleadservices.com", "https://www.google.com",
],
scriptSrc:  ["'self'", "'unsafe-inline'", /* googletagmanager + google-analytics + doubleclick domains */],
imgSrc:     ["'self'", "data:", "https:", /* same Google set */],
frameSrc:   ["'self'", "https://www.google.com"],
```
(`'unsafe-inline'` in scriptSrc is needed for inline gtag/GTM snippets; accepted trade-off.)

---

## 5. Local SEO Features (replicate all of these)

- Root layout metadata: title, description, keywords, canonical, OpenGraph (+ `og-image.jpg` 1200×630), Twitter card, robots, **Google site verification** meta.
- `app/lib/metadata.ts` helper generating per-page canonical + title/description so every page self-canonicalises.
- Schema.org JSON-LD in root layout: `HomeAndConstructionBusiness` (name, geo, address, areaServed cities, openingHours, sameAs → GBP/Facebook/Instagram, priceRange).
- Per-page schema: `BreadcrumbList` + `ContactPage`.
- `public/sitemap.xml` (static is fine for small sites — note `lastmod` won't auto-update; regenerate or use `app/sitemap.ts`) and `public/robots.txt`.
- Real towns + postcodes in copy, project locations, area pages (`/areas/amersham/` etc.).
- GBP listing linked to the canonical domain; reviews pulled via Places API.

---

## 6. Deployment & Git Workflow

1. Render service runs `npm run build` then `node server.js`. Env vars in Render dashboard (`RESEND_API_KEY`, `BUSINESS_EMAIL`, `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`, `FRONTEND_URL`).
2. **ALWAYS run `npm run build` locally before pushing.** We pushed a TS error (`gtag` not defined) that failed the Render build. One local build = one saved deploy cycle.
3. **Do NOT commit `dist/`.** We did (566 files, "included for static hosting") — a stale committed bundle is exactly how the home page kept serving old broken JS after the fix. Let the host build from source.
4. Render logs are your friend: our CORS config was verified live by reading `CORS: allowed origin ...` / `CORS: request with no origin allowed` in the log stream.

---

## 7. Debugging Playbook (what each symptom meant for us)

| Symptom | Cause | Fix |
|---|---|---|
| Form fails only on one domain | Absolute API URL + cross-domain preflight/redirect | Relative `/api/contact` |
| `ERR_FAILED` + `blocked by CORS policy` on submit | Same as above, seen in browser console | Relative `/api/contact` |
| Google tag loaded but nothing tracked | Base tag without conversion event | Explicit `gtag('event','conversion',...)` on success |
| `Refused to connect ... region1.analytics.google.com` | CSP missing regional analytics subdomains | Widen `connectSrc` |
| `Type error: Cannot find name 'gtag'` on build | TS doesn't know the gtag global | `(window as any).gtag` + `typeof` guard |
| "Fix" deployed but old behaviour persists | Committed stale `dist/` + browser cache | Stop committing dist; hard refresh / incognito |
| `429` on form submit during testing | Rate limiter | Wait, or test less |
| `Uncaught (in promise) Error: A listener indicated an asynchronous response...` | **Browser extension** (Tag Assistant, ad blocker) — NOT the site | Test in incognito; ignore if gone |
| Yellow "resource preloaded but not used" | Benign Next.js preload warning | Ignore |
| Email arrives without the email field | Server template didn't include it | Add all fields to template |

**Golden rule of diagnosis:** before touching code, confirm in the **Network tab** what URL was actually requested, and reproduce in an **incognito window** (extensions cause scary-looking console errors that aren't yours).

---

## 8. Known Open Items Here (don't copy these)

- **Soft 404s:** Express fallback `res.sendFile(dist/index.html)` returns the homepage with HTTP 200 for unknown URLs. Should return a real 404.
- **Triple tag stack** (GA4 + Ads + GTM) — consolidate.
- **Unused deps & repo junk:** `@sendgrid/mail`, vite packages, `kimi-plugin-inspect-react`, `source-project/`, `optimize-project-*.cjs`, `.venv/`.
- Domain flip in progress: `.co.uk` → Render direct, `.com` → 301 to `.co.uk`; then GBP + ad URLs + GSC sitemap resubmission.

---

## 9. Copy-Paste Prompt for the New Build

> Build a marketing website for [BUSINESS] using Next.js 16 (App Router, TypeScript, Tailwind), statically exported to `dist/` and served by an Express 5 server that also provides a POST `/api/contact` endpoint (Resend email, CORS allowlist, helmet with the full Google CSP allowlist including `*.analytics.google.com`, express-rate-limit 10/hour on the form) and a Google Places reviews proxy. Canonical domain is `www.[DOMAIN].co.uk` — used identically in the metadata BASE_URL helper, sitemap.xml, robots.txt, schema.org `@id`/`url`/og:url, and GBP; any other domains 301-redirect to it with path preservation. Every form submits to a relative `/api/contact` (absolute localhost URL only in dev). Tracking: [GTM-only | direct gtag only] — load GA4 (G-XXX) and Google Ads (AW-XXX) through that one system, no duplicates. Include a Google Ads conversion event (`gtag('event','conversion',{send_to:'AW-XXX/LABEL', value:1.0, currency:'GBP'}` using `(window as any).gtag` with a typeof guard) fired on successful form submission from EVERY form component, sharing ONE manual conversion action. SEO: per-page canonical metadata, HomeAndConstructionBusiness + BreadcrumbList + ContactPage JSON-LD, sitemap.xml, robots.txt, OpenGraph image, real town/postcode copy. Deploy: Render runs `npm run build` + `node server.js`; env vars in the dashboard; never commit `dist/`. Verify before finishing: local `npm run build` passes; curl shows 200 on canonical domain and path-preserving 301s on the others.
