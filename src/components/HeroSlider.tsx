"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    badge: "SARS Registered · PoPIA Compliant",
    heading: (
      <>
        Outsource your payroll.<br />
        <span className="text-[#00BFA5]">Reclaim your time.</span>
      </>
    ),
    sub: "Professional payroll management for South African SMEs, NGOs and schools. SARS compliant. PoPIA secure. Personally managed.",
    cta1: { label: "Get A Free Quote", href: "/contact" },
    cta2: { label: "View Services", href: "/services" },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80",
    badge: "EMP201 · EMP501 · IRP5 · IT3(a)",
    heading: (
      <>
        SARS compliant.<br />
        <span className="text-[#00BFA5]">Every submission. On time.</span>
      </>
    ),
    sub: "We handle every statutory filing — so you never face penalties, late submissions, or SARS correspondence again.",
    cta1: { label: "See How It Works", href: "/services" },
    cta2: { label: "Talk To Us", href: "/contact" },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    badge: "Serving All Of Gauteng",
    heading: (
      <>
        Your dedicated payroll department.<br />
        <span className="text-[#00BFA5]">Without the overhead.</span>
      </>
    ),
    sub: "Serving businesses across Randburg, Sandton, Johannesburg, Pretoria, Germiston, Boksburg and beyond.",
    cta1: { label: "Find Your Location", href: "/locations" },
    cta2: { label: "Get A Quote", href: "/contact" },
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [active, goTo]);

  const slide = slides[active];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#1B3A6B]">
      {/* background image */}
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
      <div className="absolute inset-0 bg-[#1B3A6B]/75" />

      {/* content */}
      <div
        className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center flex flex-col items-center gap-6"
        style={{ opacity: fading ? 0 : 1, transition: "opacity 0.3s ease" }}
      >
        <div className="inline-flex items-center gap-2 bg-[#00BFA5]/15 text-[#00BFA5] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-[#00BFA5]/30">
          {slide.badge}
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          {slide.heading}
        </h1>

        <p className="text-lg text-[#CBD5E1] max-w-2xl">{slide.sub}</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href={slide.cta1.href}
            className="px-8 py-3.5 bg-[#00BFA5] text-white font-semibold rounded-lg hover:bg-[#00a892] transition-colors text-sm"
          >
            {slide.cta1.label}
          </Link>
          <Link
            href={slide.cta2.href}
            className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
          >
            {slide.cta2.label}
          </Link>
        </div>

        {/* dots */}
        <div className="flex gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "bg-[#00BFA5] w-6 h-2"
                  : "bg-white/40 w-2 h-2 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* prev / next arrows */}
      <button
        onClick={() => goTo((active - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo((active + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
