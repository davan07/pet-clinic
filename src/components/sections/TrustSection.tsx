import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#e0f7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Experience"
          title="Why Choose Shree Pet Hospital"
          subtitle="Combining clinical diligence with genuine empathy for pets and clear communication for pet parents across Mysore since 2017."
        />

        {/* Bento Stat Block Layout matching Reference Image UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Large Solid Teal Stat Block */}
          <div className="md:col-span-1 lg:col-span-1 bg-[#007799] text-white p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-[0_10px_30px_rgba(0,119,153,0.2)] hover:-translate-y-1 transition-transform">
            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">100+</span>
            <span className="text-sm font-bold tracking-wide uppercase text-cyan-100">Client Testimonials</span>
          </div>

          {/* Card 2: Solid Teal Stat Block */}
          <div className="bg-[#007799] text-white p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-[0_10px_30px_rgba(0,119,153,0.2)] hover:-translate-y-1 transition-transform">
            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">9+</span>
            <span className="text-sm font-bold tracking-wide uppercase text-cyan-100">Years of Experience (Estd. 2017)</span>
          </div>

          {/* Card 3: Image Overlay Block */}
          <div className="relative rounded-3xl overflow-hidden min-h-[180px] bg-slate-800 shadow-md group hover:-translate-y-1 transition-transform">
            <Image
              src="/images/about-facility.jpg"
              alt="Shree Pet Hospital Facility"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#063d4d]/90 via-[#007799]/50 to-transparent p-6 flex flex-col justify-end text-white text-center">
              <span className="text-3xl font-extrabold mb-1">20+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-100">In-House Facilities</span>
            </div>
          </div>

          {/* Card 4: Image Overlay Block */}
          <div className="relative rounded-3xl overflow-hidden min-h-[180px] bg-slate-800 shadow-md group hover:-translate-y-1 transition-transform md:col-span-2 lg:col-span-2">
            <Image
              src="/images/hospital-team.jpg"
              alt="Shree Pet Hospital Team"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#063d4d]/90 via-[#007799]/50 to-transparent p-6 flex flex-col justify-end text-white text-center sm:text-left">
              <span className="text-3xl font-extrabold mb-1">Professional Vets & Staff</span>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-100">Dedicated Clinical & Grooming Care</span>
            </div>
          </div>

          {/* Card 5: Solid Teal Stat Block */}
          <div className="bg-[#007799] text-white p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-[0_10px_30px_rgba(0,119,153,0.2)] hover:-translate-y-1 transition-transform md:col-span-1 lg:col-span-2">
            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">1000+</span>
            <span className="text-sm font-bold tracking-wide uppercase text-cyan-100">Happy Pets & Families</span>
          </div>
        </div>
      </div>
    </section>
  );
};
