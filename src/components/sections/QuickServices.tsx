import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { servicesData } from "@/config/servicesData";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const QuickServices: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Healthcare & Wellness for Your Pet"
          subtitle="From preventive vaccinations and routine consultations to diagnostic testing, soft-tissue surgery, and hygienic grooming."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            size="lg"
            href="/services"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};
