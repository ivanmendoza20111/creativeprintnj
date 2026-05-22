import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Feature() {
  return (
    <section className="bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex items-center py-20 px-5 gap-15 flex-col md:flex-row">
        <ScrollReveal className="flex-1 relative">
          <div className="absolute w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(124,58,237,0.15),transparent_70%)] -top-10 -left-10 rounded-full" />
          <Image
            src="https://facilprint.com/wp-content/uploads/2025/08/Business-Card-Mockup.png"
            alt="Business Cards"
            width={520}
            height={400}
            className="w-full max-w-[520px] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
          />
        </ScrollReveal>

        <ScrollReveal className="flex-1 text-left md:text-left text-center">
          <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-[#c4b5fd] to-[#e0e7ff] bg-clip-text text-transparent leading-none mb-2">
            01
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
            Standard Business Cards!
          </h2>
          <p className="text-base text-[#64748b] leading-relaxed mb-8">
            Our Standard Business Cards offer classic or premium finishes:
            regular, matte, glossy, silk, suede, recycled, and more, designed to
            make a lasting impression.
          </p>
          <a
            href="#categories"
            className="inline-flex items-center gap-2 font-bold text-[#7c3aed] text-[15px] hover:gap-3.5 transition-all"
          >
            View Options <i className="fas fa-arrow-right" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
