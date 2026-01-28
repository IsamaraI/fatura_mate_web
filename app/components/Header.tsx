"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaWallet } from "react-icons/fa";
import { ThemeModeToggle } from "./ThemeModeToggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
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
    <header className="bg-card shadow-sm px-8 py-4 fixed top-5 left-10 right-10 z-50 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-primary p-2 shadow-sm">
            <FaWallet className="text-white text-xl" />
          </div>
          <Link
            href="/#about"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleHashClick(e, "#about")
            }
          >
            <h1 className="text-xl font-bold text-foreground cursor-pointer">
              FaturaMate
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#features"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleHashClick(e, "#features")
            }
          >
            <div className="relative flex flex-col group cursor-pointer">
              <span className="text-gray-700 group-hover:text-primary transition-colors">
                Özellikler
              </span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </div>
          </Link>
          <Link
            href="/#pricing"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleHashClick(e, "#pricing")
            }
          >
            <div className="relative flex flex-col group cursor-pointer">
              <span className="text-gray-700 group-hover:text-primary transition-colors">
                Fiyatlandırma
              </span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </div>
          </Link>
          <Link
            href="/#faq"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleHashClick(e, "#faq")
            }
          >
            <div className="relative flex flex-col group cursor-pointer">
              <span className="text-gray-700 group-hover:text-primary transition-colors">
                SSS
              </span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </div>
          </Link>
          <Link
            href="/#contact"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleHashClick(e, "#contact")
            }
          >
            <div className="relative flex flex-col group cursor-pointer">
              <span className="text-gray-700 group-hover:text-primary transition-colors">
                İletişim
              </span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </div>
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
          <ThemeModeToggle />
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
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleHashClick(e, "#features")
            }
          >
            <span className="block text-gray-700 hover:text-primary transition-colors cursor-pointer">
              Özellikler
            </span>
          </Link>
          <Link
            href="/#pricing"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleHashClick(e, "#pricing")
            }
          >
            <span className="block text-gray-700 hover:text-primary transition-colors cursor-pointer">
              Fiyatlandırma
            </span>
          </Link>
          <Link
            href="/#faq"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleHashClick(e, "#faq")
            }
          >
            <span className="block text-gray-700 hover:text-primary transition-colors cursor-pointer">
              SSS
            </span>
          </Link>
          <Link
            href="/#contact"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleHashClick(e, "#contact")
            }
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
