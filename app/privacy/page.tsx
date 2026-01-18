"use client";

import { m, MotionProvider } from "../components/LazyMotion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <MotionProvider>
    <div className="relative flex flex-col min-h-screen w-full bg-[#f6f7f8] text-slate-900 font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <Header />

      <main className="relative grow pt-32 pb-20 px-6 md:px-10 lg:px-20">
        <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-40"></div>

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Header Section */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 border-b-2 border-primary/20 pb-8"
          >
            <p className="label-uppercase tracking-[0.4em] mb-4">
              Legal Documentation
            </p>
            <h1 className="heading-hero leading-tight tracking-tighter uppercase mb-6">
              Privacy <br />
              Policy
            </h1>
            <div className="flex items-center gap-4">
              <span className="w-12 h-px bg-primary"></span>
              <p className="label-standard text-slate-500 uppercase tracking-widest">
                Last updated: January 2026
              </p>
            </div>
          </m.div>

          {/* Content Section */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-md border border-white/50 shadow-xl p-8 md:p-12 space-y-12"
          >
            {/* Introduction */}
            <section>
              <div className="space-y-4 body-standard text-slate-700 leading-relaxed">
                <p>
                  Shafstudio ("we", "our", or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, and store personal information when you visit our website
                  or engage with our services.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Information We Collect
              </h2>
              <div className="space-y-4 body-standard text-slate-700 leading-relaxed">
                <p>
                  We may collect personal information that you voluntarily
                  provide to us, including:
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">/</span>
                    <span>Your name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">/</span>
                    <span>Email address</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">/</span>
                    <span>Phone number</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">/</span>
                    <span>Business details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">/</span>
                    <span>
                      Any information you submit through our contact or enquiry
                      forms
                    </span>
                  </li>
                </ul>
                <p>
                  We may also collect non-personal information such as browser
                  type, device information, and website usage data through
                  analytics tools.
                </p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                How We Use Your Information
              </h2>
              <div className="space-y-4 body-standard text-slate-700 leading-relaxed">
                <p>We use your information to:</p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">/</span>
                    <span>Respond to enquiries and communicate with you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">/</span>
                    <span>Provide and manage our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">/</span>
                    <span>Improve our website and user experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">/</span>
                    <span>Analyse website performance and traffic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">/</span>
                    <span>Meet legal and regulatory requirements</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Analytics & Cookies */}
            <section>
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Analytics & Cookies
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed">
                Our website may use cookies and third-party analytics tools
                (such as Google Analytics) to understand how visitors use our
                site. This helps us improve performance and usability. You can
                disable cookies through your browser settings if you prefer.
              </p>
            </section>

            {/* Sharing of Information */}
            <section>
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Sharing of Information
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed">
                We do not sell, rent, or trade your personal information. Your
                data may only be shared with trusted third-party service
                providers where necessary to operate our website or deliver our
                services, and only where appropriate safeguards are in place.
              </p>
            </section>

            {/* Data Storage & Security */}
            <section>
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Data Storage & Security
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed">
                We take reasonable steps to protect your personal information
                from misuse, loss, unauthorised access, or disclosure. However,
                no method of online transmission or storage is completely
                secure.
              </p>
            </section>

            {/* Access & Correction */}
            <section>
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Access & Correction
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed">
                You may request access to the personal information we hold about
                you and ask for corrections if you believe it is inaccurate or
                outdated.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Third-Party Links
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of those
                sites.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Changes to This Policy
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Contact Us
              </h2>
              <div className="space-y-2 body-standard text-slate-700 leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy or how
                  your information is handled, you can contact us at:
                </p>
                <p className="font-semibold">Shafstudio</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:ad.shafstudio@gmail.com"
                    className="text-primary hover:underline"
                  >
                    ad.shafstudio@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </m.div>
        </div>
      </main>

      <Footer />
    </div>
    </MotionProvider>
  );
}
