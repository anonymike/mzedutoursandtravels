import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safari Photo Gallery - Wildlife & Adventures in Kenya",
  description:
    "Browse stunning photos of Kenya safari wildlife, landscapes, and adventure tours by MZEDU Tours & Travels. See elephants, lions, zebras, and scenic Tsavo landscapes.",
  openGraph: {
    title: "Safari Photo Gallery - MZEDU Tours & Travels",
    description: "Stunning photos of Kenya safari wildlife, landscapes, and adventure tours.",
    url: "https://www.mzedutoursandtravels.com/gallery",
  },
  alternates: {
    canonical: "https://www.mzedutoursandtravels.com/gallery",
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
