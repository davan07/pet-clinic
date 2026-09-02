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
      <section className="py-16 sm:py-24 bg-white border-b border-[#e0f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Get In Touch"
            title="Visit Shree Pet Hospital in Mysore"
            subtitle="Conveniently situated in Vijayanagar 4th Stage, Mysuru to serve pet owners with compassionate 24/7 veterinary care and grooming."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Contact Details Box - Solid Deep Teal Card matching Pawcare "Get In Touch" UI */}
            <div className="lg:col-span-5 bg-[#007799] text-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_15px_35px_rgba(0,119,153,0.25)] flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-block px-3.5 py-1 mb-3 text-xs font-extrabold uppercase bg-white/10 text-cyan-200 rounded-full border border-white/20">
                  Hospital & Grooming Locations
                </span>

                <h3 className="text-2xl font-extrabold text-white mb-6 border-b border-white/20 pb-3">
                  {siteConfig.name}
                </h3>

                <div className="space-y-6 text-sm text-cyan-50">
                  {/* Hospital Address */}
                  <div className="flex items-start gap-3.5 bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-xs">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#007799] flex items-center justify-center shrink-0 font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-white font-extrabold">Hospital Location</strong>
                      <p className="text-cyan-100 text-xs sm:text-sm mt-0.5 leading-relaxed">{siteConfig.location.address}</p>
                      <a
                        href={siteConfig.location.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:underline mt-2"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Open Hospital Map Directions</span>
                      </a>
                    </div>
                  </div>

                  {/* Grooming Address */}
                  <div className="flex items-start gap-3.5 bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-xs">
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-gray-900 flex items-center justify-center shrink-0 font-bold">
                      <Scissors className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-white font-extrabold">Grooming Spa Location</strong>
                      <p className="text-cyan-100 text-xs sm:text-sm mt-0.5 leading-relaxed">{siteConfig.groomingLocation.address}</p>
                      <a
                        href={siteConfig.groomingLocation.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:underline mt-2"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Open Grooming Spa Map Directions</span>
                      </a>
                    </div>
                  </div>

                  {/* Phone & Contact */}
                  <div className="space-y-3 pt-2 border-t border-white/20">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-white font-bold text-xs uppercase tracking-wide">Phone Lines</strong>
                        <div className="flex flex-col gap-0.5 mt-0.5 text-xs sm:text-sm font-semibold">
                          <a
                            href={`tel:${siteConfig.contact.phoneRawPrimary}`}
                            className="text-cyan-100 hover:text-white hover:underline"
                          >
                            {siteConfig.contact.phonePrimaryDisplay}
                          </a>
                          <a
                            href={`tel:${siteConfig.contact.phoneRawSecondary}`}
                            className="text-cyan-100 hover:text-white hover:underline"
                          >
                            {siteConfig.contact.phoneSecondaryDisplay}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4 fill-current" />
                      </div>
                      <div>
                        <strong className="block text-white font-bold text-xs uppercase tracking-wide">WhatsApp Support</strong>
                        <a
                          href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                            siteConfig.whatsappPrefillMsg
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-300 hover:underline font-bold text-xs sm:text-sm mt-0.5 inline-block"
                        >
                          {siteConfig.contact.whatsappDisplay}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 pt-2 border-t border-white/20">
                    <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm">
                      <strong className="block text-white font-bold">24/7 Hours Coverage</strong>
                      <p className="text-cyan-100 font-medium">{siteConfig.openingHours.weekday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="accent"
                  size="md"
                  icon={<Calendar className="w-4 h-4" />}
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1"
                >
                  Book Appointment
                </Button>

                <Button
                  variant="secondary"
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
            <div className="lg:col-span-7 bg-[#e0f7f5] rounded-[2.5rem] overflow-hidden border border-[#b2ebe5] shadow-[0_8px_30px_rgba(0,119,153,0.08)] relative min-h-[380px]">
              <iframe
                src={siteConfig.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Pet Hospital Mysore Map Location"
                className="w-full h-full min-h-[460px]"
              />
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
