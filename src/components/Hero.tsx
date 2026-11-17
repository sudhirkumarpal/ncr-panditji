import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { PANDIT_CONTACT } from '../data/servicesData';
import { templeBell } from '../utils/audio';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  const [diyaLit, setDiyaLit] = useState(false);

  const handleLightDiya = () => {
    setDiyaLit(true);
    templeBell.ring();
  };

  return (
    <section className="relative overflow-hidden bg-devotional-pattern pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-amber-300/80">
      
      {/* Devotional Slow-Rotating Mandala SVG in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] lg:w-[950px] lg:h-[950px] pointer-events-none -z-10 opacity-20 text-amber-500 animate-spin-very-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
          {/* Petal Geometry */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <path
              key={deg}
              d="M100 25 C108 55 125 75 100 100 C75 75 92 55 100 25 Z"
              transform={`rotate(${deg} 100 100)`}
              fill="currentColor"
              opacity="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Floating Sacred Aura Glows */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-gradient-to-tr from-amber-400/25 to-orange-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-bl from-orange-400/20 to-yellow-300/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

      {/* Subtle Floating Sacred Elements */}
      <div className="absolute top-8 left-8 text-amber-400/50 text-3xl font-serif select-none pointer-events-none animate-float-gentle hidden md:block">
        ॐ
      </div>
      <div className="absolute bottom-16 left-12 text-orange-400/50 text-2xl font-serif select-none pointer-events-none animate-float-delayed hidden md:block">
        🔱
      </div>
      <div className="absolute top-20 right-10 text-amber-400/50 text-3xl font-serif select-none pointer-events-none animate-float-gentle hidden md:block">
        卐
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Sacred Mantra & Status Pill */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 border-2 border-amber-300/80 text-amber-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition">
              <span className="text-vedic-saffron animate-diya-flicker font-bold text-base">🪔</span>
              <span className="font-serif tracking-wide">
                {lang === 'hi' 
                  ? '॥ ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ॥' 
                  : '॥ Divine Vedic Blessings & Traditional Ceremonies ॥'}
              </span>
            </div>

            {/* Main Heading with Devotional Gold & Maroon */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-vedic-dark tracking-tight leading-[1.14] font-serif">
              {lang === 'hi' ? (
                <>
                  <span className="block text-vedic-maroon drop-shadow-xs">
                    NCR पंडित जी
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-vedic-saffron via-amber-600 to-vedic-maroon bg-clip-text text-transparent font-bold block mt-2">
                    विधि-विधान एवं वैदिक मर्यादा के साथ संपूर्ण पूजा-पाठ
                  </span>
                </>
              ) : (
                <>
                  <span className="block text-vedic-maroon drop-shadow-xs">
                    NCR Pandit Ji
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-vedic-saffron via-amber-600 to-vedic-maroon bg-clip-text text-transparent font-bold block mt-2">
                    Sacred Vedic Pujas & Holy Ceremonies
                  </span>
                </>
              )}
            </h1>

            {/* Geographic Coverage */}
            <p className="text-base sm:text-lg md:text-xl text-stone-800 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {lang === 'hi' ? (
                <>
                  <span className="text-vedic-maroon font-bold bg-amber-100/60 px-2 py-0.5 rounded">दिल्ली • नोएडा • ग्रेटर नोएडा • गाज़ियाबाद</span> एवं आसपास के NCR क्षेत्रों में गृह प्रवेश, रुद्राभिषेक, कथा, हवन, विवाह संस्कार व भूमि पूजन हेतु प्रतिष्ठित आचार्य।
                </>
              ) : (
                <>
                  Authentic Vedic Purohit for Griha Pravesh, Rudrabhishek, Satyanarayan Katha, Vivah, and Hawan in <span className="text-vedic-maroon font-bold bg-amber-100/60 px-2 py-0.5 rounded">Delhi, Noida, Greater Noida, Ghaziabad & NCR</span>.
                </>
              )}
            </p>

            {/* 3 Core Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-xl mx-auto lg:mx-0 pt-1 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-amber-300 rounded-xl p-2.5 shadow-xs hover:border-amber-400 hover:shadow-sm transition">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-bold text-stone-800">
                  {lang === 'hi' ? '100% वैदिक विधि' : 'Pure Vedic Vidhi'}
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-amber-300 rounded-xl p-2.5 shadow-xs hover:border-amber-400 hover:shadow-sm transition">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-bold text-stone-800">
                  {lang === 'hi' ? 'पूर्ण सामग्री व्यवस्था' : 'Full Samagri Kit'}
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-amber-300 rounded-xl p-2.5 shadow-xs hover:border-amber-400 hover:shadow-sm transition">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-bold text-stone-800">
                  {lang === 'hi' ? 'निःशुल्क मुहूर्त विचार' : 'Free Muhurat Help'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              {/* Call Now Button */}
              <a
                href={`tel:+91${PANDIT_CONTACT.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full text-base font-bold bg-vedic-maroon hover:bg-vedic-maroonDark text-white shadow-lg hover:shadow-maroon-glow transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-yellow-300" />
                <span>{lang === 'hi' ? '📞 अभी कॉल करें' : '📞 Call: 9625057815'}</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/91${PANDIT_CONTACT.phone}?text=${encodeURIComponent(
                  lang === 'hi'
                    ? 'नमस्ते पंडित जी, मुझे दिल्ली NCR में पूजा-पाठ हेतु शुभ मुहूर्त एवं बुकिंग की जानकारी चाहिए।'
                    : 'Namaste Pandit Ji, I would like to inquire about booking a puja ritual in Delhi NCR.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full text-base font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>{lang === 'hi' ? '💬 WhatsApp करें' : '💬 WhatsApp Us'}</span>
              </a>

              {/* Book Puja Button */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full text-base font-bold bg-gradient-to-r from-vedic-saffron via-amber-500 to-vedic-saffron hover:bg-pos-100 text-white shadow-lg hover:shadow-divine transition-all transform hover:-translate-y-0.5 shimmer-badge"
              >
                <Calendar className="w-5 h-5 text-yellow-200" />
                <span>{lang === 'hi' ? 'पूजा बुक करें' : 'Book Puja'}</span>
              </button>
            </div>

            {/* Interactive Devotional Diya lighting / Bell action */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-stone-600">
              <button
                onClick={handleLightDiya}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border transition-all ${
                  diyaLit
                    ? 'bg-amber-100 border-amber-400 text-amber-950 font-bold shadow-xs'
                    : 'bg-white/80 border-stone-300 text-stone-700 hover:border-amber-400'
                }`}
              >
                <span className={diyaLit ? 'animate-diya-flicker text-base' : 'text-base'}>🪔</span>
                <span>
                  {diyaLit
                    ? (lang === 'hi' ? 'दीप प्रज्वलित हुआ! शुभम्' : 'Sacred Diya Lit! Auspicious')
                    : (lang === 'hi' ? 'दीप प्रज्वलित करें' : 'Light the Sacred Diya')}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </button>

              <div className="flex items-center space-x-1 text-amber-700 font-bold">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>4.9 / 5</span>
                <span className="text-stone-600 font-normal">(1,500+ {lang === 'hi' ? 'पूजा सम्पन्न' : 'Pujas Done'})</span>
              </div>
            </div>

          </div>

          {/* Right Featured Pandit Ji Portrait with Intense Divine Halo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer Glowing Halo Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 rounded-[2.5rem] blur-xl opacity-60 transition-all duration-700 ${diyaLit ? 'opacity-90 blur-2xl scale-105' : 'animate-pulse-glow'}`}></div>

              {/* Main Golden Frame */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-amber-300 via-orange-400 to-amber-500 shadow-2xl border-2 border-yellow-200">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-900 group">
                  <img
                    src="/assets/panditji-portrait.jpg"
                    alt="NCR Pandit Ji in Traditional Attire"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle Spiritual Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>

                  {/* Top Brand Emblem Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-full py-1 px-3 flex items-center space-x-2 shadow-lg border border-amber-400">
                    <img 
                      src="/assets/ncr-panditji-logo.jpg" 
                      alt="Badge Logo" 
                      className="w-6 h-6 rounded-full object-cover" 
                    />
                    <span className="text-xs font-bold text-vedic-maroon font-serif">NCR पंडित जी</span>
                  </div>

                  {/* Live Status Pill with pulse */}
                  <div className="absolute top-3 right-3 bg-emerald-600/95 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    <span>{lang === 'hi' ? 'आज बुकिंग हेतु उपलब्ध' : 'Available Today'}</span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl animate-diya-flicker">🪔</span>
                        <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-200">
                          {lang === 'hi' ? 'आचार्य पंडित जी' : 'Acharya Pandit Ji'}
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-200 leading-snug">
                        {lang === 'hi' 
                          ? '12+ वर्षों का शास्त्रोक्त अनुभव • शुक्ल यजुर्वेदीय रुद्राष्टाध्यायी एवं वैदिक कर्मकांड विशारद'
                          : '12+ Years Vedic Experience • Expert in Shukla Yajurvediya Rituals & Vastu'}
                      </p>
                      
                      <div className="pt-2 flex items-center justify-between border-t border-white/20 mt-2">
                        <a
                          href={`tel:+91${PANDIT_CONTACT.phone}`}
                          className="inline-flex items-center space-x-1.5 text-xs font-bold text-yellow-300 hover:text-white transition"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Direct: 9625057815</span>
                        </a>
                        <button
                          onClick={onOpenBooking}
                          className="bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-amber-400 hover:to-yellow-400 text-stone-950 text-xs font-bold px-3 py-1.5 rounded-lg shadow transition"
                        >
                          {lang === 'hi' ? 'मुहूर्त पूछें' : 'Check Muhurat'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Auspicious Badge with Om */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border-2 border-amber-300 flex items-center space-x-3 max-w-[240px] sm:max-w-xs animate-float-gentle">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
                  ॐ
                </div>
                <div>
                  <div className="text-xs font-bold text-vedic-maroon font-serif">
                    {lang === 'hi' ? 'श्रद्धा एवं शुद्धता' : 'Pure Vedic Sanctity'}
                  </div>
                  <div className="text-[11px] text-stone-600 font-medium">
                    {lang === 'hi' ? 'समस्त NCR में समय पर उपस्थिति' : 'Guaranteed On-time presence'}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
