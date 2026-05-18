"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CurriculumSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const panelY = useTransform(scrollYProgress, [0, 0.35, 0.8], [90, 0, -30]);
  const panelScale = useTransform(scrollYProgress, [0, 0.35, 0.8], [0.92, 1, 1.02]);
  const titleY = useTransform(scrollYProgress, [0, 0.35, 0.8], [50, 0, -18]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 font-['Poppins'] text-white"
    >
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,50,77,0.62), rgba(23,50,77,0.68)), url('/curriculum-learning.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(23,200,196,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,122,89,0.16),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.35em] text-white/80 backdrop-blur-md">
            Curriculum
          </div>
          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            Our Curriculum & Learning Approach
          </h2>
        </motion.div>

        <motion.div
          style={{ y: panelY, scale: panelScale }}
          initial={{ opacity: 0, clipPath: "inset(12% 8% 10% 8% round 2rem)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl rounded-[2rem] border border-white/18 bg-white/88 p-8 text-left text-[#17324d] shadow-[0_30px_90px_rgba(8,17,28,0.24)] backdrop-blur-xl md:p-12"
        >
          <div className="absolute left-6 top-0 hidden h-full w-[2px] bg-[rgba(255,122,89,0.22)] md:block" />

          <div className="space-y-7 text-lg leading-relaxed font-medium md:pl-6">
            <p className="relative">
              <span className="absolute -left-6 top-1 text-[var(--home-coral)] text-xl">●</span>
              Our curriculum is thoughtfully designed to provide a strong
              academic foundation while nurturing curiosity, creativity, and
              critical thinking. We follow a concept-based approach that helps
              students truly understand subjects rather than simply memorising
              them.
            </p>

            <p className="relative">
              <span className="absolute -left-6 top-1 text-[var(--home-aqua)] text-xl">●</span>
              Teaching is supported through interactive classroom discussions,
              activity-based learning, projects, and regular assessments that
              encourage continuous improvement. Smart learning tools and gradual
              exposure to modern subjects like coding and robotics prepare
              students for future challenges.
            </p>

            <p className="relative">
              <span className="absolute -left-6 top-1 text-[var(--home-coral)] text-xl">●</span>
              We focus equally on discipline, values, communication skills, and
              overall personality development so that every child grows into a
              confident and responsible individual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
