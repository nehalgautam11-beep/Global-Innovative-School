"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Sparkles, Play, Pencil, Book, GraduationCap, Ruler, Rocket } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  
  // -- SCROLL PARALLAX --
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const paperY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const paperScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.95, 0.72]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const giantGX = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const accentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const planeScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  


  // Animation for the paper plane flying across the screen
  const planePath = {
    initial: { x: -100, y: 100, rotate: 0, opacity: 0 },
    animate: { 
      x: [ -100, 400, 800, 1400 ],
      y: [ 100, 0, -200, -500 ],
      rotate: [ 0, -10, -20, -10 ],
      opacity: [ 1, 1, 1, 0 ],
      transition: { 
        duration: 15, 
        repeat: Infinity, 
        ease: "linear" as const,
        delay: 1
      }
    }
  };

  const scrollToClasses = () => {
    document.getElementById("classes")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTour = () => {
    document.getElementById("school-tour")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800;900&family=Patrick+Hand&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-hand { font-family: 'Patrick Hand', cursive; }
        .graph-paper-pattern {
          background-image: 
              linear-gradient(#e5e7eb 1px, transparent 1px), 
              linear-gradient(90deg, #e5e7eb 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .texture-overlay {
          background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png");
          opacity: 0.5;
        }
      `}</style>

      <section
        ref={heroRef}
        className="relative w-full min-h-[88vh] flex bg-[#FFFBF2] font-poppins overflow-hidden [perspective:1500px]"
      >
        
        {/* =========================================================
            LAYER 0: BACKGROUND BASE (Graph Paper & Texture)
           ========================================================= */}
        <motion.div
          className="absolute inset-0 graph-paper-pattern opacity-40 z-0 pointer-events-none"
          style={{ y: paperY, scale: paperScale }}
        />
        
        {/* Paper Texture Overlay */}
        <motion.div
          className="absolute inset-0 texture-overlay z-0 pointer-events-none"
          style={{ y: accentY }}
        />


        {/* =========================================================
            LAYER 2: BACKGROUND ELEMENTS (Behind Content)
           ========================================================= */}
        
        {/* 1. THE BLACKOUT PAPER PLANE */}
        <motion.div className="absolute left-0 bottom-10 z-0 opacity-80 pointer-events-none" style={{ scale: planeScale }}>
          <motion.div variants={planePath} initial="initial" animate="animate">
             <svg width="180" height="100" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 30 L98 2 L30 58 L2 30 Z" fill="#2D3436" stroke="#2D3436" strokeWidth="2" strokeLinejoin="round" />
                <path d="M30 58 L45 35 L98 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M-50 50 Q -20 40 2 30" stroke="#2D3436" strokeWidth="2" strokeDasharray="4 4" />
             </svg>
          </motion.div>
        </motion.div>

        {/* 2. Giant Outline Letter 'G' */}
        <motion.div
          className="absolute -right-20 top-20 text-[400px] font-black text-gray-200 opacity-40 z-0 pointer-events-none select-none overflow-hidden leading-none"
          style={{ x: giantGX }}
        >
           G
        </motion.div>


        {/* =========================================================
            LAYER 3: SIDEBAR (Fixed Left)
           ========================================================= */}
        <div className="hidden lg:flex flex-col items-center w-[120px] h-screen fixed left-0 top-0 z-40 bg-white border-r-2 border-dashed border-gray-300 shadow-sm">
           <div className="h-full flex flex-col justify-center gap-20 py-10 overflow-hidden relative">
              <motion.div 
                animate={{ y: [0, -200] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="flex flex-col gap-16"
              >
                {[...Array(8)].map((_, i) => (
                   <span key={i} className="transform -rotate-90 text-xl font-black text-gray-300 tracking-[0.2em] whitespace-nowrap uppercase select-none">
                     SCHOOL • LIFE
                   </span>
                ))}
              </motion.div>
           </div>
        </div>


        {/* =========================================================
            LAYER 4: MAIN CONTENT
           ========================================================= */}
        <div className="flex-1 lg:ml-[120px] relative w-full z-10 [perspective:1200px]">
           
           <motion.div
             className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 min-h-[82vh] flex items-center"
             style={{ 
               y: contentY, 
               opacity: contentOpacity
             }}
           >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full [transform-style:preserve-3d]">
                 
                 {/* LEFT CONTENT */}
                 <div className="space-y-8 relative [transform:translateZ(60px)] transform-gpu transition-all duration-300">
                    
                    {/* Badge */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-2 bg-[#FF8F54] text-white px-5 py-2 rounded-full font-bold shadow-[4px_4px_0px_rgba(0,0,0,0.1)] transform -rotate-2 origin-left border-2 border-[#FF8F54]"
                    >
                      <Star size={16} fill="white" />
                      <span className="text-sm tracking-wide">Admissions Open 2026-27</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      className="text-5xl md:text-7xl xl:text-8xl font-black text-[#2D3436] leading-[0.9] tracking-tighter relative z-20 [text-shadow:4px_4px_0px_rgba(0,0,0,0.05)] [transform:translateZ(80px)]"
                    >
                      Global <br/>
                      <span className="relative inline-block">
                        Innovative
                        <span className="absolute bottom-2 left-0 w-full h-4 bg-[#4ACDDA]/40 -z-10 -skew-x-12 transform scale-105 rounded-sm" />
                      </span> <br/>
                      School
                    </motion.h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-2xl text-[#636e72] font-medium leading-relaxed max-w-lg border-l-4 border-[#2D3436] pl-6 bg-[#FFFBF2]/80 backdrop-blur-sm rounded-r-lg [transform:translateZ(40px)]">
                      A joyful learning environment where children grow with creativity.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4 [transform:translateZ(30px)]">
                      <motion.button
                        onClick={scrollToClasses}
                        className="px-6 md:px-8 py-3 md:py-4 bg-[#2D3436] text-white text-base md:text-lg font-bold rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-all flex items-center gap-3 border-2 border-[#2D3436] transform-gpu preserve-3d"
                      >
                        Start Journey <ArrowRight size={20} />
                      </motion.button>
                      
                      <motion.button
                        onClick={scrollToTour}
                        className="px-6 md:px-8 py-3 md:py-4 bg-white text-[#2D3436] text-base md:text-lg font-bold rounded-xl border-2 border-[#2D3436] shadow-[4px_4px_0px_rgba(0,0,0,0.1)] transition-all flex items-center gap-2 transform-gpu preserve-3d"
                      >
                        <Play size={18} fill="currentColor" /> Watch Video
                      </motion.button>
                    </div>

                 </div>

                 {/* RIGHT CONTENT (Polaroid) */}
                 <motion.div 
                    className="relative hidden lg:block [transform:translateZ(100px)]" 
                    style={{ y: photoY, scale: photoScale }}
                 >
                    <motion.div 
                      initial={{ rotate: 3, opacity: 0, y: 50 }}
                      animate={{ rotate: 3, opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                      className="relative z-10 w-full aspect-[4/5] bg-white p-4 pb-16 shadow-[20px_20px_60px_rgba(0,0,0,0.15)] transform rotate-3 rounded-sm border border-gray-100 transform-gpu preserve-3d transition-all duration-300"
                    >
                      <div className="relative w-full h-full overflow-hidden bg-gray-100 border border-gray-200 [transform:translateZ(40px)] shadow-inner">
                        <Image
                          src="/hero-bg4.jpg" 
                          alt="Happy Student"
                          fill
                          className="object-cover transition-transform duration-700"
                        />
                      </div>
                      
                      <div className="absolute bottom-5 left-0 w-full text-center [transform:translateZ(60px)]">
                         <span className="font-hand text-3xl text-gray-600 font-bold tracking-wide">Our Dream School</span>
                      </div>

                      {/* "FUN" Sticker */}
                      <motion.div 
                        className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#FFD059] rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white transform -rotate-12 z-30 [transform:translateZ(80px)]"
                      >
                        <Sparkles size={24} className="text-[#2D3436] mb-1" />
                        <span className="font-black text-[#2D3436] text-xs tracking-widest">FUN!</span>
                      </motion.div>

                      {/* Washi Tape */}
                      <div className="absolute -top-5 left-1/2 w-32 h-8 bg-[#FF8F54]/40 backdrop-blur-sm transform -rotate-2 -translate-x-1/2 shadow-sm [transform:translateZ(20px)]" />
                    </motion.div>
                 </motion.div>

              </div>
           </motion.div>
        </div>
      </section>
    </>
  );
}
