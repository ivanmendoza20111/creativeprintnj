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
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/5 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-3 py-4 px-5">
        <Link href="/">
          <img
            src={asset("/img/logo.jpeg")}
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
              className="relative text-[#1a1a2e] font-semibold text-sm tracking-wide pb-1 hover:text-[#7c3aed] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#7c3aed] after:to-[#a78bfa] after:rounded after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
