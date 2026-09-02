"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageCircle, Calendar, Clock, User, Phone as PhoneIcon, Heart, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";

interface AppointmentFormProps {
  defaultService?: string;
  onSuccessClose?: () => void;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  defaultService = "General Consultation",
  onSuccessClose,
  className = "",
}) => {
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    petName: "",
    petType: "Dog",
    serviceRequired: defaultService,
    preferredDate: "",
    preferredTime: "Morning (09:00 AM - 12:00 PM)",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  };

  const getWhatsAppMessage = () => {
    const msg = `Hello Shree Pet Hospital,\n\nI would like to book an appointment:\n• Owner: ${formData.ownerName}\n• Phone: ${formData.phone}\n• Pet Name: ${formData.petName} (${formData.petType})\n• Service: ${formData.serviceRequired}\n• Date: ${formData.preferredDate}\n• Time Slot: ${formData.preferredTime}${formData.message ? `\n• Note: ${formData.message}` : ""}`;
    return encodeURIComponent(msg);
  };

  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${getWhatsAppMessage()}`;

  if (isSubmitted) {
    return (
      <div className={`bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl text-center animate-fade-in ${className}`}>
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Request Drafted</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          Thank you, <strong className="text-gray-900">{formData.ownerName}</strong>! Your appointment details for <strong className="text-gray-900">{formData.petName}</strong> have been recorded.
        </p>

        <div className="bg-[#f0f7f4] border border-[#2d6a4f]/20 p-4 rounded-2xl mb-6 text-left text-sm text-gray-700 space-y-1.5">
          <p><strong>Service:</strong> {formData.serviceRequired}</p>
          <p><strong>Date & Time:</strong> {formData.preferredDate} ({formData.preferredTime})</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
        </div>

        <div className="space-y-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-sm"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Send Details via WhatsApp Immediately</span>
          </a>

          <div className="text-xs text-gray-500 pt-2">
            * Note: For backend integration, configure your email API endpoint in siteConfig or server handler.
          </div>

          {onSuccessClose && (
            <button
              onClick={onSuccessClose}
              className="mt-3 text-sm text-gray-600 hover:text-gray-900 font-medium underline"
            >
              Close Window
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-[#1b4332]" />
          <span>Book an Appointment</span>
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Select your preferred time slot for veterinary care or grooming in Mysore.
        </p>
      </div>

      <div className="space-y-4">
        {/* Owner Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Your Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 border ${
                  errors.ownerName ? "border-red-500" : "border-gray-200"
                } rounded-xl text-sm focus:bg-white focus:border-[#1b4332] outline-none transition-all`}
              />
            </div>
            {errors.ownerName && <p className="text-xs text-red-500 mt-1">{errors.ownerName}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Phone / Mobile *
            </label>
            <div className="relative">
              <PhoneIcon className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 border ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                } rounded-xl text-sm focus:bg-white focus:border-[#1b4332] outline-none transition-all`}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Pet Name & Pet Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Pet Name *
            </label>
            <div className="relative">
              <Heart className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="e.g. Bruno / Bella"
                value={formData.petName}
                onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 border ${
                  errors.petName ? "border-red-500" : "border-gray-200"
                } rounded-xl text-sm focus:bg-white focus:border-[#1b4332] outline-none transition-all`}
              />
            </div>
            {errors.petName && <p className="text-xs text-red-500 mt-1">{errors.petName}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Pet Type
            </label>
            <select
              value={formData.petType}
              onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#1b4332] outline-none transition-all"
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
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
            Service Required
          </label>
          <select
            value={formData.serviceRequired}
            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#1b4332] outline-none transition-all"
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
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Preferred Date *
            </label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className={`w-full px-4 py-2.5 bg-gray-50 border ${
                errors.preferredDate ? "border-red-500" : "border-gray-200"
              } rounded-xl text-sm focus:bg-white focus:border-[#1b4332] outline-none transition-all`}
            />
            {errors.preferredDate && <p className="text-xs text-red-500 mt-1">{errors.preferredDate}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Preferred Time Slot
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#1b4332] outline-none transition-all"
              >
                <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
            Additional Message / Symptoms (Optional)
          </label>
          <div className="relative">
            <FileText className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <textarea
              rows={2}
              placeholder="e.g. Needs first puppy vaccine / Skin itching"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-[#1b4332] outline-none transition-all resize-none"
            />
          </div>
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
          Confirm Appointment Request
        </Button>
      </div>
    </form>
  );
};
