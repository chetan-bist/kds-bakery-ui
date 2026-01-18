import { Users, Clock, Leaf } from "lucide-react"

export default function QualityCommitment() {
  const commitments = [
    {
      icon: Leaf,
      title: "Premium Ingredients",
      description:
        "Sourced from the finest local organic farms and premium international suppliers to ensure unmatched quality.",
    },
    {
      icon: Clock,
      title: "Touch Free Baking",
      description:
        "State-of-the-art facility designed to minimize contact, safety and environmental care at highest production.",
    },
    {
      icon: Users,
      title: "Daily Fresh Batches",
      description:
        "Baked from scratch every single morning starting at 3 AM, we ensure the perfect precision every day.",
    },
  ]

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-bold mb-3">Our Commitment to</h2>
        <h3 className="font-serif text-3xl italic font-light text-primary/70 mb-16">Quality & Hygiene</h3>

        <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mb-16">
          We believe that the best flavor comes from the cleanest environment and the finest ingredients. Our standards
          aren't just met, they're exceeded every morning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon
            return (
              <div
                key={index}
                className="space-y-4 p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground">{commitment.title}</h4>
                <p className="text-foreground/70 leading-relaxed">{commitment.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
