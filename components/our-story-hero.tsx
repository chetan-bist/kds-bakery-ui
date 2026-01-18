import Image from "next/image"

export default function OurStoryHero() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="text-sm font-medium text-muted-foreground tracking-wide">SEPT 2024</span>
          <h1 className="serif-title text-4xl md:text-5xl">
            From a Home Kitchen
            <span className="block font-serif text-3xl md:text-4xl italic font-light text-primary/70">
              to Your Heart
            </span>
          </h1>
          <p className="text-foreground/70 leading-relaxed text-lg">
            Discover the artisanal journey of KDS Bakery, where every recipe tells a story of passion, hand-crafted
            perfection, and the simply joy of baking.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
              Explore Our Menu
            </button>
            <button className="px-8 py-3 border border-foreground/20 text-foreground rounded-full font-medium hover:bg-foreground/5 transition-colors">
              View Gallery
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 md:h-125 rounded-3xl overflow-hidden shadow-lg">
          <Image src="/bread-baker-hands.jpg" alt="Baker crafting bread with care" fill className="object-cover" priority />
          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg max-w-xs">
            <p className="font-serif italic text-primary text-lg text-balance">"The best bread in town"</p>
          </div>
        </div>
      </div>
    </section>
  )
}
