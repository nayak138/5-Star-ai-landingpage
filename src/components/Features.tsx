import React from 'react';
import {
  QrCode,
  ShieldAlert,
  MessageSquareQuote,
  LineChart,
  Building2,
  Lock,
  Layers,
  Sparkles,
  SmartphoneNfc
} from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-[#070A13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span>System Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F8FAFC] tracking-tight">
            Built for integrity. <br />
            Engineered for genuine results.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every feature is designed to protect your brand reputation, adhere strictly to Google policies, and simplify review operations across single storefronts or multi-client agencies.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Feature 1: QR & NFC Touchpoints (Span 7) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] p-7 flex flex-col justify-between hover:border-[#2A3B5C] transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <SmartphoneNfc className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-500">Touchpoint Infrastructure</span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Physical & Digital Campaign Touchpoints
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Engage customers at the natural moment of peak delight. Deploy laser-engraved acrylic/wood NFC stands on checkout counters, print branded QR table tents, or automate post-visit SMS notifications. Zero customer apps required.
              </p>

              {/* Minimal UI demonstration inside card */}
              <div className="mt-4 p-4 rounded-xl bg-[#090D18] border border-[#1A233A] grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-lg bg-[#11182A]">
                  <div className="text-xs font-medium text-white">Tap to Review</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Contactless NFC</div>
                </div>
                <div className="p-3 rounded-lg bg-[#11182A]">
                  <div className="text-xs font-medium text-white">Scan & Draft</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Dynamic QR</div>
                </div>
                <div className="p-3 rounded-lg bg-[#11182A]">
                  <div className="text-xs font-medium text-white">Post-Visit Link</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">SMS & Email</div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1A233A] text-xs text-slate-400 flex items-center justify-between">
              <span>Universal smartphone compatibility</span>
              <span className="text-emerald-400">iOS & Android native</span>
            </div>
          </div>

          {/* Feature 2: Private Feedback (Span 5) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0D1322] border border-[#1E293B] p-7 flex flex-col justify-between hover:border-[#2A3B5C] transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-500">Service Recovery</span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Private Constructive Feedback
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                When a customer has a less-than-stellar experience, give them a direct line to leadership. 1–3 star ratings direct to a private grievance form so you can resolve the issue before it turns into a public Google review.
              </p>

              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200/90 leading-relaxed">
                “Private feedback alerted us to a broken AC unit in our back dining room before any public review was posted.”
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1A233A] text-xs text-slate-400 flex items-center justify-between">
              <span>Real-time SMS & email alerts</span>
              <span className="text-amber-400">Direct to management</span>
            </div>
          </div>

          {/* Feature 3: Thoughtful Review-Reply Drafting (Span 4) */}
          <div className="lg:col-span-4 rounded-2xl bg-[#0D1322] border border-[#1E293B] p-7 flex flex-col justify-between hover:border-[#2A3B5C] transition-colors">
            <div className="space-y-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
                <MessageSquareQuote className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Thoughtful Review Replies
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Responding to reviews signals that your business cares. 5-Star.AI drafts personalized, de-escalating, or appreciative responses tailored to your chosen brand tone in seconds.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1A233A] text-xs text-slate-400">
              Approved by owner before posting
            </div>
          </div>

          {/* Feature 4: Business Performance Insights (Span 4) */}
          <div className="lg:col-span-4 rounded-2xl bg-[#0D1322] border border-[#1E293B] p-7 flex flex-col justify-between hover:border-[#2A3B5C] transition-colors">
            <div className="space-y-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Operational Insights & Trends
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Track review velocity, top-mentioned service highlights, sentiment trends across locations, and response time metrics without hallucinated numbers or vanity scoring.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1A233A] text-xs text-slate-400">
              Clean, exportable reporting data
            </div>
          </div>

          {/* Feature 5: Agency & Multi-Location Workflows (Span 4) */}
          <div id="for-agencies" className="lg:col-span-4 rounded-2xl bg-[#0D1322] border border-[#1E293B] p-7 flex flex-col justify-between hover:border-[#2A3B5C] transition-colors">
            <div className="space-y-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Agency & Multi-Location Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Manage dozens of client storefronts or franchise locations from one parent portal. Provide client logins, location-specific campaign links, and centralized billing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1A233A] text-xs text-slate-400">
              Role-based team permissions
            </div>
          </div>
        </div>

        {/* Ethical Adherence Statement Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#090D18] border border-[#1E293B] flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-slate-400">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
            <Lock className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <div className="font-semibold text-white">Strict Compliance with Google Review Guidelines</div>
            <p className="text-slate-300 leading-relaxed">
              5-Star.AI does not gate reviews deceptively, manipulate scores, or offer incentives for positive feedback. Customers retain full freedom to submit their genuine experience directly through their verified Google account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
