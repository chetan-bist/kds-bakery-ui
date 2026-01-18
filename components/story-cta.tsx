export default function StoryCta() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-serif text-4xl font-bold">Ready to taste the story?</h2>
        <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Join us in celebrating the art of traditional baking. Visit our store or order online for door-step delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
            Order Online
          </button>
          <button className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors">
            Find a Location
          </button>
        </div>
      </div>
    </section>
  )
}
