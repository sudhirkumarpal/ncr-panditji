import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar, Bell } from 'lucide-react';
import { Language } from '../types';
import { PANDIT_CONTACT } from '../data/servicesData';
import { templeBell } from '../utils/audio';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBellRinging, setIsBellRinging] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBellClick = () => {
    setIsBellRinging(true);
    templeBell.ring();
    setTimeout(() => setIsBellRinging(false), 1000);
  };

  const navLinks = [
    { href: '#services', labelHi: 'पूजा सेवाएँ', labelEn: 'Puja Services' },
    { href: '#about', labelHi: 'आचार्य परिचय', labelEn: 'About Acharya' },
    { href: '#darshan', labelHi: 'सजीव दर्शन', labelEn: 'Live Darshan' },
    { href: '#why-us', labelHi: 'वैदिक विशेषताएँ', labelEn: 'Vedic Values' },
    { href: '#areas', labelHi: 'सेवा क्षेत्र', labelEn: 'NCR Areas' },
    { href: '#reviews', labelHi: 'अनुभव', labelEn: 'Reviews' },
    { href: '#faq', labelHi: 'प्रश्नोत्तरी', labelEn: 'FAQ' },
  ];

  return (
    <>
      {/* Top Auspicious Announcement Bar with golden border */}
      <div className="bg-gradient-to-r from-vedic-maroonDark via-vedic-maroon to-vedic-maroonDark text-white text-xs sm:text-sm py-2 px-3 sm:px-4 border-b border-amber-400/40 shadow-inner relative overflow-hidden">
        {/* Subtle decorative shimmer */}
        <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          
          {/* Sacred Mantra & Announcement */}
          <div className="flex items-center space-x-2 truncate">
            <span className="text-yellow-300 font-bold font-serif text-sm">॥ ॐ ॥</span>
            <span className="hidden md:inline font-medium text-amber-100">
              {lang === 'hi' 
                ? 'शुभं करोति कल्याणम् आरोग्यं धनसंपदम् • दिल्ली NCR में 1,500+ संपन्न वैदिक अनुष्ठान'
                : '॥ Sacred Vedic Pujas & Hawan Ceremonies across Delhi NCR • 1,500+ Happy Families ॥'}
            </span>
            <span className="md:hidden font-medium text-amber-100 truncate text-[11px] sm:text-xs">
              {lang === 'hi' ? 'दिल्ली NCR में प्रामाणिक पूजा-पाठ' : 'Vedic Pujas across Delhi NCR'}
            </span>
          </div>

          {/* Right Action Icons & Toggles */}
          <div className="flex items-center space-x-2.5 sm:space-x-4 flex-shrink-0">
            
            {/* Interactive Temple Bell */}
            <button
              onClick={handleBellClick}
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/40 border border-amber-300/40 text-yellow-300 transition-all ${
                isBellRinging ? 'animate-bell-ring scale-110 bg-amber-400 text-stone-950 font-bold' : ''
              }`}
              title={lang === 'hi' ? 'मंदिर की घंटी बजाएं' : 'Ring Temple Bell'}
            >
              <Bell className="w-3.5 h-3.5 fill-current" />
              <span className="text-[11px] font-semibold hidden sm:inline">
                {lang === 'hi' ? 'घंटी बजाएं' : 'Bell Chime'}
              </span>
            </button>

            {/* Direct Phone */}
            <a 
              href={`tel:+91${PANDIT_CONTACT.phone}`} 
              className="flex items-center space-x-1 text-yellow-300 hover:text-white font-bold transition text-xs sm:text-sm"
            >
              <Phone className="w-3.5 h-3.5 text-vedic-saffronLight" />
              <span>{PANDIT_CONTACT.phone}</span>
            </a>

            <div className="h-3 w-px bg-amber-400/30 hidden sm:block"></div>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="bg-white/10 hover:bg-white/20 px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-semibold border border-white/25 transition text-stone-100"
              title="Change Language"
            >
              <span>{lang === 'hi' ? '🇬🇧 English' : '🇮🇳 हिंदी'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2.5 border-b border-amber-200'
            : 'bg-[#FFFDF9]/95 backdrop-blur-sm py-3.5 border-b border-amber-200/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-amber-400 p-0.5 bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-300 shadow-md group-hover:scale-105 group-hover:shadow-gold-glow transition-all duration-300">
              <img
                src="/assets/ncr-panditji-logo.jpg"
                alt="NCR Pandit Ji Logo"
                className="w-full h-full object-cover rounded-full"
                loading="eager"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-vedic-saffron font-bold text-lg sm:text-xl animate-diya-flicker">ॐ</span>
                <span className="font-extrabold text-xl sm:text-2xl text-vedic-maroon tracking-tight font-serif drop-shadow-xs">
                  NCR पंडित जी
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-amber-900 font-semibold tracking-wide">
                {lang === 'hi' ? 'पूजा-पाठ एवं धार्मिक संस्कार' : 'Vedic Rituals & Ceremonies'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-800 hover:text-vedic-saffron font-semibold text-sm transition-colors py-1 relative group"
              >
                {lang === 'hi' ? link.labelHi : link.labelEn}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-vedic-saffron to-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`https://wa.me/91${PANDIT_CONTACT.phone}?text=${encodeURIComponent(
                lang === 'hi'
                  ? 'नमस्ते पंडित जी, मुझे दिल्ली NCR में पूजा-पाठ हेतु जानकारी एवं मुहूर्त परामर्श चाहिए।'
                  : 'Namaste Pandit Ji, I would like to inquire about booking a puja and checking muhurat in Delhi NCR.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-vedic-saffron via-amber-500 to-vedic-saffron hover:bg-pos-100 text-white shadow-md hover:shadow-divine transition transform hover:-translate-y-0.5 shimmer-badge"
            >
              <Calendar className="w-4 h-4 text-yellow-200" />
              <span>{lang === 'hi' ? 'पूजा बुक करें' : 'Book Puja'}</span>
            </button>
          </div>

          {/* Mobile Menu & Language Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="px-2 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300"
            >
              {lang === 'hi' ? 'EN' : 'हिं'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-800 hover:text-vedic-saffron hover:bg-amber-50 transition"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with spiritual touch */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gradient-to-b from-[#FFFDF9] to-amber-50 border-b-2 border-amber-300 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-stone-800 hover:bg-amber-100/70 hover:text-vedic-maroon font-semibold text-base transition flex items-center justify-between"
                >
                  <span>{lang === 'hi' ? link.labelHi : link.labelEn}</span>
                  <span className="text-vedic-saffron text-sm">🪔</span>
                </a>
              ))}
              
              <div className="pt-3 border-t border-amber-200/80 flex flex-col gap-2">
                <a
                  href={`tel:+91${PANDIT_CONTACT.phone}`}
                  className="flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-vedic-maroon text-yellow-200 font-bold text-sm shadow"
                >
                  <Phone className="w-4 h-4 text-yellow-300" />
                  <span>{lang === 'hi' ? 'कॉल करें: 9625057815' : 'Call: 9625057815'}</span>
                </a>
                
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-gradient-to-r from-vedic-saffron to-amber-500 text-white font-bold text-sm shadow-md"
                >
                  <span>🪔 {lang === 'hi' ? 'पूजा व मुहूर्त बुक करें' : 'Book Puja Online'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
