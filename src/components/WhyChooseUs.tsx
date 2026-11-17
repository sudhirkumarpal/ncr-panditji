import React from 'react';
import { 
  Scroll, 
  Clock, 
  PackageCheck, 
  Coins, 
  Home, 
  CalendarCheck
} from 'lucide-react';
import { Language } from '../types';
import { WHY_CHOOSE_US } from '../data/servicesData';

interface WhyChooseUsProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scroll': return Scroll;
      case 'Clock': return Clock;
      case 'PackageCheck': return PackageCheck;
      case 'HandCoins': return Coins;
      case 'Home': return Home;
      case 'CalendarCheck': return CalendarCheck;
      default: return Scroll;
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-devotional-pattern border-y-2 border-amber-300 relative overflow-hidden">
      
      {/* Decorative Aura */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 text-amber-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
            <span className="text-vedic-saffron animate-diya-flicker">🕉️</span>
            <span>
              {lang === 'hi' ? 'वैदिक प्रामाणिकता एवं निष्ठा' : 'Vedic Trust & Excellence'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vedic-dark font-serif tracking-tight drop-shadow-xs">
            {lang === 'hi' ? 'NCR पंडित जी को ही क्यों चुनें?' : 'Why Choose NCR Pandit Ji?'}
          </h2>

          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            {lang === 'hi'
              ? 'हमारा उद्देश्य केवल पूजा सम्पन्न कराना नहीं, अपितु आपके परिवार के प्रत्येक सदस्य के मन में श्रद्धा, शांति एवं सकारात्मक ऊर्जा का संचार करना है।'
              : 'Our mission goes beyond performing rites — we strive to instill lasting peace, prosperity, and sacred vibrations in your home.'}
          </p>
        </div>

        {/* 6 Grid Cards with Traditional Ornamental Vedic Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = getIcon(item.icon);
            return (
              <div
                key={idx}
                className="vedic-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group overflow-hidden shadow-sm hover:shadow-gold-glow"
              >
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-vedic-saffron text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-gold-glow transition-all duration-300 border border-amber-200">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-vedic-dark font-serif group-hover:text-vedic-maroon transition-colors">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {lang === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
