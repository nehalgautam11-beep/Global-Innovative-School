"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function RatingSection() {
  const [clicked, setClicked] = useState(false);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [rating, setRating] = useState<number>(0);

  return (
    <section className="py-16 bg-white font-['Poppins']">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-orange-50 rounded-3xl p-8 shadow-sm border border-orange-100 relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-bl-full opacity-50 pointer-events-none" />

          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 relative z-10">Rate GIS</h2>
          <p className="text-gray-600 mb-8 relative z-10">We value your feedback! How was your experience?</p>
          
          <div className="flex justify-center items-center gap-2 mb-6 relative z-10">
            {[1, 2, 3, 4, 5].map((star) => {
              const isActive = hoveredStar !== null ? star <= hoveredStar : star <= rating;
              return (
                <motion.button
                  key={star}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(null)}
                  onClick={() => {
                    setRating(star);
                    setClicked(true);
                  }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9, rotate: -10 }}
                  className="focus:outline-none"
                >
                  <Star
                    size={48}
                    className={`transition-colors duration-200 ${
                      isActive 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-gray-300 fill-gray-300"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          <div className="h-8 relative z-10">
            {clicked && (
              <motion.p
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="text-orange-500 font-bold text-lg"
              >
                Thank you for your rating! ❤️
              </motion.p>
            )}
          </div>
          
          <div className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm relative z-10 border border-gray-100">
            <span className="font-bold text-gray-800">Current Rating:</span>
            <span className="font-extrabold text-yellow-500 text-lg">5.0</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
