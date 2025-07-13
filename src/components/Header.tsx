'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  
  const fadeInUp = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.header 
      className="w-full border-b border-[#2A2A2A] bg-[#121212]"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-3xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/"
            className="text-xl font-bold uppercase tracking-wide text-[#EAEAEA] hover:text-[#A0A0A0] transition-colors duration-200"
          >
            SOUVA
          </Link>

          {/* Navigation */}
          <Link 
            href="/blog"
            className="text-[#A0A0A0] hover:text-[#EAEAEA] transition-colors duration-200 font-medium"
          >
            {t.header.blog}
          </Link>
        </nav>
      </div>
    </motion.header>
  );
} 