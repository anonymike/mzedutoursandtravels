import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service | Mzedu Tours & Travels",
  description: "Terms of Service for Mzedu Tours & Travels - Read our service terms and conditions",
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/90">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the services of Mzedu Tours & Travels ("Company", "we", "our", or "us"), you agree
              to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mzedu Tours & Travels provides safari tours, transport services, car hire, and related travel services in
              Kenya. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Game drives and wildlife safari tours</li>
              <li>Road trips and coastal tours</li>
              <li>Vehicle hire with or without drivers</li>
              <li>Airport transfers and transportation services</li>
              <li>Custom tour packages</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Booking and Payments</h2>
            <h3 className="font-semibold text-lg text-foreground mb-3">Booking Process</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All bookings are subject to availability and confirmation by Mzedu Tours & Travels. A booking is confirmed
              only when you receive written confirmation from us via email or WhatsApp.
            </p>

            <h3 className="font-semibold text-lg text-foreground mb-3">Payment Terms</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>A deposit may be required to secure your booking</li>
              <li>Full payment must be made before or on the date of service unless otherwise agreed</li>
              <li>Payment methods include bank transfer, mobile money (M-Pesa), and cash</li>
              <li>All prices are quoted in Kenyan Shillings (KES) or US Dollars (USD)</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">Price Changes</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to adjust prices due to changes in fuel costs, park fees, or other external factors.
              Confirmed bookings will honor the originally quoted price.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Cancellations and Refunds</h2>
            <h3 className="font-semibold text-lg text-foreground mb-3">Customer Cancellations</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Cancellations more than 7 days before service: Full refund minus 10% processing fee</li>
              <li>Cancellations 3-7 days before service: 50% refund</li>
              <li>Cancellations less than 3 days before service: No refund</li>
              <li>No-shows: No refund</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">Company Cancellations</h3>
            <p className="text-muted-foreground leading-relaxed">
              If we must cancel your service due to circumstances beyond our control (weather, vehicle breakdown, etc.),
              we will offer a full refund or reschedule at no additional cost.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Customer Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">As a customer, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete information during booking</li>
              <li>Arrive at designated pickup locations on time</li>
              <li>Respect our vehicles, equipment, and staff</li>
              <li>Follow safety guidelines and instructions from our guides</li>
              <li>Carry valid identification and necessary travel documents</li>
              <li>Inform us of any medical conditions or special requirements</li>
              <li>Comply with Kenya's laws and park regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Vehicle Hire Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">For self-drive vehicle rentals:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Valid driver's license required (minimum 2 years experience)</li>
              <li>Security deposit required and refundable upon vehicle return</li>
              <li>Fuel policy: Return with the same fuel level or pay refueling charges</li>
              <li>Customer responsible for traffic fines and parking fees</li>
              <li>Insurance coverage included; deductible applies for damages</li>
              <li>Vehicles must be returned on time; late fees apply</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Liability and Insurance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mzedu Tours & Travels maintains comprehensive insurance for our vehicles and operations. However:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>We are not liable for loss or damage to personal belongings</li>
              <li>We are not responsible for delays caused by weather, traffic, or other external factors</li>
              <li>
                Customers are responsible for damages to vehicles caused by negligence or violation of rental terms
              </li>
              <li>We recommend customers obtain personal travel insurance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Safety and Conduct</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We prioritize the safety of all passengers. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Refuse service to intoxicated or disruptive passengers</li>
              <li>Terminate service without refund for violations of safety rules</li>
              <li>Modify itineraries for safety reasons</li>
              <li>Implement additional safety measures as needed</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. Wildlife and Nature Tours</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">During wildlife tours:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Wildlife sightings are not guaranteed as animals are in their natural habitat</li>
              <li>Follow guide instructions at all times for your safety</li>
              <li>Do not feed or disturb wildlife</li>
              <li>Respect park rules and environmental regulations</li>
              <li>We are not liable for actions of wild animals</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">10. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on our website, including text, images, logos, and graphics, is the property of Mzedu Tours &
              Travels and protected by copyright laws. You may not use our content without written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">11. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these terms or our services shall be governed by the laws of Kenya. We encourage
              customers to contact us directly to resolve any issues before pursuing legal action.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective when posted
              on our website. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">13. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <p className="text-foreground font-semibold mb-2">Mzedu Tours & Travels</p>
              <p className="text-muted-foreground mb-1">Voi, Taita Taveta, Kenya</p>
              <p className="text-muted-foreground mb-1">Opposite AIC Church, Near Voi Cemetery</p>
              <p className="text-muted-foreground mb-1">Phone: +254 723 471 093 / +254 722 705 824</p>
              <p className="text-muted-foreground mb-3">Email: info@mzedutours.com</p>
              <p className="text-muted-foreground text-sm">WhatsApp: +254 723 471 093</p>
            </div>
          </section>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-12">
            <p className="text-sm text-muted-foreground text-center">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these
              Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
