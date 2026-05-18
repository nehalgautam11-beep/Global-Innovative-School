"use client";
import { motion } from "framer-motion";
import { Atom, FlaskConical, Dna, Calculator, Microscope, Brain, Rocket, ChevronRight } from "lucide-react";

export default function MiddleWingPage() {
  
  // Animation: Floating Molecules
  const float = (delay: number) => ({
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut" as const,
    },
  });

  // Animation: Spinning Atom
  const spin = {
    animate: { rotate: 360 },
    transition: { duration: 10, repeat: Infinity, ease: "linear" as const }
  };

  return (
    <main className="min-h-screen bg-[#F0F9FF] font-sans selection:bg-cyan-200 overflow-hidden relative">
      
      {/* =========================================================
          GLOBAL STYLES: SCIENCE FONTS
         ========================================================= */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Outfit:wght@300;400;600&display=swap');
        
        .font-tech { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Outfit', sans-serif; }
        
        /* Graph Grid Background */
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
        }
      `}</style>

      {/* =========================================================
          BACKGROUND: THE LABORATORY
         ========================================================= */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />
      
      {/* Floating Bubbles/Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/20 blur-sm"
            style={{
                width: Math.random() * 50 + 20,
                height: Math.random() * 50 + 20,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }}
            animate={{
                y: [0, -100],
                opacity: [0, 0.5, 0]
            }}
            transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear" as const,
                delay: Math.random() * 2
            }}
        />
      ))}

      {/* =========================================================
          HERO SECTION: The Experiment Begins
         ========================================================= */}
      <section className="relative py-28 text-center z-10 border-b border-cyan-100 bg-white/50 backdrop-blur-sm">
        
        {/* Decorative Floating Icons */}
        <motion.div animate={float(0)} className="absolute top-10 left-[10%] text-cyan-500 opacity-60">
            <Atom size={80} strokeWidth={1} />
        </motion.div>
        <motion.div animate={float(2)} className="absolute bottom-10 right-[10%] text-purple-500 opacity-60">
            <Dna size={80} strokeWidth={1} />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 relative">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="inline-flex items-center gap-2 bg-cyan-100/50 px-4 py-1 rounded-full text-cyan-700 font-tech font-bold text-sm tracking-widest mb-6 border border-cyan-200"
            >
                <FlaskConical size={16} /> 
                <span>EXPERIMENTING WITH KNOWLEDGE</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-tech font-bold text-slate-800 tracking-tight mb-6">
              Middle Wing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">(6–8)</span>
            </h1>
            
            <p className="font-body text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Developing conceptual understanding, analytical thinking, and
              independent learning skills to prepare students for higher academic
              challenges.
            </p>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
         ========================================================= */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-4 gap-12">
          
          {/* Main Scroll Content */}
          <div className="md:col-span-3 space-y-24">
            
            {/* 1. OVERVIEW */}
            <div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                      <Brain size={28} />
                   </div>
                   <h2 className="text-3xl font-tech font-bold text-slate-800">Overview</h2>
                </div>
                <p className="text-lg font-body text-slate-600 leading-relaxed pl-4 border-l-4 border-blue-400">
                  The Middle Wing focuses on strengthening conceptual knowledge,
                  critical thinking, and independent learning habits. Students
                  are guided to analyse, question, and understand subjects in
                  depth rather than relying only on memorisation.
                </p>
              </div>
            </div>

            {/* 2. ACADEMIC APPROACH */}
            <div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                      <Microscope size={28} />
                   </div>
                   <h2 className="text-3xl font-tech font-bold text-slate-800">Academic Approach</h2>
                </div>
                <p className="text-lg font-body text-slate-600 leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  Teaching is focused on conceptual clarity, logical reasoning,
                  and regular problem-solving practice. Classroom discussions,
                  assignments, and periodic assessments help students build
                  confidence and deeper subject understanding.
                </p>
              </div>
            </div>

            {/* 3. CORE SUBJECTS: Periodic Table Elements */}
            <div>
              <h2 className="text-3xl font-tech font-bold text-center text-slate-800 mb-12 flex items-center justify-center gap-3">
                <Atom className="text-cyan-500" /> Core Subject Strengthening
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Math Element */}
                <motion.div whileHover={{ y: -10 }} className="relative bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-500 overflow-hidden group">
                   <div className="absolute -right-4 -top-4 text-slate-100 group-hover:text-blue-50 transition-colors"><Calculator size={100} /></div>
                   <div className="font-tech text-5xl font-bold text-blue-500 mb-2">Ma</div>
                   <h3 className="text-xl font-bold text-slate-800 mb-3">Mathematics</h3>
                   <p className="font-body text-slate-600 text-sm leading-relaxed relative z-10">
                    Emphasis on logical reasoning, problem solving, and stepwise
                    conceptual clarity to strengthen analytical abilities.
                   </p>
                   <div className="absolute bottom-2 right-2 text-[10px] font-mono text-blue-300">ATOMIC_WT: LOGIC</div>
                </motion.div>

                {/* Science Element */}
                <motion.div whileHover={{ y: -10 }} className="relative bg-white p-6 rounded-xl shadow-md border-b-4 border-green-500 overflow-hidden group">
                   <div className="absolute -right-4 -top-4 text-slate-100 group-hover:text-green-50 transition-colors"><FlaskConical size={100} /></div>
                   <div className="font-tech text-5xl font-bold text-green-500 mb-2">Sc</div>
                   <h3 className="text-xl font-bold text-slate-800 mb-3">Science</h3>
                   <p className="font-body text-slate-600 text-sm leading-relaxed relative z-10">
                    Understanding scientific principles through experiments,
                    demonstrations, and practical examples from daily life.
                   </p>
                   <div className="absolute bottom-2 right-2 text-[10px] font-mono text-green-300">ATOMIC_WT: DISCOVERY</div>
                </motion.div>

                {/* Language Element */}
                <motion.div whileHover={{ y: -10 }} className="relative bg-white p-6 rounded-xl shadow-md border-b-4 border-purple-500 overflow-hidden group">
                   <div className="absolute -right-4 -top-4 text-slate-100 group-hover:text-purple-50 transition-colors"><Brain size={100} /></div>
                   <div className="font-tech text-5xl font-bold text-purple-500 mb-2">La</div>
                   <h3 className="text-xl font-bold text-slate-800 mb-3">Languages</h3>
                   <p className="font-body text-slate-600 text-sm leading-relaxed relative z-10">
                    Focus on comprehension, grammar, writing skills, and
                    effective communication for academic excellence.
                   </p>
                   <div className="absolute bottom-2 right-2 text-[10px] font-mono text-purple-300">ATOMIC_WT: EXPRESSION</div>
                </motion.div>

              </div>
            </div>


            {/* 5. FUTURE READINESS */}
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl">
              {/* Background Stars */}
              <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
              
              <div className="relative z-10">
                 <div>
                    <div className="flex items-center gap-3 mb-6 text-yellow-300">
                       <Rocket size={32} />
                       <span className="font-tech font-bold tracking-widest">MISSION: FUTURE</span>
                    </div>
                    <h2 className="text-3xl font-tech font-bold mb-6">
                      Preparing for Future Academic Challenges
                    </h2>
                    <p className="text-lg font-body text-blue-100 leading-relaxed">
                      Students are gradually prepared for higher classes through
                      structured learning, project-based assignments, exposure to
                      robotics and labs, and guidance on time management and
                      independent study habits.
                    </p>
                 </div>
              </div>
            </div>

          </div>

          {/* =========================================================
              SIDEBAR: THE DATA PAD
             ========================================================= */}
          <aside className="md:col-span-1">
            <div className="sticky top-28">
               <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)] border border-cyan-200 overflow-hidden">
                  
                  {/* High Tech Header */}
                  <div className="flex items-center justify-between border-b border-cyan-100 pb-4 mb-6">
                     <h3 className="text-lg font-tech font-bold text-slate-800">
                       SYSTEM INFO
                     </h3>
                     <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                     </div>
                  </div>

                  <div className="space-y-6">
                    <div className="group">
                        <p className="text-[10px] font-mono text-cyan-500 mb-1 uppercase">Target Class</p>
                        <p className="font-tech text-xl font-bold text-slate-800 flex items-center gap-2">
                           Classes 6 – 8 <ChevronRight size={16} className="text-cyan-400" />
                        </p>
                    </div>

                    <div className="group">
                        <p className="text-[10px] font-mono text-cyan-500 mb-1 uppercase">Algorithm</p>
                        <p className="font-body font-semibold text-slate-700">
                          Conceptual & Analytical Learning
                        </p>
                    </div>

                    <div className="group">
                        <p className="text-[10px] font-mono text-cyan-500 mb-1 uppercase">Core Modules</p>
                        <p className="font-body font-semibold text-slate-700">
                          Critical Thinking, Labs, Projects
                        </p>
                    </div>

                    <div className="group">
                        <p className="text-[10px] font-mono text-cyan-500 mb-1 uppercase">Output</p>
                        <p className="font-body font-semibold text-slate-700">
                          Independent Study & Problem Solving
                        </p>
                    </div>
                  </div>

                  {/* Scanning Bar Animation at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan" />
               </div>
            </div>
          </aside>

        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}