"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type HomeEntryExperienceProps = {
  children: React.ReactNode;
};

const loadingSteps = [
  "Preparing bright classrooms",
  "Arranging stories, science, and play",
  "Welcoming curious young minds",
  "Opening the school day",
];

export default function HomeEntryExperience({
  children,
}: HomeEntryExperienceProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isShowing, setIsShowing] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const exitDelay = prefersReducedMotion ? 900 : 3200;
  const removeDelay = prefersReducedMotion ? 1250 : 4100;

  const progress = useMemo(
    () => ((stepIndex + 1) / loadingSteps.length) * 100,
    [stepIndex]
  );

  useEffect(() => {
    if (!isShowing) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const cycleTimer = window.setInterval(() => {
      setStepIndex((current) =>
        current < loadingSteps.length - 1 ? current + 1 : current
      );
    }, prefersReducedMotion ? 900 : 780);

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, exitDelay);

    const removeTimer = window.setTimeout(() => {
      setIsShowing(false);
      document.body.style.overflow = previousOverflow;
    }, removeDelay);

    return () => {
      window.clearInterval(cycleTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [exitDelay, isShowing, prefersReducedMotion, removeDelay]);

  return (
    <>
      <motion.div
        animate={
          isShowing
            ? { opacity: 0, y: 18, filter: "blur(10px)" }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
        }
        transition={{
          duration: prefersReducedMotion ? 0.35 : 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {isShowing ? (
          <motion.div
            key="home-entry"
            initial={{ opacity: 1 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.75 }}
            className="fixed inset-0 z-[120] overflow-hidden bg-[#f7f1e4]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_38%),linear-gradient(135deg,#fdf8ee_0%,#f8f0df_52%,#f3ead8_100%)]" />
            <div
              className="absolute inset-0 opacity-[0.2]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(45,52,54,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45,52,54,0.04) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(180deg, transparent 0, transparent 31px, rgba(116,185,255,0.14) 31px, rgba(116,185,255,0.14) 33px)",
              }}
            />
            <div className="absolute inset-y-0 left-[8%] w-[2px] bg-[#ff8f54]/20" />

            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { x: [0, 20, 0], y: [0, -16, 0], scale: [1, 1.03, 1] }
              }
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-28 bottom-[-5rem] h-[24rem] w-[24rem] rounded-full bg-[#4acdda]/12 blur-3xl"
            />
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { x: [0, -14, 0], y: [0, 18, 0], scale: [1, 1.04, 1] }
              }
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[-4rem] top-[-4rem] h-[22rem] w-[22rem] rounded-full bg-[#ffd059]/18 blur-3xl"
            />

            <motion.div
              animate={{ x: isExiting ? "-108%" : "0%" }}
              transition={{
                duration: prefersReducedMotion ? 0.45 : 1.05,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute left-0 top-0 h-full w-1/2 border-r border-[#2d3436]/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.16))]"
            />
            <motion.div
              animate={{ x: isExiting ? "108%" : "0%" }}
              transition={{
                duration: prefersReducedMotion ? 0.45 : 1.05,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute right-0 top-0 h-full w-1/2 border-l border-[#2d3436]/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.5))]"
            />

            <div className="absolute inset-0 flex items-center justify-center px-4 py-8 md:px-8">              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={
                  isExiting
                    ? { opacity: 0, scale: 0.93, y: -14 }
                    : { opacity: 1, scale: 1, y: 0 }
                }
                transition={{
                  duration: prefersReducedMotion ? 0.35 : 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/65 bg-[rgba(255,252,244,0.72)] shadow-[0_30px_90px_rgba(56,50,38,0.12)] backdrop-blur-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#ff8f54] via-[#ffd059] to-[#4acdda]" />
                <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[#2d3436]/10 md:block" />
                <div className="absolute inset-y-0 left-[calc(50%-6px)] hidden w-[12px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(45,52,54,0.14)_1px,transparent_1.5px)] bg-[length:12px_24px] bg-center md:block" />

                <div className="grid min-h-[36rem] md:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative flex flex-col justify-between px-7 py-10 md:px-12 md:py-12">
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="inline-flex items-center gap-3 rounded-full border border-[#2d3436]/10 bg-white/75 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.38em] text-[#2d3436]/70"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#ff8f54]" />
                        Global Innovative School
                      </motion.div>

                      <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.16 }}
                        className="mt-8 max-w-xl text-4xl font-black leading-[0.94] tracking-[-0.05em] text-[#2d3436] md:text-6xl"
                      >
                        Opening today&apos;s
                        <span className="block text-[#ff8f54]">learning story</span>
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.72, delay: 0.26 }}
                        className="mt-6 max-w-lg text-base leading-8 text-[#2d3436]/72 md:text-lg"
                      >
                        A calm, confident beginning for a school where curiosity,
                        creativity, and character grow together.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-10"
                      >
                        <svg
                          viewBox="0 0 560 90"
                          className="h-[72px] w-full max-w-[28rem] text-[#4acdda]"
                          fill="none"
                          aria-hidden="true"
                        >
                          <motion.path
                            d="M8 65 C 120 20, 230 18, 330 48 S 470 84, 552 28"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0.2 }}
                            animate={{ pathLength: 1, opacity: 0.9 }}
                            transition={{ duration: prefersReducedMotion ? 0.4 : 1.25, delay: 0.3 }}
                          />
                          <motion.path
                            d="M500 18 L552 28 L517 54"
                            stroke="#ff8f54"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: prefersReducedMotion ? 0.3 : 0.5, delay: 1.25 }}
                          />
                        </svg>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.35 }}
                      className="mt-10 rounded-[1.75rem] border border-[#2d3436]/8 bg-white/75 p-5 shadow-[0_15px_40px_rgba(45,52,54,0.06)]"
                    >
                      <div className="flex items-center justify-between text-[0.68rem] font-bold uppercase tracking-[0.32em] text-[#2d3436]/48">
                        <span>Arrival</span>
                        <span>Wonder</span>
                        <span>Ready</span>
                      </div>

                      <div className="mt-4 h-2 rounded-full bg-[#2d3436]/8">
                        <motion.div
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-[#ff8f54] via-[#ffd059] to-[#4acdda]"
                        />
                      </div>

                      <div className="mt-5 min-h-[2rem]">
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={loadingSteps[stepIndex]}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2d3436]/68 md:text-[0.95rem]"
                          >
                            {loadingSteps[stepIndex]}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </div>

                  <div className="relative flex items-center justify-center overflow-hidden px-7 py-10 md:px-10 md:py-12">
                    <motion.div
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : { rotate: 360 }
                      }
                      transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                      className="absolute h-[18rem] w-[18rem] rounded-full border border-dashed border-[#2d3436]/14 md:h-[22rem] md:w-[22rem]"
                    />

                    <motion.div
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : { scale: [1, 1.03, 1], rotate: [0, 1.5, 0] }
                      }
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute h-[14rem] w-[14rem] rounded-full border border-[#4acdda]/16 bg-[#4acdda]/6 blur-3xl md:h-[18rem] md:w-[18rem]"
                    />

                    <div className="relative flex h-[18rem] w-[18rem] items-center justify-center md:h-[22rem] md:w-[22rem]">
                      {[0, 120, 240].map((rotation, index) => (
                        <motion.div
                          key={rotation}
                          animate={
                            prefersReducedMotion
                              ? undefined
                              : { rotate: [rotation, rotation + 360] }
                          }
                          transition={{
                            duration: 18 + index * 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0"
                        >
                          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-white/80 bg-white/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#2d3436]/58 shadow-sm md:px-4 md:text-[0.68rem]">
                            {index === 0
                              ? "Curiosity"
                              : index === 1
                                ? "Craft"
                                : "Confidence"}
                          </div>
                        </motion.div>
                      ))}

                      <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.75, delay: 0.18 }}
                        className="relative flex h-[12.5rem] w-[12.5rem] flex-col items-center justify-center rounded-full border border-white/90 bg-[linear-gradient(180deg,#fffef9_0%,#fff8e9_100%)] text-center shadow-[0_25px_60px_rgba(45,52,54,0.12)] md:h-[15rem] md:w-[15rem]"
                      >
                        <div className="absolute inset-3 rounded-full border border-[#2d3436]/7" />
                        <div className="text-[0.72rem] font-bold uppercase tracking-[0.55em] text-[#ff8f54] md:text-xs">
                          GIS
                        </div>
                        <div className="mt-4 flex items-center justify-center">
                          <img src="/logo.png" alt="Global Innovative School Logo" className="h-24 md:h-36 w-auto" />
                        </div>
                        <div className="mt-4 max-w-[9rem] text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#2d3436]/55 md:max-w-[10rem]">
                          Joyful learning in motion
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.45 }}
                      className="absolute bottom-8 left-1/2 w-[min(100%,18rem)] -translate-x-1/2 rounded-[1.5rem] border border-white/75 bg-white/82 p-4 text-left shadow-[0_16px_36px_rgba(45,52,54,0.07)] backdrop-blur-sm md:bottom-10 md:w-[18.5rem]"
                    >
                      <div className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-[#2d3436]/45">
                        Design Note
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#2d3436]/72">
                        The day begins with structure, softness, and a sense of
                        possibility.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
