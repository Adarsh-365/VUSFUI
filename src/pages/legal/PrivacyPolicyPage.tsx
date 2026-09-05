import React from 'react';
import { ShieldCheck, FileText, Lock, Eye, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
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
            <Lock className="w-3 h-3" />
            <span>Official Policy Documentation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: 2026 &bull; Vishwa Udyam Sahayta Foundation
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              Vishwa Udyam Sahayta Foundation collects information you provide directly when registering for delegations, summits, events, membership tiers, or advisory services. This includes contact details (name, email, phone number), organizational affiliations, GSTIN/Udyam registrations, and trade inquiry parameters.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Utilization of Data</h2>
            <p>
              The information collected is used solely to facilitate B2B linkages, process conference passes, issue tax invoices, provide regulatory notifications, coordinate cross-border trade delegations, and disseminate relevant MSME scheme alerts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Non-Disclosure &amp; Information Security</h2>
            <p>
              We implement enterprise-grade 256-bit SSL encryption and strict data protection measures. We do not sell, license, or lease personal or enterprise data to commercial third parties. Data is shared exclusively with accredited government agencies or verified overseas trade partners with explicit participant authorization.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Contacting the Grievance Officer</h2>
            <p>
              For queries or data access requests under applicable Indian digital personal data protection laws, contact our Secretariat at: <a href="mailto:info@namastevishwaudyam.org" className="text-[#c2410c] underline">info@namastevishwaudyam.org</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
