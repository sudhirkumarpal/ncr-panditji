import React, { useState, useMemo } from 'react';
import { 
  Flame, 
  Sparkles, 
  BookOpen, 
  HeartHandshake, 
  Building, 
  ShieldCheck, 
  Activity, 
  Sparkle, 
  Coins, 
  Users, 
  Sun,
  Search,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Clock,
  Package
} from 'lucide-react';
import { Language } from '../types';
import { SERVICES_DATA, PANDIT_CONTACT } from '../data/servicesData';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', labelHi: 'सभी सेवाएँ (All)', labelEn: 'All Pujas' },
    { id: 'griha', labelHi: '🪔 गृह प्रवेश व वास्तु', labelEn: 'Griha Pravesh & Vastu' },
    { id: 'hawan', labelHi: '🔥 हवन एवं यज्ञ', labelEn: 'Hawan & Yagna' },
    { id: 'sanskar', labelHi: '💍 संस्कार व विवाह', labelEn: 'Sanskars & Vivah' },
    { id: 'katha', labelHi: '📖 कथा एवं पाठ', labelEn: 'Katha & Paath' },
    { id: 'shiva', labelHi: '🔱 रुद्राभिषेक व शिव', labelEn: 'Shiva & Abhishek' },
    { id: 'special', labelHi: '🕉️ विशेष व अन्य पूजन', labelEn: 'Special & Ancestral' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((svc) => {
      const matchesCategory = activeCategory === 'all' || svc.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        svc.titleHi.toLowerCase().includes(query) ||
        svc.titleEn.toLowerCase().includes(query) ||
        svc.descHi.toLowerCase().includes(query) ||
        svc.descEn.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return Flame;
      case 'Sparkles': return Sparkles;
      case 'BookOpen': return BookOpen;
      case 'HeartHandshake': return HeartHandshake;
      case 'Building': return Building;
      case 'ShieldCheck': return ShieldCheck;
      case 'Activity': return Activity;
      case 'Sparkle': return Sparkle;
      case 'Coins': return Coins;
      case 'Users': return Users;
      case 'Sun': return Sun;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-devotional-pattern relative">
      
      {/* Decorative Aura background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 text-amber-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
            <span className="text-vedic-saffron animate-diya-flicker">🕉️</span>
            <span>
              {lang === 'hi' ? 'शास्त्रोक्त एवं वैदिक कर्मकांड' : 'Vedic Rituals & Ceremonies'}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-vedic-dark font-serif tracking-tight drop-shadow-xs">
            {lang === 'hi' ? 'हमारी धार्मिक सेवाएँ' : 'Our Sacred Puja Services'}
          </h2>
          
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            {lang === 'hi'
              ? 'प्रत्येक अनुष्ठान को वैदिक परंपरा, शुद्ध संस्कृत मंत्रोच्चार और यजमान के संकल्प अनुसार श्रद्धापूर्वक सम्पन्न कराया जाता है।'
              : 'Every ceremony is performed with utmost devotion, pure Sanskrit chants, and strict adherence to Vedic scriptures.'}
          </p>
        </div>

        {/* Search and Category Filter Controls */}
        <div className="mb-10 space-y-4">
          
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <Search className="w-5 h-5 text-amber-600" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'hi' ? 'पूजा खोजें (उदा: गृह प्रवेश, रुद्राभिषेक, हवन)...' : 'Search puja (e.g. Griha Pravesh, Hawan, Katha)...'}
              className="w-full pl-11 pr-4 py-3 rounded-full border-2 border-amber-200 focus:border-vedic-saffron focus:ring-4 focus:ring-amber-400/20 text-sm outline-none bg-white shadow-sm transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-stone-500 hover:text-stone-800 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs with glowing active state */}
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-2 gap-2 no-scrollbar px-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-vedic-maroon to-vedic-maroonDark text-yellow-200 shadow-md shadow-maroon-glow transform scale-105 border border-amber-400'
                    : 'bg-white hover:bg-amber-50 text-stone-700 border border-stone-200/80 shadow-xs'
                }`}
              >
                {lang === 'hi' ? cat.labelHi : cat.labelEn}
              </button>
            ))}
          </div>

        </div>

        {/* Services Grid with Ornamental Vedic Cards */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-amber-300">
            <p className="text-stone-600 text-lg font-medium">
              {lang === 'hi' ? 'कोई सेवा नहीं मिली।' : 'No services found matching your search.'}
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-sm text-vedic-saffron font-bold underline hover:text-vedic-maroon"
            >
              {lang === 'hi' ? 'सभी सेवाएँ देखें' : 'View all services'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => {
              const IconComponent = getServiceIcon(service.iconName);
              return (
                <div
                  key={service.id}
                  className="vedic-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group overflow-hidden shadow-sm"
                >
                  {/* Popular Ribbon with Shimmer */}
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-orange-500 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-bl-2xl shadow-sm shimmer-badge z-20">
                      {lang === 'hi' ? '★ सर्वाधिक लोकप्रिय' : '★ Most Popular'}
                    </div>
                  )}

                  <div>
                    {/* Top Icon & Meta */}
                    <div className="flex items-center space-x-3.5 mb-4">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 text-vedic-saffron border border-amber-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-gold-glow transition-all duration-300 shadow-inner">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="pr-10">
                        <h3 className="text-xl font-bold text-vedic-dark font-serif group-hover:text-vedic-maroon transition-colors leading-snug">
                          {lang === 'hi' ? service.titleHi : service.titleEn}
                        </h3>
                        <p className="text-xs text-amber-900 font-semibold line-clamp-1">
                          {lang === 'hi' ? service.subtitleHi : service.subtitleEn}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {lang === 'hi' ? service.descHi : service.descEn}
                    </p>

                    {/* Badges: Duration & Samagri */}
                    <div className="flex flex-wrap gap-2 mb-4 text-[11px] font-semibold">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                        <Clock className="w-3.5 h-3.5 text-amber-700" />
                        <span>{lang === 'hi' ? service.durationHi : service.durationEn}</span>
                      </span>
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <Package className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{lang === 'hi' ? 'सामग्री सहायता उपलब्ध' : 'Samagri Support'}</span>
                      </span>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-1.5 mb-5 border-t border-amber-100 pt-3">
                      <div className="text-xs font-bold text-stone-900 mb-1 flex items-center space-x-1">
                        <span className="text-vedic-saffron">❖</span>
                        <span>{lang === 'hi' ? 'मुख्य लाभ व शुभ फल:' : 'Divine Blessings:'}</span>
                      </div>
                      {(lang === 'hi' ? service.benefitsHi : service.benefitsEn).map((b, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-stone-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bottom Bar */}
                  <div className="pt-4 border-t border-amber-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service.id)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-vedic-saffron via-amber-500 to-vedic-saffron hover:bg-pos-100 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-divine transition flex items-center justify-center space-x-1.5 shimmer-badge"
                    >
                      <Calendar className="w-4 h-4 text-yellow-200" />
                      <span>{lang === 'hi' ? 'पूजा बुक करें' : 'Book Puja'}</span>
                    </button>

                    <a
                      href={`https://wa.me/91${PANDIT_CONTACT.phone}?text=${encodeURIComponent(
                        lang === 'hi'
                          ? `नमस्ते पंडित जी, मुझे "${service.titleHi}" के बारे में जानकारी व मुहूर्त चाहिए।`
                          : `Namaste Pandit Ji, I want to book "${service.titleEn}" and check auspicious Muhurat.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 transition flex items-center justify-center"
                      title={lang === 'hi' ? 'WhatsApp पर पूछें' : 'Inquire on WhatsApp'}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Devotional Banner inside Services */}
        <div className="mt-14 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <h4 className="text-xl sm:text-2xl font-bold text-vedic-maroon font-serif flex items-center justify-center md:justify-start space-x-2">
              <span>🪔</span>
              <span>{lang === 'hi' ? 'क्या आपकी आवश्यकता किसी विशेष अनुष्ठान की है?' : 'Need a Customized Puja or Special Anushthan?'}</span>
            </h4>
            <p className="text-sm text-stone-700">
              {lang === 'hi'
                ? 'दुर्गा सप्तशती, कालसर्प दोष, जन्मदिवस हवन या अन्य किसी विशिष्ट पूजा हेतु सीधे पंडित जी से निःशुल्क परामर्श लें।'
                : 'Connect directly with Pandit Ji for Chandi Path, Birthday Hawan, or personalized horoscope rituals.'}
            </p>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0 relative z-10">
            <a
              href={`tel:+91${PANDIT_CONTACT.phone}`}
              className="px-6 py-3 rounded-full bg-vedic-maroon text-yellow-200 font-bold text-sm shadow-md hover:bg-vedic-maroonDark transition"
            >
              {lang === 'hi' ? '📞 9625057815 पर बात करें' : '📞 Call 9625057815'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
