"use client"

import type React from "react"

import { useState } from "react"
import {
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle,
  X,
  Shield,
  CreditCard,
  Lock,
} from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    vehicle: "",
    tripType: "",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showSecureBookingModal, setShowSecureBookingModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitStatus !== "idle") {
      setSubmitStatus("idle")
    }
  }

  const handleProceed = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.pickup ||
      !formData.dropoff ||
      !formData.date ||
      !formData.time
    ) {
      setSubmitStatus("error")
      setErrorMessage("Please fill in all required fields")
      return
    }

    setShowSecureBookingModal(true)
  }

  const handleConfirmBooking = async () => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      emailjs.init("3Zv-eJbyMM9GKmH-k")

      const adminResult = await emailjs.send("service_m4fhkgu", "template_lrphgmf", {
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        pickup_location: formData.pickup,
        dropoff_location: formData.dropoff,
        date: formData.date,
        time: formData.time,
        vehicle_type: formData.vehicle || "Not specified",
        trip_type: formData.tripType || "Not specified",
        notes: formData.notes || "No additional notes",
      })

      if (adminResult.status === 200) {
        setSubmitStatus("success")
        setShowSecureBookingModal(false)
        setShowSuccessModal(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          pickup: "",
          dropoff: "",
          date: "",
          time: "",
          vehicle: "",
          tripType: "",
          notes: "",
        })
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")
      setErrorMessage("Failed to send booking request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePesapalPayment = () => {
    // TODO: Integrate Pesapal payment gateway here
    // After successful payment, call handleConfirmBooking()
    handleConfirmBooking()
  }

  const depositAmount = 2000 // KES - configurable deposit amount

  return (
    <section id="booking" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
              <span className="text-sm font-semibold text-primary">BOOK YOUR TRIP</span>
            </div>

            <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Ready for Your Adventure?</h2>

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900">Booking Request Failed</p>
                  <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleProceed}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition w-full"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="pickup"
                  placeholder="Pickup Location"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                  className="bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
                <input
                  type="text"
                  name="dropoff"
                  placeholder="Drop-off Location"
                  value={formData.dropoff}
                  onChange={handleChange}
                  required
                  className="bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="4-seater">4-Seater Van</option>
                  <option value="6-seater">6-Seater Van</option>
                  <option value="10-seater">10-Seater Van</option>
                  <option value="11-seater">11-Seater Van</option>
                  <option value="safari-cruiser">Safari Cruiser</option>
                  <option value="taxi">Private Taxi</option>
                  <option value="self-drive">Self-Drive Vehicle</option>
                </select>

                <select
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  className="bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                  <option value="">Trip Type</option>
                  <option value="game-drive">Game Drive</option>
                  <option value="road-trip">Road Trip</option>
                  <option value="transfer">Airport Transfer</option>
                  <option value="custom">Custom Tour</option>
                </select>
              </div>

              <textarea
                name="notes"
                placeholder="Additional Notes or Special Requests"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 rounded-lg font-bold text-lg hover:opacity-90 transition"
              >
                PROCEED
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">Contact Us</h3>

              <div className="space-y-6">
                <a
                  href="tel:+254723471093"
                  className="flex items-start gap-4 group hover:bg-white p-4 rounded-lg transition"
                >
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Call Us</p>
                    <p className="text-lg font-bold text-foreground group-hover:text-primary transition">
                      +254 723 471 093
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/254723471093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group hover:bg-white p-4 rounded-lg transition"
                >
                  <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">WhatsApp</p>
                    <p className="text-lg font-bold text-foreground group-hover:text-primary transition">
                      Message Us Now
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Location</p>
                    <p className="text-lg font-bold text-foreground">Voi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">Available</p>
                    <p className="text-lg font-bold text-foreground">24/7 Operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-bold text-foreground">Our Location</h4>
                  <a
                    href="https://maps.app.goo.gl/1vjKTfC2TNZuGEL36"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline font-semibold flex items-center gap-1"
                  >
                    <MapPin className="w-4 h-4" />
                    View Map
                  </a>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/1vjKTfC2TNZuGEL36"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group cursor-pointer"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.144821636628!2d38.54933629999999!3d-3.3886664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183fe91c9e9c0001%3A0x1e1e1e1e1e1e1e1e!2sVoi%2C%20Kenya!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none"
                  title="Mzedu Tours - Voi, Kenya"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-primary">
                    <p className="text-primary font-semibold text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Open in Google Maps
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {showSecureBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 text-center relative">
              <button
                onClick={() => setShowSecureBookingModal(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Secure Your Booking</h3>
              <p className="text-white/80 mt-2 text-sm">Pay a deposit now, complete payment on adventure day</p>
            </div>

            {/* Booking Summary */}
            <div className="p-6 space-y-6">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Booking Summary
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium text-foreground">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium text-foreground">{formData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium text-foreground">{formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pickup:</span>
                    <span className="font-medium text-foreground">{formData.pickup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Drop-off:</span>
                    <span className="font-medium text-foreground">{formData.dropoff}</span>
                  </div>
                  {formData.vehicle && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vehicle:</span>
                      <span className="font-medium text-foreground">{formData.vehicle}</span>
                    </div>
                  )}
                  {formData.tripType && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Trip Type:</span>
                      <span className="font-medium text-foreground">{formData.tripType}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Deposit Amount */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-green-600" />
                      Booking Deposit
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">Non-refundable deposit to secure your booking</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">KES {depositAmount.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-blue-900">Secure Payment via Pesapal</p>
                  <p className="text-blue-700 mt-1">
                    Your payment is processed securely. The remaining balance will be collected on the day of your
                    adventure.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handlePesapalPayment}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Processing..."
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      PAY KES {depositAmount.toLocaleString()} DEPOSIT
                    </>
                  )}
                </button>

                <button
                  onClick={() => setShowSecureBookingModal(false)}
                  className="w-full border border-border text-muted-foreground py-3 rounded-xl font-medium hover:bg-muted/50 transition"
                >
                  Cancel
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 pt-2 border-t border-border">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  Secure
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  Encrypted
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <CheckCircle className="w-4 h-4" />
                  Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal - unchanged */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in duration-300">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 text-center relative">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Booking Confirmed!</h3>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-center text-foreground text-lg">
                Thank you for choosing <strong className="text-primary">Mzedu Tours & Travels</strong>!
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  We've received your booking request and sent a confirmation email to your address. Our team will
                  contact you within 2-4 hours to finalize the details.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Email confirmation sent</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">We'll call you shortly</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Available 24/7 on WhatsApp</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <a
                  href="https://wa.me/254723471093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold text-center hover:bg-green-600 transition"
                >
                  WhatsApp Us
                </a>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1 bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
