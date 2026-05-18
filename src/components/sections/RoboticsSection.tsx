"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Activity, BatteryCharging, Bot, Play, Settings, Wrench } from "lucide-react";
import { useRef, useEffect } from "react";

export default function RoboticsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { amount: 0.3 });

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.15"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const mediaY = useTransform(scrollYProgress, [0, 0.5, 1], [70, 0, -35]);
  const mediaRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-4, 0, 1.5]);
  const mediaScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.02]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -18]);
  const beamX = useTransform(scrollYProgress, [0, 1], ["-12%", "112%"]);
  const chipY = useTransform(scrollYProgress, [0, 0.5, 1], [18, -4, -12]);
  const underlineWidth = useTransform(scrollYProgress, [0, 0.55], ["18%", "100%"]);

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.12 + index * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const notes = [
    {
      code: "01",
      color: "bg-cyan-400",
      text: "Students learn by building real mechanisms, connecting logic, structure, and motion through hands-on experimentation.",
    },
    {
      code: "02",
      color: "bg-blue-400",
      text: "The lab encourages teamwork, trial and error, and practical problem solving in a way that feels exciting rather than intimidating.",
    },
    {
      code: "03",
      color: "bg-purple-400",
      text: "Projects are designed to grow confidence, curiosity, and technical thinking at the same time.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050a14] py-16 font-['Poppins'] text-white"
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          y: gridY,
        }}
      />

      <div className="absolute -right-24 top-0 h-[20rem] w-[20rem] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -left-20 bottom-[-4rem] h-[18rem] w-[18rem] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] items-center gap-10 md:gap-14 px-4 md:px-6 relative z-10 [perspective:1200px]">
        <motion.div
          style={{ y: mediaY, rotate: mediaRotate, scale: mediaScale }}
          className="relative order-1 lg:order-1"
        >
          <motion.div
            className="pointer-events-none absolute left-0 top-14 h-px w-40 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
            style={{ x: beamX }}
          />

          <motion.div
            className="pointer-events-none absolute right-8 top-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-cyan-100/85 backdrop-blur-md"
            style={{ y: chipY }}
          >
            Lab Session
          </motion.div>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-20 w-3/4 rounded-full bg-cyan-500/10 blur-[50px]" />

          <motion.div
            whileHover={{ 
              rotateX: 8, 
              rotateY: -8, 
              scale: 1.02,
              z: 40,
              boxShadow: "0 40px 100px rgba(6, 182, 212, 0.2)"
            }}
            className="relative w-full max-w-[320px] md:max-w-[400px] mx-auto aspect-[3/4] overflow-hidden border border-cyan-400/25 bg-[#0b1220] shadow-[0_35px_90px_rgba(0,0,0,0.42)] transform-gpu transition-all duration-300 [transform-style:preserve-3d] cursor-pointer"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 86%, 92% 100%, 0 100%)",
              borderRadius: "10px",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%)] [transform:translateZ(10px)]" />

            <video
              ref={videoRef}
              src="/robotics-demo.mp4"
              className="h-full w-full object-cover opacity-85 [transform:translateZ(0px)]"
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/16 to-transparent" />

            <div className="absolute left-0 top-0 flex h-12 w-full items-center justify-between bg-gradient-to-b from-black/85 to-transparent px-4 [transform:translateZ(20px)]">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.35em] text-red-400">
                  LIVE LAB FEED
                </span>
              </div>
              <Activity size={14} className="text-cyan-300/70" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center [transform:translateZ(30px)]">
              <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-cyan-300/25 bg-black/25 backdrop-blur-sm">
                <Play fill="white" className="ml-1 text-white/90" size={26} />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 p-4 [transform:translateZ(15px)]">
              <div className="h-4 w-4 border-b-2 border-r-2 border-cyan-400" />
            </div>
          </motion.div>

          <div className="absolute -top-3 left-0 border border-cyan-400/25 bg-cyan-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-100 [transform:translateZ(50px)]">
            Mechanical Engineering
          </div>
        </motion.div>

        <motion.div
          style={{ y: textY }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 lg:order-2"
        >
          <motion.div custom={0} variants={itemVariants} className="mb-6 flex items-start gap-4">
            <div className="mt-2 text-cyan-400">
              <Bot size={32} strokeWidth={1.5} />
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-mono text-cyan-400/70">
                <Settings size={12} className="animate-spin" />
                <span>ENGINEERING WING</span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-5xl">
                Robotics <span className="text-cyan-400">&</span>
                <br />
                <span className="relative inline-block">
                  Mechanics
                  <div className="absolute -bottom-3 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-cyan-200 to-transparent">
                    <motion.div
                      className="absolute left-0 top-[-2px] h-1.5 rounded-full bg-cyan-300"
                      style={{ width: underlineWidth }}
                    />
                  </div>
                </span>
              </h2>
            </div>
          </motion.div>

          <motion.p
            custom={1}
            variants={itemVariants}
            className="max-w-xl text-base leading-7 text-slate-300/86 md:text-lg"
          >
            Students explore automation and Hands-on mechanism design through experimental labs that feel modern and exciting.
          </motion.p>

          <motion.div
            custom={2}
            variants={itemVariants}
            className="mt-10 grid gap-4 [perspective:1000px] [transform-style:preserve-3d]"
          >
            {notes.map((note, index) => (
              <motion.div
                key={note.code}
                whileHover={{ 
                  x: 8, 
                  rotateY: -5, 
                  z: 10,
                  backgroundColor: "rgba(255,255,255,0.06)" 
                }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="group flex gap-4 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4 backdrop-blur-sm transform-gpu transition-all duration-300"
              >
                <div className={`mt-1 h-10 w-1 rounded-full ${note.color}`} />
                <p className="font-mono text-xs leading-6 text-slate-300 md:text-sm">
                  <span className="mr-2 font-bold text-white">{note.code} &gt;&gt;</span>
                  {note.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            custom={3}
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-8 border-t border-white/10 pt-6"
          >
            <div className="flex items-center gap-3">
              <Wrench className="text-gray-500" size={20} />
              <div>
                <div className="text-sm font-bold uppercase tracking-wider text-white">
                  Engineering
                </div>
                <div className="text-[10px] text-gray-500">Core Focus</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
