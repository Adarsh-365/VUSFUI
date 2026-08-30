import React, { useState } from 'react';
import { Mic, X, Send, Sparkles, ArrowRight } from 'lucide-react';

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const VoiceAssistantModal: React.FC<VoiceAssistantModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string; actionSection?: string }>>([
    {
      sender: 'assistant',
      text: 'Namaste! Welcome to Vishwa Udyam Sahayta Foundation Interactive Assistant. Ask me about MSME subsidies (PMEGP/CMEGP), industrial park infrastructure, the Nepal Food & Beverage Expo, Namaste China sourcing desk, or how to become a registered enterprise member.',
    },
  ]);

  if (!isOpen) return null;

  const handleVoiceListen = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setInputText('Tell me about Nepal Food & Beverage Expo 2026');
      handleSend('Tell me about Nepal Food & Beverage Expo 2026');
    }, 2000);
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg = { sender: 'user' as const, text: query };
    let assistantReply = '';
    let actionSection: string | undefined = undefined;

    const q = query.toLowerCase();
    if (q.includes('nepal') || q.includes('food') || q.includes('beverage') || q.includes('expo') || q.includes('summit')) {
      assistantReply =
        'The Nepal Food & Beverage Expo & India-Nepal Buyer-Seller Meet 2026 is organized by our Namaste Nepal Trade Wing on Oct 14-16, 2026 at Bhrikutimandap Hall, Kathmandu, Nepal. Over 150+ B2B delegates are participating.';
      actionSection = 'forthcoming-events';
    } else if (q.includes('infra') || q.includes('infrastructure') || q.includes('peb') || q.includes('park')) {
      assistantReply =
        'VUSF provides end-to-end Industrial Infrastructure services including master planning, PEB steel structures, environmental clearances, and plug-and-play manufacturing parks.';
      actionSection = 'major-initiatives';
    } else if (q.includes('subsidy') || q.includes('pmegp') || q.includes('cmegp') || q.includes('dpr') || q.includes('loan')) {
      assistantReply =
        'We guide enterprises and startups with bank-ready DPR project reports, government subsidy assistance under PMEGP & CMEGP (up to 35% subsidy), and credit linkage with nationalized banks.';
      actionSection = 'knowledge-hub';
    } else if (q.includes('china') || q.includes('sourcing') || q.includes('machinery') || q.includes('import')) {
      assistantReply =
        'Our Namaste China Sourcing Desk helps Indian MSMEs inspect overseas factories, source heavy machinery and raw materials directly with strict quality audits.';
      actionSection = 'major-initiatives';
    } else if (q.includes('member') || q.includes('join') || q.includes('registration')) {
      assistantReply =
        'VUSF offers MSME & Startup Membership, Corporate Membership, and International Exporter tiers with dedicated counseling and trade delegation privileges.';
    } else if (q.includes('president') || q.includes('founder') || q.includes('leader') || q.includes('pragati')) {
      assistantReply =
        'Vishwa Udyam Sahayta Foundation is led by Founder & President Pragati Tayde, Managing Director Kamlesh Kumar, Vice President Vighnesh, and Executive Director Bhushan Shinde.';
      actionSection = 'office-bearers';
    } else {
      assistantReply = `Here is information regarding "${query}". Vishwa Udyam Sahayta Foundation is a Section 8 non-profit organization accelerating MSME empowerment, industrial infrastructure, and global trade corridors.`;
    }

    setMessages((prev) => [
      ...prev,
      userMsg,
      { sender: 'assistant', text: assistantReply, actionSection },
    ]);
    setInputText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden flex flex-col h-[520px]">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-[#7c2d12] via-[#9a3412] to-[#431407] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="text-sm font-bold">VUSF Voice &amp; Smart Assistant</h3>
              <p className="text-[10px] text-amber-200">MSME guidance, expos &amp; infrastructure</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-xl shadow-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#c2410c] text-white rounded-br-none'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                }`}
              >
                <p>{m.text}</p>
                {m.actionSection && (
                  <button
                    onClick={() => {
                      onNavigateSection(m.actionSection!);
                      onClose();
                    }}
                    className="mt-2 text-[11px] font-bold text-orange-700 hover:underline flex items-center gap-1"
                  >
                    <span>Explore Section</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick prompt suggestions */}
        <div className="px-3 py-1.5 bg-slate-100 border-t border-slate-200 flex gap-1.5 overflow-x-auto text-[11px]">
          {['Nepal Food Expo', 'PMEGP Subsidy', 'Industrial Infra', 'Namaste China Desk'].map(
            (suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSend(suggestion)}
                className="bg-white px-2.5 py-1 rounded-full border border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-600 shrink-0"
              >
                {suggestion}
              </button>
            )
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <button
            onClick={handleVoiceListen}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            title="Voice query"
          >
            <Mic className="w-4 h-4" />
          </button>

          <input
            type="text"
            placeholder={isListening ? 'Listening...' : 'Type your question or query...'}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-full focus:outline-none focus:border-orange-500"
          />

          <button
            onClick={() => handleSend()}
            className="w-9 h-9 rounded-full bg-[#c2410c] text-white flex items-center justify-center hover:bg-[#9a3412] transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
