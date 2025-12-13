import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Fleet from "@/components/fleet"
import Packages from "@/components/packages"
import Booking from "@/components/booking"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16">
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Packages />
        <Booking />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
