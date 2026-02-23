import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tsavo National Park Safari (East & West) - Game Drives in Kenya",
  description:
    "Explore Tsavo National Park with expert-guided game drives. See red elephants, Mzima Springs, Lugard Falls, and the Big Five in Kenya's largest national park. Book with MZEDU Tours.",
  openGraph: {
    title: "Tsavo National Park Safari - MZEDU Tours & Travels",
    description: "Expert-guided game drives through Tsavo East and West. See red elephants, Big Five wildlife.",
    url: "https://www.mzedutoursandtravels.com/packages/tsavo-national-park",
    images: [{ url: "/tsavo-national-park-with-red-elephants-and-baobab-.jpg", width: 1200, height: 630, alt: "Tsavo National Park Safari" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/tsavo-national-park" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
