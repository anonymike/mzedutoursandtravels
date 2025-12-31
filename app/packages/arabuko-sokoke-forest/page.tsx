"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PackageBookingForm from "@/components/package-booking-form"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Camera, Shield, Star } from "lucide-react"

export default function ArabukoSokokeForest() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/arabuko-sokoke-coastal-forest-with-endemic-birds-a.jpg"
            alt="Arabuko-Sokoke Forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white hover:text-accent mb-4">
              <ArrowLeft className="w-5 h-5" />
              Back to Packages
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
              Arabuko-Sokoke Forest Reserve
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
                <p className="font-serif text-lg font-bold">2-10 People</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-semibold">Location</span>
                </div>
                <p className="font-serif text-lg font-bold">Kilifi County</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Star className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-semibold">Rating</span>
                </div>
                <p className="font-serif text-lg font-bold">4.6/5.0</p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Arabuko-Sokoke Forest Reserve is East Africa's largest surviving coastal forest and one of the world's
                most important biodiversity hotspots. Covering 420 square kilometers, this ancient forest is home to
                several globally endangered species found nowhere else on Earth, making it a paradise for nature
                enthusiasts and researchers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The forest offers exceptional bird watching opportunities with over 230 recorded species, including six
                globally threatened birds. It also harbors rare mammals like the golden-rumped elephant shrew and Ader's
                duiker, plus hundreds of butterfly species in a mystical, cathedral-like forest setting.
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Forest Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Endemic Bird Species",
                    desc: "Six globally threatened birds including Clarke's weaver and Amani sunbird",
                  },
                  {
                    title: "Rare Butterflies",
                    desc: "Over 250 butterfly species including endemic Charaxes variants",
                  },
                  {
                    title: "Golden-rumped Elephant Shrew",
                    desc: "Critically endangered mammal found only in this forest",
                  },
                  {
                    title: "Ancient Forest Trails",
                    desc: "Well-maintained hiking paths through three distinct forest types",
                  },
                  {
                    title: "Kipepeo Butterfly Farm",
                    desc: "Community project breeding butterflies for conservation and income",
                  },
                  {
                    title: "Tree Canopy Walkway",
                    desc: "Elevated platforms offering bird's-eye views of the forest canopy",
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
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Full-Day Forest Experience</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Nature & Wildlife Day</h3>
                  {[
                    { time: "06:30 AM", desc: "Early departure for prime bird watching hours" },
                    { time: "07:00 AM", desc: "Arrive at forest gate, meet local guide and birding expert" },
                    { time: "07:30 AM", desc: "Begin guided forest walk on Nyari Trail (3km)" },
                    { time: "09:00 AM", desc: "Visit Kipepeo Butterfly Project and butterfly farm" },
                    { time: "10:30 AM", desc: "Tea break at forest visitor center" },
                    { time: "11:00 AM", desc: "Continue to Gede Trail for primate and mammal spotting" },
                    { time: "01:00 PM", desc: "Picnic lunch in designated forest clearing" },
                    { time: "02:00 PM", desc: "Afternoon walk on Baobab Trail with canopy access" },
                    { time: "03:30 PM", desc: "Photography session and final wildlife observations" },
                    { time: "04:30 PM", desc: "Depart forest and return to accommodation" },
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
                    "Forest entrance and conservation fees",
                    "Expert birding guide and tracker",
                    "Kipepeo Butterfly Project visit",
                    "Packed picnic lunch",
                    "Bottled water throughout",
                    "Field guides and bird checklists",
                    "Donation to forest conservation",
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
                    "Binoculars (essential for bird watching)",
                    "Camera with telephoto lens",
                    "Comfortable hiking boots",
                    "Long pants and long-sleeved shirt",
                    "Insect repellent",
                    "Sun hat and sunscreen",
                    "Field notebook and pen",
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
                Bird watching and wildlife viewing are excellent year-round, with seasonal variations:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">November - March (Peak)</h4>
                  <p className="text-sm text-muted-foreground">
                    Migratory birds present, ideal weather, and maximum butterfly activity
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">June - September (Good)</h4>
                  <p className="text-sm text-muted-foreground">
                    Resident species active, cooler temperatures for hiking
                  </p>
                </div>
              </div>
            </div>

            {/* Conservation Info */}
            <div className="mb-12 p-6 bg-green-50 rounded-xl border border-green-200">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Conservation Importance</h3>
              <ul className="space-y-2">
                {[
                  "Designated Important Bird Area (IBA) by BirdLife International",
                  "Part of the Eastern Arc Mountains biodiversity hotspot",
                  "Home to 6 globally threatened and 6 near-threatened bird species",
                  "Critical habitat for 5 globally threatened mammal species",
                  "Your visit directly supports community conservation efforts",
                  "Kipepeo Project provides sustainable income to 300+ local families",
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
                <p className="font-semibold text-foreground mb-4">Ready to explore Africa's rarest coastal forest?</p>
                <Link
                  href="/#booking"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                >
                  Book Your Forest Adventure
                </Link>
              </div>
            </div>

            {/* Booking Form */}
            <PackageBookingForm packageName="Arabuko-Sokoke Forest Reserve" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
