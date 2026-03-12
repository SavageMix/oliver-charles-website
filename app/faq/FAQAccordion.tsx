"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight, Phone } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#c9b896]/20 rounded-xl overflow-hidden hover:border-[#c9b896]/40 transition-colors"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#f5f0e6] transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <div className="flex items-center gap-4">
                <HelpCircle className="w-5 h-5 text-[#c9b896] flex-shrink-0" />
                <span 
                  className="font-semibold text-[#2c2c2c] pr-4"
                  itemProp="name"
                >
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#666666] flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div className="p-6 pt-0 bg-[#f5f0e6]">
                <div className="pl-9">
                  <p 
                    className="text-[#666666] leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Still Have Questions */}
      <div className="mt-12 text-center p-8 bg-[#f5f0e6] rounded-2xl">
        <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">
          Still Have Questions?
        </h3>
        <p className="text-[#666666] mb-6">
          Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help with any questions 
          about your landscaping project in Amersham or Buckinghamshire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#c9b896] text-[#2c2c2c] rounded-lg font-semibold hover:bg-[#a8956e] transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a
            href="tel:07837666766"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#c9b896] text-[#2c2c2c] rounded-lg font-semibold hover:bg-[#c9b896]/10 transition-colors"
          >
            <Phone className="mr-2 w-4 h-4" />
            07837 666 766
          </a>
        </div>
      </div>
    </>
  );
}
