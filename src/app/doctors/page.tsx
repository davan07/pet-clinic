import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DoctorCard } from "@/components/shared/DoctorCard";
import { doctorsData } from "@/config/doctorsData";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Meet Our Veterinary Team | Shree Pet Hospital Mysore",
  description: "Meet the dedicated veterinary doctors and clinical care staff at Shree Pet Hospital in Mysore. Professional animal care, surgery, and diagnostics.",
  alternates: {
    canonical: "/doctors",
  },
};

export default function DoctorsPage() {
  return (
    <div className="bg-[#faf8f5]">
      <section className="bg-gradient-to-b from-[#e0f7f5] to-[#faf8f5] py-12 sm:py-16 border-b border-[#b2ebe5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Doctors" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="inline-block px-3.5 py-1 mb-1 text-xs font-extrabold tracking-wider text-[#007799] uppercase bg-white rounded-full border border-[#b2ebe5]">
                Veterinary Practitioners & Staff
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2942] tracking-tight leading-tight">
                Meet Our Veterinary & Clinical Team
              </h1>
              <p className="text-base sm:text-lg text-[#476582] font-medium leading-relaxed max-w-2xl">
                Experienced, compassionate animal doctors and trained veterinary care professionals committed to maintaining the health and wellbeing of your pets in Mysore.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/poodle-examination.jpg"
                  alt="Shree Pet Hospital veterinary doctor examining patient in Mysore"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Clinical Team"
            title="Dedicated Veterinary Professionals"
            subtitle="Our clinical team brings thorough diagnostic approach and gentle handling to every consultation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {doctorsData.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
