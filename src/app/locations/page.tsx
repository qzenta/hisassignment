import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { locations } from "@/lib/locations";

export const metadata = {
  title: "Payroll Services Across Gauteng | His Assignment",
  description:
    "His Assignment provides professional payroll outsourcing across Gauteng — Randburg, Sandton, Johannesburg, Pretoria, Germiston, Boksburg, Northcliff and more.",
};

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main>

        <PageHero
          label="Serving All Of Gauteng"
          title="Professional Payroll. Wherever You Are."
          sub="His Assignment serves businesses across Gauteng — from the East Rand to Pretoria. Remote-first, with in-person consultations available at our Randburg HQ."
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        />

        {/* ── LOCATIONS GRID ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6] mb-3">Coverage</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E4A]">Areas we serve</h2>
              <p className="mt-4 text-[#6B7280]">
                Click your area to see how we support businesses near you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group bg-white rounded-xl border border-[#E5E7EB] overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                  style={{ borderLeft: "4px solid #14B8A6" }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={`Payroll services in ${loc.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E4A]/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="text-white font-bold text-lg">{loc.name}</span>
                      {loc.isHQ && (
                        <span className="text-[10px] bg-[#14B8A6] text-white px-2 py-0.5 rounded font-bold">HQ</span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-[#14B8A6] font-semibold uppercase tracking-wider mb-2">{loc.region}</p>
                    <p className="text-sm text-[#374151] leading-relaxed">{loc.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#14B8A6] group-hover:gap-2 transition-all">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="py-20 px-6 bg-[#F8FAFB] border-t border-[#E5E7EB]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6] mb-3">Our reach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E4A] mb-4">Remote-first. Available everywhere.</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed">
              All our payroll services are delivered remotely — securely and efficiently. No need for in-person meetings unless you prefer them. Our Randburg HQ is always available for face-to-face consultations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email & Portal",
                  desc: "Submit payroll data securely via email or our dedicated portal.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Phone & WhatsApp",
                  desc: "Direct line to your consultant — queries answered same day.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  title: "In-Person (Randburg)",
                  desc: "Visit our Ferndale office for consultations and onboarding sessions.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-[#E5E7EB] text-left">
                  <div className="w-11 h-11 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#1A2E4A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section className="relative bg-[#1A2E4A] text-white py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid-light opacity-10 pointer-events-none" />
          <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Don&apos;t see your area?</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              We serve businesses across all of Gauteng and beyond. Get in touch — chances are we already work with businesses near you.
            </p>
            <Link
              href="/contact"
              className="mt-2 px-8 py-4 bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#0F9488] transition-colors text-sm shadow-lg"
            >
              Get A Free Quote
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
