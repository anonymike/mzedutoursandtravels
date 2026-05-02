import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Coastal Kenya Tour Package - Personalized Itineraries",
  description:
    "Create your personalized Kenya coastal tour package. Flexible dates, multi-destination itineraries, and full support from MZEDU Tours & Travels in Voi, Taita Taveta.",
  openGraph: {
    title: "Custom Coastal Package - MZEDU Tours & Travels",
    description: "Personalized Kenya coastal tour packages with flexible dates and multi-destination itineraries.",
    url: "https://www.mzedutoursandtravels.com/packages/custom-coastal-package",
    images: [{ url: "/kenya-coastal-adventure-with-beaches-and-safari-co.jpg", width: 1200, height: 630, alt: "Custom Coastal Kenya Tour" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/custom-coastal-package" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
