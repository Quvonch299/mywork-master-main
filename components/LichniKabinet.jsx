"use client";

import { useState, useEffect } from "react";

export default function LichniKabinet({ currentUser, onAdd, onClose }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!currentUser) return;

    const key = `admin_verified_${currentUser.email}`;
    const verified = localStorage.getItem(key) === "true";

    if (verified) {
      setIsAdmin(true);
    }
  }, [currentUser]);

  if (!currentUser) return null;

  const handleCheck = () => {
    if (login === "mominovquvonch2@gmail.com" && password === "quvonch123@@@#") {
      setIsAdmin(true);
      setError("");

      // saqlab qo'yamiz
      const key = `admin_verified_${currentUser.email}`;
      localStorage.setItem(key, "true");
    } else {
      setError("❌ Login yoki parol noto‘g‘ri");
      setIsAdmin(false);
    }
  };

  const handleAddAndClose = () => {
    onAdd();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-700/70 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl shadow-black/60">

        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-800/50 flex items-center justify-between bg-gray-950/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">Lichni kabinet</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {!isAdmin ? (
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-300 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Admin login
                </label>
                <input
                  type="text"
                  placeholder="Login..."
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="w-full bg-gray-800/70 border border-gray-700 text-white px-4 py-3.5 rounded-xl placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm text-gray-300 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2m4 0c0-1.1.9-2 2-2s2 .9 2 2m-4 5v3m-6 0h12a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Parol
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-800/70 border border-gray-700 text-white px-4 py-3.5 rounded-xl placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition-all"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-950/40 border border-red-800/50 text-red-300 p-3.5 rounded-xl text-sm flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {error}
              </div>
            )}

            <button
              onClick={handleCheck}
              className="w-full py-3.5 bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700 hover:from-amber-600 hover:via-amber-500 hover:to-orange-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tekshirish
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/30 border border-green-700/40 rounded-xl p-5 text-center">
              <div className="flex items-center justify-center gap-3 text-lg">
                <div className="w-10 h-10 rounded-full bg-green-600/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-green-300">Admin tasdiqlandi</span>
              </div>
            </div>

            <button
              onClick={handleAddAndClose}
              className="w-full py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 hover:from-amber-500 hover:via-amber-400 hover:to-orange-500 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 text-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Qo‘sh
            </button>

            <button
              onClick={onClose}
              className="w-full py-3.5 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 text-gray-300 font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Yopish
            </button>
          </div>
        )}
      </div>
    </div>
  );
}