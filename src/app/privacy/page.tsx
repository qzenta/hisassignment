import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | His Assignment Payroll Solutions",
  description: "Privacy Policy for His Assignment Payroll Solutions — how we collect, use, and protect your personal information in compliance with PoPIA.",
};

const lastUpdated = "28 May 2026";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="bg-[#1B3A6B] text-white py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-3 text-[#CBD5E1] text-sm">Last updated: {lastUpdated}</p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 px-6 bg-[#F8FAFC]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 md:p-10 flex flex-col gap-8 text-sm text-[#475569] leading-relaxed">

              <p>
                His Assignment Payroll Solutions (Pty) Ltd (&ldquo;His Assignment&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal information in accordance with the Protection of Personal Information Act 4 of 2013 (&ldquo;PoPIA&rdquo;) and other applicable South African law.
              </p>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">1. Information Officer</h2>
                <p>
                  Our designated Information Officer responsible for ensuring PoPIA compliance is <strong>Nomusa Ngidi</strong>. For all privacy-related queries or requests, contact us at:{" "}
                  <a href="mailto:payroll@hisassignment.co.za" className="text-[#00BFA5] hover:underline">
                    payroll@hisassignment.co.za
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">2. Information We Collect</h2>
                <p>We may collect and process the following categories of personal information:</p>
                <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
                  <li><strong>Contact information:</strong> name, email address, phone number, business name.</li>
                  <li><strong>Employee payroll data:</strong> names, ID numbers, banking details, salary information, tax reference numbers, leave records (collected on behalf of client businesses).</li>
                  <li><strong>Website usage data:</strong> pages visited, browser type, referring URL (collected via standard server logs and analytics).</li>
                  <li><strong>Communication records:</strong> emails, form submissions, and telephone queries you send us.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">3. Purpose of Processing</h2>
                <p>We process personal information for the following purposes:</p>
                <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
                  <li>Providing and administering payroll services on behalf of our clients.</li>
                  <li>Meeting SARS, UIF, SDL, and other statutory obligations.</li>
                  <li>Responding to enquiries and providing client support.</li>
                  <li>Sending service-related communications and invoices.</li>
                  <li>Improving our website and service delivery.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">4. Legal Basis for Processing</h2>
                <p>
                  We process personal information on the basis of: (a) contractual necessity — to perform our service obligations; (b) legal obligation — to comply with SARS and South African labour law; (c) legitimate interest — to operate and improve our business; and (d) consent — where you have provided explicit consent for specific communications.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">5. Data Sharing</h2>
                <p>
                  We do not sell, rent, or trade your personal information. We may share information with:
                </p>
                <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
                  <li><strong>SARS and government bodies</strong> — as required by law (PAYE submissions, UIF, SDL).</li>
                  <li><strong>Payroll software providers</strong> — to facilitate processing (e.g. SimplePay, PaySpace, Sage) under appropriate data processing agreements.</li>
                  <li><strong>Service providers</strong> — such as email and hosting providers, who process data only as instructed by us and under strict confidentiality obligations.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">6. Data Retention</h2>
                <p>
                  We retain client payroll records for a minimum of five (5) years in compliance with the Tax Administration Act. Where no service agreement exists (e.g. enquiry form submissions), data is retained for no longer than 12 months unless you have consented to longer retention.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">7. Your Rights</h2>
                <p>Under PoPIA you have the right to:</p>
                <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
                  <li>Request access to personal information we hold about you.</li>
                  <li>Request correction of inaccurate or incomplete information.</li>
                  <li>Object to the processing of your personal information.</li>
                  <li>Request deletion of your information (where legally permissible).</li>
                  <li>Lodge a complaint with the Information Regulator of South Africa.</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, contact our Information Officer at{" "}
                  <a href="mailto:payroll@hisassignment.co.za" className="text-[#00BFA5] hover:underline">
                    payroll@hisassignment.co.za
                  </a>
                  . We will respond within 30 days.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">8. Security</h2>
                <p>
                  We implement appropriate technical and organisational safeguards to protect your personal information against unauthorised access, loss, or misuse. All data transmitted via our website is encrypted over HTTPS.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">9. Cookies</h2>
                <p>
                  Our website uses cookies. For full details, please refer to our{" "}
                  <a href="/cookie" className="text-[#00BFA5] hover:underline">Cookie Policy</a>.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be published on this page with a revised &ldquo;last updated&rdquo; date. We encourage you to review this page periodically.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">11. Information Regulator</h2>
                <p>
                  If you believe your rights under PoPIA have been infringed, you may lodge a complaint with the Information Regulator of South Africa at{" "}
                  <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="text-[#00BFA5] hover:underline">
                    inforegulator.org.za
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
