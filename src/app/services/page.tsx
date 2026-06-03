import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { services as serviceData } from "@/lib/services";

const services = [
  {
    title: "Payroll Processing",
    intro: "Accurate payroll processing ensures all employee salaries are calculated correctly and paid on time — every cycle, without exception.",
    desc: "We handle every component of your payroll run: basic salaries, wages, overtime, bonuses, commissions, and all applicable deductions. Our process is structured, documented, and audit-ready from day one.",
    features: [
      "Salary & wage calculations",
      "Overtime & bonus processing",
      "Statutory deduction handling",
      "Payslip generation & distribution",
      "Bank payment files",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Payroll Outsourcing",
    intro: "Hand over your entire payroll function to a dedicated specialist — without the overhead, risk, or complexity of managing it in-house.",
    desc: "We become your payroll department. From monthly processing to employee query resolution and SARS correspondence, everything is handled on your behalf. You get the expertise of a full payroll team at a fraction of the cost.",
    features: [
      "Full payroll BPO service",
      "Dedicated payroll consultant",
      "Month-end payroll runs",
      "Employee query handling",
      "SARS correspondence management",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "SARS Compliance Management",
    intro: "Never miss a SARS deadline again. We manage every statutory submission on your behalf — accurately, on time, every time.",
    desc: "Full management of your EMP201, EMP501, IRP5, and IT3(a) obligations. We handle SARS eFiling, respond to SARS queries, and ensure your business remains fully compliant throughout the tax year.",
    features: [
      "EMP201 monthly submissions",
      "EMP501 bi-annual reconciliation",
      "IRP5 & IT3(a) certificates",
      "SARS eFiling management",
      "Audit support & SARS query resolution",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "PAYE, UIF & SDL Administration",
    intro: "Complete statutory compliance — every PAYE, UIF, and SDL obligation calculated, submitted, and reconciled accurately each month.",
    desc: "We calculate and submit all statutory amounts on your behalf, ensuring your business meets its obligations under the Income Tax Act, Unemployment Insurance Act, and Skills Development Levies Act. No penalties. No surprises.",
    features: [
      "PAYE calculations & submissions",
      "UIF registration & declarations",
      "SDL levy management",
      "Monthly EMP201 returns",
      "Annual reconciliations",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Leave Management",
    intro: "Accurate leave tracking, fully integrated with your payroll cycle — so your records are always audit-ready and BCEA compliant.",
    desc: "We maintain complete leave records for all employees: annual leave, sick leave, family responsibility leave, and any other applicable leave types. Leave balances are updated each cycle and reconciled with payroll to ensure zero discrepancies.",
    features: [
      "Annual, sick & family leave tracking",
      "Leave balance reporting",
      "Leave pay processing",
      "BCEA compliance monitoring",
      "Leave accrual management",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Year-End Tax Certificates",
    intro: "IRP5 and IT3(a) certificates prepared and submitted with precision — making tax season completely stress-free for you and your employees.",
    desc: "We reconcile your full tax year, prepare all employee tax certificates, and submit your EMP501 to SARS on your behalf. Your employees receive accurate IRP5s on time, and your business closes out the tax year with clean, compliant records.",
    features: [
      "IRP5 certificate preparation",
      "IT3(a) submissions",
      "EMP501 annual reconciliation",
      "Employee tax year summaries",
      "SARS correspondence handling",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Payroll Reporting",
    intro: "Clear, structured payroll reports that give management the financial visibility they need — when they need it.",
    desc: "We produce monthly payroll cost reports, departmental summaries, and custom management reports tailored to your business. All records are audit-ready and available for review at any time.",
    features: [
      "Monthly cost reports",
      "Department payroll summaries",
      "Custom management reports",
      "Audit-ready records",
      "Year-over-year comparisons",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Payroll Consulting",
    intro: "Expert guidance on payroll structures, compliance questions, and operational improvements — tailored specifically to your business.",
    desc: "Whether you need a once-off compliance review, help setting up payroll for a new business, or ongoing advisory support, we bring deep practical knowledge of South African payroll law and SARS requirements to every engagement.",
    features: [
      "Payroll structure review",
      "Compliance health checks",
      "New business payroll setup",
      "Payroll software advisory",
      "SARS query resolution",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "From R1,500/month",
    highlight: false,
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
              {/* icon + label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E4A] mb-3">{s.title}</h2>
              <p className="text-[#14B8A6] font-medium mb-4 leading-relaxed">{s.intro}</p>
              <p className="text-[#374151] leading-relaxed mb-8">{s.desc}</p>

              {/* what's included */}
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
                    plan.highlight
                      ? "ring-2 ring-[#14B8A6] shadow-lg"
                      : "border border-[#E5E7EB]"
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
