import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mzima Springs Tour - Underwater Observatory & Hippo Watching",
  description:
    "Visit Mzima Springs in Tsavo West for crystal-clear waters, hippo watching, and the famous underwater observatory. A unique Kenya safari experience with MZEDU Tours.",
  openGraph: {
    title: "Mzima Springs Tour - MZEDU Tours & Travels",
    description: "Crystal-clear waters, hippo watching, and underwater observatory in Tsavo West.",
    url: "https://www.mzedutoursandtravels.com/packages/mzima-springs",
    images: [{ url: "/crystal-clear-springs-with-hippos-and-fish-underwa.jpg", width: 1200, height: 630, alt: "Mzima Springs Underwater Observatory" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/mzima-springs" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
