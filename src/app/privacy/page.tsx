'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <motion.div 
        className="max-w-3xl mx-auto px-6 py-16"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {/* Privacy Policy Content */}
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-[#EAEAEA]">{t.privacy.title}</h1>
          
          <div className="text-[#A0A0A0] mb-8">
            <p className="text-sm">{t.privacy.lastUpdated}</p>
          </div>

          <div className="space-y-8 text-[#A0A0A0] leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.privacy.sections.introduction.title}</h2>
              <p>
                {t.privacy.sections.introduction.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.privacy.sections.informationWeCollect.title}</h2>
              <p className="mb-4">{t.privacy.sections.informationWeCollect.intro}</p>
              
              <h3 className="text-lg font-medium mb-3 text-[#EAEAEA]">{t.privacy.sections.informationWeCollect.informationYouProvide.title}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.privacy.sections.informationWeCollect.informationYouProvide.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-lg font-medium mb-3 mt-6 text-[#EAEAEA]">{t.privacy.sections.informationWeCollect.informationWeCollectAutomatically.title}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.privacy.sections.informationWeCollect.informationWeCollectAutomatically.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.privacy.sections.howWeUseInformation.title}</h2>
              <p className="mb-4">{t.privacy.sections.howWeUseInformation.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.privacy.sections.howWeUseInformation.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.privacy.sections.informationSharing.title}</h2>
              <p className="mb-4">{t.privacy.sections.informationSharing.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.privacy.sections.informationSharing.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.privacy.sections.dataSecurity.title}</h2>
              <p>
                {t.privacy.sections.dataSecurity.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.privacy.sections.dataRetention.title}</h2>
              <p>
                {t.privacy.sections.dataRetention.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.privacy.sections.yourRights.title}</h2>
              <p className="mb-4">{t.privacy.sections.yourRights.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.privacy.sections.yourRights.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.privacy.sections.childrensPrivacy.title}</h2>
              <p>
                {t.privacy.sections.childrensPrivacy.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.privacy.sections.changesToPolicy.title}</h2>
              <p>
                {t.privacy.sections.changesToPolicy.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.privacy.sections.contactUs.title}</h2>
              <p>
                {t.privacy.sections.contactUs.content}
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 