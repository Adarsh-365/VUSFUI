import React, { useState } from 'react';
import { Heart, Repeat2, CheckCircle2 } from 'lucide-react';

export const SocialConnect: React.FC = () => {
  const [tweetLiked, setTweetLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);

  return (
    <section id="social-connect" className="relative py-10 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with "Social Media" watermark */}
        <div className="relative pb-6">
          <div className="relative">
            <span className="absolute -top-7 -left-1 text-5xl sm:text-6xl font-serif-title section-watermark">
              Social Media
            </span>
            <h2 className="relative text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              Connect with Vishwa Udyam Sahayta Foundation
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Stay updated with MSME policy alerts, upcoming trade delegations and international sourcing insights
            </p>
          </div>
        </div>

        {/* 2-Column Social Connect Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          {/* Left: Social Media Square Buttons */}
          <div className="lg:col-span-5 flex items-center gap-2.5 flex-wrap">
            {/* X */}
            <a
              href="https://twitter.com/namastevishwaudyam"
              target="_blank"
              rel="noreferrer"
              aria-label="VUSF on X"
              className="w-10 h-10 rounded-sm bg-black hover:bg-neutral-800 text-white font-extrabold flex items-center justify-center text-lg shadow-xs hover:scale-105 transition-transform"
            >
              𝕏
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/namasteindiagroup/"
              target="_blank"
              rel="noreferrer"
              aria-label="Namaste India Group on Facebook"
              className="w-10 h-10 rounded-sm bg-[#1877f2] hover:bg-[#166fe5] text-white font-black flex items-center justify-center text-xl shadow-xs hover:scale-105 transition-transform"
            >
              f
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/namasteindia.group/"
              target="_blank"
              rel="noreferrer"
              aria-label="Namaste India Group on Instagram"
              className="w-10 h-10 rounded-sm bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white font-bold flex items-center justify-center text-lg shadow-xs hover:scale-105 transition-transform"
            >
              📷
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/vishwa-udyam-sahayta-foundation/"
              target="_blank"
              rel="noreferrer"
              aria-label="VUSF on LinkedIn"
              className="w-10 h-10 rounded-sm bg-[#0077b5] hover:bg-[#006699] text-white font-bold flex items-center justify-center text-lg shadow-xs hover:scale-105 transition-transform"
            >
              in
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@namaste_india_foundation"
              target="_blank"
              rel="noreferrer"
              aria-label="Namaste India Foundation on YouTube"
              className="w-10 h-10 rounded-sm bg-[#ff0000] hover:bg-[#d90000] text-white font-bold flex items-center justify-center text-lg shadow-xs hover:scale-105 transition-transform"
            >
              ▶
            </a>
            {/* Website / Portal */}
            <a
              href="https://namastevishwaudyam.org"
              target="_blank"
              rel="noreferrer"
              aria-label="Namaste Vishwa Udyam Portal"
              className="w-10 h-10 rounded-sm bg-[#c2410c] hover:bg-[#9a3412] text-white font-black flex items-center justify-center text-xs shadow-xs hover:scale-105 transition-transform"
            >
              VUSF
            </a>
          </div>

          {/* Right: Follow VUSF on X for Updates */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#7c2d12] text-white font-bold flex items-center justify-center text-xs">
                    VUSF
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-slate-800">Vishwa Udyam Sahayta Foundation</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500 text-white" />
                      <span className="text-[11px] text-slate-500">@namastevishwaudyam</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Catalyst for MSME Growth, Industrial Parks &amp; Global Trade
                    </p>
                  </div>
                </div>

                <a
                  href="https://twitter.com/namastevishwaudyam"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black hover:bg-neutral-800 text-white text-xs font-bold px-3.5 py-1.5 rounded-full transition-colors inline-flex items-center gap-1"
                >
                  <span>Follow on 𝕏</span>
                </a>
              </div>

              {/* Sample Live Tweet */}
              <div className="pt-3 text-xs text-slate-700 leading-relaxed">
                <p>
                  Delighted to announce the <strong>Nepal Food & Beverage Expo & India-Nepal Buyer-Seller Meet 2026</strong> scheduled for Oct 14-16 in Kathmandu! Connecting Indian food processing, FMCG and agro-enterprises with prime Himalayan market buyers.
                </p>
                <div className="mt-2 text-slate-400 text-[10px] flex items-center justify-between">
                  <span>10:45 AM · Aug 16, 2026</span>
                  <div className="flex items-center gap-4 text-slate-600">
                    <button
                      onClick={() => setTweetLiked(!tweetLiked)}
                      className={`flex items-center gap-1 hover:text-red-500 transition-colors ${
                        tweetLiked ? 'text-red-500 font-bold' : ''
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${tweetLiked ? 'fill-red-500' : ''}`} />
                      <span>{tweetLiked ? 189 : 188}</span>
                    </button>
                    <button
                      onClick={() => setRetweeted(!retweeted)}
                      className={`flex items-center gap-1 hover:text-green-600 transition-colors ${
                        retweeted ? 'text-green-600 font-bold' : ''
                      }`}
                    >
                      <Repeat2 className="w-3.5 h-3.5" />
                      <span>{retweeted ? 64 : 63}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
