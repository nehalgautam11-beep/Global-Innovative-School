"use client";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white mt-24 font-['Poppins'] overflow-hidden border-t border-white/10">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* Decorative "FOOTER" Watermark behind everything */}
      <div className="hidden lg:block absolute bottom-0 right-0 p-12 select-none pointer-events-none z-0">
        <h1 className="text-[12vw] font-black leading-none text-[#111] tracking-tighter">
          GIS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
        
        {/* Main Grid: 12 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* =========================================
              LEFT COLUMN: THE MAP 
             ========================================= */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 border-l-2 border-orange-500 pl-3">
              <MapPin size={16} className="text-orange-500" /> Locate Us
            </h3>
            
            {/* Map Container - Styled for Dark Mode */}
            <div className="w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden border border-white/10 shadow-lg relative group bg-gray-900">
              {/* Overlay to prevent accidental scrolling while navigating the page */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none z-10" />
              
<iframe 
  src="https://maps.google.com/maps?q=Global+Innovative+School,+Vijay+Nagar,+Indore,+M.P&t=&z=15&ie=UTF8&iwloc=&output=embed" 
  width="100%" 
  height="100%" 
  style={{ border: 0 }} 
  allowFullScreen={false} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  className="grayscale-[60%] contrast-125 opacity-100 hover:opacity-100 hover:grayscale-[10%] transition-all duration-500"
/>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: TEXT CONTENT & LINKS
             ========================================= */}
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-10">
            
            {/* 1. School Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter leading-none">
                Global <br/>
                <span className="text-orange-500">Innovative</span> School
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Nurturing young minds with a balanced approach of academics,
                discipline, creativity, and modern learning to prepare students
                for future challenges.
              </p>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 border-l-2 border-orange-500 pl-3">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Pre-Primary", href: "/pre-primary" },
                  { name: "Primary", href: "/primary" },
                  { name: "Middle Wing", href: "/middle-wing" },
                  { name: "Gallery", href: "/#gallery" },
                  { name: "Contact", href: "tel:+916264039361" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <ArrowUpRight size={14} className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Contact Details */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 border-l-2 border-orange-500 pl-3">
                Contact Us
              </h3>
              <div className="space-y-4 text-sm text-gray-300">
                
                <div className="flex flex-col gap-1 group">
                   <span className="text-[10px] font-bold text-orange-500 uppercase">Address</span>
                   <span className="font-light leading-snug group-hover:text-white transition-colors">
                     1320 & 1321, Sch no. 114,<br/>
                     Part 1, Vijay Nagar,<br/>
                     Indore, M.P
                   </span>
                </div>

                <div className="flex flex-col gap-1 group pt-2">
                   <span className="text-[10px] font-bold text-orange-500 uppercase">Phone</span>
                   <span className="font-mono text-base group-hover:text-white transition-colors">731 316 8264</span>
                   <span className="font-mono text-base group-hover:text-white transition-colors">+91 6264039361</span>
                </div>

                <div className="flex flex-col gap-1 group pt-2">
                   <span className="text-[10px] font-bold text-orange-500 uppercase">Email</span>
                   <span className="font-light break-all group-hover:text-white transition-colors">globalinnovativeschool356@gmail.com</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
           ========================================= */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors">
            © {new Date().getFullYear()} Global Innovative School. All rights reserved.
          </p>
          
          <div className="flex gap-4 text-xs font-mono text-gray-500">
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}