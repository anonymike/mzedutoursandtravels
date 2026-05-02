import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fort Jesus Museum Mombasa - UNESCO World Heritage Site Tour",
  description:
    "Visit Fort Jesus, a UNESCO World Heritage Site in Mombasa. Explore Portuguese architecture, historical artifacts, and centuries of coastal Kenya history with MZEDU Tours.",
  openGraph: {
    title: "Fort Jesus Museum Tour - MZEDU Tours & Travels",
    description: "UNESCO World Heritage Site in Mombasa with Portuguese architecture and historical artifacts.",
    url: "https://www.mzedutoursandtravels.com/packages/fort-jesus",
    images: [{ url: "/fort-jesus-historical-portuguese-fort-in-mombasa.jpg", width: 1200, height: 630, alt: "Fort Jesus Museum Mombasa" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/fort-jesus" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
