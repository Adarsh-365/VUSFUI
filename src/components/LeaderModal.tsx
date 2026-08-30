import React from 'react';
import { X, Building, Mail, Globe, Linkedin } from 'lucide-react';
import { OfficeBearer } from '../types';

interface LeaderModalProps {
  bearer: OfficeBearer | null;
  onClose: () => void;
}

export const LeaderModal: React.FC<LeaderModalProps> = ({ bearer, onClose }) => {
  if (!bearer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 bg-[#7c2d12] text-white flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            VUSF Governing Council Leadership Profile
          </span>
          <button
            onClick={onClose}
            className="p-1 text-slate-300 hover:text-white rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Content */}
        <div className="p-6 space-y-5">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden border-2 border-orange-500/80 shadow-md shrink-0 bg-slate-100">
              <img
                src={bearer.image}
                alt={bearer.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1 pt-1">
              <span className="inline-block bg-orange-100 text-[#c2410c] text-xs font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                {bearer.designation}
              </span>
              <h3 className="text-2xl font-black text-slate-900 leading-snug">{bearer.name}</h3>
              {bearer.company && (
                <p className="text-xs text-slate-500 font-semibold">{bearer.company}</p>
              )}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Leadership Profile
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {bearer.bio}
            </p>
          </div>

          {bearer.leadershipAreas && bearer.leadershipAreas.length > 0 && (
            <div className="pt-2 border-t border-slate-100 space-y-1.5">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Leadership Focus
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {bearer.leadershipAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-orange-50 text-orange-950 border border-orange-200/60"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="bg-slate-50 p-3.5 rounded-xl text-xs text-slate-600 space-y-1 border border-slate-200">
            <div className="font-semibold text-slate-800">Affiliations &amp; Portfolios:</div>
            <div>• Vishwa Udyam Sahayta Foundation Apex Governing Council</div>
            <div>• Steering Committee for MSME Subsidies, Industrial Parks &amp; International Trade</div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          {bearer.linkedin ? (
            <a
              href={bearer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0077b5] hover:bg-[#005f93] text-white text-xs font-bold rounded-md transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
          ) : <div />}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#7c2d12] hover:bg-[#9a3412] text-white text-xs font-bold rounded-md transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
