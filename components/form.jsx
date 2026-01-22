'use client';
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const CustomToast = ({ message, type = 'success' }) => {
  const borderColor = type === 'success' ? 'border-green-500' : 'border-red-500';
  const textColor = type === 'success' ? 'text-green-400' : 'text-red-400';

  return (
    <div className={`
      min-w-[320px] max-w-[420px] 
      bg-gray-900/95 backdrop-blur-sm 
      text-white 
      rounded-xl 
      border-l-4 ${borderColor}
      shadow-2xl shadow-black/40
      overflow-hidden
    `}>
      <div className="px-5 py-4 flex items-center gap-3">
        <div className={`text-2xl ${textColor}`}>
          {type === 'success' ? '✓' : '✕'}
        </div>
        <div className="flex-1 text-base font-medium">
          {message}
        </div>
      </div>
      <div className={`h-1 w-full bg-gradient-to-r ${type === 'success' ? 'from-green-500/70 to-green-600/30' : 'from-red-500/70 to-red-600/30'}`} />
    </div>
  );
};

const Button = ({ text, disabled = false, isLoading = false }) => {
  return (
    <button
      type="submit"
      disabled={disabled || isLoading}
      className={`
        w-full py-4 px-8
        bg-white text-black
        font-medium text-lg
        rounded-xl
        transition-all duration-300
        hover:bg-gray-200 active:bg-gray-300
        disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed
        flex items-center justify-center gap-3
      `}
    >
      {isLoading ? (
        <>
          <span className="animate-spin h-5 w-5 border-2 border-black/30 border-t-black rounded-full" />
          Yuborilmoqda...
        </>
      ) : text}
    </button>
  );
};

export default function Forma() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Faqat raqam va + belgisiga ruxsat
    if (/^[\d+]*$/.test(value) || value === '') {
      setPhone(value);
    }
  };

  const validateForm = () => {
    if (!name.trim()) {
      toast.custom((t) => (
        <CustomToast message="Ismni kiriting" type="error" />
      ), { duration: 4000 });
      return false;
    }

    if (!phone) {
      toast.custom((t) => (
        <CustomToast message="Telefon raqamini kiriting" type="error" />
      ), { duration: 4000 });
      return false;
    }

    // Oddiy telefon validatsiyasi (masalan: 9-13 ta raqam)
    if (!/^[+]?[0-9]{9,13}$/.test(phone.replace(/\s/g, ''))) {
      toast.custom((t) => (
        <CustomToast message="Telefon raqami noto‘g‘ri formatda" type="error" />
      ), { duration: 5000 });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Bu yerda haqiqiy backend ga yuborish kodini qo'yasiz
    // Hozircha 1.5 soniya kutib success ko‘rsatamiz
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.custom((t) => (
      <CustomToast message="Muvaffaqiyatli yuborildi! Tez orada bog‘lanamiz ✦" type="success" />
    ), { duration: 5000 });

    // Formani tozalash
    setName('');
    setPhone('');
    setIsSubmitting(false);
  };

  return (
    <>
      <Toaster 
        position="bottom-center"
        containerStyle={{ marginBottom: '1.5rem' }}
        toastOptions={{
          duration: 4500,
        }}
      />

      <section className="relative py-32 md:py-48 px-4 bg-black overflow-hidden">
        {/* Kosmik yulduzli fon */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-black" />
          
          <div
            className="absolute inset-0 bg-transparent opacity-60"
            style={{
              boxShadow: `
                1200px 800px 1px #fff, 300px 1400px 1px #eee,
                1800px 500px 2px #fff, 600px 1100px 1px #ddd,
                1500px 200px 1px #fff, 400px 900px 1px #eee,
                900px 600px 1px #fff, 200px 1700px 2px #ddd
              `,
            }}
          />
          
          <div
            className="absolute inset-0 bg-transparent opacity-40"
            style={{
              boxShadow: `
                500px 700px 1px #fff, 1400px 400px 1px #eee,
                100px 1600px 1px #fff, 1100px 900px 2px #ddd
              `,
            }}
          />

          <div className="absolute inset-0 opacity-45">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff28_1px,transparent_2px)] [background-size:70px_70px]" />
          </div>
        </div>

        {/* Forma kontenti */}
        <div className="relative z-10 max-w-[720px] mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-normal text-white mb-6">
            Bog‘lanish
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-xl mx-auto">
            Formani to‘ldiring, tez orada bog‘lanaman
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              placeholder="Ismingiz"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full pb-4 px-2
                bg-transparent
                border-b-2 border-gray-600
                text-xl text-white
                placeholder:text-gray-500
                focus:outline-none focus:border-white
                transition-colors
              "
            />

            <input
              type="tel"
              placeholder="Telefon raqamingiz (masalan: +998901234567)"
              value={phone}
              onChange={handlePhoneChange}
              required
              className="
                w-full pb-4 px-2
                bg-transparent
                border-b-2 border-gray-600
                text-xl text-white
                placeholder:text-gray-500
                focus:outline-none focus:border-white
                transition-colors
              "
            />

            <Button 
              text="Yuborish" 
              disabled={isSubmitting}
              isLoading={isSubmitting}
            />

            <div className="flex items-start gap-4 mt-8 text-left text-sm md:text-base">
              <input
                type="checkbox"
                id="agreement"
                required
                className="mt-1.5 w-5 h-5 accent-white bg-gray-800 border-gray-600 rounded"
              />
              <label htmlFor="agreement" className="text-gray-400 cursor-pointer leading-relaxed">
                Tugmani bosish orqali shaxsiy ma`lumotlarni qayta ishlashga rozilik bildirasiz va{" "}
                <a href="/privacy" className="underline hover:text-white transition">
                  maxfiylik siyosati
                </a>{" "}
                bilan tanishdingiz
              </label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}