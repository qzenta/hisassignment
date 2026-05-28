import Image from "next/image";

// hasLogo = true means a file exists at /public/{slug}.svg
const partners = [
  { name: "SimplePay",    slug: "simplepay",  hasLogo: false },
  { name: "Sikatrix",     slug: "sikatrix",   hasLogo: false },
  { name: "Xero",         slug: "xero",       hasLogo: false },
  { name: "PaySpace",     slug: "payspace",   hasLogo: true  },
  { name: "Sage Pay",     slug: "sagepay",    hasLogo: true  },
  { name: "Papaya Global",slug: "papaya",     hasLogo: false },
  { name: "QuickBooks",   slug: "quickbooks", hasLogo: false },
];

export default function PartnersMarquee() {
  const items = [...partners, ...partners];

  return (
    <section className="bg-white border-y border-[#E2E8F0] py-6 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-5">
        Integrated with the tools you already use
      </p>

      <div className="relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((p, i) => (
            <div
              key={`${p.slug}-${i}`}
              className="inline-flex items-center justify-center mx-8 min-w-[120px] h-10"
              title={p.name}
            >
              {p.hasLogo ? (
                <Image
                  src={`/${p.slug}.svg`}
                  alt={p.name}
                  width={120}
                  height={40}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="text-sm font-bold tracking-wide text-[#94A3B8] hover:text-[#1B3A6B] transition-colors cursor-default select-none">
                  {p.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
