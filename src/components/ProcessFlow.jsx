import React from 'react';
import { MessageSquare, Wrench, Truck, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';

const stepIcons = [MessageSquare, Wrench, Truck, CheckCircle2];

export default function ProcessFlow() {
  return (
    <section id="process" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            Simple 4-Step Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How We Move You Safely Across Riyadh
          </h2>
          <p className="font-arabic text-xl text-emerald-400 font-semibold">
            خطوات نقل العفش بكل سهولة وأمان
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From your very first message to the final tightened screw in your new home, our systematic process guarantees zero hassle and complete peace of mind.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Truck;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-arabic font-semibold text-emerald-400/90">
                    {step.arabicTitle}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
