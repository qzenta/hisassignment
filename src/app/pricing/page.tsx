import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | His Assignment Payroll Solutions",
  description: "Indicative pricing for payroll outsourcing services. Starter from R1,500/month, Growth from R3,500/month, Enterprise custom pricing.",
};

const plans = [
  {
    name: "Starter",
    price: "From R1,500",
    period: "/month",
    tag: null,
    desc: "For small businesses getting payroll right from day one.",
    features: [
      "Up to 10 employees",
      "Monthly payroll processing",
      "Payslip generation & distribution",
      "EMP201 monthly submissions",
      "Basic leave tracking",
      "Email support",
    ],
    cta: "Get a quote",
    highlight: false,
  },
  {
    name: "Growth",
    price: "From R3,500",
    period: "/month",
    tag: "Most Popular",
    desc: "For growing businesses that need full compliance and more.",
    features: [
      "11–50 employees",
      "All Starter features",
      "EMP501 bi-annual reconciliation",
      "Leave management (all leave types)",
      "IRP5 & IT3(a) certificates",
      "UIF & SDL administration",
      "SARS eFiling management",
      "Priority support",
    ],
    cta: "Get a quote",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    tag: null,
    desc: "For larger organisations needing a fully dedicated payroll BPO.",
    features: [
      "50+ employees",
      "All Growth features",
      "Full BPO payroll service",
      "Dedicated payroll consultant",
      "Custom management reporting",
      "Multi-entity support",
      "SLA-backed response times",
      "On-site consultation available",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

const addOns = [
  { label: "Year-End Tax Certificates (IRP5 / IT3(a))", note: "Included in Growth & Enterprise — quoted separately for Starter" },
  { label: "SARS Audit Support", note: "Hourly rate — contact us for a quote" },
  { label: "Payroll Software Setup", note: "Once-off fee — quoted per system" },
  { label: "Payroll Consulting (once-off)", note: "Hourly rate — contact us for a quote" },
  { label: "Additional Payroll Runs", note: "E.g. mid-month / weekly runs — quoted per run" },
];

const faqs = [
  {
    q: "Is there a once-off onboarding fee?",
    a: "Yes. All packages include a once-off onboarding fee which covers data migration, system setup, and your initial payroll run. This is quoted at sign-up based on your employee count and current payroll setup.",
  },
  {
    q: "Are prices VAT inclusive?",
    a: "No. All pricing excludes VAT. VAT at 15% will be added to your invoice.",
  },
  {
    q: "What if my employee count changes?",
    a: "We review your plan quarterly. If your headcount moves into the next tier, your rate adjusts at the start of the following month. We always notify you in advance.",
  },
  {
    q: "Can I get a custom quote?",
    a: "Yes — all pricing is indicative. We tailor every proposal to your exact requirements. Get in touch for a free consultation and written quote.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Your monthly retainer covers everything in your plan. Any add-on services (e.g. ad hoc consulting, additional payroll runs) are quoted separately before work begins.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="bg-[#F8FAFB] border-b border-[#E5E7EB] py-16 px-6">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#14B8A6]">Pricing</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A2E4A] tracking-tight">
              Indicative Pricing
            </h1>
            <p className="text-[#6B7280] text-lg leading-relaxed max-w-xl mx-auto">
              Every business is different — these are starting points. All prices exclude VAT. Contact us for a tailored quote.
            </p>
          </div>
        </section>

        {/* ── PRICING CARDS ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl p-8 flex flex-col gap-5 ${
                    plan.highlight
                      ? "ring-2 ring-[#14B8A6] shadow-xl"
                      : "border border-[#E5E7EB] shadow-sm"
                  }`}
                >
                  {plan.tag && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#14B8A6] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full">
                        {plan.tag}
                      </span>
                    </div>
                  )}

                  <div>
                    <h2 className="text-lg font-extrabold text-[#1A2E4A]">{plan.name}</h2>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-extrabold text-[#14B8A6]">{plan.price}</span>
                      <span className="text-sm text-[#6B7280] font-medium">{plan.period}</span>
                    </div>
                    <p className="text-sm text-[#6B7280] mt-2 leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="border-t border-[#F3F4F6] pt-5 flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4">What&apos;s included</p>
                    <ul className="flex flex-col gap-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-[#374151]">
                          <svg className="w-5 h-5 shrink-0 text-[#14B8A6] mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-2 text-center px-6 py-3.5 rounded-lg text-sm font-bold transition-colors ${
                      plan.highlight
                        ? "bg-[#14B8A6] text-white hover:bg-[#0F9488]"
                        : "border-2 border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-[#9CA3AF] mt-8">
              All packages include a once-off onboarding fee. Pricing excludes VAT.
            </p>
          </div>
        </section>

        {/* ── ADD-ONS ── */}
        <section className="py-16 px-6 bg-[#F8FAFB] border-t border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#14B8A6] mb-3">Optional extras</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A2E4A]">Add-On Services</h2>
              <p className="mt-3 text-[#6B7280] leading-relaxed">Available as needed — quoted separately before any work begins.</p>
            </div>
            <div className="flex flex-col divide-y divide-[#E5E7EB] bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
              {addOns.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4">
                  <span className="text-sm font-semibold text-[#1A2E4A]">{item.label}</span>
                  <span className="text-sm text-[#6B7280] sm:text-right">{item.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING FAQ ── */}
        <section className="py-16 px-6 bg-white border-t border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#14B8A6] mb-3">Questions</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A2E4A]">Pricing FAQ</h2>
            </div>
            <div className="flex flex-col">
              {faqs.map((item, i) => (
                <details key={i} className="group border-b border-[#E5E7EB] last:border-b-0">
                  <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none font-semibold text-[#1A2E4A] text-sm leading-snug">
                    <span>{item.q}</span>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center font-bold text-base leading-none select-none transition-colors group-open:bg-[#14B8A6] group-open:text-white">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <div className="pb-6 text-sm text-[#374151] leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section className="relative bg-[#1A2E4A] text-white py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid-light opacity-10 pointer-events-none" />
          <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">Ready for a tailored quote?</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Tell us about your business and we&apos;ll send a clear, itemised proposal within 24 hours — no obligation.
            </p>
            <Link
              href="/contact"
              className="mt-2 px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0F9488] transition-colors text-sm shadow-lg tracking-wide uppercase"
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
