// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800 pt-24 md:pt-32 bg-black text-white overflow-hidden">
      {/* Kosmik yulduzli fon */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-black" />

        <div
          className="absolute inset-0 bg-transparent opacity-50"
          style={{
            boxShadow: `
              1200px 800px 1px #fff, 300px 1400px 1px #eee,
              1800px 500px 2px #fff, 600px 1100px 1px #ddd,
              1500px 200px 1px #fff, 400px 900px 1px #eee,
              900px 600px 1px #fff, 200px 1700px 2px #ddd,
              1700px 300px 1px #fff, 800px 1200px 1px #eee
            `,
          }}
        />

        <div
          className="absolute inset-0 bg-transparent opacity-35"
          style={{
            boxShadow: `
              500px 700px 1px #fff, 1400px 400px 1px #eee,
              100px 1600px 1px #fff, 1100px 900px 2px #ddd,
              1600px 100px 1px #fff, 700px 1300px 1px #eee
            `,
          }}
        />

        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_2px)] [background-size:80px_80px]" />
        </div>
      </div>

      {/* Kontent */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {/* Bo'sh joy (agar kerak bo'lsa logo yoki boshqa narsa qo'yish mumkin) */}
          <div className="hidden lg:block" />

          {/* Manzil */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-3">
              <FaMapMarkerAlt className="text-white text-xl" />
              <p className="font-medium text-lg text-white">Manzil</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pl-8 sm:pl-0">
              Buxoro viloyati, Shofirkon tumani, Ko'rishkent qishlog'i, 114-uy
            </p>
            <a
              href="https://maps.app.goo.gl/oBkzwCvosa26yYat6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors pl-8 sm:pl-0"
            >
              Xaritada ko‘rish <HiArrowUpRight className="text-xs" />
            </a>
          </div>

          {/* Telefon */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-3">
              <FaPhoneAlt className="text-white text-xl" />
              <p className="font-medium text-lg text-white">Telefon</p>
            </div>
            <a
              href="tel:+998338910904"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span>+998 33 891 09 04</span>
              <HiArrowUpRight className="text-xs" />
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-3">
              <FaEnvelope className="text-white text-xl" />
              <p className="font-medium text-lg text-white">Email</p>
            </div>
            <a
              href="mailto:mominovquvonch2@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span>mominovquvonch2@gmail.com</span>
              <HiArrowUpRight className="text-xs" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Logo */}
          <div className="flex justify-center lg:justify-start items-start">
            <Image
              src="/logo.png"
              width={140}
              height={100}
              alt="Genius Electro"
              className="object-contain"
              priority
            />
          </div>

          {/* Kompaniya */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="mb-4 font-medium text-lg text-white">Kompaniya</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Biz haqimizda</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sharhlar</li>
              <li className="hover:text-white transition-colors cursor-pointer">Aloqa</li>
            </ul>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="mb-4 font-medium text-lg text-white">Ijtimoiy tarmoqlar</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <a
                href="https://t.me/Only1Quvonch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaTelegramPlane className="text-xl" /> Telegram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaInstagram className="text-xl" /> Instagram
              </a>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <FaFacebookF className="text-xl" /> Facebook
              </li>
            </ul>
          </div>

          {/* Bo'sh joylar */}
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="relative z-10 border-t border-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>© 2025 Genius Electro. Barcha huquqlar himoyalangan.</p>
        <a
          href="#top"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaArrowUp className="text-xs" /> Yuqoriga qaytish
        </a>
      </div>
    </footer>
  );
}