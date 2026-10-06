import { Atmosphere } from "@/components/landing/atmosphere";
import { FinalCta } from "@/components/landing/final-cta";
import { FloatingWa } from "@/components/landing/floating-wa";
import { Hero } from "@/components/landing/hero";
import { InfoStrip } from "@/components/landing/info-strip";
import { Location } from "@/components/landing/location";
import { Reviews } from "@/components/landing/reviews";
import { Services } from "@/components/landing/services";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { business } from "@/lib/business";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: business.name,
  description:
    "Barbershop sederhana di Komplek Pujasera, Jl. A. Yani Subang. Cukuran rapi, crew ramah, buka setiap hari 10.00–22.00.",
  image: "/images/union-interior-md.webp",
  telephone: business.phoneHref,
  priceRange: "Rp40.000+",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Komplek Pujasera, Jl. Jend. Achmad Yani Ruko B3",
    addressLocality: "Karanganyar, Subang",
    addressRegion: "Jawa Barat",
    postalCode: "41211",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.568895,
    longitude: 107.7590996,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "22:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(business.rating),
    bestRating: "5",
  },
  sameAs: [business.instagram],
  hasMap: business.mapsUrl,
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <InfoStrip />
        <Services />
        <Atmosphere />
        <Reviews />
        <Location />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingWa />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
