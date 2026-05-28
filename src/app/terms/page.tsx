import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | His Assignment Payroll Solutions",
  description: "Terms and conditions governing the use of His Assignment Payroll Solutions services and website.",
};

const lastUpdated = "28 May 2026";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="bg-[#1B3A6B] text-white py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">Terms of Use</h1>
            <p className="mt-3 text-[#CBD5E1] text-sm">Last updated: {lastUpdated}</p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 px-6 bg-[#F8FAFC]">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 md:p-10 flex flex-col gap-8 text-sm text-[#475569] leading-relaxed">

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this website (hisassignment.co.za) or engaging the services of His Assignment Payroll Solutions (Pty) Ltd (&ldquo;His Assignment&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you agree to be bound by these Terms of Use. If you do not agree, please discontinue use immediately.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">2. Services</h2>
                <p>
                  His Assignment provides outsourced payroll administration, SARS compliance management, UIF and SDL administration, leave management, year-end tax certificate preparation, and payroll consulting services to businesses and organisations in South Africa.
                </p>
                <p className="mt-3">
                  All services are governed by a separate Service Agreement between His Assignment and the client. These Terms of Use apply to general use of our website and do not override any executed service agreement.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">3. Website Use</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
                  <li>Use this website for any unlawful purpose or in violation of any applicable law or regulation.</li>
                  <li>Attempt to gain unauthorised access to any part of the website or related systems.</li>
                  <li>Transmit unsolicited commercial communications (spam) via any contact form.</li>
                  <li>Use automated means (bots, scrapers) to access or collect information from the website.</li>
                  <li>Reproduce, duplicate, or redistribute content from this website without our prior written consent.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">4. Intellectual Property</h2>
                <p>
                  All content on this website — including text, graphics, logos, icons, and code — is the property of His Assignment Payroll Solutions (Pty) Ltd or its content suppliers and is protected by applicable intellectual property laws. Unauthorised use is strictly prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">5. Disclaimer of Warranties</h2>
                <p>
                  This website and its contents are provided &ldquo;as is&rdquo;. His Assignment makes no warranties, expressed or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
                <p className="mt-3">
                  Information published on this website is for general guidance only and does not constitute professional tax, legal, or financial advice. Always consult a qualified professional for advice specific to your circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">6. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, His Assignment shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of (or inability to use) this website or reliance on information provided herein.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">7. Third-Party Links</h2>
                <p>
                  This website may contain links to third-party websites. These are provided for convenience only. His Assignment has no control over those sites and accepts no responsibility for their content or practices. Linking does not imply endorsement.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">8. Governing Law</h2>
                <p>
                  These Terms of Use are governed by and construed in accordance with the laws of the Republic of South Africa. Any dispute arising in connection with these terms shall be subject to the jurisdiction of the South African courts.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">9. Amendments</h2>
                <p>
                  We reserve the right to amend these Terms of Use at any time. Changes take effect immediately upon publication on this page. Continued use of the website constitutes acceptance of the revised terms.
                </p>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0F172A] mb-2">10. Contact</h2>
                <p>
                  For queries regarding these terms, contact us at:{" "}
                  <a href="mailto:payroll@hisassignment.co.za" className="text-[#00BFA5] hover:underline">
                    payroll@hisassignment.co.za
                  </a>{" "}
                  or{" "}
                  <a href="tel:+27847090089" className="text-[#00BFA5] hover:underline">
                    084 709 0089
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
