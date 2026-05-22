import { asset } from "@/lib/basePath";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] pt-20 pb-8 px-5 text-[15px] text-[#94a3b8]" id="contact">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        {/* Brand */}
        <div className="text-left max-md:text-center">
          <img
            src={asset("/img/logo.jpeg")}
            alt="CreativePrint NJ Logo"
            width={140}
            className="rounded-lg mb-5 max-md:mx-auto"
          />
          <p className="leading-relaxed mb-6">
            21-R Monroe Street, Passaic NJ 07055
            <br />
            info@creativeprintnj.com
            <br />
            <strong className="text-white">201-912-2750</strong>
          </p>
          <div className="flex gap-2.5 max-md:justify-center">
            {[
              { icon: "fab fa-facebook-f", href: "#" },
              { icon: "fab fa-twitter", href: "#" },
              { icon: "fab fa-instagram", href: "https://www.instagram.com/creativeprintnj/" },
              { icon: "fab fa-pinterest", href: "#" },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.icon.split("-").pop()}
                className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-[#94a3b8] hover:bg-gradient-to-br hover:from-[#7c3aed] hover:to-[#6366f1] hover:text-white hover:-translate-y-1 transition-all"
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="max-md:text-center">
          <h3 className="text-white text-base font-bold mb-5">Products</h3>
          <ul className="space-y-3">
            {["Business Cards", "Stickers", "Flyers", "Acrylic Signs"].map((item) => (
              <li key={item}>
                <a href="#categories" className="hover:text-[#a78bfa] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* More */}
        <div className="max-md:text-center">
          <h3 className="text-white text-base font-bold mb-5">More</h3>
          <ul className="space-y-3">
            {["Menus", "Brochures"].map((item) => (
              <li key={item}>
                <a href="#categories" className="hover:text-[#a78bfa] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="max-md:text-center">
          <h3 className="text-white text-base font-bold mb-5">Contact</h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:info@creativeprintnj.com" className="hover:text-[#a78bfa] transition-colors">
                Email Us
              </a>
            </li>
            <li>
              <a href="tel:+12019122750" className="hover:text-[#a78bfa] transition-colors">
                Call Us
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/creativeprintnj/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a78bfa] transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] my-12 max-w-[1200px] mx-auto" />

      {/* Bottom */}
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-5 max-md:flex-col max-md:text-center">
        <div className="text-sm text-[#64748b]">
          &copy; {year} Creative Print NJ. All rights reserved
        </div>
        <div>
          <img
            src="https://facilprint.com/wp-content/uploads/2023/02/payment-1.png"
            alt="Accepted Payments"
            width={220}
            className="opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </footer>
  );
}
