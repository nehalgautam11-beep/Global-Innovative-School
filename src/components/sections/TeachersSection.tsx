"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function AnnualDaySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.2, 0.5], [70, 0, -20]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.12, 0.35], [0.15, 1, 1]);
  const trackX = useTransform(scrollYProgress, [0.08, 0.95], ["6%", "-28%"]);
  const trackRotate = useTransform(scrollYProgress, [0.08, 0.95], [1.2, -1]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);

  const photos = Array.from({ length: 16 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 font-['Poppins'] text-black"
    >
      <motion.div
        className="absolute left-[-8rem] top-20 opacity-5 pointer-events-none select-none"
        style={{ x: useTransform(scrollYProgress, [0, 1], [0, 120]) }}
      >
        <h1
          className="text-[20vw] font-black leading-none tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "2px black" }}
        >
          ANNUAL
        </h1>
      </motion.div>

      <motion.div
        className="absolute right-[-8rem] top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full bg-orange-100/50 blur-[110px] pointer-events-none"
        style={{ scale: blobScale }}
      />

      <div className="overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <motion.div
            className="mb-14 flex flex-col items-end text-right"
            style={{ y: headingY, opacity: headingOpacity }}
          >
            <div className="relative max-w-3xl">
              <div className="absolute -right-6 top-0 hidden h-full w-1 bg-black md:block" />
              <div className="mb-4 inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[0.7rem] font-black uppercase tracking-[0.35em] text-black/60 shadow-sm">
                Annual Day Archive
              </div>
              <h2 className="mb-6 text-3xl font-black uppercase tracking-tight md:text-6xl">
                Our Latest Annual Day Celebration
              </h2>
              <p className="pl-8 text-lg font-medium leading-relaxed text-gray-600">
                A pinned horizontal moment that lets the celebration unfold like
                a moving contact sheet instead of another regular gallery block.
              </p>
            </div>
          </motion.div>

          <div className="relative overflow-visible mt-10">
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-5 pb-4"
            >
              {photos.map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -16,
                    rotate: index % 2 === 0 ? 3 : -3,
                    scale: 1.05,
                    zIndex: 30,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative h-52 overflow-hidden border-2 border-black bg-gray-100 shadow-[0_18px_45px_rgba(0,0,0,0.08)] md:h-64">
                    <Image
                      src={`/krishna-leela-${index + 1}.jpg`}
                      alt={`Annual Day Highlight ${index + 1}`}
                      fill
                      unoptimized
                      priority={index < 4}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/18 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />

                    <div className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.28em] text-black/65 backdrop-blur-sm">
                      Frame {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-black text-white shadow-lg">
                        <ArrowDownRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
