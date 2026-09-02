import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Media Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-50 aspect-[4/3]">
              <Image
                src="/images/about-facility.jpg"
                alt="Shree Pet Hospital Mysore modern consultation and examination room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#f0f7f4] rounded-full -z-10 blur-2xl" />
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-[#1b4332] uppercase bg-[#f0f7f4] border border-[#2d6a4f]/20 rounded-full">
              About Shree Pet Hospital
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-snug">
              Caring for Pets, Supporting Their Families
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Shree Pet Hospital was established in Mysore to deliver trustworthy, ethical, and high-standard veterinary medicine and grooming services. We understand that your pets are integral family members, deserving of gentle handling, accurate diagnoses, and attentive care.
            </p>

            <div className="space-y-3 pt-2 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1b4332] shrink-0" />
                <span>Dedicated veterinary consultation and preventive health planning</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1b4332] shrink-0" />
                <span>In-house diagnostic investigations and surgical capabilities</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1b4332] shrink-0" />
                <span>Sanitized, quiet grooming space for dogs and cats</span>
              </div>
            </div>

            <div className="pt-4">
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
        </div>
      </div>
    </section>
  );
};
