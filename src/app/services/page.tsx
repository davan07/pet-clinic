import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { QuickServices } from "@/components/sections/QuickServices";
import { servicesData } from "@/config/servicesData";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Veterinary Services & Pet Healthcare in Mysore",
  description: "Comprehensive 24/7 veterinary services in Mysore at Shree Pet Hospital. Consultation, vaccination, surgery, diagnostics, dental scaling, 24/7 pet ambulance, emergency care, and pet grooming.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-[#faf8f5]">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#e0f7f5] to-[#faf8f5] py-12 sm:py-16 border-b border-[#b2ebe5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1 mb-3 text-xs font-extrabold tracking-wider text-[#007799] uppercase bg-white rounded-full border border-[#b2ebe5]">
              Veterinary & Grooming Services
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2942] tracking-tight leading-tight">
              Complete Health & Wellness Services for Your Pets
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#476582] font-medium leading-relaxed">
              Professional 24/7 clinical consultation, diagnostic testing, surgical procedures, vaccinations, 24/7 pet ambulance, and grooming in Mysore.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Center Dog & Cat Showcase Layout */}
      <QuickServices />

      {/* Grid of All Services */}
      <section className="py-16 sm:py-24 bg-[#faf8f5]">
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
