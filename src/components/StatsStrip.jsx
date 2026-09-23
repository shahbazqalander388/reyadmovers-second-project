import React from 'react';
import { Truck, Award, Star, Users } from 'lucide-react';
import { STATS } from '../data/siteData';

const iconMap = {
  Truck: Truck,
  Award: Award,
  Star: Star,
  Users: Users
};

export default function StatsStrip() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Truck;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-300">
                    {item.label}
                  </div>
                  <div className="text-[11px] font-arabic text-slate-400">
                    {item.arabicLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
