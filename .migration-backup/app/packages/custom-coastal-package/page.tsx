"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PackageBookingForm from "@/components/package-booking-form"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Camera, Shield, Star, Check } from "lucide-react"

export default function CustomCoastalPackage() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src="/kenya-coastal-adventure-with-beaches-and-safari-co.jpg"
            alt="Custom Coastal Package"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <Link href="/#packages" className="inline-flex items-center gap-2 text-white hover:text-accent mb-4">
              <ArrowLeft className="w-5 h-5" />
              Back to Packages
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
              Custom Coastal Package
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
                <p className="font-serif text-lg font-bold">Your Choice</p>
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
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Your Journey, Your Way</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Design your perfect coastal Kenya experience with our fully customizable package. Whether you're
                planning a romantic getaway, family vacation, adventure expedition, or cultural exploration, we'll craft
                an itinerary that matches your interests, budget, and schedule perfectly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combine any of our featured destinations - from wildlife safaris in Tsavo to snorkeling in marine parks,
                cultural tours in Mombasa Old Town to relaxing beach days. Our experienced team will handle all
                logistics while you enjoy a seamless, personalized coastal adventure.
              </p>
            </div>

            {/* Available Destinations */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Choose Your Destinations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Wildlife & Nature",
                    options: [
                      "Tsavo National Park (East & West)",
                      "Shimba Hills Reserve",
                      "Arabuko-Sokoke Forest",
                      "Mzima Springs",
                    ],
                  },
                  {
                    title: "Marine & Water Activities",
                    options: [
                      "Mombasa Marine Park",
                      "Wasini Island Dolphins",
                      "Watamu Marine Park",
                      "Malindi Marine Park",
                    ],
                  },
                  {
                    title: "Cultural & Historical",
                    options: ["Fort Jesus Museum", "Gede Ruins", "Mombasa Old Town", "Swahili Village Tours"],
                  },
                  {
                    title: "Recreation & Leisure",
                    options: ["Haller Park", "Diani Beach", "Nyali Beach", "Beach Water Sports"],
                  },
                ].map((category, idx) => (
                  <div key={idx} className="p-5 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-foreground mb-3 text-lg">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.options.map((option, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary" />
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Itineraries */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Sample Custom Itineraries</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 p-4 bg-orange-50 rounded-r-lg">
                  <h3 className="text-xl font-bold text-foreground mb-3">Adventure Seeker (5 Days)</h3>
                  <ul className="space-y-2">
                    {[
                      "Day 1: Tsavo East game drive and overnight at luxury tented camp",
                      "Day 2: Tsavo West exploration, Mzima Springs, transfer to coast",
                      "Day 3: Snorkeling at Mombasa Marine Park and dolphin watching",
                      "Day 4: Shimba Hills hike to Sheldrick Falls",
                      "Day 5: Arabuko-Sokoke forest bird watching and departure",
                    ].map((day, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        <span className="text-muted-foreground">{day}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-accent pl-6 p-4 bg-amber-50 rounded-r-lg">
                  <h3 className="text-xl font-bold text-foreground mb-3">Family Fun (7 Days)</h3>
                  <ul className="space-y-2">
                    {[
                      "Day 1-2: Beach resort relaxation at Diani with water sports",
                      "Day 3: Haller Park visit and giraffe feeding experience",
                      "Day 4: Fort Jesus tour and Mombasa Old Town exploration",
                      "Day 5: Mombasa Marine Park snorkeling adventure",
                      "Day 6: Day trip to Shimba Hills with picnic lunch",
                      "Day 7: Beach day and optional spa treatments, departure",
                    ].map((day, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                        <span className="text-muted-foreground">{day}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6 p-4 bg-green-50 rounded-r-lg">
                  <h3 className="text-xl font-bold text-foreground mb-3">Culture & History (4 Days)</h3>
                  <ul className="space-y-2">
                    {[
                      "Day 1: Fort Jesus Museum and Mombasa Old Town walking tour",
                      "Day 2: Gede Ruins, Kipepeo Butterfly Project, local village visit",
                      "Day 3: Swahili cooking class and dhow sailing experience",
                      "Day 4: Mombasa spice market tour and craft shopping, departure",
                    ].map((day, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                        <span className="text-muted-foreground">{day}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Customization Options */}
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Customize Your Experience</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Accommodation",
                    items: [
                      "Budget guesthouses",
                      "Mid-range hotels",
                      "Luxury beach resorts",
                      "Eco-lodges",
                      "Private villas",
                    ],
                  },
                  {
                    title: "Transportation",
                    items: [
                      "Private safari vehicle",
                      "Luxury SUV",
                      "Minivan for groups",
                      "Airport transfers",
                      "Inter-city transport",
                    ],
                  },
                  {
                    title: "Activities",
                    items: ["Game drives", "Snorkeling & diving", "Cultural tours", "Beach activities", "Nature walks"],
                  },
                  {
                    title: "Meal Plans",
                    items: ["Full board", "Half board", "Breakfast only", "All-inclusive", "Restaurant selections"],
                  },
                  {
                    title: "Special Interests",
                    items: [
                      "Photography",
                      "Bird watching",
                      "Honeymoon packages",
                      "Family adventures",
                      "Solo travelers",
                    ],
                  },
                  {
                    title: "Add-ons",
                    items: [
                      "Spa treatments",
                      "Sunset dhow cruises",
                      "Hot air balloon rides",
                      "Helicopter tours",
                      "Diving courses",
                    ],
                  },
                ].map((option, idx) => (
                  <div key={idx} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-foreground mb-3">{option.title}</h4>
                    <ul className="space-y-1.5">
                      {option.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Standard Inclusions
                </h3>
                <ul className="space-y-3">
                  {[
                    "Personal trip planning consultation",
                    "All transportation as per itinerary",
                    "Accommodation of your choice",
                    "Professional guides and drivers",
                    "Park entrance and activity fees",
                    "Meals as per selected plan",
                    "24/7 support during your trip",
                    "Travel insurance assistance",
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
                  Planning Process
                </h3>
                <ul className="space-y-3">
                  {[
                    "Initial consultation to understand your preferences",
                    "Custom itinerary design within 48 hours",
                    "Unlimited revisions until perfect",
                    "Detailed quotation with transparent pricing",
                    "Booking confirmation and deposit",
                    "Pre-trip information packet",
                    "Final payment and trip documentation",
                    "Post-trip feedback and photos sharing",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div className="mb-12 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Flexible Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Our custom packages are tailored to your budget. Here's a general pricing guide per person:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">Budget Range</h4>
                  <p className="text-2xl font-bold text-primary mb-2">$80-150/day</p>
                  <p className="text-sm text-muted-foreground">
                    Basic accommodation, shared transport, essential activities
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-2 border-primary">
                  <h4 className="font-bold text-foreground mb-2">Mid-Range</h4>
                  <p className="text-2xl font-bold text-primary mb-2">$150-300/day</p>
                  <p className="text-sm text-muted-foreground">Comfortable hotels, private vehicle, more activities</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">Luxury</h4>
                  <p className="text-2xl font-bold text-primary mb-2">$300-600+/day</p>
                  <p className="text-sm text-muted-foreground">
                    5-star resorts, exclusive experiences, premium service
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-200 mb-12">
              <div className="bg-white p-6 rounded-lg border border-border text-center">
                <p className="font-semibold text-foreground mb-4">Ready to create your perfect coastal adventure?</p>
                <Link
                  href="/#booking"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                >
                  Start Planning Your Custom Trip
                </Link>
              </div>
            </div>

            {/* Booking Form */}
            <PackageBookingForm packageName="Custom Coastal Package" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
