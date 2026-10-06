import React from 'react';
import { Coins, Clock, UserCheck, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/siteData';

const iconMap = {
  Coins: Coins,
  Clock: Clock,
  UserCheck: UserCheck,
  ShieldCheck: ShieldCheck,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-12 sm:py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Unmatched Reliability in Riyadh
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Why Choose Riyadh Movers Services?
          </h2>
          <p className="font-arabic text-lg sm:text-xl text-emerald-400 font-semibold">
            لماذا نحن خيارك الأول لنقل العفش في الرياض؟
          </p>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            We eliminate the stress of shifting with professional care, transparent pricing, insured protection, and on-time completion across the Kingdom.
          </p>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-arabic font-semibold text-emerald-400/90">
                    {item.arabicTitle}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <Check className="w-4 h-4" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
