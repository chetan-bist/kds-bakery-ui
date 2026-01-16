import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function CustomCakes() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-r from-primary to-primary/80 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center text-white">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                Your Dream Cake,
                <br />
                Hand-Designed.
              </h2>
              <p className="text-white/90 mb-8 leading-relaxed text-lg">
                From weddings to whimsical birthdays, we collaborate with you to
                create a centerpiece that tastes as extraordinary as it looks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 font-medium">
                  <Mail className="w-4 h-4 mr-2" />
                  Consult a Baker
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 font-medium bg-transparent"
                >
                  View Wedding Gallery
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <img
                src="/baker-decorating-custom-three-tier-floral-wedding-.jpg"
                alt="Custom cake design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
