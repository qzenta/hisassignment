"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    badge: "SARS Registered · PoPIA Compliant",
    heading: "Outsource Your Payroll.\nReclaim Your Time.",
    sub: "Professional payroll management for South African SMEs, NGOs and schools. SARS compliant. PoPIA secure. Personally managed.",
    cta1: { label: "Get A Free Quote", href: "/contact" },
    cta2: { label: "View Services", href: "/services" },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80",
    badge: "EMP201 · EMP501 · IRP5 · IT3(a)",
    heading: "SARS Compliant.\nEvery Submission. On Time.",
    sub: "We handle every statutory filing — so you never face penalties, late submissions, or SARS correspondence again.",
    cta1: { label: "See How It Works", href: "/services" },
    cta2: { label: "Talk To Us", href: "/contact" },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    badge: "Serving All Of Gauteng",
    heading: "Your Dedicated\nPayroll Department.",
    sub: "Serving businesses across Randburg, Sandton, Johannesburg, Pretoria, Germiston, Boksburg and beyond.",
    cta1: { label: "Find Your Location", href: "/locations" },
    cta2: { label: "Get A Quote", href: "/contact" },
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setActive(idx);
      setTransitioning(false);
    }, 400);
  }, [transitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#1A2E4A]" style={{ height: "52vh", minHeight: "380px", maxHeight: "560px" }}>

      {/* background images — crossfade */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url('${s.image}')`,
            opacity: i === active ? 1 : 0,
          }}
        />
      ))}

      {/* dark overlay */}
      <div className="absolute inset-0 bg-[#0D1B2E]/65" />

      {/* bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1B2E]/40 to-transparent" />

      {/* content */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-white text-center flex flex-col items-center gap-4"
        style={{ opacity: transitioning ? 0 : 1, transition: "opacity 0.4s ease" }}
      >
        {/* badge */}
        <div className="inline-flex items-center gap-2 bg-[#14B8A6]/20 text-[#14B8A6] text-xs font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border border-[#14B8A6]/40">
          {slide.badge}
        </div>

        {/* heading — large, bold, Accace-style */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
          {slide.heading.split("\n").map((line, i) => (
            <span key={i} className={i === 1 ? "block text-[#14B8A6]" : "block"}>
              {line}
            </span>
          ))}
        </h1>

        <p className="text-sm md:text-base text-white/80 max-w-xl leading-relaxed font-medium">
          {slide.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href={slide.cta1.href}
            className="px-9 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0F9488] transition-colors text-sm tracking-wide uppercase"
          >
            {slide.cta1.label}
          </Link>
          <Link
            href={slide.cta2.href}
            className="px-9 py-4 border-2 border-white/40 text-white font-bold rounded-lg hover:bg-white/10 hover:border-white/70 transition-all text-sm tracking-wide uppercase"
          >
            {slide.cta2.label}
          </Link>
        </div>

        {/* dot indicators */}
        <div className="flex gap-2.5 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "bg-[#14B8A6] w-8 h-2.5"
                  : "bg-white/40 w-2.5 h-2.5 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* prev / next arrows */}
      <button
        onClick={() => goTo((active - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo((active + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* slide counter */}
      <div className="absolute bottom-8 right-8 z-10 text-white/50 text-xs font-bold tracking-widest uppercase">
        {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
