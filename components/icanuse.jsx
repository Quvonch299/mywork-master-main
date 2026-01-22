'use client';

import React, { useRef, useEffect, useState } from 'react';
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiNodedotjs,
  SiVite, SiGithub, SiRedux, SiReactquery, SiChakraui, SiJquery,
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaVuejs, FaJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

const techItems = [
  { name: 'HTML / PUG', icon: FaHtml5, color: '#e34c26' },
  { name: 'CSS / SCSS', icon: FaCss3Alt, color: '#1572b6' },
  { name: 'Bootstrap / Tailwind', icon: FaBootstrap, color: '#7952b3' },
  { name: 'Element UI / Chakra UI', icon: SiChakraui, color: '#319795' },
  { name: 'JavaScript / TypeScript', icon: FaJs, color: '#f7df1e' },
  { name: 'JQuery / Gulp', icon: SiJquery, color: '#0769ad' },
  { name: 'React / Redux', icon: SiReact, color: '#61dafb' },
  { name: 'Next / React Query', icon: TbBrandNextjs, color: '#ffffff' },
  { name: 'Vue 3 / Vuex', icon: FaVuejs, color: '#42b883' },
  { name: 'GitHub / GitLab', icon: SiGithub, color: '#ffffff' },
];

const TechMarquee = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);
  const speed = 1.2;

  const doubledItems = [...techItems, ...techItems];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    let rafId; 
    const animate = () => {
      if (!isPaused) {
        positionRef.current -= speed;
        if (positionRef.current <= -totalWidth) {
          positionRef.current += totalWidth;
        }
        container.style.transform = `translateX(${positionRef.current}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  return (
    <div
      className="w-full overflow-hidden  py-14 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Gradient maskalar */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />

      <div
        ref={containerRef}
        className="flex whitespace-nowrap will-change-transform gap-6 md:gap-8"
        style={{ transform: 'translateX(0px)' }}
      >
        {doubledItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={`
                group flex-shrink-0 flex items-center gap-3.5
                bg-gray-900/60 backdrop-blur-md
                border border-gray-700/50
                rounded-2xl px-6 py-4
                min-w-[180px] md:min-w-[210px]
                transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                hover:shadow-[${item.color}40]
                hover:border-[${item.color}80]
              `}
            >
              <Icon
                className="text-4xl transition-transform duration-300 group-hover:scale-110"
                style={{ color: item.color }}
              />
              <span className="text-white font-medium text-base md:text-lg tracking-tight">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechMarquee;
