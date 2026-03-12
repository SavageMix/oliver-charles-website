import { generateCanonicalMetadata } from "../lib/metadata";
import FAQAccordion from "./FAQAccordion";

export const metadata = generateCanonicalMetadata("/faq");

// Static FAQ data for SEO (rendered in HTML immediately)
const faqs = [
  {
    question: "How much does a porcelain patio cost in Amersham?",
    answer: "The cost of a porcelain patio depends on several factors including the size, chosen materials, design complexity, and any additional features like steps or edging. As a guide, porcelain patio installation in Amersham typically ranges from £200-£250 per square metre. We offer free, no-obligation site surveys to provide accurate quotes tailored to your specific project."
  },
  {
    question: "Do I need planning permission for a patio in Buckinghamshire?",
    answer: "Generally, patios at ground level do not require planning permission. However, there are exceptions: if your property is a listed building, in a conservation area, or if the patio raises the ground level significantly, you may need permission. We can advise you based on your specific property and location in Buckinghamshire, and help with any planning queries."
  },
  {
    question: "How long does patio installation take?",
    answer: "A standard porcelain patio installation typically takes 3-5 days, depending on the size and complexity of the project. Larger or more complex projects with intricate designs, multiple levels, or additional features like steps may take 1-2 weeks. We'll provide a detailed timeline during your consultation."
  },
  {
    question: "What are the benefits of composite decking over traditional wood?",
    answer: "Composite decking offers numerous advantages: it requires no sanding, staining, or sealing; it's highly resistant to weather, rot, and insect damage; it won't splinter or warp; it's made from recycled materials making it eco-friendly; and it comes with extensive warranties (typically 25+ years). While the initial cost is higher than wood, the long-term savings on maintenance make it cost-effective."
  },
  {
    question: "Are glass balustrades safe for homes with children?",
    answer: "Yes, absolutely. Our glass balustrades are made from toughened or laminated safety glass that meets all UK building regulations (BS EN 1090-2). The glass is incredibly strong and, in the unlikely event of breakage, shatters into small, blunt pieces rather than sharp shards. They're actually safer than traditional railings as there are no gaps for children to climb through or get stuck in."
  },
  {
    question: "Do you offer a guarantee on your work?",
    answer: "Yes, all our installations come with a comprehensive 10-year workmanship guarantee. This covers any issues arising from our installation work. Additionally, the materials we use come with their own manufacturer warranties – composite decking typically has 25+ year warranties, and porcelain paving is guaranteed for 10+ years."
  },
  {
    question: "What areas do you cover besides Amersham?",
    answer: "While we're based in Amersham (HP6, HP7), we cover the whole of Buckinghamshire and surrounding areas including Chesham, Beaconsfield, Chalfont St Giles, Little Chalfont, Great Missenden, Chorleywood, High Wycombe, and beyond. We typically work within a 15-mile radius of Amersham but are happy to discuss projects further afield."
  },
  {
    question: "How do I maintain my porcelain patio?",
    answer: "One of the biggest advantages of porcelain paving is its low maintenance requirements. Simply sweep regularly to remove debris, and occasionally clean with warm soapy water and a soft brush. Unlike natural stone, porcelain doesn't require sealing and is resistant to staining, moss, and algae growth. For stubborn marks, a pressure washer on a low setting can be used."
  },
  {
    question: "Can you help with design ideas for my outdoor space?",
    answer: "Absolutely! We offer free design consultations as part of our service. Our experienced team can help you choose the right materials, layouts, and features to suit your property, lifestyle, and budget. We'll visit your property, discuss your vision, and provide expert recommendations based on our years of experience in Buckinghamshire landscaping."
  },
  {
    question: "What happens during the free site survey?",
    answer: "During our free site survey, we'll visit your property at a convenient time to discuss your project in detail. We'll assess the area, take measurements, discuss material options, and understand your requirements and budget. Following the survey, we'll provide a detailed, no-obligation quote within 24-48 hours. There's no pressure or hard sell – just honest advice and transparent pricing."
  },
  {
    question: "How long have you been in business?",
    answer: "Oliver Charles Garden Design & Build has been serving homeowners across Buckinghamshire for over 10 years. As a family-run business, we take pride in our reputation for quality workmanship, reliability, and excellent customer service. Many of our new customers come through recommendations from satisfied clients."
  },
  {
    question: "Are you fully insured?",
    answer: "Yes, we carry comprehensive public liability insurance for your peace of mind. We're happy to provide proof of insurance before starting any project. We also ensure all our work complies with relevant building regulations and industry standards."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-[#2c2c2c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#c9b896]/20 text-[#c9b896] rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="text-[#c9b896]">Questions</span>
          </h1>
          <p className="text-lg text-gray-300">
            Got questions about our landscaping services in Amersham and Buckinghamshire? 
            We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
          </p>
        </div>
      </section>

      {/* FAQ Accordion - Client Component for interactivity */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
