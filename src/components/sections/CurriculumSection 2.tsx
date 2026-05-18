"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Next/image is ready to go

export default function CurriculumSection() {
  return (
    <section className="relative py-24 bg-[#FFFBF0] font-['Poppins'] overflow-hidden">
      
      {/* BACKGROUND TEXTURE: Dot Grid (Like a Bullet Journal) */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(#A0AEC0 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
      </div>

      {/* BACKGROUND DECORATION: Hand-drawn Doodle Arrow */}
      <div className="hidden md:block absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-12 z-0 opacity-20">
         <svg width="200" height="100" viewBox="0 0 200 100" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5">
            <path d="M10,50 Q100,10 190,50" />
            <path d="M180,40 L190,50 L180,60" />
         </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content - Styled like a Notebook Page */}
        <div className="relative">
          {/* The "Notebook Margin" Line */}
          <div className="absolute left-[-20px] top-0 bottom-0 w-[2px] bg-red-100 hidden md:block" />

          <div className="relative inline-block mb-8">
            {/* Highlighter Effect behind the H2 */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-1 left-0 h-4 bg-[#FFD059]/40 -skew-x-6 -z-10 rounded-sm"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436]">
              Our Curriculum & Learning Approach
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium">
            <p className="relative">
              <span className="absolute -left-6 top-1 text-orange-300 text-xl">●</span>
              Our curriculum is thoughtfully designed to provide a strong
              academic foundation while nurturing curiosity, creativity, and
              critical thinking. We follow a concept-based approach that helps
              students truly understand subjects rather than simply memorising
              them.
            </p>

            <p className="relative">
              <span className="absolute -left-6 top-1 text-cyan-300 text-xl">●</span>
              Teaching is supported through interactive classroom discussions,
              activity-based learning, projects, and regular assessments that
              encourage continuous improvement. Smart learning tools and gradual
              exposure to modern subjects like coding and robotics prepare
              students for future challenges.
            </p>

            <p className="relative">
              <span className="absolute -left-6 top-1 text-pink-300 text-xl">●</span>
              We focus equally on discipline, values, communication skills, and
              overall personality development so that every child grows into a
              confident and responsible individual.
            </p>
          </div>
        </div>

        {/* Media Container - Styled as a Taped Photo */}
        <div className="relative z-10">
            {/* The "Tape" holding the photo */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-100/80 rotate-2 backdrop-blur-sm z-20 shadow-sm border-l border-r border-white/50" />

            <motion.div 
              initial={{ rotate: 0, scale: 0.9 }}
              whileInView={{ rotate: 2, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="w-full h-[350px] md:h-[420px] rounded-2xl bg-white p-3 shadow-xl transform rotate-2 border border-gray-100 relative z-10"
            >
                {/* Inner Image Container */}
                <div className="w-full h-full rounded-xl bg-gray-100 overflow-hidden relative">
                   
                   {/* CHANGED: Inserted real Image component */}
                   <Image 
                     src="/curriculum-learning.jpg" // MAKE SURE to place this image in the 'public' folder
                     alt="Students engaged in interactive classroom learning"
                     fill
                     unoptimized // Keeps it simple and avoids local optimization issues
                     className="object-cover transition-transform duration-500 hover:scale-105"
                     sizes="(max-width: 768px) 100vw, 50vw"
                   />

                   {/* Hand-drawn scribble decoration on the image (Z-index added to sit on top) */}
                   <div className="absolute bottom-4 right-4 text-4xl text-yellow-400 opacity-80 font-hand animate-pulse z-10">
                      ★
                   </div>
                </div>
            </motion.div>

            {/* Background offset card for depth */}
            <div className="absolute top-4 left-4 w-full h-full rounded-3xl border-2 border-gray-200 z-0 rotate-[-3deg]" />
        </div>

      </div>
    </section>
  );
}