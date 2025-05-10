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
    <section className="relative mx-4 mt-4 h-[85vh] overflow-hidden rounded-lg border bg-background">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2940&auto=format&fit=crop"
          alt="Luxury Skincare Collection"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="w-full max-w-2xl px-8 sm:px-12 lg:px-16">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white">
              Discover Your Perfect
              <span className="block mt-3">Skincare Ritual</span>
            </h1>
            <p className="text-lg text-white/90 max-w-lg">
              Explore our curated collection of premium skincare essentials
            </p>
          </div>

          <div className="mt-8">
            <Command className="relative overflow-hidden rounded-md">
              <div className="flex items-center bg-white/95" cmdk-input-wrapper="">
                <Search className="ml-4 size-5 text-neutral-400" />
                <input
                  className="h-14 w-full bg-transparent px-4 text-base outline-none placeholder:text-neutral-400 text-black"
                  placeholder="Search for products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setOpen(true)}
                />
              </div>
              {open && search && (
                <div className="absolute left-0 right-0 top-full border-t bg-white">
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
                          className="flex items-center gap-4 border-b px-4 py-3 text-black hover:bg-neutral-50 transition-colors"
                        >
                          <div className="size-14 bg-neutral-100 shrink-0" />
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