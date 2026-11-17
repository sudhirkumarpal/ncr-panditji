import React from 'react';
import { Phone, MessageCircle, Calendar, Award, BookCheck, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { PANDIT_CONTACT } from '../data/servicesData';
import { templeBell } from '../utils/audio';

interface MeetPanditJiProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const MeetPanditJi: React.FC<MeetPanditJiProps> = ({ lang, onOpenBooking }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-amber-50/60 via-[#FFFDF7] to-amber-50/60 border-y-2 border-amber-300 relative overflow-hidden">
      
      {/* Devotional Watermark Shlokas */}
      <div className="absolute top-10 right-10 text-amber-500/10 text-6xl lg:text-8xl font-serif select-none pointer-events-none -z-0">
        ॐ नमः शिवाय
      </div>
      <div className="absolute bottom-10 left-10 text-amber-500/10 text-6xl lg:text-8xl font-serif select-none pointer-events-none -z-0">
        शुभ लाभ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Media Column (Composite Photo Display with Divine Glow) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Golden Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400 via-orange-400 to-yellow-300 rounded-[2.5rem] blur-xl opacity-70 animate-pulse-glow"></div>

              {/* Main Portrait Frame */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-amber-300 shadow-2xl bg-stone-900 aspect-[4/5] group">
                <img
                  src="/assets/panditji-portrait.jpg"
                  alt="Pandit Ji NCR Profile"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/25 to-transparent"></div>
                <div className="absolute bottom-4 inset-x-4 text-center text-white">
                  <div className="font-serif text-xl sm:text-2xl font-bold text-yellow-300 drop-shadow">
                    {lang === 'hi' ? 'आचार्य पंडित जी' : 'Acharya Pandit Ji'}
                  </div>
                  <div className="text-xs sm:text-sm text-stone-200 font-medium">
                    {lang === 'hi' ? 'वैदिक कर्मकांड एवं वास्तु विशारद' : 'Vedic Purohit & Vastu Acharya'}
                  </div>
                </div>
              </div>

              {/* Inset Ritual Action Photo with golden border */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-amber-200 shadow-2xl bg-amber-100 group">
                <img
                  src="/assets/puja-ritual-home.jpg"
                  alt="Pandit Ji performing puja ritual"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-bold text-yellow-200 bg-stone-950/80 backdrop-blur-xs py-1 px-1.5 rounded-md border border-amber-400/40">
                  {lang === 'hi' ? '🪔 सजीव पूजा दर्शन' : '🪔 Ritual in Action'}
                </div>
              </div>

              {/* Decorative Om Stamp */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-vedic-maroon text-yellow-300 border-2 border-yellow-400 flex items-center justify-center font-bold text-2xl shadow-xl animate-float-gentle">
                ॐ
              </div>

            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-amber-100 border border-amber-300 text-orange-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
              <span className="text-vedic-saffron animate-diya-flicker">🕉️</span>
              <span>
                {lang === 'hi' ? 'परिचय एवं वैदिक परंपरा' : 'Meet Pandit Ji'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vedic-dark font-serif tracking-tight leading-tight">
              {lang === 'hi' ? (
                <>
                  पंडित जी से मिलिए — <br />
                  <span className="text-vedic-saffron">वैदिक मर्यादा और श्रद्धा के संवाहक</span>
                </>
              ) : (
                <>
                  Meet Acharya Pandit Ji — <br />
                  <span className="text-vedic-saffron">Preserving Vedic Sanctity Across NCR</span>
                </>
              )}
            </h2>

            {/* Sacred Philosophy Quote (Hawanguru Inspired) with Golden Left Border */}
            <blockquote className="border-l-4 border-vedic-saffron pl-4 py-3 bg-amber-100/60 rounded-r-2xl italic text-stone-800 text-sm sm:text-base font-serif shadow-xs">
              {lang === 'hi' ? (
                <>
                  "पूजा और कर्मकांड केवल औपचारिकता नहीं हैं — यह आपके, आपके पूर्वजों और प्रकृति की दिव्य शक्तियों के मध्य का पवित्र सेतु हैं।"
                  <span className="block not-italic font-bold text-vedic-maroon text-xs sm:text-sm mt-1.5 font-sans">
                    — आचार्य पंडित जी (वेद-विशारद)
                  </span>
                </>
              ) : (
                <>
                  "Rituals are not just customs — they are sacred connections between you, your ancestors, and the universe."
                  <span className="block not-italic font-bold text-vedic-maroon text-xs sm:text-sm mt-1.5 font-sans">
                    — Acharya Pandit Ji
                  </span>
                </>
              )}
            </blockquote>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {lang === 'hi' ? (
                <>
                  आचार्य पंडित जी ने पारंपरिक वैदिक गुरुकुल से शुक्ल यजुर्वेद, रुद्राष्टाध्यायी, षोडश संस्कार, दुर्गा सप्तशती एवं वास्तु शास्त्र की विधिवत दीक्षा प्राप्त की है। विगत 12 से अधिक वर्षों से वे दिल्ली, नोएडा, ग्रेटर नोएडा, गाज़ियाबाद एवं संपूर्ण NCR में गृह प्रवेश, महा रुद्राभिषेक, विवाह संस्कार और भव्य यज्ञ-हवन संपन्न करा रहे हैं।
                </>
              ) : (
                <>
                  Trained in authentic Vedic Gurukuls in Shukla Yajurveda, Rudrashtadhyayi, Samskara Vidhi, and Vastu Shastra. Over the past 12+ years, Pandit Ji has conducted more than 1,500 sacred ceremonies across Noida, Greater Noida, Ghaziabad, and Delhi NCR with flawless recitation and heartfelt devotion.
                </>
              )}
            </p>

            {/* 4 Pillars of Excellence with Card Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 bg-white p-4 rounded-2xl border border-amber-200/90 shadow-xs hover:border-amber-400 hover:shadow-md transition">
                <BookCheck className="w-5 h-5 text-vedic-saffron flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {lang === 'hi' ? 'शुद्ध संस्कृत मंत्रोच्चार' : 'Pure Sanskrit Diction'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {lang === 'hi' ? 'प्रत्येक मंत्र का सरल अर्थ यजमान को समझाते हुए पूजा' : 'Explains the divine meaning of every mantra'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-2xl border border-amber-200/90 shadow-xs hover:border-amber-400 hover:shadow-md transition">
                <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {lang === 'hi' ? 'सटीक पंचांग व मुहूर्त' : 'Accurate Muhurat'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {lang === 'hi' ? 'तिथि, वार, नक्षत्र अनुसार सर्वश्रेष्ठ मुहूर्त की गणना' : 'Panchang guidance for maximum auspiciousness'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-2xl border border-amber-200/90 shadow-xs hover:border-amber-400 hover:shadow-md transition">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {lang === 'hi' ? 'समय के पाबंद' : 'Punctual & Dedicated'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {lang === 'hi' ? 'निर्धारित मुहूर्त से पूर्व उपस्थिति एवं पूर्ण तैयारी' : 'Arrives before time with full ritual preparation'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-2xl border border-amber-200/90 shadow-xs hover:border-amber-400 hover:shadow-md transition">
                <HeartHandshake className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {lang === 'hi' ? 'पारदर्शी दक्षिणा' : 'Modest & Fair Dakshina'}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {lang === 'hi' ? 'कोई अप्रत्याशित शुल्क नहीं, केवल श्रद्धापूर्वक सहयोग' : 'Transparent, dignified and voluntary offering'}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={`tel:+91${PANDIT_CONTACT.phone}`}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-bold bg-vedic-maroon hover:bg-vedic-maroonDark text-white shadow-md hover:shadow-maroon-glow transition"
              >
                <Phone className="w-4 h-4 text-yellow-300" />
                <span>{lang === 'hi' ? 'पंडित जी से बात करें' : 'Speak with Pandit Ji'}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-vedic-saffron to-amber-500 hover:from-amber-500 hover:to-vedic-saffron text-white shadow-md hover:shadow-divine transition"
              >
                <Calendar className="w-4 h-4 text-yellow-200" />
                <span>{lang === 'hi' ? 'मुहूर्त परामर्श बुक करें' : 'Book Consultation'}</span>
              </button>

              <button
                onClick={() => templeBell.ring()}
                className="p-3 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 transition"
                title={lang === 'hi' ? 'मंदिर की घंटी बजाएं' : 'Ring Temple Bell'}
              >
                🔔
              </button>

              <a
                href={`https://wa.me/91${PANDIT_CONTACT.phone}?text=${encodeURIComponent(
                  lang === 'hi'
                    ? 'नमस्ते पंडित जी, मुझे आपके सानिध्य में पूजा-पाठ हेतु बात करनी है।'
                    : 'Namaste Pandit Ji, I would like to consult with you for an upcoming ritual.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
