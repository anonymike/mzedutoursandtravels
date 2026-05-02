import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Amboseli Safari Experience - Mt. Kilimanjaro Views & Elephants",
  description:
    "Experience Amboseli National Park with stunning views of Mount Kilimanjaro and large elephant herds. Book your Amboseli safari game drive with MZEDU Tours & Travels.",
  openGraph: {
    title: "Amboseli Safari Experience - MZEDU Tours & Travels",
    description: "Stunning Mt. Kilimanjaro views and large elephant herds in Amboseli National Park.",
    url: "https://www.mzedutoursandtravels.com/packages/amboseli-safari-experience",
    images: [{ url: "/mount-kilimanjaro-with-elephants-in-amboseli.jpg", width: 1200, height: 630, alt: "Amboseli Safari with Mt. Kilimanjaro" }],
  },
  alternates: { canonical: "https://www.mzedutoursandtravels.com/packages/amboseli-safari-experience" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
