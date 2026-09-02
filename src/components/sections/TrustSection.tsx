import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stethoscope, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

export const TrustSection: React.FC = () => {
  const trustFeatures = [
    {
      icon: Stethoscope,
      title: "Professional Veterinary Care",
      description: "Evidence-based medical evaluations, systematic diagnosis, and treatment protocols administered by qualified veterinary doctors."
    },
    {
      icon: ShieldCheck,
      title: "Comprehensive Pet Services",
      description: "From routine puppy vaccinations and senior wellness checks to dental scaling, diagnostics, soft tissue surgery, and grooming."
    },
    {
      icon: Sparkles,
      title: "Modern Facilities",
      description: "Equipped with clean consultation rooms, sterile surgical environments, diagnostic instruments, and sanitized pet grooming areas."
    },
    {
      icon: HeartHandshake,
      title: "Compassionate Approach",
      description: "Gentle handling techniques designed to minimize fear and anxiety for dogs, cats, and small animals during clinical visits."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Commitment"
          title="Your Pet's Health Comes First"
          subtitle="At Shree Pet Hospital, we combine clinical diligence with genuine empathy for pets and clear communication for pet parents in Mysore."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#f0f7f4] text-[#1b4332] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
