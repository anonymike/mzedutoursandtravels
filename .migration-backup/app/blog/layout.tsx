import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safari Blog - Travel Tips, Wildlife & Kenya Destinations",
  description:
    "Read expert travel tips, wildlife guides, and destination insights for Kenya safari adventures. Plan your Tsavo, Amboseli, and coastal Kenya trips with MZEDU Tours & Travels.",
  openGraph: {
    title: "Safari Blog - MZEDU Tours & Travels",
    description: "Expert travel tips, wildlife guides, and Kenya destination insights.",
    url: "https://www.mzedutoursandtravels.com/blog",
  },
  alternates: {
    canonical: "https://www.mzedutoursandtravels.com/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
