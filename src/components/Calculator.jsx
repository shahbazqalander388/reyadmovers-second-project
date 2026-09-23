import React, { useState, useMemo } from 'react';
import { Calculator as CalcIcon, MessageSquare, Phone, Check, Sparkles, Building, Home, Briefcase, MapPin } from 'lucide-react';
import { BUSINESS_INFO, RIYADH_DISTRICTS } from '../data/siteData';

export default function Calculator() {
  const [propertyType, setPropertyType] = useState('apt_medium'); // studio, apt_small, apt_medium, villa_small, villa_large, office_small, office_large
  const [pickupDistrict, setPickupDistrict] = useState('Al Malaz (الملز)');
  const [dropoffDistrict, setDropoffDistrict] = useState('Al Nakheel (النخيل)');
  const [elevator, setElevator] = useState('yes'); // 'yes', 'stairs_low', 'stairs_high'
  const [carpenterRequired, setCarpenterRequired] = useState(true);
  const [bubbleWrapRequired, setBubbleWrapRequired] = useState(true);
  const [tvCurtainsRequired, setTvCurtainsRequired] = useState(false);

  const propertyOptions = [
    { id: 'studio', name: 'Studio Apartment', arabicName: 'استوديو / ملحق', icon: Home },
    { id: 'apt_small', name: '1-2 Bedroom Apartment', arabicName: 'شقة 1-2 غرف نوم', icon: Home },
    { id: 'apt_medium', name: '3-4 Bedroom Apartment', arabicName: 'شقة 3-4 غرف نوم', icon: Building },
    { id: 'villa_small', name: 'Small / Duplex Villa', arabicName: 'فيلا صغيرة / دوبلكس', icon: Building },
    { id: 'villa_large', name: 'Large Luxury Villa', arabicName: 'فيلا كبيرة طابقين', icon: Building },
    { id: 'office_small', name: 'Small Office (1-5 Desks)', arabicName: 'مكتب صغير', icon: Briefcase },
    { id: 'office_large', name: 'Corporate Office / Floor', arabicName: 'مقر شركة كامل', icon: Briefcase }
  ];

  const currentProperty = propertyOptions.find(p => p.id === propertyType) || propertyOptions[2];

  // Construct structured WhatsApp prefilled message without price range
  const generatedWhatsAppUrl = useMemo(() => {
    const selectedAddons = [];
    if (carpenterRequired) selectedAddons.push('Master Carpenter / نجار');
    if (bubbleWrapRequired) selectedAddons.push('Bubble Wrap & Boxes / تغليف');
    if (tvCurtainsRequired) selectedAddons.push('TV & Curtains / فك ستائر وشاشات');

    const elevatorText = elevator === 'yes'
      ? 'Yes (مصعد متوفر)'
      : elevator === 'stairs_low'
        ? 'Stairs 1-2 floors (درج دور 1-2)'
        : 'Stairs 3+ floors (درج دور 3 فما فوق)';

    const messageText = [
      `*Moving Quote Request - Riyadh Movers & Experts*`,
      `السلام عليكم، أود الحصول على تسعير لنقل العفش:`,
      `---------------------------------`,
      `• *Property Type:* ${currentProperty.name} (${currentProperty.arabicName})`,
      `• *Pickup Location:* ${pickupDistrict}`,
      `• *Drop-off Location:* ${dropoffDistrict}`,
      `• *Elevator Access:* ${elevatorText}`,
      `• *Extra Services:* ${selectedAddons.length > 0 ? selectedAddons.join(', ') : 'Standard move only'}`,
      `• *Request:* Please provide best price quote & availability`,
      `---------------------------------`,
      `يرجى تزويدي بأفضل سعر متوفر. شكراً لكم!`
    ].join('\n');

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
  }, [currentProperty, pickupDistrict, dropoffDistrict, elevator, carpenterRequired, bubbleWrapRequired, tvCurtainsRequired]);

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <CalcIcon className="w-4 h-4" />
            Instant Moving Quote
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get Your Custom Moving Quote in Riyadh
          </h2>
          <p className="font-arabic text-xl text-emerald-400 font-semibold">
            حدد تفاصيل نقلك واحصل على تسعير فوري ومباشر
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Select your property size, pickup & delivery locations in Riyadh, and required carpentry services to receive an instant transparent quote on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-8 shadow-xl">
            {/* Step 1: Property Type */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white flex items-center justify-between">
                <span>1. Select Property Type</span>
                <span className="font-arabic text-xs text-slate-400">اختر نوع المسكن أو المنشأة</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {propertyOptions.map((opt) => {
                  const isSelected = propertyType === opt.id;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setPropertyType(opt.id)}
                      className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between gap-2 ${
                        isSelected
                          ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-md'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold leading-snug">{opt.name}</div>
                        <div className="text-[10px] font-arabic text-emerald-400/80">{opt.arabicName}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Pickup and Dropoff Districts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Pickup District (حي التحميل)</span>
                </label>
                <select
                  value={pickupDistrict}
                  onChange={(e) => setPickupDistrict(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  {RIYADH_DISTRICTS.map((district, idx) => (
                    <option key={idx} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Drop-off District (حي التنزيل)</span>
                </label>
                <select
                  value={dropoffDistrict}
                  onChange={(e) => setDropoffDistrict(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  {RIYADH_DISTRICTS.map((district, idx) => (
                    <option key={idx} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Elevator / Floor Access */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white flex items-center justify-between">
                <span>3. Elevator Availability</span>
                <span className="font-arabic text-xs text-slate-400">توفر المصعد في المبنى</span>
              </label>
              <div className="grid grid-cols-3 gap-2.5 text-xs sm:text-sm">
                {[
                  { id: 'yes', label: 'Elevator Available', arLabel: 'يوجد مصعد' },
                  { id: 'stairs_low', label: 'Stairs (1-2 Floors)', arLabel: 'درج (دور 1-2)' },
                  { id: 'stairs_high', label: 'Stairs (3+ Floors)', arLabel: 'درج (دور 3 فما فوق)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setElevator(item.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      elevator === item.id
                        ? 'bg-emerald-500/15 border-emerald-500 text-white font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-semibold">{item.label}</div>
                    <div className="text-[10px] font-arabic text-slate-400">{item.arLabel}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-on Services */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white flex items-center justify-between">
                <span>4. Additional Specialized Services</span>
                <span className="font-arabic text-xs text-slate-400">خدمات إضافية مطلوبة</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={carpenterRequired}
                      onChange={(e) => setCarpenterRequired(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 bg-slate-800 border-slate-700"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-white block">
                        Master Carpenter (Najjar) for Furniture
                      </span>
                      <span className="text-[11px] font-arabic text-slate-400">
                        فك وتركيب غرف النوم، المطابخ، ودواليب ايكيا
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {carpenterRequired ? 'Selected / مختار' : 'Available / متاح'}
                  </span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={bubbleWrapRequired}
                      onChange={(e) => setBubbleWrapRequired(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 bg-slate-800 border-slate-700"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-white block">
                        Bubble Wrap & Heavy-Duty Carton Boxes
                      </span>
                      <span className="text-[11px] font-arabic text-slate-400">
                        تغليف فقاعي هوائي للزجاج والتحف وشاشات التلفزيون
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {bubbleWrapRequired ? 'Selected / مختار' : 'Available / متاح'}
                  </span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={tvCurtainsRequired}
                      onChange={(e) => setTvCurtainsRequired(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 bg-slate-800 border-slate-700"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-white block">
                        Wall TV Mounting & Curtain Hanging
                      </span>
                      <span className="text-[11px] font-arabic text-slate-400">
                        فك وإعادة تركيب الشاشات الجدارية ومواسير الستائر
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {tvCurtainsRequired ? 'Selected / مختار' : 'Available / متاح'}
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Real-time Move Summary & Instant Quote Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border-2 border-emerald-500/40 p-6 sm:p-8 space-y-6 shadow-2xl shadow-emerald-500/10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Move Summary & Quote
                  </span>
                  <div className="text-xs font-arabic text-slate-400">ملخص تفاصيل النقل والتسعير المباشر</div>
                </div>
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Instant Quote Highlight */}
              <div className="text-center bg-slate-900/80 rounded-xl border border-slate-800 p-4 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Direct & Transparent Quote • تسعير مباشر</span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Instant WhatsApp Quotation
                </div>
                <p className="text-xs font-arabic text-emerald-400/90 font-medium">
                  احصل على أفضل سعر دقيق وشامل الدينا والعمالة والنجار خلال دقائق
                </p>
              </div>

              {/* Summary Points */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Property Type:</span>
                  <span className="font-semibold text-white">{currentProperty.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Pickup:</span>
                  <span className="font-semibold text-white">{pickupDistrict.split('(')[0]}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Drop-off:</span>
                  <span className="font-semibold text-white">{dropoffDistrict.split('(')[0]}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Access:</span>
                  <span className="font-semibold text-white">
                    {elevator === 'yes' ? 'Elevator (مصعد)' : elevator === 'stairs_low' ? 'Stairs 1-2F' : 'Stairs 3+F'}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Carpenter Service:</span>
                  <span className="font-semibold text-emerald-400">{carpenterRequired ? 'Included (مطلوب)' : 'None'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Bubble Wrap:</span>
                  <span className="font-semibold text-emerald-400">{bubbleWrapRequired ? 'Included (مطلوب)' : 'None'}</span>
                </div>
              </div>

              {/* High Impact WhatsApp Button */}
              <div className="space-y-3 pt-2">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base shadow-xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-98 transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Request Quote via WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Direct Call: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
