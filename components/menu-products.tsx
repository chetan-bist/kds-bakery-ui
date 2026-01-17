"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

interface MenuProductsProps {
  category: string
}

const products = {
  "ready-made-cakes": [
    {
      id: 1,
      name: "Vanilla Bean Cloud",
      price: 42,
      rating: 4.8,
      reviews: 120,
      description: "Six layers of velvety sponge with hand-scraped vanilla frosting.",
      image: "/vanilla-bean-cloud-cake.jpg",
      badge: "BESTSELLER",
    },
    {
      id: 2,
      name: "Salted Caramel Noir",
      price: 48,
      rating: 4.8,
      reviews: 89,
      description: "70% dark cocoa layers with house-made sea salt caramel drizzle.",
      image: "/salted-caramel-chocolate-cake.jpg",
      badge: null,
    },
    {
      id: 3,
      name: "Lemon Berry Bliss",
      price: 38,
      rating: 4.7,
      reviews: 92,
      description: "Zesty lemon curd paired with fresh organic raspberries.",
      image: "/lemon-berry-tart-dessert.jpg",
      badge: "VEGAN FRIENDLY",
    },
    {
      id: 4,
      name: "Red Velvet Classic",
      price: 45,
      rating: 4.9,
      reviews: 210,
      description: "Buttermilk-based cocoa cake with signature whipped cream cheese.",
      image: "/red-velvet-cake-layers.jpg",
      badge: null,
    },
    {
      id: 5,
      name: "Pistachio Dream",
      price: 54,
      rating: 5,
      reviews: 18,
      description: "Toasted Mediterranean pistachios and a hint of Persian rose water.",
      image: "/pistachio-green-cake.jpg",
      badge: null,
    },
    {
      id: 6,
      name: "The Tiramisu Layer",
      price: 50,
      rating: 4.8,
      reviews: 44,
      description: "Espresso-soaked sponge with mascarpone cream and Dutch cocoa.",
      image: "/tiramisu-layered-cake.jpg",
      badge: null,
    },
  ],
  "artisanal-pastries": [
    {
      id: 7,
      name: "Butter Croissant",
      price: 5.5,
      rating: 4.9,
      reviews: 340,
      description: "Traditional French laminated pastry with premium French butter.",
      image: "/croissant-butter-pastry.jpg",
      badge: "BESTSELLER",
    },
    {
      id: 8,
      name: "Chocolate Éclair",
      price: 6.5,
      rating: 4.8,
      reviews: 205,
      description: "Choux pastry filled with vanilla cream and topped with dark chocolate.",
      image: "/chocolate-eclair.png",
      badge: null,
    },
    {
      id: 9,
      name: "Almond Tart",
      price: 7,
      rating: 4.7,
      reviews: 128,
      description: "Crispy pastry shell with almond cream filling and toasted almonds.",
      image: "/almond-tart-dessert.jpg",
      badge: null,
    },
  ],
  "fresh-breads": [
    {
      id: 10,
      name: "Sourdough Loaf",
      price: 8,
      rating: 4.9,
      reviews: 450,
      description: "48-hour fermented sourdough with a crispy crust and open crumb.",
      image: "/sourdough-loaf.png",
      badge: "BESTSELLER",
    },
    {
      id: 11,
      name: "Focaccia Rosemary",
      price: 6,
      rating: 4.8,
      reviews: 195,
      description: "Soft olive oil dough topped with fresh rosemary and sea salt.",
      image: "/focaccia-rosemary-bread.jpg",
      badge: null,
    },
  ],
  "cookies-bites": [
    {
      id: 12,
      name: "Dark Chocolate Cookie",
      price: 3.5,
      rating: 4.9,
      reviews: 580,
      description: "Chewy centers with 70% dark chocolate chips and sea salt.",
      image: "/dark-chocolate-cookie.jpg",
      badge: "BESTSELLER",
    },
  ],
  "gift-boxes": [
    {
      id: 13,
      name: "Assorted Treats Box",
      price: 35,
      rating: 4.8,
      reviews: 92,
      description: "Curated selection of our bestselling pastries and cookies.",
      image: "/assorted-pastries-gift-box.jpg",
      badge: null,
    },
  ],
}

export default function MenuProducts({ category }: MenuProductsProps) {
  const [sortBy, setSortBy] = useState("popularity")
  const categoryProducts = products[category as keyof typeof products] || []

  const filters = ["All Cakes", "Gluten-free", "Vegan", "Celebration", "Petite"]

  return (
    <div className="flex-1 p-8">
      {/* Free Delivery Banner */}
      <div className="mb-8 bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center gap-3">
        <span className="text-2xl">🚚</span>
        <div>
          <p className="font-semibold text-foreground">Free delivery on orders above $50.</p>
          <a href="#" className="text-orange-600 text-sm font-medium hover:underline">
            Check eligibility
          </a>
        </div>
      </div>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Ready-made Cakes</h1>
        <p className="text-muted-foreground">
          Baked fresh this morning using premium Madagascar vanilla and organic stone-ground flour.
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-full bg-secondary text-foreground font-medium hover:bg-muted transition text-sm"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition">
            <span>Filters</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-2 rounded-lg bg-secondary text-foreground font-medium cursor-pointer pr-8"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {categoryProducts.map((product) => (
          <div key={product.id} className="flex flex-col">
            {/* Product Image */}
            <div className="relative mb-4 rounded-2xl overflow-hidden bg-gray-900 h-80">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              {product.badge && (
                <div className="absolute top-4 right-4 bg-white text-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Product Info */}
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">{product.name}</h3>
            <p className="text-muted-foreground text-sm mb-3 flex-grow">{product.description}</p>

            {/* Price and Rating */}
            <div className="flex items-center justify-between">
              <span className="font-bold text-foreground">${product.price.toFixed(2)}</span>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★</span>
                <span className="text-sm font-medium text-foreground">
                  {product.rating} ({product.reviews})
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-2 font-semibold transition flex items-center justify-center gap-2">
              <span>+</span>
              <span>Add</span>
            </button>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <p className="text-muted-foreground mb-4">Showing 6 of 24 ready-made cakes</p>
        <button className="px-8 py-3 bg-secondary text-foreground rounded-full font-semibold hover:bg-muted transition">
          Load More Artisanal Cakes
        </button>
      </div>
    </div>
  )
}
