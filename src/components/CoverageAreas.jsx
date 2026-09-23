import React from 'react';
import { MapPin, Navigation, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function CoverageAreas() {
  const zones = [
    {
      name: "North Riyadh (شمال الرياض)",
      districts: ["Al Nakheel (النخيل)", "Al Yasmin (الياسمين)", "Al Narjis (النرجس)", "Al Sahafa (الصحافة)", "Al Aqiq (العقيق)", "Al Qirawan (القيروان)"]
    },
    {
      name: "Central & Downtown (وسط الرياض)",
      districts: ["Al Olaya (العليا)", "Al Malaz (الملز)", "Al Sulaimaniyah (السليمانية)", "Al Wurud (الورود)", "Al Murabba (المربع)", "Al Muruj (المروج)"]
    },
    {
      name: "East Riyadh (شرق الرياض)",
      districts: ["Al Rawdah (الروضة)", "Al Hamra (الحمراء)", "Al Yarmouk (اليرموك)", "Al Munsiyah (المنسية)", "Ishbiliyah (إشبيلية)", "Al Quds (القدس)"]
    },
    {
      name: "West & South Riyadh (غرب وجنوب الرياض)",
      districts: ["Diplomatic Quarter / DQ (حي السفارات)", "Dhahrat Laban (ظهرة لبن)", "Al Suwaidi (السويدي)", "Shubra (شبرا)", "Al Shifa (الشفاء)", "Badi'ah (البديعة)"]
    }
  ];

  const intercityRoutes = [
    "Riyadh ⇄ Jeddah (الرياض - جدة)",
    "Riyadh ⇄ Dammam & Khobar (الرياض - الدمام والخبر)",
    "Riyadh ⇄ Mecca & Medina (الرياض - مكة المكرمة والمدينة)",
    "Riyadh ⇄ Qassim & Buraidah (الرياض - القصيم وبريدة)",
    "Riyadh ⇄ Tabuk, Hail & Abha (الرياض - تبوك وحائل وأبها)"
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5" />
            Extensive Coverage Across the Capital
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Servicing Every District in Riyadh & Beyond
          </h2>
          <p className="font-arabic text-xl text-emerald-400 font-semibold">
            تغطية شاملة لجميع أحياء الرياض ومدن المملكة
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our closed moving trucks are stationed across northern, central, eastern, and western Riyadh for rapid same-day response within 60 minutes.
          </p>
        </div>

        {/* Riyadh 4-Zone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors space-y-4 shadow-lg"
            >
              <div className="flex items-center gap-2.5 text-white font-bold text-base pb-2 border-b border-slate-800">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{zone.name}</span>
              </div>
              <ul className="space-y-2">
                {zone.districts.map((d, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Inter-city Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Inter-City Highway Cargo Line (نقل بين المدن)
            </span>
            <h3 className="text-xl font-bold text-white">
              Daily Shifting Between Riyadh and All Saudi Provinces
            </h3>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {intercityRoutes.map((route, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs border border-slate-700 font-medium"
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
            className="shrink-0 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 active:scale-95 transition-all text-center"
          >
            Inquire Inter-City Moving
          </a>
        </div>
      </div>
    </section>
  );
}
