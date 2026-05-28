import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const differentiators = [
  { title: "On Time", desc: "Reports and filings completed promptly — every submission, every cycle, without reminders." },
  { title: "Experienced", desc: "Accurate, dependable payroll support backed by deep knowledge of South African compliance." },
  { title: "Detail-Focused", desc: "Every figure is double-checked for clarity and precision before it leaves our desk." },
  { title: "Transparent", desc: "Simple, easy-to-understand communication. No jargon, no surprises." },
  { title: "Tailored Solutions", desc: "Customised services for your unique payroll needs — not a one-size-fits-all package." },
  { title: "Supportive", desc: "Always available for queries, guidance, and help when your employees or SARS need answers." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section
          className="relative text-white py-28 px-6 overflow-hidden flex items-center justify-center min-h-[50vh]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="absolute inset-0 bg-[#1B3A6B]/80" />
          <div className="relative max-w-3xl mx-auto text-center flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About HisAssignment</h1>
            <p className="text-[#CBD5E1] text-lg">
              A dedicated payroll partner for South African businesses of every size.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="py-20 px-6 bg-[#F8FAFC]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="flex flex-col gap-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#00BFA5]">Our Story</div>
              <h2 className="text-3xl font-bold text-[#0F172A]">Your payroll department without the overhead</h2>
              <p className="text-[#475569] leading-relaxed">
                HisAssignment (Pty) Ltd was founded with one goal: to give South African businesses access to a professional, dedicated payroll service that grows with them — without the cost of a full-time employee.
              </p>
              <p className="text-[#475569] leading-relaxed">
                Based in Ferndale, Randburg, we specialise in payroll BPO and consulting for SMEs, NGOs, schools and private households across Gauteng. We understand local compliance — SARS, UIF, SDL and PoPIA — inside out.
              </p>
              <p className="text-[#475569] leading-relaxed">
                We don&apos;t just process numbers. We act as your payroll department, handling every submission, query and year-end process so you never have to worry about it again.
              </p>
              <Link
                href="/contact"
                className="inline-flex self-start px-6 py-3 bg-[#00BFA5] text-white font-semibold rounded-lg hover:bg-[#00a892] transition-colors text-sm"
              >
                Work with us
              </Link>
            </div>

            {/* stats */}
            <div className="grid grid-cols-1 gap-6">
              {[
                { value: "100%", label: "SARS Compliant", desc: "Every submission meets SARS requirements." },
                { value: "50+", label: "Clients Served", desc: "SMEs, NGOs, schools and households." },
                { value: "24h", label: "Response Time", desc: "Every query answered within one business day." },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-6 border border-[#E2E8F0] flex items-center gap-5">
                  <div className="text-4xl font-bold text-[#00BFA5] w-20 shrink-0">{s.value}</div>
                  <div>
                    <div className="font-semibold text-[#0F172A]">{s.label}</div>
                    <div className="text-sm text-[#64748B] mt-0.5">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#00BFA5] mb-3">Why choose us</div>
              <h2 className="text-3xl font-bold text-[#0F172A]">This is why we should work together</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((d) => (
                <div key={d.title} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                  <div className="w-8 h-8 rounded-full bg-[#1B3A6B] flex items-center justify-center mb-4">
                    <svg className="w-4 h-4 text-[#00BFA5]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mb-2">{d.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#1B3A6B] text-white text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold">Ready to hand over your payroll?</h2>
            <p className="text-[#CBD5E1]">
              Start with a free consultation. We&apos;ll understand your needs and send you a clear, no-obligation quote.
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
