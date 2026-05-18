"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "We have seen remarkable improvement in our child’s confidence and academic performance. The teachers are supportive, disciplined, and always encourage students to do their best.",
      author: "Neha Sharma",
      delay: 0,
      offset: "md:-translate-y-0", // Normal position
      color: "border-blue-100 bg-blue-50/30"
    },
    {
      text: "The school provides a balanced environment where studies, activities, and values are given equal importance. Our child enjoys going to school every day.",
      author: "Rohit Singh",
      delay: 0.2,
      offset: "md:translate-y-12", // Pushed down to create a "Wave"
      color: "border-purple-100 bg-purple-50/30"
    },
    {
      text: "The focus on individual attention and conceptual learning has helped our child develop strong fundamentals. We truly appreciate the dedication of the faculty.",
      author: "Dr. Divya Jain",
      delay: 0.4,
      offset: "md:-translate-y-0", // Normal position
      color: "border-teal-100 bg-teal-50/30"
    },
  ];

  return (
    <section className="relative py-20 bg-[#F8FAFC] overflow-hidden font-['Poppins']">
      
      {/* Background Pattern: Giant Quote Mark */}
      <div className="absolute top-10 left-10 text-gray-200 opacity-40 select-none font-serif text-[200px] leading-none -z-10 animate-pulse">
        “
      </div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-blue-500 font-bold tracking-wider text-sm uppercase">Community Voices</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-800">
            What Parents Say About Us
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              // Continuous Floating Animation
              animate={{ y: [0, -10, 0] }}
              
              // Applying the "Wave" offset via classNames
              className={`relative p-8 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-lg rounded-bl-lg bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border ${item.color} ${item.offset} hover:shadow-xl transition-shadow duration-300 text-left flex flex-col justify-between h-full min-h-[300px]`}
            >
              {/* Decorative Quote Icon */}
              <div className="mb-6 text-slate-300">
                <Quote size={32} fill="currentColor" strokeWidth={0} />
              </div>

              {/* Content */}
              <p className="text-slate-600 leading-relaxed font-medium italic relative z-10">
                "{item.text}"
              </p>

              {/* Author / Footer */}
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    {item.author}
                  </p>
                  <div className="flex text-yellow-400 text-xs gap-0.5">
                     <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
