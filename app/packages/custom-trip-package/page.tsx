"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PackageBookingForm from "@/components/package-booking-form"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Camera, Shield, Star } from "lucide-react"

export default function CustomTripPackage() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/kenya-diverse-landscapes-mountains-valleys-safari.jpg"
            alt="Custom Trip Package"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white hover:text-accent mb-4">
              <ArrowLeft className="w-5 h-5" />
              Back to Packages
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">Custom Trip Package</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Quick Info */}
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-semibold">Duration</span>
                </div>
                <p className="font-serif text-lg font-bold">Flexible</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-semibold">Group Size</span>
                </div>
                <p className="font-serif text-lg font-bold">Any Size</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-semibold">Location</span>
                </div>
                <p className="font-serif text-lg font-bold">Anywhere</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Star className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-semibold">Rating</span>
                </div>
                <p className="font-serif text-lg font-bold">5.0/5.0</p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Design your perfect Kenyan adventure with our fully customizable travel package. Whether you envision a
                romantic safari getaway, family adventure, corporate retreat, or specialized wildlife expedition, our
                expert team crafts an itinerary tailored exactly to your needs, preferences, and budget.
              </p>
            </div>

            {/* What We Offer */}
            <div className="mb-12 bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-200">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Customization Options</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Multi-destination combinations",
                  "Flexible travel dates",
                  "Accommodation level selection",
                  "Activity & experience options",
                  "Dietary preference catering",
                  "Group or solo arrangements",
                  "Budget optimization",
                  "Special occasion planning",
                  "Accessibility accommodations",
                  "Luxury or budget variants",
                  "Photography-focused itineraries",
                  "Cultural immersion programs",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Planning Process */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Planning Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Initial Consultation",
                    desc: "Share your travel dreams, preferences, and requirements",
                  },
                  {
                    step: "2",
                    title: "Proposal Development",
                    desc: "We create a detailed customized itinerary with options",
                  },
                  { step: "3", title: "Refinement", desc: "Adjust dates, activities, budget until perfect fit" },
                  { step: "4", title: "Confirmation", desc: "Finalize bookings and receive detailed travel documents" },
                  {
                    step: "5",
                    title: "Pre-Travel Support",
                    desc: "Continuous support and updates leading to departure",
                  },
                  { step: "6", title: "Memorable Experience", desc: "Enjoy your custom-crafted Kenyan adventure" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-6 border-b border-border last:border-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Always Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "Expert trip planning",
                    "Personalized itinerary",
                    "Professional guides",
                    "Comfortable vehicle",
                    "Accommodation selection",
                    "Meal arrangements",
                    "24/7 support during trip",
                    "Travel insurance options",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Camera className="w-6 h-6 text-primary" />
                  Tell Us About
                </h3>
                <ul className="space-y-3">
                  {[
                    "Your travel goals & interests",
                    "Preferred travel dates/duration",
                    "Budget range",
                    "Group composition",
                    "Accommodation preferences",
                    "Activity interests",
                    "Dietary requirements",
                    "Any special requests",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-200 mb-12">
              <div className="bg-white p-6 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground mb-4">Contact us for a personalized quote</p>
                <a
                  href="#package-booking"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                >
                  Start Planning Your Trip
                </a>
              </div>
            </div>
          </div>
        </section>

        <PackageBookingForm packageName="Custom Trip Package" />
      </main>
      <Footer />
    </>
  )
}
