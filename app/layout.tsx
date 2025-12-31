import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "@/components/cookie-consent"
import { ChristmasPopup } from "@/components/christmas-popup"
import { NewYearPopup } from "@/components/new-year-popup"
import { CountdownTimer } from "@/components/countdown-timer"
import { Fireworks } from "@/components/fireworks"
import { NewYearWelcomeModal } from "@/components/new-year-welcome-modal"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "MZEDU TOURS & TRAVELS - Safari Adventures in Kenya",
  description:
    "Experience unforgettable game drives, road trips, and private transport across Kenya. Book your Tsavo adventure today.",
  generator: "anonymiketech MV's",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Fireworks />
        <CookieConsent />
        <CountdownTimer />
        <ChristmasPopup />
        <NewYearPopup />
        <NewYearWelcomeModal />
        <Analytics />
      </body>
    </html>
  )
}
