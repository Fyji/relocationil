"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/new-zealand", label: "ניו זילנד" },
  { href: "/australia", label: "אוסטרליה" },
  { href: "/compare", label: "השוואה" },
  { href: "/process", label: "התהליך" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Relocation IL"
              width={180}
              height={50}
              className="h-10 lg:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-surface rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              ייעוץ חינם
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer"
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-surface rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-full cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              ייעוץ חינם
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
