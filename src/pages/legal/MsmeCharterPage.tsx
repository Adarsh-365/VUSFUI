import React from 'react';
import { ShieldCheck, Award, ArrowLeft, Target, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MsmeCharterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#c2410c] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-2 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 bg-orange-50 text-[#c2410c] text-xs font-extrabold uppercase px-3 py-1 rounded-md">
            <Award className="w-3 h-3" />
            <span>Ethical Commitments &amp; Charter</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            MSME Charter &amp; Code of Ethics
          </h1>
          <p className="text-xs text-slate-500">
            Vishwa Udyam Sahayta Foundation &bull; Section 8 Non-Profit Organization
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Preamble &amp; Mission</h2>
            <p>
              The MSME Charter of Vishwa Udyam Sahayta Foundation outlines our institutional mandate to empower India’s micro, small, and medium enterprises. We are dedicated to ensuring equal access to information, global trade networks, credit guarantees, and institutional mentorship without discrimination.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Core Principles of Handholding</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-900 block">Transparent Advisory</span>
                <p className="text-slate-600 text-xs">
                  Provide honest, objective, and regulatory-compliant guidance on schemes, subsidies, and export frameworks.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-900 block">Inclusivity &amp; Diversity</span>
                <p className="text-slate-600 text-xs">
                  Prioritize affirmative mentorship for women entrepreneurs, SC/ST business founders, and rural agro-enterprises.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-900 block">Grassroots Empowerment</span>
                <p className="text-slate-600 text-xs">
                  Bring tier-2 and tier-3 district industrial clusters into the international export corridor.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-900 block">Non-Commercial Spirit</span>
                <p className="text-slate-600 text-xs">
                  Operate with the fiduciary integrity of a Section 8 non-profit organization under the Ministry of Corporate Affairs.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Commitment to Industry Standards</h2>
            <p>
              Our programs align with national priorities including Make in India, Startup India, Aatmanirbhar Bharat, and ISO 9001:2015 quality standards.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
