import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const differentiators = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "On Time",
    desc: "Reports and filings completed promptly — every submission, every cycle, without reminders.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Experienced",
    desc: "Accurate, dependable payroll support backed by deep knowledge of South African compliance.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Detail-Focused",
    desc: "Every figure is double-checked for clarity and precision before it leaves our desk.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Transparent",
    desc: "Simple, easy-to-understand communication. No jargon, no surprises.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "Tailored Solutions",
    desc: "Customised services for your unique payroll needs — not a one-size-fits-all package.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Supportive",
    desc: "Always available for queries, guidance, and help when your employees or SARS need answers.",
  },
];

const skills = [
  "PAYE & SARS",
  "EMP201/EMP501",
  "IRP5 Submissions",
  "UIF & SDL",
  "PoPIA Compliance",
  "Payroll Consulting",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        <PageHero
          label="About Us"
          title="A Dedicated Payroll Partner for South African Businesses"
          sub="Small team. Deep expertise. Every client works directly with the specialist who knows their payroll inside out."
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
        />

        {/* ── OUR STORY — split layout ── */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6]">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E4A] leading-tight">
                Your payroll department without the overhead
              </h2>
              <p className="text-[#374151] leading-relaxed">
                His Assignment Payroll Solutions was founded with one goal: to give South African businesses access to a professional, dedicated payroll service that grows with them — without the cost or complexity of a full-time employee.
              </p>
              <p className="text-[#374151] leading-relaxed">
                Based in Ferndale, Randburg, we specialise in payroll BPO and consulting for SMEs, NGOs, schools, and private households across Gauteng. We understand local compliance — SARS, UIF, SDL, and PoPIA — inside out.
              </p>
              <p className="text-[#374151] leading-relaxed">
                We don&apos;t just process numbers. We act as your payroll department, handling every submission, query, and year-end process so you never have to worry about it again.
              </p>
              <Link
                href="/contact"
                className="inline-flex self-start px-6 py-3 bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#0F9488] transition-colors text-sm"
              >
                Work with us
              </Link>
            </div>

            {/* right — image */}
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
                alt="South African business professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="py-20 px-6 bg-[#F8FAFB]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6] mb-3">Why choose us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E4A]">This is why we should work together</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="bg-white rounded-xl p-6 border border-[#E5E7EB] hover:shadow-md transition-shadow"
                  style={{ borderLeft: "4px solid #14B8A6" }}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-4">
                    {d.icon}
                  </div>
                  <h3 className="font-bold text-[#1A2E4A] mb-2">{d.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#14B8A6] hover:text-[#0F9488] transition-colors">
                View all our services →
              </Link>
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6] mb-3">Our Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E4A]">The people behind your payroll</h2>
            </div>

            <div className="bg-[#F8FAFB] rounded-2xl border border-[#E5E7EB] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">

                {/* LEFT — avatar */}
                <div className="flex flex-col items-center justify-center py-10 px-6 bg-[#1A2E4A]">
                  {/* TODO: Replace NN avatar with headshot when Nomusa supplies photo */}
                  <div className="w-[120px] h-[120px] rounded-full bg-[#1A2E4A] border-4 border-[#14B8A6]/40 flex items-center justify-center">
                    <span className="text-3xl font-extrabold text-[#14B8A6] tracking-tight">NN</span>
                  </div>
                </div>

                {/* RIGHT — bio */}
                <div className="p-8 md:p-10 flex flex-col gap-5">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A2E4A]">Nomusa Ngidi</h3>
                    <p className="text-sm font-semibold text-[#14B8A6] mt-1">Founder &amp; Payroll Specialist · Information Officer</p>
                    <div className="mt-3 h-[2px] w-12 bg-[#14B8A6] rounded-full" />
                  </div>

                  <p className="text-[#374151] leading-relaxed text-sm">
                    Nomusa Ngidi is the founder of His Assignment Payroll Solutions and the dedicated payroll specialist behind every client engagement. With hands-on experience across SME, NGO, school and household payrolls, she brings deep working knowledge of PAYE, UIF, SDL, EMP201/EMP501 submissions and IRP5 reconciliations to every mandate. As the company&apos;s designated Information Officer, Nomusa ensures all client data is processed, stored and protected in full compliance with the Protection of Personal Information Act (PoPIA). Her approach is methodical, detail-first and client-focused — ensuring every payroll cycle runs without error and every SARS obligation is met on time.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {skills.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#14B8A6]/10 text-[#14B8A6] font-semibold px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section className="relative bg-[#1A2E4A] text-white py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid-light opacity-10 pointer-events-none" />
          <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to hand over your payroll?</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Start with a free consultation. We&apos;ll understand your needs and send you a clear, no-obligation quote.
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
