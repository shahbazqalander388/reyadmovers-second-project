import React from 'react';
import { Truck, Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-12 sm:pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          {/* Brand & Summary (2 columns) */}
          <div className="lg:col-span-2 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 border border-slate-700/60 shadow-md">
                <img
                  src={BUSINESS_INFO.logo}
                  alt="Riyadh Movers Services"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    if (e.target.src !== BUSINESS_INFO.cloudinaryLogo) {
                      e.target.src = BUSINESS_INFO.cloudinaryLogo;
                    }
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black text-white tracking-tight">
                  Riyadh Movers <span className="text-emerald-400">Services</span>
                </span>
                <span className="text-xs font-arabic text-emerald-400">
                  خدمات نقل العفش والتغليف بالرياض
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Riyadh Movers Services is Saudi Arabia's premier residential, villa, and commercial moving specialist. Delivering 100% damage-free packing, certified carpentry assembly, and swift Dyna transport 24/7 across Riyadh and all KSA provinces.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href={BUSINESS_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 text-slate-300 flex items-center justify-center transition-all"
                title="Facebook Profile"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={BUSINESS_INFO.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 text-slate-300 flex items-center justify-center transition-all"
                title="TikTok Profile"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={BUSINESS_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 text-slate-300 flex items-center justify-center transition-all"
                title="Instagram Profile"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Our Services (الخدمات)</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-400 transition-colors">Our Work Gallery (معرض الأعمال)</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us (لماذا نحن)</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition-colors">Get Instant Quote (طلب تسعير)</a>
              </li>
              <li>
                <a href="#process" className="hover:text-emerald-400 transition-colors">Moving Process (خطوات العمل)</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Location & Contact (تواصل معنا)</a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Moving Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-emerald-400 transition-colors block truncate">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Contact Dispatch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={BUSINESS_INFO.phoneHref} className="text-white hover:text-emerald-400 font-semibold transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp Quotation Direct
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={BUSINESS_INFO.emailHref} className="hover:text-emerald-400 transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Riyadh, Saudi Arabia (View Map)
                </a>
              </li>

              <li className="flex items-center gap-2.5 text-emerald-400">
                <Clock className="w-4 h-4 shrink-0" />
                <span>24/7 All Week Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} <strong>{BUSINESS_INFO.name}</strong> ({BUSINESS_INFO.arabicName}). All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Licensed & Insured Moving Services across Saudi Arabia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
