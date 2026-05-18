"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const milestones = [
  {
    id: "01",
    title: "Personality Dev.",
    desc: "Building confidence through speaking and interaction.",
    tapeColor: "bg-yellow-200/80",
    markerColor: "text-orange-500",
    doodle: "★",
    rotate: "-rotate-2",
  },
  {
    id: "02",
    title: "Robotics Lab",
    desc: "Logical thinking through hands-on science and math experiments.",
    tapeColor: "bg-blue-200/80",
    markerColor: "text-cyan-500",
    doodle: "⚡",
    rotate: "rotate-1",
  },
  {
    id: "03",
    title: "Holistic Growth",
    desc: "Values, emotions, and academics growing together.",
    tapeColor: "bg-pink-200/80",
    markerColor: "text-pink-500",
    doodle: "♥",
    rotate: "-rotate-1",
  },
  {
    id: "04",
    title: "Self Defence",
    desc: "Karate training for focus, discipline, and strength.",
    tapeColor: "bg-green-200/80",
    markerColor: "text-green-600",
    doodle: "✊",
    rotate: "rotate-2",
  },
];

export default function MilestonesSection() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Poppins:wght@400;600;800&display=swap');
        .font-hand { font-family: 'Gochi Hand', cursive; }
      `}</style>

      <section className="relative overflow-hidden bg-[#FAF9F6] py-24 font-['Poppins']">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' /%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="font-hand block rotate-2 text-2xl text-gray-500">
              How we grow together...
            </span>
            <div className="relative mt-3 inline-block">
              <h2 className="relative z-10 text-4xl font-black text-[#2D3436] md:text-6xl">
                Four Big Milestones
              </h2>
              <svg
                className="absolute -bottom-2 left-0 z-0 h-4 w-full text-[#FFD059]"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,10 100,5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                key={item.id}
                className={`group relative bg-white p-3 pb-6 shadow-[0_18px_50px_rgba(45,52,54,0.14)] ${item.rotate}`}
                style={{ borderRadius: "2px" }}
              >
                <div
                  className={`absolute -top-3 left-1/2 h-8 w-24 -translate-x-1/2 rotate-1 ${item.tapeColor} opacity-90 backdrop-blur-sm z-20`}
                  style={{
                    clipPath:
                      "polygon(0% 10%, 5% 0%, 10% 10%, 15% 0%, 20% 10%, 25% 0%, 30% 10%, 35% 0%, 40% 10%, 45% 0%, 50% 10%, 55% 0%, 60% 10%, 65% 0%, 70% 10%, 75% 0%, 80% 10%, 85% 0%, 90% 10%, 95% 0%, 100% 10%, 100% 90%, 95% 100%, 90% 90%, 85% 100%, 80% 90%, 75% 100%, 70% 90%, 65% 100%, 60% 90%, 55% 100%, 50% 90%, 45% 100%, 40% 90%, 35% 100%, 30% 90%, 25% 100%, 20% 90%, 15% 100%, 10% 90%, 5% 100%, 0% 90%)",
                  }}
                />

                <div className="relative mb-4 h-56 w-full overflow-hidden border border-gray-200 bg-gray-100">
                  <Image
                    src={`/milestone-${index + 1}.jpg`}
                    alt={item.title}
                    fill
                    unoptimized
                    className="z-0 object-cover"
                  />
                  <div
                    className={`absolute bottom-2 right-2 z-10 rounded-lg bg-white/40 px-2 font-hand text-4xl font-black backdrop-blur-sm ${item.markerColor}`}
                  >
                    {item.id}
                  </div>
                </div>

                <div className="px-2 text-center">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                    <span className={`font-hand text-2xl ${item.markerColor}`}>{item.doodle}</span>
                  </div>
                  <p className="font-hand text-lg leading-6 text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
