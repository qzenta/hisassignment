# His Assignment — CC Master Context
> Read this file fully before doing anything. Never ask questions covered here.

## Client
- His Assignment Payroll Solutions
- Contact: payroll@hisassignment.co.za | 084 709 0089
- Address: 396 Elgin St, Ferndale, Randburg
- Managed by: Qzenta (Pty) Ltd under Daniel Onukpa

## Tech Stack
- Framework: Next.js 16 + Tailwind CSS v4 + TypeScript
- Local path: C:\Users\Daniel\OneDrive - Ghana Diaspora SA\Documents\Dev\web-clients\hisassignment
- GitHub: github.com/qzenta/hisassignment
- Deployment: Vercel (manual `vercel deploy --prod` — GitHub auto-deploy pending Vercel plan resolution)
- DNS: hisassignment.co.za on Axxess registrar; nameservers → Cloudflare ✅. A @ → 76.76.21.21 (DNS only), CNAME www → cname.vercel-dns.com (DNS only). SSL: Vercel handles directly. Site LIVE ✅
- Email: Brevo fully active ✅ — BREVO_API_KEY, CONTACT_TO_EMAIL, BREVO_LIST_ID=7 set in Vercel
- Brand: See CONTENT.md for colours, logo, and all extracted copy

## Brand
- Logo: "ha" monogram (teal "h" + navy "a") + "HIS ASSIGNMENT" wordmark + "PAYROLL PERFECTED" tagline
- Logo file: /public/logo.png (client to supply hi-res PNG/SVG)
- Teal: #00BFA5 | Navy: #1B3A6B | Off-white: #F8FAFC | Dark text: #0F172A

## Project Structure
- src/app/          — Next.js App Router pages
- src/components/   — Reusable UI components
- src/lib/          — Utilities, Brevo email helper
- public/           — Static assets (logo, images)
- CONTENT.md        — All extracted site copy and branding (source of truth)

## Confirmed — Never Ask Again
- WordPress → Next.js migration (complete — site is LIVE)
- Domain stays on Axxess — .co.za cannot transfer to Cloudflare Registrar
- R3,000 setup already paid — do not reference billing in build sessions
- Repo lives under github.com/qzenta org
- DNS cutover already done — site is live at hisassignment.co.za
- Brevo already active — do not re-configure

## Notion Client Entry
- Always fetch before starting: https://www.notion.so/36e8e3e04cde81b8a4e7d2df42b48ff7
