import { Shield, Lock, Eye, FileText, Mail, Phone, ArrowRight } from "lucide-react";
import { generateCanonicalMetadata } from "../lib/metadata";

export const metadata = generateCanonicalMetadata("/privacy-policy", {
  title: "Privacy Policy | Oliver Charles Garden Design",
  description: "Our privacy policy explains how we collect, use and protect your personal information when you use our website or services."
});

export default function PrivacyPolicyPage() {
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
            <span className="text-[#2c2c2c]">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-[#2c2c2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-[#c9b896]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-[#c9b896] mt-4 text-sm">Last updated: March 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#c9b896]" />
                Introduction
              </h2>
              <p className="text-[#666666] leading-relaxed">
                Oliver Charles Garden Design & Build (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12 bg-[#f5f0e6] p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-[#c9b896]" />
                Information We Collect
              </h2>
              <p className="text-[#666666] mb-4">
                We may collect information about you in a variety of ways. The information we may collect via the website includes:
              </p>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Personal Data:</strong> Name, email address, phone number, and postcode that you voluntarily give to us when you fill out our contact form or request a quote.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Project Information:</strong> Details about your garden, landscaping requirements, and property location.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Automatically Collected Data:</strong> Information your browser sends whenever you visit our website, such as your IP address, browser type, and version.</span>
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-[#c9b896]" />
                How We Use Your Information
              </h2>
              <p className="text-[#666666] mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customised experience. 
                Specifically, we may use information collected about you via the website to:
              </p>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Respond to your enquiries and provide quotes for garden design and landscaping services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Email you regarding your project, appointment confirmations, or service updates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Send you marketing communications (only if you have opted in).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Improve our website and customer service.</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12 bg-[#f5f0e6] p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#c9b896]" />
                Data Security
              </h2>
              <p className="text-[#666666] leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your personal information. 
                While we have taken reasonable steps to secure the personal information you provide to us, please be aware that 
                despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can 
                be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable 
                to interception and misuse by unauthorised parties. Therefore, we cannot guarantee complete security if you 
                provide personal information.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4">Your Rights</h2>
              <p className="text-[#666666] mb-4">
                Under UK data protection law, you have rights including:
              </p>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Your right of access:</strong> You have the right to ask us for copies of your personal information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Your right to rectification:</strong> You have the right to ask us to rectify information you think is inaccurate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Your right to erasure:</strong> You have the right to ask us to erase your personal information in certain circumstances.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Your right to restriction of processing:</strong> You have the right to ask us to restrict the processing of your information.</span>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="mb-12 bg-[#2c2c2c] p-8 rounded-2xl text-white">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have questions or comments about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-3">
                <a href="tel:07837666766" className="flex items-center gap-3 text-[#c9b896] hover:underline">
                  <Phone className="w-5 h-5" />
                  07837 666 766
                </a>
                <a href="mailto:enquiries@olivercharles.construction" className="flex items-center gap-3 text-[#c9b896] hover:underline">
                  <Mail className="w-5 h-5" />
                  enquiries@olivercharles.construction
                </a>
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
