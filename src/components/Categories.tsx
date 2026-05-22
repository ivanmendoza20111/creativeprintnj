"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const tabs = [
  { key: "cards", label: "Business Cards" },
  { key: "stickers", label: "Stickers" },
  { key: "flyers", label: "Flyers" },
  { key: "acrylic", label: "Acrylic Signs" },
  { key: "menus", label: "Menus" },
  { key: "brochures", label: "Brochure" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const products: Record<TabKey, { img: string; name: string; price: string }[]> = {
  cards: [
    { img: "/img/4.jpeg", name: "Business Cards", price: "From $60.00" },
    { img: "/img/cards4.jpeg", name: "Premium Business Cards", price: "From $200.00" },
  ],
  stickers: [
    { img: "/img/Stickers.jpeg", name: "Stickers", price: "From $100.00" },
    { img: "/img/Stickers2.5.jpeg", name: "Stickers 2.5", price: "From $100.00" },
  ],
  flyers: [
    { img: "/img/Flyer.jpeg", name: "Flyers", price: "From $220.00" },
  ],
  acrylic: [
    { img: "/img/Acrylicsigns.jpeg", name: "Acrylic Signs", price: "From $60.00" },
  ],
  menus: [
    { img: "/img/Menu.jpeg", name: "Restaurant Menus", price: "From $150.00" },
  ],
  brochures: [
    { img: "/img/BROCHURE.jpeg", name: "Brochures", price: "From $120.00" },
  ],
};

export default function Categories() {
  const [active, setActive] = useState<TabKey>("cards");

  return (
    <section className="py-20 px-5 bg-[#fafafa] text-center" id="categories">
      <ScrollReveal>
        <span className="inline-block bg-[rgba(124,58,237,0.08)] text-[#7c3aed] font-semibold text-xs px-3.5 py-1.5 rounded-full tracking-[1.5px] uppercase mb-4">
          Our Products
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight">
          Explore our{" "}
          <span className="bg-gradient-to-br from-[#7c3aed] to-[#6366f1] bg-clip-text text-transparent">
            Categories
          </span>
        </h2>
        <p className="text-base text-[#64748b] mb-10">
          Find the perfect print product for your business
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex justify-center gap-2 flex-wrap mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all cursor-pointer ${
                active === tab.key
                  ? "bg-gradient-to-br from-[#7c3aed] to-[#6366f1] text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)]"
                  : "bg-white text-[#64748b] hover:text-[#7c3aed] hover:bg-[#f5f3ff]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="fade-in flex justify-center gap-6 max-w-[1200px] mx-auto flex-wrap" key={active}>
        {products[active].map((product) => (
          <div
            key={product.name}
            className="bg-white p-4 rounded-2xl border border-black/[0.04] cursor-pointer max-w-[340px] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={300}
              height={300}
              className="w-full max-w-[300px] h-[300px] object-cover rounded-2xl mb-4"
            />
            <p className="text-[#64748b] text-sm mb-1">{product.name}</p>
            <h3 className="text-lg font-bold text-[#7c3aed]">{product.price}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
