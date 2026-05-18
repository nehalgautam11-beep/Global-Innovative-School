"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Play, Zap, Circle } from "lucide-react";
import { useRef, useEffect } from "react";

export default function SchoolTourSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { amount: 0.3 });

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView) {
        videoRef.current.play().catch(() => {
          // Browser may block autoplay if no user interaction yet
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.2"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.55, 1], [70, 0, -20]);
  const frameY = useTransform(scrollYProgress, [0, 0.55, 1], [90, 0, -24]);
  const frameRotate = useTransform(scrollYProgress, [0, 0.55, 1], [-5, 0, 1.5]);
  const frameScale = useTransform(scrollYProgress, [0, 0.55, 1], [0.9, 1, 1.02]);
  const badgeY = useTransform(scrollYProgress, [0, 0.55, 1], [24, 0, -12]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.15]);
  
  // Animation for floating background elements
  const float = (delay: number, duration: number) => ({
    y: [0, -15, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut" as const,
    },
  });

  return (
    <section ref={sectionRef} id="school-tour" className="relative py-20 bg-white font-['Poppins'] overflow-hidden">
      
      {/* =========================================================
          LAYER 0: PLAYFUL BACKGROUND ELEMENTS (More Elements)
         ========================================================= */}
      
      {/* 1. Dotted Pattern Grid */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* 2. Floating Geometric Shapes */}
      
      {/* Top Left: Yellow Donut */}
      <motion.div animate={float(0, 5)} className="absolute top-10 left-10 text-yellow-400 opacity-80 pointer-events-none">
         <Circle size={48} strokeWidth={8} />
      </motion.div>

      {/* Middle Right: Blue ZigZag (SVG) */}
      <motion.div animate={float(1, 6)} className="absolute top-40 right-10 pointer-events-none">
         <svg width="60" height="60" viewBox="0 0 50 50" fill="none" stroke="#60A5FA" strokeWidth="6" strokeLinecap="round">
            <path d="M5 25 L15 15 L25 35 L35 15 L45 25" />
         </svg>
      </motion.div>

      {/* Bottom Left: Orange Triangle */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 pointer-events-none"
      >
         <svg width="50" height="50" viewBox="0 0 50 50" fill="#FB923C" className="opacity-80">
            <path d="M25 5 L45 40 H5 Z" />
         </svg>
      </motion.div>

      {/* Bottom Right: Purple Squiggle */}
      <motion.div animate={float(0.5, 4)} className="absolute bottom-10 right-20 text-purple-400 opacity-60 pointer-events-none">
         <Zap size={56} fill="currentColor" />
      </motion.div>

      {/* Soft Gradient Blobs (Atmosphere) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none -z-10"
        style={{ scale: glowScale }}
      />


      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
        
        {/* =========================================================
            HEADER
           ========================================================= */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.35 }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="mb-14 relative inline-block"
           style={{ y: headerY }}
        >
           <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 relative z-10">
             Take a Virtual Tour of Our School
           </h2>
           
           {/* Decorative Underline Brush Stroke */}
           <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-200/60 -skew-x-12 -z-10 rounded-sm" />

           <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg font-medium leading-relaxed">
             Explore our classrooms, labs, activity areas, and learning
             environment through a complete school tour.
           </p>
        </motion.div>


        {/* =========================================================
            VIDEO CONTAINER: STACKED LANDSCAPE FRAME
           ========================================================= */}
        <motion.div
          className="relative inline-block w-full max-w-4xl mx-auto"
          style={{ y: frameY, rotate: frameRotate, scale: frameScale }}
        >
            
            {/* DECORATION: Spinning Text Badge (No "Campus" word) */}
            <motion.div className="absolute -top-8 -right-8 z-30 hidden md:block" style={{ y: badgeY }}>
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                 className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white"
               >
                  <svg className="w-full h-full absolute inset-0 text-blue-600" viewBox="0 0 100 100">
                     <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                     <text className="text-[11px] font-bold uppercase tracking-[0.15em]">
                        <textPath href="#circlePath" startOffset="0%">
                           • Virtual Tour • Virtual Tour •
                        </textPath>
                     </text>
                  </svg>
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-inner">
                     <Play size={24} fill="currentColor" className="ml-1" />
                  </div>
               </motion.div>
            </motion.div>


            {/* THE FRAME: Stacked Offset Look */}
            <div className="relative group">
                
                {/* 1. Background Offset Layer (The Pop Color) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-4 left-4 w-full h-full rounded-[2rem] bg-blue-500 -z-10 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"
                />
                
                {/* 2. Main Video Container */}
                <motion.div
                  initial={{ opacity: 0, clipPath: "inset(12% 10% 10% 10% round 2rem)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full aspect-video rounded-[2rem] bg-white overflow-hidden shadow-2xl border-4 border-white"
                >
                   
                   {/* VIDEO WITH AUDIO & AUTOPLAY */}
                   <div className="relative w-full h-full bg-gray-100">
                      <video
                        ref={videoRef}
                        src="/tour-video.mp4"
                        className="h-full w-full object-cover"
                        loop
                        preload="auto"
                        controls
                        playsInline
                      />
                   </div>
                </motion.div>

            </div>

        </motion.div>

      </div>
    </section>
  );
}
