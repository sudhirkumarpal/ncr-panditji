import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { Language } from '../types';
import { PANDIT_CONTACT, SERVICES_DATA } from '../data/servicesData';
import { templeBell } from '../utils/audio';

interface FooterProps {
  lang: Language;
  onOpenBooking: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenBooking }) => {
  return (
    <footer className="bg-sandhya-temple text-stone-300 pt-16 pb-24 sm:pb-16 border-t-4 border-amber-400 relative overflow-hidden shadow-2xl">
      
      {/* Devotional Shimmer & Mandala */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Blessing Banner with Sacred Gayatri / Shanti Shloka */}
        <div className="text-center pb-12 border-b border-amber-500/30">
          <div 
            onClick={() => templeBell.ring()}
            className="inline-block text-4xl font-serif text-yellow-300 mb-2 cursor-pointer hover:scale-125 transition-transform animate-float-gentle"
            title={lang === 'hi' ? 'घंटी बजाएं' : 'Ring Bell'}
          >
            ॐ
          </div>
          <div className="text-base sm:text-lg text-yellow-200 font-serif italic max-w-2xl mx-auto tracking-wide drop-shadow-sm">
            "ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः । सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥"
          </div>
          <p className="text-xs sm:text-sm text-amber-200/70 mt-2">
            {lang === 'hi' 
              ? 'समस्त संसार के सभी प्राणी सुखी, निरोगी और मंगलमय हों।' 
              : 'May all beings be happy, healthy, and blessed with peace and prosperity.'}
          </p>
        </div>

        {/* 4 Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-amber-500/30 text-sm">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/ncr-panditji-logo.jpg"
                alt="NCR Pandit Ji Logo"
                className="w-13 h-13 rounded-full border-2 border-amber-400 object-cover shadow-gold-glow"
              />
              <div>
                <div className="font-serif font-bold text-xl text-yellow-300 drop-shadow">NCR पंडित जी</div>
                <div className="text-xs text-amber-200/80 font-medium">
                  {lang === 'hi' ? 'पूजा-पाठ एवं धार्मिक संस्कार' : 'Vedic Rituals & Ceremonies'}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {lang === 'hi'
                ? 'दिल्ली, नोएडा, ग्रेटर नोएडा, गाज़ियाबाद और समस्त NCR में शास्त्रोक्त विधि-विधान से गृह प्रवेश, रुद्राभिषेक, कथा एवं हवन अनुष्ठान।'
                : 'Authentic Vedic Purohit services across Delhi NCR adhering to sacred scriptures and pure devotion.'}
            </p>

            <div className="pt-2 space-y-2.5">
              <a
                href={`tel:+91${PANDIT_CONTACT.phone}`}
                className="flex items-center space-x-2 text-stone-200 hover:text-yellow-300 transition font-bold"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 9625057815</span>
              </a>

              <a
                href={`https://wa.me/91${PANDIT_CONTACT.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-stone-200 hover:text-emerald-400 transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: +91 9625057815</span>
              </a>

              <div className="flex items-start space-x-2 text-xs text-amber-200/70">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{PANDIT_CONTACT.addressHi}</span>
              </div>
            </div>
          </div>

          {/* Quick Puja Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-yellow-300 text-base tracking-wide border-b border-amber-500/30 pb-2">
              {lang === 'hi' ? 'प्रमुख पूजा सेवाएँ' : 'Key Pujas'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenBooking(s.id)}
                    className="text-stone-300 hover:text-yellow-300 transition text-left flex items-center space-x-1.5"
                  >
                    <span className="text-amber-400">❖</span>
                    <span>{lang === 'hi' ? s.titleHi : s.titleEn}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-yellow-300 text-base tracking-wide border-b border-amber-500/30 pb-2">
              {lang === 'hi' ? 'विशेष वैदिक अनुष्ठान' : 'Special Anushthan'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES_DATA.slice(6, 12).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenBooking(s.id)}
                    className="text-stone-300 hover:text-yellow-300 transition text-left flex items-center space-x-1.5"
                  >
                    <span className="text-amber-400">❖</span>
                    <span>{lang === 'hi' ? s.titleHi : s.titleEn}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage & Booking CTA */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-yellow-300 text-base tracking-wide border-b border-amber-500/30 pb-2">
              {lang === 'hi' ? 'पूजा बुकिंग व मुहूर्त' : 'Book Pandit Ji'}
            </h4>

            <p className="text-xs text-stone-300 leading-relaxed">
              {lang === 'hi'
                ? 'गृह प्रवेश, विवाह या हवन हेतु आज ही शुभ मुहूर्त विचार करें और घर बैठे पंडित जी बुक करें।'
                : 'Consult for auspicious Muhurat and book verified Gurukul Acharya for your home ceremonies.'}
            </p>

            <button
              onClick={() => onOpenBooking()}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-vedic-saffron via-amber-500 to-vedic-saffron hover:bg-pos-100 text-white font-bold text-xs shadow-lg transition shimmer-badge"
            >
              {lang === 'hi' ? '🪔 अभी पूजा बुक करें' : '🪔 Book Puja Online'}
            </button>

            <div className="pt-2 text-[11px] text-amber-200/80">
              {lang === 'hi' ? 'सेवा समय: प्रातः 6:00 बजे से रात्रि 10:00 बजे तक' : 'Service Hours: 6:00 AM - 10:00 PM'}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-200/70 gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} NCR Pandit Ji • श्रद्धा एवं विधि-विधान के साथ धार्मिक सेवाएँ। All Rights Reserved.
          </p>
          <p className="text-center sm:text-right text-[11px] text-amber-300/80">
            Designed with reverence for Sanatan Dharma across Delhi NCR
          </p>
        </div>

      </div>
    </footer>
  );
};
