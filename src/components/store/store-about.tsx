import Image from "next/image";
import nvh from "../../../public/nvh.png";
import { Star, StarHalf } from "lucide-react";

export default function About() {
  return (
    <section id="about-the-brand" className="py-24 max-w-screen-lg mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl mb-3 font-light">About The Brand</h2>
        <p className="text-lg text-neutral-400">
          Redefining Luxury Skincare Since 2021
        </p>
      </div>

      <div className="w-full gap-6 flex flex-col items-center justify-center py-12 px-8 bg-[#F8F8F8] rounded-2xl shadow-sm">
        <Image
          src={nvh}
          alt="NVH Logo"
          className="h-10 w-auto select-none mb-2"
        />
        <p className="text-center text-lg text-neutral-800 max-w-[600px] leading-relaxed">
          Born from the fusion of nature's finest ingredients and cutting-edge
          science, NVH® represents the pinnacle of luxury skincare. Each formula
          is meticulously crafted to deliver transformative results.
        </p>

        <div className="flex gap-8 w-full py-8 justify-center">
          <div className="h-[80px] w-[32%] text-neutral-800 justify-center items-center rounded-xl flex gap-3 bg-white p-4 shadow-sm">
            <h3 className="text-5xl font-light tracking-tight">94%</h3>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium tracking-wider text-neutral-500">
                IN 30 MINUTES
              </span>
              <span className="text-sm font-medium">Enhanced Hydration*</span>
            </div>
          </div>
          <div className="h-[80px] w-[32%] text-neutral-800 justify-center items-center rounded-xl flex gap-3 bg-white p-4 shadow-sm">
            <h3 className="text-5xl font-light tracking-tight">85%</h3>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium tracking-wider text-neutral-500">
                AFTER 28 DAYS
              </span>
              <span className="text-sm font-medium">Increased Radiance**</span>
            </div>
          </div>
          <div className="h-[80px] w-[32%] text-neutral-800 justify-center items-center rounded-xl flex gap-3 bg-white p-4 shadow-sm">
            <h3 className="text-5xl font-light tracking-tight">88%</h3>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium tracking-wider text-neutral-500">
                AFTER 1 MONTH
              </span>
              <span className="text-sm font-medium">Visible Results*</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-neutral-600 font-medium flex   gap-2">
          <span>Trusted by over 3,218 customers with an average rating of</span>
          <span>
            <span className="inline-flex justify-center gap-1">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              <StarHalf className="size-4 fill-yellow-400 text-yellow-400" />
            </span>
          </span>
        </p>
      </div>
      <p className="text-xs text-neutral-500 text-center mt-8">
        *Based on clinical studies conducted over 12 months with 1,000+
        participants
        <br />
        **Results may vary based on skin type and conditions
      </p>
    </section>
  );
}
