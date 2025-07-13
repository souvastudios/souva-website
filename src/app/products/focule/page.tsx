'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export default function Focule() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <motion.div 
        className="max-w-3xl mx-auto px-6 py-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Back to Home Link */}
        <motion.div 
          className="mb-8"
          variants={fadeInUp}
        >
          <Link 
            href="/"
            className="inline-flex items-center text-[#A0A0A0] hover:text-[#EAEAEA] transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.products.common.backToHome}
          </Link>
        </motion.div>

        {/* Product Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-[#4A4A4A] to-[#2A2A2A] rounded-3xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold text-[#EAEAEA]">◯</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#EAEAEA]">
            {t.products.focule.title}
          </h1>
          <p className="text-xl text-[#A0A0A0] mb-8">
            {t.products.focule.subtitle}
          </p>
          
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#2A2A2A] rounded-full">
            <span className="text-sm font-medium text-[#EAEAEA]">{t.products.common.comingSoon}</span>
          </div>
        </motion.div>

        {/* Product Description */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <div className="bg-[#1C1C1C] rounded-2xl p-8">
            {t.products.focule.description.map((paragraph, index) => (
              <p key={index} className="text-[#A0A0A0] text-lg leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-[#EAEAEA] mb-8 text-center">
            {t.products.common.keyFeatures}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1C1C1C] rounded-xl p-6">
              <h4 className="text-lg font-semibold text-[#EAEAEA] mb-3">
                {t.products.focule.keyFeatures.intentionSetting.title}
              </h4>
              <p className="text-[#A0A0A0]">
                {t.products.focule.keyFeatures.intentionSetting.description}
              </p>
            </div>
            
            <div className="bg-[#1C1C1C] rounded-xl p-6">
              <h4 className="text-lg font-semibold text-[#EAEAEA] mb-3">
                {t.products.focule.keyFeatures.smartBreaks.title}
              </h4>
              <p className="text-[#A0A0A0]">
                {t.products.focule.keyFeatures.smartBreaks.description}
              </p>
            </div>
            
            <div className="bg-[#1C1C1C] rounded-xl p-6">
              <h4 className="text-lg font-semibold text-[#EAEAEA] mb-3">
                {t.products.focule.keyFeatures.adaptiveTiming.title}
              </h4>
              <p className="text-[#A0A0A0]">
                {t.products.focule.keyFeatures.adaptiveTiming.description}
              </p>
            </div>
            
            <div className="bg-[#1C1C1C] rounded-xl p-6">
              <h4 className="text-lg font-semibold text-[#EAEAEA] mb-3">
                {t.products.focule.keyFeatures.mindfulNotifications.title}
              </h4>
              <p className="text-[#A0A0A0]">
                {t.products.focule.keyFeatures.mindfulNotifications.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <div className="bg-[#1C1C1C] rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-[#EAEAEA] mb-4">
              {t.products.focule.philosophy.title}
            </h3>
            <blockquote className="text-[#A0A0A0] text-lg leading-relaxed italic border-l-4 border-[#2A2A2A] pl-6">
              {t.products.focule.philosophy.quote}
            </blockquote>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold text-[#EAEAEA] mb-4">
            {t.products.common.beFirstToKnow}
          </h3>
          <p className="text-[#A0A0A0] mb-6">
            {t.products.focule.getNotified}
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#2A2A2A] hover:bg-[#333333] rounded-lg transition-colors duration-200 font-medium text-[#EAEAEA]"
          >
            {t.products.common.followJourney}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 