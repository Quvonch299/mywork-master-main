import About from '@/components/about'
import Forma from '@/components/form'
import Hero from '@/components/hero'
import SimpleNavbar from '@/components/Navbar1'
import React from 'react'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Oq-qora yulduzli kosmik background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Asosiy qora fon */}
        <div className="absolute inset-0 bg-black" />

        {/* Yulduzlar qatlami 1 (sekin harakatlanuvchi, kattaroq) */}
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

        {/* Yulduzlar qatlami 2 (o'rta tezlik) */}
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

        {/* Subtle twinkling (porlash effekti) */}
        <div className="absolute inset-0 animate-twinkle opacity-50 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff28_1px,transparent_2px)] [background-size:70px_70px]" />
        </div>
      </div>

      {/* Asosiy kontent – yuqori qatlamda */}
      <div className="relative z-10">
        <SimpleNavbar />
        <Hero />
        <About />
        <Forma />
      </div>
    </div>
  )
}