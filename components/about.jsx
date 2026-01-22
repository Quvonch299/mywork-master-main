"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, 
  SiJavascript, SiTypescript, SiJquery, SiGulp, 
  SiReact, SiRedux, SiNextdotjs, SiReactquery, 
  SiVuedotjs, SiVuex, SiGithub, SiGitlab 
} from "react-icons/si";

const skillsLeft = [
  { name: "HTML / PUG", percent: 100, icon: <SiHtml5 className="text-white text-2xl" /> },
  { name: "CSS / Scss", percent: 95, icon: <SiCss3 className="text-white text-2xl" /> },
  { name: "Bootstrap / Tailwind", percent: 99, icon: <SiTailwindcss className="text-white text-2xl" /> },
  { name: "Element UI / Chakra UI", percent: 99, icon: <SiReact className="text-white text-2xl" /> },
  { name: "JavaScript / TypeScript", percent: 80, icon: <SiJavascript className="text-white text-2xl" /> },
];

const skillsRight = [
  { name: "Jquery / Gulp", percent: 85, icon: <SiJquery className="text-white text-2xl" /> },
  { name: "ReactJs / Redux", percent: 90, icon: <SiRedux className="text-white text-2xl" /> },
  { name: "Next / React Query", percent: 90, icon: <SiNextdotjs className="text-white text-2xl" /> },
  { name: "Vue 3 / Vuex", percent: 65, icon: <SiVuedotjs className="text-white text-2xl" /> },
  { name: "Github / Gitlab", percent: 70, icon: <SiGithub className="text-white text-2xl" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-8 bg-black overflow-hidden">
      {/* Kosmik background - faqat oq-qora yulduzcha */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-90" />
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:50px_50px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        {/* Sarlavha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl font-black text-white tracking-wider drop-shadow-[0_4px_6px_rgba(255,255,255,0.1)]">
            Skills
          </h2>
          <div className="mt-6 h-1.5 w-40 mx-auto bg-gradient-to-r from-gray-300 via-white to-gray-300 rounded-full opacity-80" />
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
        >
          {/* Chap ustun */}
          <div className="space-y-8">
            {skillsLeft.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group flex items-center gap-5 bg-gray-950/60 backdrop-blur-sm p-5 rounded-xl border border-gray-800 hover:border-gray-400 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-gray-900/50 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-gray-200">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percent}%` }}
                      transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-gray-400 via-white to-gray-400 rounded-full group-hover:brightness-150 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* O'ng ustun */}
          <div className="space-y-8">
            {skillsRight.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group flex items-center gap-5 bg-gray-950/60 backdrop-blur-sm p-5 rounded-xl border border-gray-800 hover:border-gray-400 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-gray-900/50 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-gray-200">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percent}%` }}
                      transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-gray-400 via-white to-gray-400 rounded-full group-hover:brightness-150 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}