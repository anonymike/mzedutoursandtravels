import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arabuko-Sokoke Forest - Bird Watching & Endemic Species",
  description:
    "Explore Arabuko-Sokoke Forest, East Africa's largest coastal forest. Bird watching, rare butterflies, endemic species, and forest trails with MZEDU Tours & Travels.",
  openGraph: {
    title: "Arabuko-Sokoke Forest Tour - MZEDU Tours & Travels",
    description: "East Africa's largest coastal forest with bird watching, rare butterflies, and endemic species.",
    url: "https://www.mzedutoursandtravels.com/packages/arabuko-sokoke-forest",
    images: [{ url: "/arabuko-sokoke-coastal-forest-with-endemic-birds-a.jpg", width: 1200, height: 630, alt: "Arabuko-Sokoke Forest" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/arabuko-sokoke-forest" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
