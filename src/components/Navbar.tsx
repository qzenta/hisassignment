"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { locations } from "@/lib/locations";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="His Assignment home">
          <Logo size="sm" />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#0F172A] hover:text-[#00BFA5] transition-colors"
            >
              {l.label}
            </Link>
          ))}

          {/* Locations dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLocOpen(true)}
            onMouseLeave={() => setLocOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-[#0F172A] hover:text-[#00BFA5] transition-colors">
              Locations
              <svg className={`w-3.5 h-3.5 transition-transform ${locOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {locOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl border border-[#E2E8F0] shadow-lg py-2 z-50">
                <Link
                  href="/locations"
                  className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#00BFA5] hover:bg-[#F8FAFC]"
                >
                  All Locations
                </Link>
                <div className="border-t border-[#E2E8F0] my-1" />
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="flex items-center justify-between px-4 py-2 text-sm text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#00BFA5] transition-colors"
                  >
                    {loc.name}
                    {loc.isHQ && (
                      <span className="text-[10px] bg-[#00BFA5]/10 text-[#00BFA5] px-1.5 py-0.5 rounded font-semibold">HQ</span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="text-sm font-medium text-[#0F172A] hover:text-[#00BFA5] transition-colors"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="ml-2 px-5 py-2 rounded-lg bg-[#00BFA5] text-white text-sm font-semibold hover:bg-[#00a892] transition-colors"
          >
            Get A Quote
          </Link>
        </nav>

        {/* mobile toggle */}
        <button
          className="md:hidden p-2 text-[#0F172A]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-[#E2E8F0] bg-white px-6 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-[#0F172A] hover:text-[#00BFA5] transition-colors"
            >
              {l.label}
            </Link>
          ))}

          {/* mobile locations accordion */}
          <button
            onClick={() => setLocOpen(!locOpen)}
            className="flex items-center justify-between py-2 text-sm font-medium text-[#0F172A] hover:text-[#00BFA5] transition-colors w-full"
          >
            Locations
            <svg className={`w-3.5 h-3.5 transition-transform ${locOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {locOpen && (
            <div className="pl-3 border-l-2 border-[#00BFA5]/30 flex flex-col gap-1 mb-1">
              <Link href="/locations" onClick={() => setOpen(false)} className="py-1.5 text-xs font-semibold text-[#00BFA5]">
                All Locations
              </Link>
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  onClick={() => { setOpen(false); setLocOpen(false); }}
                  className="py-1.5 text-sm text-[#475569] hover:text-[#00BFA5] transition-colors"
                >
                  {loc.name} {loc.isHQ ? "(HQ)" : ""}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-2 text-sm font-medium text-[#0F172A] hover:text-[#00BFA5] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2 rounded-lg bg-[#00BFA5] text-white text-sm font-semibold text-center hover:bg-[#00a892] transition-colors"
          >
            Get A Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
