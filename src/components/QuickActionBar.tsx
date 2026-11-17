import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { PANDIT_CONTACT } from '../data/servicesData';

interface QuickActionBarProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({ lang, onOpenBooking }) => {
  return (
    <>
      {/* Mobile Sticky Bottom Floating Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-200/80 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] px-3 py-2.5 sm:hidden flex items-center justify-between gap-2">
        {/* Call Button */}
        <a
          href={`tel:+91${PANDIT_CONTACT.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-vedic-maroon text-white text-center shadow active:scale-95 transition"
        >
          <Phone className="w-4 h-4 text-yellow-300" />
          <span className="text-[11px] font-bold mt-0.5">
            {lang === 'hi' ? 'कॉल करें' : 'Call'}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/91${PANDIT_CONTACT.phone}?text=${encodeURIComponent(
            lang === 'hi'
              ? 'नमस्ते पंडित जी, मुझे दिल्ली NCR में पूजा-पाठ एवं मुहूर्त परामर्श की जानकारी चाहिए।'
              : 'Namaste Pandit Ji, I would like to inquire about booking a puja and checking muhurat in Delhi NCR.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-600 text-white text-center shadow active:scale-95 transition"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[11px] font-bold mt-0.5">
            {lang === 'hi' ? 'WhatsApp' : 'WhatsApp'}
          </span>
        </a>

        {/* Book Puja Button */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.4] flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-vedic-saffron to-vedic-amber text-white font-bold text-xs shadow active:scale-95 transition"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'पूजा बुक करें' : 'Book Puja'}</span>
        </button>
      </div>

      {/* Desktop Floating WhatsApp Pill Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end space-y-3">
        <button
          onClick={onOpenBooking}
          className="group flex items-center space-x-2 px-4 py-2.5 rounded-full bg-vedic-maroon text-yellow-300 hover:text-white font-bold text-xs shadow-xl border border-amber-400/40 hover:scale-105 transition-all"
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>{lang === 'hi' ? 'पूजा व मुहूर्त बुकिंग' : 'Book Puja Online'}</span>
        </button>

        <a
          href={`https://wa.me/91${PANDIT_CONTACT.phone}?text=${encodeURIComponent(
            lang === 'hi'
              ? 'नमस्ते पंडित जी, मुझे दिल्ली NCR में पूजा-पाठ हेतु संपर्क करना है।'
              : 'Namaste Pandit Ji, I would like to consult with you for a ritual ceremony.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-2xl hover:scale-105 transition-all"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span>{lang === 'hi' ? 'WhatsApp पंडित जी' : 'Chat with Pandit Ji'}</span>
        </a>
      </div>
    </>
  );
};

