"use client";
import { motion } from "framer-motion";
import { Book, PenTool, Globe, Lightbulb, Paperclip, Star } from "lucide-react";

export default function PrimaryWingPage() {
  
  // FIXED: Added 'as const' to satisfied TypeScript types
  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as const, // Fix applied here
        bounce: 0.4, 
        duration: 0.8 
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-yellow-200">
      
      {/* =========================================================
          GLOBAL STYLES: IMPORTING UNIQUE FONTS
         ========================================================= */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;600;700&family=Patrick+Hand&display=swap');
        
        .font-hand { font-family: 'Patrick Hand', cursive; }
        .font-fredoka { font-family: 'Fredoka', sans-serif; }
        
        /* Realistic Graph Paper Background */
        .bg-graph-paper {
          background-color: #fdfbf7;
          background-image: 
            linear-gradient(#e5e7eb 1px, transparent 1px),
            linear-gradient(90deg, #e5e7eb 1px, transparent 1px);
          background-size: 30px 30px;
        }

        /* Notebook Line Pattern for Text Areas */
        .bg-notebook-lines {
          background-image: repeating-linear-gradient(transparent, transparent 31px, #a5b4fc 31px, #a5b4fc 32px);
          line-height: 32px;
        }
      `}</style>

      {/* =========================================================
          HERO BANNER: The "Title Page"
         ========================================================= */}
      <section className="relative py-28 bg-graph-paper text-center overflow-hidden border-b-4 border-dashed border-gray-300">
        
        {/* Floating Doodles */}
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 left-10 text-blue-400 opacity-50">
           <Globe size={64} strokeWidth={1.5} />
        </motion.div>
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-20 right-20 text-yellow-500 opacity-60">
           <Lightbulb size={56} strokeWidth={1.5} />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-block bg-yellow-300 px-6 py-2 transform -rotate-2 mb-6 shadow-[4px_4px_0_black] border-2 border-black">
             <span className="font-hand text-2xl font-bold tracking-widest text-black">GRADES 1 TO 5</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-fredoka font-bold text-slate-800 tracking-tight mb-6">
            Primary Wing
          </h1>
          
          <div className="relative inline-block">
             <p className="font-hand text-2xl md:text-3xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
               Building strong academic foundations with conceptual clarity,
               discipline, and interactive learning methods for growing learners.
             </p>
             {/* Decorative Underline Doodle */}
             <svg className="absolute -bottom-4 left-0 w-full h-4 text-blue-400 opacity-70" viewBox="0 0 200 9" fill="none"><path d="M2.00025 7.00001C36.6366 2.66667 122.955 -3.83333 198.001 5.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT AREA
         ========================================================= */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-4 gap-12">
          
          {/* Main Scroll Content */}
          <div className="md:col-span-3 space-y-24">
            
            {/* 1. OVERVIEW */}
            <div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp}>
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border-2 border-blue-200">
                      <Book size={20} />
                   </div>
                   <h2 className="text-4xl font-fredoka font-bold text-slate-800">Overview</h2>
                </div>
                <div className="bg-notebook-lines pt-1">
                    <p className="text-xl font-hand text-slate-700 leading-[32px]">
                    The Primary Wing focuses on strengthening core academic
                    skills in reading, writing, mathematics, and environmental
                    studies. Students are guided through structured lessons
                    combined with engaging classroom activities.
                    </p>
                </div>
              </motion.div>
            </div>

            {/* 2. TEACHING METHODOLOGY */}
            <div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp}>
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 border-2 border-green-200">
                      <PenTool size={20} />
                   </div>
                   <h2 className="text-4xl font-fredoka font-bold text-slate-800">Teaching Methodology</h2>
                </div>
                <p className="text-xl font-hand text-slate-700 leading-relaxed">
                  Our teaching approach combines conceptual explanation,
                  regular practice, classroom discussions, and activity-based
                  learning to ensure students understand subjects thoroughly
                  rather than memorising them.
                </p>
              </motion.div>
            </div>

            {/* 3. ACADEMIC FOCUS: Sticky Notes Grid */}
            <div className="relative">
              <h2 className="text-4xl font-fredoka font-bold text-center text-slate-800 mb-12">
                Academic Focus Areas
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                
                {/* Note 1: Yellow */}
                <motion.div 
                   whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                   className="bg-[#FEF08A] p-6 shadow-[4px_4px_10px_rgba(0,0,0,0.1)] rotate-[-2deg] font-hand text-lg relative"
                >
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#B45309] shadow-inner" /> {/* Pin */}
                   <h3 className="text-2xl font-bold text-slate-800 mb-2 border-b-2 border-slate-800/10 pb-1">Language Skills</h3>
                   <p className="text-slate-700 leading-tight">
                    Emphasis on reading, writing, vocabulary building, and
                    effective communication through structured language lessons.
                   </p>
                </motion.div>

                {/* Note 2: Pink */}
                <motion.div 
                   whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                   className="bg-[#FECDD3] p-6 shadow-[4px_4px_10px_rgba(0,0,0,0.1)] rotate-[2deg] font-hand text-lg relative"
                >
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/40 rotate-[-5deg]" /> {/* Tape */}
                   <h3 className="text-2xl font-bold text-slate-800 mb-2 border-b-2 border-slate-800/10 pb-1">Mathematical Concepts</h3>
                   <p className="text-slate-700 leading-tight">
                    Strong focus on number sense, logical reasoning, and
                    step-by-step problem solving to build confidence in maths.
                   </p>
                </motion.div>

                {/* Note 3: Blue */}
                <motion.div 
                   whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                   className="bg-[#BAE6FD] p-6 shadow-[4px_4px_10px_rgba(0,0,0,0.1)] rotate-[-1deg] font-hand text-lg relative"
                >
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0369A1] shadow-inner" /> {/* Pin */}
                   <h3 className="text-2xl font-bold text-slate-800 mb-2 border-b-2 border-slate-800/10 pb-1">Environmental Studies</h3>
                   <p className="text-slate-700 leading-tight">
                    Understanding surroundings, nature, and basic science
                    concepts through observation and practical examples.
                   </p>
                </motion.div>

              </div>
            </div>


            {/* 5. DISCIPLINE */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl shadow-[8px_8px_0_#CBD5E1]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                   <Star className="text-yellow-400 fill-current" size={32} />
                   <h2 className="text-3xl font-fredoka font-bold text-slate-800">
                    Discipline & Value Education
                   </h2>
                </div>
                <p className="text-xl font-hand text-slate-700 leading-relaxed">
                  Along with academics, students are taught discipline,
                  respect, teamwork, and moral values that shape responsible
                  behaviour and positive attitudes towards learning.
                </p>
              </div>
            </div>

          </div>

          {/* =========================================================
              SIDEBAR: THE CLIPBOARD
             ========================================================= */}
          <aside className="md:col-span-1">
            <div className="sticky top-28">
               
               {/* The Clipboard Clip */}
               <div className="relative z-10 mx-auto w-32 h-12 bg-gray-700 rounded-t-lg flex items-center justify-center -mb-6 shadow-lg">
                  <div className="w-20 h-4 bg-gray-300 rounded-full border-2 border-gray-500" />
               </div>

               <div className="bg-[#F1F5F9] rounded-lg p-6 pt-12 shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-gray-300 relative">
                  <div className="absolute top-4 right-4"><Paperclip className="text-gray-400" /></div>
                  
                  <h3 className="text-2xl font-fredoka font-bold text-slate-800 mb-6 text-center underline decoration-wavy decoration-blue-300 decoration-2">
                    Quick Information
                  </h3>

                  <div className="space-y-6 font-hand text-lg">
                    <div className="flex flex-col border-b border-gray-300 pb-2">
                        <span className="text-gray-500 text-sm font-sans uppercase font-bold">Classes Offered</span>
                        <span className="text-slate-800 text-xl font-bold">Classes 1 – 5</span>
                    </div>

                    <div className="flex flex-col border-b border-gray-300 pb-2">
                        <span className="text-gray-500 text-sm font-sans uppercase font-bold">Teaching Method</span>
                        <span className="text-slate-800 leading-tight">Concept-Based & Interactive Learning</span>
                    </div>

                    <div className="flex flex-col border-b border-gray-300 pb-2">
                        <span className="text-gray-500 text-sm font-sans uppercase font-bold">Focus Areas</span>
                        <span className="text-slate-800 leading-tight">Academics, Discipline, Communication Skills</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-gray-500 text-sm font-sans uppercase font-bold">Learning Approach</span>
                        <span className="text-slate-800 leading-tight">Practice, Activities & Conceptual Clarity</span>
                    </div>
                  </div>
                  
                  {/* Bottom Checkmark Decoration */}
                  <div className="absolute bottom-4 right-4 text-green-500 opacity-20">
                     <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
               </div>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}