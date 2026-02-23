"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-foreground-contrast py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-serif text-xl font-bold text-white">MZEDU</span>
            </div>
            <p className="text-sm text-gray-300">
              Premium safari tours and transport services across Kenya since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/#hero" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-primary transition">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Services and Office Address */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>
                <Link href="/#services" className="hover:text-primary transition">
                  Game Drives
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary transition">
                  Road Trips
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary transition">
                  Car Hire
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary transition">
                  Airport Transfers
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="font-serif font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Visit Our Office
              </h4>
              <div className="text-sm text-gray-300 leading-relaxed">
                <p className="font-medium text-white">Voi, Taita Taveta</p>
                <p>Opposite AIC Church</p>
                <p>Before Wells Spring Enterprises</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1729b2zH2R/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/mzedutoursandtravels?igsh=MTAwdzBjYmQ2Y2J6eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 MZEDU TOURS & TRAVEL, TSAVO. All rights reserved.</p>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p>
                Curated with ❤️ by{" "}
                <a
                  href="https://www.anonymiketech.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition font-medium"
                >
                  ANONYMIKETECH
                </a>
              </p>
              <div className="flex gap-6">
                <Link href="/privacy-policy" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:text-primary transition">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
