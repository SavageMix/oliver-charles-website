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
            className="border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-bronze)]/40 transition-colors bg-[var(--color-off-white)]"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left bg-[var(--color-off-white)] hover:bg-[var(--color-stone)] transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <div className="flex items-center gap-4">
                <HelpCircle className="w-5 h-5 text-[var(--color-bronze)] flex-shrink-0" />
                <span 
                  className="font-medium text-[var(--color-text)] pr-4"
                  itemProp="name"
                >
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[var(--color-text-light)] flex-shrink-0 transition-transform ${
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
              <div className="p-6 pt-0 bg-[var(--color-stone)]">
                <div className="pl-9">
                  <p 
                    className="text-[var(--color-text-light)] leading-relaxed"
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
      <div className="mt-12 text-center p-8 bg-[var(--color-stone)] border border-[var(--color-border)]">
        <h3 className="text-xl font-serif font-medium text-[var(--color-text)] mb-2">
          Still Have Questions?
        </h3>
        <p className="text-[var(--color-text-light)] mb-6">
          Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help with any questions 
          about your landscaping project in Amersham or Buckinghamshire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact/#contact-form"
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-forest)] hover:bg-[var(--color-forest-light)] text-white font-medium rounded-none transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a
            href="tel:+447837666766"
            className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-off-white)] font-medium rounded-none transition-colors"
          >
            <Phone className="mr-2 w-4 h-4" />
            +44 7837 666766
          </a>
        </div>
      </div>
    </>
  );
}
