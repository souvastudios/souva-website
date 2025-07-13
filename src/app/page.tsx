'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#EAEAEA] mb-8 font-urbanist">
            {t.home.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#A0A0A0] font-urbanist leading-relaxed">
            {t.home.hero.subtitle}
          </p>
        </motion.div>

        {/* Our Ecosystem Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-12 text-center font-urbanist">
            {t.home.ecosystem.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 84Diary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 hover:bg-[#222] transition-colors duration-300 border border-[#333]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#EAEAEA] rounded-xl flex items-center justify-center mr-4">
                  <span className="text-[#121212] font-bold text-lg">84</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EAEAEA] font-urbanist">{t.home.ecosystem.products.diary84.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">{t.home.ecosystem.products.diary84.status}</span>
                  </div>
                </div>
              </div>
              <p className="text-[#A0A0A0] mb-6 font-urbanist">{t.home.ecosystem.products.diary84.description}</p>
              <div className="flex space-x-3">
                <Link 
                  href="https://apps.apple.com/app/84diary/id6737720826" 
                  target="_blank"
                  className="bg-[#EAEAEA] text-[#121212] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#D0D0D0] transition-colors"
                >
                  {t.home.ecosystem.products.diary84.buttons.appStore}
                </Link>
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.souva.diary84" 
                  target="_blank"
                  className="bg-[#333] text-[#EAEAEA] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#444] transition-colors"
                >
                  {t.home.ecosystem.products.diary84.buttons.googlePlay}
                </Link>
              </div>
            </motion.div>

            {/* Focule Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 hover:bg-[#222] transition-colors duration-300 border border-[#333]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#EAEAEA] rounded-xl flex items-center justify-center mr-4">
                  <div className="w-6 h-6 border-2 border-[#121212] rounded-full relative">
                    <div className="absolute inset-1 bg-[#121212] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EAEAEA] font-urbanist">{t.home.ecosystem.products.focule.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">{t.home.ecosystem.products.focule.status}</span>
                  </div>
                </div>
              </div>
              <p className="text-[#A0A0A0] mb-6 font-urbanist">{t.home.ecosystem.products.focule.description}</p>
              <Link 
                href="/products/focule"
                className="inline-block bg-[#333] text-[#EAEAEA] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#444] transition-colors"
              >
                {t.home.ecosystem.products.focule.button}
              </Link>
            </motion.div>

            {/* Ovlo Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 hover:bg-[#222] transition-colors duration-300 border border-[#333]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#EAEAEA] rounded-xl flex items-center justify-center mr-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#121212] rounded-full"></div>
                    <div className="w-4 h-0.5 bg-[#121212] mx-1"></div>
                    <div className="w-2 h-2 bg-[#121212] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EAEAEA] font-urbanist">{t.home.ecosystem.products.ovlo.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">{t.home.ecosystem.products.ovlo.status}</span>
                  </div>
                </div>
              </div>
              <p className="text-[#A0A0A0] mb-6 font-urbanist">{t.home.ecosystem.products.ovlo.description}</p>
              <Link 
                href="/products/ovlo"
                className="inline-block bg-[#333] text-[#EAEAEA] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#444] transition-colors"
              >
                {t.home.ecosystem.products.ovlo.button}
              </Link>
            </motion.div>

            {/* Souva Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 hover:bg-[#222] transition-colors duration-300 border border-[#333]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#EAEAEA] rounded-xl flex items-center justify-center mr-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-[#121212] rounded-full opacity-80"></div>
                    <div className="w-3 h-3 bg-[#121212] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EAEAEA] font-urbanist">{t.home.ecosystem.products.souva.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full">{t.home.ecosystem.products.souva.status}</span>
                  </div>
                </div>
              </div>
              <p className="text-[#A0A0A0] mb-6 font-urbanist">{t.home.ecosystem.products.souva.description}</p>
              <Link 
                href="/products/souva"
                className="inline-block bg-[#333] text-[#EAEAEA] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#444] transition-colors"
              >
                {t.home.ecosystem.products.souva.button}
              </Link>
            </motion.div>

            {/* Voona Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 hover:bg-[#222] transition-colors duration-300 border border-[#333]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#EAEAEA] rounded-xl flex items-center justify-center mr-4">
                  <div className="w-6 h-6 border-2 border-[#121212] rounded-full flex items-center justify-center">
                    <span className="text-[#121212] font-bold text-xs">?</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EAEAEA] font-urbanist">{t.home.ecosystem.products.voona.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded-full">{t.home.ecosystem.products.voona.status}</span>
                  </div>
                </div>
              </div>
              <p className="text-[#A0A0A0] mb-6 font-urbanist">{t.home.ecosystem.products.voona.description}</p>
              <div className="bg-[#333] text-[#A0A0A0] px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                {t.home.ecosystem.products.voona.button}
              </div>
            </motion.div>

            {/* Viamos Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 hover:bg-[#222] transition-colors duration-300 border border-[#333]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#EAEAEA] rounded-xl flex items-center justify-center mr-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#121212] rounded-full"></div>
                    <div className="w-1 h-3 bg-[#121212] rounded-full mx-1"></div>
                    <div className="w-2 h-2 bg-[#121212] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#EAEAEA] font-urbanist">{t.home.ecosystem.products.viamos.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded-full">{t.home.ecosystem.products.viamos.status}</span>
                  </div>
                </div>
              </div>
              <p className="text-[#A0A0A0] mb-6 font-urbanist">{t.home.ecosystem.products.viamos.description}</p>
              <div className="bg-[#333] text-[#A0A0A0] px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                {t.home.ecosystem.products.viamos.button}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

