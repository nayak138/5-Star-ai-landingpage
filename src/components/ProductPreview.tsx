import React, { useState } from 'react';
import {
  Smartphone,
  QrCode,
  Star,
  Sliders,
  Sparkles,
  Inbox,
  BarChart3,
  Copy,
  ExternalLink,
  MessageCircle,
  Eye,
  Settings2,
  Check
} from 'lucide-react';
import { BrandIcon } from './BrandLogo';

export const ProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customer' | 'owner'>('customer');
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopy = () => {
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  return (
    <section id="product-preview" className="py-20 lg:py-28 bg-[#090D1A] border-y border-[#162035]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span>Product in Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F8FAFC] tracking-tight">
            Designed for customer ease. <br className="hidden sm:inline" />
            Built for owner clarity.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            See how the system operates from both sides of the counter — keeping customers in complete control of their words while giving business owners peace of mind.
          </p>

          {/* Segmented Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 bg-[#11182A] border border-[#1E293B] rounded-xl shadow-inner">
              <button
                onClick={() => setActiveTab('customer')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'customer'
                    ? 'bg-[#1A73E8] text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-pressed={activeTab === 'customer'}
              >
                <Smartphone className="w-4 h-4" />
                <span>Customer Experience</span>
              </button>

              <button
                onClick={() => setActiveTab('owner')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'owner'
                    ? 'bg-[#1A73E8] text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-pressed={activeTab === 'owner'}
              >
                <Settings2 className="w-4 h-4" />
                <span>Business Owner Experience</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Stage */}
        {activeTab === 'customer' ? (
          /* ================= CUSTOMER EXPERIENCE VIEW ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Explanation Steps */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  The 30-Second Customer Flow
                </span>
                <h3 className="text-2xl font-serif text-white">
                  Zero blank-page friction. Complete customer autonomy.
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Most satisfied customers intend to leave a review, but get stuck wondering what to write. 5-Star.AI removes the friction without taking away their voice.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-[#0D1322] border border-[#1E293B] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">1. Contactless Tap or Scan</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Customers tap an NFC card at the register, scan a table tent QR, or click a post-service SMS link. No app download required.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-[#0D1322] border border-[#1E293B] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">2. Rate & Tap Key Highlights</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Customers pick their star rating and select 2–3 highlights (e.g., “Friendly greeting”, “Fast turnaround”, “Clean clinic”).
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-[#0D1322] border border-[#1E293B] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">3. Thoughtful AI Drafting Aid</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      5-Star.AI instantly shapes their chosen highlights into a coherent draft matching their selected tone.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-[#0D1322] border border-[#2563EB]/40 bg-blue-950/20 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-white">4. Customer Retains Full Control</h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                        Ethical Guarantee
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      The customer edits any words, copies the text, and chooses whether to proceed to Google Reviews. Nothing is ever posted automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Mockup Container */}
            <div className="lg:col-span-6">
              <div className="max-w-md mx-auto rounded-3xl bg-[#070A13] border-2 border-[#1E293B] p-5 shadow-2xl relative">
                {/* Simulated Phone Bezel Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#1A233A] mb-4">
                  <div className="flex items-center gap-2">
                    <BrandIcon size={24} />
                    <span className="text-xs font-semibold text-white">Kite & Bay Bistro (Demo)</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Customer View</span>
                </div>

                {/* Rating Screen Simulation */}
                <div className="space-y-4">
                  <div className="text-center py-2">
                    <p className="text-xs text-slate-300 font-medium">How was your visit today?</p>
                    <div className="flex justify-center gap-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className="w-9 h-9 rounded-lg bg-[#11182A] border border-amber-500/30 flex items-center justify-center text-amber-400"
                        >
                          <Star className="w-5 h-5 fill-amber-400" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights selector */}
                  <div>
                    <label className="text-[11px] text-slate-400 font-medium block mb-1.5">
                      What made your experience great?
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 text-xs rounded-md bg-blue-600/20 text-blue-300 border border-blue-500/40">
                        ✓ Fresh seasonal menu
                      </span>
                      <span className="px-2.5 py-1 text-xs rounded-md bg-blue-600/20 text-blue-300 border border-blue-500/40">
                        ✓ Attentive hospitality
                      </span>
                      <span className="px-2.5 py-1 text-xs rounded-md bg-[#11182A] text-slate-400 border border-[#1E293B]">
                        + Quick seating
                      </span>
                    </div>
                  </div>

                  {/* Draft Output Box */}
                  <div className="p-3.5 rounded-xl bg-[#11182A] border border-[#22304C] space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-blue-400 font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Suggested Draft (Editable)
                      </span>
                      <span className="text-slate-400 text-[10px]">Tone: Warm & Detailed</span>
                    </div>
                    <textarea
                      readOnly
                      rows={3}
                      className="w-full bg-[#0A0F1D] text-xs text-slate-200 p-2.5 rounded-lg border border-[#1E293B] focus:outline-none resize-none leading-relaxed font-sans"
                      value="We had a fantastic evening at Kite & Bay Bistro! The seasonal halibut was cooked to absolute perfection, and the staff made sure our table always had everything we needed. We will definitely be back!"
                    />
                  </div>

                  {/* Controls */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={handleCopy}
                        className="py-2.5 px-3 text-xs font-medium rounded-lg bg-[#162035] hover:bg-[#1E293B] text-slate-200 border border-[#263352] flex items-center justify-center gap-1.5 transition-colors"
                      >
                        {copiedDraft ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Copy Wording</span>
                          </>
                        )}
                      </button>

                      <div className="py-2.5 px-3 text-xs font-semibold rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
                        <span>Continue to Google</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <p className="text-[10px] text-center text-slate-400">
                      Sample preview — customers paste and review before publishing on Google.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ================= BUSINESS OWNER EXPERIENCE VIEW ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Explanation Steps */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  The Business Command Center
                </span>
                <h3 className="text-2xl font-serif text-white">
                  Protect your brand. Respond with clarity and speed.
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Oversee all customer sentiment in one unified workspace. Turn constructive feedback into service improvements and draft thoughtful review responses without stress.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Owner Feature 1 */}
                <div className="p-4 rounded-xl bg-[#0D1322] border border-[#1E293B] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Effortless Campaign Deployment</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Generate high-resolution QR codes, order pre-programmed NFC wooden/acrylic stands, or set up post-visit SMS notifications tailored to each location.
                    </p>
                  </div>
                </div>

                {/* Owner Feature 2 */}
                <div className="p-4 rounded-xl bg-[#0D1322] border border-[#1E293B] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <Inbox className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Private Constructive Feedback Inbox</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      When a customer rates 1–3 stars, the system immediately presents a private feedback form. Owners and managers receive instant alerts to make things right.
                    </p>
                  </div>
                </div>

                {/* Owner Feature 3 */}
                <div className="p-4 rounded-xl bg-[#0D1322] border border-[#1E293B] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Thoughtful Review-Reply Drafting</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Never leave praise or critique unanswered. The AI reply generator drafts gracious, tailored replies in your brand tone for you to approve and paste.
                    </p>
                  </div>
                </div>

                {/* Owner Feature 4 */}
                <div className="p-4 rounded-xl bg-[#0D1322] border border-[#1E293B] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Location Health & Sentiment Tracking</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Monitor review velocity and recurring positive keywords without inflated claims or artificial rank guarantees.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Owner Dashboard Simulation */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#0D1322] border border-[#1E293B] p-5 shadow-2xl space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Management Console</h4>
                    <p className="text-[11px] text-slate-400">Location: Downtown Bistro · 3 Active Campaigns</p>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                    Active System
                  </span>
                </div>

                {/* Simulated Private Feedback Alert Box */}
                <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                      <Inbox className="w-4 h-4 text-amber-400" />
                      Private Constructive Feedback (Direct to Manager)
                    </span>
                    <span className="text-[10px] text-amber-400/80 font-mono">15m ago</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    “Table 6: We loved the dessert, but the main courses took almost 40 minutes to arrive. Would appreciate if the kitchen staff kept guests updated during rush hours.”
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-slate-400 font-mono">Customer phone: (555) ···-8921</span>
                    <button className="text-xs font-medium text-amber-300 hover:text-white bg-amber-900/40 px-2.5 py-1 rounded border border-amber-800 transition-colors">
                      Call Customer Back
                    </button>
                  </div>
                </div>

                {/* Simulated Review Reply Assistant Box */}
                <div className="p-3.5 rounded-xl bg-[#11182A] border border-[#1E293B] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-400 flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 text-blue-400" />
                      Google Review Reply Assistant
                    </span>
                    <span className="text-[10px] text-slate-400">Incoming: 5-Star Review</span>
                  </div>
                  <div className="text-xs text-slate-300 p-2.5 rounded-lg bg-[#0A0F1D] border border-[#162035] italic">
                    “The staff was so accommodating with our dietary restrictions. Excellent experience!”
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 block font-medium">Drafted Owner Reply:</span>
                    <p className="text-xs text-slate-200 p-2 rounded-lg bg-[#162035]/60 border border-[#22304C]">
                      “Thank you so much! Our kitchen team takes allergies and dietary preferences very seriously. We look forward to cooking for you again soon!”
                    </p>
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <button className="text-xs px-3 py-1.5 rounded bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors">
                      Copy & Paste to Google Business Profile
                    </button>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 text-center font-mono">
                  Sample data — not customer results. Business owners approve all final replies.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
