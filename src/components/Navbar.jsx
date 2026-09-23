import React, { useState, useEffect } from 'react';
import { Truck, Phone, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", arabicLabel: "الخدمات", href: "#services" },
    { label: "Why Us", arabicLabel: "لماذا نحن", href: "#why-us" },
    { label: "Get Quote", arabicLabel: "طلب تسعير", href: "#calculator" },
    { label: "Our Process", arabicLabel: "خطوات العمل", href: "#process" },
    { label: "Contact & Map", arabicLabel: "الموقع والتواصل", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800/80'
        : 'bg-slate-900 border-b border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
              <Truck className="w-7 h-7 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                Riyadh Movers <span className="text-emerald-400 font-bold text-sm sm:text-base">& Experts</span>
              </span>
              <span className="text-xs font-arabic text-emerald-400/90 tracking-wide">
                خبراء نقل العفش والتغليف بالرياض
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-200 hover:text-emerald-400 text-sm font-medium transition-colors duration-150 py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="text-[11px] block text-slate-400 font-arabic -mt-0.5 group-hover:text-emerald-300 transition-colors">
                  {link.arabicLabel}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700/80 transition-all shadow-sm hover:shadow active:scale-95"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Now</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-all shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/35 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quote</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500 text-white text-xs font-semibold shadow-sm"
              title="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900/98 backdrop-blur-lg border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-sm font-arabic text-emerald-400">{link.arabicLabel}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-3">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-800 text-white font-semibold text-sm border border-slate-700 text-center active:scale-95"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call +966 56 469 4614</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm text-center shadow-md shadow-emerald-500/20 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quote</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Insured & Damage-Free Relocation Guarantee</span>
          </div>
        </div>
      )}
    </header>
  );
}
