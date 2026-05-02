"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Camera, Shield, Star } from "lucide-react"

export default function MzimaSprings() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/mzima-springs-crystal-clear-water-with-hippos-unde.jpg"
            alt="Mzima Springs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white hover:text-accent mb-4">
              <ArrowLeft className="w-5 h-5" />
              Back to Packages
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">Mzima Springs</h1>
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
                <p className="font-serif text-lg font-bold">2-10 People</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-semibold">Location</span>
                </div>
                <p className="font-serif text-lg font-bold">Tsavo West</p>
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
                Mzima Springs is a series of four natural springs in Tsavo West National Park, producing over 250
                million liters of fresh water daily. The crystal-clear waters are filtered through volcanic rocks from
                the Chyulu Hills, creating an underwater paradise teeming with life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Famous for its underwater observation chamber, Mzima Springs offers a rare opportunity to watch hippos
                and fish swimming in their natural habitat from below the water surface – an experience unlike any other
                in Kenya.
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Experience Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Underwater Observatory",
                    desc: "Unique glass-paneled chamber for viewing hippos and fish swimming beneath the surface",
                  },
                  {
                    title: "Hippo Watching",
                    desc: "Observe pods of hippos wallowing in the crystal-clear spring waters",
                  },
                  {
                    title: "Nature Walks",
                    desc: "Guided walks along the springs through lush vegetation and palm trees",
                  },
                  {
                    title: "Birdwatching",
                    desc: "Over 100 bird species including fish eagles, herons, and kingfishers",
                  },
                  { title: "Crocodile Spotting", desc: "Nile crocodiles basking along the banks and in the waters" },
                  {
                    title: "Photography",
                    desc: "Stunning photo opportunities with clear waters and abundant wildlife",
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
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Half-Day Itinerary</h2>
              <div className="space-y-6">
                {[
                  { time: "08:00 AM", title: "Pickup", desc: "Collection from your hotel/accommodation" },
                  { time: "09:30 AM", title: "Arrive at Mzima Springs", desc: "Enter Tsavo West National Park" },
                  {
                    time: "10:00 AM",
                    title: "Underwater Observatory",
                    desc: "Descend into the viewing chamber to watch hippos and fish",
                  },
                  {
                    time: "10:45 AM",
                    title: "Nature Walk",
                    desc: "Guided walk along the springs spotting wildlife and birds",
                  },
                  {
                    time: "11:30 AM",
                    title: "Hippo Pool Viewing",
                    desc: "Watch hippos from the surface at designated viewpoints",
                  },
                  {
                    time: "12:00 PM",
                    title: "Refreshments",
                    desc: "Light snacks and drinks in the shade of fever trees",
                  },
                  { time: "12:30 PM", title: "Return Journey", desc: "Drive back to your accommodation" },
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
                    "Private transport",
                    "Park entrance fees",
                    "Underwater observatory access",
                    "Guided nature walk",
                    "Bottled water",
                    "Light refreshments",
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
                    "Camera with good zoom",
                    "Comfortable walking shoes",
                    "Sun hat and sunglasses",
                    "Sunscreen",
                    "Light clothing",
                    "Binoculars",
                    "Water bottle",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important Information */}
            <div className="mb-12 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Important Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">
                    Best visibility in the underwater observatory is during dry seasons (June-October and
                    January-February)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">
                    Hippos are most active in early morning and late afternoon
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">
                    Stay on designated paths and maintain safe distance from wildlife
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">
                    Can be combined with Tsavo West game drive for full day tour
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-200 mb-12">
              <div className="bg-white p-6 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground mb-4">Experience the magical underwater world of Mzima</p>
                <Link
                  href="/#booking"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                >
                  Book Your Visit
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
