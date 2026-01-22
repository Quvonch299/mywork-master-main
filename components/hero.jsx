"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 md:px-10 lg:px-20 py-12 overflow-hidden">
      
      {/* Yulduzli background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-black" />

        <div
          className="absolute inset-0 bg-transparent animate-driftSlow opacity-60"
          style={{
            boxShadow: `
              1200px 800px 1px #fff,
              300px 1400px 1px #eee,
              1800px 500px 2px #fff,
              600px 1100px 1px #ddd,
              1500px 200px 1px #fff,
              400px 900px 1px #eee,
              900px 600px 1px #fff,
              200px 1700px 2px #ddd,
              1700px 300px 1px #fff,
              800px 1200px 1px #eee
            `,
          }}
        />

        <div
          className="absolute inset-0 bg-transparent animate-drift opacity-40"
          style={{
            boxShadow: `
              500px 700px 1px #fff,
              1400px 400px 1px #eee,
              100px 1600px 1px #fff,
              1100px 900px 2px #ddd,
              1600px 100px 1px #fff,
              700px 1300px 1px #eee
            `,
          }}
        />

        <div className="absolute inset-0 animate-twinkle opacity-45">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff28_1px,transparent_2px)] [background-size:50px_50px] sm:[background-size:70px_70px] md:[background-size:90px_90px]" />
        </div>
      </div>

      {/* Kontent */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Matn qismi */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2 rounded-full bg-gray-900/50 backdrop-blur-sm text-gray-300 text-sm sm:text-base font-medium border border-gray-700"
            >
              Frontend Developer
            </motion.div>

            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl font-extrabold tracking-tight leading-snug sm:leading-tight text-white"
            >
              I am{' '}
              <span className="text-white">
                <Typewriter
                  words={[
                    "React Developer",
                    "Next.js Developer",
                    "TypeScript Developer",
                    "Frontend Engineer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.h1>

            <motion.div
              variants={item}
              className="flex justify-center lg:justify-start gap-6 sm:gap-8 pt-4"
            >
              <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
              <a href="https://linkedin.com/in/quvonchbek" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Rasm qismi */}
          <motion.div variants={item} className="relative mx-auto max-w-[280px] sm:max-w-[380px] lg:max-w-md">
            <div className="relative rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl">
              <Image
                src="/quvonch.jpg"
                alt="Quvonchbek"
                width={600}
                height={800}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-5 -right-5 bg-gray-900/90 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700 text-xs sm:text-sm font-medium text-white shadow-lg"
            >
              Open to Work
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
