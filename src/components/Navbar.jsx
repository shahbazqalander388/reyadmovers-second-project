import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { id: "services", label: "Services", arabicLabel: "الخدمات", href: "#services" },
    { id: "gallery", label: "Our Work", arabicLabel: "معرض الأعمال", href: "#gallery" },
    { id: "why-us", label: "Why Us", arabicLabel: "لماذا نحن", href: "#why-us" },
    { id: "calculator", label: "Get Quote", arabicLabel: "طلب تسعير", href: "#calculator" },
    { id: "process", label: "Our Process", arabicLabel: "خطوات العمل", href: "#process" },
    { id: "contact", label: "Contact & Map", arabicLabel: "الموقع والتواصل", href: "#contact" },
  ];

  // Scroll listener: handles sticky style, active nav link, and dynamic URL hash update
  useEffect(() => {
    const sectionIds = ['services', 'gallery', 'why-us', 'calculator', 'process', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 15);

      // When near top (Hero section), clear hash without scrolling
      if (scrollY < 180) {
        if (activeSection !== '') {
          setActiveSection('');
          if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }
        return;
      }

      // Check which section is currently in viewport
      const scrollPosition = scrollY + 160;
      let current = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      if (current && current !== activeSection) {
        setActiveSection(current);
        // Dynamically update browser URL in address bar without jumping
        window.history.replaceState(null, '', `#${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-900/98 backdrop-blur-md shadow-2xl border-b border-emerald-500/20'
        : 'bg-slate-900 border-b border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="h-10 w-10 sm:h-12 sm:w-14 rounded-xl bg-white p-1 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0 overflow-hidden border border-slate-700/60">
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
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg lg:text-xl font-extrabold text-white tracking-tight flex items-center gap-1">
                <span className="truncate">Riyadh Movers</span>
                <span className="text-emerald-400 font-bold text-xs sm:text-base shrink-0">Services</span>
              </span>
              <span className="text-[10px] sm:text-xs font-arabic text-emerald-400/90 tracking-wide truncate">
                خدمات نقل العفش والتغليف بالرياض
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Dynamic Active Indicator */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm font-medium transition-colors duration-150 py-1 relative group ${
                    isActive ? 'text-emerald-400 font-bold' : 'text-slate-200 hover:text-emerald-400'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className={`text-[11px] block font-arabic -mt-0.5 transition-colors ${
                    isActive ? 'text-emerald-300 font-semibold' : 'text-slate-400 group-hover:text-emerald-300'
                  }`}>
                    {link.arabicLabel}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-emerald-400 transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              );
            })}
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-emerald-500/15 text-emerald-400 font-bold border-l-4 border-emerald-500' 
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-sm font-arabic text-emerald-400">{link.arabicLabel}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2.5">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 text-white font-semibold text-xs border border-slate-700 text-center active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Call Now</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs text-center shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
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
