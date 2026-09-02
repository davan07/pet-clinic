import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Scissors } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { servicesData } from "@/config/servicesData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f281e] text-white pt-16 pb-24 md:pb-12 border-t border-[#2d6a4f]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pb-12 border-b border-[#2d6a4f]/30">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-md border border-white/20 bg-[#000080] shrink-0">
                <Image
                  src={siteConfig.logoUrl}
                  alt={`${siteConfig.name} Logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-emerald-100/80 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-emerald-200/60 leading-relaxed">
              Compassionate 24/7 veterinary care, advanced diagnostics, spay/neuter surgery, and gentle grooming for pets in Mysore.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] hover:text-white flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 hover:text-gray-900 flex items-center justify-center transition-colors"
              >
                <span className="text-xs font-bold">ig</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-[#2d6a4f]/50 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About Us & Team</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">Veterinary Services</Link>
              </li>
              <li>
                <Link href="/grooming" className="hover:text-amber-400 transition-colors">Pet Grooming Wing</Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-amber-400 transition-colors">Veterinary Doctors</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors">Hospital Gallery</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">Pet Care Articles</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact & Directions</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Veterinary Services */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-[#2d6a4f]/50 pb-2">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/80">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={svc.slug === "grooming" ? "/grooming" : `/services/${svc.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Locations & Hours */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-[#2d6a4f]/50 pb-2">
              Locations & Contact
            </h4>
            <div className="space-y-3 text-xs text-emerald-100/80">
              <div>
                <strong className="text-white flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Hospital Location:</span>
                </strong>
                <p className="mt-0.5 leading-relaxed">{siteConfig.location.address}</p>
                <a
                  href={siteConfig.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline text-[11px] inline-flex items-center gap-1 mt-0.5"
                >
                  <Navigation className="w-3 h-3" /> Hospital Map Directions
                </a>
              </div>

              <div className="pt-2 border-t border-[#2d6a4f]/40">
                <strong className="text-white flex items-center gap-1">
                  <Scissors className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Grooming Spa Location:</span>
                </strong>
                <p className="mt-0.5 leading-relaxed">{siteConfig.groomingLocation.address}</p>
                <a
                  href={siteConfig.groomingLocation.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline text-[11px] inline-flex items-center gap-1 mt-0.5"
                >
                  <Navigation className="w-3 h-3" /> Grooming Spa Map Directions
                </a>
              </div>

              <div className="pt-2 border-t border-[#2d6a4f]/40 flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.openingHours.weekday}</p>
                  <p>{siteConfig.openingHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <p>© {new Date().getFullYear()} {siteConfig.name}, Mysuru. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-amber-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
