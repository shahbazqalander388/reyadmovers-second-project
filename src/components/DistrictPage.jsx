import React, { useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  ArrowLeft, 
  CheckCircle2, 
  Compass, 
  Building2, 
  ChevronRight,
  HelpCircle,
  Wrench,
  Package
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/siteData';
import { getNearbyLocations } from '../data/locationsData';

export default function DistrictPage({ location, onNavigateHome, onSelectLocation }) {
  const nearbyLocations = getNearbyLocations(location.nearbySlugs);

  // Update dynamic document title and meta description when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const originalTitle = document.title;
    document.title = `Movers in ${location.nameEn}, Riyadh | ${location.nameAr} | Riyadh Movers Services 24/7`;

    return () => {
      document.title = originalTitle;
    };
  }, [location]);

  const customWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Riyadh Movers Services, I need a moving quotation for ${location.nameEn} (${location.nameAr}), Riyadh.`
  )}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-6 pb-20">
      {/* Breadcrumb Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 py-3 px-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <button 
            onClick={onNavigateHome}
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-slate-400">Riyadh Districts</span>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-emerald-400 font-semibold">{location.nameEn} ({location.nameAr})</span>
        </nav>
      </div>

      {/* Main District Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-10 lg:p-12 shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl space-y-4 sm:space-y-6">
            {/* Dispatch Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold">
              <Clock className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Rapid Dyna Dispatch: ~{location.dispatchTime} to {location.nameEn}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">{location.zone} ({location.zoneAr})</span>
            </div>

            {/* Dynamic H1 */}
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Professional Movers & Packers in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">{location.nameEn}</span>, Riyadh
            </h1>

            {/* Arabic Localized Subtitle */}
            <p className="font-arabic text-xl sm:text-2xl text-emerald-300 font-bold leading-snug">
              أفضل شركة نقل عفش وأثاث بحي {location.nameAr} بالرياض | دينا مجهزة ونجار فك وتركيب
            </p>

            <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
              Looking for reliable, insured movers in <strong>{location.nameEn}</strong>? 
              Riyadh Movers Services delivers top-rated residential, villa, and corporate moving solutions. 
              Our fleet of enclosed Dyna trucks, certified carpenters (Najjar), and expert packers ensure 
              a 100% scratch-free move with same-day booking availability.
            </p>

            {/* Dual CTAs: WhatsApp with Pre-filled Neighborhood & Direct Call */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Get Instant Quote for {location.nameEn}</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base transition-all border border-slate-700 active:scale-95"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Dispatch: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Quick Assurance Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Damage-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Master Najjar Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-layer Bubble Wrap</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Fast Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local Authentic Landmarks & Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Neighborhood Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Why Choose Us in {location.nameEn}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Tailored Moving Solutions for {location.nameEn} Residents & Businesses
              </h2>
              <ul className="space-y-3 pt-2">
                {location.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Services Breakdown in this Area */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <Truck className="w-4 h-4" />
                Full Services Available in {location.nameEn}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Complete End-to-End Relocation Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {SERVICES.map((s) => (
                  <div key={s.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
                    <h3 className="font-bold text-white text-sm flex items-center justify-between">
                      <span>{s.title}</span>
                      <span className="font-arabic text-xs text-emerald-400 font-medium">{s.arabicTitle}</span>
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Local Authenticity: Landmarks & District Geo Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                District Authenticity & Landmarks
              </div>
              <h3 className="text-lg font-bold text-white">
                Key Landmarks & Access Points in {location.nameEn}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our drivers are intimately familiar with every avenue, residential subdivision, and bypass around:
              </p>
              <ul className="space-y-2.5 pt-1">
                {location.landmarks.map((l, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Neighborhood Dispatch Card */}
            <div className="bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm">
                <MapPin className="w-4 h-4" />
                <span>Direct Local Dispatch Desk</span>
              </div>
              <div className="text-xs text-slate-300 space-y-1.5">
                <p><strong>District:</strong> {location.nameEn} ({location.nameAr})</p>
                <p><strong>Zone:</strong> {location.zone} - Riyadh Province</p>
                <p><strong>Postal Code:</strong> {location.postalCode}</p>
                <p><strong>Average Arrival Time:</strong> {location.dispatchTime}</p>
                <p><strong>Truck Availability:</strong> 24/7 Closed Enclosed Dynas</p>
              </div>
              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book Dyna for {location.nameEn}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Localized District FAQs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Local FAQs
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Frequently Asked Questions About Moving in {location.nameEn}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {location.faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <h3 className="font-bold text-white text-sm sm:text-base flex items-start gap-2">
                  <span className="text-emerald-400 font-black">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="font-arabic text-xs sm:text-sm text-emerald-400 font-medium text-right">
                  {faq.arQ}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {faq.a}
                </p>
                <p className="font-arabic text-xs sm:text-sm text-slate-400 leading-relaxed text-right pt-1">
                  {faq.arA}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programmatic Cross-Linking Grid: Nearby Locations */}
      {nearbyLocations.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Nearby Serviced Neighborhoods to {location.nameEn}</span>
              </h3>
              <button 
                onClick={onNavigateHome}
                className="text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 font-medium cursor-pointer"
              >
                View All Districts →
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearbyLocations.map((nearby) => (
                <button
                  key={nearby.slug}
                  onClick={() => onSelectLocation(nearby)}
                  className="text-left p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 transition-all space-y-2 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-emerald-400">
                      {nearby.zone}
                    </span>
                    <span className="text-xs text-slate-400 group-hover:text-emerald-400 transition-colors">
                      ~{nearby.dispatchTime}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Movers in {nearby.nameEn}
                  </h4>
                  <p className="font-arabic text-xs text-slate-400">
                    نقل عفش {nearby.nameAr}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Back to Home CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors cursor-pointer text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Riyadh Movers Homepage & Full Pricing Calculator</span>
        </button>
      </div>
    </div>
  );
}
