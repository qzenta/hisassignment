import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { services, getService } from "@/lib/services";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | His Assignment Payroll Solutions`,
    description: service.intro,
  };
}

const CheckIcon = () => (
  <svg className="w-5 h-5 shrink-0 text-[#14B8A6] mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <PageHero
          label="Our Services"
          title={service.title}
          sub={service.intro}
          image={service.image}
        />

        {/* ── SERVICE DETAIL ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 items-start">

            {/* left — content */}
            <div className="flex flex-col gap-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#14B8A6]">Service Detail</p>
              <h2 className="text-3xl font-extrabold text-[#1A2E4A]">{service.title}</h2>
              <p className="text-[#374151] leading-relaxed text-lg">{service.desc}</p>

              <div className="mt-2">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-5">What&apos;s included</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#374151]">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex gap-4 flex-wrap">
                <Link href="/contact" className="px-8 py-3.5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0F9488] transition-colors text-sm uppercase tracking-wide">
                  Get A Quote
                </Link>
                <Link href="/services" className="px-8 py-3.5 border-2 border-[#1A2E4A] text-[#1A2E4A] font-bold rounded-lg hover:bg-[#1A2E4A] hover:text-white transition-colors text-sm uppercase tracking-wide">
                  All Services
                </Link>
              </div>
            </div>

            {/* right — sidebar */}
            <div className="bg-[#F8FAFB] rounded-2xl border border-[#E5E7EB] p-7 sticky top-24">
              <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-5">Other Services</p>
              <ul className="flex flex-col gap-3">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2 text-sm text-[#374151] hover:text-[#14B8A6] transition-colors font-medium group"
                    >
                      <svg className="w-4 h-4 text-[#14B8A6] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="flex items-center gap-2 text-sm text-[#14B8A6] font-bold hover:text-[#0F9488] transition-colors mt-2">
                    View all services →
                  </Link>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-3">Need help choosing?</p>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">Not sure which service fits your business? Book a free consultation.</p>
                <Link href="/contact" className="block text-center px-5 py-3 bg-[#1A2E4A] text-white text-sm font-bold rounded-lg hover:bg-[#14253a] transition-colors">
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section className="relative bg-[#1A2E4A] text-white py-16 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid-light opacity-10 pointer-events-none" />
          <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-5">
            <h2 className="text-3xl font-extrabold">Ready to get started?</h2>
            <p className="text-[#94A3B8] leading-relaxed">
              Contact us today for a free consultation and tailored quote.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0F9488] transition-colors text-sm uppercase tracking-wide shadow-lg">
              Get A Free Quote
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
