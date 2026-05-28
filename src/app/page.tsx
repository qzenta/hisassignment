import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    title: "Full Payroll Administration",
    desc: "End-to-end payroll processing — salaries, deductions, overtime, bonuses, and statutory contributions handled accurately every cycle.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "SARS Compliance Management",
    desc: "EMP201, EMP501, IRP5, and IT3(a) submissions handled on time. Never miss a SARS deadline again.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    title: "UIF & SDL Administration",
    desc: "Full management of statutory obligations — PAYE, UIF, and SDL — ensuring complete compliance with South African tax and labour law.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    title: "Leave Management",
    desc: "Accurate leave tracking and administration, fully integrated with your payroll cycle for zero discrepancies.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    title: "Year-End Tax Certificates",
    desc: "IRP5 and IT3(a) certificates prepared and submitted accurately, making tax season stress-free for you and your employees.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
      </svg>
    ),
    title: "Payroll Consulting",
    desc: "Expert advice on payroll structures, compliance queries, and operational improvements tailored to your business.",
  },
];

const steps = [
  { n: "01", title: "Free Consultation", desc: "We discuss your payroll needs, employee count, and compliance obligations at no cost." },
  { n: "02", title: "Custom Proposal", desc: "You receive a clear, itemised proposal matched to your exact requirements and budget." },
  { n: "03", title: "Seamless Onboarding", desc: "We handle the migration from your current system with zero disruption to payroll runs." },
  { n: "04", title: "Ongoing Management", desc: "Your dedicated payroll department — handling every cycle, submission, and query." },
];

const packages = [
  {
    name: "Starter",
    employees: "1–5 employees",
    features: ["Full payroll processing", "EMP201 submission", "Email payslips", "UIF administration"],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Growth",
    employees: "6–20 employees",
    features: ["Everything in Starter", "Leave management", "Basic payroll reporting", "Quarterly payroll review"],
    cta: "Most popular",
    highlight: true,
  },
  {
    name: "Business",
    employees: "21–50 employees",
    features: ["Everything in Growth", "Custom payroll reports", "Dedicated consultant", "Priority support"],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Enterprise",
    employees: "50+ employees",
    features: ["Custom quote", "Multi-location payroll", "Tailored solution", "SLA guarantees"],
    cta: "Contact us",
    highlight: false,
  },
];

const testimonials = [
  {
    quote: "Switching to HisAssignment was the best decision I made for my business. Our payroll runs on time every month without a single issue.",
    name: "Thabo M.",
    role: "SME Owner, Sandton",
  },
  {
    quote: "They understand NGO reporting requirements perfectly. SARS submissions are always on time and the team is incredibly responsive.",
    name: "Nomsa V.",
    role: "Finance Manager, NGO",
  },
  {
    quote: "Managing SGB and DoE staff payrolls used to be a nightmare. HisAssignment took that stress completely off my plate.",
    name: "Susan R.",
    role: "School Bursar, Pretoria",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />

        {/* STATS */}
        <section className="bg-[#00BFA5] py-10 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center text-white">
            {[
              { value: "100%", label: "SARS Compliant" },
              { value: "50+", label: "Clients Served" },
              { value: "24h", label: "Response Time" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold">{s.value}</div>
                <div className="text-sm mt-1 text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="py-20 px-6 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A]">Everything payroll. Nothing else.</h2>
              <p className="mt-3 text-[#64748B] max-w-xl mx-auto">
                We specialise in one thing and do it exceptionally well — so you never have to think about payroll again.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#00BFA5]/50 hover:shadow-md transition-all group">
                  <div className="w-11 h-11 rounded-lg bg-[#00BFA5]/10 text-[#00BFA5] flex items-center justify-center mb-4 group-hover:bg-[#00BFA5] group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/services" className="text-[#00BFA5] text-sm font-semibold hover:underline">
                View all services →
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A]">How it works</h2>
              <p className="mt-3 text-[#64748B]">Getting started is simple — we handle everything from consultation to go-live.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.n} className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B3A6B] text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {step.n}
                  </div>
                  <h3 className="font-semibold text-[#0F172A] text-sm">{step.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 px-6 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A]">Packages for every size</h2>
              <p className="mt-3 text-[#64748B]">Transparent pricing. No hidden fees. Cancel or upgrade anytime.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-xl p-6 border flex flex-col gap-4 ${
                    p.highlight
                      ? "bg-[#1B3A6B] border-[#1B3A6B] text-white shadow-xl scale-[1.02]"
                      : "bg-white border-[#E2E8F0] text-[#0F172A]"
                  }`}
                >
                  <div>
                    <h3 className={`font-bold text-lg ${p.highlight ? "text-white" : "text-[#0F172A]"}`}>{p.name}</h3>
                    <p className={`text-xs mt-1 ${p.highlight ? "text-[#00BFA5]" : "text-[#64748B]"}`}>{p.employees}</p>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#00BFA5]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={p.highlight ? "text-[#CBD5E1]" : "text-[#64748B]"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-center transition-colors ${
                      p.highlight
                        ? "bg-[#00BFA5] text-white hover:bg-[#00a892]"
                        : "border border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white"
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT SEGMENTS */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Who we serve</h2>
            <p className="text-[#64748B] mb-10">From sole traders to schools — we have the right solution for your payroll.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "SMEs", icon: "🏢" },
                { label: "NGOs & Non-profits", icon: "🤝" },
                { label: "Schools", icon: "🏫" },
                { label: "Private Households", icon: "🏡" },
              ].map((seg) => (
                <div key={seg.label} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] flex flex-col items-center gap-3">
                  <span className="text-3xl">{seg.icon}</span>
                  <span className="text-sm font-semibold text-[#0F172A]">{seg.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 px-6 bg-[#F8FAFC]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A]">What our clients say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-6 border border-[#E2E8F0] flex flex-col gap-4">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#00BFA5]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">{t.name}</p>
                    <p className="text-xs text-[#94A3B8]">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-6 bg-[#1B3A6B] text-white text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold">Ready to hand over your payroll?</h2>
            <p className="text-[#CBD5E1]">
              Get a free consultation and custom quote. No obligation — just a conversation about how we can take payroll off your plate.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#00BFA5] text-white font-semibold rounded-lg hover:bg-[#00a892] transition-colors text-sm"
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
