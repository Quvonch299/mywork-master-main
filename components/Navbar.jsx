"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({
  currentUser,
  setCurrentUser,
  openAuthModal,
  onOpenKabinet,
}) {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    window.location.reload();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const updatedUser = { ...currentUser, image: reader.result };
      setCurrentUser(updatedUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    };
    reader.readAsDataURL(file);
  };

  return (
    <nav className="p-4  bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            width={180} 
            height={50} 
            alt="Logo" 
            priority
            className="object-contain brightness-110 contrast-110"
          />
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">
          {!currentUser ? (
            <div className="flex items-center gap-4">
              <button
                onClick={() => openAuthModal("login")}
                className="px-3 sm:px-5 py-2 text-gray-300 hover:text-white font-medium transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14" />
                </svg>
                <span className="hidden sm:inline">Kirish</span>
              </button>
              <button
                onClick={() => openAuthModal("register")}
                className="px-4 sm:px-6 py-2 bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden sm:inline">Ro‘yxatdan o‘tish</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 sm:gap-6">
              
              {/* Kabinet button - hidden on mobile */}
              <button
                onClick={onOpenKabinet}
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-amber-400 font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Kabinet
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-3 px-2 py-1.5 rounded-full hover:bg-gray-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                >
                  {currentUser.image ? (
                    <img
                      src={currentUser.image}
                      alt="Profil"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-500/30 shadow-md"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-700 text-white flex items-center justify-center font-semibold shadow-md">
                      {currentUser.firstName?.[0]?.toUpperCase() || "?"}
                    </div>
                  )}
                  <div className="hidden sm:flex flex-col items-start">
                    <span className="text-sm font-semibold text-white">
                      {currentUser.firstName}
                    </span>
                    <span className="text-xs text-gray-400">
                      {currentUser.role || "Foydalanuvchi"}
                    </span>
                  </div>
                  <svg 
                    className={`w-4 h-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {open && (
                  <>
                    <div 
                      className="fixed inset-0 z-40 bg-black/20" 
                      onClick={() => setOpen(false)}
                    />
                    <div className="absolute right-0 mt-3 w-72 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden text-gray-200">
                      <div className="px-5 py-4 border-b border-gray-800">
                        <p className="font-medium text-white">{currentUser.firstName} {currentUser.lastName || ""}</p>
                        <p className="text-sm text-gray-400 truncate">{currentUser.email || "email yo‘q"}</p>
                      </div>

                      <div className="py-2">
                        <label className="flex items-center gap-3 px-5 py-3.5 cursor-pointer hover:bg-gray-800 text-gray-300 text-sm transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Profil rasmini o‘zgartirish
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </label>

                        <button
                          onClick={onOpenKabinet}
                          className="w-full flex items-center gap-3 px-5 py-3.5 text-gray-300 hover:bg-gray-800 text-sm transition-colors sm:hidden"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          Lichni kabinet
                        </button>

                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-5 py-3.5 text-red-400 hover:bg-red-900/30 hover:text-red-300 text-sm font-medium transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Chiqish
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
