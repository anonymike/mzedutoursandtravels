"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PackageBookingForm from "@/components/package-booking-form"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Camera, Shield, Star } from "lucide-react"

export default function HallerPark() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/haller-park-with-giraffes-and-wildlife-sanctuary.jpg"
            alt="Haller Park"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white hover:text-accent mb-4">
              <ArrowLeft className="w-5 h-5" />
              Back to Packages
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
              Haller Park Nature Reserve
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
                <p className="font-serif text-lg font-bold">1-20 People</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-semibold">Location</span>
                </div>
                <p className="font-serif text-lg font-bold">Bamburi, Mombasa</p>
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
                Haller Park is a remarkable ecological transformation story - once a barren limestone quarry, now a
                thriving nature sanctuary spanning 42 acres. Named after Dr. Rene Haller who pioneered the
                rehabilitation in the 1970s, the park showcases how devastated land can be restored to support diverse
                wildlife and lush vegetation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This family-friendly attraction offers intimate wildlife encounters including hand-feeding giraffes,
                observing hippos, exploring a crocodile farm, and walking through a vibrant butterfly pavilion. It's the
                perfect introduction to Kenya's wildlife for families with young children.
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Park Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Giraffe Feeding Platform",
                    desc: "Get up close and feed gentle Rothschild giraffes from an elevated platform",
                  },
                  {
                    title: "Crocodile Farm",
                    desc: "Observe Nile crocodiles from hatchlings to massive adults in secure viewing areas",
                  },
                  {
                    title: "Butterfly Pavilion",
                    desc: "Walk through enclosed gardens with hundreds of colorful butterflies flying freely",
                  },
                  {
                    title: "Hippo Pond",
                    desc: "Watch semi-tame hippos including the famous Owen and Mzee friendship pair",
                  },
                  {
                    title: "Wildlife Sanctuary",
                    desc: "Home to buffaloes, elands, waterbucks, bushbucks, and various antelope species",
                  },
                  {
                    title: "Palm Garden",
                    desc: "Stroll through beautifully landscaped gardens with over 180 plant species",
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
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Half-Day Visit Schedule</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Guided Tour</h3>
                  {[
                    { time: "09:00 AM", desc: "Pick-up from hotel and arrival at Haller Park" },
                    { time: "09:30 AM", desc: "Begin guided tour at the giraffe feeding platform" },
                    { time: "10:00 AM", desc: "Visit the crocodile farm and reptile section" },
                    { time: "10:30 AM", desc: "Explore the butterfly pavilion and palm gardens" },
                    { time: "11:00 AM", desc: "Observe hippos, buffaloes, and other mammals" },
                    { time: "11:30 AM", desc: "Bird watching and fish feeding at the ponds" },
                    { time: "12:00 PM", desc: "Free time for photos and optional gift shop visit" },
                    { time: "12:30 PM", desc: "Return transfer to hotel" },
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
                    "Park entrance fees",
                    "Professional guide",
                    "Giraffe feeding experience",
                    "Butterfly pavilion access",
                    "Guided walking tour",
                    "Bottled water",
                    "Souvenir park map",
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
                    "Comfortable walking shoes",
                    "Sun protection (hat, sunscreen)",
                    "Camera for wildlife photos",
                    "Light clothing in neutral colors",
                    "Insect repellent",
                    "Cash for souvenirs",
                    "Water bottle",
                    "Snacks (optional)",
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
                Haller Park is open year-round and offers great experiences in all seasons:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">Morning Visits (8:30 AM - 11:00 AM)</h4>
                  <p className="text-sm text-muted-foreground">
                    Cooler temperatures, active animals, and better light for photography
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">Afternoon Visits (2:00 PM - 5:00 PM)</h4>
                  <p className="text-sm text-muted-foreground">Less crowded with peaceful atmosphere for relaxation</p>
                </div>
              </div>
            </div>

            {/* Family-Friendly Info */}
            <div className="mb-12 p-6 bg-green-50 rounded-xl border border-green-200">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Perfect for Families</h3>
              <ul className="space-y-2">
                {[
                  "Safe and controlled environment ideal for children of all ages",
                  "Paved walkways suitable for strollers and wheelchairs",
                  "Educational guides who engage children with wildlife facts",
                  "Picnic areas available for family lunches",
                  "Clean restroom facilities throughout the park",
                  "On-site restaurant and snack bar",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-200 mb-12">
              <div className="bg-white p-6 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground mb-4">Ready for unforgettable wildlife encounters?</p>
                <Link
                  href="/#booking"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                >
                  Book Your Haller Park Visit
                </Link>
              </div>
            </div>

            {/* Booking Form */}
            <PackageBookingForm packageName="Haller Park Nature Reserve" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
