import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQSection } from "@/components/shared/FAQSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Sparkles, Scissors, Droplets, Heart, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/shared/JsonLd";

export const metadata: Metadata = {
  title: "Professional Pet Grooming in Mysore | Dog & Cat Bathing, Cut & Hygiene",
  description: "Gentle, hygienic pet grooming in Mysore at Shree Pet Hospital. Bath & dry, hair trimming, nail clipping, ear cleaning, breed haircuts, and medicated skin baths.",
  alternates: {
    canonical: "/grooming",
  },
};

export default function GroomingPage() {
  const groomingServices = [
    {
      icon: Droplets,
      title: "Bath & Blow-Dry",
      desc: "Warm relaxing bath using pet-safe, hypoallergenic shampoos and coat-nourishing conditioners, followed by a gentle fluff blow-dry."
    },
    {
      icon: Scissors,
      title: "Hair Trimming & Styling",
      desc: "Precision haircuts, breed-specific styling, face and paw trimming, and sanitary area clipping by skilled groomers."
    },
    {
      icon: Sparkles,
      title: "Nail Trimming & Filing",
      desc: "Careful nail clipping to proper anatomical length, preventing joint stress, painful ingrown nails, and indoor floor scratching."
    },
    {
      icon: Heart,
      title: "Ear Cleaning & Plucking",
      desc: "Gentle inspection, removal of excess hair, and ear canal cleaning using veterinary ear solutions to prevent painful infections."
    },
    {
      icon: ShieldCheck,
      title: "Hygiene Care & Paw Pad Trim",
      desc: "Cleaning around eyes, paws, and sanitary areas to maintain overall hygiene and prevent coat matting."
    },
    {
      icon: Sparkles,
      title: "Breed-Specific Grooming",
      desc: "Tailored cuts for Shih Tzus, Poodles, Golden Retrievers, Persian cats, and double-coated breeds."
    }
  ];

  const processSteps = [
    { title: "Coat & Skin Assessment", desc: "Our groomer inspects your pet's coat, checking for mats, skin irritation, or external parasites." },
    { title: "Hypoallergenic Bathing", desc: "Gentle warm bath with soothing shampoo tailored to your pet's skin type." },
    { title: "Precision Drying & Brushout", desc: "Quiet blow-dry and thorough dematting brush-out." },
    { title: "Styling & Hygiene Finishing", desc: "Haircut, nail trim, ear cleaning, and a freshening coat finish." }
  ];

  const groomingFaqs = [
    {
      question: "How long does a full pet grooming session take?",
      answer: "A standard bath and haircut session typically takes between 1.5 to 2.5 hours, depending on pet size, coat density, and behavioral cooperation."
    },
    {
      question: "Do you offer medicated baths for dogs with skin allergies?",
      answer: "Yes! If your pet suffers from fungal dermatitis, tick infestations, or dry skin, we offer medicated bath packages as prescribed by our veterinary team."
    },
    {
      question: "Can cats be groomed at Shree Pet Hospital?",
      answer: "Absolutely. We provide quiet, gentle grooming sessions for cats to reduce stress while brushing, bathing, or trimming coat mats."
    }
  ];

  return (
    <div className="bg-[#faf8f5]">
      <JsonLd
        type="VeterinaryCare"
        data={{
          name: "Pet Grooming Wing - Shree Pet Hospital Mysore",
          description: "Professional dog and cat grooming in Mysore.",
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#e0f7f5] via-[#faf8f5] to-[#faf8f5] py-12 sm:py-16 border-b border-[#b2ebe5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Pet Grooming" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#b2ebe5] text-[#007799] text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-500 fill-current" />
                Spa & Grooming Wing
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2942] tracking-tight leading-tight">
                Professional Pet Grooming in Mysore
              </h1>
              <p className="text-base sm:text-lg text-[#476582] font-medium leading-relaxed max-w-2xl">
                Keep your dogs and cats fresh, hygienic, and looking their absolute best in a clean, stress-free grooming environment.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/hospital-team.jpg"
                  alt="Shree Pet Grooming Spa team and grooming wing in Mysore"
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

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Grooming Services"
            title="Our Complete Grooming Offerings"
            subtitle="Tailored bathing, styling, and hygiene treatments for dogs and cats of all breeds in Mysore."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {groomingServices.map((g, idx) => {
              const Icon = g.icon;
              return (
                <div key={idx} className="bg-white p-7 rounded-3xl border border-[#b2ebe5] shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-[#e0f7f5] text-[#007799] flex items-center justify-center mb-5 font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f2942] mb-2">{g.title}</h3>
                  <p className="text-sm text-[#476582] leading-relaxed">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grooming Process */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Careful Workflow"
            title="Our Step-by-Step Grooming Process"
            subtitle="Ensuring a comfortable, gentle experience for every pet from start to finish."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-[#fcfaf6] p-6 rounded-3xl border border-[#e0f7f5] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#007799] text-white font-bold flex items-center justify-center text-sm">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-[#0f2942] text-base">{step.title}</h4>
                <p className="text-xs sm:text-sm text-[#476582] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grooming Photo Showcase */}
      <section className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Grooming Gallery"
            title="Happy & Pampered Patients"
            subtitle="Clean coats, gentle haircuts, and refreshed pets after a visit to our Mysore salon wing."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/images/groomer-styling.jpg"
                alt="Shree Pet Grooming Spa professional groomer styling a Shih Tzu"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/images/hospital-team.jpg"
                alt="Shree Pet Grooming Spa team in Mysore"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/images/shih-tzu-puppies.jpg"
                alt="Happy puppies visiting Shree Pet Hospital Mysore"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Pet Grooming FAQs"
        subtitle="Frequently asked questions about grooming appointments, cat grooming, and medicated baths."
        faqs={groomingFaqs}
        className="bg-white"
      />

      <CtaBanner />
    </div>
  );
}
