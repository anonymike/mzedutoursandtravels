"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PackageBookingForm from "@/components/package-booking-form"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Camera, Shield, Star } from "lucide-react"

export default function MombasaMarinePark() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/mombasa-marine-park-with-coral-reefs-and-tropical-.jpg"
            alt="Mombasa Marine Park"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white hover:text-accent mb-4">
              <ArrowLeft className="w-5 h-5" />
              Back to Packages
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
              Mombasa Marine National Park
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
                <p className="font-serif text-lg font-bold">Half Day</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-semibold">Group Size</span>
                </div>
                <p className="font-serif text-lg font-bold">2-15 People</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-semibold">Location</span>
                </div>
                <p className="font-serif text-lg font-bold">Mombasa Coast</p>
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
                Mombasa Marine National Park is Kenya's oldest marine park, established in 1986 to protect the pristine
                coral reefs and diverse marine life along the Mombasa coast. This underwater paradise offers
                crystal-clear waters, vibrant coral gardens, and an abundance of tropical fish species.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're snorkeling through colorful reefs, taking a glass-bottom boat tour, or diving to explore
                deeper waters, the marine park provides unforgettable encounters with dolphins, sea turtles, and over
                200 species of fish in their natural habitat.
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Marine Park Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Snorkeling Paradise",
                    desc: "Explore shallow coral reefs teeming with colorful tropical fish and marine life",
                  },
                  {
                    title: "Coral Gardens",
                    desc: "Pristine coral formations with over 50 species of hard and soft corals",
                  },
                  {
                    title: "Glass-Bottom Boats",
                    desc: "Perfect for non-swimmers to observe underwater wonders from above",
                  },
                  {
                    title: "Dolphin Spotting",
                    desc: "Regular sightings of bottlenose and spinner dolphins in their natural habitat",
                  },
                  {
                    title: "Sea Turtle Encounters",
                    desc: "Green and hawksbill turtles frequently spotted grazing on seagrass",
                  },
                  {
                    title: "Marine Diversity",
                    desc: "Over 200 fish species including angelfish, parrotfish, and butterfly fish",
                  },
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
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Half-Day Itinerary</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Morning Session (Recommended)</h3>
                  {[
                    { time: "08:00 AM", desc: "Pick-up from your hotel/accommodation" },
                    { time: "08:30 AM", desc: "Arrival at marine park, safety briefing and gear fitting" },
                    { time: "09:00 AM", desc: "Board boat and depart to snorkeling sites" },
                    { time: "09:30 AM", desc: "First snorkeling session at coral gardens (45 minutes)" },
                    { time: "10:30 AM", desc: "Glass-bottom boat tour and dolphin watching" },
                    { time: "11:30 AM", desc: "Second snorkeling session at different reef (45 minutes)" },
                    { time: "12:30 PM", desc: "Return to shore and transfer back to hotel" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 mb-3">
                      <div className="text-primary font-bold text-sm whitespace-nowrap">{item.time}</div>
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
                    "Hotel pick-up and drop-off",
                    "Marine park entrance fees",
                    "Professional guide and boat captain",
                    "Snorkeling equipment (mask, fins, vest)",
                    "Life jackets for all participants",
                    "Glass-bottom boat tour",
                    "Bottled water and refreshments",
                    "Underwater photography assistance",
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
                    "Swimwear and towel",
                    "Waterproof sunscreen (reef-safe)",
                    "Underwater camera or GoPro",
                    "Waterproof phone case",
                    "Change of clothes",
                    "Sun hat and sunglasses",
                    "Cash for tips and souvenirs",
                    "Motion sickness tablets (if needed)",
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
                The marine park offers excellent visibility and calm waters throughout the year:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">October - March (Best)</h4>
                  <p className="text-sm text-muted-foreground">
                    Calm seas, excellent visibility (up to 20m), and warm water temperatures
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">July - September (Good)</h4>
                  <p className="text-sm text-muted-foreground">Cooler waters but still great snorkeling conditions</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Important Information</h3>
              <ul className="space-y-2">
                {[
                  "Basic swimming ability recommended but not required (life jackets provided)",
                  "Children 6 years and above can participate",
                  "Tours subject to weather and sea conditions",
                  "Please use reef-safe sunscreen to protect marine life",
                  "No touching or standing on coral reefs",
                  "Scuba diving available with advance booking",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-200 mb-12">
              <div className="bg-white p-6 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground mb-4">Ready to dive into Kenya's underwater paradise?</p>
                <Link
                  href="/#booking"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                >
                  Book Your Marine Adventure
                </Link>
              </div>
            </div>

            {/* Booking Form */}
            <PackageBookingForm packageName="Mombasa Marine National Park" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
