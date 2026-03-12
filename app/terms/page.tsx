import { ArrowRight, FileText, Scale, Gavel, Clock, PoundSterling, AlertCircle, Phone, Mail } from "lucide-react";
import { generateCanonicalMetadata } from "../lib/metadata";

export const metadata = generateCanonicalMetadata("/terms");

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#f5f0e6] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#666666]">
            <a href="/" className="hover:text-[#c9b896]">
              Home
            </a>
            <span className="mx-2">/</span>
            <span className="text-[#2c2c2c]">Terms of Service</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <Scale className="w-16 h-16 text-[#c9b896]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using our website and services.
            </p>
            <p className="text-[#c9b896] mt-4 text-sm">Last updated: March 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Agreement to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#c9b896]" />
                Agreement to Terms
              </h2>
              <p className="text-[#666666] leading-relaxed">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity 
                (&ldquo;you&rdquo;) and Oliver Charles Garden Design & Build (&ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;), concerning your access to and use of our website 
                and the services we provide. You agree that by accessing the Site, you have read, understood, and agree to be bound by all 
                of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from 
                using the Site and you must discontinue use immediately.
              </p>
            </div>

            {/* Intellectual Property Rights */}
            <div className="mb-12 bg-[#f5f0e6] p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <Gavel className="w-6 h-6 text-[#c9b896]" />
                Intellectual Property Rights
              </h2>
              <p className="text-[#666666] leading-relaxed">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, 
                website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &ldquo;Content&rdquo;) and the trademarks, 
                service marks, and logos contained therein (the &ldquo;Marks&rdquo;) are owned or controlled by us or licensed to us, and are protected 
                by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United Kingdom, 
                foreign jurisdictions, and international conventions.
              </p>
              <p className="text-[#666666] mt-4 leading-relaxed">
                The Content and the Marks are provided on the Site &ldquo;AS IS&rdquo; for your information and personal use only. Except as expressly 
                provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, 
                republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or 
                otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
            </div>

            {/* User Representations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-[#c9b896]" />
                User Representations
              </h2>
              <p className="text-[#666666] mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>All registration information you submit will be true, accurate, current, and complete.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>You will maintain the accuracy of such information and promptly update such registration information as necessary.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>You have the legal capacity and you agree to comply with these Terms of Service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>You are not a minor in the jurisdiction in which you reside.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</span>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="mb-12 bg-[#f5f0e6] p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4">Our Services</h2>
              <p className="text-[#666666] mb-4">
                Oliver Charles Garden Design & Build provides professional garden landscaping services including but not limited to:
              </p>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Porcelain patio installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Composite decking design and installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Glass balustrade installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Complete garden landscaping and design</span>
                </li>
              </ul>
              <p className="text-[#666666] mt-4">
                All services are subject to availability and weather conditions. We reserve the right to modify, suspend, or discontinue 
                any aspect of our services at any time.
              </p>
            </div>

            {/* Quotations and Pricing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <PoundSterling className="w-6 h-6 text-[#c9b896]" />
                Quotations and Pricing
              </h2>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>All quotations provided are valid for 30 days from the date of issue unless otherwise stated.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Prices quoted are based on the information provided by you. Any changes to the scope of work may result in additional charges.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>A deposit may be required to secure your booking. This will be clearly stated in your quotation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Payment terms will be outlined in your contract and are typically 50% deposit and 50% on completion.</span>
                </li>
              </ul>
            </div>

            {/* Cancellations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#c9b896]" />
                Cancellations and Rescheduling
              </h2>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>If you need to cancel or reschedule your project, please provide at least 14 days&apos; notice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cancellations made within 14 days of the scheduled start date may result in forfeiture of your deposit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>We reserve the right to reschedule work due to adverse weather conditions or circumstances beyond our control.</span>
                </li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12 bg-[#f5f0e6] p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4">Limitation of Liability</h2>
              <p className="text-[#666666] leading-relaxed">
                To the fullest extent permitted by applicable law, in no event will Oliver Charles Garden Design & Build or our directors, 
                employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, 
                special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use 
                of the site or our services, even if we have been advised of the possibility of such damages.
              </p>
              <p className="text-[#666666] mt-4 leading-relaxed">
                Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless 
                of the form of the action, will at all times be limited to the amount paid, if any, by you to us during the six (6) 
                month period prior to any cause of action arising.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4">Governing Law</h2>
              <p className="text-[#666666] leading-relaxed">
                These Terms shall be governed by and defined following the laws of England and Wales. Oliver Charles Garden Design & Build 
                and yourself irrevocably consent that the courts of England and Wales shall have exclusive jurisdiction to resolve any 
                dispute which may arise in connection with these terms.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4">Changes to These Terms</h2>
              <p className="text-[#666666] leading-relaxed">
                We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and 
                for any reason. We will alert you about any changes by updating the &ldquo;Last updated&rdquo; date of these Terms of Service, and you 
                waive any right to receive specific notice of each such change. It is your responsibility to periodically review these 
                Terms of Service to stay informed of updates.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12 bg-[#2c2c2c] p-8 rounded-2xl text-white">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <div className="space-y-3">
                <p className="text-[#c9b896] font-semibold">Oliver Charles Garden Design & Build</p>
                <a href="tel:07837666766" className="flex items-center gap-3 text-white/80 hover:text-[#c9b896]">
                  <Phone className="w-5 h-5" />
                  07837 666 766
                </a>
                <a href="mailto:enquiries@olivercharles.construction" className="flex items-center gap-3 text-white/80 hover:text-[#c9b896]">
                  <Mail className="w-5 h-5" />
                  enquiries@olivercharles.construction
                </a>
                <p className="text-white/80">Amersham, Buckinghamshire</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f5f0e6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-[#666666] mb-8">
            Get in touch today for a free, no-obligation quote.
          </p>
          <a
            href="/contact/"
            className="inline-flex items-center px-8 py-4 bg-[#c9b896] hover:bg-[#a8956e] text-[#2c2c2c] font-semibold rounded-lg transition-colors"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
