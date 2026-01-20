'use client';

import Button from '@/components/ui/Buttom';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-5 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-[581px] space-y-6 sm:space-y-8">
        <h2 className="text-center sm:text-left text-2xl sm:text-[32px] font-semibold leading-tight tracking-[-0.04em] text-gray-900">
          Вход
        </h2>
        <div className="space-y-4 sm:space-y-6">
          <div className="relative">
            <input
              type='text'
              placeholder="Email"
              className="w-full px-4 sm:px-6 h-14 sm:h-[66px] text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-white border border-gray-300 sm:border-gray-700 rounded-xl outline-none focus:border-[#C3974C] focus:ring-1 focus:ring-[#C3974C] transition-all"
            />
        
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Parol"
              className="w-full px-4 sm:px-6 h-14 sm:h-[66px] text-base sm:text-lg text-gray-900 placeholder-gray-500 bg-white border border-gray-300 sm:border-gray-700 rounded-xl outline-none focus:border-[#C3974C] focus:ring-1 focus:ring-[#C3974C] transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm sm:text-[16px] text-[#27272799]">
          <p className="text-center sm:text-left">
            У вас еще нет аккаунта?
          </p>
          <Link
            href="/auth/registration"
            className="text-center sm:text-right font-medium bg-gradient-to-r from-[#D8C19A] via-[#D8C19A] to-[#C3974C] bg-clip-text text-transparent hover:underline"
          >
            Зарегистрироваться
          </Link>
        </div>
        <Button
          text="Войти"
          className="w-full h-14 sm:h-[66px] rounded-xl sm:rounded-[12px] bg-gradient-to-r from-[#D8C19A] to-[#C3974C] text-white font-medium text-base sm:text-lg shadow-md hover:shadow-lg transition-all"
        />
      </div>
    </div>
  );
}