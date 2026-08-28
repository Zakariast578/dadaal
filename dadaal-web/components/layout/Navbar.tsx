"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Impact", href: "#impact" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Partners", href: "#partners" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="font-heading font-black text-2xl tracking-tight text-dadaal-blue">
          DADAAL
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-sans text-body font-medium text-slate-700 hover:text-dadaal-blue transition-colors group"
            >
              {link.name}
              <span
                className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-300 group-hover:w-full"
                style={{ backgroundImage: "var(--gradient-dadaal)" }}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link href="#get-involved" className="btn-primary">
            Get Involved
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 text-slate-800 hover:text-dadaal-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-dadaal-blue rounded-full"
          aria-label="Open Menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Drawer Component */}
      <div id="mobile-menu">
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          navLinks={navLinks}
        />
      </div>
    </header>
  );
}