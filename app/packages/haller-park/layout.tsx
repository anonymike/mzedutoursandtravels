import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Haller Park Nature Reserve - Giraffe Feeding & Wildlife Sanctuary",
  description:
    "Visit Haller Park in Mombasa for giraffe feeding, crocodile farm, butterfly pavilion, and wildlife sanctuary. Perfect for families with MZEDU Tours & Travels.",
  openGraph: {
    title: "Haller Park Tour - MZEDU Tours & Travels",
    description: "Giraffe feeding, wildlife sanctuary, and butterfly pavilion in Mombasa.",
    url: "https://www.mzedutoursandtravels.com/packages/haller-park",
    images: [{ url: "/haller-park-with-giraffes-and-wildlife-sanctuary.jpg", width: 1200, height: 630, alt: "Haller Park Nature Reserve" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/haller-park" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
