import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nairobi National Park Tour - Wildlife Safari in the City",
  description:
    "Tour Nairobi National Park, the only national park within a capital city. See lions, rhinos, and giraffes with the Nairobi skyline as backdrop. Book with MZEDU Tours.",
  openGraph: {
    title: "Nairobi National Park Tour - MZEDU Tours & Travels",
    description: "Wildlife safari in the only national park within a capital city.",
    url: "https://www.mzedutoursandtravels.com/packages/nairobi-national-park-tour",
    images: [{ url: "/nairobi-national-park-wildlife-and-landscapes.jpg", width: 1200, height: 630, alt: "Nairobi National Park" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/nairobi-national-park-tour" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
