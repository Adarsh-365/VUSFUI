import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Share2,
  Users,
  Building2,
  FileText,
  MessageSquare,
  ShieldCheck,
  CreditCard,
  Target,
  Globe2,
  Ship,
  TrendingUp,
  Award,
  ExternalLink,
  Check,
  Store,
  Layers,
  HelpCircle,
  X
} from 'lucide-react';

interface NaviMumbaiExportSummitPageProps {
  onMemberClick?: (type: 'become' | 'members' | 'employee') => void;
}

export const NaviMumbaiExportSummitPage: React.FC<NaviMumbaiExportSummitPageProps> = () => {
  // Pass Selection State
  const [selectedPassTier, setSelectedPassTier] = useState<'delegate' | 'vip' | 'exhibitor'>('delegate');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<'details' | 'payment' | 'success'>('details');

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    companyName: '',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    turnover: '₹50 lakh – ₹2 crore',
    businessSector: 'Manufacturing & Engineering',
    expectations: 'Connect with overseas buyers and customs specialists',
    quantity: 1,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const passes = [
    {
      id: 'delegate' as const,
      name: 'Trade Delegate Pass',
      price: 2499,
      gstPercentage: 18,
      recommended: false,
      badge: 'POPULAR CHOICE',
      tagline: 'Full-day access to all 6 technical sessions, 60+ exhibitor pavilions, and networking luncheon.',
      seatsLeft: 35,
      benefits: [
        'Access to All 6 Keynote & Technical Sessions (India Post, Customs, Japan, UAE, Nepal)',
        'Entry to 60+ Exhibitor Product Stalls & Innovation Pavilions',
        'Official 2026 Navi Mumbai Exporters Directory & Kit',
        'Lavish 3-Course Executive Luncheon & High Tea',
        'Access to General B2B Networking Lounge',
        'Official Summit Certificate of Participation',
      ],
    },
    {
      id: 'vip' as const,
      name: 'B2B Matchmaking VIP Pass',
      price: 5999,
      gstPercentage: 18,
      recommended: true,
      badge: 'MOST RECOMMENDED',
      tagline: 'Pre-scheduled one-on-one buyer meetings, VIP speaker access, and priority plenary seating.',
      seatsLeft: 12,
      benefits: [
        'All Trade Delegate Pass Privileges Included',
        'VIP Front-Row Seating & Direct Access to Speakers (Ajeet Sha, RAKEZ, etc.)',
        '3 Pre-Scheduled One-on-One Meetings with Verified Overseas Buyers & Trade Desks',
        'Company Profile Included in Summit Buyer-Seller Dossier',
        '3-Month Complimentary Access to VUSF Export Advisory Desk',
        'Official Certificate with VIP Delegation Honors',
      ],
    },
    {
      id: 'exhibitor' as const,
      name: '60+ Exhibitor Display Kiosk',
      price: 15000,
      gstPercentage: 18,
      recommended: false,
      badge: '60+ EXPO PAVILION',
      tagline: 'Dedicated 2m x 2m branded booth in the 60+ exhibitor pavilion to showcase export products.',
      seatsLeft: 6,
      benefits: [
        'Branded 2m x 2m Display Booth in the Main 60+ Exhibitor Foyer',
        '2 Full VIP Delegate Passes with Luncheon Included',
        'Company Logo on Main Summit Screen, Backdrops & Brochures',
        'Opportunity to Distribute Product Catalogs & Samples to 300+ Attendees',
        'Special Dignitary Mention during the Valedictory Session',
      ],
    },
  ];

  const currentPass = passes.find((p) => p.id === selectedPassTier) || passes[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookPass = (passId: 'delegate' | 'vip' | 'exhibitor') => {
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
    if (!formData.companyName.trim()) errors.companyName = 'Company / Enterprise name is required';

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
      const payload = {
        name: formData.fullName,
        mob: formData.mobileNumber,
        email: formData.emailAddress,
        company: formData.companyName,
        city: formData.city,
        state: formData.state,
        turnover: formData.turnover,
        sector: formData.businessSector,
        expectations: formData.expectations,
        pass_type: selectedPassTier,
        Event_name: 'Navi Mumbai Export Summit 2026',
        event_name: 'Navi Mumbai Export Summit 2026',
        amount: totalPayable,
      };

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
          res = attempt;
        } catch (fetchErr) {
          lastErr = fetchErr;
        }
      }

      if (!res) {
        throw new Error(lastErr?.message || `Unable to reach registration server (${backendBase}).`);
      }

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.detail || errorData?.message || `Server returned error status ${res.status}`);
      }

      const resJson = await res.json();
      if (resJson.success === false) {
        throw new Error(resJson.message || 'Payment Creation Failed');
      }

      const orderData = resJson.data || resJson;
      const razorpayReady = await loadRazorpay();
      if (!razorpayReady) {
        throw new Error('Could not load Razorpay payment gateway. Please check internet connection.');
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
        throw new Error('Razorpay Key missing. Please check payment gateway configuration.');
      }

      const options = {
        key: razorpayKey,
        amount: totalPayable * 100,
        currency: 'INR',
        name: 'Navi Mumbai Export Summit 2026',
        description: `${currentPass.name} - Fortune Select Exotica, Navi Mumbai / ITC Hotel`,
        image: '/banner/navi-mumbai-export-summit.jpeg',
        order_id: razorpayOrderId,
        prefill: {
          name: formData.fullName,
          email: formData.emailAddress,
          contact: formData.mobileNumber,
        },
        theme: {
          color: '#ea580c',
        },
        handler: async function (paymentResponse: any) {
          try {
            setConfirmedOrderId(
              paymentResponse.razorpay_payment_id ||
              paymentResponse.razorpay_order_id ||
              ('VUSF-NMES-' + Math.floor(100000 + Math.random() * 900000))
            );
            setIsProcessingPayment(false);
            setCheckoutStep('success');
          } catch (verifyErr: any) {
            setApiError(verifyErr?.message || 'Payment processing encountered an error.');
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
      setApiError(err.message || 'Registration failed. Please try again or reach out on WhatsApp.');
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

  // Topics & Speakers Data
  const topicsAndSpeakers = [
    {
      num: '1',
      topic: 'Upcoming Global Challenges and Opportunities: How Business Can Overcome International Issues and Smoothly Expand Overseas',
      shortTopic: 'Export Strategy Session',
      speaker: 'Ajeet Sha',
      role: 'International Trade Strategist & EXIM Mentor',
      org: 'Global Export-Import Council',
      badge: 'EXPORT STRATEGY',
      color: 'from-orange-500 to-red-600',
      desc: 'Actionable strategies on how businesses can overcome international bottlenecks, mitigate geopolitical & supply chain risks, and smoothly expand overseas.',
    },
    {
      num: '2',
      topic: 'Namaste India Group: Connecting Indian Business to the World Global',
      shortTopic: 'Organizer Keynote',
      speaker: 'Pragati Tayde',
      role: 'Founder & President',
      org: 'Namaste India Group',
      badge: 'ORGANIZER KEYNOTE',
      color: 'from-rose-500 to-amber-600',
      desc: 'Connecting Indian MSMEs, manufacturers, and innovative enterprises to global trade corridors, international procurement desks, and strategic overseas markets.',
    },
    {
      num: '3',
      topic: 'Exports Through Postal Channel – Opportunities and Solutions Offered by India Post',
      shortTopic: 'India Post Session',
      speaker: 'Shri Vipul Mandlesha',
      role: 'Export Head, Export Promotion Team, India Post',
      org: 'India Post (Dak Ghar Niryat Kendra)',
      badge: 'POSTAL EXPORTS',
      color: 'from-amber-500 to-orange-600',
      desc: 'Unlocking cross-border postal shipping channels, Dak Ghar Niryat Kendra (DNK) automated customs integration, and affordable global parcel logistics for exporters.',
    },
    {
      num: '4',
      topic: 'Various Incentives for Exporters, Duty Deferment Schemes of Govt. & Registrations for Speedy Clearances',
      shortTopic: 'Export Incentives & Customs',
      speaker: 'Suresh Kayakkool',
      role: 'Cost Reduction for Manufacturers, Exporters & Importers',
      org: 'Customs & Duty Deferment Advisory',
      badge: 'CUSTOMS & INCENTIVES',
      color: 'from-teal-500 to-emerald-600',
      desc: 'Cost reduction for manufacturers, exporters & importers: government duty deferment schemes, key exporter incentives, and regulatory registrations for speedy clearance.',
    },
    {
      num: '5',
      topic: 'Japan-India Business Connect – New-Age Manufacturing, Trade & Investment Opportunities',
      shortTopic: 'Bilateral Trade Session',
      speaker: 'Pravin Kurab',
      role: 'Bilateral Trade Advisor - Japan Corridor',
      org: 'Indo-Japan Trade & Economic Forum',
      badge: 'JAPAN CORRIDOR',
      color: 'from-blue-500 to-indigo-600',
      desc: 'Penetrating high-value Japanese manufacturing supply chains, meeting stringent quality benchmarks, and forging bilateral trade and investment agreements.',
    },
    {
      num: '6',
      topic: 'India-UAE: Turning Trade Connection into Global Opportunities',
      shortTopic: 'Middle East Trade Session',
      speaker: 'Rakez',
      role: 'Director of International Business Development',
      org: 'Ras Al Khaimah Economic Zone (RAKEZ), UAE',
      badge: 'UAE & MIDDLE EAST',
      color: 'from-yellow-500 to-amber-600',
      desc: 'Leveraging UAE trade infrastructure, 100% foreign ownership in RAKEZ free zone, zero personal tax, and scaling into Middle East, GCC, and European markets.',
    },
    {
      num: '7',
      topic: 'India & Nepal: Partners in Trade, Investment & Growth',
      shortTopic: 'Regional Trade Session',
      speaker: 'Pushkar Malla',
      role: 'Cross-Border Investment & Trade Director',
      org: 'Nepal-India Commerce & Industrial Forum',
      badge: 'NEPAL CORRIDOR',
      color: 'from-emerald-500 to-teal-700',
      desc: 'Bilateral trade treaties, zero-duty reciprocal concessions, land customs logistics, and mutual industrial investments between India and Nepal.',
    },
  ];

  // Schedule Timeline Data
  const scheduleData = [
    {
      time: '10:30 AM',
      endTime: '11:10 AM',
      activity: 'Opening Ceremony',
      sessionName: 'Welcome Address & Event Commencement',
      speaker: 'Delegate Registration & Opening Remarks',
      topic: 'Welcome Address, Event Commencement & Delegate Registration',
      type: 'inauguration',
      badge: 'COMMENCEMENT',
      color: 'border-orange-500 text-orange-400',
      description: 'Formal welcome address and official commencement of the Navi Mumbai Export Summit 2026. Delegate registration check-in and inaugural opening remarks.',
      bullets: [
        'Welcome Address & Event Commencement',
        'Delegate Registration & Opening Remarks',
        'Orientation to summit agenda & trade corridors',
      ],
    },
    {
      time: '11:10 AM',
      endTime: '11:50 AM',
      activity: 'Export Strategy Session',
      sessionName: 'Upcoming Global Challenges and Opportunities',
      speaker: 'Ajeet Sha',
      topic: 'Upcoming Global Challenges and Opportunities: How Business Can Overcome International Issues and Smoothly Expand Overseas',
      type: 'keynote',
      badge: 'STRATEGY SESSION',
      color: 'border-amber-400 text-amber-300',
      description: 'Actionable strategies by Ajeet Sha on how Indian businesses can overcome international issues, manage supply disruptions, and smoothly expand overseas.',
      bullets: [
        'Upcoming global trade challenges and emerging opportunities',
        'How businesses can overcome international trade barriers',
        'Step-by-step roadmap to smoothly expand export operations overseas',
      ],
    },
    {
      time: '11:50 AM',
      endTime: '12:10 PM',
      activity: 'Organizer Keynote',
      sessionName: 'Namaste India Group: Connecting Indian Business to the World Global',
      speaker: 'Pragati Tayde',
      topic: 'Namaste India Group: Connecting Indian Business to the World Global',
      type: 'keynote',
      badge: 'ORGANIZER KEYNOTE',
      color: 'border-rose-400 text-rose-300',
      description: 'Keynote address by Pragati Tayde outlining Namaste India Group’s vision, global corridor initiatives, and institutional support connecting Indian businesses globally.',
      bullets: [
        'Namaste India Group: Connecting Indian Business to the World Global',
        'Unlocking overseas corridors for MSMEs and manufacturers',
        'Ecosystem partnerships and export facilitation programs',
      ],
    },
    {
      time: '12:10 PM',
      endTime: '12:50 PM',
      activity: 'India Post Session',
      sessionName: 'Exports Through Postal Channel – Opportunities & Solutions',
      speaker: 'Shri Vipul Mandlesha',
      role: 'Export Head, Export Promotion Team, India Post',
      topic: 'Exports Through Postal Channel – Opportunities and Solutions Offered by India Post',
      type: 'workshop',
      badge: 'POSTAL EXPORTS',
      color: 'border-cyan-400 text-cyan-300',
      description: 'Comprehensive presentation by Export Head Shri Vipul Mandlesha on postal export opportunities, Dak Ghar Niryat Kendra (DNK), and streamlined shipping solutions offered by India Post.',
      bullets: [
        'Exports Through Postal Channel – Opportunities and Solutions Offered by India Post',
        'Leveraging Dak Ghar Niryat Kendra (DNK) for fast global parcel dispatch',
        'Electronic customs declaration and commercial export benefits',
      ],
    },
    {
      time: '12:50 PM',
      endTime: '01:30 PM',
      activity: 'Export Incentives & Customs',
      sessionName: 'Duty Deferment Schemes & Speedy Clearances',
      speaker: 'Suresh Kayakkool',
      role: 'Cost Reduction for Manufacturers, Exporters & Importers',
      topic: 'Various Incentives for Exporters, Duty Deferment Schemes of Govt. & Registrations for Speedy Clearances',
      type: 'workshop',
      badge: 'CUSTOMS & INCENTIVES',
      color: 'border-teal-400 text-teal-300',
      description: 'Cost reduction masterclass for manufacturers, exporters, and importers by Suresh Kayakkool covering government duty deferment schemes, key incentives, and registrations for speedy customs clearances.',
      bullets: [
        'Various Incentives for Exporters & Duty Deferment Schemes of Govt.',
        'Cost Reduction for Manufacturers, Exporters & Importers',
        'Key registrations and statutory compliance for speedy port clearances',
      ],
    },
    {
      time: '01:30 PM',
      endTime: '02:10 PM',
      activity: 'Bilateral Trade Session',
      sessionName: 'Japan-India Business Connect',
      speaker: 'Pravin Kurab',
      topic: 'Japan-India Business Connect – New-Age Manufacturing, Trade & Investment Opportunities',
      type: 'presentation',
      badge: 'JAPAN CORRIDOR',
      color: 'border-blue-400 text-blue-300',
      description: 'Bilateral trade session with Pravin Kurab exploring new-age manufacturing collaborations, buyer qualification, and trade & investment opportunities with Japan.',
      bullets: [
        'Japan-India Business Connect – New-Age Manufacturing',
        'Meeting Japanese precision quality and industrial standards',
        'Bilateral trade & direct investment opportunities',
      ],
    },
    {
      time: '02:10 PM',
      endTime: '02:50 PM',
      activity: 'Middle East Trade Session',
      sessionName: 'India-UAE: Turning Trade Connection into Global Opportunities',
      speaker: 'Rakez',
      topic: 'India-UAE: Turning Trade Connection into Global Opportunities',
      type: 'keynote',
      badge: 'UAE & MIDDLE EAST',
      color: 'border-yellow-400 text-yellow-300',
      description: 'Middle East trade session presented by Rakez highlighting company setup, zero personal tax advantages, and turning India-UAE ties into global export scale.',
      bullets: [
        'India-UAE: Turning Trade Connection into Global Opportunities',
        'Establishing operational base via Ras Al Khaimah Economic Zone (RAKEZ)',
        'Springboard to GCC, Middle East, African, and European markets',
      ],
    },
    {
      time: '02:50 PM',
      endTime: '03:30 PM',
      activity: 'Regional Trade Session',
      sessionName: 'India & Nepal: Partners in Trade, Investment & Growth',
      speaker: 'Pushkar Malla',
      topic: 'India & Nepal: Partners in Trade, Investment & Growth',
      type: 'presentation',
      badge: 'NEPAL CORRIDOR',
      color: 'border-emerald-400 text-emerald-300',
      description: 'Regional trade exploration by Pushkar Malla on cross-border opportunities, trade treaties, mutual tariff benefits, and joint ventures in Nepal.',
      bullets: [
        'India & Nepal: Partners in Trade, Investment & Growth',
        'Tariff exemptions, land customs logistics, and border trade treaties',
        'Joint manufacturing and consumer goods distribution partnerships',
      ],
    },
    {
      time: '03:30 PM',
      endTime: 'Onwards',
      activity: 'Networking & Conclusion',
      sessionName: 'Networking & Business Connections',
      speaker: 'Networking & Business Connections',
      topic: 'Networking & Business Connections',
      type: 'networking',
      badge: 'NETWORKING',
      color: 'border-orange-500 text-orange-400',
      description: 'Dedicated networking and business connection forum among delegates, speakers, trade corridor representatives, and enterprise exhibitors.',
      bullets: [
        'One-on-one business networking & bilateral matchmaking',
        'Direct connection with speakers, export experts, and trade officials',
        'Summit wrap-up, collaborative discussions, and MoU exchanges',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Where and when is the Navi Mumbai Export Summit 2026 taking place?',
      a: 'The summit is scheduled for Saturday, 31 October 2026 at Fortune Select Exotica, Navi Mumbai (ITC Hotel), located in Sector 19D, Vashi, Navi Mumbai, Maharashtra. Official sessions begin at 10:30 AM and run through 03:30 PM Onwards followed by dedicated Networking & Conclusion.',
    },
    {
      q: 'Who is the official organizer of the summit?',
      a: 'The event is proudly organized by Namaste India Group, dedicated to connecting Indian businesses, manufacturers, and MSMEs to the global economy.',
    },
    {
      q: 'What is the complete schedule and list of speakers?',
      a: 'The official schedule comprises: (1) 10:30 AM – 11:10 AM: Opening Ceremony & Welcome Address, (2) 11:10 AM – 11:50 AM: Export Strategy Session by Ajeet Sha, (3) 11:50 AM – 12:10 PM: Organizer Keynote by Pragati Tayde (Namaste India Group), (4) 12:10 PM – 12:50 PM: India Post Session by Shri Vipul Mandlesha, (5) 12:50 PM – 01:30 PM: Export Incentives & Customs by Suresh Kayakkool, (6) 01:30 PM – 02:10 PM: Bilateral Trade Session (Japan) by Pravin Kurab, (7) 02:10 PM – 02:50 PM: Middle East Trade Session (UAE) by Rakez, (8) 02:50 PM – 03:30 PM: Regional Trade Session (Nepal) by Pushkar Malla, and (9) 03:30 PM Onwards: Networking & Conclusion.',
    },
    {
      q: 'Can I bring product samples or company catalogs to showcase?',
      a: 'Yes! All registered delegates can bring physical product samples, catalogs, and marketing collateral for B2B buyer meetings and speaker interactions. If you require a dedicated 2m x 2m booth, please book the Exhibition Display Kiosk Pass.',
    },
    {
      q: 'What are the postal export and customs topics covered?',
      a: 'Shri Vipul Mandlesha (Export Head, Export Promotion Team, India Post) will address Exports Through Postal Channels and opportunities offered by India Post. Suresh Kayakkool (Cost Reduction for Manufacturers, Exporters & Importers) will cover Government Duty Deferment Schemes, Exporter Incentives, and registrations for speedy customs clearances.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#060c16] text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* 1. TOP BREADCRUMB & STICKY SUB-NAV */}
      <div className="bg-[#091424] border-b border-slate-800/80 sticky top-0 z-30 shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/events" className="hover:text-amber-400 transition-colors">Events</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold truncate">Navi Mumbai Export Summit 2026</span>
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
              Book Pass (₹2,499)
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
                <span>31 OCT 2026 • 60+ EXHIBITORS • PASSES SELLING</span>
              </span>
              <span className="bg-slate-800/90 text-cyan-300 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-cyan-500/30">
                FORTUNE SELECT EXOTICA, NAVI MUMBAI (ITC HOTEL)
              </span>
              <span className="bg-orange-500/15 text-amber-300 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-orange-500/30">
                ORGANIZER: NAMASTE INDIA GROUP
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Navi Mumbai <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Export Summit 2026
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Official Event Schedule • 31 October 2026. Organized by <strong>Namaste India Group</strong> at Fortune Select Exotica, Navi Mumbai (ITC Hotel). Connecting MMR and Konkan manufacturers, agro-producers, and industrial exporters with direct international buyers, India Post postal export channels, government customs duty deferment schemes, and bilateral trade desks for Japan, UAE, and Nepal.
            </p>

            {/* Coordinates Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 sm:p-5 bg-[#0b1626]/90 border border-slate-800 rounded-2xl backdrop-blur-md shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Date &amp; Schedule</div>
                  <div className="text-sm font-extrabold text-white">31 Oct 2026</div>
                  <div className="text-xs text-amber-400">Official Schedule • 31 October 2026</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Timing &amp; Agenda</div>
                  <div className="text-sm font-extrabold text-white">10:30 AM – 03:30 PM Onwards</div>
                  <div className="text-xs text-slate-400">8 Key Sessions &amp; Business Networking</div>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-start gap-3 pt-3 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Venue &amp; Organizer</div>
                  <div className="text-sm font-extrabold text-white">Fortune Select Exotica, Navi Mumbai (ITC Hotel)</div>
                  <div className="text-xs text-slate-300">
                    Sector 19D, Vashi, Navi Mumbai, Maharashtra • Organizer: <strong className="text-amber-300">Namaste India Group</strong>
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
                  <span>REGISTER NOW (₹2,499 + GST)</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href="https://wa.me/918169080686?text=Hello%2C%20I%20would%20like%20to%20register%20for%20Navi%20Mumbai%20Export%20Summit%202026%20at%20Fortune%20Select%20Exotica."
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
                  <span>60+ Exhibitor Stalls</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1 text-slate-300">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>India Post &amp; Customs Clinics</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Bilateral Corridors: Japan, UAE &amp; Nepal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Banner Visual & Quick Action */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl group">
              <img
                src="/banner/navi-mumbai-export-summit.jpeg"
                alt="Navi Mumbai Export Summit 2026"
                className="w-full h-auto object-contain rounded-2xl group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow-lg">
                <Store className="w-3.5 h-3.5 text-orange-400" />
                <span>60+ Exhibitors &amp; Brand Pavilions</span>
              </div>
            </div>

            {/* Prominent Register Button */}
            <div className="pt-1">
              <button
                onClick={() => scrollToSection('passes-section')}
                className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-base font-black py-4 px-6 rounded-2xl shadow-xl shadow-orange-950/70 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>RESERVE DELEGATE SEAT NOW →</span>
              </button>
            </div>

            <div className="p-4 bg-[#0b1626] rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-light">
              <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                <Ship className="w-3.5 h-3.5 text-amber-400" />
                <span>Strategic Maritime Gateway (JNPA Nhava Sheva &amp; Airport)</span>
              </div>
              <p>
                Navi Mumbai connects over 50% of India’s containerized port logistics via JNPA Nhava Sheva. This summit positions regional manufacturers to leverage multimodal logistics, Dak Ghar Niryat Kendra, and direct export incentives to scale globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY STATS */}
      <section className="py-10 px-4 sm:px-6 bg-[#081220] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1 group hover:border-orange-500/50 transition-all">
            <div className="text-3xl sm:text-4xl font-black text-amber-400">60+</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Exhibitors</div>
            <div className="text-[11px] text-slate-400">Product &amp; Logistics Pavilions</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1 group hover:border-emerald-500/50 transition-all">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400">300+</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Exporting MSMEs</div>
            <div className="text-[11px] text-slate-400">Manufacturers, Traders &amp; Founders</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1 group hover:border-cyan-500/50 transition-all">
            <div className="text-3xl sm:text-4xl font-black text-cyan-400">8 Sessions</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Sessions &amp; Keynotes</div>
            <div className="text-[11px] text-slate-400">Strategy, India Post, Customs, Japan, UAE &amp; Nepal</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1 group hover:border-orange-500/50 transition-all">
            <div className="text-3xl sm:text-4xl font-black text-orange-400">Full Day</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Fortune Select Exotica</div>
            <div className="text-[11px] text-slate-400">10:30 AM – 03:30 PM Onwards (31 Oct 2026)</div>
          </div>
        </div>
      </section>

      {/* 4. TOPICS & SPEAKERS (CARDS + SLEEK TABLE) */}
      <section className="py-16 px-4 sm:px-6 bg-[#060c16] border-b border-slate-800" id="topics-speakers">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>DISTINGUISHED FACULTY &amp; TRADE SESSIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Topics &amp; Speakers
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Meet the faculty, customs advisors, logistics leadership, and bilateral trade corridor directors guiding the conclave.
            </p>
          </div>

          {/* Clean Reference Table */}
          <div className="bg-[#0b1728] rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0d1e36] to-[#0b1728] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                <FileText className="w-4 h-4 text-orange-400" />
                <span>Executive Roster: Topics &amp; Speakers</span>
              </div>
              <span className="text-[11px] bg-orange-500/15 border border-orange-500/30 text-amber-300 font-extrabold px-2.5 py-0.5 rounded-full">
                7 Distinguished Sessions &amp; Keynotes
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-[#07111e] text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800 font-extrabold">
                  <tr>
                    <th scope="col" className="py-3 px-4 w-12 text-center">#</th>
                    <th scope="col" className="py-3 px-6">Topic / Session</th>
                    <th scope="col" className="py-3 px-6">Speaker</th>
                    <th scope="col" className="py-3 px-6">Organization / Designation</th>
                    <th scope="col" className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {topicsAndSpeakers.map((item) => (
                    <tr key={item.num} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-4 text-center font-black text-orange-400">{item.num}</td>
                      <td className="py-4 px-6 font-bold text-white max-w-md">
                        <span className="inline-flex items-center gap-1.5 text-amber-300">
                          <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                          <span>{item.shortTopic}</span>
                        </span>
                        <div className="text-xs text-slate-300 font-normal mt-1 leading-snug">
                          {item.topic}
                        </div>
                      </td>
                      <td className="py-4 px-6 font-extrabold text-white whitespace-nowrap">
                        <div className="text-amber-300">{item.speaker}</div>
                        <div className="text-[11px] text-slate-400 font-normal mt-0.5">{item.role}</div>
                      </td>
                      <td className="py-4 px-6 text-slate-300">{item.org}</td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => scrollToSection('passes-section')}
                          className="text-[11px] font-bold text-orange-400 hover:text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 px-3 py-1 rounded-lg border border-orange-500/30 transition-colors cursor-pointer"
                        >
                          Attend Session &rarr;
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 6 Rich Speaker Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicsAndSpeakers.map((sp) => (
              <div
                key={sp.num}
                className="bg-[#0b1728] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-4 hover:border-orange-500/60 transition-all group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-orange-500/40 font-mono">
                      0{sp.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/70 border border-cyan-800/40 px-2.5 py-0.5 rounded">
                      {sp.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-slate-900 border-2 border-amber-500/50 flex items-center justify-center text-amber-300 font-black text-base sm:text-lg shrink-0 shadow-lg group-hover:border-amber-400 transition-all">
                      {sp.speaker
                        .replace(/^Shri\s+/i, '')
                        .split(' ')
                        .map((n: string) => n[0])
                        .filter(Boolean)
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {sp.speaker}
                      </h3>
                      <div className="text-xs text-amber-400 font-semibold leading-tight">{sp.role}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{sp.org}</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
                    <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                      Keynote Topic: &ldquo;{sp.topic}&rdquo;
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {sp.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Conclave Faculty</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <span>Topic #{sp.num}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EVENT SCHEDULE & TIMELINE (OFFICIAL EVENT SCHEDULE) */}
      <section className="py-16 px-4 sm:px-6 bg-[#081220] border-b border-slate-800" id="event-schedule">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>OFFICIAL EVENT SCHEDULE • 31 OCTOBER 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Navi Mumbai Export Summit 2026 Schedule
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Venue: <strong className="text-slate-200">Fortune Select Exotica, Navi Mumbai (ITC Hotel)</strong> • Organizer: <strong className="text-amber-300">Namaste India Group</strong>
            </p>
          </div>

          {/* Quick Schedule Reference Table */}
          <div className="bg-[#0b1728] rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0d1e36] to-[#0b1728] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Official Event Schedule</span>
              </div>
              <span className="text-[11px] bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-extrabold px-2.5 py-0.5 rounded-full">
                10:30 AM to 03:30 PM Onwards
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-[#07111e] text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800 font-extrabold">
                  <tr>
                    <th scope="col" className="py-3 px-6 w-44">Time</th>
                    <th scope="col" className="py-3 px-6">Session</th>
                    <th scope="col" className="py-3 px-6">Speaker / Topic</th>
                    <th scope="col" className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {scheduleData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-6 font-mono font-bold text-amber-400 whitespace-nowrap">
                        {item.time} {item.endTime !== 'Onwards' ? `– ${item.endTime}` : 'Onwards'}
                      </td>
                      <td className="py-3.5 px-6 font-bold text-white">
                        <div className="text-white font-bold">{item.activity}</div>
                        {item.sessionName !== item.activity && (
                          <div className="text-xs text-amber-400/90 font-light mt-0.5">{item.sessionName}</div>
                        )}
                      </td>
                      <td className="py-3.5 px-6 text-slate-300">
                        <div className="font-bold text-amber-300">{item.speaker}</div>
                        {item.role && <div className="text-[11px] text-slate-400 font-normal">{item.role}</div>}
                        {item.topic && item.topic !== item.speaker && item.topic !== item.sessionName && (
                          <div className="text-xs text-slate-300 font-light mt-0.5">
                            <span className="text-orange-400/90 font-medium">Topic: </span>
                            {item.topic}
                          </div>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded border bg-orange-500/10 text-orange-300 border-orange-500/30">
                          {item.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline View */}
          <div className="space-y-6 relative border-l-2 border-slate-800 ml-4 sm:ml-40 pl-6 sm:pl-10">
            {scheduleData.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Marker Dot */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#081220] border-2 ${item.color} group-hover:scale-125 transition-transform`} />

                {/* Left Time in desktop */}
                <div className="sm:absolute sm:-left-44 sm:top-0.5 text-xs font-mono font-bold tracking-wider text-amber-400 sm:text-right sm:w-28 mb-1 sm:mb-0">
                  {item.time} {item.endTime !== 'Onwards' ? `– ${item.endTime}` : 'Onwards'}
                </div>

                {/* Card */}
                <div className="bg-[#0b182b] rounded-2xl border border-slate-800 p-5 sm:p-6 shadow-lg hover:border-slate-700 transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-md">
                        {item.time} {item.endTime !== 'Onwards' ? `– ${item.endTime}` : 'Onwards'}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {item.badge}
                      </span>
                    </div>

                    <button
                      onClick={() => scrollToSection('passes-section')}
                      className="text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-orange-600 px-3 py-1 rounded-lg border border-slate-700 transition-colors cursor-pointer"
                    >
                      Book Pass &rarr;
                    </button>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.activity}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-amber-300 mt-0.5">
                      {item.speaker} {item.role ? `• ${item.role}` : ''}
                    </div>
                  </div>

                  {item.topic && item.topic !== item.speaker && (
                    <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                      <span className="text-orange-400 font-semibold">Topic: </span>
                      <span className="text-slate-200">{item.topic}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {item.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-orange-400 font-bold">&bull;</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHO SHOULD ATTEND */}
      <section className="py-16 px-4 sm:px-6 bg-[#060c16] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              <span>CROSS-BORDER COMMERCE PROFILE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Who Should Attend?
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Designed for enterprise leaders, manufacturers, and merchant exporters ready to penetrate international trade corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-orange-500/50 transition-all space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Manufacturers &amp; Industrialists</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Engineering, auto ancillaries, electricals, plastics, packaging, and precision components looking for overseas purchase orders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-emerald-500/50 transition-all space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Agro &amp; Food Processors</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Spices, grains, processed foods, dry fruits, organic goods, and commodity exporters seeking direct GCC and Asian buyer links.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-cyan-500/50 transition-all space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">E-Commerce &amp; Postal Exporters</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Brands and MSMEs seeking low-cost cross-border parcel delivery via India Post Dak Ghar Niryat Kendra and automated customs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-yellow-500/50 transition-all space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-400">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Global Investors &amp; Traders</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Enterprises expanding overseas via UAE Free Zones (RAKEZ), setting up Japan trade channels, or leveraging Nepal trade treaties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OFFICIAL REGISTRATION TIERS (PASSES) */}
      <section className="py-20 px-4 sm:px-6 bg-[#081220] border-b border-slate-800 scroll-mt-12" id="passes-section">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <CreditCard className="w-3.5 h-3.5" />
              <span>OFFICIAL REGISTRATION TIERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Choose Your Delegate Pass
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Select the right pass for your business. All delegate passes include full technical sessions, banquet luncheon, 60+ exhibitor access, and official participation certificate.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {passes.map((pass) => {
              const passGst = Math.round((pass.price * (pass.gstPercentage || 18)) / 100);
              const passTotal = pass.price + passGst;
              const isRec = pass.recommended;

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
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg bg-gradient-to-r from-orange-600 to-amber-500 text-slate-950">
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
                        Total: <strong className="text-slate-200">₹{passTotal.toLocaleString('en-IN')}</strong> (incl. ₹{passGst.toLocaleString('en-IN')} GST)
                      </div>
                      <div className="text-[11px] text-orange-400 font-semibold pt-1">
                        Only {pass.seatsLeft} slots remaining at this rate
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Pass Inclusions &amp; Privileges:
                      </div>
                      <ul className="space-y-2.5 text-xs text-slate-200">
                        {pass.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => handleBookPass(pass.id)}
                      className={`w-full py-4 px-6 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                        isRec
                          ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-orange-950/70'
                          : 'bg-slate-800 hover:bg-orange-600 text-white hover:shadow-orange-950/40'
                      }`}
                    >
                      <span>BOOK THIS PASS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-[10px] text-center text-slate-500 mt-2 font-medium">
                      Instant Confirmation • Official Tax Invoice Provided
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FAQS */}
      <section className="py-16 px-4 sm:px-6 bg-[#060c16] border-b border-slate-800">
        <div className="max-w-[900px] mx-auto space-y-10">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Conclave Information &amp; FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#0b1728] rounded-2xl border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-orange-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaqIndex === i && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CHECKOUT MODAL (RAZORPAY INTEGRATION) */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#0b182b] border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8">
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/80 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {checkoutStep === 'details' && (
              <div className="space-y-5">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded">
                    Delegate Registration
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Book {currentPass.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Navi Mumbai Export Summit • 31 Oct 2026 • Fortune Select Exotica
                  </p>
                </div>

                {apiError && (
                  <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs">
                    {apiError}
                  </div>
                )}

                <form onSubmit={handleProceedToPayment} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kulkarni"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                    />
                    {formErrors.fullName && (
                      <span className="text-[11px] text-red-400">{formErrors.fullName}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9820012345"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                      />
                      {formErrors.mobileNumber && (
                        <span className="text-[11px] text-red-400">{formErrors.mobileNumber}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. ramesh@eximcorp.com"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                      />
                      {formErrors.emailAddress && (
                        <span className="text-[11px] text-red-400">{formErrors.emailAddress}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company / Enterprise Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Precision Tools Pvt Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Industry / Sector
                      </label>
                      <select
                        value={formData.businessSector}
                        onChange={(e) => setFormData({ ...formData, businessSector: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                      >
                        <option value="Manufacturing & Engineering">Manufacturing &amp; Engineering</option>
                        <option value="Agro & Food Processing">Agro &amp; Food Processing</option>
                        <option value="Chemicals & Pharmaceuticals">Chemicals &amp; Pharmaceuticals</option>
                        <option value="Textiles & Garments">Textiles &amp; Garments</option>
                        <option value="Logistics & Freight Forwarding">Logistics &amp; Freight Forwarding</option>
                        <option value="General Trading & Services">General Trading &amp; Services</option>
                      </select>
                    </div>
                  </div>

                  {/* Pricing Summary */}
                  <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-700 space-y-1 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Pass Fee:</span>
                      <span>₹{basePrice.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>GST (18%):</span>
                      <span>₹{gstAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-sm pt-1 border-t border-slate-800">
                      <span>Total Amount Payable:</span>
                      <span className="text-amber-400">₹{totalPayable.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessingPayment}
                    className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-sm py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isProcessingPayment ? (
                      <span>Connecting Payment Gateway...</span>
                    ) : (
                      <>
                        <span>PROCEED TO PAYMENT (₹{totalPayable.toLocaleString('en-IN')})</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            {checkoutStep === 'success' && (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-500/50">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Registration Confirmed!</h3>
                <p className="text-xs text-slate-300">
                  Thank you, <strong>{formData.fullName}</strong>. Your pass for the <strong>Navi Mumbai Export Summit 2026</strong> on 31 Oct 2026 at Fortune Select Exotica has been secured.
                </p>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-700 text-xs font-mono text-amber-300">
                  Registration ID: {confirmedOrderId}
                </div>
                <p className="text-xs text-slate-400">
                  A receipt and delegate kit details have been dispatched to <strong>{formData.emailAddress}</strong>.
                </p>
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default NaviMumbaiExportSummitPage;
