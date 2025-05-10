import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-24 w-full max-w-screen-xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
            Premium Skincare
            <span className="block text-foreground/60 mt-2">For Your Daily Routine</span>
          </h1>
          
          <p className="text-lg text-foreground/70 max-w-md">
            Discover our collection of premium skincare products, designed to enhance your natural beauty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-base">
              Shop Collection
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t">
            <div>
              <p className="text-2xl font-medium">50K+</p>
              <p className="text-sm text-foreground/60">Happy Customers</p>
            </div>
            <div>
              <p className="text-2xl font-medium">4.9/5</p>
              <p className="text-sm text-foreground/60">Customer Rating</p>
            </div>
            <div>
              <p className="text-2xl font-medium">100%</p>
              <p className="text-sm text-foreground/60">Clean Ingredients</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-background/5 to-transparent rounded-2xl">
            <Image
              src="https://picsum.photos/800/800"
              alt="Premium Skincare Collection"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}