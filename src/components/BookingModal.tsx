import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, CheckCircle2, User, MapPin, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language, BookingFormData } from '../types';
import { SERVICES_DATA, PANDIT_CONTACT } from '../data/servicesData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preSelectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  preSelectedServiceId
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    serviceId: preSelectedServiceId || 'griha-pravesh',
    city: 'Noida',
    address: '',
    preferredDate: '',
    preferredTime: 'morning',
    samagriNeeded: true,
    notes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preSelectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: preSelectedServiceId }));
    }
  }, [preSelectedServiceId]);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find(s => s.id === formData.serviceId) || SERVICES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger auspicious celebratory flower confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#EB5C2B', '#F3931B', '#F59E0B', '#10B981', '#E11D48']
      });
    } catch (_) {}

    setSubmitted(true);

    const timeMap: Record<string, string> = {
      morning: lang === 'hi' ? 'प्रातःकाल (6 AM - 10 AM)' : 'Morning (6 AM - 10 AM)',
      afternoon: lang === 'hi' ? 'दोपहर (11 AM - 3 PM)' : 'Afternoon (11 AM - 3 PM)',
      evening: lang === 'hi' ? 'सायंकाल (4 PM - 8 PM)' : 'Evening (4 PM - 8 PM)',
      muhurat: lang === 'hi' ? 'पंडित जी द्वारा शुभ मुहूर्त अनुसार' : 'As per Auspicious Muhurat by Pandit Ji'
    };

    const serviceTitle = lang === 'hi' ? currentService.titleHi : currentService.titleEn;
    const samagriText = formData.samagriNeeded 
      ? (lang === 'hi' ? 'हाँ (पंडित जी पूरी सामग्री साथ लाएं)' : 'Yes (Pandit Ji to bring full kit)')
      : (lang === 'hi' ? 'नहीं (यजमान स्वयं व्यवस्था करेंगे)' : 'No (Family will arrange)');

    const messageText = 
`🪔 *NCR Pandit Ji - नई पूजा बुकिंग अनुरोध* 🪔
----------------------------------------
👤 *नाम (Name):* ${formData.name || 'यजमान'}
📞 *फोन (Phone):* ${formData.phone || 'उपलब्ध नहीं'}
🕉️ *पूजा सेवा (Service):* ${serviceTitle}
📍 *शहर/क्षेत्र (Location):* ${formData.city}${formData.address ? ` (${formData.address})` : ''}
📅 *इच्छित दिनांक (Date):* ${formData.preferredDate || 'मुहूर्त अनुसार'}
⏰ *इच्छित समय (Time):* ${timeMap[formData.preferredTime] || formData.preferredTime}
📦 *सामग्री व्यवस्था (Samagri):* ${samagriText}
${formData.notes ? `📝 *टिप्पणी/गोत्र (Notes):* ${formData.notes}\n` : ''}----------------------------------------
नमस्ते पंडित जी, कृपया शुभ मुहूर्त एवं उपलब्धता सुनिश्चित करें।`;

    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/91${PANDIT_CONTACT.phone}?text=${encoded}`;

    // Open WhatsApp after short celebration pause
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border-2 border-amber-300 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-vedic-maroon via-vedic-saffron to-vedic-maroon p-5 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl font-serif text-yellow-300">ॐ</span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-serif">
                {lang === 'hi' ? 'पूजा व मुहूर्त बुकिंग' : 'Book Sacred Puja Ceremony'}
              </h3>
              <p className="text-xs text-stone-200">
                {lang === 'hi' ? 'दिल्ली NCR में तुरंत उपलब्धता एवं परामर्श' : 'Immediate availability & guidance across Delhi NCR'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-2xl font-bold font-serif text-vedic-maroon">
              {lang === 'hi' ? '॥ शुभकामनाएँ एवं साधुवाद ॥' : 'Booking Request Initiated!'}
            </h4>

            <p className="text-stone-600 text-sm max-w-md mx-auto">
              {lang === 'hi'
                ? 'आपका पूजा विवरण WhatsApp पर प्रेषित किया जा रहा है। पंडित जी शीघ्र ही आपसे संपर्क कर शुभ मुहूर्त एवं व्यवस्था की पुष्टि करेंगे।'
                : 'Your booking details are opening in WhatsApp. Acharya Pandit Ji will shortly confirm the auspicious Muhurat.'}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:+91${PANDIT_CONTACT.phone}`}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-vedic-maroon text-white font-semibold text-sm shadow"
              >
                <Phone className="w-4 h-4 text-yellow-300" />
                <span>{lang === 'hi' ? 'सीधे कॉल करें: 9625057815' : 'Call Directly: 9625057815'}</span>
              </a>

              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm transition"
              >
                {lang === 'hi' ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            
            {/* Puja Selection */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                {lang === 'hi' ? 'पूजा सेवा का चयन करें *' : 'Select Puja Ritual *'}
              </label>
              <select
                value={formData.serviceId}
                onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-vedic-saffron focus:ring-2 focus:ring-vedic-saffron/20 text-sm font-medium outline-none bg-stone-50"
                required
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.id}>
                    {lang === 'hi' ? s.titleHi : s.titleEn} ({lang === 'hi' ? s.durationHi : s.durationEn})
                  </option>
                ))}
              </select>
            </div>

            {/* Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {lang === 'hi' ? 'आपका नाम (Yajman Name) *' : 'Your Name *'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'hi' ? 'उदा: राजेश शर्मा' : 'e.g. Rajesh Sharma'}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-vedic-saffron focus:ring-2 focus:ring-vedic-saffron/20 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {lang === 'hi' ? 'मोबाइल नंबर (WhatsApp No.) *' : 'Phone / WhatsApp *'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9876543210"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-vedic-saffron focus:ring-2 focus:ring-vedic-saffron/20 text-sm outline-none"
                  />
                </div>
              </div>
            </div>

            {/* City & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {lang === 'hi' ? 'शहर / क्षेत्र (NCR Location) *' : 'City / NCR Area *'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-vedic-saffron focus:ring-2 focus:ring-vedic-saffron/20 text-sm outline-none bg-white font-medium"
                  >
                    <option value="Noida">Noida (नोएडा)</option>
                    <option value="Greater Noida / West">Greater Noida West / Gaur City (ग्रेटर नोएडा)</option>
                    <option value="Ghaziabad (Indirapuram/Vaishali)">Ghaziabad / Indirapuram (गाज़ियाबाद)</option>
                    <option value="Delhi (North/South/West/East)">Delhi (दिल्ली)</option>
                    <option value="Gurugram">Gurugram (गुरुग्राम)</option>
                    <option value="Faridabad">Faridabad (फ़रीदाबाद)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {lang === 'hi' ? 'सोसाइटी / सेक्टर (Sector/Flat)' : 'Sector / Society / Flat'}
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder={lang === 'hi' ? 'उदा: सेक्टर 75, फ्लैट 402' : 'e.g. Sector 75, Flat 402'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-vedic-saffron focus:ring-2 focus:ring-vedic-saffron/20 text-sm outline-none"
                />
              </div>
            </div>

            {/* Date and Time Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {lang === 'hi' ? 'इच्छित दिनांक (Preferred Date)' : 'Preferred Date'}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-vedic-saffron focus:ring-2 focus:ring-vedic-saffron/20 text-sm outline-none font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {lang === 'hi' ? 'समय वरीयता (Preferred Slot)' : 'Time Slot Preference'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-vedic-saffron focus:ring-2 focus:ring-vedic-saffron/20 text-sm outline-none bg-white font-medium"
                  >
                    <option value="muhurat">{lang === 'hi' ? 'पंडित जी से शुभ मुहूर्त विचार' : 'As per Auspicious Muhurat'}</option>
                    <option value="morning">{lang === 'hi' ? 'प्रातःकाल (6 AM - 10 AM)' : 'Morning (6 AM - 10 AM)'}</option>
                    <option value="afternoon">{lang === 'hi' ? 'दोपहर (11 AM - 3 PM)' : 'Afternoon (11 AM - 3 PM)'}</option>
                    <option value="evening">{lang === 'hi' ? 'सायंकाल (4 PM - 8 PM)' : 'Evening (4 PM - 8 PM)'}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Samagri Arrangement Checkbox */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                id="samagri-chk"
                checked={formData.samagriNeeded}
                onChange={(e) => setFormData({ ...formData, samagriNeeded: e.target.checked })}
                className="mt-1 w-4 h-4 text-vedic-saffron rounded border-stone-300 focus:ring-vedic-saffron"
              />
              <label htmlFor="samagri-chk" className="text-xs sm:text-sm text-stone-800 cursor-pointer">
                <span className="font-bold text-vedic-maroon block">
                  {lang === 'hi' ? '📦 संपूर्ण पूजा सामग्री पंडित जी द्वारा लाई जाए' : '📦 Include complete puja samagri kit'}
                </span>
                <span className="text-stone-600 block text-xs mt-0.5">
                  {lang === 'hi'
                    ? 'हवन सामग्री, समिधा, शुद्ध घी, रोली, अक्षत, कलावा, धूप, कपूर एवं पुष्प की व्यवस्था'
                    : 'Hawan samagri, herbs, pure ghee, roli, kalawa, dhoop & fresh items provided'}
                </span>
              </label>
            </div>

            {/* Special Notes / Gotra */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                {lang === 'hi' ? 'कोई विशेष संकल्प / गोत्र / टिप्पणी (Optional)' : 'Special Request / Gotra (Optional)'}
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={lang === 'hi' ? 'उदा: कश्यप गोत्र, फ्लैट में हवन हेतु धुआं-रहित व्यवस्था चाहिए' : 'e.g. Low-smoke hawan required, gotra, etc.'}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:border-vedic-saffron focus:ring-2 focus:ring-vedic-saffron/20 text-xs sm:text-sm outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>
                  {lang === 'hi' ? 'WhatsApp पर बुकिंग अनुरोध भेजें' : 'Send Booking Request via WhatsApp'}
                </span>
              </button>
            </div>

            <div className="text-center pt-1 text-[11px] text-stone-500">
              {lang === 'hi'
                ? '⚡ क्लिक करने पर सीधे पंडित जी से WhatsApp पर चैट खुलेगी।'
                : '⚡ Opens direct WhatsApp message with Pandit Ji instantly.'}
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
