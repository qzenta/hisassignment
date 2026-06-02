# His Assignment — CC Master Context
> Read this file fully before doing anything. Never ask questions covered here.

## Client
- His Assignment Payroll Solutions
- Contact: payroll@hisassignment.co.za | 084 709 0089
- Address: 396 Elgin Street, Ferndale, Randburg
- Managed by: Qzenta (Pty) Ltd under Daniel Onukpa

## Tech Stack
- Framework: Next.js 16 + Tailwind CSS v4 + TypeScript
- Local path: C:\Users\pc\OneDrive - Ghana Diaspora SA\Documents\Dev\web-clients\hisassignment
- GitHub: github.com/qzenta/hisassignment
- Deployment: Vercel (manual `npx vercel --prod --yes` — GitHub auto-deploy pending Vercel plan resolution)
- DNS: hisassignment.co.za on Axxess registrar; nameservers → Cloudflare ✅. A @ → 76.76.21.21 (DNS only), CNAME www → cname.vercel-dns.com (DNS only). SSL: Vercel handles directly. Site LIVE ✅
- Email: Brevo fully active ✅ — BREVO_API_KEY, CONTACT_TO_EMAIL, BREVO_LIST_ID=7 set in Vercel
- Brand: See CONTENT.md for extracted copy

## Brand (Refined — Session 4 redesign)
- Logo: "ha" monogram (teal "h" + navy "a") + "HIS ASSIGNMENT" wordmark + "PAYROLL PERFECTED" tagline
- Logo file: /public/logo.svg (client to supply hi-res PNG/SVG for swap)
- Navy: #1A2E4A | Teal: #14B8A6 | Teal dark: #0F9488 | Body text: #1F2937 | Caption: #6B7280
- Section bands: #F8FAFB | White: #FFFFFF | Border: #E5E7EB

## Design System (Accace-inspired — Session 4)
- Interior page heroes: light grey band (#F8FAFB), never dark image overlay
- Home hero only: dark navy (#1A2E4A) split layout — text left, image right
- Section labels: uppercase, tracking-widest, teal, 12px
- Section titles: H2 bold navy, 3xl–4xl
- Service cards: white, 4px teal left border (inline style), hover shadow
- CTA bands: dark navy (#1A2E4A) with teal button
- FAQ accordion: details/summary, bottom border only, teal +/- toggle
- Pricing: 3-column (Starter/Growth/Enterprise), Growth has ring-2 teal + Most Popular badge
- Team card: navy left panel with NN initials, bio right, teal skill pills

## Project Structure
- src/app/          — Next.js App Router pages
- src/components/   — Reusable UI components (Navbar, Footer, Logo, PartnersMarquee, HeroSlider)
- src/lib/          — Utilities (locations.ts)
- public/           — Static assets (logo.svg, partner SVGs)
- CONTENT.md        — All extracted site copy and branding (source of truth)

## Confirmed — Never Ask Again
- WordPress → Next.js migration (complete — site is LIVE)
- Domain stays on Axxess — .co.za cannot transfer to Cloudflare Registrar
- R3,000 setup already paid — do not reference billing in build sessions
- Repo lives under github.com/qzenta org
- DNS cutover already done — site is live at hisassignment.co.za
- Brevo already active — do not re-configure
- HeroSlider.tsx exists but is no longer used — home hero is inline in page.tsx
- Nomusa bio text is finalised — do not change without client approval

## Outstanding (as at Session 4)
- Logo: client to supply flat/transparent PNG or SVG → replace SVG monogram in Logo.tsx
- Testimonials: Thabo M., Nomusa V., Susan R. are placeholders — client to supply real ones
- Bio photo: NN avatar is placeholder — Nomusa to supply headshot
- Social links: disabled — Nomusa to supply Facebook/LinkedIn/X profiles
- GitHub auto-deploy: blocked — Vercel Hobby + org repo; transfer repo OR upgrade Pro
- Location images: should be updated to city/area aerial photos (search "[area] South Africa aerial" on Unsplash)
- Billing: R300/month catch-up invoice URGENT — not yet issued

## Deploy Protocol
1. `git add -A && git commit -m "..."` from project root
2. `git push origin master`
3. `npx vercel --prod --yes` from project root (must have vercel CLI + be authenticated)
4. Verify: `curl -s -L https://www.hisassignment.co.za | grep -o '<title>[^<]*</title>'`
5. Update this CLAUDE.md + Notion page

## Notion Client Entry
- Always fetch before starting: https://www.notion.so/36e8e3e04cde81b8a4e7d2df42b48ff7
