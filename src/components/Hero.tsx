import React from 'react';
import { ArrowRight, Star, ShieldCheck, CheckCircle2, Sparkles, MessageSquare, ArrowDown } from 'lucide-react';
import { BrandIcon, BrandLogo, GoogleLogoSvg } from './BrandLogo';

interface HeroProps {
  onRequestTrial: () => void;
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestTrial, onScrollToDemo }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle ambient lighting gradients in brand colors */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-10 w-72 h-72 bg-amber-500/5 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Quiet Editorial Kicker */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Reputation Management For Local Business & Agencies</span>
            </div>

            {/* Marquee Headline */}
            <h1 className="w-full tracking-tight leading-[1.18] text-[#F8FAFC]">
              <span className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 sm:gap-x-3.5 gap-y-2 mb-2">
                <BrandLogo variant="light" size="responsive" className="shrink-0" />
                <span className="font-sans font-medium text-slate-300 text-lg sm:text-2xl lg:text-3xl">
                  powered
                </span>
                <GoogleLogoSvg className="h-6 sm:h-8.5 lg:h-10 w-auto inline-block align-middle" />
              </span>
              <span className="block font-serif text-3xl sm:text-5xl lg:text-7xl font-normal text-[#F8FAFC] tracking-tight">
                Reviews and Replies<span className="text-[#E5C365]">.</span>
              </span>
            </h1>

            {/* Clear Concrete Value Proposition */}
            <p className="text-base sm:text-lg lg:text-xl text-[#CBD5E1] max-w-2xl font-normal leading-relaxed text-pretty mx-auto lg:mx-0">
              Invite genuine Google reviews at the natural moment of delight, collect private feedback when things fall short, and draft thoughtful replies in seconds. Customers keep <span className="text-white font-medium">100% control</span> over their wording and always decide what gets shared.
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onRequestTrial}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#1557B0] active:scale-[0.98] transition-all rounded-xl shadow-lg shadow-blue-900/35 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Request a guided 7-day trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onScrollToDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#CBD5E1] hover:text-white bg-[#11182A] hover:bg-[#1B243B] border border-[#263352] rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>See how it works</span>
                <ArrowDown className="w-4 h-4 text-blue-400" />
              </button>
            </div>

            {/* Transparent Expectation Clarification */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 text-xs text-slate-400 text-center lg:text-left">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No credit card required to request</span>
              </div>
              <span className="hidden sm:inline text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Our team arranges personalized setup</span>
              </div>
              <span className="hidden sm:inline text-slate-600">·</span>
              <span className="text-slate-400">No automatic charges</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Product Visual with Brand Motifs */}
          <div className="lg:col-span-5 relative">
            {/* Frame Glow */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/30 via-indigo-500/20 to-amber-500/20 rounded-2xl blur-lg opacity-70" />

              {/* Main Visual Container */}
              <div className="relative rounded-2xl bg-[#0D1322] border border-[#1E293B] shadow-2xl p-5 sm:p-6 overflow-hidden">
                {/* Header bar of the mockup */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
                  <div className="flex items-center gap-3">
                    <BrandIcon size={32} />
                    <div>
                      <div className="text-sm font-semibold text-white tracking-tight">
                        Cedar & Stone Kitchen
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Campaign Touchpoint · Table 14
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded text-amber-300 bg-amber-950/60 border border-amber-800/40">
                    Live Demo
                  </span>
                </div>

                {/* Simulated Customer Experience Card */}
                <div className="mt-5 space-y-4">
                  {/* Star Rating preview */}
                  <div className="p-3.5 rounded-xl bg-[#11182A] border border-[#1E293B]">
                    <div className="text-xs text-slate-400 mb-2 font-medium">Customer Rating</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-amber-400">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 5.0 Exceptional
                      </span>
                    </div>
                  </div>

                  {/* Highlights Selected */}
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                    <span className="px-2 py-1 rounded-md bg-[#162035] border border-[#263352]">
                      Wood-fired pizza
                    </span>
                    <span className="px-2 py-1 rounded-md bg-[#162035] border border-[#263352]">
                      Attentive service
                    </span>
                    <span className="px-2 py-1 rounded-md bg-[#162035] border border-[#263352]">
                      Cozy patio
                    </span>
                  </div>

                  {/* Drafted wording preview with customer control marker */}
                  <div className="relative p-3.5 rounded-xl bg-[#090D18] border border-[#22304C]">
                    <div className="flex items-center justify-between text-[11px] text-blue-400 mb-1.5 font-medium">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        AI-Assisted Customer Draft
                      </span>
                      <span className="text-slate-400 text-[10px]">Editable before posting</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed italic">
                      “Had an unforgettable dinner on the patio! The wood-fired crust had the perfect char, and our server Sarah made our anniversary feel truly special.”
                    </p>
                  </div>

                  {/* Customer Control Action Buttons Preview */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={onScrollToDemo}
                      className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-slate-300 bg-[#162035] hover:bg-[#1E293B] rounded-lg transition-colors"
                    >
                      <span>Edit My Wording</span>
                    </button>
                    <button
                      onClick={onScrollToDemo}
                      className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                    >
                      <span>Continue to Google</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Footer disclaimer */}
                <div className="mt-4 pt-3 border-t border-[#1E293B] flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3 text-slate-400" />
                    Customer retains 100% control
                  </span>
                  <span className="font-mono text-[10px]">Sample data — not customer results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
