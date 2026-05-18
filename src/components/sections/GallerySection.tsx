"use client";

import { motion } from "framer-motion";
import { Camera, Heart, Smile, Zap } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const images = Array.from({ length: 16 });

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Simplified container variants for a clean fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative overflow-hidden bg-[#fafafa] py-20 font-['Poppins']"
    >
      {/* =========================================================
          LAYER 0: DECORATIVE BACKGROUND
         ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-[120px] opacity-80" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-100/40 blur-[120px] opacity-80" />
      </div>

      <svg
        className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#000" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>

      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute left-20 top-20 -rotate-12 text-blue-500">
          <Zap size={40} strokeWidth={1} />
        </div>
        <div className="absolute bottom-32 right-20 rotate-12 text-pink-500">
          <Smile size={40} strokeWidth={1} />
        </div>
      </div>

      {/* =========================================================
          LAYER 1: HEADER
         ========================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl text-center px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-white px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-blue-600 shadow-sm">
            <Camera size={16} />
            <span>Snapshot Gallery</span>
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-[0.95] tracking-tighter text-[#1a1a1a] md:text-6xl">
            Vibrant School{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Moments & Memories
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-gray-600">
            Explore the joyous journey of our students through classroom learning,
            artistic expressions, and everyday discoveries.
          </p>
        </motion.div>

        {/* =========================================================
            LAYER 2: SIMPLE SCROLLABLE GRID
           ========================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {images.map((_, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl md:rounded-[2.5rem] border-[6px] md:border-[10px] border-white bg-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1.5 md:h-2 bg-gradient-to-r ${
                index % 3 === 0 ? 'from-blue-500 to-purple-600' : 
                index % 3 === 1 ? 'from-pink-500 to-orange-500' : 
                'from-green-400 to-cyan-500'
              }`} />

              <Image
                src={`/gallery-${index + 1}.jpg`}
                alt={`School memory ${index + 1}`}
                fill
                unoptimized
                className="z-0 object-cover"
              />

              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300">
                {index % 2 === 0 ? <Zap className="text-white" size={32} /> : <Heart className="text-white" size={32} />}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
