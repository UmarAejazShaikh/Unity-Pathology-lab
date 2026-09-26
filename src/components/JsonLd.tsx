import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DiagnosticLab",
    "@id": "https://unitypathologylab.com/#lab",
    name: "Unity Pathology Laboratory",
    telephone: "+916353065009",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "First Floor, Samir Residency, 01, Sarkhej Roza Road, Opp. Mastanbava Dargah",
      addressLocality: "Makarba, Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382210",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.9818",
      longitude: "72.4996",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "60",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
