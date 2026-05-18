"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Palette, Activity, Sparkles } from "lucide-react"; 
import Image from "next/image";
import { useRef } from "react";

export default function HolisticDevelopmentSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.5], [40, 0, -10]);
  
  const features = [
    { 
      id: 1, 
      title: "Creative Arts", 
      desc: "Music, art, and drama projects.",
      icon: Palette,
      iconColor: "text-teal-600",
      iconBg: "bg-teal-100"
    },
    { 
      id: 2, 
      title: "Physical Wellness", 
      desc: "Teamwork through sports and play.",
      icon: Activity,
      iconColor: "text-cyan-600",
      iconBg: "bg-cyan-100"
    },
    { 
      id: 3, 
      title: "Mind & Spirit", 
      desc: "Discipline and mental growth.",
      icon: Sparkles,
      iconColor: "text-sky-600",
      iconBg: "bg-sky-100"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 bg-[#F0FDF4] font-['Poppins'] overflow-hidden [perspective:1200px]">
      

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ y: titleY }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 backdrop-blur-md rounded-full shadow-sm border border-teal-100 mb-4">
            <Leaf className="text-teal-500" size={14} />
            <span className="text-teal-700 font-bold tracking-wider text-[10px] uppercase">Beyond Academics</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[#134e4a] mb-4">
            Holistic <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Growth</span>
          </h2>
          <p className="max-w-sm mx-auto text-teal-800/80 text-sm font-medium">
            We nurture creativity, wellness, and strong character.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[310px] rounded-[2rem] bg-white/60 backdrop-blur-xl p-3 border border-white transition-all duration-300 [transform-style:preserve-3d] cursor-pointer"
            >
                <div className="w-full h-[60%] rounded-[1.5rem] overflow-hidden relative bg-teal-50 [transform:translateZ(20px)]">
                    <Image 
                      src={`/holistic-${item.id}.jpg`} 
                      alt={item.title} 
                      fill 
                      unoptimized
                      className="object-cover transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent opacity-60" />
                    <div className={`absolute top-3 right-3 w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center ${item.iconColor} shadow-md`}>
                       <item.icon size={18} strokeWidth={2.5} />
                    </div>
                </div>

                <div className="text-left px-4 pt-4 pb-2 [transform:translateZ(30px)]">
                   <h3 className="text-lg font-bold text-teal-950 mb-1 group-hover:text-teal-600 transition-colors">
                     {item.title}
                   </h3>
                   <p className="text-teal-800/70 text-xs font-medium leading-snug">
                     {item.desc}
                   </p>
                </div>

                <div className="absolute bottom-4 left-6 w-8 h-1 bg-cyan-400 rounded-full transition-all duration-500 [transform:translateZ(10px)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
