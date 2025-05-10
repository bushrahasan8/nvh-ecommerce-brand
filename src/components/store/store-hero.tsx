"use client";

import { useState } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { products } from "@/lib/app-data";
import Link from "next/link";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <section className="relative w-full bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-skincare-products-2767/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-screen-xl mx-auto px-4 py-20 sm:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
            Your One-Stop Destination for Premium Skincare
          </h1>
          <p className="text-lg sm:text-xl text-white/70 mb-8">
            Discover our curated collection of luxury skincare products
          </p>

          <div className="relative max-w-xl mx-auto">
            <Command className="relative rounded-lg overflow-hidden">
              <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
                <Search className="size-4 mr-2 shrink-0 opacity-50" />
                <input
                  className="flex h-14 w-full rounded-md bg-white px-3 py-2 text-sm outline-none placeholder:text-neutral-500 text-black"
                  placeholder="Search products, categories, or ingredients..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setOpen(true)}
                />
              </div>
              {open && search && (
                <div className="absolute top-full left-0 right-0 bg-white mt-1 rounded-lg overflow-hidden shadow-lg border">
                  <Command.List className="max-h-[300px] overflow-y-auto p-2">
                    {products
                      .filter(product => 
                        product.name.toLowerCase().includes(search.toLowerCase()) ||
                        product.category.toLowerCase().includes(search.toLowerCase())
                      )
                      .map(product => (
                        <Link 
                          key={product.id} 
                          href={`/products/${product.route}`}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-black hover:bg-neutral-100 rounded-md"
                        >
                          <div className="size-10 bg-neutral-100 rounded-md shrink-0" />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-xs text-neutral-500">{product.category}</p>
                          </div>
                        </Link>
                      ))}
                    {products.filter(product => 
                      product.name.toLowerCase().includes(search.toLowerCase()) ||
                      product.category.toLowerCase().includes(search.toLowerCase())
                    ).length === 0 && (
                      <div className="px-4 py-3 text-sm text-neutral-500">
                        No results found.
                      </div>
                    )}
                  </Command.List>
                </div>
              )}
            </Command>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500" />
              Free Shipping
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-blue-500" />
              100% Authentic
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-purple-500" />
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}