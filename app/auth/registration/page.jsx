'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Button from '@/components/ui/Buttom';

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-5 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold leading-tight tracking-[-0.04em] text-center sm:text-left">
          Регистрация
        </h2>

        <form className="space-y-5 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <input
              type="text"
              placeholder="Ism"
              className="w-full px-4 sm:px-6 h-14 sm:h-[66px] text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-white border border-gray-300 sm:border-gray-700 rounded-xl outline-none focus:border-[#C3974C] focus:ring-2 focus:ring-[#C3974C]/30 transition-all"
            />
            <input
              type="text"
              placeholder="Familya"
              className="w-full px-4 sm:px-6 h-14 sm:h-[66px] text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-white border border-gray-300 sm:border-gray-700 rounded-xl outline-none focus:border-[#C3974C] focus:ring-2 focus:ring-[#C3974C]/30 transition-all"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <input
              type="tel"
              placeholder="Nomer"
              className="w-full px-4 sm:px-6 h-14 sm:h-[66px] text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-white border border-gray-300 sm:border-gray-700 rounded-xl outline-none focus:border-[#C3974C] focus:ring-2 focus:ring-[#C3974C]/30 transition-all"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 sm:px-6 h-14 sm:h-[66px] text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-white border border-gray-300 sm:border-gray-700 rounded-xl outline-none focus:border-[#C3974C] focus:ring-2 focus:ring-[#C3974C]/30 transition-all"
            />
          </div>

          <p className="text-xs sm:text-sm text-gray-500 text-right">
            На почту придет код для подтверждения
          </p>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Parol"
              className="w-full px-4 sm:px-6 h-14 sm:h-[66px] pr-12 sm:pr-14 text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-white border border-gray-300 sm:border-gray-700 rounded-xl outline-none focus:border-[#C3974C] focus:ring-2 focus:ring-[#C3974C]/30 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="O'sha parol"
              className="w-full px-4 sm:px-6 h-14 sm:h-[66px] pr-12 sm:pr-14 text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-white border border-gray-300 sm:border-gray-700 rounded-xl outline-none focus:border-[#C3974C] focus:ring-2 focus:ring-[#C3974C]/30 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <input
              type="checkbox"
              className="mt-1 w-5 h-5 sm:w-[30px] sm:h-[30px] rounded border-gray-400 text-[#C3974C] focus:ring-[#C3974C]"
            />
            <p className="text-xs sm:text-[13px] leading-tight text-gray-600">
              Входя в аккаунт или создавая новый, вы соглашаетесь с нашими Правилами и условиями и Положением о конфиденциальности
            </p>
          </div>
          <Button
            text="Зарегистрироваться"
            className="w-full h-14 sm:h-[66px] rounded-xl bg-gradient-to-r from-[#D8C19A] to-[#C3974C] text-white font-medium text-base sm:text-lg shadow-md hover:shadow-lg hover:opacity-95 transition-all"
          />
        </form>
      </div>
    </div>
  );
}