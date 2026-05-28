# His Assignment — CC Master Context
> Read this file fully before doing anything. Never ask questions covered here.

## Client
- His Assignment Payroll Solutions
- Contact: payroll@hisassignment.co.za | 084 709 0089
- Address: 396 Elgin St, Ferndale, Randburg
- Managed by: Qzenta (Pty) Ltd under Daniel Onukpa

## Tech Stack
- Framework: Next.js 15 + Tailwind CSS + TypeScript
- GitHub: github.com/qzenta/hisassignment
- Deployment: Vercel (auto-deploy on master push)
- DNS: hisassignment.co.za registrar = Axxess (stays there — .co.za cannot transfer to Cloudflare Registrar). DNS nameservers pointed to Cloudflare ✅ confirmed 2026-05-28. A @ → 76.76.21.21 (Proxied), CNAME www → cname.vercel-dns.com (Proxied). SSL mode: Full.
- Email: Brevo (transactional) — wired but not activated until client approval
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
- WordPress → Next.js migration
- Domain stays on Axxess — .co.za cannot transfer to Cloudflare Registrar
- R3,000 setup already paid — do not reference billing in build sessions
- Repo lives under github.com/qzenta org
- Do NOT cut over Axxess DNS until client approves Vercel preview

## Notion Client Entry
- Always fetch before starting: https://www.notion.so/36e8e3e04cde81b8a4e7d2df42b48ff7

## Do Not Touch
- Axxess DNS until new site is fully tested and approved by client
- Existing WordPress site until cutover is confirmed
