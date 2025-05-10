import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-120px)]">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
              Luxury Skincare
              <span className="block text-foreground/60 mt-2">For Every Skin Type</span>
            </h1>
            
            <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
              Experience the perfect blend of science and nature with our premium skincare collection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base">
              Shop Now
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              View Collection
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t">
            <div className="space-y-1">
              <p className="text-2xl font-medium">Cruelty-Free</p>
              <p className="text-sm text-foreground/60">Ethically Made</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-medium">Natural</p>
              <p className="text-sm text-foreground/60">Ingredients</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-medium">Dermatologist</p>
              <p className="text-sm text-foreground/60">Tested</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full">
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/800/1000"
              alt="Premium Skincare Collection"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}