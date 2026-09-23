import React from 'react';
import { Star, CheckCircle2, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ThumbsUp className="w-3.5 h-3.5" />
            Verified Customer Satisfaction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Hundreds of Riyadh Residents & Businesses
          </h2>
          <p className="font-arabic text-xl text-emerald-400 font-semibold">
            آراء وتجارب عملائنا الكرام في أحياء الرياض
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Read real feedback from families, professionals, and companies who experienced safe, on-time, and damage-free moving with us.
          </p>
        </div>

        {/* Testimonials 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header: Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                    {review.service}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{review.comment}"
                </p>

                {/* Arabic Comment */}
                <p className="font-arabic text-xs sm:text-sm text-emerald-400/90 leading-relaxed">
                  "{review.arabicComment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{review.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" title="Verified Customer" />
                    </h4>
                    <span className="text-xs text-slate-400 block font-arabic">
                      {review.arabicDistrict}
                    </span>
                  </div>
                </div>

                <span className="text-xs text-slate-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
