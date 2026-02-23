import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kenya Coastline Road Trip - Scenic Coastal Adventure",
  description:
    "Enjoy a scenic road trip along Kenya's stunning coastline with beautiful beaches, historic sites, and tropical landscapes. Book with MZEDU Tours & Travels.",
  openGraph: {
    title: "Coastline Road Trip - MZEDU Tours & Travels",
    description: "Scenic road trip along Kenya's stunning coastline with beaches and historic sites.",
    url: "https://www.mzedutoursandtravels.com/packages/coastline-road-trip",
    images: [{ url: "/kenya-coastal-adventure-with-beaches-and-safari-co.jpg", width: 1200, height: 630, alt: "Kenya Coastline Road Trip" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/coastline-road-trip" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
