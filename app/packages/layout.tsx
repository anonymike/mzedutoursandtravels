import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safari Tour Packages - Kenya Wildlife Adventures",
  description:
    "Browse curated safari tour packages across Kenya. Game drives in Tsavo, Amboseli safaris, coastal adventures, Mombasa tours, car hire, and custom trip packages by MZEDU Tours & Travels.",
  openGraph: {
    title: "Safari Tour Packages - MZEDU Tours & Travels",
    description:
      "Browse curated safari tour packages across Kenya. Game drives in Tsavo, Amboseli safaris, and coastal adventures.",
  },
}

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
