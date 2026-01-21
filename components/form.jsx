// components/Forma.tsx
import React from "react";

const Button = ({ text, disabled = false }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`
        w-full py-4 px-8 
        bg-white text-black 
        font-medium text-lg 
        rounded-xl 
        transition-all duration-300
        hover:bg-gray-200 
        active:bg-gray-300
        disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed
      `}
    >
      {text}
    </button>
  );
};

export default function Forma() {
  return (
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

        <form className="space-y-8">
          <input
            type="text"
            placeholder="Ismingiz"
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
            placeholder="Telefon raqamingiz"
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

          <Button text="Yuborish" />

          <div className="flex items-start gap-4 mt-8 text-left text-sm md:text-base">
            <input
              type="checkbox"
              id="agreement"
              required
              className="mt-1.5 w-5 h-5 accent-white bg-gray-800 border-gray-600 rounded"
            />
            <label htmlFor="agreement" className="text-gray-400 cursor-pointer leading-relaxed">
              Tugmani bosish orqali shaxsiy ma'lumotlarni qayta ishlashga rozilik bildirasiz va{" "}
              <a href="/privacy" className="underline hover:text-white transition">
                maxfiylik siyosati
              </a>{" "}
              bilan tanishdingiz
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}