"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { asset } from "@/lib/basePath";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b border-white/40 transition-all duration-300 ${
        scrolled ? "bg-white/60 shadow-[0_4px_30px_rgba(6,182,212,0.1)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-3 py-4 px-5">
        <Link href="/">
          <img
            src={asset("/img/logo.png")}
            alt="CreativePrint NJ Logo"
            width={150}
            className="h-auto"
          />
        </Link>
        <nav className="flex gap-6">
          {[
            { href: "#categories", label: "Products" },
            { href: "#best-sellers", label: "Best Sellers" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[#0F2137] font-semibold text-sm tracking-wide pb-1 hover:text-[#06B6D4] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#06B6D4] after:via-[#EC4899] after:to-[#F97316] after:rounded after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
