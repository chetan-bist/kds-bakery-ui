"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MenuSidebar from "@/components/menu-sidebar"
import MenuProducts from "@/components/menu-products"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("ready-made-cakes")

  return (
    <main className="bg-background">
      <Header />
      <div className="flex min-h-screen bg-background">
        <MenuSidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <MenuProducts category={selectedCategory} />
      </div>
      <Footer />
    </main>
  )
}
