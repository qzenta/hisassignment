import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations, getLocation } from "@/lib/locations";
import PageHero from "@/components/PageHero";

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

        <PageHero
          label={`${loc.region}${loc.isHQ ? " · Headquarters" : " · Service Area"}`}
          title={`Payroll Services in ${loc.name}`}
          sub={loc.description}
          image={loc.image}
        />

        {/* ── AREA PHOTO + DETAILS ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6]">
                Serving {loc.name}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E4A]">
                Professional payroll for {loc.name} businesses
              </h2>
              <p className="text-[#374151] leading-relaxed">{loc.longDescription}</p>

              {loc.isHQ && (
                <div className="bg-[#14B8A6]/10 border border-[#14B8A6]/30 rounded-xl p-4 text-sm text-[#1A2E4A]">
                  <strong className="text-[#14B8A6]">Our Headquarters</strong><br />
                  396 Elgin Street, Ferndale, Randburg, 2194<br />
                  <a href="tel:+27847090089" className="text-[#14B8A6] hover:underline">084 709 0089</a>
                  {" · "}
                  <a href="mailto:payroll@hisassignment.co.za" className="text-[#14B8A6] hover:underline">payroll@hisassignment.co.za</a>
                </div>
              )}

              <Link href="/contact" className="self-start text-sm font-semibold text-[#14B8A6] hover:text-[#0F9488] transition-colors">
                Book a free consultation →
              </Link>

              {/* area image */}
              <div className="rounded-2xl overflow-hidden shadow-md aspect-video mt-2">
                <Image
                  src={loc.image}
                  alt={`${loc.name}, Gauteng`}
                  width={700}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* services panel */}
            <div className="bg-[#F8FAFB] rounded-xl border border-[#E5E7EB] p-7 sticky top-24">
              <h3 className="font-bold text-[#1A2E4A] mb-5">Services available in {loc.name}</h3>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-[#374151]">
                    <svg className="w-5 h-5 shrink-0 text-[#14B8A6]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 block w-full py-3 bg-[#1A2E4A] text-white text-sm font-semibold rounded-lg text-center hover:bg-[#14253a] transition-colors"
              >
                Get A Quote For {loc.name}
              </Link>
            </div>
          </div>
        </section>

        {/* ── OTHER LOCATIONS ── */}
        <section className="py-16 px-6 bg-[#F8FAFB] border-t border-[#E5E7EB]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-[#1A2E4A] mb-6">Other areas we serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/locations/${o.slug}`}
                  className="bg-white rounded-xl p-4 border border-[#E5E7EB] hover:border-[#14B8A6]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all text-center"
                >
                  <div className="font-semibold text-sm text-[#1A2E4A]">{o.name}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{o.region}</div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/locations" className="text-sm font-semibold text-[#14B8A6] hover:text-[#0F9488] transition-colors">
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
