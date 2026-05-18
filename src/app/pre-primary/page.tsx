"use client";
import { motion } from "framer-motion";
import { Sun, Cloud, Heart, BookOpen, Smile, Leaf, Sparkles, Image as ImageIcon, ArrowRight, Backpack, Pencil, Palette, ToyBrick, Send, Shapes } from "lucide-react";
import Image from "next/image";

export default function PrePrimaryPage() {
  
  // Gentle floating animation for background elements
  const float = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const }
    }
  };

  return (
    <main className="relative bg-[#FEFCF5] min-h-screen overflow-hidden font-sans selection:bg-[#FFD54F] selection:text-[#5D4037]">
      
      {/* =========================================================
          GLOBAL STYLES & ASSETS
         ========================================================= */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700;800&family=Patrick+Hand&display=swap');
        
        .font-marker { font-family: 'Patrick Hand', cursive; }
        .font-rounded { font-family: 'Fredoka', sans-serif; }
        
        /* Playful Organic Shapes */
        .blob-shape-1 { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        .blob-shape-2 { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
      `}</style>

      {/* =========================================================
          DECORATIVE BACKGROUND ELEMENTS (Nature & Sky)
         ========================================================= */}
      
      {/* Top Left Tree Branch */}
      <div className="absolute top-0 left-0 w-72 h-72 z-0 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#8D6E63] drop-shadow-lg">
           <path d="M0,0 Q100,50 150,20 T200,60 V0 H0 Z" />
        </svg>
        <motion.div variants={float} animate="animate" className="absolute top-10 left-20 text-[#AED581]"><Leaf size={50} fill="currentColor" /></motion.div>
        <motion.div variants={float} animate="animate" className="absolute top-24 left-10 text-[#81C784]"><Leaf size={40} fill="currentColor" /></motion.div>
      </div>

      {/* Top Right Hanging Leaves */}
      <div className="absolute top-0 right-0 w-56 h-56 z-0 pointer-events-none opacity-80">
         <svg viewBox="0 0 100 100" className="w-full h-full fill-[#A5D6A7]">
            <circle cx="80" cy="20" r="30" />
            <circle cx="50" cy="10" r="25" />
            <circle cx="90" cy="60" r="20" />
         </svg>
      </div>

      {/* Animated Sun & Clouds */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" as const }} className="absolute top-12 right-24 text-[#FFCA28] z-0 drop-shadow-[0_0_30px_rgba(255,202,40,0.6)]">
          <Sun size={90} fill="#FFCA28" strokeWidth={0} />
      </motion.div>
      <motion.div animate={{ x: [-30, 30, -30] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" as const }} className="absolute top-28 left-[30%] text-[#E1F5FE] opacity-90 z-0 drop-shadow-md">
          <Cloud size={120} fill="currentColor" strokeWidth={0} />
      </motion.div>

      {/* =========================================================
          NEW PLAYFUL KIDS ELEMENTS (Hero Section)
         ========================================================= */}
      {/* Flying Paper Plane */}
      <motion.div 
        animate={{ x: [-150, 1500], y: [100, -50, 80, -20] }} 
        transition={{ duration: 18, repeat: Infinity, ease: "linear" as const }} 
        className="absolute top-40 left-0 text-[#4DD0E1] z-20 pointer-events-none opacity-80"
      >
          <Send size={60} strokeWidth={1.5} fill="#B2EBF2" className="transform rotate-45" />
      </motion.div>

      {/* Floating Backpack */}
      <motion.div variants={float} animate="animate" className="absolute top-64 left-[-20px] md:left-12 text-[#FF8A65] z-0 opacity-60 rotate-[-15deg] pointer-events-none">
          <Backpack size={90} strokeWidth={1.5} fill="#FFCCBC" />
      </motion.div>

      {/* Floating Toy Brick */}
      <motion.div variants={float} animate="animate" style={{ animationDelay: '1.5s' }} className="absolute bottom-20 left-[20%] text-[#BA68C8] z-0 opacity-60 rotate-[25deg] pointer-events-none hidden md:block">
          <ToyBrick size={80} strokeWidth={1.5} fill="#E1BEE7" />
      </motion.div>


      {/* =========================================================
          HERO SECTION
         ========================================================= */}
      <section className="relative pt-40 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
           
           {/* Text Content */}
           <div className="text-left relative">
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Playful Floating Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border-2 border-[#FFF176] mb-6">
                  <Sparkles className="text-[#FBC02D]" size={18} />
                  <span className="font-rounded font-bold text-[#F57F17] tracking-wide uppercase text-sm">Where the journey begins</span>
                </div>

                {/* Massive Bold Header */}
                <div className="relative inline-block mb-6">
                   <div className="absolute inset-0 bg-[#FFF59D] transform -skew-x-6 rounded-xl -z-10 shadow-[8px_8px_0px_#FFE082]" />
                   <h1 className="font-rounded text-6xl md:text-[5rem] font-black text-[#4E342E] px-6 py-4 tracking-tight leading-none">
                     Pre-Primary <br /> Wing
                   </h1>
                </div>
                
                <h2 className="font-marker text-4xl text-[#FF7043] mb-6 drop-shadow-sm">
                  Play • Learn • Grow
                </h2>
                
                <p className="font-rounded text-xl text-[#6D4C41] leading-relaxed max-w-lg font-medium">
                  A joyful and nurturing environment where our youngest learners begin
                  their educational journey through active, play-based discovery.
                </p>
                
                {/* Chunky 3D Button */}
                <button className="mt-10 bg-[#9CCC65] text-white font-rounded text-lg font-bold py-4 px-10 rounded-full shadow-[0_6px_0_#689F38] hover:transform hover:translate-y-2 hover:shadow-[0_0px_0_#689F38] transition-all flex items-center gap-3 active:scale-95">
                   Book A Visit <ArrowRight strokeWidth={3} size={20} />
                </button>
              </motion.div>
           </div>

           {/* Hero Image (Blob Shape) */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative flex justify-center"
           >
              {/* Dynamic Animated Blob */}
              <motion.div 
                animate={{ borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" as const }}
                className="w-full max-w-lg h-[450px] bg-white overflow-hidden border-[12px] border-white shadow-[0_20px_50px_rgba(141,110,99,0.2)] relative z-10 group"
              >
                 <img src="/pre-primary-hero.jpg" alt="Pre-Primary Hero" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* Decor behind image */}
              <motion.div animate={{ rotate: -10 }} className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#80DEEA] rounded-full z-0 opacity-80 shadow-lg" />
              <motion.div animate={{ rotate: 15 }} className="absolute top-12 -left-12 w-20 h-20 bg-[#FFAB91] rounded-3xl z-0 opacity-80 shadow-lg" />
           </motion.div>

        </div>
      </section>


      {/* =========================================================
          KEY FEATURES (The Cards)
         ========================================================= */}
      <section className="relative py-20 z-20">
         <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
               
               <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[2.5rem] shadow-xl text-center relative border-b-8 border-[#FFF59D]">
                  <div className="w-20 h-20 mx-auto bg-[#FFF9C4] rounded-2xl rotate-3 flex items-center justify-center text-[#F57F17] mb-6 shadow-sm">
                     <Smile size={40} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-marker text-3xl text-[#4E342E] mb-4">Play-Based</h3>
                  <p className="font-rounded text-[#6D4C41] text-lg font-medium leading-relaxed">
                     Activities, games, and storytelling methods make learning completely natural and fun.
                  </p>
               </motion.div>

               <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[2.5rem] shadow-xl text-center relative border-b-8 border-[#A5D6A7] md:-translate-y-8">
                  <div className="w-20 h-20 mx-auto bg-[#C8E6C9] rounded-2xl -rotate-3 flex items-center justify-center text-[#2E7D32] mb-6 shadow-sm">
                     <BookOpen size={40} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-marker text-3xl text-[#4E342E] mb-4">Language</h3>
                  <p className="font-rounded text-[#6D4C41] text-lg font-medium leading-relaxed">
                     A strong focus on speaking, active listening, and early confident communication.
                  </p>
               </motion.div>

               <motion.div whileHover={{ y: -10 }} className="bg-white p-10 rounded-[2.5rem] shadow-xl text-center relative border-b-8 border-[#FFAB91]">
                  <div className="w-20 h-20 mx-auto bg-[#FFCCBC] rounded-2xl rotate-6 flex items-center justify-center text-[#D84315] mb-6 shadow-sm">
                     <Heart size={40} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-marker text-3xl text-[#4E342E] mb-4">Safe Zone</h3>
                  <p className="font-rounded text-[#6D4C41] text-lg font-medium leading-relaxed">
                     A warm, caring atmosphere where every single child feels secure and deeply valued.
                  </p>
               </motion.div>

            </div>
         </div>
      </section>


      {/* =========================================================
          MAIN CONTENT AREA (Overview & Approach)
         ========================================================= */}
      <section className="py-24 relative z-10 bg-white rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.03)] mt-10 border-t-8 border-[#FFF9C4]">
        
        {/* =========================================================
            NEW PLAYFUL KIDS ELEMENTS (Content Section)
           ========================================================= */}
        {/* Giant Floating Pencil */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [45, 50, 45] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }} 
          className="absolute top-24 right-[-40px] md:right-10 text-[#FFD54F] opacity-40 z-0 pointer-events-none"
        >
            <Pencil size={180} strokeWidth={1} fill="#FFF9C4" />
        </motion.div>

        {/* Floating Paint Palette */}
        <motion.div 
          animate={{ rotate: [-10, 10, -10] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }} 
          className="absolute bottom-60 left-[-20px] md:left-10 text-[#F06292] opacity-30 z-0 pointer-events-none"
        >
            <Palette size={140} strokeWidth={1.5} fill="#F8BBD0" />
        </motion.div>

        {/* Floating ABC Shapes */}
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 2 }} 
          className="absolute top-1/2 right-[5%] text-[#4FC3F7] opacity-30 rotate-[15deg] z-0 pointer-events-none hidden lg:block"
        >
            <Shapes size={120} strokeWidth={1.5} fill="#B3E5FC" />
        </motion.div>


        {/* Section Header */}
        <div className="text-center mb-20 relative z-10">
           <span className="font-rounded font-bold text-[#FF7043] tracking-widest uppercase text-sm bg-[#FBE9E7] px-4 py-2 rounded-full">Explore The Magic</span>
           <h2 className="font-marker text-5xl text-[#4E342E] mt-6">Inside The Centre</h2>
           <div className="w-32 h-2 bg-[#FFCA28] mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-4 gap-16 relative z-10">
          
          {/* Main Column */}
          <div className="lg:col-span-3 space-y-24">
            
            {/* 1. OVERVIEW */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="order-2 md:order-1">
                  <h3 className="font-marker text-4xl text-[#4E342E] mb-6">Wing Overview</h3>
                  <p className="font-rounded text-lg text-[#6D4C41] leading-relaxed mb-8 font-medium">
                    The Pre-Primary Wing focuses on building a rock-solid foundation
                    through fun, engaging, and highly interactive learning experiences.
                    Children are encouraged to explore their surroundings, express their feelings, and learn at
                    their own unique pace.
                  </p>
                  <button className="bg-[#EFEBE9] text-[#4E342E] font-rounded text-base font-bold py-3 px-8 rounded-full border-2 border-[#D7CCC8] hover:bg-[#D7CCC8] transition-colors">
                     Read More »
                  </button>
               </div>
               <div className="order-1 md:order-2 relative">
                  <div className="w-full h-80 blob-shape-1 bg-white border-8 border-white shadow-2xl overflow-hidden relative">
                     <img src="/pre-primary-overview.jpg" alt="Pre-Primary Overview" className="absolute inset-0 w-full h-full object-cover m-2 rounded-[inherit]" />
                  </div>
               </div>
            </div>

            {/* 2. LEARNING APPROACH */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <div className="w-full h-80 blob-shape-2 bg-white border-8 border-white shadow-2xl overflow-hidden relative">
                     <img src="/pre-primary-approach.jpg" alt="Pre-Primary Learning Approach" className="absolute inset-0 w-full h-full object-cover m-2 rounded-[inherit]" />
                  </div>
               </div>
               <div>
                  <h3 className="font-marker text-4xl text-[#4E342E] mb-6">Learning Approach</h3>
                  <p className="font-rounded text-lg text-[#6D4C41] leading-relaxed mb-8 font-medium">
                    Our teaching approach is heavily rooted in play-way methods, vibrant visual
                    learning, and hands-on activity-based instruction. This combination helps children
                    absorb basic concepts naturally and joyfully without any pressure.
                  </p>
                  <button className="bg-[#EFEBE9] text-[#4E342E] font-rounded text-base font-bold py-3 px-8 rounded-full border-2 border-[#D7CCC8] hover:bg-[#D7CCC8] transition-colors">
                     Read More »
                  </button>
               </div>
            </div>

            {/* 3. DEVELOPMENT FOCUS */}
            <div className="bg-[#FFF8E1] p-12 rounded-[3rem] border-4 border-[#FFE082] relative overflow-hidden shadow-lg">
               <div className="absolute -right-12 -bottom-12 opacity-30 text-[#FFCA28]">
                  <Sun size={250} strokeWidth={1} />
               </div>
               <h3 className="font-marker text-4xl text-[#F57F17] mb-6 relative z-10 drop-shadow-sm">Development Focus</h3>
               <p className="font-rounded text-[#F57F17] text-xl leading-relaxed relative z-10 font-bold max-w-2xl">
                  Special emphasis is placed on social interaction, emotional
                  growth, foundational discipline, and unbridled creativity, ensuring that children
                  develop a strong, confident personality from their earliest years.
               </p>
            </div>

          </div>


          {/* =========================================================
              SIDEBAR: WOODEN SIGNBOARD
             ========================================================= */}
          <aside className="lg:col-span-1">
             <div className="sticky top-32 pt-10">
                
                {/* Thick Rope */}
                <div className="flex justify-center -mb-4 relative z-0">
                   <div className="w-3 h-16 bg-[#5D4037] rounded-full shadow-md" />
                   <div className="w-3 h-16 bg-[#5D4037] rounded-full shadow-md ml-12" />
                </div>
                
                {/* The 3D Signboard */}
                <div className="bg-[#795548] p-8 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.2)] text-[#FFF8E1] border-8 border-[#4E342E] relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                   
                   {/* Wood Grain Texture Overlay */}
                   <div className="absolute inset-0 opacity-20 rounded-xl" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(0,0,0,0.2) 15px, rgba(0,0,0,0.2) 20px)" }} />
                   
                   <h3 className="font-marker text-3xl text-center mb-8 border-b-4 border-[#5D4037] pb-4 relative z-10 text-[#FFECB3]">
                      Quick Info
                   </h3>
                   
                   <div className="space-y-6 relative z-10 font-rounded text-base">
                      <div className="bg-[#5D4037] p-4 rounded-xl shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)] border-b-2 border-[#8D6E63]">
                         <strong className="block text-[#FFCCBC] font-black uppercase text-sm mb-2 tracking-wider">Classes</strong>
                         Play Group, Nursery, KG 1, KG 2
                      </div>
                      <div className="bg-[#5D4037] p-4 rounded-xl shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)] border-b-2 border-[#8D6E63]">
                         <strong className="block text-[#C5E1A5] font-black uppercase text-sm mb-2 tracking-wider">Method</strong>
                         Play-way & Activity Based
                      </div>
                      <div className="bg-[#5D4037] p-4 rounded-xl shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)] border-b-2 border-[#8D6E63]">
                         <strong className="block text-[#80DEEA] font-black uppercase text-sm mb-2 tracking-wider">Focus</strong>
                         Communication & Manners
                      </div>
                   </div>
                </div>

                {/* Decorative Leaves at bottom of sign */}
                <div className="flex justify-center -mt-6 relative z-20 gap-4">
                    <Leaf className="text-[#66BB6A] transform -rotate-45 drop-shadow-md" size={40} fill="currentColor" />
                    <Leaf className="text-[#43A047] transform rotate-45 drop-shadow-md" size={32} fill="currentColor" />
                </div>

             </div>
          </aside>

        </div>
      </section>
    </main>
  );
}