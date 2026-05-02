import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tsavo Game Drive - Guided Safari Wildlife Experience",
  description:
    "Experience thrilling guided game drives through Tsavo with professional safari guides. Spot lions, elephants, and diverse wildlife in their natural habitat with MZEDU Tours.",
  openGraph: {
    title: "Tsavo Game Drive - MZEDU Tours & Travels",
    description: "Thrilling guided game drives through Tsavo with professional safari guides.",
    url: "https://www.mzedutoursandtravels.com/packages/tsavo-game-drive",
    images: [{ url: "/tsavo-lion.jpg", width: 1200, height: 630, alt: "Tsavo Game Drive Safari" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/tsavo-game-drive" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
