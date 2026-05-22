import ScrollReveal from "./ScrollReveal";
import { asset } from "@/lib/basePath";

export default function Feature2() {
  return (
    <section className="overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex items-center py-20 px-5 gap-15 flex-col md:flex-row-reverse">
        <ScrollReveal className="flex-1 relative">
          <div className="absolute w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(236,72,153,0.15),transparent_70%)] -top-10 -right-10 rounded-full" />
          <img
            src={asset("/img/mockup-cards.jpeg")}
            alt="Custom Business Cards by CreativePrint NJ"
            className="w-full max-w-[520px] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
          />
        </ScrollReveal>

        <ScrollReveal className="flex-1 text-left md:text-left text-center">
          <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-pink/40 to-orange/30 bg-clip-text text-transparent leading-none mb-2">
            02
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight text-navy">
            Custom Designs!
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed mb-8">
            We bring your brand to life with fully customized business cards.
            From concept to print, we handle every detail to make your cards
            truly unique and professional.
          </p>
          <a
            href="#categories"
            className="inline-flex items-center gap-2 font-bold text-pink text-[15px] hover:gap-3.5 transition-all"
          >
            Get Started <i className="fas fa-arrow-right" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
