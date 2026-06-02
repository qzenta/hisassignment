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

        {/* ── HERO — light grey band ── */}
        <section className="bg-[#F8FAFB] border-b border-[#E5E7EB] py-16 px-6">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6]">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] tracking-tight">Frequently Asked Questions</h1>
            <p className="text-[#6B7280] text-lg leading-relaxed max-w-xl mx-auto">
              Everything you need to know about outsourcing your payroll with us.
            </p>
          </div>
        </section>

        {/* ── ACCORDION ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col">
            {faqs.map((item, idx) => (
              <details
                key={idx}
                className="group border-b border-[#E5E7EB] last:border-b-0"
              >
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none font-semibold text-[#1A2E4A] text-sm leading-snug">
                  <span>{item.q}</span>
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center font-bold text-base leading-none select-none transition-colors group-open:bg-[#14B8A6] group-open:text-white">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <div className="pb-6 text-sm text-[#374151] leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── STILL HAVE QUESTIONS ── */}
        <section className="py-16 px-6 bg-[#F8FAFB] border-t border-[#E5E7EB] text-center">
          <div className="max-w-xl mx-auto flex flex-col items-center gap-5">
            <h2 className="text-2xl font-bold text-[#1A2E4A]">Still have questions?</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Reach out directly — we respond within 24 hours on business days.
            </p>
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#0F9488] transition-colors text-sm"
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
