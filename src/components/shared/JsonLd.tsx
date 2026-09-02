import React from "react";
import { siteConfig } from "@/config/siteConfig";

interface JsonLdProps {
  type?: "VeterinaryCare" | "Article" | "FAQPage" | "BreadcrumbList" | "WebSite";
  data?: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type = "VeterinaryCare", data = {} }) => {
  let schemaData: Record<string, unknown> = {};

  if (type === "VeterinaryCare") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": ["VeterinaryCare", "LocalBusiness"],
      "name": siteConfig.name,
      "description": siteConfig.description,
      "url": siteConfig.url,
      "telephone": siteConfig.contact.phoneRawPrimary,
      "email": siteConfig.contact.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.location.address,
        "addressLocality": siteConfig.location.city,
        "addressRegion": siteConfig.location.state,
        "postalCode": siteConfig.location.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.location.geo.latitude,
        "longitude": siteConfig.location.geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "sameAs": [
        siteConfig.social.youtube,
        siteConfig.social.instagram
      ],
      "areaServed": {
        "@type": "City",
        "name": "Mysore"
      },
      ...data
    };
  } else {
    schemaData = {
      "@context": "https://schema.org",
      ...data
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
