"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
            <span className="text-sm font-semibold text-primary">GET IN TOUCH</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-primary to-accent rounded-full" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Plan Your Adventure</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {/* Phone */}
          <a
            href="tel:+254723471093"
            className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border group"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-2">Call Us</h3>
            <p className="text-primary font-semibold hover:underline">+254 723 471 093</p>
            <p className="text-primary font-semibold hover:underline">+254 722 705 824</p>
            <p className="text-primary font-semibold hover:underline">+254 745 428 933</p>
            <p className="text-sm text-muted-foreground mt-2">Available 24/7</p>
          </a>

          {/* Email */}
          <a
            href="mailto:mzedutoursandtravels01@gmail.com"
            className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border group"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-2">Email Us</h3>
            <p className="text-primary font-semibold hover:underline break-all">mzedutoursandtravels01@gmail.com</p>
            <p className="text-sm text-muted-foreground mt-2">Response within 24h</p>
          </a>

          {/* Location */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-border">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-2">Visit Us</h3>
            <p className="text-foreground font-semibold">Voi, Taita Taveta</p>
            <p className="text-sm text-muted-foreground mt-2">Opposite AIC Church</p>
            <p className="text-sm text-muted-foreground">Before Wells spring Enterprises</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Our Location</h3>
                  <p className="text-muted-foreground">Voi, Taita Taveta County, Kenya</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/1vjKTfC2TNZuGEL36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition font-semibold"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
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
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none"
                title="Mzedu Tours & Travels Location - Voi, Taita Taveta, Kenya"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary">
                  <p className="text-primary font-semibold flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Click to open interactive map
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
