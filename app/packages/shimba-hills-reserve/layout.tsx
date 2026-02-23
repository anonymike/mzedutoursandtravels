import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shimba Hills National Reserve - Rainforest, Waterfalls & Sable Antelopes",
  description:
    "Explore Shimba Hills National Reserve near Mombasa. See rare sable antelopes, Sheldrick Falls, lush rainforest trails, and stunning coastal views with MZEDU Tours.",
  openGraph: {
    title: "Shimba Hills Reserve Tour - MZEDU Tours & Travels",
    description: "Rare sable antelopes, Sheldrick Falls, and rainforest trails near Mombasa.",
    url: "https://www.mzedutoursandtravels.com/packages/shimba-hills-reserve",
    images: [{ url: "/shimba-hills-rainforest-with-waterfalls-and-elepha.jpg", width: 1200, height: 630, alt: "Shimba Hills National Reserve" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/shimba-hills-reserve" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
