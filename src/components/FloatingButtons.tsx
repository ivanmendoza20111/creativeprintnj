"use client";

import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/12019122750"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] z-50 hover:scale-110 hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] transition-all"
      >
        <i className="fab fa-whatsapp text-white text-3xl" />
      </a>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-[90px] w-11 h-11 bg-[rgba(124,58,237,0.9)] backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg z-50 border-none cursor-pointer hover:-translate-y-1 hover:bg-[#7c3aed] transition-all ${
          showTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <i className="fas fa-chevron-up" />
      </button>
    </>
  );
}
