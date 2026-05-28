import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Payroll Processing",
    desc: "Accurate payroll processing ensures that all employee salaries are calculated correctly and paid on time. This includes handling wages, deductions, overtime, bonuses, and statutory contributions in a structured and compliant manner.",
    features: ["Salary & wage calculations", "Overtime & bonus processing", "Statutory deduction handling", "Payslip generation", "Bank payment files"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    title: "Payroll Outsourcing",
    desc: "Payroll outsourcing allows businesses to delegate their entire payroll function to a dedicated service, reducing internal workload and administrative pressure. We become your payroll department — without the overhead of a full-time employee.",
    features: ["Full payroll BPO", "Dedicated payroll consultant", "Month-end payroll runs", "Employee query handling", "SARS correspondence management"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
  },
  {
    title: "SARS Compliance Management",
    desc: "Management of statutory obligations such as PAYE, UIF, and SDL ensures full compliance with South African tax and labour requirements. We handle all SARS submissions on your behalf so you never miss a deadline.",
    features: ["EMP201 monthly submissions", "EMP501 bi-annual reconciliation", "IRP5 & IT3(a) certificates", "SARS eFiling management", "Audit support"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
  {
    title: "PAYE, UIF & SDL Administration",
    desc: "Management of statutory obligations such as PAYE, UIF, and SDL ensures full compliance with South African tax and labour requirements. We calculate, submit, and reconcile all statutory amounts on your behalf.",
    features: ["PAYE calculations & submissions", "UIF registration & declarations", "SDL levy management", "Monthly EMP201 returns", "Annual reconciliations"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
  },
  {
    title: "Leave Management",
    desc: "Accurate leave tracking and administration, fully integrated with your payroll cycle. We maintain leave balances, process leave pay, and ensure your records are always up to date and audit-ready.",
    features: ["Annual, sick & family leave tracking", "Leave balance reporting", "Leave pay processing", "BCEA compliance", "Leave accrual management"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    title: "Year-End Tax Certificates",
    desc: "IRP5 and IT3(a) certificates prepared and submitted accurately, making tax season completely stress-free for you and your employees. We reconcile the full tax year and submit to SARS on your behalf.",
    features: ["IRP5 certificate preparation", "IT3(a) submissions", "EMP501 annual reconciliation", "Employee tax year summaries", "SARS correspondence handling"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
  },
  {
    title: "Payroll Reporting",
    desc: "Payroll reporting provides businesses with clear financial insights into salary expenses, tax obligations, and overall payroll costs. Custom reports are available to support management decisions and audit requirements.",
    features: ["Monthly cost reports", "Department payroll summaries", "Custom management reports", "Audit-ready records", "Year-over-year comparisons"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
  {
    title: "Payroll Consulting",
    desc: "Expert advice on payroll structures, compliance queries, and operational improvements tailored to your business. Whether you need a once-off review or ongoing advisory support, we have the expertise to help.",
    features: ["Payroll structure review", "Compliance health checks", "New business setup", "Payroll software advisory", "SARS query resolution"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section
          className="relative text-white py-28 px-6 overflow-hidden flex items-center justify-center min-h-[50vh]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#1B3A6B]/80" />
          <div className="relative max-w-3xl mx-auto text-center flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Everything payroll. Nothing else.</h1>
            <p className="text-[#CBD5E1] text-lg">
              We specialise in one discipline and do it exceptionally well — so you can focus on running your business.
            </p>
            <div className="flex justify-center mt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-[#00BFA5] text-white font-semibold rounded-lg hover:bg-[#00a892] transition-colors text-sm"
              >
                Get A Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 px-6 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto flex flex-col gap-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`bg-white rounded-xl border border-[#E2E8F0] p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00BFA5]/10 text-[#00BFA5] flex items-center justify-center">
                    {s.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#0F172A]">{s.title}</h2>
                  <p className="text-[#475569] leading-relaxed">{s.desc}</p>
                  <Link href="/contact" className="text-[#00BFA5] text-sm font-semibold hover:underline">
                    Get a quote →
                  </Link>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-4">What&apos;s included</h3>
                  <ul className="flex flex-col gap-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[#475569]">
                        <svg className="w-4 h-4 shrink-0 text-[#00BFA5]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#1B3A6B] text-white text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold">Not sure which service you need?</h2>
            <p className="text-[#CBD5E1]">
              Book a free consultation and we&apos;ll recommend the right solution for your business size and compliance needs.
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
