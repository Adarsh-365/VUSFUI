import React from 'react';
import { X, Download, FileCheck } from 'lucide-react';
import { Publication } from '../types';

interface PublicationModalProps {
  publication: Publication | null;
  onClose: () => void;
}

export const PublicationModal: React.FC<PublicationModalProps> = ({
  publication,
  onClose,
}) => {
  if (!publication) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              VUSF Knowledge Hub &amp; Publications
            </span>
            <span className="text-xs text-slate-400">• {publication.partner}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {publication.title}
            </h2>
            <p className="text-sm text-slate-600 font-medium mt-1">
              {publication.subtitle}
            </p>
            <div className="flex items-center gap-3 mt-3 text-xs text-slate-500">
              <span>Published: <strong>{publication.date}</strong></span>
              <span>•</span>
              <span>Joint Knowledge Partner / Wing: <strong>{publication.partner}</strong></span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {publication.tags.map((tag) => (
              <span
                key={tag}
                className="bg-orange-50 text-orange-700 text-xs px-2.5 py-1 rounded-full font-medium border border-orange-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              Executive Synopsis
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {publication.summary}
            </p>
          </div>

          {/* Key Findings */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Core Strategic Takeaways:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <FileCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Structured DPR frameworks, subsidy qualification standards (PMEGP/CMEGP), and comprehensive project feasibility matrices.</span>
              </li>
              <li className="flex items-start gap-2">
                <FileCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Bilateral trade agreements, cross-border tariff rationalization and customs procedures for Indian exporters.</span>
              </li>
              <li className="flex items-start gap-2">
                <FileCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Actionable industrial park blueprints, PEB engineering benchmarks, and clean energy standards for MSME manufacturing.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              alert('Downloading PDF report from Vishwa Udyam Sahayta Foundation knowledge portal...');
            }}
            className="flex items-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Complete Whitepaper (PDF)</span>
          </button>

          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
