import ScrollReveal from "./ScrollReveal";
import { asset } from "@/lib/basePath";

const items = [
  { img: "/img/Acrylicsigns.jpeg", name: "Acrylic Signs", price: "From $60.00" },
  { img: "/img/Stickers.jpeg", name: "Stickers", price: "From $100.00" },
  { img: "/img/Flyer.jpeg", name: "Flyers", price: "From $220.00" },
  { img: "/img/cards4.jpeg", name: "Premium Business Cards", price: "From $200.00" },
];

export default function BestSellers() {
  return (
    <section className="py-20 px-5 bg-[#fafafa] text-center" id="best-sellers">
      <ScrollReveal>
        <div className="max-w-[600px] mx-auto mb-12">
          <span className="inline-block bg-[rgba(124,58,237,0.08)] text-[#7c3aed] font-semibold text-xs px-3.5 py-1.5 rounded-full tracking-[1.5px] uppercase mb-4">
            Top Picks
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Best Sellers</h2>
          <p className="text-base text-[#64748b] leading-relaxed">
            Our most popular products chosen by customers across New Jersey
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex overflow-x-auto py-2.5 pb-8 justify-center gap-6 flex-wrap max-w-[1300px] mx-auto custom-scrollbar max-md:justify-start max-md:flex-nowrap max-md:pl-5">
          {items.map((item) => (
            <div
              key={item.name}
              className="min-w-[280px] max-w-[300px] p-4 rounded-2xl bg-white border border-black/[0.04] cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            >
              <img
                src={asset(item.img)}
                alt={item.name}
                className="w-full h-[280px] object-cover rounded-2xl mb-4"
              />
              <h3 className="text-[17px] font-bold mb-2">{item.name}</h3>
              <span className="font-bold text-base bg-gradient-to-br from-[#7c3aed] to-[#6366f1] bg-clip-text text-transparent">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
