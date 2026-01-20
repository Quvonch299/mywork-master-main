"use client";

import { useState } from "react";
import Image from "next/image";

export default function SimpleNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-amber-50 to-orange-50/80 border-b border-amber-100/60 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              width={150}
              height={42}
              alt="Logo"
              className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
              priority
            />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-gray-700">
            <a
              href="#"
              className="hover:text-amber-700 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Bosh sahifa
            </a>
            <a
              href="#"
              className="hover:text-amber-700 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Loyihalar
            </a>
            <a
              href="#"
              className="hover:text-amber-700 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Savatcha
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 -mr-2 text-gray-700 hover:text-amber-700 focus:outline-none transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu – full width, slide down animation */}
      <div
        className={`md:hidden fixed inset-x-0 top-[4rem] sm:top-[5rem] bg-gradient-to-b from-amber-50 to-white border-b border-amber-100 shadow-lg transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-3">
          <a
            href="#"
            className="block px-5 py-4 text-lg font-medium text-gray-800 hover:bg-amber-100/60 rounded-xl transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Bosh sahifa
          </a>
          <a
            href="#"
            className="block px-5 py-4 text-lg font-medium text-gray-800 hover:bg-amber-100/60 rounded-xl transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Loyihalar
          </a>
          <a
            href="#"
            className="block px-5 py-4 text-lg font-medium text-gray-800 hover:bg-amber-100/60 rounded-xl transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Savatcha
          </a>
        </div>
      </div>

      {/* Optional: overlay when menu is open */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}