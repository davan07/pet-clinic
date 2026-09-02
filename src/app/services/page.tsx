import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { servicesData } from "@/config/servicesData";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Veterinary Services & Pet Healthcare in Mysore",
  description: "Comprehensive veterinary services in Mysore at Shree Pet Hospital. Consultation, vaccination, surgery, diagnostics, dental scaling, emergency care, and pet grooming.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-[#faf8f5]">
      <section className="bg-gradient-to-b from-[#f0f7f4] to-[#faf8f5] py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider text-[#1b4332] uppercase bg-white rounded-full border border-[#2d6a4f]/20">
              Veterinary & Grooming Services
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Complete Health & Wellness Services for Your Pets
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Professional clinical consultation, diagnostic testing, surgical procedures, vaccinations, and grooming in Mysore.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="All Services"
            title="Explore Our Specialized Care Programs"
            subtitle="Click on any service to read detailed explanations, benefits, owner expectations, and FAQs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
