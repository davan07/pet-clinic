import { Hero } from "@/components/sections/Hero";
import { QuickServices } from "@/components/sections/QuickServices";
import { TrustSection } from "@/components/sections/TrustSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FAQSection } from "@/components/shared/FAQSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/shared/JsonLd";

export default function Home() {
  const homepageFaqs = [
    {
      question: "Where is Shree Pet Hospital located in Mysore?",
      answer: "Shree Pet Hospital is located in Mysore, Karnataka. You can find our exact address, landmark, and embedded Google Maps directions on our Contact page."
    },
    {
      question: "What services do you offer for dogs and cats?",
      answer: "We provide general veterinary consultations, core immunizations/vaccinations, soft tissue surgery, diagnostic testing, dental scaling & polishing, emergency triage, parasite prevention, and hygienic pet grooming."
    },
    {
      question: "Do I need to book an appointment for pet grooming or consultation?",
      answer: "Booking an appointment in advance helps ensure prompt service without unnecessary wait times. You can quickly schedule an appointment online or via WhatsApp."
    },
    {
      question: "Are emergency consultations available?",
      answer: "Yes, we handle urgent veterinary cases and emergency triage. Please call our hospital number immediately if your pet requires urgent medical attention."
    }
  ];

  return (
    <>
      <JsonLd type="VeterinaryCare" />
      <Hero />
      <QuickServices />
      <TrustSection />
      <AboutPreview />
      <ReviewsSection />
      <LocationSection />
      <FAQSection
        title="Frequently Asked Questions about Pet Care in Mysore"
        subtitle="Common questions pet parents ask about our veterinary consultations, grooming, and clinic location."
        faqs={homepageFaqs}
        className="bg-white"
      />
      <CtaBanner />
    </>
  );
}
