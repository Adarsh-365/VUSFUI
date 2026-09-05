import React from 'react';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsOfServicePage: React.FC = () => {
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
            <FileText className="w-3 h-3" />
            <span>Governance &amp; Terms</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: 2026 &bull; Vishwa Udyam Sahayta Foundation
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or utilizing the services of Vishwa Udyam Sahayta Foundation (VUSF), including participating in delegations, summits, and obtaining membership, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Non-Profit Character &amp; Advisory Scope</h2>
            <p>
              Vishwa Udyam Sahayta Foundation is registered under Section 8 of the Companies Act, 2013, Ministry of Corporate Affairs, Government of India. The Foundation provides ecosystem facilitation, market linkages, mentoring, and technical consulting. Specific outcomes such as bank loan approvals, export buyer agreements, or grant disbursements remain subject to institutional, bank, and regulatory evaluations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Delegate Registration &amp; Invoicing</h2>
            <p>
              All conference and summit passes issued through this platform include statutory GST invoicing where applicable. Pass allocations are non-transferable without prior formal intimation to the event secretariat.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Intellectual Property</h2>
            <p>
              All proprietary research reports, publications, sector blueprints, and branding elements produced by Vishwa Udyam Sahayta Foundation remain the intellectual property of the Foundation and may not be reproduced without written attribution.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
