import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface MemberModalProps {
  type: 'become' | 'members' | 'employee' | null;
  onClose: () => void;
}

export const MemberModal: React.FC<MemberModalProps> = ({ type, onClose }) => {
  const [activeTab, setActiveTab] = useState<'become' | 'members' | 'employee'>(
    type || 'become'
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [membershipTier, setMembershipTier] = useState('msme');
  const [submitted, setSubmitted] = useState(false);

  if (!type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">Vishwa Udyam Foundation Portal Access</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="grid grid-cols-3 border-b border-slate-200 text-xs font-bold text-center">
          <button
            onClick={() => setActiveTab('become')}
            className={`py-3 transition-colors ${
              activeTab === 'become'
                ? 'bg-emerald-50 text-[#00873d] border-b-2 border-[#00873d]'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Register / Join
          </button>
          <button
            onClick={() => setActiveTab('members')}
            className={`py-3 transition-colors ${
              activeTab === 'members'
                ? 'bg-orange-50 text-[#e67e22] border-b-2 border-[#e67e22]'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            MSME Zone
          </button>
          <button
            onClick={() => setActiveTab('employee')}
            className={`py-3 transition-colors ${
              activeTab === 'employee'
                ? 'bg-red-50 text-[#c0392b] border-b-2 border-[#c0392b]'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Officer Zone
          </button>
        </div>

        {/* Form Container */}
        <div className="p-6">
          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
              <h3 className="text-lg font-bold text-slate-800">
                {activeTab === 'become' ? 'Enterprise Application Submitted!' : 'Authentication Successful'}
              </h3>
              <p className="text-xs text-slate-500">
                {activeTab === 'become'
                  ? 'Our MSME Counselor will connect with you regarding registration, DPR assistance, and government subsidy benefits.'
                  : 'Redirecting to your secured workspace...'}
              </p>
            </div>
          ) : activeTab === 'become' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-slate-600">
                Join Vishwa Udyam Sahayta Foundation to access modern industrial infrastructure, PMEGP/CMEGP subsidies, bilateral trade expos, and 1-on-1 business counseling.
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Enterprise / Firm / Startup Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Precision Agro Ltd."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:border-emerald-600 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Official Email / Mobile
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:border-emerald-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Enterprise Category
                  </label>
                  <select
                    value={membershipTier}
                    onChange={(e) => setMembershipTier(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:border-emerald-600 outline-none bg-white"
                  >
                    <option value="msme">MSME / Micro Enterprise</option>
                    <option value="startup">DPIIT Startup</option>
                    <option value="women">Women Entrepreneur</option>
                    <option value="scst">SC/ST Enterprise</option>
                    <option value="exporter">International Exporter</option>
                    <option value="corporate">Corporate / Industrial Unit</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00873d] hover:bg-[#007434] text-white font-bold py-2.5 rounded-lg text-xs transition-colors shadow-sm cursor-pointer mt-2"
              >
                Submit Registration &amp; Mentorship Request
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-slate-600">
                {activeTab === 'members'
                  ? 'Access your registered business profile, B2B trade inquiries, and DPR status.'
                  : 'VUSF Foundation Secretariat Single Sign-On (SSO) Portal.'}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  User ID / Registration Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. VUSF-ENT-2026-9182"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:border-orange-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className={`w-full text-white font-bold py-2.5 rounded-lg text-xs transition-colors shadow-sm cursor-pointer mt-2 ${
                  activeTab === 'members'
                    ? 'bg-[#e67e22] hover:bg-[#d35400]'
                    : 'bg-[#c0392b] hover:bg-[#a93226]'
                }`}
              >
                Secure Sign In
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
