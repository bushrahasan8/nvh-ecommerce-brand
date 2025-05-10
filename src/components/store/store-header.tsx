"use client";
import Link from "next/link";
import { CardButton } from "./store-cart-button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header({ products }: { products?: boolean }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 border bg-background`}>
      <div className="max-w-screen-xl mx-auto">
        <div className={`flex justify-between w-full items-center py-4 px-6 ${products && "max-w-screen-lg mx-auto"}`}>
          <Link href="/" className="flex items-center gap-2">
            <h2 className="font-medium text-xl hover:opacity-80 transition-opacity">NVH®</h2>
          </Link>

          {!products && (
            <nav className="hidden md:block">
              <ul className="flex gap-8">
                <li>
                  <a href="#our-collection" className="nav-link">Our Collection</a>
                </li>
                <li>
                  <a href="#client-favorites" className="nav-link">Client Favorites</a>
                </li>
                <li>
                  <a href="#why-nvh" className="nav-link">Why NVH®</a>
                </li>
                <li>
                  <a href="#about-the-brand" className="nav-link">About The Brand</a>
                </li>
              </ul>
            </nav>
          )}

          <div className="flex items-center gap-4">
            <CardButton />
            {!products && (
              <button
                className="p-2 hover:bg-accent transition-colors md:hidden"
                onClick={() => setOpenMenu(!openMenu)}
                aria-label="Toggle menu"
              >
                <Menu strokeWidth={1.5} className="size-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background border-l z-50 transition-transform duration-300 ${
          !openMenu ? 'translate-x-full' : 'translate-x-0'
        } md:hidden`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <h2 className="text-xl font-medium">Menu</h2>
            <button
              onClick={() => setOpenMenu(false)}
              className="p-2 hover:bg-accent rounded-none transition-colors"
              aria-label="Close menu"
            >
              <X strokeWidth={1.5} className="size-6" />
            </button>
          </div>
          
          <nav className="flex-1">
            <ul className="flex flex-col gap-6 text-lg">
              <li>
                <a href="#our-collection" className="mobile-nav-link" onClick={() => setOpenMenu(false)}>
                  Our Collection
                </a>
              </li>
              <li>
                <a href="#client-favorites" className="mobile-nav-link" onClick={() => setOpenMenu(false)}>
                  Client Favorites
                </a>
              </li>
              <li>
                <a href="#why-nvh" className="mobile-nav-link" onClick={() => setOpenMenu(false)}>
                  Why NVH®
                </a>
              </li>
              <li>
                <a href="#about-the-brand" className="mobile-nav-link" onClick={() => setOpenMenu(false)}>
                  About The Brand
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Link
        href="/admin"
        className="fixed bottom-4 right-4 bg-[#F8F8F8] hover:bg-[#eaeaea] transition-colors shadow-md text-black rounded-none border py-2 px-3 z-40"
      >
        Admin Dashboard
      </Link>
    </header>
  );
}