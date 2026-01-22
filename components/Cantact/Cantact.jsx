"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const staggerContainer = {
    show: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="min-h-screen bg-white px-5 sm:px-8 lg:px-24 py-20 text-black flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-2xl md:text-5xl font-black mb-16 text-center tracking-tight"
      >
        Contact
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 w-full max-w-7xl">
        {/* Left - Social Links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-10 text-black">Connect</h2>

          <motion.a
            variants={item}
            href="https://github.com/Quvonch299"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 bg-gray-100 rounded-2xl border border-gray-300 hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Github className="w-8 h-8 text-gray-700 group-hover:text-black transition-colors" />
            <div>
              <span className="block font-semibold text-lg text-black">GitHub</span>
              <span className="text-sm text-gray-600">@Quvonch299</span>
            </div>
          </motion.a>

          <motion.a
            variants={item}
            href="https://linkedin.com/in/quvonchbek"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 bg-gray-100 rounded-2xl border border-gray-300 hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Linkedin className="w-8 h-8 text-gray-700 group-hover:text-black transition-colors" />
            <div>
              <span className="block font-semibold text-lg text-black">LinkedIn</span>
              <span className="text-sm text-gray-600">/in/quvonchbek</span>
            </div>
          </motion.a>

          <motion.a
            variants={item}
            href="https://instagram.com/quvonch_123r"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 bg-gray-100 rounded-2xl border border-gray-300 hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Instagram className="w-8 h-8 text-gray-700 group-hover:text-black transition-colors" />
            <div>
              <span className="block font-semibold text-lg text-black">Instagram</span>
              <span className="text-sm text-gray-600">@quvonch_123r</span>
            </div>
          </motion.a>

          <motion.a
            variants={item}
            href="https://t.me/Only1Quvonch"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 bg-gray-100 rounded-2xl border border-gray-300 hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-8 h-8 text-gray-700 group-hover:text-black transition-colors" />
            <div>
              <span className="block font-semibold text-lg text-black">Telegram</span>
              <span className="text-sm text-gray-600">@Only1Quvonch</span>
            </div>
          </motion.a>

          <motion.a
            variants={item}
            href="mailto:mominovquvonch2@gmail.com"
            className="group flex items-center gap-5 p-6 bg-gray-100 rounded-2xl border border-gray-300 hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Mail className="w-8 h-8 text-gray-700 group-hover:text-black transition-colors" />
            <div>
              <span className="block font-semibold text-lg text-black">Email</span>
              <span className="text-sm text-gray-600">mominovquvonch2@gmail.com</span>
            </div>
          </motion.a>
        </motion.div>

        {/* Right - Map (Buxoro) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="rounded-2xl overflow-hidden border border-gray-300 shadow-md h-96 lg:h-auto"
        >
          <iframe
            title="Location - Buxoro, Uzbekistan"
            className="w-full h-full grayscale"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.927!2d64.428!3d39.774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d5d!2sBukhara%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1730000000000!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}