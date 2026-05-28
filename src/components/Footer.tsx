import Link from "next/link";
import Logo from "./Logo";

const services = [
  { label: "Full Payroll Administration", href: "/services" },
  { label: "SARS Compliance Management", href: "/services" },
  { label: "UIF & SDL Administration", href: "/services" },
  { label: "Leave Management", href: "/services" },
  { label: "Year-End Tax Certificates", href: "/services" },
  { label: "Payroll Consulting", href: "/services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B3A6B] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* col 1 — brand */}
        <div className="flex flex-col gap-4">
          <Logo variant="white" size="sm" />
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Your dedicated payroll department — without the overhead. Serving Gauteng businesses since day one.
          </p>
          <div className="flex gap-4 mt-1">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#94A3B8] hover:text-[#00BFA5] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-[#94A3B8] hover:text-[#00BFA5] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#94A3B8] hover:text-[#00BFA5] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:payroll@hisassignment.co.za" aria-label="Email" className="text-[#94A3B8] hover:text-[#00BFA5] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>
        </div>

        {/* col 2 — services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-4">Services</h3>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="text-sm text-[#CBD5E1] hover:text-[#00BFA5] transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* col 3 — quick links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-[#CBD5E1] hover:text-[#00BFA5] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* col 4 — contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-4">Get In Touch</h3>
          <ul className="flex flex-col gap-3 text-sm text-[#CBD5E1]">
            <li className="flex gap-2.5 items-start">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#00BFA5]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>396 Elgin Street, Ferndale<br />Randburg, Gauteng, 2194</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#00BFA5]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:+27847090089" className="hover:text-[#00BFA5] transition-colors">084 709 0089</a>
            </li>
            <li className="flex gap-2.5 items-start">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#00BFA5]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:payroll@hisassignment.co.za" className="hover:text-[#00BFA5] transition-colors break-all">payroll@hisassignment.co.za</a>
            </li>
          </ul>
          <div className="mt-5 bg-[#00BFA5]/10 border border-[#00BFA5]/20 rounded-lg px-4 py-3">
            <p className="text-xs text-[#CBD5E1]">PoPIA Compliant · 24h Response</p>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-[#2D4F8A] py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <span>© {new Date().getFullYear()} His Assignment Payroll Solutions. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-[#CBD5E1] transition-colors">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-[#CBD5E1] transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-[#CBD5E1] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
