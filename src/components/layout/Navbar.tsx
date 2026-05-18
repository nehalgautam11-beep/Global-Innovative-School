"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Pre-Primary", href: "/pre-primary" },
  { name: "Primary", href: "/primary" },
  { name: "Middle Wing", href: "/middle-wing" },
  { name: "Gallery", href: "/#gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFBF2]/90 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Global Innovative School Logo" className="h-16 md:h-20 w-auto" />
          <span className="text-2xl font-black text-[#2D3436] tracking-tight">GIS</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[#2D3436] font-bold hover:text-[#FF8F54] transition-colors font-content"
            >
              {link.name}
            </Link>
          ))}
          
          {/* CONTACT & ENQUIRY BUTTONS */}
          <div className="flex items-center gap-3">
            <Link 
              href="tel:+916264039361" 
              className="px-6 py-2 bg-[#FF8F54] text-white font-bold rounded-full shadow-md hover:bg-orange-500 transition-all font-content"
            >
              Contact Us
            </Link>
            <a 
              href="https://wa.me/916264039361?text=Hello!%20I%20would%20like%20to%20make%20an%20admission%20enquiry." 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#25D366] text-white font-bold rounded-full shadow-md hover:bg-[#128C7E] transition-all font-content flex items-center gap-2"
            >
              Enquiry
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#2D3436]">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#FFFBF2] border-b border-gray-100 p-6 md:hidden flex flex-col gap-5 shadow-2xl z-50"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-[#2D3436] hover:text-[#FF8F54] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="tel:+916264039361" 
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-4 bg-[#FF8F54] text-white font-black rounded-xl text-center shadow-lg active:scale-95 transition-all"
          >
            Contact Us
          </Link>

          <a 
            href="https://wa.me/916264039361?text=Hello!%20I%20would%20like%20to%20make%20an%20admission%20enquiry." 
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="px-6 py-4 bg-[#25D366] text-white font-black rounded-xl text-center shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            Enquiry
          </a>
        </motion.div>
      )}
    </nav>
  );
}