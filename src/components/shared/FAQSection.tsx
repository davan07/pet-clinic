import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/shared/JsonLd";

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: { question: string; answer: string }[];
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Have questions about our veterinary services, pet grooming, or emergency consultations in Mysore?",
  faqs,
  className = "",
}) => {
  const faqSchemaData = {
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <JsonLd type="FAQPage" data={faqSchemaData} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Pet Parent FAQs"
          title={title}
          subtitle={subtitle}
        />
        <Accordion items={faqs} />
      </div>
    </section>
  );
};
