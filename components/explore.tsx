"use client";
const products = [
  {
    name: "Signature Chocolate",
    price: "Rs 2500.00",
    description: "Decadent triple-layered ganache with gold leaf accents",
    image: "/signature-chocolate-cake-layered.png",
    tag: "POPULAR",
  },
  {
    name: "Almond Croissant",
    price: "Rs 700.00",
    description: "Double-baked with house-made frangipane",
    image: "/almond-croissants-stacked.png",
    tag: null,
  },
  {
    name: "Heritage Sourdough",
    price: "Rs 1300.00",
    description: "48-hour cold fermented wild yeast loaf",
    image: "/rustic-sourdough-loaf.png",
    tag: null,
  },
  {
    name: "Petit Berry Tart",
    price: "Rs 900.00",
    description: "Madagascar vanilla bean custard & local berries",
    image: "/berry-tarts-with-cream.png",
    tag: null,
  },
];

export default function Explore() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="serif-title font-serif text-[48px] text-primary mb-2">Explore Our Bakery</h2>
          <p className="text-foreground/70 font-serif">
            From morning crusts to eventing delights
          </p>
        </div>
        {/* Category Tabs */}
        <div className="flex gap-4 mb-12 flex-wrap">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium">
            {" "}
            All Items
          </button>
          <button className="border border-primary/30 text-foreground px-6 py-2 rounded-full text-sm hover:bg-primary/5 transition">
            Cakes
          </button>
          <button className="border border-primary/30 text-foreground px-6 py-2 rounded-full text-sm hover:bg-primary/5 transition">
            Pastries
          </button>
          <button className="border border-primary/30 text-foreground px-6 py-2 rounded-full text-sm hover:bg-primary/5 transition">
            Breads
          </button>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-200 h-64">
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-background/95 backdrop-blur px-3 py-1 rounded-full z-10">
                    <p className="text-xs font-bold text-primary tracking-widest uppercase">
                      {product.tag}
                    </p>
                  </div>
                )}
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">
                {product.name}
              </h3>
              <p className="text-foreground/60 text-sm mb-3 min-h-10">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-primary">
                  {product.price}
                </span>
                <button className="text-primary/60 hover:text-primary transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
