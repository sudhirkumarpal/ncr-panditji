import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import { Language } from '../types';
import { SERVICE_AREAS, PANDIT_CONTACT } from '../data/servicesData';

interface ServiceAreasProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ lang, onOpenBooking }) => {
  return (
    <section id="areas" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300 text-emerald-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
            <Navigation className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>
              {lang === 'hi' ? 'समस्त दिल्ली NCR में उपलब्धता' : 'Coverage Across Entire Delhi NCR'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vedic-dark font-serif tracking-tight drop-shadow-xs">
            {lang === 'hi' ? 'सेवा क्षेत्र (Coverage Areas)' : 'Our Service Areas'}
          </h2>

          <p className="text-stone-700 text-base sm:text-lg">
            {lang === 'hi'
              ? 'दिल्ली, नोएडा, ग्रेटर नोएडा, गाज़ियाबाद तथा आसपास के सभी प्रमुख सेक्टर्स एवं सोसायटियों में त्वरित उपलब्धता।'
              : 'Prompt on-site Pandit Ji service across major residential societies and sectors in Delhi NCR.'}
          </p>
        </div>

        {/* Areas Cards Grid with Devotional Framing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="vedic-card rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-gold-glow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-vedic-maroon to-vedic-saffron text-yellow-300 flex items-center justify-center font-bold shadow-md">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-vedic-dark font-serif">
                      {lang === 'hi' ? area.cityHi : area.cityEn}
                    </h3>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center space-x-1">
                    <span>❖</span>
                    <span>{lang === 'hi' ? 'प्रमुख सेक्टर्स व सोसायटियाँ:' : 'Major Sectors & Societies:'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {lang === 'hi' ? area.sectorsHi : area.sectorsEn}
                  </p>
                </div>

                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-4">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'hi' ? area.timingHi : area.timingEn}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-100 flex items-center gap-2">
                <button
                  onClick={onOpenBooking}
                  className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-vedic-saffron to-amber-500 text-white text-xs font-bold text-center flex items-center justify-center space-x-1 shadow-sm transition hover:opacity-95"
                >
                  <span>{lang === 'hi' ? 'यहाँ बुक करें' : 'Book in Area'}</span>
                </button>

                <a
                  href={`tel:+91${PANDIT_CONTACT.phone}`}
                  className="py-2 px-3 rounded-xl bg-white border border-stone-300 hover:border-vedic-saffron text-stone-800 text-xs font-bold text-center flex items-center justify-center space-x-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-vedic-saffron" />
                  <span>{lang === 'hi' ? 'कॉल' : 'Call'}</span>
                </a>

                <a
                  href={`https://wa.me/91${PANDIT_CONTACT.phone}?text=${encodeURIComponent(
                    lang === 'hi'
                      ? `नमस्ते पंडित जी, मुझे ${area.cityHi} क्षेत्र में पूजा-पाठ हेतु संपर्क करना है।`
                      : `Namaste Pandit Ji, I need to book a puja in ${area.cityEn}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* High-Rise Society Note with Devotional Frame */}
        <div className="mt-12 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-3xl p-6 border-2 border-amber-300 text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
            <span className="font-bold text-vedic-maroon">
              {lang === 'hi' ? '📌 अपार्टमेंट व हाई-राइज सोसायटियों हेतु विशेष व्यवस्था:' : '📌 Special Arrangement for High-Rise Societies:'}
            </span>{' '}
            {lang === 'hi'
              ? 'सोसाइटी नियमानुसार धुआं-रहित विशेष तांबे के हवन कुंड एवं प्राकृतिक औषधीय सामग्री का प्रयोग किया जाता है।'
              : 'Low-smoke copper hawan kunds and herbal samagri compliant with apartment smoke sensor norms.'}
          </p>
        </div>

      </div>
    </section>
  );
};
