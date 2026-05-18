"use client";
import { motion } from "framer-motion";
import { Music, Mic, Star, Sparkles, PartyPopper } from "lucide-react";

export default function CulturalFestSection() {
  

  return (
    <section className="relative py-20 bg-[#FFF9F0] font-['Poppins'] overflow-hidden">
      
      {/* =========================================================
          LAYER 0: FESTIVE BACKGROUND DECORATIONS
         ========================================================= */}
      
      {/* 1. Top "Stage Light" Gradient */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-100/50 to-transparent pointer-events-none" />

      {/* 2. Subtle Confetti Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30" 
           style={{ backgroundImage: "radial-gradient(#FFD700 1.5px, transparent 1.5px), radial-gradient(#FF69B4 1.5px, transparent 1.5px)", backgroundSize: "30px 30px", backgroundPosition: "0 0, 15px 15px" }}>
      </div>


      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
        
        {/* =========================================================
            HEADER: THEATRICAL STYLE
           ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-4"
        >
           {/* Sparkle Decoration */}
           <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-yellow-500 animate-pulse">
              <Sparkles size={32} />
           </div>
           
           <h2 className="text-3xl md:text-4xl font-black text-[#4A148C] tracking-tight relative z-10 drop-shadow-sm">
             Cultural Activities 
           </h2>
           
           {/* Decorative Swirl Underline */}
           <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-3 text-pink-400" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 12 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
           </svg>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl mx-auto text-[#6D4C41] text-lg font-medium leading-relaxed"
        >
          Our cultural programs and annual celebrations provide students with
          opportunities to express their talents, build confidence, and create
          joyful learning experiences beyond the classroom.
        </motion.p>

        {/* =========================================================
            MEDIA GRID: "GALLERY FRAMES"
           ========================================================= */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[1, 2, 3].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative w-full h-64 bg-white p-3 shadow-lg transition-all duration-300 cursor-pointer"
              style={{ borderRadius: "4px" }}
            >
               {/* Tape Element (Top Center) */}
               <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-purple-200/80 rotate-1 backdrop-blur-sm z-20 opacity-80" />

               {/* Inner Frame Content */}
               <div className="w-full h-full border-2 border-[#4A148C]/10 overflow-hidden relative bg-gray-100">
                  
                  {/* Image instead of Gradient/Icon */}
                  <img
                    src={`/krishna-leela-${index + 1}.jpg`}
                    alt={`Cultural Fest Highlight ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Spotlight Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Hover Label */}
                  <div className="absolute bottom-4 left-0 w-full text-center text-white font-bold tracking-widest opacity-0 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
                     VIEW GALLERY
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================
            LOWER CONTENT: Styled Text Block
           ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 max-w-3xl mx-auto space-y-6 text-[#5D4037] text-lg leading-relaxed font-medium relative"
        >
          
          {/* Side decoration lines (Desktop only) */}
          <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 to-pink-300 rounded-full hidden md:block opacity-30" />
          
          <p>
            Through music, dance, drama, and various competitions, students get
            a platform to showcase their creativity and develop stage confidence.
          </p>

          <p>
            These events encourage teamwork, leadership, and communication
            skills while ensuring that every child experiences balanced growth
            in both academics and co-curricular activities.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
