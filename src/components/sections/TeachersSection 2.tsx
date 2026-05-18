"use client";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

export default function AnnualDaySection() {
  const photos = Array.from({ length: 16 });

  return (
    <section className="relative py-24 bg-white text-black font-['Poppins'] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-20 -left-20 opacity-5 pointer-events-none select-none">
        <h1 className="text-[20vw] font-black leading-none text-transparent stroke-black tracking-tighter" style={{ WebkitTextStroke: "2px black" }}>
          ANNUAL
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-end text-right">
          <div className="max-w-3xl mb-16 relative">
            <div className="absolute -right-6 top-0 h-full w-1 bg-black hidden md:block" />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Our Latest Annual Day Celebration
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed pl-8">
              Highlights from our grand Annual Day celebration where students
              showcased their talents through dance, drama, music, and various
              cultural performances.
            </p>
          </div>

          {/* THE GRID */}
          <div className="w-full lg:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-4">
             {photos.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: index % 2 === 0 ? 3 : -3,
                    zIndex: 20
                  }}
                  className="relative group cursor-pointer"
                >
                   <div className="w-full h-40 md:h-48 bg-gray-100 border-2 border-black relative overflow-hidden">
                      
                      {/* =========================================================
                          THE FIX: Removed 'grayscale' classes for full color!
                         ========================================================= */}
                      <Image
                        src={`/krishna-leela-${index + 1}.jpg`}
                        alt={`Annual Day Highlight ${index + 1}`}
                        fill
                        unoptimized={true} 
                        priority={index < 4}
                        className="object-cover group-hover:scale-110 transition-all duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <div className="w-8 h-8 border-2 border-white bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                            <ArrowDownRight size={16} />
                         </div>
                      </div>

                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-75 mix-blend-overlay" />
                   </div>
                </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}