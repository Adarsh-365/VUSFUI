import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_BEARERS_DATA } from '../data/ficciData';
import { OfficeBearer } from '../types';

interface OfficeBearersProps {
  onSelectBearer?: (bearer: OfficeBearer) => void;
}

export const OfficeBearers: React.FC<OfficeBearersProps> = () => {
  return (
    <section id="office-bearers" className="relative py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with "Leadership" watermark */}
        <div className="relative pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="relative">
            <span className="absolute -top-7 -left-1 text-5xl sm:text-6xl font-serif-title section-watermark">
              Leadership
            </span>
            <h2 className="relative text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              Governing Council &amp; Leadership
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Distinguished visionary leadership guiding Vishwa Udyam Sahayta Foundation
            </p>
          </div>
          <Link
            to="/about/board"
            className="text-xs font-bold text-[#c2410c] hover:text-[#ea580c] transition-colors"
          >
            View All Leadership &rarr;
          </Link>
        </div>

        {/* 4 Profiles in Grid with Large Portraits */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 pt-4 max-w-6xl mx-auto">
          {OFFICE_BEARERS_DATA.map((bearer) => (
            <Link
              key={bearer.id}
              to={bearer.id === 'pragati-tayde' ? '/about/president' : '/about/board'}
              className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 bg-white p-3.5 sm:p-4 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-orange-300"
            >
              {/* Large Portrait Frame */}
              <div className="w-full aspect-[4/4.6] rounded-2xl overflow-hidden border border-slate-200 group-hover:border-[#c2410c] shadow-sm bg-slate-100">
                <img
                  src={bearer.image}
                  alt={bearer.name}
                  onError={(e) => {
                    if (bearer.id === 'vignesh-j') {
                      (e.target as HTMLImageElement).src = '/members/vighnesh.jpeg';
                    }
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Name */}
              <h3 className="mt-3.5 text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors leading-tight line-clamp-1">
                {bearer.name}
              </h3>

              {/* Designation */}
              <p className="mt-1 text-[11px] sm:text-xs font-semibold text-[#c2410c] uppercase tracking-wider leading-tight">
                {bearer.designation}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

