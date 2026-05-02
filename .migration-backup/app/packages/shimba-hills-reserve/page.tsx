"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Camera, Shield, Star } from "lucide-react"

export default function ShimbaHillsReserve() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/shimba-hills-rainforest-with-waterfall-and-lush-ve.jpg"
            alt="Shimba Hills Reserve"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white hover:text-accent mb-4">
              <ArrowLeft className="w-5 h-5" />
              Back to Packages
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
              Shimba Hills National Reserve
            </h1>
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
                <p className="font-serif text-lg font-bold">2-8 People</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-semibold">Location</span>
                </div>
                <p className="font-serif text-lg font-bold">South Coast</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Star className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-semibold">Rating</span>
                </div>
                <p className="font-serif text-lg font-bold">4.8/5.0</p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Shimba Hills National Reserve is a coastal rainforest paradise located 33km southwest of Mombasa. This
                tropical haven is the only coastal reserve in Kenya where you can see elephants, and it's home to
                Kenya's only population of the rare sable antelope.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The reserve features rolling hills covered in lush rainforest, stunning viewpoints overlooking the
                Indian Ocean, and the magnificent 25-meter Sheldrick Falls. Perfect for nature lovers seeking cooler
                temperatures and diverse ecosystems just a short drive from the coast.
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Reserve Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Sable Antelopes",
                    desc: "Kenya's only population of the majestic and rare sable antelope",
                  },
                  {
                    title: "Sheldrick Falls",
                    desc: "Spectacular 25-meter waterfall with swimming opportunities",
                  },
                  {
                    title: "Coastal Rainforest",
                    desc: "Lush tropical vegetation with over 250 plant species",
                  },
                  {
                    title: "Ocean Views",
                    desc: "Stunning panoramic views of the Indian Ocean from Pengo Hill",
                  },
                  {
                    title: "Elephant Herds",
                    desc: "Coastal elephants in their tropical forest habitat",
                  },
                  {
                    title: "Butterfly Species",
                    desc: "Over 100 butterfly species including rare African swallowtails",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Full Day Itinerary</h2>
              <div className="space-y-6">
                {[
                  {
                    time: "06:30 AM",
                    title: "Hotel Pickup",
                    desc: "Depart from your coastal accommodation with packed breakfast",
                  },
                  {
                    time: "07:30 AM",
                    title: "Enter Reserve",
                    desc: "Begin morning game drive through the rainforest",
                  },
                  {
                    time: "09:00 AM",
                    title: "Wildlife Viewing",
                    desc: "Search for sable antelopes, elephants, and buffalo",
                  },
                  {
                    time: "11:00 AM",
                    title: "Sheldrick Falls Hike",
                    desc: "Guided 4km forest walk to the stunning waterfall",
                  },
                  {
                    time: "12:30 PM",
                    title: "Picnic Lunch",
                    desc: "Lunch at the scenic viewpoint with ocean views",
                  },
                  {
                    time: "02:00 PM",
                    title: "Afternoon Drive",
                    desc: "Continue exploring with focus on butterfly spotting",
                  },
                  {
                    time: "04:00 PM",
                    title: "Pengo Hill Viewpoint",
                    desc: "Panoramic views of the Indian Ocean and coastline",
                  },
                  { time: "05:00 PM", title: "Return Journey", desc: "Drive back to your hotel with sunset views" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-6 border-b border-border last:border-0">
                    <div className="text-primary font-bold whitespace-nowrap text-sm">{item.time}</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wildlife */}
            <div className="mb-12 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Wildlife You Might See</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Sable antelope",
                  "Elephants",
                  "Buffalo",
                  "Leopards",
                  "Warthogs",
                  "Baboons",
                  "Colobus monkeys",
                  "Bushbucks",
                  "Duikers",
                ].map((animal, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {animal}
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
                    "Professional guide",
                    "4x4 safari vehicle",
                    "Park entrance fees",
                    "Guided waterfall hike",
                    "Picnic lunch",
                    "Bottled water",
                    "All taxes and fees",
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
                    "Sturdy hiking boots",
                    "Swimming costume (optional)",
                    "Rain jacket",
                    "Insect repellent",
                    "Camera equipment",
                    "Binoculars",
                    "Sun protection",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-200 mb-12">
              <div className="bg-white p-6 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground mb-4">Discover the coastal rainforest paradise</p>
                <Link
                  href="/#booking"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                >
                  Book Shimba Hills Tour
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
