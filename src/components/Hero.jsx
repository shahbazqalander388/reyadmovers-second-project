import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, Wrench, CheckCircle2, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-slate-950 text-white min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden">
      {/* High contrast dark modern background with subtle geometric grid & glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Ambient radial glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8">
            {/* Top Tagline / Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
              <span className="truncate">#1 Rated Movers & Packers in Riyadh</span>
              <span className="hidden sm:inline">• دينا نقل عفش مجهزة</span>
            </div>

            {/* Prominent Single H1 */}
            <div className="space-y-2.5 sm:space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Professional Movers & Packers in Riyadh
                <span className="block mt-1.5 sm:mt-2 font-arabic text-xl sm:text-3xl lg:text-5xl text-emerald-400 font-bold">
                  نقل عفش بالرياض احترافي ومضمون
                </span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed">
                Seamless home, luxury villa, and commercial relocation across all Riyadh neighborhoods. Equipped with closed Dyna trucks, multi-layered bubble packaging, and certified master carpenters (Najjar) for safe furniture dismantling and reassembly.
              </p>
            </div>

            {/* 3 Core Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">24/7 in Riyadh</h4>
                  <p className="text-[11px] font-arabic text-slate-400">خدمة سريعة على مدار 24 ساعة</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Damage-Free</h4>
                  <p className="text-[11px] font-arabic text-slate-400">ضمان سلامة العفش 100%</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Expert Najjar</h4>
                  <p className="text-[11px] font-arabic text-slate-400">فنيون نجارون لفك وتركيب ايكيا</p>
                </div>
              </div>
            </div>

            {/* Dual CTAs (WhatsApp Green & Direct Call) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm sm:text-lg font-bold shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-98 transition-all duration-200 group"
              >
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" />
                <span>Request WhatsApp Quote</span>
                <span className="font-arabic text-xs sm:text-sm text-emerald-100 hidden sm:inline">(تسعير فوري)</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm sm:text-lg font-bold border-2 border-slate-700 hover:border-emerald-500/50 shadow-lg hover:scale-[1.02] active:scale-98 transition-all duration-200"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                <span className="hidden sm:inline">Call {BUSINESS_INFO.phone}</span>
                <span className="sm:hidden">Call Now (اتصال مباشر)</span>
              </a>
            </div>

            {/* Authentic Service Assurance Bar */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Insured & Damage-Free Guarantee</span>
              </div>
              <span className="text-slate-400 font-arabic text-xs">
                خدمة سريعة ومضمونة لكافة أحياء الرياض والمدن
              </span>
            </div>
          </div>

          {/* Right Column: Hero Quick Quotation Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-slate-800/90 p-4 sm:p-8 shadow-2xl backdrop-blur-xl space-y-4 sm:space-y-6">
              {/* Official Brand Header */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-slate-800/80">
                <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-md border border-slate-700/60">
                  <img
                    src={BUSINESS_INFO.logo}
                    alt={BUSINESS_INFO.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      if (e.target.src !== BUSINESS_INFO.cloudinaryLogo) {
                        e.target.src = BUSINESS_INFO.cloudinaryLogo;
                      }
                    }}
                  />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">
                    {BUSINESS_INFO.name}
                  </span>
                  <span className="text-xs text-emerald-400 font-arabic block font-medium">
                    {BUSINESS_INFO.arabicName}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Instant Moving Assistance
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Need Fast Moving Today?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-arabic">
                  احصل على أفضل دينا نقل عفش مع عمالة مدربة ونجار خلال دقائق
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-white block">Closed Hydraulic Dyna Fleet</span>
                    <span className="text-slate-400">شاحنات مغلقة ومبطنة لمنع الغبار وحماية الأثاث أثناء الطريق</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-white block">Heavy Duty Bubble Wrap & Boxes</span>
                    <span className="text-slate-400">تغليف كرتوني مقوى وفقاعي لحماية الزجاج والمجالس والمطابخ</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-semibold text-white block">Skilled Carpenter (Najjar) on Site</span>
                    <span className="text-slate-400">فك وتركيب غرف النوم، المطابخ، والستائر وتركيب شاشات التلفزيون</span>
                  </div>
                </div>
              </div>

              {/* Live Project Photo Proof Badge */}
              <a 
                href="#gallery"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/70 border border-emerald-500/30 hover:border-emerald-500 transition-all group shadow-inner"
              >
                <div className="flex -space-x-2.5 overflow-hidden shrink-0">
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="/images/gallery/work-2.jpg" alt="Moving proof 1" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="/images/gallery/work-8.jpg" alt="Moving proof 2" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="/images/gallery/work-3.jpg" alt="Moving proof 3" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" src="/images/gallery/work-4.jpg" alt="Moving proof 4" />
                </div>
                <div className="flex-1 min-w-0 text-xs">
                  <span className="font-bold text-white flex items-center gap-1.5 group-hover:text-emerald-400 transition-colors">
                    <span>Explore Our Real Work Gallery</span>
                  </span>
                  <span className="text-emerald-400/90 font-arabic text-[11px] block truncate">
                    شاهد صور التغليف والفك والتركيب الحقيقية
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="pt-2">
                <a
                  href="#calculator"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 active:scale-98 transition-all"
                >
                  <span>Get Instant Moving Quote</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
