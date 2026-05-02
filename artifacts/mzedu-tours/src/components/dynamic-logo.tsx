"use client"

import { Link } from "wouter"
import logoSrc from "@assets/MZEDU_LOGO_1777732495807.png"

export default function DynamicLogo() {
  return (
    <Link href="/" className="flex items-center group">
      <img
        src={logoSrc}
        alt="MZEDU Tours and Travels"
        className="h-10 w-auto sm:h-12 md:h-14 object-contain"
      />
    </Link>
  )
}
