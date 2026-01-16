"use client"

import { Button } from "@/components/ui/button"
import { Share2, Settings } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded"></div>
              <span className="font-serif text-lg font-bold text-primary">KDS Bakery</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Crafting joy and sweetness since 2012. Our mission is to bring traditional baking techniques into the
              modern kitchen.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="p-2 hover:bg-secondary rounded-lg transition">
                <Share2 className="w-4 h-4 text-foreground/60" />
              </button>
              <button className="p-2 hover:bg-secondary rounded-lg transition">
                <Settings className="w-4 h-4 text-foreground/60" />
              </button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif font-bold text-primary mb-6">SHOP</h3>
            <ul className="space-y-3">
              {["Daily Menu", "Cake Collection", "Bulk Orders", "Gift Cards"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/70 hover:text-foreground text-sm transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="font-serif font-bold text-primary mb-6">VISIT US</h3>
            <p className="text-foreground/70 text-sm mb-4">
              123 Patisserie Ave.
              <br />
              Bakersfield, CA 93301
            </p>
            <p className="text-foreground/70 text-sm">
              Mon - Sat: 7am - 6pm
              <br />
              Sun: 8am - 4pm
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-bold text-primary mb-6">SWEET NEWS</h3>
            <p className="text-foreground/70 text-sm mb-4">Subscribe for early access to seasonal launches.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full bg-primary text-primary-foreground rounded-lg">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/60">
            <p>© 2026 KDS Bakery. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
