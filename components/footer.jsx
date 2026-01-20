import Image from 'next/image'
import { HiArrowUpRight } from 'react-icons/hi2'
import { FaArrowUp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa"
import Button from './ui/Buttom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/10 mt-24 md:mt-32 bg-[#fffaf5] text-gray-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          <div className="flex justify-start sm:justify-center lg:justify-start">
          
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-3">
              <FaMapMarkerAlt className="text-[#C3974C] text-xl" />
              <p className="font-medium text-lg">Manzil</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed pl-8 sm:pl-0">
           Buxoro viloyati shofirkon tumani Ko`rishkent Qislog`i 114uy
            </p>
            <a target='blank'
              href="https://maps.app.goo.gl/oBkzwCvosa26yYat6"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-[#C3974C] transition-colors pl-8 sm:pl-0"
            >
              Xaritada ko‘rish <HiArrowUpRight className="text-xs" />
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-3">
              <FaPhoneAlt className="text-[#C3974C] text-xl" />
              <p className="font-medium text-lg">Telefon</p>
            </div>
            <a
              href="tel:+998338910904"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#C3974C] transition-colors"
            >
              <span>+998 33 891 09 04</span>
              <HiArrowUpRight className="text-xs" />
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-3">
              <FaEnvelope className="text-[#C3974C] text-xl" />
              <p className="font-medium text-lg">Yordam pochta</p>
            </div>
            <a
  href="https://mail.google.com/mail/u/1/#inbox"
  target="blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#C3974C] transition-colors"
>
  <span>mominovquvonch2@gmail.com</span>
  <HiArrowUpRight className="text-xs" />
</a>

          </div>

        </div>
      </div>

      <div className="border-t border-gray-200/10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

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

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="mb-4 font-medium text-lg">Kompaniya</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="hover:text-[#C3974C] transition-colors cursor-pointer">Biz haqimizda</li>
              <li className="hover:text-[#C3974C] transition-colors cursor-pointer">Sharhlar</li>
              <li className="hover:text-[#C3974C] transition-colors cursor-pointer">Aloqa</li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="mb-4 font-medium text-lg">Ijtimoiy tarmoqlar</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <a target='blank' href='https://t.me/Only1Quvonch' className="flex items-center gap-2 hover:text-[#C3974C] transition-colors cursor-pointer">
                <FaTelegramPlane className="text-xl" /> Telegram
              </a>
              <a href='' className="flex items-center gap-2 hover:text-[#C3974C] transition-colors cursor-pointer">
                <FaInstagram className="text-xl" /> Instagram
              </a>
              <li className="flex items-center gap-2 hover:text-[#C3974C] transition-colors cursor-pointer">
                <FaFacebookF className="text-xl" /> Facebook
              </li>
            </ul>
          </div>

          <div className="hidden lg:block" />
          <div className="hidden lg:block" />

        </div>
      </div>

      <div className="border-t border-gray-200/10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <p>© 2025 Genius Electro. Barcha huquqlar himoyalangan.</p>
        <a
          href="#top"
          className="flex items-center gap-2 hover:text-[#C3974C] transition-colors"
        >
          <FaArrowUp className="text-xs" /> Yuqoriga qaytish
        </a>
      </div>
    </footer>
  )
}