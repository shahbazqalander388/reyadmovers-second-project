import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function Navbar({ onHomeClick }) {
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

      // Do not overwrite hash if we are on a programmatic district route
      if (window.location.hash && window.location.hash.startsWith('#/movers-')) {
        return;
      }

      // When near top (Hero section), clear hash without scrolling
      if (scrollY < 180) {
        if (activeSection !== '') {
          setActiveSection('');
          if (window.location.hash && !window.location.hash.startsWith('#/movers-')) {
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
        if (!window.location.hash.startsWith('#/movers-')) {
          window.history.replaceState(null, '', `#${current}`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    if (onHomeClick) {
      onHomeClick();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (onHomeClick) {
      onHomeClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
          <a 
            href="#" 
            onClick={handleBrandClick}
            className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
          >
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`text-sm font-medium transition-colors duration-150 py-1 relative group ${
                    isActive ? 'text-emerald-400 font-bold' : 'text-slate-200 hover:text-emerald-400'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="block text-[11px] font-arabic opacity-75 group-hover:opacity-100 transition-opacity">
                    {link.arabicLabel}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs (Call & WhatsApp) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-all border border-slate-700/80 active:scale-95"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="p-2 rounded-lg bg-slate-800 text-emerald-400 border border-slate-700"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <nav className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`p-2.5 rounded-lg text-xs font-semibold flex flex-col border ${
                  activeSection === link.id
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-slate-850 border-slate-800 text-slate-200 hover:border-slate-700'
                }`}
              >
                <span>{link.label}</span>
                <span className="font-arabic text-[11px] text-slate-400">{link.arabicLabel}</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Direct Quote</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-white font-semibold text-sm border border-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
