"use client";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <p className="text-xs font-bold text-primary/60 tracking-widest uppercase mb-4">
              Artisanal & Handcrafted
            </p>
            <h1 className="serif-title font-serif text-[48px] mb-4 text-xl text-primary">Freshly Baked</h1>
            <p className="serif-subtitle font-serif text-[30px] text-primary/70">with Love</p>
          </div>
          <p className="text-foreground/70 leading-relaxed max-w-md text-sm">
            Experience the warmth of artisanal baking with our signature cakes
            and pastries, handcrafted daily using only organic, locally-sourced
            ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary text-primary-foreground rounded-full px-8">
              Start Your Order
            </Button>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary rounded-full px-8 hover:bg-primary/5 bg-transparent"
            >
              Custom Request
            </Button>
          </div>
          {/* Trust Section */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background"
                />
              ))}
            </div>
            <p className="text-xs text-foreground/60">
              Trusted by 2,000+ local dessert lovers
            </p>
          </div>
        </div>
        {/* Right Image */}
        <div className="relative">
          <div className="bg-gradient-to-b from-[#1a2332] to-[#2d3f4f] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/layered-berry-chantilly-cake-on-cake-stand.png"
              alt="Berry Chantilly Dreams Cake"
              className="w-full h-auto"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-primary/60 tracking-widest uppercase">
                  Featured Today
                </p>
                <p className="font-serif text-lg text-primary">
                  Berry Chantilly Dreams
                </p>
              </div>
              <button className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
