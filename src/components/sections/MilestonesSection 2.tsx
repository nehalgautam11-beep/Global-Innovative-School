"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MilestonesSection() {
  const milestones = [
    {
      id: "01",
      title: "Personality Dev.",
      desc: "Building confidence through speaking & interaction.",
      rotate: "-rotate-2", // Tilted left
      tapeColor: "bg-yellow-200/80",
      markerColor: "text-orange-500",
      doodle: "★",
    },
    {
      id: "02",
      title: "Robotics Lab",
      desc: "Logical thinking with hands-on science & math experiments.",
      rotate: "rotate-1", // Tilted right
      tapeColor: "bg-blue-200/80",
      markerColor: "text-cyan-500",
      doodle: "⚡",
    },
    {
      id: "03",
      title: "Holistic Growth",
      desc: "Values, emotions, and academics growing together.",
      rotate: "-rotate-1", // Slight tilt
      tapeColor: "bg-pink-200/80",
      markerColor: "text-pink-500",
      doodle: "♥",
    },
    {
      id: "04",
      title: "Self Defence",
      desc: "Karate training for focus, discipline and strength.",
      rotate: "rotate-2", // Tilted right
      tapeColor: "bg-green-200/80",
      markerColor: "text-green-600",
      doodle: "✊",
    },
  ];

  return (
    <>
      {/* Load a Handwritten Font for the "Human" touch */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Poppins:wght@400;600;800&display=swap');
        .font-hand { font-family: 'Gochi Hand', cursive; }
      `}</style>

      <section className="relative py-24 bg-[#FAF9F6] font-['Poppins'] overflow-hidden">
        
        {/* Background Texture: Subtle Paper Grain */}
        <div className="absolute inset-0 opacity-40 pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' /%3E%3C/g%3E%3C/svg%3E")` }} 
        />

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          
          {/* Header with "Marker" underline */}
          <div className="text-center mb-16">
            <span className="font-hand text-2xl text-gray-500 block mb-2 rotate-2">
              How we grow together...
            </span>
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-black text-[#2D3436] relative z-10">
                Four Big Milestones
              </h2>
              {/* Hand-drawn underline effect */}
              <svg className="absolute -bottom-2 left-0 w-full h-4 z-0 text-[#FFD059]" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* The Scrapbook Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            
            {milestones.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }} // Straighten on hover
                className={`group relative bg-white p-3 pb-6 shadow-md hover:shadow-2xl transition-all duration-300 transform ${item.rotate}`}
                style={{ 
                    // Make it look like a physical photo card
                    borderRadius: "2px",
                    boxShadow: "2px 4px 15px rgba(0,0,0,0.1)"
                }}
              >
                {/* 1. THE SCOTCH TAPE (The Human Touch) */}
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 ${item.tapeColor} opacity-90 rotate-1 backdrop-blur-sm z-20`} 
                     style={{ clipPath: "polygon(0% 10%, 5% 0%, 10% 10%, 15% 0%, 20% 10%, 25% 0%, 30% 10%, 35% 0%, 40% 10%, 45% 0%, 50% 10%, 55% 0%, 60% 10%, 65% 0%, 70% 10%, 75% 0%, 80% 10%, 85% 0%, 90% 10%, 95% 0%, 100% 10%, 100% 90%, 95% 100%, 90% 90%, 85% 100%, 80% 90%, 75% 100%, 70% 90%, 65% 100%, 60% 90%, 55% 100%, 50% 90%, 45% 100%, 40% 90%, 35% 100%, 30% 90%, 25% 100%, 20% 90%, 15% 100%, 10% 90%, 5% 100%, 0% 90%)" }}>
                </div>

                {/* 2. THE PHOTO AREA (Polaroid Style) */}
                <div className="bg-gray-100 h-48 w-full mb-4 relative overflow-hidden border border-gray-200">
                    
                    {/* REAL IMAGE INSERTED HERE */}
                    {/* Using index + 1 to grab milestone-1.jpg, milestone-2.jpg, etc. */}
                    <Image 
                      src={`/milestone-${index + 1}.jpg`} 
                      alt={item.title}
                      fill 
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-110 z-0" 
                    />

                    {/* Hand-drawn number on the photo (Moved z-index so it sits on top of the image) */}
                    <div className={`absolute bottom-2 right-2 font-hand text-4xl font-black ${item.markerColor} opacity-90 drop-shadow-md z-10 bg-white/40 px-2 rounded-lg backdrop-blur-sm`}>
                        {item.id}
                    </div>
                </div>

                {/* 3. HANDWRITTEN NOTES */}
                <div className="px-2 text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <h3 className={`font-bold text-lg text-gray-800 border-b-2 border-transparent group-hover:${item.markerColor.replace('text-', 'border-')} transition-all`}>
                            {item.title}
                        </h3>
                        {/* Little Doodle Icon */}
                        <span className={`font-hand text-2xl ${item.markerColor}`}>{item.doodle}</span>
                    </div>
                    
                    <p className="font-hand text-gray-600 text-lg leading-6">
                        {item.desc}
                    </p>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}