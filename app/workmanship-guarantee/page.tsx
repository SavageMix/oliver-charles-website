import { Shield, Wrench, AlertTriangle, CheckCircle, XCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { generateCanonicalMetadata } from "../lib/metadata";

export const metadata = generateCanonicalMetadata("/workmanship-guarantee", {
  title: "Workmanship Guarantee | Oliver Charles Garden Design",
  description: "Our workmanship guarantee covers structural failures from installation defects. Understand what is covered and what is not covered under our guarantee."
});

export default function WorkmanshipGuaranteePage() {
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
            <span className="text-[#2c2c2c]">Workmanship Guarantee</span>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">5-Year Workmanship Guarantee</h1>
            <p className="text-xl text-gray-300">
              We stand behind the quality of our installation work. This page explains exactly what our 5-year guarantee covers and what it does not.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* What is a Workmanship Guarantee */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-[#c9b896]" />
                What Is Our 5-Year Workmanship Guarantee?
              </h2>
              <p className="text-[#666666] leading-relaxed">
                Our 5-year workmanship guarantee is a promise that the installation work we carry out is performed to a professional standard 
                using correct building techniques and industry best practices. It covers failures that arise directly from defects 
                in our labour or installation methods — not from the natural characteristics or ageing of the materials themselves.
              </p>
            </div>

            {/* What IS Covered */}
            <div className="mb-12 bg-green-50 p-8 rounded-2xl border border-green-200">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                What Is Covered
              </h2>
              <p className="text-[#666666] mb-4">
                Our guarantee covers <strong>structural integrity</strong> failures that result directly from defects in our installation work. This includes issues affecting the stability, safety, or load-bearing performance of the installation — not surface appearance or cosmetic wear.
              </p>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Structural movement or failure</strong> of patios, decking, walls, or steps due to incorrect sub-base preparation, inadequate drainage, or improper fixing methods.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Loose, lifting, or detaching materials</strong> including loose tiles, sinking bases, or failing sub-structures where the cause is improper adhesion, fixing, or installation technique.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Water pooling or drainage failure</strong> caused by incorrect falls or drainage installation during our build.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Failure of joints, edgings, or retaining structures</strong> where the installation method was at fault.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Glass balustrade fixing failures</strong> resulting from incorrect installation of posts, brackets, or channels.</span>
                </li>
              </ul>
            </div>

            {/* What is NOT Covered */}
            <div className="mb-12 bg-red-50 p-8 rounded-2xl border border-red-200">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-600" />
                What Is <span className="underline">Not</span> Covered
              </h2>
              <p className="text-[#666666] mb-4">
                Our workmanship guarantee does <strong>not</strong> cover cosmetic issues, the natural behaviour of materials, 
                environmental factors, or events outside our control. Specifically excluded are:
              </p>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Cosmetic issues from natural product behaviour</strong>, including minor grout shrinkage, hairline surface cracking due to thermal expansion, and natural weathering. These do not affect structural performance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Initial settling and minor hairline cracks</strong>. Grout lines are subject to extreme temperature swings and moisture changes. Minor cosmetic hairline cracks do not affect the patio&apos;s lifespan, load-bearing capacity, or overall performance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Ground movement and environmental conditions</strong>. Our guarantee strictly excludes damage, sinking, shifting, or cracking caused by natural ground movement, soil shrinkage or swelling due to extreme weather conditions (such as severe heatwaves or prolonged drought), subsidence, or root ingress from nearby vegetation. The contractor cannot be held liable for the natural behaviour of regional clay soils under extreme climatic events.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Fading, colour change, or weathering</strong> of materials (including composite decking, porcelain, timber, or glass) due to normal UV exposure and ageing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Rot, decay, or corrosion</strong> of materials over time — these are governed by the material manufacturer&apos;s own warranty, not our workmanship guarantee.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Damage caused by severe weather events</strong> such as storms, flooding, frost heave, or extreme temperature fluctuations beyond normal seasonal variation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Damage from third parties</strong> including accidental damage, vandalism, or work carried out by other contractors after our installation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>General wear and tear</strong> from normal use, foot traffic, or lack of routine maintenance (e.g. keeping drains clear, removing debris).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Defects in the materials themselves</strong> — these must be claimed under the manufacturer&apos;s product warranty.</span>
                </li>
              </ul>
            </div>

            {/* Important Notice */}
            <div className="mb-12 bg-[#f5f0e6] p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-[#c9b896]" />
                Important Notice
              </h2>
              <p className="text-[#666666] leading-relaxed">
                We use high-quality materials from reputable manufacturers, many of which come with their own extensive product warranties 
                (e.g. 25+ years for composite decking, 10+ years for porcelain paving). These material warranties are separate from our 
                workmanship guarantee and are provided directly by the manufacturer.
              </p>
              <p className="text-[#666666] mt-4 leading-relaxed">
                If you experience an issue, we will always inspect the work to determine whether the cause is an installation defect 
                (covered by us) or a material defect (covered by the manufacturer). We are happy to assist you in making a claim with 
                the material manufacturer where appropriate.
              </p>
            </div>

            {/* How to Make a Claim */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#c9b896]" />
                How to Make a Claim
              </h2>
              <p className="text-[#666666] mb-4">
                If you believe you have a valid workmanship guarantee claim, please contact us as soon as possible. We will:
              </p>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Acknowledge your claim within 5 business days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Arrange a site inspection to assess the issue and determine the cause.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>If the issue is found to be a workmanship defect, we will remedy the problem at no cost to you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#c9b896] rounded-full mt-2 flex-shrink-0"></span>
                  <span>If the issue is a material defect, we will provide documentation to support your claim with the manufacturer.</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-12 bg-[#2c2c2c] p-8 rounded-2xl text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About Our Guarantee?</h2>
              <p className="text-gray-300 mb-6">
                We are happy to discuss any aspect of our workmanship guarantee before, during, or after your project.
              </p>
              <div className="space-y-3">
                <p className="text-[#c9b896] font-semibold">Oliver Charles Garden Design & Build</p>
                <a href="tel:07837666766" className="flex items-center gap-3 text-white/80 hover:text-[#c9b896]">
                  <Phone className="w-5 h-5" />
                  07837 666 766
                </a>
                <a href="mailto:info@ocgardendesign.co.uk" className="flex items-center gap-3 text-white/80 hover:text-[#c9b896]">
                  <Mail className="w-5 h-5" />
                  info@ocgardendesign.co.uk
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
            href="/contact/#contact-form"
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
