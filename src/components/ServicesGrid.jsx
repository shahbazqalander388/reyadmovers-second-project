import React from 'react';
import { Home, Shield, Building2, Wrench, Package, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/siteData';

const iconMap = {
  Home: Home,
  Shield: Shield,
  Building2: Building2,
  Wrench: Wrench,
  Package: Package,
  MapPin: MapPin,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-12 sm:py-18 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Our Relocation Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Moving & Packing in Riyadh
          </h2>
          <p className="font-arabic text-lg sm:text-xl text-emerald-400 font-semibold">
            خدمات نقل وتغليف العفش بالرياض
          </p>
        </div>

        {/* Services 6-Grid - Large Images & Compact Minimal Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service) => {
            const IconComp = iconMap[service.icon] || Home;
            const waInquiryUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hello Riyadh Movers Services, I am interested in your "${service.title}" service. Please send me a quote.`
            )}`;

            return (
              <article
                key={service.id}
                className="group flex flex-col bg-slate-900 rounded-2xl border border-slate-800 hover:border-emerald-500/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
              >
                {/* Large Prominent Image Banner (h-64 to h-72) */}
                {service.image ? (
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30 shadow-md">
                      {service.badge}
                    </span>

                    {/* Floating Service Icon */}
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                ) : (
                  <div className="p-4 pb-2 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Ultra-Compact Bottom Text Section */}
                <div className="p-4 sm:p-4.5 flex flex-col justify-between space-y-2.5 bg-slate-900 flex-1">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                        {service.title}
                      </h3>
                      <span className="font-arabic text-xs font-bold text-emerald-400 shrink-0">
                        {service.arabicTitle}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 truncate">
                      {service.description}
                    </p>
                  </div>

                  {/* Quick Action Button */}
                  <div className="pt-1">
                    <a
                      href={waInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white font-semibold text-xs border border-slate-700 hover:border-emerald-500 transition-all duration-200 group-hover:bg-emerald-500 active:scale-98 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Book on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
