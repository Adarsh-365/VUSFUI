import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  ShieldCheck,
  Lock,
  Compass,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  HeartHandshake,
  Lightbulb,
} from 'lucide-react';

interface OneToOneCounsellingPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const OneToOneCounsellingPage: React.FC<OneToOneCounsellingPageProps> = ({ onMemberClick }) => {
  const [selectedFocus, setSelectedFocus] = useState('Growth Strategy');

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-slate-800 selection:bg-amber-500 selection:text-white">
      {/* 1. Warm Editorial Advisory Hero */}
      <section className="relative bg-gradient-to-b from-[#1b1510] via-[#241a12] to-[#160f0a] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-amber-900/30">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-amber-400">One-to-One Counselling</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>100% CONFIDENTIAL &bull; PERSONALIZED EXECUTIVE MENTORSHIP</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif font-bold tracking-tight leading-[1.1] text-white">
                Personalized One-on-One <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200">
                  Business Counselling &amp; Mentorship
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                At Namaste India, we offer personalized one-on-one counseling to empower entrepreneurs at every stage of their journey. Our experienced counselors provide tailored guidance to address your specific business challenges and goals.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-xl shadow-orange-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Book Private 1-on-1 Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#advisory-scope"
                  className="bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-5 py-4 rounded-xl border border-white/10 transition-all"
                >
                  Explore Advisory Areas &darr;
                </a>
              </div>
            </div>

            {/* Confidentiality Seal Card */}
            <div className="lg:col-span-4 bg-[#2b1f16]/90 border border-amber-800/50 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-amber-900/50 pb-4">
                <ShieldCheck className="w-7 h-7 text-amber-400" />
                <div>
                  <h3 className="text-base font-bold text-white">Fiduciary Confidentiality</h3>
                  <div className="text-[11px] text-amber-300">Protected Safe Space</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We prioritize confidentiality and trust, creating a supportive environment where you can openly discuss your concerns and aspirations with seasoned industry mentors.
              </p>
              <div className="space-y-2 pt-2 border-t border-amber-900/40 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>NDA Protection on Project Disclosures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Direct Senior Advisor Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Philosophy & Long-Term Partnership */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-amber-200/70 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#c2410c] uppercase tracking-widest">
              OUR COUNSELLING CHARTER
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Navigating Obstacles, Developing Strategic Plans, Capitalizing on Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Whether you&apos;re launching a startup or seeking to optimize an existing business, our approach is designed to help you develop strategic plans, navigate obstacles, and capitalize on opportunities. We prioritize confidentiality and trust, creating a supportive environment where you can openly discuss your concerns and aspirations.
            </p>
            <p>
              With our commitment to long-term partnership, we&apos;re here to support your ongoing success, ensuring you have the tools and insights needed to achieve your business objectives. Contact us today to schedule your consultation and begin your personalized path to entrepreneurial excellence with Namaste India.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The 4 Diagnostic Focus Spheres */}
      <section id="advisory-scope" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Personalized Advisory Spheres
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Targeted 1-on-1 counseling tailored to your immediate business milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Growth Strategy & Market Entry',
                desc: 'Designing sustainable scale roadmaps, new customer acquisition strategies, and pricing frameworks.',
                icon: TrendingUp,
              },
              {
                title: 'Financial Health & Subsidy Navigation',
                desc: 'Diagnosing working capital gaps, loan restructuring, and optimizing PMEGP/CMEGP subsidy sanctions.',
                icon: Lightbulb,
              },
              {
                title: 'Operational & Supply Friction',
                desc: 'Streamlining factory floor logistics, vendor negotiations, quality benchmarks, and turnaround management.',
                icon: Compass,
              },
              {
                title: 'Commercial Dispute Mediation',
                desc: 'Discreet, neutral mediation to resolve commercial, partnership, and vendor disputes out of court.',
                icon: HeartHandshake,
              },
            ].map((sph, idx) => {
              const Icon = sph.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs hover:shadow-lg hover:border-amber-500 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#c2410c] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{sph.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{sph.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Bottom Booking CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#1b1510] text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-amber-900/40">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-200">
              Schedule Your Private Advisory Session
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Meet in-person at our Navi Mumbai Apex Secretariat or schedule a secure private video conference with our senior mentors.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Request 1-on-1 Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
