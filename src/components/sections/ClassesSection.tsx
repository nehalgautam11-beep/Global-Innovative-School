"use client";
import Link from "next/link";
import { ArrowRight, Calculator, Microscope, Palette, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image"; // <-- Added Image import

export default function ClassesSection() {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.12,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };
  

  return (
    <section id="classes" className="relative py-20 bg-[#F8F9FC] font-['Poppins'] overflow-hidden [perspective:1200px]">
      
      {/* =========================================================================
          LAYER 0: SOFT DECORATIVE SPOTS
         ========================================================================= */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Doodles Pattern Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#333" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <path d="M-100,200 Q200,50 500,300 T1000,100 T1500,400" fill="none" stroke="#333" strokeWidth="3" strokeDasharray="10 15" className="opacity-20" />
      </svg>


      {/* =========================================================================
          MAIN CONTENT
         ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 relative"
        >
          <span className="text-[#FF8F54] font-bold tracking-wider text-sm uppercase bg-white px-4 py-1.5 rounded-full shadow-sm border border-orange-100">
            Academics
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#2D3436] tracking-tight">
            Classes & Wings
          </h2>
          <motion.div
            initial={{ width: 0, opacity: 0.3 }}
            whileInView={{ width: 96, opacity: 0.8 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="h-1.5 bg-gradient-to-r from-[#FF8F54] to-[#FFD059] mx-auto mt-5 rounded-full"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          
          {/* CARD 1: KG */}
          <motion.div
            custom={0}
            variants={cardVariants}
            className="h-full bg-white rounded-[2.5rem] p-5 border border-pink-50 transition-all duration-500 ease-out transform-gpu [transform-style:preserve-3d] relative overflow-hidden group [perspective:1000px]"
          >
            <Link href="/pre-primary" className="absolute inset-0 z-50 rounded-[2.5rem]" aria-label="View Pre-Primary details" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-50 rounded-bl-[100px] z-0 opacity-60 pointer-events-none" />
            
            <div className="w-full h-56 rounded-[2rem] overflow-hidden relative z-10 shadow-inner bg-gray-100 [transform:translateZ(20px)] pointer-events-none">
                <Image 
                  src="/pre-primary-wing.jpg" 
                  alt="Pre-Primary Students" 
                  fill 
                  unoptimized
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-pink-500 shadow-sm flex items-center gap-1 z-20">
                  🧸 Play Group
                </div>
              </div>

              <div className="text-left mt-8 px-2 pb-2 relative z-10 [transform:translateZ(30px)]">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">Play Group & KG</h3>
                <p className="mt-4 text-gray-500 text-sm leading-7 font-medium">A joyful nurturing environment where learners begin their journey through play-based activities.</p>
                <div className="mt-8 flex items-center gap-3 text-pink-500 font-bold text-sm">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shadow-sm"><ArrowRight size={18} /></div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">View Details</span>
                </div>
              </div>
            </motion.div>

          {/* CARD 2: Primary */}
          <motion.div
            custom={1}
            variants={cardVariants}
            className="h-full bg-white rounded-[2.5rem] p-5 border border-yellow-50 transition-all duration-500 ease-out transform-gpu [transform-style:preserve-3d] relative overflow-hidden group [perspective:1000px]"
          >
            <Link href="/primary" className="absolute inset-0 z-50 rounded-[2.5rem]" aria-label="View Primary details" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-50 rounded-bl-[100px] z-0 opacity-60 pointer-events-none" />
            
            <div className="w-full h-56 rounded-[2rem] overflow-hidden relative z-10 shadow-inner bg-gray-100 [transform:translateZ(20px)] pointer-events-none">
                <Image 
                  src="/primary-wing.jpg" 
                  alt="Primary Students" 
                  fill 
                  unoptimized
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-yellow-600 shadow-sm flex items-center gap-1 z-20">
                  ✏️ Grade 1 - 5
                </div>
              </div>

              <div className="text-left mt-8 px-2 pb-2 relative z-10 [transform:translateZ(30px)]">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-yellow-500 transition-colors">Primary Wing</h3>
                <p className="mt-4 text-gray-500 text-sm leading-7 font-medium">Strong academic foundation focusing on numeracy and personality development through interaction.</p>
                <div className="mt-8 flex items-center gap-3 text-yellow-500 font-bold text-sm">
                  <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-sm"><ArrowRight size={18} /></div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">View Details</span>
                </div>
              </div>
            </motion.div>

          {/* CARD 3: Middle */}
          <motion.div
            custom={2}
            variants={cardVariants}
            className="h-full bg-white rounded-[2.5rem] p-5 border border-cyan-50 transition-all duration-500 ease-out transform-gpu [transform-style:preserve-3d] relative overflow-hidden group [perspective:1000px]"
          >
            <Link href="/middle-wing" className="absolute inset-0 z-50 rounded-[2.5rem]" aria-label="View Middle Wing details" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-50 rounded-bl-[100px] z-0 opacity-60 pointer-events-none" />
            
            <div className="w-full h-56 rounded-[2rem] overflow-hidden relative z-10 shadow-inner bg-gray-100 [transform:translateZ(20px)] pointer-events-none">
                <Image 
                  src="/middle-wing.jpg" 
                  alt="Middle School Students" 
                  fill 
                  unoptimized
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-cyan-600 shadow-sm flex items-center gap-1 z-20">
                  🔬 Grade 6 - 8
                </div>
              </div>

              <div className="text-left mt-8 px-2 pb-2 relative z-10 [transform:translateZ(30px)]">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-cyan-500 transition-colors">Middle School</h3>
                <p className="mt-4 text-gray-500 text-sm leading-7 font-medium">Advanced concepts and critical thinking skills to prepare students for higher education challenges.</p>
                <div className="mt-8 flex items-center gap-3 text-cyan-500 font-bold text-sm">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm"><ArrowRight size={18} /></div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">View Details</span>
                </div>
              </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
