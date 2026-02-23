"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Camera, Shield, Star } from "lucide-react"

export default function FortJesus() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/fort-jesus-historical-portuguese-fort-in-mombasa-k.jpg"
            alt="Fort Jesus Museum"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white hover:text-accent mb-4">
              <ArrowLeft className="w-5 h-5" />
              Back to Packages
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">Fort Jesus Museum</h1>
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
                <p className="font-serif text-lg font-bold">Any</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-semibold">Location</span>
                </div>
                <p className="font-serif text-lg font-bold">Mombasa Old Town</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Star className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-semibold">Rating</span>
                </div>
                <p className="font-serif text-lg font-bold">4.7/5.0</p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Fort Jesus is a UNESCO World Heritage Site built by the Portuguese in 1593-1596 to protect the port of
                Mombasa. This magnificent structure represents one of the finest examples of 16th-century Portuguese
                military architecture and stands as a monument to the first successful European attempt to colonize the
                East African coast.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The fort has witnessed centuries of battles between the Portuguese, Arabs, and British, changing hands
                at least nine times. Today, it houses a museum showcasing the rich cultural history of the Swahili Coast
                with artifacts dating back over 600 years.
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Museum Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Portuguese Architecture",
                    desc: "Magnificent coral stone fortress with intricate military design",
                  },
                  {
                    title: "Historical Artifacts",
                    desc: "Pottery, weapons, and trade goods from multiple civilizations",
                  },
                  {
                    title: "Omani House",
                    desc: "Restored 18th-century Arabic house showcasing Swahili lifestyle",
                  },
                  {
                    title: "Archaeological Finds",
                    desc: "Chinese porcelain, Persian ceramics, and local Swahili pottery",
                  },
                  {
                    title: "Panoramic Views",
                    desc: "Stunning views of Mombasa Old Town and the Indian Ocean from ramparts",
                  },
                  { title: "UNESCO Heritage", desc: "Recognized world heritage site since 2011" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tour Itinerary */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Half-Day Tour Itinerary</h2>
              <div className="space-y-6">
                {[
                  {
                    time: "09:00 AM",
                    title: "Hotel Pickup",
                    desc: "Collection from your Mombasa accommodation",
                  },
                  {
                    time: "09:30 AM",
                    title: "Fort Entrance",
                    desc: "Introduction and historical overview by professional guide",
                  },
                  {
                    time: "10:00 AM",
                    title: "Main Courtyard Tour",
                    desc: "Explore Portuguese barracks, chapel, and ammunition stores",
                  },
                  {
                    time: "10:45 AM",
                    title: "Museum Galleries",
                    desc: "View artifact collections from different historical periods",
                  },
                  {
                    time: "11:30 AM",
                    title: "Omani House Visit",
                    desc: "Step into 18th-century Arab lifestyle and architecture",
                  },
                  {
                    time: "12:00 PM",
                    title: "Ramparts Walk",
                    desc: "Panoramic views and photography from the fort walls",
                  },
                  {
                    time: "12:30 PM",
                    title: "Old Town Stroll (Optional)",
                    desc: "Walk through narrow streets of historic Mombasa Old Town",
                  },
                  { time: "01:00 PM", title: "Return to Hotel", desc: "Drop-off at your accommodation" },
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

            {/* Historical Timeline */}
            <div className="mb-12 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Historical Timeline</h3>
              <div className="space-y-3">
                {[
                  { year: "1593-1596", event: "Built by Portuguese to protect Mombasa harbor" },
                  { year: "1631", event: "First siege by Sultan of Mombasa unsuccessful" },
                  { year: "1698", event: "Captured by Omani Arabs after 33-month siege" },
                  { year: "1728-1729", event: "Briefly recaptured by Portuguese" },
                  { year: "1875", event: "British took control of the fort" },
                  { year: "1958", event: "Opened as national museum" },
                  { year: "2011", event: "Designated UNESCO World Heritage Site" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="font-bold text-primary whitespace-nowrap">{item.year}</div>
                    <div className="text-muted-foreground">{item.event}</div>
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
                    "Professional historical guide",
                    "Private transport",
                    "Fort entrance fees",
                    "Museum access",
                    "Old Town walking tour (optional)",
                    "Bottled water",
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
                    "Camera (no tripods allowed)",
                    "Comfortable walking shoes",
                    "Sun hat and sunscreen",
                    "Light, modest clothing",
                    "Water bottle",
                    "Notebook for history enthusiasts",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visitor Tips */}
            <div className="mb-12 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Visitor Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">
                    Best visited in the morning when it's cooler and less crowded
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">
                    Combine with Old Town walking tour for full cultural experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">
                    Audio guides available at entrance for self-guided tours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">Respect the site - it's a protected heritage monument</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-200 mb-12">
              <div className="bg-white p-6 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground mb-4">Step into 400 years of coastal history</p>
                <Link
                  href="/#booking"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                >
                  Book Fort Jesus Tour
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
