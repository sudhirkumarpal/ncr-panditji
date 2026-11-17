import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, X, Sparkles, ZoomIn } from 'lucide-react';
import { Language } from '../types';

interface RitualDarshanProps {
  lang: Language;
}

export const RitualDarshan: React.FC<RitualDarshanProps> = ({ lang }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<{ src: string; titleHi: string; titleEn: string; descHi: string; descEn: string } | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const galleryImages = [
    {
      src: '/assets/puja-ritual-home.jpg',
      titleHi: 'महा रुद्राभिषेक एवं पुष्प रंगोली अनुष्ठान',
      titleEn: 'Maha Rudrabhishek & Floral Rangoli at Client Residence',
      descHi: 'गृह मंदिर में भगवान शिव का दिव्य श्रृंगार, कमलगट्टे व गुलाब-गेंदे की भव्य रंगोली',
      descEn: 'Divine Shiva Linga consecration with lotus petals and fragrant flower rangoli'
    },
    {
      src: '/assets/floral-rangoli-mandala.jpg',
      titleHi: 'पवित्र पुष्प मंडप एवं फल-प्रसाद अर्पण',
      titleEn: 'Sacred Floral Mandala & Fruit Prasad Offering',
      descHi: 'वैदिक यंत्र रूपी पुष्प रंगोली, ताजे फल, नैवेद्य एवं दीपक प्रज्वलन',
      descEn: 'Top-down aerial view of sacred Vedic flower mandala and fresh fruit offerings'
    },
    {
      src: '/assets/kalash-sthapana.jpg',
      titleHi: 'मंगल कलश स्थापना एवं वरुण पूजन',
      titleEn: 'Mangal Kalash Sthapana & Varuna Pujan',
      descHi: 'नारियल, आम्रपल्लव, पीतांबर एवं ताजा पुष्पमालाओं से सुसज्जित मंगल कलश',
      descEn: 'Traditional brass Kalash, green mango leaves, coconut and fresh marigold'
    },
    {
      src: '/assets/panditji-portrait.jpg',
      titleHi: 'आचार्य पंडित जी - पारंपरिक वेशभूषा',
      titleEn: 'Acharya Pandit Ji in Traditional Attire',
      descHi: 'शुक्ल यजुर्वेद एवं कर्मकांड के ज्ञाता, शांति एवं सौम्यता के प्रतीक',
      descEn: 'Dedicated to upholding Vedic traditions with serenity and dignity'
    }
  ];

  return (
    <section id="darshan" className="py-16 lg:py-24 bg-sandhya-temple text-white relative overflow-hidden">
      
      {/* Devotional Glowing Lights & Shimmer Background */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-400/15 border border-amber-400/40 text-yellow-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-inner">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-diya-flicker" />
            <span>
              {lang === 'hi' ? 'सजीव दर्शन एवं दीर्घा' : 'Ritual Darshan & Sacred Media'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-200 font-serif tracking-tight drop-shadow-md">
            {lang === 'hi' ? 'पवित्र अनुष्ठान एवं पूजन दर्शन' : 'Glimpses of Sacred Ceremonies'}
          </h2>

          <p className="text-amber-100/80 text-base sm:text-lg">
            {lang === 'hi'
              ? 'देखें हमारे द्वारा दिल्ली NCR के विभिन्न घरों व प्रतिष्ठानों में विधि-विधान से संपन्न किए गए वास्तविक पूजा आयोजनों की पावन झलकियाँ।'
              : 'Witness actual sacred ceremonies, elaborate floral rangolis, and authentic Vedic havans conducted in homes across Delhi NCR.'}
          </p>
        </div>

        {/* Video Feature Container with Glowing Golden Temple Border */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/80 bg-black aspect-video group vedic-halo">
              <video
                ref={videoRef}
                src="/assets/puja-video-ritual.mp4"
                className="w-full h-full object-cover"
                playsInline
                loop
                muted={isMuted}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
                poster="/assets/puja-ritual-home.jpg"
              />

              {/* Play Overlay Button if Paused */}
              {!isPlaying && (
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer group-hover:bg-black/30 transition-all"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-vedic-saffron to-amber-400 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform border-2 border-yellow-200">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-white fill-white" />
                  </div>
                  <span className="text-yellow-200 font-serif font-bold text-sm sm:text-base mt-3 drop-shadow flex items-center space-x-1.5">
                    <span>🪔</span>
                    <span>{lang === 'hi' ? 'सजीव पूजा वीडियो देखें' : 'Watch Puja Ritual Video'}</span>
                  </span>
                </div>
              )}

              {/* Video Bottom Floating Controls */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-full hover:bg-white/20 transition text-yellow-300"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full hover:bg-white/20 transition"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-emerald-400" />}
                  </button>

                  <span className="text-xs text-amber-200/90 font-medium hidden sm:inline">
                    {lang === 'hi' ? 'वैदिक मंत्रोच्चारण व हवन दर्शन' : 'Live Vedic Chanting & Havan'}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleFullscreen}
                    className="p-1.5 rounded-full hover:bg-white/20 transition text-stone-300 hover:text-white"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Video Devotional Context Text */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-yellow-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/40">
              <span className="animate-diya-flicker">🪔</span>
              <span>{lang === 'hi' ? 'वास्तविक अनुष्ठान झलक' : 'Actual Ceremony In Action'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-100 font-serif leading-tight">
              {lang === 'hi' ? (
                <>शुद्ध भाव, श्रद्धा एवं <br /><span className="text-yellow-400">अलौकिक वैदिक वातावरण</span></>
              ) : (
                <>Pristine Chants & <br /><span className="text-yellow-400">Transcendent Spiritual Aura</span></>
              )}
            </h3>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {lang === 'hi'
                ? 'हमारे द्वारा आयोजित प्रत्येक पूजा में पारंपरिक पुष्प श्रृंगार, वेद मंत्रों की शुद्ध गूंज और सुव्यवस्थित हवन कुंड से आपके घर का कोना-कोना सकारात्मक ऊर्जा से भर उठता है।'
                : 'Experience the sublime resonance of Vedic chants and exquisite floral arrangements that fill every corner of your residence with serenity and prosperity.'}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-stone-200">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0 animate-diya-flicker"></span>
                <span className="font-semibold text-amber-200">
                  {lang === 'hi' ? 'विशिष्ट पुष्प रंगोली एवं शिवलिंग स्थापना' : 'Special Flower Rangoli & Shiva Linga Decor'}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-stone-200">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0 animate-diya-flicker"></span>
                <span className="font-semibold text-amber-200">
                  {lang === 'hi' ? 'यजुर्वेदीय नमकम-चमकम पाठ' : 'Yajurveda Namakam-Chamakam Recital'}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-stone-200">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0 animate-diya-flicker"></span>
                <span className="font-semibold text-amber-200">
                  {lang === 'hi' ? 'शांति पाठ एवं सम्पूर्ण परिवार हेतु आशीर्वाद' : 'Shanti Path & Family Consecration'}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Photo Gallery Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-3">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-yellow-300 flex items-center space-x-2">
              <span>🪔</span>
              <span>{lang === 'hi' ? 'चित्र दीर्घा (Photo Gallery)' : 'Photo Gallery'}</span>
            </h3>
            <span className="text-xs text-amber-200/70">
              {lang === 'hi' ? 'बड़ा देखने के लिए फोटो पर क्लिक करें' : 'Click to enlarge any photo'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="group relative rounded-2xl overflow-hidden bg-stone-900 border-2 border-amber-400/40 shadow-lg hover:border-amber-300 hover:shadow-gold-glow cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 aspect-[4/5]"
              >
                <img
                  src={img.src}
                  alt={lang === 'hi' ? img.titleHi : img.titleEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-85 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <h4 className="text-sm font-bold font-serif text-yellow-300 line-clamp-1 drop-shadow">
                    {lang === 'hi' ? img.titleHi : img.titleEn}
                  </h4>
                  <p className="text-[11px] text-stone-200 line-clamp-2 mt-1">
                    {lang === 'hi' ? img.descHi : img.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden border-2 border-amber-400 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedImage.src}
                alt={lang === 'hi' ? selectedImage.titleHi : selectedImage.titleEn}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="p-5 bg-gradient-to-r from-vedic-maroonDark to-stone-900 text-white border-t border-amber-400/40">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-yellow-300">
                {lang === 'hi' ? selectedImage.titleHi : selectedImage.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                {lang === 'hi' ? selectedImage.descHi : selectedImage.descEn}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
