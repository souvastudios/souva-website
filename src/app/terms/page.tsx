'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsOfUse() {
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
        {/* Terms of Use Content */}
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-[#EAEAEA]">{t.terms.title}</h1>
          
          <div className="text-[#A0A0A0] mb-8">
            <p className="text-sm">{t.terms.lastUpdated}</p>
          </div>

          <div className="space-y-8 text-[#A0A0A0] leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.acceptanceOfTerms.title}</h2>
              <p>
                {t.terms.sections.acceptanceOfTerms.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.descriptionOfServices.title}</h2>
              <p>
                {t.terms.sections.descriptionOfServices.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.userAccounts.title}</h2>
              <p className="mb-4">{t.terms.sections.userAccounts.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.terms.sections.userAccounts.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.acceptableUse.title}</h2>
              <p className="mb-4">{t.terms.sections.acceptableUse.intro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.terms.sections.acceptableUse.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.intellectualProperty.title}</h2>
              <p className="mb-4">
                {t.terms.sections.intellectualProperty.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.privacy.title}</h2>
              <p>
                {t.terms.sections.privacy.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.paymentsAndSubscriptions.title}</h2>
              <p className="mb-4">
                {t.terms.sections.paymentsAndSubscriptions.intro}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.terms.sections.paymentsAndSubscriptions.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.termination.title}</h2>
              <p>
                {t.terms.sections.termination.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.disclaimers.title}</h2>
              <p>
                {t.terms.sections.disclaimers.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.limitationOfLiability.title}</h2>
              <p>
                {t.terms.sections.limitationOfLiability.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.governingLaw.title}</h2>
              <p>
                {t.terms.sections.governingLaw.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.changesToTerms.title}</h2>
              <p>
                {t.terms.sections.changesToTerms.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#EAEAEA]">{t.terms.sections.contactInformation.title}</h2>
              <p>
                {t.terms.sections.contactInformation.content}
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 