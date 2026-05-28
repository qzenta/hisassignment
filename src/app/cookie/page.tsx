import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | His Assignment Payroll Solutions",
  description: "Cookie Policy for hisassignment.co.za — what cookies we use and how to manage your preferences.",
};

const lastUpdated = "28 May 2026";

export default function CookiePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="bg-[#1B3A6B] text-white py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">Cookie Policy</h1>
            <p className="mt-3 text-[#CBD5E1] text-sm">Last updated: {lastUpdated}</p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 px-6 bg-[#F8FAFC]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 md:p-10 flex flex-col gap-8 text-sm text-[#475569] leading-relaxed">

              <p>
                This Cookie Policy explains how His Assignment Payroll Solutions (Pty) Ltd (&ldquo;His Assignment&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) uses cookies and similar tracking technologies when you visit hisassignment.co.za (&ldquo;the website&rdquo;).
              </p>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files placed on your device by a website when you visit it. They are widely used to make websites work efficiently, to remember your preferences, and to provide basic analytics to website owners.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">2. Cookies We Use</h2>
                <p>This website uses a minimal set of cookies:</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-xs border border-[#E2E8F0] rounded-lg overflow-hidden">
                    <thead className="bg-[#F8FAFC]">
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold text-[#0F172A] border-b border-[#E2E8F0]">Cookie</th>
                        <th className="text-left px-4 py-3 font-semibold text-[#0F172A] border-b border-[#E2E8F0]">Type</th>
                        <th className="text-left px-4 py-3 font-semibold text-[#0F172A] border-b border-[#E2E8F0]">Purpose</th>
                        <th className="text-left px-4 py-3 font-semibold text-[#0F172A] border-b border-[#E2E8F0]">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "__vercel_live_token", type: "Strictly Necessary", purpose: "Vercel hosting infrastructure", duration: "Session" },
                        { name: "_ga, _ga_*", type: "Analytics (optional)", purpose: "Google Analytics — anonymous page-view statistics", duration: "Up to 2 years" },
                        { name: "ha_cookie_consent", type: "Functional", purpose: "Remembers your cookie consent choice", duration: "12 months" },
                      ].map((row) => (
                        <tr key={row.name} className="border-b border-[#E2E8F0] last:border-0">
                          <td className="px-4 py-3 font-mono text-[#1B3A6B]">{row.name}</td>
                          <td className="px-4 py-3">{row.type}</td>
                          <td className="px-4 py-3">{row.purpose}</td>
                          <td className="px-4 py-3">{row.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-[#94A3B8]">
                  Note: Analytics cookies are only set with your consent. Strictly necessary cookies cannot be disabled.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">3. Third-Party Cookies</h2>
                <p>
                  We do not allow third-party advertising networks to set cookies on this website. If you contact us via an embedded form, data is transmitted to Brevo (our transactional email provider) but no persistent tracking cookies are set by Brevo on your device.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">4. Managing Cookies</h2>
                <p>
                  You can control and delete cookies at any time through your browser settings. The following links provide instructions for common browsers:
                </p>
                <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
                  {[
                    { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                    { name: "Mozilla Firefox", url: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" },
                    { name: "Microsoft Edge", url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge" },
                    { name: "Safari", url: "https://support.apple.com/en-za/guide/safari/sfri11471/mac" },
                  ].map((b) => (
                    <li key={b.name}>
                      <a href={b.url} target="_blank" rel="noopener noreferrer" className="text-[#00BFA5] hover:underline">
                        {b.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-3">
                  Please note: disabling cookies may affect the functionality of this and other websites.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">5. Changes to This Policy</h2>
                <p>
                  We may update this Cookie Policy to reflect changes in our technology or legal requirements. Any updates will be posted here with a revised &ldquo;last updated&rdquo; date.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">6. Contact</h2>
                <p>
                  Questions about this Cookie Policy? Contact us at{" "}
                  <a href="mailto:payroll@hisassignment.co.za" className="text-[#00BFA5] hover:underline">
                    payroll@hisassignment.co.za
                  </a>
                  .
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
