import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ServicePageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ onMemberClick }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <div className="bg-[#0c1b33] text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-amber-600/20 via-transparent to-transparent opacity-50" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <Link to="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <span className="text-white">All Services</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALIZED BUSINESS &amp; MSME SERVICES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Comprehensive Enterprise &amp; MSME Services
          </h1>
          <p className="mt-3 text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            From B2B delegations and global export licensing to industrial infrastructure, government subsidies, and international office setups.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#c2410c] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="p-4 bg-gradient-to-r from-[#0c1b33] to-[#1e293b] text-white flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase opacity-90">
                      {srv.tag}
                    </span>
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors leading-snug">
                      <Link to={`/services/${srv.slug}`}>
                        {srv.shortTitle}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {srv.summary}
                    </p>

                    {srv.features && srv.features.length > 0 && (
                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        {srv.features.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    to={`/services/${srv.slug}`}
                    className="w-full bg-[#0c1b33] hover:bg-[#c2410c] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Consultation Callout Banner */}
        <div className="mt-14 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-black">
              Need Personalized Guidance or Enterprise Consultation?
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 max-w-2xl">
              Connect directly with our senior industry consultants and trade advisors for customized MSME scaling, export support, or infrastructure project execution.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onMemberClick('become')}
              className="bg-white text-[#c2410c] hover:bg-amber-50 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Advisory Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
