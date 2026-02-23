import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "@/components/cookie-consent"
import { PromotionalManager } from "@/components/promotional-manager"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#c85a2e",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mzedutoursandtravels.com"),
  title: {
    default: "MZEDU Tours & Travels - Safari Adventures & Game Drives in Tsavo, Kenya",
    template: "%s | MZEDU Tours & Travels",
  },
  description:
    "Book unforgettable safari game drives, road trips, car hire, and private transport in Tsavo National Park, Kenya. Expert guided wildlife tours, airport transfers, and coastal adventures from Voi, Taita Taveta.",
  keywords: [
    "Kenya safari",
    "Tsavo National Park",
    "game drives Kenya",
    "safari tours Kenya",
    "Tsavo safari",
    "Kenya wildlife tours",
    "Mombasa tours",
    "car hire Kenya",
    "road trips Kenya",
    "airport transfers Mombasa",
    "SGR transfers",
    "Voi tours",
    "Taita Taveta",
    "Amboseli safari",
    "Shimba Hills",
    "Fort Jesus Mombasa",
    "Mombasa Marine Park",
    "Haller Park",
    "self drive Kenya",
    "corporate tours Kenya",
    "MZEDU tours",
    "Kenya travel agency",
    "safari booking Kenya",
    "wildlife safari East Africa",
  ],
  authors: [{ name: "MZEDU Tours & Travels" }],
  creator: "MZEDU Tours & Travels",
  publisher: "MZEDU Tours & Travels",
  generator: "anonymiketech MV's",
  verification: {
    google: "41sGRNrcUYPUjkiPUgwmXwoGoMsnkzMRs0x7NqBbAM0",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://www.mzedutoursandtravels.com",
    siteName: "MZEDU Tours & Travels",
    title: "MZEDU Tours & Travels - Safari Adventures & Game Drives in Tsavo, Kenya",
    description:
      "Book unforgettable safari game drives, road trips, car hire, and private transport in Tsavo National Park, Kenya. Expert guided wildlife tours from Voi, Taita Taveta.",
    images: [
      {
        url: "/tsavo-elephant.jpg",
        width: 1200,
        height: 630,
        alt: "Red elephant in Tsavo National Park - MZEDU Tours & Travels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MZEDU Tours & Travels - Safari Adventures in Tsavo, Kenya",
    description:
      "Book unforgettable safari game drives, road trips, and private transport in Tsavo National Park, Kenya.",
    images: ["/tsavo-elephant.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.mzedutoursandtravels.com",
  },
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "MZEDU Tours & Travels",
  alternateName: "MZEDU TOURS & TRAVEL, TSAVO",
  url: "https://www.mzedutoursandtravels.com",
  logo: "https://www.mzedutoursandtravels.com/apple-touch-icon.png",
  image: "https://www.mzedutoursandtravels.com/tsavo-elephant.jpg",
  description:
    "Premium safari tours, game drives, road trips, car hire, and private transport services across Kenya. Based in Voi, Taita Taveta.",
  telephone: ["+254723471093", "+254722705824", "+254745428933"],
  email: "info@mzedutoursandtravels.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Opposite AIC Church, Before Wells Spring Enterprises",
    addressLocality: "Voi",
    addressRegion: "Taita Taveta",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -3.3962,
    longitude: 38.5561,
  },
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "Place", name: "Tsavo National Park" },
    { "@type": "Place", name: "Mombasa" },
    { "@type": "Place", name: "Amboseli National Park" },
    { "@type": "Place", name: "Nairobi" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Safari Tours & Travel Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Tsavo National Park Safari",
          description: "Full-day guided game drives through Tsavo East and West National Parks",
          touristType: "Wildlife enthusiasts",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Amboseli Safari Experience",
          description: "Safari experience with views of Mount Kilimanjaro and elephant herds",
          touristType: "Nature lovers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Car Hire & Self-Drive",
          description: "Fleet of well-maintained vehicles for hire across Kenya",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SGR & Airport Transfers",
          description: "Professional airport and SGR station pickup and drop-off services",
        },
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/share/1729b2zH2R/",
    "https://www.instagram.com/mzedutoursandtravels",
  ],
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
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <PromotionalManager />
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
