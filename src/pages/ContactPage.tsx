import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Headphones,
} from 'lucide-react';
import { FOUNDATION_INFO } from '../data/vusfData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    enterpriseName: '',
    email: '',
    phone: '',
    category: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 1. Hero Header */}
      <section className="bg-gradient-to-br from-[#0c1b33] via-[#0f244a] to-[#1e3a8a] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40">
        <div className="max-w-[1400px] mx-auto space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Headphones className="w-3.5 h-3.5" />
            <span>Official Apex Secretariat &amp; Desks</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Contact Vishwa Udyam Sahayta Foundation
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Connect directly with our corporate headquarters in Navi Mumbai, regional state chapters, or international trade bureaus. We are dedicated to empowering MSMEs, startups, and cross-border trade.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Secretariat Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#c2410c]">
                  National Headquarters
                </span>
                <h2 className="text-xl font-black text-slate-900">Apex Secretariat Office</h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c2410c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Registered Address</span>
                    <p className="text-slate-600 leading-relaxed mt-0.5">
                      {FOUNDATION_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#c2410c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Telephone &amp; Helpline</span>
                    <a
                      href={`tel:${FOUNDATION_INFO.phone}`}
                      className="text-[#c2410c] hover:underline font-semibold"
                    >
                      {FOUNDATION_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#c2410c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Official Secretariat Email</span>
                    <a
                      href={`mailto:${FOUNDATION_INFO.email}`}
                      className="text-[#c2410c] hover:underline font-semibold block"
                    >
                      {FOUNDATION_INFO.email}
                    </a>
                    <a
                      href="mailto:secretariat@vusf.org.in"
                      className="text-slate-500 hover:underline text-xs"
                    >
                      secretariat@vusf.org.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#c2410c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Working Hours</span>
                    <p className="text-slate-600">
                      Monday to Saturday: 9:30 AM – 6:30 PM IST (Closed on Public Holidays)
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Non-Profit Badge */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900 block">Incorporation &amp; Accreditation</span>
                  Section 8 Registered Non-Profit Organization &bull; CIN: {FOUNDATION_INFO.cin} &bull; Ministry of Corporate Affairs, Government of India.
                </div>
              </div>
            </div>

            {/* Specialized Desks Quick List */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900">Specialized Assistance Desks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block">Export &amp; Global Trade</span>
                  <span className="text-slate-500 text-[11px]">Canton Fair &bull; Nepal &bull; the UAE</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block">GeM Portal Support</span>
                  <span className="text-slate-500 text-[11px]">Vendor Assessment &bull; Bidding</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block">Startups &amp; Grants</span>
                  <span className="text-slate-500 text-[11px]">DPIIT &bull; Seed Funding &bull; SISFS</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block">CSR Initiatives</span>
                  <span className="text-slate-500 text-[11px]">Tree Plantation &bull; Health Drives</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#c2410c]">
                  Online Communication
                </span>
                <h2 className="text-2xl font-black text-slate-900">Send an Official Message</h2>
                <p className="text-xs text-slate-500">
                  Fill out the form below and our secretariat or designated desk officer will respond within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-black text-slate-900">Inquiry Received Successfully</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Vishwa Udyam Sahayta Foundation. Your message has been routed to the appropriate officer and a confirmation reference will be sent to your email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#c2410c] hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Kulkarni"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#c2410c] bg-slate-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Enterprise / Company Name</label>
                      <input
                        type="text"
                        value={formData.enterpriseName}
                        onChange={(e) => setFormData({ ...formData, enterpriseName: e.target.value })}
                        placeholder="e.g. Kulkarni Agro Tech Pvt Ltd"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#c2410c] bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@enterprise.in"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#c2410c] bg-slate-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700">Contact Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98000 00000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#c2410c] bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700">Department / Inquiry Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#c2410c] bg-slate-50 text-slate-800"
                    >
                      <option>General Inquiry</option>
                      <option>MSME &amp; Business Registration</option>
                      <option>International Trade &amp; Delegations (China, Nepal, UAE)</option>
                      <option>GeM Portal Onboarding &amp; Bidding</option>
                      <option>Startup Support &amp; DPIIT Recognition</option>
                      <option>Corporate Sponsorship &amp; Event Passes</option>
                      <option>CSR Partnerships</option>
                      <option>Media &amp; Press Relations</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700">Your Message / Requirements *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please delineate your requirements, industry sector, or consultation inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#c2410c] bg-slate-50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
