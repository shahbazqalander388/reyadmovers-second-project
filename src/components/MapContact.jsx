import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function MapContact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Find Us & Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Connect with Riyadh Movers & Experts
          </h2>
          <p className="font-arabic text-xl text-emerald-400 font-semibold">
            تواصل معنا وموقعنا في الرياض
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Reach our dispatch center immediately by phone or WhatsApp for immediate truck dispatch anywhere in Riyadh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center justify-between pb-3 border-b border-slate-800">
                <span>Direct Contact Channels</span>
                <span className="text-xs font-normal text-emerald-400">Open 24/7</span>
              </h3>

              {/* Phone Card */}
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 hover:border-emerald-500/60 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                    Phone Call (اتصال مباشر)
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {BUSINESS_INFO.phone}
                  </span>
                  <span className="text-[11px] text-slate-400 block font-arabic">
                    اضغط للاتصال الفوري والتحدث مع المشرف
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 transition-colors shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 uppercase tracking-wider font-semibold block">
                    WhatsApp Chat (محادثة واتساب)
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {BUSINESS_INFO.phone}
                  </span>
                  <span className="text-[11px] text-slate-400 block font-arabic">
                    أرسل صور العفش واحصل على تسعير فوري
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={BUSINESS_INFO.emailHref}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 hover:border-emerald-500/60 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                    Email Inquiries (البريد الإلكتروني)
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors truncate block">
                    {BUSINESS_INFO.email}
                  </span>
                  <span className="text-[11px] text-slate-400 block font-arabic">
                    للعروض الرسمية ونقل الشركات
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
                <div className="w-11 h-11 rounded-xl bg-rose-500/15 flex items-center justify-center text-rose-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                    Riyadh Dispatch Station
                  </span>
                  <span className="text-sm font-bold text-white block">
                    {BUSINESS_INFO.address}
                  </span>
                  <span className="text-[11px] text-slate-400 block font-arabic">
                    {BUSINESS_INFO.arabicAddress} • إحداثيات (24.7480559, 46.7766306)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map Iframe Container */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-4 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>Riyadh Service Hub (24.7480559, 46.7766306)</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Google Maps Iframe */}
            <div className="w-full flex-1 min-h-[380px] bg-slate-800 relative">
              <iframe
                title="Riyadh Movers and Packers Google Maps Location"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Working Hours: 24/7 Service Available</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
              >
                <span>Get Directions (الاتجاهات عبر الخريطة)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
