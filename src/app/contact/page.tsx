"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceOptions = [
  "Full payroll administration",
  "SARS compliance management",
  "UIF & SDL administration",
  "Leave management",
  "Year-end tax certificates",
  "Payroll consulting",
  "Not sure — please advise",
];

type FormState = "idle" | "submitting" | "success" | "error";

const nextSteps = [
  {
    n: "01",
    title: "We review your enquiry",
    desc: "Our team reads every message personally and assesses your specific payroll needs.",
  },
  {
    n: "02",
    title: "We send a tailored quote within 24h",
    desc: "You receive a clear, itemised proposal — no generic packages, no hidden fees.",
  },
  {
    n: "03",
    title: "We schedule a free consultation",
    desc: "We walk through the proposal together and answer any questions before you commit to anything.",
  },
];

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO — light grey band ── */}
        <section className="bg-[#F8FAFB] border-b border-[#E5E7EB] py-16 px-6">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6]">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A2E4A] tracking-tight">Get A Free Quote</h1>
            <p className="text-[#6B7280] text-lg leading-relaxed max-w-xl mx-auto">
              Tell us about your payroll needs and we&apos;ll send a clear, tailored quote within 24 hours.
            </p>
          </div>
        </section>

        {/* ── CONTACT COLUMNS ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT — contact details */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6] mb-3">Contact Information</p>
                <h2 className="text-2xl font-bold text-[#1A2E4A]">We&apos;d love to hear from you</h2>
                <p className="mt-3 text-[#6B7280] leading-relaxed">
                  Reach out via the form, give us a call, or email us directly. We respond to all enquiries within one business day.
                </p>
              </div>

              <ul className="flex flex-col gap-5">
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A2E4A] text-sm">Office Address</div>
                    <div className="text-[#6B7280] text-sm mt-0.5">396 Elgin Street, Ferndale<br />Randburg, Gauteng, 2194</div>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A2E4A] text-sm">Phone</div>
                    <a href="tel:+27847090089" className="text-[#6B7280] text-sm mt-0.5 hover:text-[#14B8A6] transition-colors block">
                      084 709 0089
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A2E4A] text-sm">Email</div>
                    <a href="mailto:payroll@hisassignment.co.za" className="text-[#6B7280] text-sm mt-0.5 hover:text-[#14B8A6] transition-colors block">
                      payroll@hisassignment.co.za
                    </a>
                  </div>
                </li>
              </ul>

              <div className="border-t border-[#E5E7EB] pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-3">Response time</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  We respond to all enquiries within <span className="font-semibold text-[#1A2E4A]">24 hours</span> on business days. For urgent payroll queries, call us directly.
                </p>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="bg-[#F8FAFB] rounded-xl border border-[#E5E7EB] p-8">
              {state === "success" ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#14B8A6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A2E4A]">Message received!</h3>
                  <p className="text-[#6B7280] text-sm">We&apos;ll be in touch within 24 hours with your custom quote.</p>
                  <button
                    onClick={() => setState("idle")}
                    className="mt-2 text-sm text-[#14B8A6] font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#374151]" htmlFor="firstName">First name *</label>
                      <input
                        id="firstName"
                        name="firstName"
                        required
                        className="border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 text-sm text-[#1A2E4A] placeholder-[#9CA3AF] bg-white focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/40 focus:border-[#14B8A6]"
                        placeholder="Thabo"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#374151]" htmlFor="lastName">Last name *</label>
                      <input
                        id="lastName"
                        name="lastName"
                        required
                        className="border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 text-sm text-[#1A2E4A] placeholder-[#9CA3AF] bg-white focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/40 focus:border-[#14B8A6]"
                        placeholder="Mokoena"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#374151]" htmlFor="email">Email address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 text-sm text-[#1A2E4A] placeholder-[#9CA3AF] bg-white focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/40 focus:border-[#14B8A6]"
                      placeholder="thabo@company.co.za"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#374151]" htmlFor="company">Company name</label>
                    <input
                      id="company"
                      name="company"
                      className="border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 text-sm text-[#1A2E4A] placeholder-[#9CA3AF] bg-white focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/40 focus:border-[#14B8A6]"
                      placeholder="Your Company (Pty) Ltd"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#374151]" htmlFor="service">Service needed *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 text-sm text-[#1A2E4A] bg-white focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/40 focus:border-[#14B8A6]"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#374151]" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 text-sm text-[#1A2E4A] placeholder-[#9CA3AF] bg-white focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/40 focus:border-[#14B8A6] resize-none"
                      placeholder="Tell us about your business — number of employees, any specific compliance concerns..."
                    />
                  </div>

                  {state === "error" && (
                    <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <p>Something went wrong. Please try again or email us directly.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="w-full py-3 bg-[#14B8A6] text-white font-semibold rounded-lg hover:bg-[#0F9488] transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── WHAT HAPPENS NEXT ── */}
        <section className="py-16 px-6 bg-[#F8FAFB] border-t border-[#E5E7EB]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6] mb-3">Process</p>
              <h2 className="text-2xl font-bold text-[#1A2E4A]">What happens next?</h2>
            </div>
            <div className="relative">
              <div
                className="hidden lg:block absolute top-5 left-[8%] right-[8%] h-0"
                style={{ borderTop: "2px dashed #14B8A630" }}
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {nextSteps.map((step) => (
                  <div key={step.n} className="flex flex-col items-start gap-3 relative">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-[#14B8A6] text-white text-sm font-bold flex items-center justify-center shrink-0 ring-4 ring-[#F8FAFB]">
                      {step.n}
                    </div>
                    <h3 className="font-semibold text-[#1A2E4A] text-sm">{step.title}</h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
