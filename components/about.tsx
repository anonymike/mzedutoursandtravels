"use client"

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
            <span className="text-sm font-semibold text-primary">ABOUT US</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-primary to-accent rounded-full" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience Kenya's Wilderness
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              MZEDU TOURS & TRAVEL, TSAVO offers expertly crafted game drives, road trips, car hire, and private
              transport across Kenya. We prioritize safety, comfort, and unforgettable adventure experiences tailored to
              your travel needs.
            </p>

            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Tsavo's magnificent landscape, our team brings decades of expertise in crafting
              personalized safari experiences that connect you with Kenya's natural beauty and wildlife.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Tour Guides</p>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative h-96">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Top left - large image */}
              <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg">
                <img src="/safari-game-drive-vehicle-with-tourists.jpg" alt="Safari Game Drive" className="w-full h-full object-cover" />
              </div>

              {/* Top right */}
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition">
                <img src="/african-savanna-landscape-with-acacia-trees.jpg" alt="Savanna Landscape" className="w-full h-full object-cover" />
              </div>

              {/* Bottom right */}
              <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition">
                <img src="/wildlife-animals-zebras-and-antelopes-in-tsavo.jpg" alt="Tsavo Wildlife" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
