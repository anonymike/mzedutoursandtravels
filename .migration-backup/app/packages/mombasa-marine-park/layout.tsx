import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mombasa Marine Park - Snorkeling, Coral Reefs & Dolphin Spotting",
  description:
    "Discover Mombasa Marine Park with snorkeling, vibrant coral reefs, glass-bottom boats, and dolphin spotting. A tropical paradise on Kenya's coast with MZEDU Tours.",
  openGraph: {
    title: "Mombasa Marine Park Tour - MZEDU Tours & Travels",
    description: "Snorkeling, coral reefs, glass-bottom boats, and dolphin spotting on Kenya's coast.",
    url: "https://www.mzedutoursandtravels.com/packages/mombasa-marine-park",
    images: [{ url: "/mombasa-marine-park-with-coral-reefs-and-tropical-.jpg", width: 1200, height: 630, alt: "Mombasa Marine Park" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/mombasa-marine-park" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
