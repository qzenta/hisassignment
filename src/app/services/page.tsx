import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { services as serviceData } from "@/lib/services";

const pricingPlans = [
  {
    name: "Starter",
    price: "From R1,500/month",
    highlight: false,
    badge: null as string | null,
    features: [
      "Up to 10 employees",
      "Monthly payroll processing",
      "EMP201 submissions",
      "Payslip generation",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "From R3,500/month",
    highlight: true,
    badge: "Most Popular",
    features: [
      "11–50 employees",
      "All Starter features",
      "EMP501 reconciliation",
      "Leave management",
      "IRP5 certificates",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    highlight: false,
    badge: null as string | null,
    features: [
      "50+ employees",
      "Full BPO service",
      "Dedicated consultant",
      "Custom reporting",
      "SLA-backed response times",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        <PageHero
          label="Our Services"
          title="Everything Payroll. Nothing Else."
          sub="We specialise in one discipline and do it exceptionally well — so you can focus on running your business."
          image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
        />

        {/* ── INTRO PARAGRAPH ── */}
        <section className="bg-white py-14 px-6 border-b border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#374151] text-lg leading-relaxed">
              His Assignment Payroll Solutions manages every aspect of your payroll function — from monthly processing and statutory submissions to year-end reconciliations and employee queries. We work with SMEs, NGOs, schools, and household employers across Gauteng, delivering the same meticulous standard to every client, regardless of size.
            </p>
          </div>
        </section>

        {/* ── SERVICE BLOCKS — alternating bands ── */}
        {serviceData.map((s, i) => (
          <section
            key={s.title}
            className={`py-16 px-6 ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFB]"}`}
          >
            <div className="max-w-4xl mx-auto">
              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#14B8A6]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E4A] mb-3">{s.title}</h2>
              <p className="text-[#14B8A6] font-medium mb-4 leading-relaxed">{s.intro}</p>
              <p className="text-[#374151] leading-relaxed mb-8">{s.desc}</p>

              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-4">What&apos;s included</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#374151]">
                      <svg className="w-5 h-5 shrink-0 text-[#14B8A6] mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14B8A6] hover:text-[#0F9488] transition-colors"
                >
                  Full details →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A2E4A] hover:text-[#14B8A6] transition-colors"
                >
                  Get a quote →
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* ── PRICING SECTION ── */}
        <section className="py-20 px-6 bg-[#F8FAFB] border-t border-[#E5E7EB]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6] mb-3">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E4A]">Indicative Pricing</h2>
              <p className="mt-4 text-[#6B7280] max-w-xl mx-auto leading-relaxed">
                Every business is different — these are starting points. Contact us for a tailored quote.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl p-8 flex flex-col gap-6 ${
                    plan.highlight ? "ring-2 ring-[#14B8A6] shadow-lg" : "border border-[#E5E7EB]"
                  }`}
                >
                  {plan.highlight && plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-[#14B8A6] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-[#1A2E4A] mb-2">{plan.name}</h3>
                    <p className="text-2xl font-extrabold text-[#14B8A6]">{plan.price}</p>
                  </div>
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#374151]">
                        <svg className="w-5 h-5 shrink-0 text-[#14B8A6] mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-auto text-center px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${
                      plan.highlight
                        ? "bg-[#14B8A6] text-white hover:bg-[#0F9488]"
                        : "border border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white"
                    }`}
                  >
                    Get a quote
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-[#9CA3AF] mt-8 leading-relaxed">
              All packages include a once-off onboarding fee. Pricing excludes VAT. Contact us to discuss your specific requirements.
            </p>
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section className="relative bg-[#1A2E4A] text-white py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid-light opacity-10 pointer-events-none" />
          <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Not sure which service you need?</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Book a free consultation and we&apos;ll recommend the right solution for your business size and compliance requirements.
            </p>
            <Link
              href="/contact"
              className="mt-2 px-8 py-4 bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#0F9488] transition-colors text-sm shadow-lg"
            >
              Book A Free Consultation
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
