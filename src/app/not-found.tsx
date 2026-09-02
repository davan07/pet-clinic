import React from "react";
import Link from "next/link";
import { Heart, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#faf8f5] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[#f0f7f4] text-[#1b4332] flex items-center justify-center mx-auto">
          <Heart className="w-8 h-8 fill-current text-amber-500" />
        </div>

        <span className="text-4xl font-extrabold text-gray-900 block">404</span>

        <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>

        <p className="text-sm text-gray-600 leading-relaxed">
          The page you are looking for might have been moved, renamed, or does not exist. Let&apos;s get you back to Shree Pet Hospital.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" size="md" href="/" icon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
          <Button variant="secondary" size="md" href="/services" icon={<ArrowLeft className="w-4 h-4" />}>
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
}
