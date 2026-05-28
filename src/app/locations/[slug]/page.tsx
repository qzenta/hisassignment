import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations, getLocation } from "@/lib/locations";

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return {
    title: `Payroll Services in ${loc.name} | His Assignment`,
    description: loc.description,
  };
}

const services = [
  "Full payroll administration",
  "SARS compliance management",
  "UIF & SDL administration",
  "Leave management",
  "Year-end tax certificates",
  "Payroll consulting",
];

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const others = locations.filter((l) => l.slug !== slug).slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative text-white py-24 px-6 overflow-hidden min-h-[50vh] flex items-center">
          <Image
            src={loc.image}
            alt={loc.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1B3A6B]/80" />
          <div className="relative max-w-3xl mx-auto text-center flex flex-col gap-4">
            <div className="inline-flex self-center items-center gap-2 bg-[#00BFA5]/15 text-[#00BFA5] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-[#00BFA5]/30">
              {loc.region} {loc.isHQ ? "· Headquarters" : "· Service Area"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Payroll Services in {loc.name}
            </h1>
            <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">{loc.description}</p>
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

        {/* ABOUT THIS AREA */}
        <section className="py-20 px-6 bg-[#F8FAFC]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#00BFA5]">
                Serving {loc.name}
              </div>
              <h2 className="text-2xl font-bold text-[#0F172A]">
                Professional payroll for {loc.name} businesses
              </h2>
              <p className="text-[#475569] leading-relaxed">{loc.longDescription}</p>
              {loc.isHQ && (
                <div className="bg-[#00BFA5]/10 border border-[#00BFA5]/30 rounded-xl p-4 text-sm text-[#0F172A]">
                  <strong className="text-[#00BFA5]">📍 Our Headquarters</strong><br />
                  396 Elgin Street, Ferndale, Randburg, 2194<br />
                  <a href="tel:+27847090089" className="text-[#00BFA5] hover:underline">084 709 0089</a> ·{" "}
                  <a href="mailto:payroll@hisassignment.co.za" className="text-[#00BFA5] hover:underline">payroll@hisassignment.co.za</a>
                </div>
              )}
              <Link href="/contact" className="self-start text-sm font-semibold text-[#00BFA5] hover:underline">
                Book a free consultation →
              </Link>
            </div>

            {/* services */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-7">
              <h3 className="font-bold text-[#0F172A] mb-5">Services available in {loc.name}</h3>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-[#475569]">
                    <span className="w-5 h-5 rounded-full bg-[#00BFA5]/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[#00BFA5]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 block w-full py-3 bg-[#1B3A6B] text-white text-sm font-semibold rounded-lg text-center hover:bg-[#152d54] transition-colors"
              >
                Get A Quote For {loc.name}
              </Link>
            </div>
          </div>
        </section>

        {/* OTHER LOCATIONS */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-[#0F172A] mb-6">Other areas we serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/locations/${o.slug}`}
                  className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0] hover:border-[#00BFA5]/50 hover:shadow-sm transition-all text-center"
                >
                  <div className="font-semibold text-sm text-[#0F172A]">{o.name}</div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">{o.region}</div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/locations" className="text-sm font-semibold text-[#00BFA5] hover:underline">
                View all locations →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
