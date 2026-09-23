import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function FloatingActions() {
  return (
    <>
      {/* Floating Call Button - Bottom Left */}
      <div className="fixed bottom-5 left-4 sm:left-6 z-50">
        <a
          href={BUSINESS_INFO.phoneHref}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 border-2 border-emerald-500 text-emerald-400 shadow-2xl shadow-slate-950/80 hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label="Direct Phone Call"
          title="Direct Phone Call: +966 56 469 4614"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          {/* Tooltip on hover */}
          <span className="hidden md:group-hover:inline-block absolute left-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-lg border border-slate-700 pointer-events-none transition-all">
            Call +966 56 469 4614
          </span>
        </a>
      </div>

      {/* Floating WhatsApp Button - Bottom Right */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-50">
        <a
          href={BUSINESS_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-200 animate-pulse-ring"
          aria-label="Chat on WhatsApp"
          title="Chat with Riyadh Movers on WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-current" />
          {/* Tooltip on hover */}
          <span className="hidden md:group-hover:inline-block absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-emerald-400 text-xs font-semibold whitespace-nowrap shadow-lg border border-slate-700 pointer-events-none transition-all">
            Chat on WhatsApp (تسعير فوري)
          </span>
        </a>
      </div>
    </>
  );
}
