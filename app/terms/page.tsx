"use client";

import { m, MotionProvider } from "../components/LazyMotion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <MotionProvider>
    <div className="relative flex flex-col min-h-screen w-full bg-[#f6f7f8] text-slate-900 font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <Header />

      <main className="relative flex-grow pt-32 pb-20 px-6 md:px-10 lg:px-20">
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
              Terms and <br />
              Conditions
            </h1>
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary"></span>
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
            <section id="introduction">
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Acceptance of Terms
              </h2>
              <div className="space-y-4 body-standard text-slate-700 leading-relaxed">
                <p>
                  Welcome to Shafstudio ("we", "our", or "us"). These Terms and
                  Conditions govern your use of our website and services. By
                  accessing or using our services, you agree to be bound by
                  these terms.
                </p>
              </div>
            </section>

            {/* Use of Website */}
            <section id="use-of-website">
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Website Usage
              </h2>
              <div className="space-y-4 body-standard text-slate-700 leading-relaxed">
                <p>
                  You may use our website for lawful purposes only. You agree
                  not to use our website in any way that could damage, disable,
                  or impair our services.
                </p>
              </div>
            </section>

            {/* Services */}
            <section id="services">
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Our Services
              </h2>
              <div className="space-y-4 body-standard text-slate-700 leading-relaxed">
                <p>
                  Shafstudio provides web design, web development, and digital
                  services. We reserve the right to modify, suspend, or
                  discontinue services at any time without notice.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual">
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Ownership
              </h2>
              <div className="space-y-4 body-standard text-slate-700 leading-relaxed">
                <p>
                  All content on this website, including text, graphics, logos,
                  and images, is the property of Shafstudio or its content
                  suppliers and is protected by intellectual property laws.
                </p>
              </div>
            </section>

            {/* Client Content */}
            <section id="client-content">
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Your Responsibilities
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed mb-4">
                You are responsible for all content you provide to us. You
                warrant that you own or have the necessary rights to use and
                authorise us to use all content provided.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section id="liability">
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Liability Limits
              </h2>
              <div className="space-y-4 body-standard text-slate-700 leading-relaxed">
                <p>
                  To the fullest extent permitted by law, Shafstudio shall not
                  be liable for any indirect, incidental, special, or
                  consequential damages arising from your use of our website or
                  services.
                </p>
              </div>
            </section>

            {/* Third-Party Links */}
            <section id="third-party">
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                External Links
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the content or practices of these external
                sites.
              </p>
            </section>

            {/* Privacy */}
            <section id="privacy">
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Data Protection
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed">
                Your use of our website is also governed by our Privacy Policy.
                Please review our{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>{" "}
                to understand our practices.
              </p>
            </section>

            {/* Changes to Terms */}
            <section id="changes">
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Modifications
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed">
                We may update these Terms and Conditions from time to time.
                Changes will be posted on this page with an updated revision
                date.
              </p>
            </section>

            {/* Governing Law */}
            <section id="law">
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Jurisdiction
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed">
                These Terms are governed by the laws of Australia. Any disputes
                will be subject to the exclusive jurisdiction of the courts of
                Australia.
              </p>
            </section>

            {/* Contact */}
            <section id="contact">
              <h2 className="heading-subsection uppercase tracking-tight mb-6">
                Get in Touch
              </h2>
              <p className="body-standard text-slate-700 leading-relaxed">
                If you have any questions about these Terms and Conditions,
                please contact us at:{" "}
                <a
                  href="mailto:ad.shafstudio@gmail.com"
                  className="text-primary hover:underline font-semibold"
                >
                  ad.shafstudio@gmail.com
                </a>
              </p>
            </section>
          </m.div>
        </div>
      </main>

      <Footer />
    </div>
    </MotionProvider>
  );
}
