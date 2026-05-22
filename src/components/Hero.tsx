export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#f5f3ff] via-[#ede9fe] to-[#e0e7ff] py-20 px-5 text-center overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(124,58,237,0.1),transparent_70%)] -top-24 -right-24 rounded-full" />
      <div className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)] -bottom-20 -left-20 rounded-full" />

      <div className="max-w-[700px] mx-auto relative z-10 animate-hero">
        <span className="inline-block bg-[rgba(124,58,237,0.1)] text-[#7c3aed] font-semibold text-[13px] px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
          Premium Print Shop
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-5 text-[#1a1a2e]">
          Printing that makes your{" "}
          <span className="bg-gradient-to-br from-[#7c3aed] to-[#6366f1] bg-clip-text text-transparent">
            brand stand out
          </span>
        </h1>
        <p className="text-lg text-[#64748b] leading-relaxed mb-8">
          Business cards, stickers, flyers, acrylic signs and more. High quality
          prints with fast turnaround in Passaic, NJ.
        </p>
        <a
          href="#categories"
          className="inline-flex items-center gap-2 bg-gradient-to-br from-[#7c3aed] to-[#6366f1] text-white font-semibold text-[15px] py-3.5 px-8 rounded-full shadow-[0_4px_15px_rgba(124,58,237,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)] transition-all"
        >
          Explore Products <i className="fas fa-arrow-right" />
        </a>
      </div>
    </section>
  );
}
