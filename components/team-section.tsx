import Image from "next/image"

export default function TeamSection() {
  const team = [
    {
      name: "Elena Rossi",
      role: "With 15 years of experience in Parisian patisseries, Elena brings a touch of refined elegance to every creation.",
      image: "/images/image-1.jpg",
    },
    {
      name: "Marcus Thorne",
      role: "Marcus is our master Sourdough expert, emphasizing tradition, quality and sustainable ingredients in every batch.",
      image: "/images/image-2.jpg",
    },
    {
      name: "Sofia Chen",
      role: "Sofia loves to craft modern delicacies. She turns traditional recipes using all natural ingredients and modern flair.",
      image: "/images/image-3.jpg",
    },
  ]

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        <div className="bg-foreground text-background rounded-3xl px-8 md:px-16 py-16 md:py-24">
          <h2 className="font-serif text-4xl font-bold text-center mb-4">
            Meet the Hands Behind the Dough
          </h2>

          <p className="text-center text-background/80 text-lg mb-16 max-w-2xl mx-auto">
            Our team of master bakers brings decades of expertise and passion to every loaf, pastry, and cake.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="space-y-4">
                <div className="relative h-72 rounded-2xl overflow-hidden bg-background/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold text-background">
                  {member.name}
                </h3>

                <p className="text-background/80 leading-relaxed text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
