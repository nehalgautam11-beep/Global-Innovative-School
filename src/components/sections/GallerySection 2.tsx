"use client";

import { motion } from "framer-motion";
import { Camera, Zap, Heart, Smile } from "lucide-react";
import Image from "next/image"; 

// Update array to hold exactly 16 images
const images = Array.from({ length: 16 });

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-28 bg-[#fafafa] overflow-hidden font-['Poppins']">
      
      {/* =========================================================
          LAYER 0: VIBRANT, CLASSY MESH BACKGROUND
         ========================================================= */}
      {/* Soft blurred background blobs - Classy but vibrant */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] opacity-80" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-100/60 rounded-full blur-[120px] opacity-80" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-100/40 rounded-full blur-[150px] opacity-60" />
      </div>

      {/* Grid Pattern Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] z-0" xmlns="http://www.w3.org/2000/svg">
         <defs>
            <pattern id="dotPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="1.5" fill="#000" />
            </pattern>
         </defs>
         <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>

      {/* Floating Classy Doodles (Refined) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-20 left-20 transform -rotate-12 text-blue-500"><Zap size={40} strokeWidth={1} /></div>
        <div className="absolute bottom-32 right-20 transform rotate-12 text-pink-500"><Smile size={40} strokeWidth={1} /></div>
        <div className="absolute top-1/2 right-32 transform rotate-45 text-purple-500"><Heart size={30} strokeWidth={1} /></div>
      </div>


      {/* =========================================================
          CONTENT CONTAINER
         ========================================================= */}
      <div className="max-w-[1600px] mx-auto text-center relative z-10">
        
        {/* =========================================================
            HEADER: AESTHETIC & CLASSY TYPOGRAPHY
           ========================================================= */}
        <div className="px-4 md:px-6 mb-20">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white text-blue-600 rounded-full text-sm font-semibold uppercase tracking-widest mb-6 shadow-sm border border-blue-100">
               <Camera size={16} />
               <span>Snapshot Gallery</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a] tracking-tighter max-w-4xl mx-auto leading-[0.95]">
              Vibrant School <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">Moments & Memories</span>
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-gray-600 text-xl leading-relaxed font-medium">
              Explore the joyous journey of our students through classroom learning, artistic expressions, 
              sports triumphs, and everyday discoveries that shape our vibrant community.
            </p>
        </div>

        {/* =========================================================
            INFINITE LOOPING MARQUEE (16 Images per row)
           ========================================================= */}
        <div className="flex flex-col gap-10 relative">
           
           {/* Sophisticated Side Fade Gradients */}
           <div className="absolute top-0 left-0 w-40 md:w-80 h-full bg-gradient-to-r from-[#fafafa] to-transparent z-30 pointer-events-none" />
           <div className="absolute top-0 right-0 w-40 md:w-80 h-full bg-gradient-to-l from-[#fafafa] to-transparent z-30 pointer-events-none" />

           {/* --- ROW 1: SCROLLING LEFT --- */}
           {/* Faster scroll duration (40s) for 16 items */}
           <div className="flex overflow-hidden group">
             <motion.div 
               className="flex gap-8 px-4"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ ease: "linear", duration: 45, repeat: Infinity }}
             >
                {/* Loop 16 images twice (total 32 divs) */}
                {[...images, ...images].map((_, index) => (
                   <motion.div 
                     key={`row1-${index}`} 
                     className="relative w-80 h-56 flex-shrink-0 rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-[0_15px_60px_-15px_rgba(0,0,0,0.15)] bg-gray-100 group-hover:grayscale-[70%] hover:!grayscale-0 hover:scale-[1.03] transition-all duration-500 cursor-pointer"
                     // SLight elegant rotation stagger
                     style={{ rotate: index % 2 === 0 ? "1.5deg" : "-1.5deg" }}
                     whileHover={{ rotate: "0deg", y: -10 }}
                   >
                      {/* Gradient border accent (Vibrant Blue/Purple) */}
                      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600 z-10 pointer-events-none" />
                      
                      {/* Real Image 1-16 */}
                      <Image 
                        src={`/gallery-${(index % 16) + 1}.jpg`} 
                        alt={`School Highlight ${(index % 16) + 1}`} 
                        fill 
                        unoptimized
                        className="object-cover z-0" 
                      />

                      {/* High-end hover overlay icon */}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:hover:opacity-100 transition-opacity duration-300 z-10">
                        <Zap className="text-white" size={32} />
                      </div>
                   </motion.div>
                ))}
             </motion.div>
           </div>

           {/* --- ROW 2: SCROLLING RIGHT --- */}
           <div className="flex overflow-hidden group">
             <motion.div 
               className="flex gap-8 px-4"
               animate={{ x: ["-50%", "0%"] }}
               transition={{ ease: "linear", duration: 55, repeat: Infinity }}
             >
                {[...images, ...images].map((_, index) => (
                   <motion.div 
                     key={`row2-${index}`} 
                     className="relative w-80 h-56 flex-shrink-0 rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-[0_15px_60px_-15px_rgba(0,0,0,0.15)] bg-gray-100 group-hover:grayscale-[70%] hover:!grayscale-0 hover:scale-[1.03] transition-all duration-500 cursor-pointer"
                     // Offset rotation stagger so it doesn't match Row 1
                     style={{ rotate: index % 2 === 0 ? "-1.5deg" : "1.5deg" }}
                     whileHover={{ rotate: "0deg", y: -10 }}
                   >
                      {/* Gradient border accent (Vibrant Pink/Orange) */}
                      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-500 to-orange-500 z-10 pointer-events-none" />
                      
                      {/* Real Image 1-16 (Offset by 8 so rows look totally different) */}
                      <Image 
                        src={`/gallery-${((index + 8) % 16) + 1}.jpg`} 
                        alt={`School life memory ${((index + 8) % 16) + 1}`} 
                        fill 
                        unoptimized
                        className="object-cover z-0" 
                      />
                      
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:hover:opacity-100 transition-opacity duration-300 z-10">
                        <Heart className="text-white" size={32} />
                      </div>
                   </motion.div>
                ))}
             </motion.div>
           </div>

        </div>

      </div>
    </section>
  );
}