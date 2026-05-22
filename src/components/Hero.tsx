export default function Hero() {
  return (
    <section className="relative py-20 px-5 text-center overflow-hidden">
      <div className="max-w-[700px] mx-auto relative z-10 animate-hero">
        <span className="inline-block bg-[rgba(6,182,212,0.1)] text-cyan font-semibold text-[13px] px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
          Premium Print Shop
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-5 text-navy">
          Printing that makes your{" "}
          <span className="bg-gradient-to-r from-cyan via-pink to-orange bg-clip-text text-transparent">
            brand stand out
          </span>
        </h1>
        <p className="text-lg text-[#64748b] leading-relaxed mb-8">
          Business cards, stickers, flyers, acrylic signs and more. High quality
          prints with fast turnaround in Passaic, NJ.
        </p>
        <a
          href="#categories"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan via-pink to-orange text-white font-semibold text-[15px] py-3.5 px-8 rounded-full shadow-[0_4px_15px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(236,72,153,0.3)] transition-all"
        >
          Explore Products <i className="fas fa-arrow-right" />
        </a>
      </div>
    </section>
  );
}
