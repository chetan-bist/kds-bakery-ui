"use client";

import { Search, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-6 h-6 bg-primary rounded"></div>
            <span className="font-serif text-xl font-bold text-primary">
              KDS Bakery
            </span>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 flex-1">
            <a
              href="#"
              className="text-foreground/70 hover:text-foreground text-sm"
            >
              Menu
            </a>
            <a
              href="#"
              className="text-foreground/70 hover:text-foreground text-sm"
            >
              Custom Cakes
            </a>
            <a
              href="#"
              className="text-foreground/70 hover:text-foreground text-sm"
            >
              Our Story
            </a>
            <a
              href="#"
              className="text-foreground/70 hover:text-foreground text-sm"
            >
              Gallery
            </a>
          </nav>
          {/* Search and Action */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
              <Search className="w-4 h-4 text-foreground/50" />
              <input
                type="text"
                placeholder="Find a treat...."
                className="bg-transparent outline-none text-sm w-32"
              />
            </div>
            <Button className="bg-primary text-primary-foreground rounded-full">
              Order Now
            </Button>
            <button className="p-2 hover:bg-secondary rounded-full transition">
              <LogIn className="w-5 h-5 text-primary"></LogIn>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
