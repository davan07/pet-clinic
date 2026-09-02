import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Cyan Curved Container matching Pawcare About Section */}
        <div className="bg-[#e0f7f5] rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-[#b2ebe5] shadow-[0_10px_30px_rgba(0,119,153,0.06)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#007799] uppercase bg-white rounded-full border border-[#b2ebe5] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#007799]" />
                About Shree Pet Hospital
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f2942] leading-tight">
                Caring for Pets, Supporting Their Families in Mysore
              </h2>

              <p className="text-base text-[#476582] leading-relaxed font-medium">
                Shree Pet Hospital was established in Mysore to deliver trustworthy, ethical, and high-standard veterinary medicine and grooming services. We understand that your pets are integral family members, deserving of gentle handling, accurate diagnoses, and attentive care.
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#0f2942]">
                <div className="bg-white p-3.5 rounded-2xl border border-[#b2ebe5] flex items-center gap-3 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#007799] shrink-0" />
                  <span className="font-bold text-xs sm:text-sm">Dedicated 24/7 veterinary consultation & preventive health planning</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-[#b2ebe5] flex items-center gap-3 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#007799] shrink-0" />
                  <span className="font-bold text-xs sm:text-sm">In-house diagnostic investigations, X-ray & surgical room</span>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-[#b2ebe5] flex items-center gap-3 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-[#007799] shrink-0" />
                  <span className="font-bold text-xs sm:text-sm">Sanitized, quiet grooming spa for dogs and cats</span>
                </div>
              </div>

              <div className="pt-3">
                <Button
                  variant="primary"
                  size="lg"
                  href="/about"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Learn More About Us
                </Button>
              </div>
            </div>

            {/* Circular Image Container matching Pawcare UI */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-8 border-white overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-facility.jpg"
                  alt="Shree Pet Hospital Mysore modern consultation and examination room"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
