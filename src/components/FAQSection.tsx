import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { FAQS } from '../data/servicesData';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>('f1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 text-amber-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
            <HelpCircle className="w-4 h-4 text-vedic-saffron animate-diya-flicker" />
            <span>
              {lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vedic-dark font-serif tracking-tight drop-shadow-xs">
            {lang === 'hi' ? 'सामान्य प्रश्नोत्तरी (FAQ)' : 'Common Questions & Answers'}
          </h2>

          <p className="text-stone-700 text-base">
            {lang === 'hi'
              ? 'पूजा सामग्री, मुहूर्त, अग्रिम बुकिंग एवं दक्षिणा संबंधी सभी शंकाओं का शास्त्रसम्मत समाधान।'
              : 'Clear answers to common questions regarding puja samagri, muhurat, and booking process.'}
          </p>
        </div>

        {/* Accordion with Traditional Framing */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-2 border-amber-200/90 hover:border-amber-400 rounded-3xl overflow-hidden transition-all duration-300 shadow-xs"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left p-5 sm:p-6 bg-[#FFFDF9] hover:bg-amber-50/70 flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-bold text-stone-900 text-base sm:text-lg font-serif flex items-center space-x-2">
                    <span className="text-vedic-saffron text-sm">🪔</span>
                    <span>{lang === 'hi' ? faq.questionHi : faq.questionEn}</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0 text-amber-900 font-bold">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 bg-white border-t border-amber-100 text-stone-700 text-sm sm:text-base leading-relaxed animate-in fade-in duration-200">
                    {lang === 'hi' ? faq.answerHi : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
