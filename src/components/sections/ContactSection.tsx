"use client";
import { motion } from "framer-motion";
import { Phone, Smartphone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden font-['Poppins']">
      
      {/* =========================================================
          LAYER 0: BACKGROUND DECORATION (The Flight Path)
         ========================================================= */}
      
      {/* Dashed Line Flight Path */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
         <path 
           d="M-100,100 C 200,50, 400,300, 800,100 S 1400,200, 1600,50" 
           fill="none" 
           stroke="#3b82f6" 
           strokeWidth="2" 
           strokeDasharray="10 10" 
         />
      </svg>

      {/* Floating Paper Plane */}
      <motion.div 
        animate={{ 
            offsetDistance: "100%",
            x: [0, 100, 0],
            y: [0, -20, 0],
            rotate: [0, 10, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 text-blue-400 opacity-60 pointer-events-none"
      >
         <Send size={64} strokeWidth={1.5} />
      </motion.div>


      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* =========================================================
            HEADER: INVITING & CLEAN
           ========================================================= */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-blue-50 text-blue-600 mb-4 animate-bounce">
             <Mail size={24} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight">
            Contact & <span className="text-blue-600">Admission</span> Enquiries
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed font-medium">
            For admission enquiries and detailed information about our curriculum,
            facilities, and programs, please contact the school office. We welcome
            parents to visit the campus and interact with our faculty.
          </p>
        </div>

        {/* =========================================================
            CONTACT CARDS: INTERACTIVE & COLOR CODED
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. LANDLINE (Blue Theme) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 text-center border border-blue-50 overflow-hidden"
          >
             {/* Background Blob */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
             
             {/* Icon */}
             <div className="relative w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:rotate-12 transition-transform">
                <Phone size={32} className="group-hover:animate-ping" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Phone size={32} /> 
                </div>
             </div>

             <h3 className="text-xl font-bold text-slate-800 relative z-10">School Landline</h3>
             <p className="mt-3 text-slate-600 text-lg font-mono relative z-10 bg-blue-50/50 inline-block px-4 py-1 rounded-lg">
               +91 731 316 8264
             </p>
          </motion.div>

          {/* 2. MOBILE (Green Theme) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl hover:shadow-green-100 transition-all duration-300 text-center border border-green-50 overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
             
             <div className="relative w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:-rotate-12 transition-transform">
                <Smartphone size={32} className="group-hover:animate-pulse" />
             </div>

             <h3 className="text-xl font-bold text-slate-800 relative z-10">Mobile Number</h3>
             <p className="mt-3 text-slate-600 text-lg font-mono relative z-10 bg-green-50/50 inline-block px-4 py-1 rounded-lg">
               +91 6264039361
             </p>
          </motion.div>

          {/* 3. EMAIL (Orange/Yellow Theme) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-2xl hover:shadow-orange-100 transition-all duration-300 text-center border border-orange-50 overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
             
             <div className="relative w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Mail size={32} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
             </div>

             <h3 className="text-xl font-bold text-slate-800 relative z-10">Email Address</h3>
             <p className="mt-3 text-slate-600 text-base font-medium break-words relative z-10 hover:text-orange-600 transition-colors cursor-pointer">
               globalinnovativeschool356@gmail.com
             </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
