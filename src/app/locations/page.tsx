import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
        {/* HERO */}
        <section
          className="relative bg-[#1B3A6B] text-white py-24 px-6 overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#1B3A6B]/80" />
          <div className="relative max-w-3xl mx-auto text-center flex flex-col gap-4">
            <div className="inline-flex self-center items-center gap-2 bg-[#00BFA5]/15 text-[#00BFA5] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-[#00BFA5]/30">
              Serving All Of Gauteng
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Professional payroll. Wherever you are.
            </h1>
            <p className="text-[#CBD5E1] text-lg">
              His Assignment serves businesses across Gauteng — from the East Rand to Pretoria. Remote-first, with in-person consultations available at our Randburg HQ.
            </p>
          </div>
        </section>

        {/* LOCATIONS GRID */}
        <section className="py-20 px-6 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A]">Areas we serve</h2>
              <p className="mt-3 text-[#64748B]">
                Click your area to see how we support businesses near you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:border-[#00BFA5]/50 hover:shadow-lg transition-all"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={`Payroll services in ${loc.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="text-white font-bold text-lg">{loc.name}</span>
                      {loc.isHQ && (
                        <span className="text-[10px] bg-[#00BFA5] text-white px-2 py-0.5 rounded font-bold">HQ</span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-[#00BFA5] font-semibold uppercase tracking-wider mb-1">{loc.region}</p>
                    <p className="text-sm text-[#475569] leading-relaxed">{loc.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#00BFA5] group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Remote-first. Available everywhere.</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto mb-10">
              All our payroll services are delivered remotely — securely and efficiently. No need for in-person meetings unless you prefer them. Our Randburg HQ is always available for face-to-face consultations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: "📧", title: "Email & Portal", desc: "Submit payroll data securely via email or our dedicated portal." },
                { icon: "📞", title: "Phone & WhatsApp", desc: "Direct line to your consultant — queries answered same day." },
                { icon: "🏢", title: "In-Person (Randburg)", desc: "Visit our Ferndale office for consultations and onboarding sessions." },
              ].map((item) => (
                <div key={item.title} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] text-left">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#64748B]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#1B3A6B] text-white text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold">Don&apos;t see your area?</h2>
            <p className="text-[#CBD5E1]">
              We serve businesses across all of Gauteng and beyond. Get in touch — chances are we already work with businesses near you.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#00BFA5] text-white font-semibold rounded-lg hover:bg-[#00a892] transition-colors text-sm"
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
