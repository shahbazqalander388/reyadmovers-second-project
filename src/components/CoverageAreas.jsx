import React from 'react';
import { MapPin, Navigation, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { RIYADH_LOCATIONS } from '../data/locationsData';

export default function CoverageAreas({ onSelectDistrictSlug }) {
  const zones = [
    {
      name: "North Riyadh (شمال الرياض)",
      slugs: [
        "movers-in-al-nakheel-riyadh",
        "movers-in-al-yasmin-riyadh",
        "movers-in-al-narjis-riyadh",
        "movers-in-al-sahafa-riyadh",
        "movers-in-al-aqiq-riyadh",
        "movers-in-hittin-riyadh",
        "movers-in-al-qirawan-riyadh"
      ]
    },
    {
      name: "Central & Downtown (وسط الرياض)",
      slugs: [
        "movers-in-al-olaya-riyadh",
        "movers-in-al-malaz-riyadh",
        "movers-in-al-sulaimaniyah-riyadh",
        "movers-in-al-wurud-riyadh",
        "movers-in-al-mursalat-riyadh"
      ]
    },
    {
      name: "East Riyadh (شرق الرياض)",
      slugs: [
        "movers-in-al-rawdah-riyadh",
        "movers-in-al-hamra-riyadh",
        "movers-in-al-yarmouk-riyadh"
      ]
    },
    {
      name: "West & South Riyadh (غرب وجنوب الرياض)",
      slugs: [
        "movers-in-diplomatic-quarter-riyadh"
      ],
      extraDistricts: ["Dhahrat Laban (ظهرة لبن)", "Al Suwaidi (السويدي)", "Shubra (شبرا)", "Al Shifa (الشفاء)"]
    }
  ];

  const intercityRoutes = [
    "Riyadh ⇄ Jeddah (الرياض - جدة)",
    "Riyadh ⇄ Dammam & Khobar (الرياض - الدمام والخبر)",
    "Riyadh ⇄ Mecca & Medina (الرياض - مكة المكرمة والمدينة)",
    "Riyadh ⇄ Qassim & Buraidah (الرياض - القصيم وبريدة)",
    "Riyadh ⇄ Tabuk, Hail & Abha (الرياض - تبوك وحائل وأبها)"
  ];

  const handleDistrictClick = (e, slug) => {
    e.preventDefault();
    if (onSelectDistrictSlug) {
      onSelectDistrictSlug(slug);
    } else {
      window.location.hash = `#/${slug}`;
    }
  };

  return (
    <section id="areas" className="py-12 sm:py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5" />
            Extensive Coverage Across the Capital
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Servicing Every District in Riyadh & Beyond
          </h2>
          <p className="font-arabic text-lg sm:text-xl text-emerald-400 font-semibold">
            تغطية شاملة لجميع أحياء الرياض ومدن المملكة
          </p>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Our closed moving trucks are stationed across northern, central, eastern, and western Riyadh for rapid same-day response within 20 to 30 minutes. Click any neighborhood to explore dedicated local pricing and Dyna dispatch details.
          </p>
        </div>

        {/* Riyadh 4-Zone Interactive SEO Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {zones.map((zone, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors space-y-3 sm:space-y-4 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 text-white font-bold text-base pb-2 border-b border-slate-800">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{zone.name}</span>
                </div>
                <ul className="space-y-2 pt-3">
                  {zone.slugs.map((slug) => {
                    const loc = RIYADH_LOCATIONS.find((l) => l.slug === slug);
                    if (!loc) return null;
                    return (
                      <li key={slug}>
                        <a
                          href={`#/${slug}`}
                          onClick={(e) => handleDistrictClick(e, slug)}
                          className="text-xs text-slate-300 hover:text-emerald-400 flex items-center justify-between group py-1 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform"></span>
                            <span>{loc.nameEn} ({loc.nameAr})</span>
                          </span>
                          <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                        </a>
                      </li>
                    );
                  })}
                  {zone.extraDistricts && zone.extraDistricts.map((extra, i) => (
                    <li key={i} className="text-xs text-slate-400 flex items-center gap-2 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                      <span>{extra}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800/80">
                <span className="text-emerald-400 font-semibold">24/7 Service</span> • Padded Enclosed Dyna
              </div>
            </div>
          ))}
        </div>

        {/* Inter-city Banner */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Inter-City Highway Cargo Line (نقل بين المدن)
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Daily Shifting Between Riyadh and All Saudi Provinces
            </h3>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 pt-1">
              {intercityRoutes.map((route, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs border border-slate-700 font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{route}</span>
                </span>
              ))}
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap transition-colors shadow-lg shadow-emerald-500/20 active:scale-95 shrink-0"
          >
            Inquire Intercity Route (تسعير النقل بين المدن)
          </a>
        </div>
      </div>
    </section>
  );
}
