"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Phone, MessageCircle, Clock, Navigation, Calendar, Scissors } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/Button";
import { AppointmentModal } from "@/components/shared/AppointmentModal";

export const LocationSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Hospital & Grooming Locations"
            title="Visit Shree Pet Hospital in Mysore"
            subtitle="Conveniently situated in Vijayanagar 4th Stage, Mysuru to serve pet owners with compassionate veterinary care and specialized grooming."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Contact Details Box */}
            <div className="lg:col-span-5 bg-[#faf8f5] p-8 rounded-3xl border border-gray-100 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {siteConfig.name}
                </h3>

                <div className="space-y-5 text-sm text-gray-700">
                  {/* Hospital Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#f0f7f4] text-[#1b4332] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold">Hospital Address</strong>
                      <p className="text-gray-600 mt-0.5 leading-relaxed">{siteConfig.location.address}</p>
                      <a
                        href={siteConfig.location.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1b4332] hover:text-[#d97706] mt-1 underline"
                      >
                        <Navigation className="w-3 h-3" />
                        <span>Directions to Hospital (Google Maps)</span>
                      </a>
                    </div>
                  </div>

                  {/* Grooming Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                      <Scissors className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold">Grooming Spa Address</strong>
                      <p className="text-gray-600 mt-0.5 leading-relaxed">{siteConfig.groomingLocation.address}</p>
                      <a
                        href={siteConfig.groomingLocation.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#d97706] hover:text-[#b45309] mt-1 underline"
                      >
                        <Navigation className="w-3 h-3" />
                        <span>Directions to Grooming Spa (Google Maps)</span>
                      </a>
                    </div>
                  </div>

                  {/* Phone & Contact */}
                  <div className="space-y-3 pt-3 border-t border-gray-200/80">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#f0f7f4] text-[#1b4332] flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="block text-gray-900 font-bold">Phone Numbers</strong>
                        <div className="flex flex-col gap-1 mt-1 text-sm font-medium">
                          <a
                            href={`tel:${siteConfig.contact.phoneRawPrimary}`}
                            className="text-[#1b4332] hover:underline"
                          >
                            {siteConfig.contact.phonePrimaryDisplay}
                          </a>
                          <a
                            href={`tel:${siteConfig.contact.phoneRawSecondary}`}
                            className="text-[#1b4332] hover:underline"
                          >
                            {siteConfig.contact.phoneSecondaryDisplay}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0">
                        <MessageCircle className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <strong className="block text-gray-900 font-bold">WhatsApp Support</strong>
                        <a
                          href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                            siteConfig.whatsappPrefillMsg
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:underline font-semibold text-sm mt-0.5 inline-block"
                        >
                          {siteConfig.contact.whatsappDisplay}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 pt-2 border-t border-gray-200/80">
                    <div className="w-8 h-8 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm">
                      <strong className="block text-gray-900 font-bold">Visiting Hours</strong>
                      <p className="text-gray-600">{siteConfig.openingHours.weekday}</p>
                      <p className="text-gray-600">{siteConfig.openingHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-gray-200/80 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  size="md"
                  icon={<Calendar className="w-4 h-4" />}
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1"
                >
                  Book Appointment
                </Button>

                <Button
                  variant="accent"
                  size="md"
                  href={siteConfig.location.googleMapsDirectionsUrl}
                  external
                  icon={<Navigation className="w-4 h-4" />}
                  className="flex-1"
                >
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Right Map Embed Column */}
            <div className="lg:col-span-7 bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-sm relative min-h-[380px]">
              <iframe
                src={siteConfig.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Pet Hospital Mysore Map Location"
                className="w-full h-full min-h-[440px]"
              />
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
