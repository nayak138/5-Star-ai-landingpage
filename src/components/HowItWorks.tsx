import React from 'react';
import { QrCode, ThumbsUp, Sparkles, UserCheck, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onRequestTrial: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onRequestTrial }) => {
  const steps = [
    {
      num: '01',
      title: 'Business Sets Up the Campaign',
      desc: 'Deploy custom QR codes, countertop NFC wooden/acrylic stands, or automated post-service SMS links tailored to each location.',
      icon: QrCode,
      tag: '5-Minute Setup',
    },
    {
      num: '02',
      title: 'Customer Shares Honest Feedback',
      desc: 'In seconds, the customer chooses their 1–5 star rating and selects a few bullet highlights about what stood out during their visit.',
      icon: ThumbsUp,
      tag: 'Zero Friction',
    },
    {
      num: '03',
      title: 'AI Solves the Blank-Page Problem',
      desc: '5-Star.AI drafts natural, articulate wording matching the customer’s chosen tone and language. No robotic buzzwords or generic templates.',
      icon: Sparkles,
      tag: 'Instant Assistance',
    },
    {
      num: '04',
      title: 'Customer Decides What to Post',
      desc: 'The customer reads, modifies, copies, or continues to Google. They maintain 100% control over every word submitted to their Google account.',
      icon: UserCheck,
      tag: 'Customer in Control',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#090D1A] border-t border-[#162035]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span>Workflow & Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F8FAFC] tracking-tight">
            How 5-Star.AI works
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A transparent, ethical loop that bridges the gap between satisfied customers and public Google reviews.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-2xl bg-[#0D1322] border border-[#1E293B] p-6 flex flex-col justify-between hover:border-[#2A3B5C] transition-colors"
              >
                <div>
                  {/* Step Editorial Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-slate-500/70">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Quiet Metadata Indicator */}
                <div className="mt-6 pt-4 border-t border-[#1A233A] text-xs text-slate-500 font-medium flex items-center justify-between">
                  <span>{step.tag}</span>
                  <span className="text-blue-400 font-mono text-[11px]">Verified Flow</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#0D1322] via-[#11182A] to-[#0D1322] border border-[#22304C] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-base font-semibold text-white">
              Ready to see the workflow live for your business?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our specialists configure your first test campaign during your guided 7-day trial.
            </p>
          </div>
          <button
            onClick={onRequestTrial}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1A73E8] hover:bg-[#1557B0] rounded-xl transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>Request guided trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
