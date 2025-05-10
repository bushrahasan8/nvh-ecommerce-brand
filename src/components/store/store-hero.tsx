"use client";

import { useState } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { products } from "@/lib/app-data";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=2940&auto=format&fit=crop"
          alt="Luxury Skincare"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-[95%] w-[900px] mx-auto text-center space-y-8 px-4">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white">
              Your Skincare
              <span className="block mt-3">Your Ritual</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Discover our curated collection of premium skincare essentials
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <Command className="relative overflow-hidden border-0">
              <div className="flex items-center bg-white/95 shadow-xl" cmdk-input-wrapper="">
                <Search className="size-5 ml-6 text-neutral-400" />
                <input
                  className="flex h-16 w-full bg-transparent px-4 text-base outline-none placeholder:text-neutral-500 text-black"
                  placeholder="Search products, collections, or ingredients..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setOpen(true)}
                />
              </div>
              {open && search && (
                <div className="absolute top-full left-0 right-0 bg-white mt-2 shadow-xl">
                  <Command.List className="max-h-[300px] overflow-y-auto">
                    {products
                      .filter(product => 
                        product.name.toLowerCase().includes(search.toLowerCase()) ||
                        product.category.toLowerCase().includes(search.toLowerCase())
                      )
                      .map(product => (
                        <Link 
                          key={product.id} 
                          href={`/products/${product.route}`}
                          className="flex items-center gap-4 px-6 py-4 text-black hover:bg-neutral-50 transition-colors"
                        >
                          <div className="size-16 bg-neutral-100 shrink-0" />
                          <div className="text-left">
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-neutral-500">{product.category}</p>
                          </div>
                        </Link>
                      ))}
                    {products.filter(product => 
                      product.name.toLowerCase().includes(search.toLowerCase()) ||
                      product.category.toLowerCase().includes(search.toLowerCase())
                    ).length === 0 && (
                      <div className="px-6 py-4 text-sm text-neutral-500">
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