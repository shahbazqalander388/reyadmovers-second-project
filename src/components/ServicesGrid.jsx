import React from 'react';
import { Home, Shield, Building2, Wrench, Package, MapPin, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
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
    <section id="services" className="py-20 sm:py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Our Core Relocation Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complete Moving & Packing Services in Riyadh
          </h2>
          <p className="font-arabic text-xl text-emerald-400 font-semibold">
            خدمات نقل وتغليف العفش الشاملة في الرياض
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From single-bedroom apartments to multi-story luxury villas and commercial corporate offices, we provide fully-equipped moving solutions with master carpenters and heavy-duty packing supplies.
          </p>
        </div>

        {/* Services 6-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComp = iconMap[service.icon] || Home;
            const waInquiryUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hello Riyadh Movers, I am interested in your "${service.title}" service. Please send me a quote.`
            )}`;

            return (
              <article
                key={service.id}
                className="group flex flex-col bg-slate-900 rounded-2xl border border-slate-800 hover:border-emerald-500/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300"
              >
                {/* Card Top: Icon & Category Badge */}
                <div className="p-6 pb-2 flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    {service.badge}
                  </span>
                </div>

                {/* Body Content */}
                <div className="px-6 pb-6 pt-2 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-arabic font-semibold text-emerald-400/90 -mt-1">
                      {service.arabicTitle}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2">
                    <a
                      href={waInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 hover:border-emerald-500 transition-all duration-200 group-hover:bg-emerald-500 active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Book on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
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
