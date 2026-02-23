"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PackageBookingForm from "@/components/package-booking-form"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Camera, Shield, Star } from "lucide-react"

export default function TsavoGameDrive() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/tsavo-lion.jpg"
            alt="Lion walking down a red dirt road in Tsavo National Park"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white hover:text-accent mb-4">
              <ArrowLeft className="w-5 h-5" />
              Back to Packages
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">Tsavo Game Drive</h1>
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
                <p className="font-serif text-lg font-bold">1 Day</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-semibold">Group Size</span>
                </div>
                <p className="font-serif text-lg font-bold">2-6 People</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-semibold">Location</span>
                </div>
                <p className="font-serif text-lg font-bold">Tsavo East</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Star className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-semibold">Rating</span>
                </div>
                <p className="font-serif text-lg font-bold">4.9/5.0</p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Experience the raw beauty of Tsavo National Park with our expertly guided game drive. Witness the
                majesty of African wildlife in their natural habitat, from majestic elephants to elusive big cats. Our
                experienced guides ensure an unforgettable safari adventure tailored to your interests.
              </p>
            </div>

            {/* Itinerary */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Itinerary</h2>
              <div className="space-y-6">
                {[
                  { time: "06:00 AM", title: "Hotel Pickup", desc: "We collect you from your accommodation" },
                  { time: "07:00 AM", title: "Park Entrance", desc: "Enter Tsavo National Park with packed breakfast" },
                  {
                    time: "08:00 AM - 12:30 PM",
                    title: "Morning Game Drive",
                    desc: "Explore diverse ecosystems and spot wildlife",
                  },
                  {
                    time: "12:30 PM - 02:00 PM",
                    title: "Lunch Break",
                    desc: "Enjoy a scenic lunch with picturesque views",
                  },
                  {
                    time: "02:00 PM - 05:30 PM",
                    title: "Afternoon Game Drive",
                    desc: "Continue wildlife exploration, sunset photography",
                  },
                  { time: "06:00 PM", title: "Return to Hotel", desc: "Safe return to your accommodation" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-6 border-b border-border last:border-0">
                    <div className="text-primary font-bold whitespace-nowrap">{item.time}</div>
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
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "Professional safari guide",
                    "4x4 vehicle with pop-up roof",
                    "Park entrance fees",
                    "Packed breakfast",
                    "Lunch & refreshments",
                    "Binoculars for wildlife viewing",
                    "Photography assistance",
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
                  What to Bring
                </h3>
                <ul className="space-y-3">
                  {[
                    "Sun protection (SPF 50+)",
                    "Comfortable safari clothing",
                    "Sturdy closed-toe shoes",
                    "Hat or cap",
                    "Camera with extra batteries",
                    "Water bottle (1.5L+)",
                    "Binoculars (optional)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing */}
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

            {/* Booking Form */}
            <PackageBookingForm packageName="Tsavo Game Drive" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
