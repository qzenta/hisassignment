import Image from "next/image";

// w/h control the rendered size — tune per logo as needed
const partners = [
  { name: "SimplePay",    slug: "simplepay",  w: 120, h: 36 },
  { name: "Sikatrix",     slug: "sikatrix",   w: 110, h: 36 },
  { name: "Xero",         slug: "xero",       w: 80,  h: 36 },
  { name: "PaySpace",     slug: "payspace",   w: 120, h: 36 },
  { name: "Sage Pay",     slug: "sagepay",    w: 110, h: 36 },
  { name: "Papaya Global",slug: "papaya",     w: 120, h: 36 },
  { name: "QuickBooks",   slug: "quickbooks", w: 150, h: 40 },
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

        <div className="flex items-center animate-marquee whitespace-nowrap">
          {items.map((p, i) => (
            <div
              key={`${p.slug}-${i}`}
              className="inline-flex items-center justify-center mx-10"
              title={p.name}
            >
              <Image
                src={`/${p.slug}.svg`}
                alt={p.name}
                width={p.w}
                height={p.h}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
