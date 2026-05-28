// Partner logo slots — replace the text spans with <Image> tags when logo files are available.
// Recommended size: 120×40px, white or dark version depending on background.

const partners = [
  { name: "SimplePay", slug: "simplepay" },
  { name: "Sikatrix", slug: "sikatrix" },
  { name: "Xero", slug: "xero" },
  { name: "PaySpace", slug: "payspace" },
  { name: "Sage Pay", slug: "sagepay" },
  { name: "Papaya Global", slug: "papaya" },
  { name: "QuickBooks", slug: "quickbooks" },
];

export default function PartnersMarquee() {
  // Duplicate list so the loop is seamless
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
              {/*
                TO ADD A LOGO:
                Replace the span below with:
                <Image src={`/logos/${p.slug}.svg`} alt={p.name} width={120} height={40} className="object-contain opacity-60 hover:opacity-100 transition-opacity" />
              */}
              <span className="text-sm font-bold tracking-wide text-[#94A3B8] hover:text-[#1B3A6B] transition-colors cursor-default select-none">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
