import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Download,
  Share2,
  Users,
  BookOpen,
  Building2,
  FileText,
  MessageSquare,
  ShieldCheck,
  Phone,
  Mail,
  X,
  CreditCard,
  QrCode,
  Lock,
  Printer,
  CheckCheck,
  HelpCircle,
  Coffee,
  Utensils,
  Lightbulb,
  Layers,
  GraduationCap
} from 'lucide-react';

interface WomenEntrepreneur1DayPageProps {
  onMemberClick?: (type: 'become' | 'members' | 'employee') => void;
}

export const WomenEntrepreneur1DayPage: React.FC<WomenEntrepreneur1DayPageProps> = () => {
  // Pass Selection State (2 Passes: Delegate ₹3,000 & VIP ₹5,000)
  const [selectedPassTier, setSelectedPassTier] = useState<'delegate' | 'vip'>('delegate');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<'details' | 'payment' | 'success'>('details');

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    age: '',
    occupation: 'Entrepreneur',
    hasBusiness: 'Planning to start',
    expectations: '',
    quantity: 1,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'neft'>('upi');
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const passes = [
    {
      id: 'delegate',
      name: 'Delegate Pass',
      price: 3000,
      gstPercentage: 18,
      recommended: true,
      badge: 'STANDARD PASS',
      tagline: 'Full 1-day action workshop at Pillai University campus with personal Scheme Snapshot & application clinic.',
      seatsLeft: 25,
      benefits: [
        'Full 1-Day Access to All 4 Core Sessions & Application Clinic',
        'Personal 1-Page Pre-Drafted Scheme Eligibility Snapshot (Refined 1-on-1)',
        'Hands-On Guided Support to Start Real Scheme Application (Stand-Up India / Udyogini / PMEGP)',
        'In-House Prepared Breakfast, Hot Buffet Lunch & Afternoon High Tea Included',
        'Official Program Certificate of Completion',
        'Entry into Dedicated Cohort WhatsApp Support Group',
      ],
    },
    {
      id: 'vip',
      name: 'VIP Pass',
      price: 5000,
      gstPercentage: 18,
      badge: 'VIP ACCESS',
      tagline: 'Includes full workshop, priority front seating, 1-on-1 mentorship review, and expedited clinic advisory.',
      seatsLeft: 10,
      benefits: [
        'All Delegate Pass Privileges Included',
        'Priority Front-Row Executive Seating in Workshop & Application Clinic',
        '1-on-1 Dedicated DPR & Loan Proposal Pre-Screening Review',
        'Direct Business Networking Table with Pragati Tayde & Keynote Mentors',
        'Official Program Certificate of Completion with VIP Distinction',
        'Priority Facilitated Sourcing & Buyer Introduction Channels',
      ],
    },
  ];

  const currentPass = passes.find((p) => p.id === selectedPassTier) || passes[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookPass = (passId: 'delegate' | 'vip') => {
    setSelectedPassTier(passId);
    setCheckoutStep('details');
    setIsCheckoutOpen(true);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10)
      errors.mobileNumber = 'Valid 10-digit mobile number is required';
    if (!formData.emailAddress.trim() || !formData.emailAddress.includes('@'))
      errors.emailAddress = 'Valid email address is required';
    if (!formData.age.trim()) errors.age = 'Age is required';
    if (!formData.expectations.trim())
      errors.expectations = 'Please share what you expect from this program';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const loadRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    if (!validateForm()) return;

    setIsProcessingPayment(true);

    try {
      // 1. Prepare registration payload for backend
      const payload = {
        name: formData.fullName,
        mob: formData.mobileNumber,
        email: formData.emailAddress,
        age: formData.age,
        occupation: formData.occupation,
        do_you_currently_have_a_business: formData.hasBusiness,
        what_do_you_expect: formData.expectations,
        pass_type: selectedPassTier === 'vip' ? 'vip_pass' : 'delegate_pass',
        Event_name: 'Women Entrepreneurship Growth Program',
        event_name: 'Women Entrepreneurship Growth Program',
        amount: totalPayable,
      };

      // 2. Call backend POST /event/register-user
      const backendBase = (
        import.meta.env.VITE_BACKEND_URL || 'https://vusfback.vercel.app'
      ).replace(/\/+$/, '');
      const registerEndpoints = [
        `${backendBase}/event/register-user`,
        '/event/register-user',
      ];

      let res: Response | null = null;
      let lastErr: any = null;

      for (const ep of registerEndpoints) {
        try {
          const attempt = await fetch(ep, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          if (attempt.ok) {
            res = attempt;
            break;
          }
          // If returned 4xx/5xx from server, keep response for error extraction
          res = attempt;
        } catch (fetchErr) {
          lastErr = fetchErr;
        }
      }

      if (!res) {
        throw new Error(lastErr?.message || `Unable to reach registration server (${backendBase}). Please check backend connection.`);
      }

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.detail || errorData?.message || `Server returned error status ${res.status}`);
      }

      const resJson = await res.json();

      // Check success flag from backend
      if (resJson.success === false) {
        throw new Error(resJson.message || 'Payment Creation Failed');
      }

      // Extract order data from resJson.data or root
      const orderData = resJson.data || resJson;

      // 3. Load Razorpay Checkout SDK
      const razorpayReady = await loadRazorpay();
      if (!razorpayReady) {
        throw new Error('Could not load Razorpay payment gateway. Please check your internet connection.');
      }

      const razorpayOrderId =
        orderData.order_id ||
        orderData.orderId ||
        orderData.id ||
        resJson.order_id ||
        (orderData.order && orderData.order.id);

      const razorpayKey =
        orderData.key ||
        orderData.key_id ||
        orderData.razorpay_key ||
        orderData.razorpayKey ||
        resJson.key ||
        resJson.key_id ||
        (import.meta as any).env?.VITE_RAZORPAY_KEY_ID;

      if (!razorpayKey) {
        throw new Error(
          'Razorpay Key ID missing. Please return "key": "rzp_test_..." in your backend /event/register-user response or set VITE_RAZORPAY_KEY_ID in .env.'
        );
      }

      // Razorpay expects amount in paise (1 INR = 100 paise). If backend sent ₹3540, convert to 354000.
      const rawAmount = orderData.amount || totalPayable;
      const razorpayAmount = rawAmount < 10000 ? rawAmount * 100 : rawAmount;

      // 4. Open Razorpay Checkout Dialog
      const options: any = {
        key: razorpayKey,
        amount: razorpayAmount,
        currency: orderData.currency || 'INR',
        name: 'Vishwa Udyam Sahayta Foundation',
        description: `Pass: ${currentPass.name} - Women Entrepreneurship Program`,
        image: '/banner/women-enter-growth-prg1da.jpeg',
        order_id: razorpayOrderId,
        prefill: {
          name: formData.fullName,
          email: formData.emailAddress,
          contact: formData.mobileNumber,
        },
        notes: {
          age: formData.age,
          occupation: formData.occupation,
          has_business: formData.hasBusiness,
          expectations: formData.expectations,
          pass: currentPass.name,
        },
        theme: {
          color: '#083344',
        },
        handler: async function (paymentResponse: any) {
          setIsProcessingPayment(true);
          try {
            // 5. Call backend POST /payment/verify-payment
            const verifyPayload = {
              razorpay_payment_id: paymentResponse.razorpay_payment_id,
              razorpay_order_id: paymentResponse.razorpay_order_id,
              razorpay_signature: paymentResponse.razorpay_signature,
            };

            const verifyEndpoints = [
              `${backendBase}/payment/verify-payment`,
              '/payment/verify-payment',
            ];

            let vres: Response | null = null;
            for (const ep of verifyEndpoints) {
              try {
                const attempt = await fetch(ep, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
                  body: JSON.stringify(verifyPayload),
                });
                if (attempt.ok) {
                  vres = attempt;
                  break;
                }
                vres = attempt;
              } catch (vErr) {
                // Continue to next endpoint
              }
            }

            if (vres) {
              const vData = await vres.json().catch(() => null);
              if (vData && vData.success === false) {
                throw new Error(vData.message || 'Invalid payment signature.');
              }
            }

            setConfirmedOrderId(
              paymentResponse.razorpay_payment_id ||
              paymentResponse.razorpay_order_id ||
              ('VUSF-WGP-' + Math.floor(100000 + Math.random() * 900000))
            );
            setIsProcessingPayment(false);
            setCheckoutStep('success');
          } catch (verifyErr: any) {
            console.error('Payment verification error:', verifyErr);
            setApiError(verifyErr?.message || 'Payment signature verification failed.');
            setIsProcessingPayment(false);
          }
        },
        modal: {
          ondismiss: function () {
            setIsProcessingPayment(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (failRes: any) {
        setApiError(failRes.error?.description || 'Payment transaction failed or was declined.');
        setIsProcessingPayment(false);
      });
      rzp.open();

    } catch (err: any) {
      console.error('Registration error:', err);
      const backendHint = (
        import.meta.env.VITE_BACKEND_URL || 'https://vusfback.vercel.app'
      ).replace(/\/+$/, '');
      setApiError(err.message || `Failed to connect to backend at ${backendHint}. Please ensure the backend server is running.`);
      setIsProcessingPayment(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const basePrice = currentPass.price * formData.quantity;
  const gstAmount = Math.round((basePrice * 18) / 100);
  const totalPayable = basePrice + gstAmount;

  return (
    <div className="min-h-screen bg-[#060c16] text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* 1. TOP BREADCRUMB & STICKY SUB-NAV */}
      <div className="bg-[#091424] border-b border-slate-800/80 sticky top-0 z-30 shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/events" className="hover:text-amber-400 transition-colors">Events &amp; Summits</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold truncate">Women Entrepreneurship 1-Day Program</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
            <button
              onClick={() => scrollToSection('passes-section')}
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold px-4 py-1.5 rounded-lg text-xs shadow-md shadow-orange-950/50 cursor-pointer"
            >
              Book Pass (₹3,000)
            </button>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#0a182c] via-[#081220] to-[#060c16] border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none -ml-40 -mb-40" />

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Headlines & Key Coordinates */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-500/40 text-amber-300 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>1-DAY WORKSHOP • REGISTRATION OPEN</span>
              </span>
              <span className="bg-slate-800/90 text-cyan-300 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-cyan-500/30">
                PILLAI UNIVERSITY CAMPUS, NAVI MUMBAI
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Women Entrepreneurship <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Growth Program
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              From idea &amp; informal business to registered enterprise, government scheme funding &amp; market connect. A practical, jargon-free 1-day action workshop designed for aspiring first-time founders and women running informal or home-based businesses to formalise, unlock bank credit, and approach buyers.
            </p>

            {/* Coordinates Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 sm:p-5 bg-[#0b1626]/90 border border-slate-800 rounded-2xl backdrop-blur-md shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Date &amp; Schedule</div>
                  <div className="text-sm font-extrabold text-white">October 10, 2026</div>
                  <div className="text-xs text-amber-400">Saturday (Full 1-Day Program)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Timing &amp; Meals</div>
                  <div className="text-sm font-extrabold text-white">09:30 AM – 05:00 PM</div>
                  <div className="text-xs text-slate-400">Includes In-House Breakfast, Lunch &amp; Tea</div>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-start gap-3 pt-3 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Venue &amp; Location</div>
                  <div className="text-sm font-extrabold text-white">Pillai University, Panvel</div>
                  <div className="text-xs text-slate-300">
                    Dr. K. M. Vasudevan Pillai Campus, Sector 16, New Panvel, Navi Mumbai, Maharashtra 410206
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => scrollToSection('passes-section')}
                  className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-base font-black px-8 py-4 rounded-xl shadow-xl shadow-orange-950/70 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>REGISTER NOW (₹3,000 + GST)</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href="https://wa.me/919167845801?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20the%20Women%20Entrepreneurship%201-Day%20Program%20at%20Pillai%20University."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 px-5 py-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Coordinator</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400 pt-1">
                <div className="flex items-center gap-1 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>GOV SCHEMES Eligibility Snapshot</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1 text-slate-300">
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Pillai University On-Campus Training</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Cohort WhatsApp Group</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Banner Visual & Clean Register Button */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl group">
              <img
                src="/banner/women-enter-growth-prg1da.jpeg"
                alt="Women Entrepreneurship 1-Day Program"
                className="w-full h-auto object-contain rounded-2xl group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow-lg">
                <Building2 className="w-3.5 h-3.5 text-orange-400" />
                <span>Pillai University Campus Venue</span>
              </div>
            </div>

            {/* Single Prominent Register Seat Button */}
            <div className="pt-1">
              <button
                onClick={() => scrollToSection('passes-section')}
                className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-base font-black py-4 px-6 rounded-2xl shadow-xl shadow-orange-950/70 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REGISTER SEAT NOW →</span>
              </button>
            </div>

            <div className="p-4 bg-[#0b1626] rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-light">
              <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Core Motivation &amp; Workshop Mission</span>
              </div>
              <p>
                Designed to help women entrepreneurs formalise their existing income activities, access collateral-free credit &amp; grants, and gain the confidence and paperwork needed to be taken seriously as registered business owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY STATS & IMMEDIATE TAKEAWAYS */}
      <section className="py-10 px-4 sm:px-6 bg-[#081220] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">1 Full Day</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Action Workshop</div>
            <div className="text-[11px] text-slate-400">09:30 AM to 05:00 PM at Pillai University, Panvel</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">GOV SCHEMES</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">National &amp; State Schemes</div>
            <div className="text-[11px] text-slate-400">Stand-Up India, Udyogini, TREAD, PMEGP</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">Application</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Started in Hand</div>
            <div className="text-[11px] text-slate-400">Guided hands-on application clinic</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-orange-400">Pillai University</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">On-Campus Venue</div>
            <div className="text-[11px] text-slate-400">Dr. K. M. Vasudevan Pillai Campus, Panvel</div>
          </div>
        </div>
      </section>

      {/* 4. PARTICIPANT PROFILE: WHO IS THIS PROGRAM FOR? */}
      <section className="py-16 px-4 sm:px-6 bg-[#060c16] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>PARTICIPANT PROFILE &amp; SECTOR SCOPE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Designed For Women At All Stages of Enterprise
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Whether you have a fresh idea or an informal home business, this program meets you where you are and provides the exact paperwork, banking, and scheme pathways to grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-orange-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Aspiring First-Time Founders</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Women with pre-launch ideas or nascent concepts seeking clarity on Udyam registration, business structures, bank accounts, and early grants without intimidating jargon.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-amber-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Food, Catering &amp; Home Kitchens</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Home caterers, cloud kitchens, and organic food producers looking to access the <strong>Annapurna Scheme</strong>, FSSAI compliance, and commercial kitchen machinery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-cyan-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Boutique, Retail &amp; Craft Makers</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Apparel designers, tailors, handicrafts, cosmetic creators, and <strong>Mahila Coir Yojana</strong> producers seeking up to 75% equipment subsidies and retail seller linkages.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-emerald-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">SHGs &amp; Small-Scale Services</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Self-Help Group (SHG) units, beauty salons, tutors, event planners, and trade enterprises seeking <strong>TREAD (30% grant)</strong> and <strong>Stand-Up India</strong> credit.
              </p>
            </div>
          </div>

          {/* Multilingual Reassurance Bar */}
          <div className="p-5 bg-gradient-to-r from-[#0b1a30] via-[#0d213f] to-[#0b1a30] rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-amber-400 shrink-0" />
              <div className="text-xs text-slate-200">
                <strong className="text-white">Accessible Multilingual Instruction:</strong> Sessions run in an encouraging, plain-language mix of <strong>Hindi, English, and Marathi/Regional Language</strong> decided at registration rather than assumed.
              </div>
            </div>
            <div className="text-xs text-amber-400 font-bold shrink-0">
              Zero Prior Banking Knowledge Assumed
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONCRETE LEARNING OBJECTIVES */}
      <section className="py-16 px-4 sm:px-6 bg-[#081220] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <CheckCheck className="w-3.5 h-3.5" />
              <span>REALISTIC SINGLE-DAY DELIVERABLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              What You Will Walk Away With By 04:45 PM
            </h2>
            <p className="text-sm text-slate-400 font-light">
              This program is intentionally scoped to what a single day can realistically deliver: actionable paperwork in hand, not just passive lectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0b172a] border border-slate-800 space-y-3">
              <div className="text-2xl font-black text-orange-400">01</div>
              <h3 className="text-base font-bold text-white">GOV SCHEMES Snapshot</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Leave with a personal 1-page summary naming the government schemes you realistically qualify for based on your sector and stage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b172a] border border-slate-800 space-y-3">
              <div className="text-2xl font-black text-amber-400">02</div>
              <h3 className="text-base font-bold text-white">Concrete Registration Steps</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Master Udyam registration, choose your business legal entity (Proprietorship, LLP, Pvt Ltd), and open a business bank account.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b172a] border border-slate-800 space-y-3">
              <div className="text-2xl font-black text-emerald-400">03</div>
              <h3 className="text-base font-bold text-white">Started Application in Hand</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Begin an actual scheme application (Stand-Up India / Udyogini / PMEGP / Mudra) with guided facilitator support during Session 3.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b172a] border border-slate-800 space-y-3">
              <div className="text-2xl font-black text-cyan-400">04</div>
              <h3 className="text-base font-bold text-white">Direct Sourcing &amp; Peer Network</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Leave with pitching frameworks to approach vendors/buyers, peer contacts, and instant entry into the cohort WhatsApp support group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OFFICIAL PROGRAM SCHEDULE & CURRICULUM */}
      <section className="py-24 px-4 sm:px-6 bg-[#060c16] border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 text-amber-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" />
              <span>OFFICIAL PROGRAM SCHEDULE &amp; CURRICULUM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Women Entrepreneurship Growth Program
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              A comprehensive, 1-day executive schedule structured from 09:30 AM to 05:00 PM at Pillai University campus, designed for immediate implementation.
            </p>
          </div>

          {/* Continuous Editorial Timeline */}
          <div className="relative pl-6 sm:pl-44">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-[11px] sm:left-[136px] top-3 bottom-6 w-px bg-gradient-to-b from-orange-500/80 via-teal-500/50 to-slate-800" />

            <div className="space-y-12">
              {/* Item 1: 09:30 AM - Registration & Breakfast */}
              <div className="relative group">
                {/* Node Marker */}
                <div className="absolute -left-[20px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#060c16] border-2 border-amber-400/80 group-hover:scale-125 transition-transform" />

                {/* Time Display */}
                <div className="sm:absolute sm:-left-44 sm:top-0.5 text-xs font-mono font-bold tracking-wider text-amber-400 sm:text-right sm:w-28 mb-1.5 sm:mb-0">
                  09:30 AM
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Registration &amp; Breakfast
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                      Registration
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    Delegate check-in, welcome kit distribution, in-house hot breakfast reception, and preliminary intake for your personalised Scheme Eligibility Snapshot.
                  </p>
                </div>

                <div className="mt-8 border-b border-slate-800/60" />
              </div>

              {/* Item 2: 10:00 AM - Session 1 */}
              <div className="relative group">
                {/* Node Marker */}
                <div className="absolute -left-[20px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#060c16] border-2 border-orange-500 group-hover:scale-125 transition-transform" />

                {/* Time */}
                <div className="sm:absolute sm:-left-44 sm:top-0.5 text-xs font-mono font-bold tracking-wider text-orange-400 sm:text-right sm:w-28 mb-1.5 sm:mb-0">
                  10:00 AM
                </div>

                {/* Content */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Session 1: Startup Process and Mindset
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-300 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-md">
                      Session 1
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    Demystifying official enterprise formalities, legal structures, and breaking psychological barriers for women entrepreneurs.
                  </p>

                  {/* Key Activities */}
                  <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-400">
                    <div className="flex items-baseline gap-2">
                      <span className="text-orange-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Business Registration &amp; Setup:</strong> Demystifying Udyam, GST, and licensing.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-orange-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Legal Entity Choice:</strong> Proprietorship, Partnership, LLP, or Pvt Ltd.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-orange-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Overcoming Barriers:</strong> Institutional hesitation and mindset shifts.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-orange-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">High-Growth Opportunities:</strong> Viable women-led venture models.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-b border-slate-800/60" />
              </div>

              {/* Item 3: 11:00 AM - Session 2 */}
              <div className="relative group">
                {/* Node Marker */}
                <div className="absolute -left-[20px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#060c16] border-2 border-teal-400 group-hover:scale-125 transition-transform" />

                {/* Time */}
                <div className="sm:absolute sm:-left-44 sm:top-0.5 text-xs font-mono font-bold tracking-wider text-teal-400 sm:text-right sm:w-28 mb-1.5 sm:mb-0">
                  11:00 AM
                </div>

                {/* Content */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Session 2: Finance &amp; Schemes Deep Dive
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded-md">
                      Session 2
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    Comprehensive breakdown of government loans, capital subsidies, interest subvention, and practical unit economics.
                  </p>

                  {/* Key Activities */}
                  <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-400">
                    <div className="flex items-baseline gap-2">
                      <span className="text-teal-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Stand-Up India:</strong> ₹10L to ₹1Cr collateral-free bank credit.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-teal-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Udyogini &amp; PMEGP:</strong> Subsidised capital and low-interest funding.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-teal-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">TREAD &amp; Mahila Udyam Nidhi:</strong> SIDBI equity support &amp; 30% grants.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-teal-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Costing &amp; Bookkeeping:</strong> Unit margins, cash management &amp; pricing.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-b border-slate-800/60" />
              </div>

              {/* Item 4: 01:00 PM - Lunch Break */}
              <div className="relative group">
                {/* Node Marker */}
                <div className="absolute -left-[20px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#060c16] border-2 border-slate-500 group-hover:scale-125 transition-transform" />

                {/* Time */}
                <div className="sm:absolute sm:-left-44 sm:top-0.5 text-xs font-mono font-bold tracking-wider text-slate-400 sm:text-right sm:w-28 mb-1.5 sm:mb-0">
                  01:00 PM
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Lunch Break
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 bg-slate-800/70 border border-slate-700/60 px-2 py-0.5 rounded-md">
                      Break
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    Fresh in-house hot buffet lunch at Pillai Campus dining hall, followed by informal peer cohort networking.
                  </p>
                </div>

                <div className="mt-8 border-b border-slate-800/60" />
              </div>

              {/* Item 5: 02:00 PM - Session 3: Hands-on Application Clinic */}
              <div className="relative group">
                {/* Node Marker */}
                <div className="absolute -left-[20px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#060c16] border-2 border-orange-400 group-hover:scale-125 transition-transform ring-4 ring-orange-500/15" />

                {/* Time */}
                <div className="sm:absolute sm:-left-44 sm:top-0.5 text-xs font-mono font-bold tracking-wider text-orange-400 sm:text-right sm:w-28 mb-1.5 sm:mb-0">
                  02:00 PM
                </div>

                {/* Content */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Session 3: Hands-on Application Clinic
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-orange-500/15 border border-orange-500/30 px-2 py-0.5 rounded-md">
                      Session 3 &bull; Core Clinic
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    Individual hands-on clinic where your venture is assessed against real eligibility benchmarks and application drafting begins.
                  </p>

                  {/* Key Activities */}
                  <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-400">
                    <div className="flex items-baseline gap-2">
                      <span className="text-orange-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Eligibility Matching:</strong> Pinpointing loan/grant criteria for your profile.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-orange-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Scheme Snapshot Dossier:</strong> Drafting your personalized 1-page report.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-orange-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Paperwork &amp; KYC Audit:</strong> Reviewing project reports, balance &amp; docs.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-orange-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Portal Submission:</strong> Direct guidance to initiate official government filing.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-b border-slate-800/60" />
              </div>

              {/* Item 6: 03:15 PM - Session 4: Sourcing & Market Connect */}
              <div className="relative group">
                {/* Node Marker */}
                <div className="absolute -left-[20px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#060c16] border-2 border-teal-400 group-hover:scale-125 transition-transform" />

                {/* Time */}
                <div className="sm:absolute sm:-left-44 sm:top-0.5 text-xs font-mono font-bold tracking-wider text-teal-400 sm:text-right sm:w-28 mb-1.5 sm:mb-0">
                  03:15 PM
                </div>

                {/* Content */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Session 4: Sourcing &amp; Market Connect
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded-md">
                      Session 4
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    Building sustainable buyer channels, B2B enterprise procurement access, and corporate distribution linkages.
                  </p>

                  {/* Key Activities */}
                  <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-400">
                    <div className="flex items-baseline gap-2">
                      <span className="text-teal-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Buyer &amp; Distributor Reach:</strong> Connecting with retail and vendor networks.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-teal-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Pitching &amp; Proposals:</strong> Structuring enterprise pricing sheets and contracts.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-teal-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">Quality &amp; Standards:</strong> Packaging, barcoding, and batch compliance.</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-teal-400 text-sm leading-none">&bull;</span>
                      <span><strong className="text-slate-200">GeM &amp; Institutional Supply:</strong> Accessing public procurement channels.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-b border-slate-800/60" />
              </div>

              {/* Item 7: 04:30 PM - Closing: Founder Story & Q&A */}
              <div className="relative group">
                {/* Node Marker */}
                <div className="absolute -left-[20px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#060c16] border-2 border-amber-400 group-hover:scale-125 transition-transform" />

                {/* Time */}
                <div className="sm:absolute sm:-left-44 sm:top-0.5 text-xs font-mono font-bold tracking-wider text-amber-400 sm:text-right sm:w-28 mb-1.5 sm:mb-0">
                  04:30 PM
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Closing: Founder Story &amp; Q&amp;A
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                      Keynote &bull; Q&amp;A
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    Real-world scaling insights from an accomplished woman founder, followed by an open-floor Q&amp;A and strategic guidance for next steps.
                  </p>
                </div>

                <div className="mt-8 border-b border-slate-800/60" />
              </div>

              {/* Item 8: 05:00 PM - Feedback, Certificate & Networking */}
              <div className="relative group">
                {/* Node Marker */}
                <div className="absolute -left-[20px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#060c16] border-2 border-emerald-400 group-hover:scale-125 transition-transform" />

                {/* Time */}
                <div className="sm:absolute sm:-left-44 sm:top-0.5 text-xs font-mono font-bold tracking-wider text-emerald-400 sm:text-right sm:w-28 mb-1.5 sm:mb-0">
                  05:00 PM
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Feedback, Certificate &amp; Networking
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                      Valedictory
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    Distribution of official Certificates of Completion, structured peer networking over high tea, cohort WhatsApp induction, and enrollment pathways for advanced programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRAINER & FACILITATOR */}
      <section className="py-16 px-4 sm:px-6 bg-[#060c16] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>EXPERT FACILITATION &amp; UNIVERSITY LEADERSHIP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Master Trainers &amp; Keynote Mentors
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Led by specialist practitioners and university leaders experienced in breaking down complex scheme mechanics into plain, actionable language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            <div className="bg-[#0b1626] rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-4">
                <img
                  src="/members/pragati.jpeg"
                  alt="Pragati Tayde"
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/60 shadow-md"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Pragati Tayde</h3>
                  <div className="text-xs text-amber-400 font-semibold">President &amp; Founder / Master Trainer</div>
                  <div className="text-[11px] text-slate-400">Vishwa Udyam Sahayta Foundation</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed border-t border-slate-800 pt-3">
                Specializes in teaching scheme mechanics, Udyam compliance, Stand-Up India, and bank loan approvals in plain language across mixed literacy and language levels. Personally guides the Session 3 Hands-On Clinic.
              </p>
            </div>

            <div className="bg-[#0b1626] rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/20 border-2 border-amber-500/60 flex items-center justify-center text-amber-300 font-black text-xl shadow-md">
                  UC
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Upasana Chaudhari</h3>
                  <div className="text-xs text-amber-400 font-semibold">Keynote Mentor &amp; Leadership</div>
                  <div className="text-[11px] text-cyan-300 font-bold">Pillai University</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed border-t border-slate-800 pt-3">
                Academic and innovation leader at Pillai University, championing grassroots women entrepreneurship, institutional incubation linkages, and enterprise development across Maharashtra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PASSES / REGISTRATION PRICING (2 PASSES: Delegate ₹3,000 & VIP ₹5,000) */}
      <section id="passes-section" className="py-20 px-4 sm:px-6 bg-[#070d18] border-b border-slate-800 scroll-mt-12">
        <div className="max-w-[1100px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <CreditCard className="w-3.5 h-3.5" />
              <span>OFFICIAL REGISTRATION TIERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Select Your Program Pass
            </h2>
            <p className="text-sm text-slate-400 font-light">
              All passes include Pillai University on-campus entry, in-house breakfast, hot buffet lunch &amp; high tea, 1-page Scheme Snapshot, application clinic, and certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {passes.map((pass) => {
              const isRec = pass.recommended;
              const passGst = Math.round((pass.price * (pass.gstPercentage || 18)) / 100);
              const passTotal = pass.price + passGst;

              return (
                <div
                  key={pass.id}
                  className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                    isRec
                      ? 'bg-gradient-to-b from-[#14233c] to-[#0b172a] border-2 border-orange-500 ring-4 ring-orange-500/20 transform md:-translate-y-2'
                      : 'bg-[#0b1626] border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {pass.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                      {pass.badge}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-black text-white">{pass.name}</h3>
                      <p className="text-xs text-slate-300 font-light leading-relaxed min-h-[36px]">
                        {pass.tagline}
                      </p>
                    </div>

                    <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-1">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs text-slate-400 font-bold">INR</span>
                        <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                          ₹{pass.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-amber-400 font-bold">+ 18% GST</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Total Payable: <strong className="text-slate-200">₹{passTotal.toLocaleString('en-IN')}</strong> (incl. ₹{passGst.toLocaleString('en-IN')} GST)
                      </div>
                      <div className="text-[11px] text-orange-400 font-semibold pt-1">
                        Limited seats available — contact us to check availability
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Pass Benefits:</div>
                      <ul className="space-y-2.5 text-xs text-slate-200">
                        {pass.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => handleBookPass(pass.id as 'delegate' | 'vip')}
                      className={`w-full py-4 px-6 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                        isRec
                          ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-orange-950/70'
                          : 'bg-slate-800 hover:bg-orange-600 text-white hover:shadow-orange-950/40'
                      }`}
                    >
                      <span>BOOK {pass.name.toUpperCase()}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-[10px] text-center text-slate-500 mt-2 font-medium">
                      Instant Confirmation &bull; In-House Breakfast &amp; Lunch Included
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FAQS */}
      <section className="py-16 px-4 sm:px-6 bg-[#060c16] border-b border-slate-800">
        <div className="max-w-[1000px] mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Common Questions Answered</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What language will the 1-day program be conducted in?',
                a: 'Sessions run in an accessible, practical mix of Hindi, English, and Marathi/Regional language based on participant comfort. We avoid heavy corporate jargon to ensure everyone understands the schemes clearly.',
              },
              {
                q: 'Do I need to have a registered company before attending?',
                a: 'Not at all! The program is specifically built for women at idea stage or running informal home businesses. Session 1 walks you step-by-step through Udyam registration, choosing the right legal structure, and opening a bank account.',
              },
              {
                q: 'What is the Personal GOV SCHEMES Snapshot?',
                a: 'Based on basic profile details (sector, stage, income) collected at registration, our facilitators pre-draft a 1-page assessment naming the government schemes you qualify for, which is refined 1-on-1 with you during Session 3.',
              },
              {
                q: 'Where is the venue and is food provided?',
                a: 'The program is hosted on-campus at Pillai University (Dr. K. M. Vasudevan Pillai Campus, Sector 16, New Panvel, Navi Mumbai). Full in-house prepared breakfast, hot buffet lunch, and afternoon tea are included with your pass.',
              },
              {
                q: 'How does the post-event WhatsApp support group work?',
                a: 'All attendees are added to a dedicated cohort WhatsApp group before leaving. Facilitators answer follow-up questions, share scheme updates, and keep the cohort connected for ongoing peer learning.',
              },
            ].map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="bg-[#0b1626] border border-slate-800 rounded-2xl overflow-hidden transition-colors">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-amber-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-slate-800/80 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL BOTTOM CTA & DIRECT HELPDESK */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-t from-[#0b1a30] via-[#070d18] to-[#070d18] border-b border-slate-800 text-center space-y-8">
        <div className="max-w-[1100px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>LIMITED TO 15–20 PARTICIPANTS PER BATCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Formalise &amp; Scale Your Business?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto">
            Take the first concrete step toward registered business ownership, government scheme credit, and institutional buyer connections.
          </p>

          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-amber-400 font-extrabold">
            <span>Saturday, October 10, 2026</span>
            <span>&bull;</span>
            <span>Pillai University Campus, Navi Mumbai</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('passes-section')}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-base px-10 py-4 rounded-xl shadow-2xl shadow-orange-950/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>REGISTER YOUR SEAT NOW →</span>
            </button>

            <a
              href="https://wa.me/919167845801?text=Hello%2C%20I%20have%20questions%20about%20registering%20for%20the%20Women%20Entrepreneurship%201-Day%20Program."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat with Coordinator on WhatsApp</span>
            </a>
          </div>

          {/* Contact Details Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-slate-400 border-t border-slate-800/80 max-w-lg mx-auto">
            <a href="tel:+919167845801" className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-orange-400" />
              <span>+91 9167845801</span>
            </a>
            <a href="mailto:info@namasteindiagroup.org" className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>info@namasteindiagroup.org</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. CHECKOUT MODAL (Delegate ₹3,000 / VIP ₹5,000) */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in">
          <div className={`w-full max-w-2xl rounded-[14px] my-6 relative flex flex-col max-h-[92vh] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.18)] transition-all ${checkoutStep === 'details' ? 'bg-white text-slate-800 border border-gray-200' : 'bg-[#0b172a] text-slate-100 border border-slate-700'}`}>
            
            {checkoutStep === 'success' ? (
              <div className="p-8 sm:p-12 text-center relative">
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCheck className="w-8 h-8" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#083344] tracking-tight">
                  Registration Successful
                </h3>

                <p className="text-sm text-slate-600 mt-2">
                  Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your registration has been confirmed successfully.
                </p>

                <div className="pt-6">
                  <button
                    onClick={() => setIsCheckoutOpen(false)}
                    className="py-3 px-8 rounded-lg bg-[#0f4c5c] hover:bg-[#0c3c49] text-white font-bold text-sm tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Close Button */}
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors z-10 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="pt-7 px-8 pb-3 text-center border-b border-gray-100">
                  <h3 className="text-2xl font-bold text-[#083344] tracking-tight">
                    Complete Your Registration
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 font-normal">
                    You have selected:{' '}
                    <span className="font-bold text-[#083344]">
                      {currentPass.name} (INR {currentPass.price.toLocaleString('en-IN')})
                    </span>
                  </p>
                </div>

                {/* Form Body */}
                <div className="p-7 pt-5 overflow-y-auto flex-1">
                  <form onSubmit={handleProceedToPayment} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Row 1: Name & Mobile */}
                      <div>
                        <label className="block text-xs font-semibold text-[#083344] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ananya Deshmukh"
                          className="w-full text-sm px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-slate-800 placeholder-slate-400 focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] outline-none transition-all"
                        />
                        {formErrors.fullName && <p className="text-[11px] text-red-500 mt-1">{formErrors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#083344] mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                          placeholder="10-digit mobile number"
                          className="w-full text-sm px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-slate-800 placeholder-slate-400 focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] outline-none transition-all"
                        />
                        {formErrors.mobileNumber && <p className="text-[11px] text-red-500 mt-1">{formErrors.mobileNumber}</p>}
                      </div>

                      {/* Row 2: Email & Age */}
                      <div>
                        <label className="block text-xs font-semibold text-[#083344] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.emailAddress}
                          onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                          placeholder="name@gmail.com"
                          className="w-full text-sm px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-slate-800 placeholder-slate-400 focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] outline-none transition-all"
                        />
                        {formErrors.emailAddress && <p className="text-[11px] text-red-500 mt-1">{formErrors.emailAddress}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#083344] mb-1">
                          Age *
                        </label>
                        <input
                          type="number"
                          min="16"
                          max="100"
                          required
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          placeholder="e.g. 28"
                          className="w-full text-sm px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-slate-800 placeholder-slate-400 focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] outline-none transition-all"
                        />
                        {formErrors.age && <p className="text-[11px] text-red-500 mt-1">{formErrors.age}</p>}
                      </div>

                      {/* Row 3: Occupation & Do you currently have a business */}
                      <div>
                        <label className="block text-xs font-semibold text-[#083344] mb-1">
                          Occupation *
                        </label>
                        <select
                          value={formData.occupation}
                          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                          className="w-full text-sm px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-slate-800 focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] outline-none transition-all cursor-pointer"
                        >
                          <option value="Student">Student</option>
                          <option value="Working Professional">Working Professional</option>
                          <option value="Entrepreneur">Entrepreneur</option>
                          <option value="Homemaker">Homemaker</option>
                          <option value="Farmer">Farmer</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#083344] mb-1">
                          Do you currently have a business? *
                        </label>
                        <select
                          value={formData.hasBusiness}
                          onChange={(e) => setFormData({ ...formData, hasBusiness: e.target.value })}
                          className="w-full text-sm px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-slate-800 focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] outline-none transition-all cursor-pointer"
                        >
                          <option value="Planning to start">Planning to start</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      {/* Row 4: What do you expect from this program? (Textarea) */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-[#083344] mb-1">
                          What do you expect from this program? *
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={formData.expectations}
                          onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
                          placeholder="Share what you hope to learn or achieve from this program..."
                          className="w-full text-sm px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-slate-800 placeholder-slate-400 focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] outline-none transition-all resize-none"
                        />
                        {formErrors.expectations && <p className="text-[11px] text-red-500 mt-1">{formErrors.expectations}</p>}
                      </div>
                    </div>

                    {apiError && (
                      <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs leading-relaxed flex items-start gap-2">
                        <span className="font-bold text-red-800 shrink-0">Notice:</span>
                        <span>{apiError}</span>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isProcessingPayment}
                        className="w-full py-3.5 px-6 rounded-lg bg-[#d4af37] hover:bg-[#c39e2b] text-[#083344] font-bold text-sm tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isProcessingPayment ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-[#083344] border-t-transparent rounded-full animate-spin" />
                            <span>Connecting to Payment Gateway...</span>
                          </div>
                        ) : (
                          <span>PROCEED TO PAYMENT →</span>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
