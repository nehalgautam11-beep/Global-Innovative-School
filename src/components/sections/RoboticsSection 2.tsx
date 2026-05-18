"use client";
import { motion } from "framer-motion";
import { Bot, Settings, Wrench, BatteryCharging, Play, Activity } from "lucide-react";

export default function RoboticsSection() {
  
  // Rotating Gear Animation
  const spin = {
    animate: { rotate: 360 },
    transition: { duration: 20, repeat: Infinity, ease: "linear" as const }
  };

  const reverseSpin = {
    animate: { rotate: -360 },
    transition: { duration: 25, repeat: Infinity, ease: "linear" as const }
  };

  return (
    <section className="relative py-24 bg-[#050a14] text-white overflow-hidden font-['Poppins']">
      
      {/* =========================================================
          LAYER 0: ENGINEERING BLUEPRINT BACKGROUND
         ========================================================= */}
      
      {/* 1. Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Rotating Gears (Industrial Feel) */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3">
        <motion.div {...spin} className="relative">
           <svg width="600" height="600" viewBox="0 0 100 100" className="text-cyan-500 fill-current">
              <path d="M50 0 L55 10 L65 10 L70 0 L80 5 L75 15 L85 20 L95 15 L98 25 L88 30 L93 40 L100 45 L95 55 L85 55 L80 65 L90 70 L85 80 L75 75 L65 85 L70 95 L60 100 L50 90 L40 100 L30 95 L35 85 L25 75 L15 80 L10 70 L20 65 L15 55 L5 55 L0 45 L7 40 L12 30 L2 25 L5 15 L15 20 L25 15 L20 5 L30 0 L40 10 L50 10 Z M50 25 A 25 25 0 1 0 50 75 A 25 25 0 1 0 50 25 Z" />
           </svg>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 opacity-5 pointer-events-none -translate-x-1/3 translate-y-1/3">
        <motion.div {...reverseSpin}>
           <svg width="400" height="400" viewBox="0 0 100 100" className="text-blue-500 fill-current">
              <path d="M50 10 L55 20 L65 20 L70 10 L80 15 L75 25 L85 30 L95 25 L98 35 L88 40 L93 50 L100 55 L95 65 L85 65 L80 75 L90 80 L85 90 L75 85 L65 95 L70 100 L60 100 L50 90 L40 100 L30 100 L35 90 L25 80 L15 85 L10 75 L20 70 L15 60 L5 60 L0 50 L7 45 L12 35 L2 30 L5 20 L15 25 L25 20 L20 10 L30 5 L40 15 L50 15 Z M50 35 A 15 15 0 1 0 50 65 A 15 15 0 1 0 50 35 Z" />
           </svg>
        </motion.div>
      </div>

      {/* 3. Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
         <motion.path 
           d="M100 100 H 300 V 400 H 500" 
           stroke="#06b6d4" strokeWidth="2" fill="none"
           initial={{ pathLength: 0 }} 
           animate={{ pathLength: 1 }} 
           transition={{ duration: 3, repeat: Infinity, ease: "linear" as const }}
         />
      </svg>


      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* =========================================================
            MEDIA LAYOUT: VIDEO CONSOLE (No Scanner, No Scary Robot)
           ========================================================= */}
        <div className="relative w-full group">
            
            {/* Ambient Glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-cyan-500/10 blur-[50px] rounded-full" />
            
            {/* The "Cyber-Deck" Shape Frame */}
            <div 
              className="relative w-full h-[350px] md:h-[420px] bg-[#0f172a] border-2 border-cyan-500/30 shadow-2xl overflow-hidden"
              style={{ 
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)", // Tech shape
                borderRadius: "4px"
              }} 
            >
                {/* --- VIDEO COMPONENT --- */}
                {/* Replace src with your actual video file (e.g., /videos/robotics.mp4) */}
                <video 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src="/robotics-demo.mp4" type="video/mp4" />
                    {/* Fallback if video is missing */}
                    <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                        <span className="text-cyan-500/50 font-mono text-sm">VIDEO FEED SIGNAL LOST</span>
                    </div>
                </video>

                {/* --- OVERLAY UI (Clean Interface) --- */}
                
                {/* 1. Top Bar */}
                <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between px-4">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold text-red-400 tracking-widest">LIVE LAB FEED</span>
                   </div>
                   <div className="text-cyan-500/50"><Activity size={14} /></div>
                </div>

                {/* 2. Play Button Overlay (Optional - centered) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-16 h-16 rounded-full border border-cyan-500/30 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                      <Play fill="white" className="ml-1 text-white opacity-80" size={24} />
                   </div>
                </div>

                {/* 3. Tech Corners */}
                <div className="absolute bottom-0 right-0 p-4">
                    <div className="w-4 h-4 border-b-2 border-r-2 border-cyan-500" />
                </div>
            </div>

            {/* Badge */}
            <div className="absolute -top-3 left-0 bg-cyan-900/80 border border-cyan-500/30 text-cyan-100 text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
               Mechanical Engineering
            </div>
        </div>

        {/* =========================================================
            TEXT CONTENT: PURE MECHANICS (No Coding/AI)
           ========================================================= */}
        <div className="relative pl-4">
          
          <div className="flex items-start gap-4 mb-6">
             <div className="mt-2 text-cyan-400"><Bot size={32} strokeWidth={1.5} /></div>
             <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-500/70 mb-1">
                   <Settings size={12} className="animate-spin" />
                   <span>ENGINEERING WING</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                  Robotics <span className="text-cyan-500">&</span><br/>
                  <span className="relative inline-block">
                    Mechanics
                    <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-transparent">
                       <div className="absolute right-0 top-[-2px] w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    </div>
                  </span>
                </h2>
             </div>
          </div>

          <div className="space-y-6 text-slate-300 text-lg font-light relative z-10 font-mono text-sm md:text-base leading-relaxed">
            
            <div className="flex gap-4 group">
               <div className="w-1 bg-cyan-500/20 group-hover:bg-cyan-400 transition-colors" />
               <p>
                 <span className="text-cyan-400 font-bold">01 &gt;&gt;</span> Our Robotics Lab introduces students to the
                 fundamentals of <span className="text-white font-semibold">automation & logic</span>. We focus on developing 
                 problem-solving capabilities through hands-on mech-assembly.
               </p>
            </div>

            <div className="flex gap-4 group">
               <div className="w-1 bg-blue-500/20 group-hover:bg-blue-400 transition-colors" />
               <p>
                 <span className="text-blue-400 font-bold">02 &gt;&gt;</span> Students explore robotics concepts,
                 mechanism design, and guided projects. This <span className="text-white font-semibold">practical exposure</span> builds 
                 confidence for the future of engineering.
               </p>
            </div>

            <div className="flex gap-4 group">
               <div className="w-1 bg-purple-500/20 group-hover:bg-purple-400 transition-colors" />
               <p>
                 <span className="text-purple-400 font-bold">03 &gt;&gt;</span> Promoting curiosity, experimentation, 
                 and teamwork. We ensure children learn <span className="text-white font-semibold">collaboration</span> alongside technical skills.
               </p>
            </div>
          </div>
          
          {/* Footer Stats (Clean & Industrial) */}
          <div className="mt-8 flex gap-8 border-t border-white/10 pt-6">
             <div className="flex items-center gap-3">
                <Wrench className="text-gray-500" size={20} />
                <div>
                   <div className="text-sm font-bold text-white uppercase tracking-wider">Engineering</div>
                   <div className="text-[10px] text-gray-500">Core Focus</div>
                </div>
             </div>
             <div className="flex items-center gap-3">
                <BatteryCharging className="text-gray-500" size={20} />
                <div>
                   <div className="text-sm font-bold text-white uppercase tracking-wider">Power Systems</div>
                   <div className="text-[10px] text-gray-500">Active</div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}