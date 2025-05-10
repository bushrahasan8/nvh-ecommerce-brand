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
    <section className="relative w-full min-h-[85vh] bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
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

      <div className="relative z-20 flex items-center justify-center h-full max-w-screen-xl mx-auto px-4">
        <div className="max-w-3xl w-full mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
              Discover Your Perfect
              <span className="block mt-2">Skincare Solution</span>
            </h1>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <Command className="relative overflow-hidden rounded-none border-0">
              <div className="flex items-center bg-white/95" cmdk-input-wrapper="">
                <Search className="size-5 ml-4 text-neutral-400" />
                <input
                  className="flex h-16 w-full bg-transparent px-4 text-base outline-none placeholder:text-neutral-500 text-black"
                  placeholder="Search for products, categories, or ingredients..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setOpen(true)}
                />
              </div>
              {open && search && (
                <div className="absolute top-full left-0 right-0 bg-white mt-1 overflow-hidden shadow-lg">
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
                          className="flex items-center gap-4 px-4 py-3 text-black hover:bg-neutral-50 transition-colors"
                        >
                          <div className="size-12 bg-neutral-100 shrink-0" />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-neutral-500">{product.category}</p>
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
        </div>
      </div>
    </section>
  );
}