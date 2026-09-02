import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LocationSection } from "@/components/sections/LocationSection";
import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, Scissors, Navigation, Clock, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Location | Shree Pet Hospital Mysore",
  description: "Contact Shree Pet Hospital in Mysore. Call +91 94807 02704, +91 97312 21312 or WhatsApp +91 63628 55844. Vijayanagar 4th Stage, Mysuru.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#faf8f5]">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#f0f7f4] to-[#faf8f5] py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider text-[#1b4332] uppercase bg-white rounded-full border border-[#2d6a4f]/20">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Contact Shree Pet Hospital
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              We are here to assist with veterinary consultations, emergency inquiries, vaccinations, and grooming appointments in Mysuru.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Location Details */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-6">
              <AppointmentForm />
            </div>

            <div className="lg:col-span-6 space-y-6">
              {/* Phone & WhatsApp Card */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Direct Phone & WhatsApp</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#f0f7f4] text-[#1b4332] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-gray-900">Phone Lines</strong>
                      <a href={`tel:${siteConfig.contact.phoneRawPrimary}`} className="text-[#1b4332] hover:underline block font-semibold">
                        {siteConfig.contact.phonePrimaryDisplay}
                      </a>
                      <a href={`tel:${siteConfig.contact.phoneRawSecondary}`} className="text-[#1b4332] hover:underline block font-semibold">
                        {siteConfig.contact.phoneSecondaryDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <strong className="block text-gray-900">WhatsApp Support</strong>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                          siteConfig.whatsappPrefillMsg
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:underline block font-bold text-base"
                      >
                        {siteConfig.contact.whatsappDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hospital Address Card */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#f0f7f4] text-[#1b4332] flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Hospital Location</h3>
                    <p className="text-xs text-gray-500">Main Clinical Facility</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {siteConfig.location.address}
                </p>

                <a
                  href={siteConfig.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1b4332] hover:bg-[#0f281e] text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Hospital in Google Maps</span>
                </a>
              </div>

              {/* Grooming Address Card */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Grooming Spa Location</h3>
                    <p className="text-xs text-gray-500">Dedicated Pet Salon Wing</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {siteConfig.groomingLocation.address}
                </p>

                <a
                  href={siteConfig.groomingLocation.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#d97706] hover:bg-[#b45309] text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Grooming Spa in Google Maps</span>
                </a>
              </div>

              {/* Hours Card */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-gray-100 text-gray-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-sm text-gray-700">
                  <strong className="block text-gray-900">Visiting & Service Hours</strong>
                  <p>{siteConfig.openingHours.weekday}</p>
                  <p>{siteConfig.openingHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationSection />
    </div>
  );
}
