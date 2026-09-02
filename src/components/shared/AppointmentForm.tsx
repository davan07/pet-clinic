"use client";

import React, { useState } from "react";
import { Calendar, User, Phone as PhoneIcon, Heart, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";

interface AppointmentFormProps {
  onSuccess?: () => void;
  onSuccessClose?: () => void;
  defaultService?: string;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  onSuccess,
  onSuccessClose,
  defaultService = "Veterinary Consultation",
  className = "",
}) => {
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    petName: "",
    petType: "Dog",
    serviceRequired: defaultService,
    preferredDate: "",
    preferredTime: "Morning (9:00 AM - 12:00 PM)",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.ownerName.trim()) {
      newErrors.ownerName = "Owner name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-[#]?\d{10,12}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.petName.trim()) {
      newErrors.petName = "Pet name is required";
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a preferred date";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
    if (onSuccess) onSuccess();
    if (onSuccessClose) onSuccessClose();
  };

  const getWhatsAppMessage = () => {
    const msg = `Hello Shree Pet Hospital,\n\nI would like to book an appointment:\n• Owner: ${formData.ownerName}\n• Phone: ${formData.phone}\n• Pet Name: ${formData.petName} (${formData.petType})\n• Service: ${formData.serviceRequired}\n• Date: ${formData.preferredDate}\n• Time Slot: ${formData.preferredTime}${formData.message ? `\n• Note: ${formData.message}` : ""}`;
    return encodeURIComponent(msg);
  };

  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${getWhatsAppMessage()}`;

  if (isSubmitted) {
    return (
      <div className={`bg-white p-6 sm:p-8 rounded-[2.25rem] border border-[#e8e2d6] shadow-[0_12px_36px_rgba(20,61,43,0.06)] text-center animate-fade-in ${className}`}>
        <div className="w-16 h-16 bg-[#edf5f0] text-[#143d2b] border border-[#cbe0d3] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_2px_8px_rgba(20,61,43,0.06)]">
          <CheckCircle2 className="w-10 h-10 text-[#143d2b]" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#14241b] mb-2">Appointment Request Drafted</h3>
        <p className="text-[#4b5950] text-sm sm:text-base mb-6 leading-relaxed">
          Thank you, <strong className="text-[#14241b]">{formData.ownerName}</strong>! Your appointment details for <strong className="text-[#14241b]">{formData.petName}</strong> have been recorded.
        </p>

        <div className="bg-[#fcfaf6] border border-[#e8e2d6] p-4 rounded-2xl mb-6 text-left text-sm text-[#3a473e] space-y-1.5">
          <p><strong>Service:</strong> {formData.serviceRequired}</p>
          <p><strong>Date & Time:</strong> {formData.preferredDate} ({formData.preferredTime})</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
        </div>

        <div className="space-y-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(37,211,102,0.25)] hover:shadow-[0_8px_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Send Details via WhatsApp Immediately</span>
          </a>

          <div className="text-xs text-[#526056] pt-2">
            * Note: For backend integration, configure your email API endpoint in siteConfig or server handler.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white p-6 sm:p-8 rounded-[2.25rem] border border-[#e8e2d6] shadow-[0_8px_30px_rgba(20,61,43,0.05)] ${className}`}
    >
      <div className="mb-6 border-b border-[#f4efe6] pb-4">
        <h3 className="text-xl font-extrabold text-[#14241b] flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#143d2b]" />
          <span>Book an Appointment</span>
        </h3>
        <p className="text-sm text-[#4b5950] mt-1">
          Select your preferred time slot for veterinary care or grooming in Mysore.
        </p>
      </div>

      <div className="space-y-4">
        {/* Owner Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#14241b] uppercase tracking-wider mb-1.5">
              Your Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#526056] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 bg-[#fcfaf6] border ${
                  errors.ownerName ? "border-red-500" : "border-[#e8e2d6]"
                } rounded-2xl text-sm focus:bg-white focus:border-[#143d2b] focus:ring-2 focus:ring-[#143d2b]/10 outline-none transition-all`}
              />
            </div>
            {errors.ownerName && <p className="text-xs text-red-500 mt-1">{errors.ownerName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14241b] uppercase tracking-wider mb-1.5">
              Phone / Mobile *
            </label>
            <div className="relative">
              <PhoneIcon className="w-4 h-4 text-[#526056] absolute left-3.5 top-3.5" />
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 bg-[#fcfaf6] border ${
                  errors.phone ? "border-red-500" : "border-[#e8e2d6]"
                } rounded-2xl text-sm focus:bg-white focus:border-[#143d2b] focus:ring-2 focus:ring-[#143d2b]/10 outline-none transition-all`}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Pet Name & Pet Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#14241b] uppercase tracking-wider mb-1.5">
              Pet Name *
            </label>
            <div className="relative">
              <Heart className="w-4 h-4 text-[#526056] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="e.g. Bruno / Bella"
                value={formData.petName}
                onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 bg-[#fcfaf6] border ${
                  errors.petName ? "border-red-500" : "border-[#e8e2d6]"
                } rounded-2xl text-sm focus:bg-white focus:border-[#143d2b] focus:ring-2 focus:ring-[#143d2b]/10 outline-none transition-all`}
              />
            </div>
            {errors.petName && <p className="text-xs text-red-500 mt-1">{errors.petName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14241b] uppercase tracking-wider mb-1.5">
              Pet Type
            </label>
            <select
              value={formData.petType}
              onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
              className="w-full px-4 py-2.5 bg-[#fcfaf6] border border-[#e8e2d6] rounded-2xl text-sm focus:bg-white focus:border-[#143d2b] focus:ring-2 focus:ring-[#143d2b]/10 outline-none transition-all"
            >
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Small Animal / Other">Small Animal / Other</option>
            </select>
          </div>
        </div>

        {/* Service Required */}
        <div>
          <label className="block text-xs font-bold text-[#14241b] uppercase tracking-wider mb-1.5">
            Service Required
          </label>
          <select
            value={formData.serviceRequired}
            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
            className="w-full px-4 py-2.5 bg-[#fcfaf6] border border-[#e8e2d6] rounded-2xl text-sm focus:bg-white focus:border-[#143d2b] focus:ring-2 focus:ring-[#143d2b]/10 outline-none transition-all"
          >
            <option value="24/7 Pet Ambulance">24/7 Pet Ambulance</option>
            <option value="Veterinary Consultation">Veterinary Consultation</option>
            <option value="Pet Vaccination">Pet Vaccination</option>
            <option value="Pet Surgery">Pet Surgery</option>
            <option value="Diagnostics / X-Ray">Diagnostics / X-Ray</option>
            <option value="Dental Care">Dental Care</option>
            <option value="Emergency Care">Emergency Care</option>
            <option value="Preventive Care">Preventive Care</option>
            <option value="Pet Grooming">Pet Grooming</option>
          </select>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#14241b] uppercase tracking-wider mb-1.5">
              Preferred Date *
            </label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className={`w-full px-4 py-2.5 bg-[#fcfaf6] border ${
                errors.preferredDate ? "border-red-500" : "border-[#e8e2d6]"
              } rounded-2xl text-sm focus:bg-white focus:border-[#143d2b] focus:ring-2 focus:ring-[#143d2b]/10 outline-none transition-all`}
            />
            {errors.preferredDate && <p className="text-xs text-red-500 mt-1">{errors.preferredDate}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14241b] uppercase tracking-wider mb-1.5">
              Preferred Time Slot
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full px-4 py-2.5 bg-[#fcfaf6] border border-[#e8e2d6] rounded-2xl text-sm focus:bg-white focus:border-[#143d2b] focus:ring-2 focus:ring-[#143d2b]/10 outline-none transition-all"
            >
              <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
              <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
              <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
              <option value="Night / Emergency (24/7)">Night / Emergency (24/7)</option>
            </select>
          </div>
        </div>

        {/* Message / Symptoms */}
        <div>
          <label className="block text-xs font-bold text-[#14241b] uppercase tracking-wider mb-1.5">
            Brief Symptoms / Message (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="e.g. Vaccination booster required, or describe symptoms..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2.5 bg-[#fcfaf6] border border-[#e8e2d6] rounded-2xl text-sm focus:bg-white focus:border-[#143d2b] focus:ring-2 focus:ring-[#143d2b]/10 outline-none transition-all resize-none"
          />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" size="lg" className="w-full">
            Submit Appointment Request
          </Button>
        </div>
      </div>
    </form>
  );
};
