import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function TopBar() {
  return (
    <div className="hidden md:block bg-slate-950 text-slate-300 text-xs sm:text-sm border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-between gap-y-2">
          {/* Left: Contact details */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium"
              title="Direct Phone Call"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={BUSINESS_INFO.emailHref}
              className="hidden md:flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              title="Email Us"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.email}</span>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              title="Google Maps Location in Riyadh"
            >
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden sm:inline">Riyadh, Saudi Arabia</span>
              <span className="sm:hidden">Riyadh (الرياض)</span>
            </a>
          </div>

          {/* Right: Working hours & direct chat badge */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 Available across Riyadh (خدمة 24 ساعة)</span>
            </div>

            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-emerald-400 hover:underline font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
