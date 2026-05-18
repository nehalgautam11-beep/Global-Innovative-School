import type { Metadata } from "next";
// Import the new font "Mali"
import { Fredoka, Quicksand, Patrick_Hand, Mali } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./globals.css";

const fredoka = Fredoka({ 
  subsets: ["latin"], 
  variable: "--font-fredoka",
  display: "swap",
});

const quicksand = Quicksand({ 
  subsets: ["latin"], 
  variable: "--font-quicksand",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick",
  display: "swap",
});

// Configure the new unique font
const mali = Mali({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mali",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Innovative School | Premium Education",
  description: "Global Innovative School provides a modern, joyful learning environment. Discover our state-of-the-art campus, robotics lab, and activity-based pre-primary wing.",
  keywords: ["Global Innovative School", "GIS", "Best School", "Premium Education", "Robotics Lab", "Pre-Primary", "Admissions"],
  authors: [{ name: "Global Innovative School" }],
  openGraph: {
    title: "Global Innovative School | Premium Education",
    description: "A modern, joyful learning environment for the leaders of tomorrow.",
    url: "https://globalinnovativeschool.com",
    siteName: "Global Innovative School",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "XTQrBb2ys8Mp48RPf_XipSFPVse8B3GJj9lIOpVIqlA",
  },
  icons: {
    icon: "/logo.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Add mali.variable to the body class list */}
      <body className={`${fredoka.variable} ${quicksand.variable} ${patrickHand.variable} ${mali.variable} font-sans bg-school-cream text-school-text antialiased overflow-x-hidden selection:bg-school-primary selection:text-white`}>
        <Navbar />
        {children}
        <Footer />
        
        {/* Floating Book a Visit Button */}
        <a 
          href="https://wa.me/916264039361?text=Hi,%20I%20would%20like%20to%20book%20a%20visit%20to%20the%20school." 
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 hover:bg-[#128C7E] transition-all"
        >
          <span className="font-bold tracking-wide">Book a Visit</span>
        </a>
      </body>
    </html>
  );
}