"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Camera, Shield, Star } from "lucide-react"

export default function TsavoNationalPark() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/tsavo-elephant.jpg"
            alt="Red elephant crossing a dirt road in Tsavo National Park"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white hover:text-accent mb-4">
              <ArrowLeft className="w-5 h-5" />
              Back to Packages
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
              Tsavo National Park (East & West)
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
                <p className="font-serif text-lg font-bold">2-3 Days</p>
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
                <p className="font-serif text-lg font-bold">Tsavo East & West</p>
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
                Explore Kenya's largest wildlife sanctuary, covering 4% of the country's total area. Tsavo is famous for
                its iconic red elephants, vast landscapes, and diverse wildlife. Experience both Tsavo East with its
                flat plains and Galana River, and Tsavo West with its volcanic landscapes, Mzima Springs, and dramatic
                scenery.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Home to the legendary "Man-Eaters of Tsavo" and one of the largest populations of elephants in Kenya,
                this park offers an authentic wilderness experience away from the crowds.
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Park Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Red Elephants",
                    desc: "Famous for bathing in red volcanic soil, creating their distinctive coloring",
                  },
                  { title: "Mzima Springs", desc: "Crystal clear springs with underwater viewing of hippos and fish" },
                  {
                    title: "Lugard Falls",
                    desc: "Spectacular rapids on the Galana River with dramatic rock formations",
                  },
                  { title: "Big Five", desc: "Lions, elephants, buffalo, leopards, and rhinos roam freely" },
                  { title: "Shetani Lava Flow", desc: "Volcanic lava flow creating otherworldly black landscapes" },
                  { title: "Yatta Plateau", desc: "World's longest lava flow stretching 290 kilometers" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Itinerary */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Sample 2-Day Itinerary</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Day 1: Tsavo East</h3>
                  {[
                    { time: "06:00 AM", desc: "Depart from Mombasa/Voi with packed breakfast" },
                    { time: "08:00 AM", desc: "Enter Tsavo East, morning game drive" },
                    { time: "12:30 PM", desc: "Lunch at lodge/camp with panoramic views" },
                    { time: "03:00 PM", desc: "Afternoon game drive along Galana River" },
                    { time: "06:00 PM", desc: "Sundowner and return to lodge for dinner" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 mb-3">
                      <div className="text-primary font-bold text-sm whitespace-nowrap">{item.time}</div>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Day 2: Tsavo West</h3>
                  {[
                    { time: "06:30 AM", desc: "Early morning game drive in Tsavo East" },
                    { time: "09:00 AM", desc: "Breakfast and transfer to Tsavo West" },
                    { time: "11:00 AM", desc: "Visit Mzima Springs underwater observatory" },
                    { time: "01:00 PM", desc: "Lunch and explore Shetani Lava Flow" },
                    { time: "03:00 PM", desc: "Afternoon game drive with Ngulia Rhino Sanctuary visit" },
                    { time: "05:30 PM", desc: "Depart for Mombasa/Voi" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 mb-3">
                      <div className="text-accent font-bold text-sm whitespace-nowrap">{item.time}</div>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
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
                    "4x4 safari vehicle with pop-up roof",
                    "Park entrance fees (both parks)",
                    "Accommodation (for multi-day packages)",
                    "All meals as per itinerary",
                    "Bottled water throughout",
                    "Game drives as scheduled",
                    "Visit to Mzima Springs",
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
                    "Light, breathable safari clothing",
                    "Warm jacket for early mornings",
                    "Sturdy walking shoes",
                    "Camera with zoom lens",
                    "Binoculars",
                    "Insect repellent",
                    "Personal medication",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="mb-12 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Best Time to Visit</h3>
              <p className="text-muted-foreground mb-4">
                Tsavo can be visited year-round, but the dry seasons offer the best wildlife viewing:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">June - October (Best)</h4>
                  <p className="text-sm text-muted-foreground">
                    Dry season with excellent wildlife concentrations around water sources
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">January - March (Good)</h4>
                  <p className="text-sm text-muted-foreground">Hot and dry with good game viewing and fewer tourists</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-200">
              <div className="bg-white p-6 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground mb-4">Ready to explore Kenya's largest wilderness?</p>
                <Link
                  href="/#booking"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                >
                  Book Your Tsavo Adventure
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
