"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { AppointmentModal } from "@/components/shared/AppointmentModal";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Doctors", href: "/doctors" },
    { label: "Grooming", href: "/grooming" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "liquid-glass-header-scrolled py-2.5"
            : "liquid-glass-header py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand with Glass Reflection */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden border-2 border-white/90 bg-[#000080] shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-[0_8px_20px_rgba(0,119,153,0.18)]">
              <Image
                src={siteConfig.logoUrl}
                alt={`${siteConfig.name} Logo`}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-[#0f2942] leading-tight group-hover:text-[#007799] transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[10px] sm:text-xs text-[#476582] font-semibold tracking-wide">
                24/7 Veterinary Hospital & Grooming • Mysore
              </span>
            </div>
          </Link>

          {/* Desktop Liquid Glass Navigation Capsule */}
          <nav className="hidden lg:flex items-center gap-1.5 liquid-glass-nav p-1.5 rounded-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#007799] text-white shadow-[0_4px_16px_rgba(0,119,153,0.35)]"
                      : "text-[#0f2942] hover:text-[#007799] hover:bg-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              icon={<Calendar className="w-4 h-4" />}
              onClick={() => setIsAppointmentModalOpen(true)}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button with Liquid Glass */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
              onClick={() => setIsAppointmentModalOpen(true)}
            >
              Book
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2.5 rounded-2xl text-[#0f2942] bg-white/70 backdrop-blur-xl border border-white/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,119,153,0.1)] hover:bg-white transition-all focus-visible:outline-none active:scale-95"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Floating Liquid Glass Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-3 sm:inset-x-6 top-[72px] z-50 liquid-glass-card rounded-[2.25rem] p-6 animate-fade-in space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3.5 rounded-2xl text-sm font-extrabold transition-all duration-300 text-center ${
                      isActive
                        ? "bg-[#007799] text-white shadow-[0_6px_20px_rgba(0,119,153,0.35)]"
                        : "bg-white/80 backdrop-blur-md border border-white/90 text-[#0f2942] hover:bg-white hover:text-[#007799] active:scale-98 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,119,153,0.05)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/80 flex flex-col gap-2.5">
              <Button
                variant="primary"
                size="md"
                className="w-full shadow-[0_8px_25px_rgba(0,119,153,0.3)]"
                icon={<Calendar className="w-4 h-4" />}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAppointmentModalOpen(true);
                }}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Shared Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
};
