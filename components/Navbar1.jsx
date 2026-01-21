"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CenteredLogoNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 relative">
          
          {/* Left links - Desktop */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 text-sm font-medium text-gray-300">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
            >
              Bosh sahifa
            </Link>
            <Link
              href="/projects"
              className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
            >
              Loyihalar
            </Link>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-shrink-0 z-10">
            <Image
              src="/logo.png"
              width={150}
              height={42}
              alt="Logo"
              className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
              priority
            />
          </div>

          {/* Right links - Desktop */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 text-sm font-medium text-gray-300">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
            >
              Savatcha
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
            >
              Bog‘lanish
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 -mr-2 text-gray-300 hover:text-white focus:outline-none transition-colors z-20"
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

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[4rem] sm:top-[5rem] bg-black/95 border-b border-gray-800 shadow-2xl transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          <Link
            href="/"
            className="block px-5 py-4 text-lg font-medium text-gray-200 hover:bg-gray-900 rounded-xl transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Bosh sahifa
          </Link>
          <Link
            href="/projects"
            className="block px-5 py-4 text-lg font-medium text-gray-200 hover:bg-gray-900 rounded-xl transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Loyihalar
          </Link>
          <a
            href="#"
            className="block px-5 py-4 text-lg font-medium text-gray-200 hover:bg-gray-900 rounded-xl transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Savatcha
          </a>
          <a
            href="#"
            className="block px-5 py-4 text-lg font-medium text-gray-200 hover:bg-gray-900 rounded-xl transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Bog‘lanish
          </a>
        </div>
      </div>

      {/* Mobile overlay (qorong'i fon) */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}