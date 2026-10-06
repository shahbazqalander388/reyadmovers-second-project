import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Sparkles, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Phone,
  Maximize2
} from 'lucide-react';
import { GALLERY_IMAGES, BUSINESS_INFO } from '../data/siteData';

const CATEGORIES = [
  { id: 'all', label: 'All Projects', arLabel: 'الكل' },
  { id: 'wrapping', label: 'Furniture Packing', arLabel: 'تغليف الأثاث' },
  { id: 'sofas', label: 'Sofas & Majlis', arLabel: 'الكنب والمجالس' },
  { id: 'fragile', label: 'Fragile & Kitchen', arLabel: 'الزجاج والمطبخ' },
  { id: 'carpentry', label: 'Carpentry (Najjar)', arLabel: 'فك وتركيب نجار' },
  { id: 'villa', label: 'Villa Relocation', arLabel: 'نقل الفلل' },
];

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [activeImageIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredImages]);

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  const currentLightboxImage = activeImageIndex !== null ? filteredImages[activeImageIndex] : null;

  return (
    <section id="gallery" className="py-12 sm:py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
            <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>100% Real Relocation Photos • صور حية من مواقع العمل</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Work in Riyadh
            <span className="block mt-1 font-arabic text-xl sm:text-3xl text-emerald-400 font-bold">
              معرض أعمالنا الحقيقية
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Real photos of our professional packing, dismantling, and moving work across Riyadh.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveImageIndex(null);
                }}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1 sm:gap-1.5 ${
                  isActive
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] font-arabic ${isActive ? 'text-emerald-100' : 'text-slate-400'}`}>
                  ({cat.arLabel})
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - Large, Highly Visible Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredImages.map((img, index) => {
            const waInquiryUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hello Riyadh Movers Services, I saw this photo on your website: "${img.title}". I would like a quote for a similar moving service.`
            )}`;

            return (
              <div
                key={img.id}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col"
              >
                {/* Large Prominent Image Container */}
                <div 
                  className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    onError={(e) => {
                      if (e.target.src !== img.cloudinaryUrl) {
                        e.target.src = img.cloudinaryUrl;
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      <span>{img.badge}</span>
                    </span>
                  </div>

                  {/* Arabic Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-arabic font-semibold bg-emerald-500/90 text-white shadow-md">
                      {img.arabicBadge}
                    </span>
                  </div>

                  {/* Quick Expand Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/95 text-white flex items-center justify-center shadow-xl shadow-emerald-500/50 backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Clean, Shortened Card Information */}
                <div className="p-4 sm:p-5 flex flex-col justify-between space-y-3 bg-slate-900">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                        {img.title}
                      </h3>
                      <span className="font-arabic text-xs font-bold text-emerald-400 shrink-0">
                        {img.arabicTitle}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 truncate">
                      {img.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2">
                    <button
                      onClick={() => setActiveImageIndex(index)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span>View Full Size</span>
                    </button>

                    <a
                      href={waInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold shadow-md shadow-emerald-500/20 transition-all shrink-0"
                      title="Ask on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Guarantee Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-emerald-500/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Quality Guarantee</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Ready for Safe & Scratch-Free Moving?
              </h3>
              <p className="font-arabic text-xs sm:text-sm text-emerald-300">
                جاهزون لنقل عفشك بنفس هذا المستوى من الأمان والدقة والاحترافية
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% damage-free packing guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Certified master carpenters (Najjar)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Closed Dyna trucks for clean transit</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 active:scale-98 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Background Scroll Disabled */}
      {currentLightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveImageIndex(null)}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3 sm:p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {currentLightboxImage.badge}
                </span>
                <span className="text-xs text-slate-400">
                  {activeImageIndex + 1} / {filteredImages.length}
                </span>
              </div>

              <button
                onClick={() => setActiveImageIndex(null)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Large High-Resolution Image */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[250px] sm:min-h-[460px] overflow-hidden">
              <img
                src={currentLightboxImage.src}
                alt={currentLightboxImage.title}
                onError={(e) => {
                  if (e.target.src !== currentLightboxImage.cloudinaryUrl) {
                    e.target.src = currentLightboxImage.cloudinaryUrl;
                  }
                }}
                className="max-h-[58vh] sm:max-h-[68vh] w-auto max-w-full object-contain mx-auto select-none"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-emerald-500 text-white transition-all shadow-lg"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-emerald-500 text-white transition-all shadow-lg"
                title="Next (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer: Short Caption & WhatsApp Button */}
            <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {currentLightboxImage.title}
                  </h4>
                  <span className="font-arabic text-xs text-emerald-400 font-semibold">
                    ({currentLightboxImage.arabicTitle})
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {currentLightboxImage.description}
                </p>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hello Riyadh Movers Services, I am looking at this photo on your website: "${currentLightboxImage.title}". Can you give me a quote for similar moving/packing?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-500/20 transition-all shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Quote for This Service</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
