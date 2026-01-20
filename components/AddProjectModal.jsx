"use client";

import { useState } from "react";

export default function AddProjectModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    image: "/projects/landing.png",
    link: "#",
  });

  const handleSubmit = () => {
    if (!form.title || !form.description) {
      alert("Title va description majburiy");
      return;
    }

    const newProject = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      tech: form.tech ? form.tech.split(",") : [],
      image: form.image,
      link: form.link,
    };

    onAdd(newProject);
    onClose();

    // Reset form
    setForm({
      title: "",
      description: "",
      tech: "",
      image: "/projects/landing.png",
      link: "#",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Loyiha qo‘shish</h2>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border px-4 py-2 rounded-lg"
        />
        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border px-4 py-2 rounded-lg"
        />
        <input
          placeholder="Tech (React, Next.js)"
          value={form.tech}
          onChange={(e) => setForm({ ...form, tech: e.target.value })}
          className="w-full border px-4 py-2 rounded-lg"
        />
        <input
          placeholder="Image path (/projects/x.png)"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full border px-4 py-2 rounded-lg"
        />
        <input
          placeholder="Project link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          className="w-full border px-4 py-2 rounded-lg"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg"
        >
          Qo‘shish
        </button>
        <button onClick={onClose} className="text-sm text-gray-500 w-full">
          Yopish
        </button>
      </div>
    </div>
  );
}
