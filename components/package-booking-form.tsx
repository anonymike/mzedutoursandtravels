"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MessageCircle, MapPin, Calendar } from "lucide-react"

interface PackageBookingFormProps {
  packageName: string
}

export default function PackageBookingForm({ packageName }: PackageBookingFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    vehicleType: "",
    tripType: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - could integrate with WhatsApp or email
    const message = `New Booking Request for ${packageName}:\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nPickup: ${formData.pickup}\nDrop-off: ${formData.dropoff}\nDate: ${formData.date}\nTime: ${formData.time}\nVehicle: ${formData.vehicleType}\nTrip Type: ${formData.tripType}\nNotes: ${formData.notes}`
    const whatsappUrl = `https://wa.me/254723471093?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="package-booking" className="py-16 px-6 md:px-12 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-primary font-semibold tracking-wide text-sm">BOOK YOUR TRIP</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Ready for Your Adventure?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="pickup"
                  placeholder="Pickup Location"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <input
                  type="text"
                  name="dropoff"
                  placeholder="Drop-off Location"
                  value={formData.dropoff}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-muted-foreground"
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="4x4-safari">4x4 Safari Vehicle</option>
                  <option value="minivan">Minivan (7-seater)</option>
                  <option value="sedan">Sedan</option>
                  <option value="luxury-suv">Luxury SUV</option>
                  <option value="tour-bus">Tour Bus</option>
                </select>
                <select
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-muted-foreground"
                >
                  <option value="">Trip Type</option>
                  <option value="game-drive">Game Drive Safari</option>
                  <option value="beach-trip">Beach Trip</option>
                  <option value="city-tour">City Tour</option>
                  <option value="airport-transfer">Airport Transfer</option>
                  <option value="custom">Custom Trip</option>
                </select>
              </div>

              <textarea
                name="notes"
                placeholder="Additional Notes or Special Requests"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
              >
                Start Planning Your Trip
              </button>
            </form>
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-8">Contact Us</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <a
                      href="tel:+254723471093"
                      className="font-bold text-foreground hover:text-primary transition-colors"
                    >
                      +254 723 471 093
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/254723471093"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-foreground hover:text-primary transition-colors"
                    >
                      Message Us Now
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-bold text-foreground">Voi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Available</p>
                    <p className="font-bold text-foreground">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
