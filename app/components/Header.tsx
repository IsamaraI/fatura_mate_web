"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaMoon, FaTimes, FaWallet } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      const headerOffset = 115; // Header yüksekliği + margin
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm px-8 py-4 fixed top-5 left-10 right-10 z-50 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-primary p-2 shadow-sm">
            <FaWallet className="text-white text-xl" />
          </div>
          <Link href="/#about" onClick={(e) => handleHashClick(e, "#about")}>
            <h1 className="text-xl font-bold text-black cursor-pointer">
              FaturaMate
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#features"
            onClick={(e) => handleHashClick(e, "#features")}
          >
            <span className="text-gray-700 hover:text-primary transition-colors cursor-pointer">
              Özellikler
            </span>
          </Link>
          <Link
            href="/#pricing"
            onClick={(e) => handleHashClick(e, "#pricing")}
          >
            <span className="text-gray-700 hover:text-primary transition-colors cursor-pointer">
              Fiyatlandırma
            </span>
          </Link>
          <Link href="/#faq" onClick={(e) => handleHashClick(e, "#faq")}>
            <span className="text-gray-700 hover:text-primary transition-colors cursor-pointer">
              SSS
            </span>
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleHashClick(e, "#contact")}
          >
            <span className="text-gray-700 hover:text-primary transition-colors cursor-pointer">
              İletişim
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl bg-gray-200"
            aria-label="Menüyü aç/kapat"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-gray-700 text-lg" />
            ) : (
              <FaBars className="text-gray-700 text-lg" />
            )}
          </button>
          <div className="flex items-center p-2 rounded-xl bg-gray-200">
            <FaMoon className="text-gray-700 text-lg cursor-pointer" />
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-200 ${
          isMobileMenuOpen ? "max-h-64 mt-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-3 pb-2">
          <Link
            href="/#features"
            onClick={(e) => handleHashClick(e, "#features")}
          >
            <span className="block text-gray-700 hover:text-primary transition-colors cursor-pointer">
              Özellikler
            </span>
          </Link>
          <Link
            href="/#pricing"
            onClick={(e) => handleHashClick(e, "#pricing")}
          >
            <span className="block text-gray-700 hover:text-primary transition-colors cursor-pointer">
              Fiyatlandırma
            </span>
          </Link>
          <Link href="/#faq" onClick={(e) => handleHashClick(e, "#faq")}>
            <span className="block text-gray-700 hover:text-primary transition-colors cursor-pointer">
              SSS
            </span>
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleHashClick(e, "#contact")}
          >
            <span className="block text-gray-700 hover:text-primary transition-colors cursor-pointer">
              İletişim
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
