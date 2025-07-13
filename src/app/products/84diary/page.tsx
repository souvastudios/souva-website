'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export default function EightyFourDiary() {
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
            <span className="text-3xl font-bold text-[#EAEAEA]">84</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#EAEAEA]">
            {t.products.diary84.title}
          </h1>
          <p className="text-xl text-[#A0A0A0] mb-8">
            {t.products.diary84.subtitle}
          </p>
        </motion.div>

        {/* Product Description */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <div className="bg-[#1C1C1C] rounded-2xl p-8">
            {t.products.diary84.description.map((paragraph, index) => (
              <p key={index} className="text-[#A0A0A0] text-lg leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Download Buttons */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold text-[#EAEAEA] mb-6">
            {t.products.common.availableNow}
          </h3>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Link
              href="https://apps.apple.com/app/84diary"
              className="flex items-center justify-center space-x-3 bg-[#2A2A2A] hover:bg-[#333333] px-6 py-3 rounded-lg transition-colors duration-200 font-medium text-[#EAEAEA]"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>{t.products.common.downloadIos}</span>
            </Link>
            
            <Link
              href="https://play.google.com/store/apps/details?id=com.souva.84diary"
              className="flex items-center justify-center space-x-3 bg-[#2A2A2A] hover:bg-[#333333] px-6 py-3 rounded-lg transition-colors duration-200 font-medium text-[#EAEAEA]"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span>{t.products.common.downloadAndroid}</span>
            </Link>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-[#EAEAEA] mb-8 text-center">
            {t.products.common.features}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1C1C1C] rounded-xl p-6">
              <h4 className="text-lg font-semibold text-[#EAEAEA] mb-3">
                {t.products.diary84.features.constraintBased.title}
              </h4>
              <p className="text-[#A0A0A0]">
                {t.products.diary84.features.constraintBased.description}
              </p>
            </div>
            
            <div className="bg-[#1C1C1C] rounded-xl p-6">
              <h4 className="text-lg font-semibold text-[#EAEAEA] mb-3">
                {t.products.diary84.features.privacyFirst.title}
              </h4>
              <p className="text-[#A0A0A0]">
                {t.products.diary84.features.privacyFirst.description}
              </p>
            </div>
            
            <div className="bg-[#1C1C1C] rounded-xl p-6">
              <h4 className="text-lg font-semibold text-[#EAEAEA] mb-3">
                {t.products.diary84.features.dailyHabit.title}
              </h4>
              <p className="text-[#A0A0A0]">
                {t.products.diary84.features.dailyHabit.description}
              </p>
            </div>
            
            <div className="bg-[#1C1C1C] rounded-xl p-6">
              <h4 className="text-lg font-semibold text-[#EAEAEA] mb-3">
                {t.products.diary84.features.cleanInterface.title}
              </h4>
              <p className="text-[#A0A0A0]">
                {t.products.diary84.features.cleanInterface.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 