import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Kenya Trip Package - Tailored Safari Adventures",
  description:
    "Design your perfect Kenya safari trip with custom itineraries, flexible scheduling, and expert guidance from MZEDU Tours & Travels based in Voi, Taita Taveta.",
  openGraph: {
    title: "Custom Trip Package - MZEDU Tours & Travels",
    description: "Design your perfect Kenya safari with custom itineraries and flexible scheduling.",
    url: "https://www.mzedutoursandtravels.com/packages/custom-trip-package",
    images: [{ url: "/kenya-diverse-landscapes-mountains-valleys-safari.jpg", width: 1200, height: 630, alt: "Custom Kenya Safari Trip" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/custom-trip-package" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
