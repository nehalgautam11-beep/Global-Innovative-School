"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number; // Delay in seconds
  direction?: "up" | "down" | "left" | "right" | "none"; // 'none' for simple fade/zoom
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.2, 
  direction = "up" 
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getVariants = () => {
    const distance = 75;
    const initial = { opacity: 0, scale: 0.9 };
    
    if (direction === "up") return { ...initial, y: distance };
    if (direction === "down") return { ...initial, y: -distance };
    if (direction === "left") return { ...initial, x: distance };
    if (direction === "right") return { ...initial, x: -distance };
    return { ...initial, scale: 0.5 }; // 'none' does a pop-in effect
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: getVariants(),
          visible: { 
            opacity: 1, 
            y: 0, 
            x: 0,
            scale: 1,
            transition: {
              type: "spring",
              damping: 15,
              stiffness: 100,
              delay: delay,
              duration: 0.5
            }
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};