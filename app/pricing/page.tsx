"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
import Icon from "../components/Icon";
import Link from "next/link";
import { MotionProvider } from "../components/LazyMotion";

export default function PricingPage() {
  return (
    <MotionProvider>
      <div className="relative flex flex-col min-h-screen w-full bg-background-light text-slate-900 font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
        <Header />
        <main className="grow bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="heading-major mb-6">Pricing Guide</h1>
              <p className="body-large text-slate-600 max-w-2xl mx-auto">
                Clear, transparent pricing for businesses at different stages,
                from fast launches to fully bespoke builds.
              </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-up animation-delay-100">
              <PricingCard
                tier="Quick Start"
                price="1,500"
                period=""
                description="Growing businesses that want a polished, semi-custom website tailored to their brand."
                features={[
                  "Template-based website (choose from a curated set)",
                  "Up to 5 standard pages",
                  "Minor visual customisation (colours, fonts, content)",
                  "Contact form setup",
                  "Mobile responsive",
                  "Basic SEO setup",
                  "1 round of revisions",
                  "Fast turnaround (typically a few days)",
                ]}
                ctaText="go with quick start "
                variant="outline"
              />

              <PricingCard
                tier="Standard"
                price="3,500"
                period=""
                description="Growing businesses that want a polished, semi-custom website tailored to their brand."
                features={[
                  "Custom-designed website with client input",
                  "Up to 7 core pages",
                  "2 rounds of design revisions",
                  "Low-complexity features (forms, booking systems, basic payments)",
                  "On-page SEO best practices",
                  "CMS or editor access (if required)",
                  "2–3 week project timeline",
                ]}
                ctaText="go with standard"
                variant="primary"
                recommended
              />

              <PricingCard
                tier="Premium"
                price="5,500+"
                period=""
                description="Established brands or businesses needing a highly customised, feature-rich web presence."
                features={[
                  "Fully bespoke design and development",
                  "10+ pages (scoped to your needs)",
                  "Advanced animations or interactions (e.g. GSAP / Three.js)",
                  "Custom functionality and integrations",
                  "Complex content structures or user flows",
                  "Extended design and development collaboration",
                  "Dedicated discovery & scoping phase",
                ]}
                ctaText="Get a quote"
                variant="outline"
              />
            </div>

            {/* Disclaimer */}
            <p className="text-center text-xs text-slate-500 mt-12 uppercase tracking-widest animate-fade-in-up animation-delay-300">
              All prices are base pricing and subject to change with any add-ons
              to be included.
              <br />
              add-ons will be priced on a project-to-project basis.
            </p>

            {/* Comparison Table */}
            <div className="my-16 animate-fade-in-up animation-delay-200">
              <h2 className="heading-section text-center mb-12">
                Feature Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 shadow-lg">
                  <thead>
                    <tr className="bg-slate-900">
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-white">
                        Feature / Package
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider text-white">
                        Quick Start
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider bg-primary text-white">
                        Standard
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider text-white">
                        Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        Price
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700">
                        $1,500
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700 bg-blue-50">
                        $3,500
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700">
                        From $5,500
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        Pages included
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700">
                        Up to 5
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700 bg-blue-50">
                        Up to 7
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700">
                        10+
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        Design approach
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700">
                        Template-based
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700 bg-blue-50">
                        Semi-custom
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700">
                        Fully bespoke
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        Revisions
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700">
                        1 round
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700 bg-blue-50">
                        2 rounds
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700">
                        Scoped
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        Custom layout
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="close"
                          size={20}
                          className="text-red-500 mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-50">
                        <Icon
                          name="check_circle"
                          size={20}
                          className="text-green-500 mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="check_circle"
                          size={20}
                          className="text-green-500 mx-auto"
                        />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        Forms & basic integrations
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="check_circle"
                          size={20}
                          className="text-green-500 mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-50">
                        <Icon
                          name="check_circle"
                          size={20}
                          className="text-green-500 mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="check_circle"
                          size={20}
                          className="text-green-500 mx-auto"
                        />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        Booking / payment features
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="close"
                          size={20}
                          className="text-red-500 mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-50">
                        <Icon
                          name="check_circle"
                          size={20}
                          className="text-green-500 mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="check_circle"
                          size={20}
                          className="text-green-500 mx-auto"
                        />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        Advanced animations
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="close"
                          size={20}
                          className="text-red-500 mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-50">
                        <Icon
                          name="close"
                          size={20}
                          className="text-red-500 mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="check_circle"
                          size={20}
                          className="text-green-500 mx-auto"
                        />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        Custom functionality
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="close"
                          size={20}
                          className="text-red-500 mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-50">
                        <Icon
                          name="close"
                          size={20}
                          className="text-red-500 mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="check_circle"
                          size={20}
                          className="text-green-500 mx-auto"
                        />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        CMS / editor access
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="close"
                          size={20}
                          className="text-red-500 mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-50">
                        <span className="body-small text-slate-600">
                          Optional
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Icon
                          name="check_circle"
                          size={20}
                          className="text-green-500 mx-auto"
                        />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        Turnaround time
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700">
                        Few days
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700 bg-blue-50">
                        2–3 weeks
                      </td>
                      <td className="px-6 py-4 text-center body-standard text-slate-700">
                        Scoped
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 body-standard font-semibold text-slate-900">
                        Best for
                      </td>
                      <td className="px-6 py-4 text-center body-small text-slate-700">
                        Fast & budget launches
                      </td>
                      <td className="px-6 py-4 text-center body-small text-slate-700 bg-blue-50">
                        Most businesses
                      </td>
                      <td className="px-6 py-4 text-center body-small text-slate-700">
                        High-end / complex
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16 animate-fade-in-up animation-delay-300">
              <h2 className="heading-section text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* FAQ Item 1 */}
                <div className="bg-white p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-card mb-4 text-slate-900">
                    What does &quot;semi-custom design&quot; mean?
                  </h3>
                  <p className="body-standard text-slate-600">
                    We design your website specifically for your brand, using
                    your input, references, and preferences — without
                    reinventing everything from scratch. This keeps timelines
                    efficient while still delivering a unique result.
                  </p>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-white p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-card mb-4 text-slate-900">
                    Do you provide hosting and domain services?
                  </h3>
                  <p className="body-standard text-slate-600">
                    We can assist with setup and recommendations, but hosting
                    and domains are typically billed separately. This ensures
                    you retain full ownership and flexibility over your website.
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-white p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-card mb-4 text-slate-900">
                    What counts as a &quot;revision&quot;?
                  </h3>
                  <p className="body-standard text-slate-600">
                    Revisions include{" "}
                    <span className="font-semibold">
                      visual and content adjustments
                    </span>{" "}
                    such as colours, fonts, imagery, spacing, and text changes.
                    <br />
                    <br />
                    Changes that affect the{" "}
                    <span className="font-semibold">
                      structure, page count, or functionality
                    </span>{" "}
                    of the website are considered out of scope and may require a
                    revised quote or package upgrade.
                  </p>
                </div>

                {/* FAQ Item 4 */}
                <div className="bg-white p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-card mb-4 text-slate-900">
                    Can I upgrade to a higher tier later?
                  </h3>
                  <p className="body-standard text-slate-600">
                    Yes. Many clients start with a Starter or Standard website
                    and upgrade as their business grows. We&apos;ll assess what
                    can be reused and only quote for the additional work
                    required.
                  </p>
                </div>

                {/* FAQ Item 5 */}
                <div className="bg-white p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-card mb-4 text-slate-900">
                    Do you offer ongoing support after launch?
                  </h3>
                  <p className="body-standard text-slate-600">
                    Yes. Ongoing support and maintenance are available via
                    optional monthly retainers. These are tailored based on the
                    level of updates, optimisation, and support you need.
                  </p>
                </div>

                {/* FAQ Item 6 */}
                <div className="bg-white p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-card mb-4 text-slate-900">
                    Will my website be SEO optimised?
                  </h3>
                  <p className="body-standard text-slate-600">
                    We follow{" "}
                    <span className="font-semibold">
                      on-page SEO best practices
                    </span>{" "}
                    (performance, structure, accessibility, metadata). Advanced
                    SEO, content strategy, and off-page SEO services can be
                    arranged separately if required.
                  </p>
                </div>

                {/* FAQ Item 7 */}
                <div className="bg-white p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-card mb-4 text-slate-900">
                    What do you need from me to get started?
                  </h3>
                  <p className="body-standard text-slate-600">
                    Once we agree on a package, we&apos;ll guide you through a
                    short onboarding process to collect content, preferences,
                    and any required assets. We&apos;ll handle the rest.
                  </p>
                </div>

                {/* FAQ Item 8 */}
                <div className="bg-white p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="heading-card mb-4 text-slate-900">
                    Do you build SaaS platforms?
                  </h3>
                  <p className="body-standard text-slate-600">
                    We specialise in{" "}
                    <span className="font-semibold">
                      bespoke websites and lightweight web applications
                    </span>
                    . Full SaaS platforms or complex internal systems are
                    assessed separately and may require a dedicated development
                    engagement.
                  </p>
                </div>

                {/* FAQ Item 9 - Spanning full width on desktop */}
                <div className="bg-white p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow md:col-span-2">
                  <h3 className="heading-card mb-4 text-slate-900 text-center">
                    Not sure which package is right for you?
                  </h3>
                  <p className="body-standard text-slate-600 text-center max-w-3xl mx-auto">
                    We&apos;re happy to help you choose the option that best
                    fits your goals and budget.{" "}
                    <Link
                      href="/request-for-quotation"
                      className="text-primary hover:underline font-semibold"
                    >
                      Get in touch
                    </Link>{" "}
                    to discuss your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
