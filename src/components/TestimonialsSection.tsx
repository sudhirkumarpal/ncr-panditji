import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { Language } from '../types';
import { TESTIMONIALS } from '../data/servicesData';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-devotional-pattern border-b-2 border-amber-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 text-amber-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
            <span className="text-amber-500 animate-diya-flicker">★★★★★</span>
            <span>
              {lang === 'hi' ? 'यजमानों के पावन अनुभव' : 'Client Testimonials & Blessings'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vedic-dark font-serif tracking-tight drop-shadow-xs">
            {lang === 'hi' ? 'संतुष्ट परिवारों के विचार' : 'What Families in NCR Say'}
          </h2>

          <p className="text-stone-700 text-base sm:text-lg">
            {lang === 'hi'
              ? 'हमारे लिए यजमान का संतोष और ईश्वर की कृपा ही सबसे बड़ा पुरस्कार है। पढ़ें हमारे द्वारा कराई गई पूजाओं के अनुभव।'
              : 'Real feedback and genuine blessings from families across Noida, Greater Noida, Ghaziabad, and Delhi.'}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="vedic-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-gold-glow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {review.verified && (
                    <div className="inline-flex items-center space-x-1 text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full text-[11px] font-bold border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{lang === 'hi' ? 'सत्यापित यजमान' : 'Verified Family'}</span>
                    </div>
                  )}
                </div>

                <div className="relative mb-4">
                  <Quote className="w-9 h-9 text-amber-300/60 absolute -top-3 -left-2 -z-0" />
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed relative z-10 italic font-serif">
                    "{lang === 'hi' ? review.commentHi : review.commentEn}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-vedic-dark text-sm sm:text-base font-serif">
                    {review.name}
                  </h4>
                  <div className="text-xs text-stone-500 mt-0.5">
                    {review.location} • <span className="text-vedic-saffron font-bold">{review.service}</span>
                  </div>
                </div>
                <div className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
