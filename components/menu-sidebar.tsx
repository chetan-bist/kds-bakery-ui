"use client"

interface MenuSidebarProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

const categories = [
  { id: "ready-made-cakes", label: "Ready-made Cakes", icon: "🎂" },
  { id: "artisanal-pastries", label: "Artisanal Pastries", icon: "🥐" },
  { id: "fresh-breads", label: "Fresh Breads", icon: "🍞" },
  { id: "cookies-bites", label: "Cookies & Bites", icon: "🍪" },
  { id: "gift-boxes", label: "Gift Boxes", icon: "🎁" },
]

export default function MenuSidebar({ selectedCategory, onSelectCategory }: MenuSidebarProps) {
  return (
    <aside className="w-64 bg-background border-r border-border p-6 sticky top-24">
      <div className="space-y-8">
        {/* Menu Categories */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Menu Categories
          </h3>
          <nav className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Custom Order */}
        <div className="pt-6 border-t border-border">
          <h3 className="text-sm font-semibold mb-3">Custom Order?</h3>
          <p className="text-sm text-muted-foreground mb-4">Design your own cake for birthdays, weddings & more.</p>
          <button className="w-full bg-primary text-primary-foreground py-2 rounded-full font-semibold hover:opacity-90 transition">
            Request Quote
          </button>
        </div>
      </div>
    </aside>
  )
}
