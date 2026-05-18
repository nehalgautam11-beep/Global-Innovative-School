"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgressChrome() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.3,
  });

  const orbY = useTransform(progress, [0, 1], [0, 205]);
  const fillHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-[76px] z-[70] px-3 md:px-6">
        <div className="relative mx-auto max-w-6xl">
          <div className="h-[4px] overflow-hidden rounded-full bg-white/40 shadow-[0_8px_25px_rgba(45,52,54,0.08)] backdrop-blur-sm">
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-[#ff8f54] via-[#ffd059] to-[#4acdda]"
              style={{ scaleX: progress }}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none fixed right-5 top-1/2 z-[70] hidden -translate-y-1/2 xl:flex flex-col items-center gap-4">
        <div className="text-[0.62rem] font-black uppercase tracking-[0.38em] text-[#2d3436]/45 [writing-mode:vertical-rl]">
          Scroll Story
        </div>

        <div className="relative h-56 w-4 overflow-hidden rounded-full border border-white/60 bg-white/35 shadow-[0_15px_40px_rgba(45,52,54,0.08)] backdrop-blur-md">
          <motion.div
            className="absolute inset-x-0 bottom-0 rounded-full bg-gradient-to-t from-[#ff8f54] via-[#ffd059] to-[#4acdda]"
            style={{ height: fillHeight }}
          />

          <motion.div
            className="absolute left-1/2 top-0 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-[#2d3436] shadow-[0_8px_18px_rgba(45,52,54,0.28)]"
            style={{ y: orbY }}
          >
            <div className="h-2 w-2 rounded-full bg-white" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
