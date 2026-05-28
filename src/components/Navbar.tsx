"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Logo from "./Logo";
import { locations } from "@/lib/locations";

const serviceLinks = [
  { label: "Full Payroll Administration", href: "/services" },
  { label: "Payroll Outsourcing", href: "/services" },
  { label: "SARS Compliance Management", href: "/services" },
  { label: "PAYE, UIF & SDL Administration", href: "/services" },
  { label: "Leave Management", href: "/services" },
  { label: "Year-End Tax Certificates", href: "/services" },
  { label: "Payroll Reporting", href: "/services" },
  { label: "Payroll Consulting", href: "/services" },
];

function useDropdown() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const leave = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };
  const close = () => setOpen(false);

  return { open, enter, leave, close };
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileLocations, setMobileLocations] = useState(false);

  const services = useDropdown();
  const locs = useDropdown();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="His Assignment home">
          <Logo size="sm" />
        </Link>

        {/* ── desktop nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-[#0F172A] hover:text-[#00BFA5] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-[#0F172A] hover:text-[#00BFA5] transition-colors">
            About
          </Link>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={services.enter} onMouseLeave={services.leave}>
            <button className="flex items-center gap-1 text-sm font-medium text-[#0F172A] hover:text-[#00BFA5] transition-colors">
              Services
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${services.open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {services.open && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-64">
                <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-xl py-2">
                  <Link
                    href="/services"
                    onClick={services.close}
                    className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#00BFA5] hover:bg-[#F8FAFC]"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-[#E2E8F0] my-1" />
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      onClick={services.close}
                      className="block px-4 py-2 text-sm text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#00BFA5] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Locations dropdown */}
          <div className="relative" onMouseEnter={locs.enter} onMouseLeave={locs.leave}>
            <button className="flex items-center gap-1 text-sm font-medium text-[#0F172A] hover:text-[#00BFA5] transition-colors">
              Locations
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${locs.open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {locs.open && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-56">
                <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-xl py-2">
                  <Link
                    href="/locations"
                    onClick={locs.close}
                    className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#00BFA5] hover:bg-[#F8FAFC]"
                  >
                    All Locations
                  </Link>
                  <div className="border-t border-[#E2E8F0] my-1" />
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      onClick={locs.close}
                      className="flex items-center justify-between px-4 py-2 text-sm text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#00BFA5] transition-colors"
                    >
                      {loc.name}
                      {loc.isHQ && (
                        <span className="text-[10px] bg-[#00BFA5]/10 text-[#00BFA5] px-1.5 py-0.5 rounded font-semibold">HQ</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-sm font-medium text-[#0F172A] hover:text-[#00BFA5] transition-colors">
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
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
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

      {/* ── mobile menu ── */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-[#E2E8F0] bg-white px-6 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          <Link href="/" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium text-[#0F172A]">Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium text-[#0F172A]">About</Link>

          {/* mobile services accordion */}
          <button
            onClick={() => setMobileServices(!mobileServices)}
            className="flex items-center justify-between py-2 text-sm font-medium text-[#0F172A] w-full"
          >
            Services
            <svg className={`w-3.5 h-3.5 transition-transform ${mobileServices ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileServices && (
            <div className="pl-3 border-l-2 border-[#00BFA5]/30 flex flex-col gap-1 mb-1">
              <Link href="/services" onClick={() => setMobileOpen(false)} className="py-1.5 text-xs font-semibold text-[#00BFA5]">All Services</Link>
              {serviceLinks.map((s) => (
                <Link key={s.label} href={s.href} onClick={() => setMobileOpen(false)} className="py-1.5 text-sm text-[#475569] hover:text-[#00BFA5]">
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {/* mobile locations accordion */}
          <button
            onClick={() => setMobileLocations(!mobileLocations)}
            className="flex items-center justify-between py-2 text-sm font-medium text-[#0F172A] w-full"
          >
            Locations
            <svg className={`w-3.5 h-3.5 transition-transform ${mobileLocations ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileLocations && (
            <div className="pl-3 border-l-2 border-[#00BFA5]/30 flex flex-col gap-1 mb-1">
              <Link href="/locations" onClick={() => setMobileOpen(false)} className="py-1.5 text-xs font-semibold text-[#00BFA5]">All Locations</Link>
              {locations.map((loc) => (
                <Link key={loc.slug} href={`/locations/${loc.slug}`} onClick={() => setMobileOpen(false)} className="py-1.5 text-sm text-[#475569] hover:text-[#00BFA5]">
                  {loc.name}{loc.isHQ ? " (HQ)" : ""}
                </Link>
              ))}
            </div>
          )}

          <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium text-[#0F172A]">Contact</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-2 px-5 py-2 rounded-lg bg-[#00BFA5] text-white text-sm font-semibold text-center">
            Get A Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
