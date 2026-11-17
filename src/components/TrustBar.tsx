import React from 'react';
import { Award, Flame, Users, Clock } from 'lucide-react';
import { Language } from '../types';

interface TrustBarProps {
  lang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ lang }) => {
  const stats = [
    {
      icon: Users,
      value: '1,500+',
      labelHi: 'संतुष्ट परिवार',
      labelEn: 'Happy Families in NCR',
      subHi: 'दिल्ली, नोएडा, गाज़ियाबाद',
      subEn: 'Delhi, Noida, Ghaziabad'
    },
    {
      icon: Award,
      value: '12+',
      labelHi: 'वर्षों का वैदिक अनुभव',
      labelEn: 'Years Vedic Experience',
      subHi: 'गुरुकुल प्रशिक्षित आचार्य',
      subEn: 'Gurukul Certified Acharya'
    },
    {
      icon: Flame,
      value: '100%',
      labelHi: 'शास्त्रोक्त विधि-विधान',
      labelEn: 'Scriptural Authenticity',
      subHi: 'शुद्ध मंत्रोच्चारण व कर्मकांड',
      subEn: 'Pure Sanskrit Pronunciation'
    },
    {
      icon: Clock,
      value: '24/7',
      labelHi: 'मुहूर्त व पूजा सहायता',
      labelEn: 'Booking & Muhurat Support',
      subHi: 'कॉल व WhatsApp पर उपलब्ध',
      subEn: 'Call & WhatsApp Assistance'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-vedic-maroonDark via-vedic-maroon to-vedic-maroonDark text-white py-9 border-y-4 border-amber-400 relative overflow-hidden shadow-2xl">
      {/* Decorative Sacred Geometry Background */}
      <div className="absolute inset-0 bg-shree-mandala opacity-20 pointer-events-none"></div>
      
      {/* Golden top and bottom accent lines */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300"></div>
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-3 rounded-2xl bg-black/20 backdrop-blur-xs border border-amber-400/20 hover:border-amber-400/60 hover:bg-black/30 transition-all duration-300 group"
              >
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-400/30 to-orange-500/30 border border-amber-400/50 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 group-hover:shadow-gold-glow transition-transform">
                  <Icon className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-300 font-serif tracking-tight drop-shadow-sm">
                  {item.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-amber-100 mt-1">
                  {lang === 'hi' ? item.labelHi : item.labelEn}
                </div>
                <div className="text-xs text-amber-200/80 mt-0.5 font-medium">
                  {lang === 'hi' ? item.subHi : item.subEn}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
