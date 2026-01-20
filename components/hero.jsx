"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white px-6 md:px-12 lg:px-20 py-24 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div className="space-y-9 text-center lg:text-left">

            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100"
            >
              Web Developers
            </motion.div>

            {/* 🔥 TYPING EFFECT TITLE */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-4xl font-extrabold tracking-tight leading-tight"
            >
              <span className="text-gray-900">I am </span>
              <span className=" text-yellow-600 bg-clip-text text-transparent">
                <Typewriter
                  words={[
                    "React Developer",
                    "Next.js Developer",
                    "Typscript Developer",
                    "Frontend Engineer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={60}
                  delaySpeed={1500}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl lg:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Zamonaviy, tezkor va chiroyli web ilovalar yarataman.
              Toza kod, yaxshi UX va yuqori performance — mening ustuvorligim.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="/projects"
                className="group px-8 py-4 bg-yellow-600 text-white rounded-xl font-semibold text-lg shadow-xl  transition flex items-center gap-2 justify-center"
              >
                Loyihalarim
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 border-2 border-gray-300 text-gray-800 rounded-xl font-semibold text-lg hover:border-yellow-600 hover:text-yellow-600 transition"
              >
                Bog‘lanish
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex justify-center lg:justify-start gap-6 pt-4"
            >
              <a href="https://github.com/YOUR_USERNAME" target="_blank">
                <Github className="w-7 h-7 text-gray-500 hover:text-indigo-600 transition" />
              </a>
              <a href="https://linkedin.com/in/quvonchbek" target="_blank">
                <Linkedin className="w-7 h-7 text-gray-500 hover:text-indigo-600 transition" />
              </a>
            </motion.div>
          </div>

          {/* IMAGE */}
          <motion.div variants={item} className="relative mx-auto max-w-md">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/quvonch.jpg"
                alt="Quvonchbek"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold text-indigo-700 border border-indigo-100">
              Open to Work
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
