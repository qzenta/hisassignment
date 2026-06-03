interface PageHeroProps {
  label: string;
  title: string;
  sub: string;
  image: string;
}

export default function PageHero({ label, title, sub, image }: PageHeroProps) {
  return (
    <section
      className="relative text-white flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "42vh",
      }}
    >
      <div className="absolute inset-0 bg-[#1A2E4A]/75" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center flex flex-col gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#14B8A6]">{label}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">{title}</h1>
        <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto">{sub}</p>
      </div>
    </section>
  );
}
