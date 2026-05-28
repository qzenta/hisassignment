import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | His Assignment Payroll Solutions",
  description: "Answers to common questions about outsourcing your payroll with His Assignment Payroll Solutions.",
};

const faqs = [
  {
    q: "What does it cost to outsource my payroll?",
    a: "Our pricing is based on your employee count, payroll frequency, and the specific services you need. We provide a clear, itemised quote after a free consultation — no hidden fees. Most SME clients find outsourcing more cost-effective than managing payroll in-house once time, software, and compliance risk are factored in.",
  },
  {
    q: "How do I get started?",
    a: "Simply book a free consultation via our Contact page or call 084 709 0089. We'll discuss your current payroll setup, employee count, and compliance obligations — then send you a tailored proposal within 24 hours.",
  },
  {
    q: "What software do you use?",
    a: "We work with multiple industry-standard platforms including SimplePay, PaySpace, Sage, and Xero Payroll — so we can align with what your business already uses, or recommend the best fit for your size and structure.",
  },
  {
    q: "How do you handle SARS submissions?",
    a: "We manage all SARS payroll obligations on your behalf — monthly EMP201 returns, bi-annual EMP501 reconciliations, and year-end IRP5/IT3(a) submissions. We track every SARS deadline and submit on time, every time.",
  },
  {
    q: "Do you work with NGOs and schools?",
    a: "Yes. We have specific experience with NGO payroll reporting requirements and school payrolls (SGB staff and DoE-aligned structures). We understand the unique compliance and funding constraints these sectors face.",
  },
  {
    q: "Can you handle payrolls of any size?",
    a: "We serve businesses from 1 to 200+ employees. Whether you have a handful of staff or a growing headcount, our service scales with you. We also handle domestic/household employer payrolls.",
  },
  {
    q: "What happens at year-end?",
    a: "We handle everything — EMP501 reconciliation, IRP5 and IT3(a) certificate generation, SARS submission, and issuing certificates to your employees. Tax season becomes completely stress-free.",
  },
  {
    q: "How secure is my payroll data?",
    a: "We are fully PoPIA compliant. All client data is handled with strict confidentiality, stored securely, and never shared with third parties. Our Information Officer oversees data governance across all client engagements.",
  },
  {
    q: "What if I already have payroll software?",
    a: "No problem. We can administer your payroll within your existing platform, or help you migrate to a better-fit solution during onboarding. There is zero disruption to your payroll runs during the transition.",
  },
  {
    q: "Is the initial consultation really free?",
    a: "Yes, completely. No obligation, no pressure. We want to understand your situation first and only propose services that genuinely add value to your business.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section
          className="relative text-white py-24 px-6 overflow-hidden flex items-center justify-center min-h-[40vh]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#1B3A6B]/82" />
          <div className="relative max-w-3xl mx-auto text-center flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h1>
            <p className="text-[#CBD5E1] text-lg">
              Everything you need to know about outsourcing your payroll with us.
            </p>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="py-20 px-6 bg-[#F8FAFC]">
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((item, idx) => (
              <details
                key={idx}
                className="bg-white rounded-xl border border-[#E2E8F0] group open:border-[#00BFA5]/40 open:shadow-sm transition-all"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-[#0F172A] text-sm">
                  <span>{item.q}</span>
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[#00BFA5]/10 text-[#00BFA5] flex items-center justify-center text-lg leading-none select-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-white border-t border-[#E2E8F0] text-center">
          <div className="max-w-xl mx-auto flex flex-col items-center gap-5">
            <h2 className="text-2xl font-bold text-[#0F172A]">Still have questions?</h2>
            <p className="text-[#64748B]">
              Reach out directly — we respond within 24 hours on business days.
            </p>
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-[#00BFA5] text-white font-semibold rounded-lg hover:bg-[#00a892] transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
