"use client";
import { motion } from "framer-motion";
import { Zap, ShieldCheck } from "lucide-react";
import Image from "next/image"; 

export default function KarateSection() {
  return (
    <section className="relative py-20 bg-[#0a0a0a] overflow-hidden font-['Poppins'] text-white">
      
      {/* =========================================================
          LAYER 0: THE "IMPACT" BACKGROUND
         ========================================================= */}
      
      {/* Giant Kinetic Brush Strokes (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
           d="M-200 600 C 100 500, 600 200, 1600 0" 
           stroke="#dc2626" strokeWidth="150" strokeLinecap="butt" opacity="0.1"
           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.path d="M-100 700 C 200 600, 500 400, 1200 100" stroke="#dc2626" strokeWidth="50" opacity="0.05" />
      </svg>
      
      {/* Subtle Dojo Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Background "KIAI" Text Watermark */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 font-black text-[20vw] text-white/[0.02] pointer-events-none select-none leading-none font-sans">
        KIAI
      </div>


      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* =========================================================
            MEDIA CONTAINER: THE "SHATTERED" FRAME
           ========================================================= */}
        <motion.div 
          initial={{ x: -100, opacity: 0, rotate: -5 }}
          whileInView={{ x: 0, opacity: 1, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          className="relative w-full h-[340px] md:h-[420px] group perspective-1000"
        >
            {/* The "Power Aura" Glow behind the image */}
            <div className="absolute inset-0 bg-red-600/30 blur-2xl rounded-lg transform rotate-6 scale-105 group-hover:rotate-0 transition-all duration-500" />
            
            {/* The Main Image Container */}
            <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden border-4 border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.3)] z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                
                {/* THE FIX: Removed the grayscale/blend classes! Full color immediately. */}
                <Image
                  src="/martial-arts.jpg"
                  alt="Students practicing Karate and Self Defence"
                  fill
                  unoptimized
                  className="object-cover z-0 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Vignette to make the text and border pop (leaves center colorful) */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 z-10 pointer-events-none" />

                {/* "Shattered Glass" Overlay Effect (SVG Pattern) */}
                <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none z-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
            </div>
            
            {/* Japanese Character Decoration ("Power/Strength") */}
            <div className="absolute -bottom-10 -right-10 text-9xl font-black text-red-700/20 select-none z-0 pointer-events-none">
               力
            </div>
        </motion.div>

        {/* =========================================================
            TEXT CONTENT: HIGH IMPACT TYPOGRAPHY
           ========================================================= */}
        <div className="relative">
          
          {/* Header with Energy Slash */}
          <div className="relative mb-8">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100px" }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="absolute -top-6 left-0 h-2 bg-red-600" 
             />
             <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
               Karate <span className="text-red-600">&</span><br/>
               Self Defence
             </h2>
             <h3 className="text-2xl font-bold text-red-100 mt-2 tracking-widest uppercase">
                Training
             </h3>
          </div>

          <div className="space-y-8 text-gray-300 text-lg leading-relaxed font-light relative z-10 pl-8 border-l-2 border-red-600/30">
            
            <p className="relative">
              <ShieldCheck className="absolute -left-12 top-1 text-red-600 w-6 h-6" />
              Regular karate and self defence sessions help students develop
              physical strength, discipline, focus, and mental resilience.
              These sessions are designed to build confidence and ensure that
              children feel safe and empowered.
            </p>

            <p className="relative">
              <ShieldCheck className="absolute -left-12 top-1 text-red-600 w-6 h-6" />
              Through structured training, students learn self-control,
              respect, and perseverance while also improving their fitness
              and coordination in a guided and safe environment.
            </p>
          </div>
          
          {/* Call to Action Button */}
          <div className="mt-12">
             <motion.a 
                href="#classes"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-red-600 text-red-500 hover:text-white font-bold uppercase tracking-wider overflow-hidden transition-colors duration-300"
             >
                <span className="relative z-10 flex items-center gap-2">Enter Dojo <Zap size={18} /></span>
                <div className="absolute inset-0 bg-red-600 transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
             </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
