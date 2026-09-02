import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { servicesData, ServiceDetail } from "@/config/servicesData";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQSection } from "@/components/shared/FAQSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { JsonLd } from "@/components/shared/JsonLd";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData
    .filter((s) => s.slug !== "grooming")
    .map((service) => ({
      slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[#faf8f5]">
      <JsonLd
        type="VeterinaryCare"
        data={{
          name: `${service.title} - Shree Pet Hospital Mysore`,
          description: service.shortDescription,
        }}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#f0f7f4] to-[#faf8f5] py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-[#1b4332] uppercase bg-white rounded-full border border-[#2d6a4f]/20">
                {service.category} Service
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {service.title} in Mysore
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                {service.heroSubtitle}
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={service.image}
                  alt={`${service.title} at Shree Pet Hospital Mysore`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Article Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Explanation */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xs space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4">
                  Overview of {service.title}
                </h2>
                {service.detailedExplanation.map((p, i) => (
                  <p key={i} className="text-base text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xs space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#1b4332]" />
                  <span>Key Benefits for Your Pet</span>
                </h2>
                <ul className="space-y-3 text-base text-gray-700">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1b4332] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What Pet Owners Should Expect */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xs space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#1b4332]" />
                  <span>What Pet Owners Should Expect</span>
                </h2>
                <div className="space-y-4">
                  {service.whatToExpect.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#f0f7f4] text-[#1b4332] font-bold text-sm flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-base text-gray-700 pt-1 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#1b4332] text-white p-7 rounded-3xl space-y-4 shadow-lg sticky top-24">
                <h3 className="text-xl font-bold">Book {service.title}</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Schedule an appointment at Shree Pet Hospital in Mysore for prompt care and gentle handling.
                </p>
                <div className="pt-2 space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-5 py-3 rounded-full text-sm transition-colors"
                  >
                    Call to Book Now
                  </a>
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(
                      `Hello Shree Pet Hospital, I would like to book an appointment for ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-5 py-3 rounded-full text-sm transition-colors"
                  >
                    WhatsApp Booking
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      {service.faqs.length > 0 && (
        <FAQSection
          title={`FAQs About ${service.title}`}
          subtitle="Common questions from pet parents regarding this service in Mysore."
          faqs={service.faqs}
          className="bg-white"
        />
      )}

      <CtaBanner />
    </div>
  );
}
