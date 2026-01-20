"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import AddProjectModal from "@/components/AddProjectModal";
import { projects as defaultProjects } from "@/data/projects";
import LichniKabinet from "@/components/LichniKabinet";

const ITEMS_PER_LOAD = 6;

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [showModal, setShowModal] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("register");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [authData, setAuthData] = useState({ firstName: "", lastName: "", email: "", password: "", image: null });
  const [authError, setAuthError] = useState("");
const [showKabinet, setShowKabinet] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      setUsers(storedUsers);

      const savedUser = JSON.parse(localStorage.getItem("currentUser"));
      setCurrentUser(savedUser);

      if (savedUser) {
        const userProjects = JSON.parse(localStorage.getItem(`projects_${savedUser.email}`)) || defaultProjects;
        setProjects(userProjects);
      } else {
        const storedProjects = JSON.parse(localStorage.getItem("projects")) || defaultProjects;
        setProjects(storedProjects);
      }
    }
  }, []);

  // Save projects
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (currentUser) {
        localStorage.setItem(`projects_${currentUser.email}`, JSON.stringify(projects));
      } else {
        localStorage.setItem("projects", JSON.stringify(projects));
      }
    }
  }, [projects, currentUser]);

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  const visible = filtered.slice(0, visibleCount);

  const addProject = (project) => setProjects((prev) => [project, ...prev]);

  const deleteProject = (id) => {
    if (confirm("Rostdan o‘chirmoqchimisiz?")) {
      setProjects((prev) =>
        prev.filter((p) => (defaultProjects.some((dp) => dp.id === p.id) ? p : p.id !== id))
      );
    }
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setAuthData({ firstName: "", lastName: "", email: "", password: "", image: null });
    setAuthError("");
    setShowAuth(true);
  };

  const handleRegister = () => {
    const { firstName, lastName, email, password, image } = authData;
    if (!firstName || !lastName || !email || !password) {
      setAuthError("Barcha maydonlarni to‘ldiring!");
      return;
    }
    if (users.some(u => u.email === email)) {
      setAuthError("Bu email allaqachon ro‘yxatdan o‘tgan");
      return;
    }
    const newUser = { firstName, lastName, email, password, image };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setCurrentUser(newUser);
    setProjects(defaultProjects);
    setShowAuth(false);
  };

  const handleLogin = () => {
    const { email, password } = authData;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setCurrentUser(user);
      const userProjects = JSON.parse(localStorage.getItem(`projects_${user.email}`)) || defaultProjects;
      setProjects(userProjects);
      setShowAuth(false);
    } else {
      setAuthError("Email yoki parol noto‘g‘ri!");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAuthData(prev => ({ ...prev, image: reader.result }));
    reader.readAsDataURL(file);
  };

  return (
    <>
<Navbar
  currentUser={currentUser}
  setCurrentUser={setCurrentUser}
  openAuthModal={openAuthModal}
  onOpenKabinet={() => setShowKabinet(true)}
/>

      <section className="min-h-screen bg-gray-50 px-6 py-24">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              placeholder="Qidirish..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisibleCount(ITEMS_PER_LOAD); }}
              className="px-4 py-3 border rounded-xl w-full max-w-md"
            />
            {/* <button
              onClick={() => currentUser ? setShowModal(true) : openAuthModal("login")}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl"
            >
              Qo‘shish
            </button> */}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map(p => (
              <ProjectCard key={p.id} {...p} onDelete={deleteProject} />
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="text-center">
              <button
                onClick={() => {
                  if (!currentUser) {
                    openAuthModal("login"); // login bo‘lmagan bo‘lsa modal ochilsin
                  } else {
                    setVisibleCount((p) => p + ITEMS_PER_LOAD); // login bo‘lsa ko‘proq ko‘rsatilsin
                  }
                }}
                className="px-8 py-3 bg-indigo-600 text-white rounded-xl"
              >
                Ko‘proq ko‘rish
              </button>
            </div>
          )}
        </div>

        {/* Auth Modal */}
        {showAuth && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300 scale-100">

              {/* Header */}
              <div className="px-8 pt-8 pb-4 border-b dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {authMode === "register" ? "Ro‘yxatdan o‘tish" : "Tizimga kirish"}
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                  {authMode === "register"
                    ? "Yangi loyihalaringizni boshqarish uchun hisob oching"
                    : "Davom etish uchun tizimga kiring"}
                </p>
              </div>

              {/* Error */}
              {authError && (
                <div className="mx-8 mt-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm">
                  {authError}
                </div>
              )}

              {/* Form */}
              <div className="p-8 space-y-5">
                {authMode === "register" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ism</label>
                      <input
                        placeholder="Ismingiz"
                        value={authData.firstName}
                        onChange={e => setAuthData({ ...authData, firstName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Familiya</label>
                      <input
                        placeholder="Familiyangiz"
                        value={authData.lastName}
                        onChange={e => setAuthData({ ...authData, lastName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={authData.email}
                    onChange={e => setAuthData({ ...authData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Parol</label>
                  <input
                    type="password"
                    placeholder="Kamida 6 ta belgi"
                    value={authData.password}
                    onChange={e => setAuthData({ ...authData, password: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  />
                </div>

                {authMode === "register" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Profil rasmi (ixtiyoriy)</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 dark:file:bg-indigo-950 dark:file:text-indigo-300"
                    />
                    {authData.image && (
                      <div className="mt-3">
                        <img src={authData.image} alt="preview" className="h-16 w-16 rounded-full object-cover border-2 border-indigo-500" />
                      </div>
                    )}
                  </div>
                )}

                <button
                  onClick={authMode === "register" ? handleRegister : handleLogin}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition duration-200 shadow-md hover:shadow-lg mt-2"
                >
                  {authMode === "register" ? "Hisob yaratish" : "Kirish"}
                </button>
              </div>

              {/* Footer */}
              <div className="px-8 py-5 bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700 text-center text-sm">
                {authMode === "register" ? (
                  <p className="text-gray-600 dark:text-gray-400">
                    Allaqachon hisobingiz bormi?{" "}
                    <button
                      onClick={() => { setAuthMode("login"); setAuthError(""); }}
                      className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                    >
                      Kirish
                    </button>
                  </p>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">
                    Hisobingiz yo‘qmi?{" "}
                    <button
                      onClick={() => { setAuthMode("register"); setAuthError(""); }}
                      className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                    >
                      Ro‘yxatdan o‘tish
                    </button>
                  </p>
                )}
              </div>

              <button
                onClick={() => setShowAuth(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl"
              >
                ✕
              </button>
            </div>
            
          </div>
          
        )}
        {showModal && (
          <AddProjectModal onClose={() => setShowModal(false)} onAdd={addProject} />
        )}
      </section>
      
{showKabinet && (
  <LichniKabinet
    currentUser={currentUser}
    onClose={() => setShowKabinet(false)}
    onAdd={() =>
      currentUser ? setShowModal(true) : openAuthModal("login")
    }
  />
)}
    </>
  );
}
