export default function OurMilestones() {
  const milestones = [
    {
      year: "1991",
      title: "The Humble Beginning",
      description:
        "Started from a 200sq ft kitchen, our founder began experimenting with traditional sourdough and heritage grains, sharing loaves with neighbors.",
    },
    {
      year: "1998",
      title: "Expanding the Oven",
      description:
        "As word spread about our delicious bread, we moved out first storefront in the heart of the city, bringing the aroma of fresh baking to the streets.",
    },
    {
      year: "1991",
      title: "A Local Landmark",
      description:
        "Now a beloved landmark, KDS Bakery stands for excellence in artisanal baking, serving over 500 bread lovers daily.",
    },
  ]

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-center mb-4">Our Milestones</h2>
        <div className="w-16 h-1 bg-primary/30 mx-auto mb-16"></div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-8 md:gap-12 items-start">
              <div className="shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border-2 border-primary">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <span className="text-sm font-medium text-muted-foreground tracking-wide">{milestone.year}</span>
                <h3 className="font-serif text-2xl font-bold text-foreground mt-2">{milestone.title}</h3>
                <p className="text-foreground/70 leading-relaxed mt-3">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
