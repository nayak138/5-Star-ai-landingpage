import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Star,
  Copy,
  Check,
  RefreshCw,
  ExternalLink,
  AlertTriangle,
  RotateCcw,
  MessageSquare,
  Globe,
  SlidersHorizontal,
  ChevronDown,
  Info,
  CheckCircle2,
  X
} from 'lucide-react';
import { BrandIcon } from './BrandLogo';

// Fictional sample businesses
const DEMO_BUSINESSES = [
  {
    id: 'cedar-stone',
    name: 'Cedar & Stone Artisan Kitchen',
    category: 'Restaurant & Bakery',
    sampleDetails: 'Dinner with family, server Sarah was exceptional with table 14',
    highlights: ['Wood-fired crust', 'Attentive hospitality', 'Cozy patio garden', 'Prompt seating', 'Seasonal cocktails', 'Generous portions']
  },
  {
    id: 'apex-wellness',
    name: 'Apex Physical Therapy & Wellness',
    category: 'Healthcare & Rehabilitation',
    sampleDetails: 'Post-knee surgery rehabilitation program with Dr. Vance',
    highlights: ['Knowledgeable therapists', 'Punctual appointments', 'Clear home exercise plan', 'Modern equipment', 'Gentle bedside manner']
  },
  {
    id: 'northwest-auto',
    name: 'Northwest Automotive Craft',
    category: 'Auto Repair & Inspection',
    sampleDetails: '60,000-mile comprehensive service and brake rotor replacement',
    highlights: ['Transparent written estimate', 'Completed on time', 'Spotless waiting lounge', 'Digital inspection photos', 'Fair pricing']
  }
];

type ToneType = 'Enthusiastic' | 'Short & Direct' | 'Detailed' | 'Warm';
type OwnerReplyTone = 'Empathetic & Problem-Solving' | 'Warm & Grateful' | 'Professional & Courteous' | 'Brief & Appreciative';

export const ReviewGeneratorDemo: React.FC = () => {
  // Mode switcher: 'customer' or 'business'
  const [viewMode, setViewMode] = useState<'customer' | 'business'>('customer');

  // Customer Mode States
  const [selectedBusinessId, setSelectedBusinessId] = useState('cedar-stone');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [selectedHighlights, setSelectedHighlights] = useState<string[]>([
    'Wood-fired crust',
    'Attentive hospitality'
  ]);
  const [tone, setTone] = useState<ToneType>('Warm');
  const [language, setLanguage] = useState<string>('English');
  const [visitDetails, setVisitDetails] = useState<string>(
    'Celebrated our wedding anniversary; server Sarah made our evening unforgettable.'
  );

  // Business Owner Mode States
  const [ownerIncomingReview, setOwnerIncomingReview] = useState<string>(
    'We visited on Friday night. The food was sensational, but we waited nearly 25 minutes for our drinks to arrive from the bar.'
  );
  const [ownerReplyTone, setOwnerReplyTone] = useState<OwnerReplyTone>('Empathetic & Problem-Solving');

  // Generator Lifecycle States
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationStep, setGenerationStep] = useState<string>('Analyzing highlights...');
  const [hasError, setHasError] = useState<boolean>(false);
  const [draftText, setDraftText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [showHandoffModal, setShowHandoffModal] = useState<boolean>(false);

  const currentBusiness = DEMO_BUSINESSES.find(b => b.id === selectedBusinessId) || DEMO_BUSINESSES[0];

  // Helper to generate dynamic mock draft
  const generateMockDraft = () => {
    setIsGenerating(true);
    setHasError(false);
    setCopied(false);

    // Multi-phase progress feedback
    setGenerationStep('Reading chosen highlights...');
    setTimeout(() => {
      setGenerationStep('Balancing authentic conversational tone...');
    }, 280);

    setTimeout(() => {
      setGenerationStep('Formatting natural wording...');
    }, 550);

    setTimeout(() => {
      setIsGenerating(false);

      if (viewMode === 'customer') {
        const highlightsString = selectedHighlights.length > 0 
          ? selectedHighlights.join(' and ') 
          : 'the thoughtful service';

        let generated = '';
        if (tone === 'Enthusiastic') {
          generated = `Had an absolutely outstanding experience at ${currentBusiness.name}! ${visitDetails ? `${visitDetails} ` : ''}We were blown away by the ${highlightsString.toLowerCase()}. You can feel how much pride the whole team puts into what they do. Highest possible recommendation!`;
        } else if (tone === 'Short & Direct') {
          generated = `Top-notch experience at ${currentBusiness.name}. ${highlightsString} were exceptional. ${visitDetails ? `${visitDetails}. ` : ''}Will certainly return.`;
        } else if (tone === 'Detailed') {
          generated = `From the moment we arrived at ${currentBusiness.name}, everything was handled with care and polish. In particular, the ${highlightsString.toLowerCase()} stood out to our entire party. ${visitDetails ? `${visitDetails}. ` : ''}It is rare to find this standard of consistency. Highly recommended for anyone in the area.`;
        } else {
          // Warm
          generated = `We had such a lovely visit to ${currentBusiness.name}. ${visitDetails ? `${visitDetails}. ` : ''}The team took wonderful care of us, especially regarding the ${highlightsString.toLowerCase()}. Thank you for a truly warm and memorable experience!`;
        }

        // Multi-language translation mock
        if (language === 'Español') {
          generated = `¡Tuvimos una experiencia maravillosa en ${currentBusiness.name}! La atención y el servicio fueron impecables. Muy recomendado para todos en la zona.`;
        } else if (language === 'Français') {
          generated = `Une expérience remarquable chez ${currentBusiness.name}. Le service et l'attention aux détails étaient au rendez-vous. Merci à toute l'équipe!`;
        } else if (language === 'Deutsch') {
          generated = `Ein rundum gelungener Besuch bei ${currentBusiness.name}. Hervorragende Qualität und sehr freundlicher Service. Absolut empfehlenswert!`;
        } else if (language === '日本語') {
          generated = `${currentBusiness.name}で素晴らしい時間を過ごせました。スタッフの丁寧な対応と行き届いたサービスに感謝いたします。またぜひ訪れたいと思います。`;
        }

        setDraftText(generated);
      } else {
        // Business reply generation
        let reply = '';
        if (ownerReplyTone === 'Empathetic & Problem-Solving') {
          reply = `Thank you for taking the time to share your feedback. We are thrilled you enjoyed the food, but we sincerely apologize for the delay you experienced at the bar on Friday night. That is not our usual standard of pacing, and we have addressed it directly with our lead bartender. Please reach out to us at manager@cedarandstone.demo so we can make your next round on us!`;
        } else if (ownerReplyTone === 'Warm & Grateful') {
          reply = `Thank you so much for joining us and for your kind remarks on our cuisine! We truly appreciate you alerting us to the bar delay — honest feedback like this helps our team improve. We hope to welcome you back again soon for an even smoother visit!`;
        } else if (ownerReplyTone === 'Professional & Courteous') {
          reply = `Thank you for reviewing your recent visit. We are pleased our kitchen met your expectations, and we appreciate your constructive note regarding bar pacing. We have shared this with our floor managers to optimize drink turnaround during peak hours.`;
        } else {
          reply = `Thank you for your visit and review! We appreciate your patience during Friday's rush and are glad you loved the dishes. Looking forward to welcoming you back!`;
        }
        setDraftText(reply);
      }
    }, 850);
  };

  // Initial load generation
  useEffect(() => {
    generateMockDraft();
  }, [selectedBusinessId, viewMode, tone, language, ownerReplyTone]);

  const toggleHighlight = (item: string) => {
    if (selectedHighlights.includes(item)) {
      if (selectedHighlights.length > 1) {
        setSelectedHighlights(selectedHighlights.filter(h => h !== item));
      }
    } else {
      setSelectedHighlights([...selectedHighlights, item]);
    }
  };

  const handleCopy = () => {
    if (!draftText) return;
    navigator.clipboard.writeText(draftText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const triggerSimulatedError = () => {
    setIsGenerating(true);
    setHasError(false);
    setTimeout(() => {
      setIsGenerating(false);
      setHasError(true);
    }, 500);
  };

  return (
    <section id="demo-generator" className="py-20 lg:py-28 bg-[#070A13] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Live Prototype</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#F8FAFC] tracking-tight">
            Try the AI Review Generator
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Test the drafting engine firsthand. Switch between customer review drafting and owner reply generation. Everything is local, fully editable, and never posted to Google.
          </p>

          {/* Sample Data Disclaimer Badge */}
          <div className="pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-amber-300 bg-amber-950/40 border border-amber-800/40">
              <Info className="w-3.5 h-3.5 shrink-0" />
              Sample data — not customer results. Fictional businesses for demo only.
            </span>
          </div>

          {/* Main Mode Segmented Switcher */}
          <div className="pt-3 flex justify-center">
            <div className="p-1 bg-[#11182A] border border-[#1E293B] rounded-xl inline-flex">
              <button
                onClick={() => setViewMode('customer')}
                className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  viewMode === 'customer'
                    ? 'bg-[#1A73E8] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-pressed={viewMode === 'customer'}
              >
                Customer Review Mode
              </button>
              <button
                onClick={() => setViewMode('business')}
                className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  viewMode === 'business'
                    ? 'bg-[#1A73E8] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-pressed={viewMode === 'business'}
              >
                Business Owner Reply Mode
              </button>
            </div>
          </div>
        </div>

        {/* Prototype Card Container */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#0D1322] border border-[#1E293B] shadow-2xl overflow-hidden">
          {/* Top Control Bar of the Prototype */}
          <div className="px-5 py-3.5 bg-[#11182A] border-b border-[#1E293B] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <BrandIcon size={26} />
              <div>
                <span className="text-xs font-semibold text-white block">
                  {viewMode === 'customer' ? 'Customer Review Assistant' : 'Owner Response Desk'}
                </span>
                <span className="text-[11px] text-slate-400">
                  {viewMode === 'customer' ? 'Assisting customer in drafting their genuine review' : 'Drafting thoughtful reply to customer feedback'}
                </span>
              </div>
            </div>

            {/* Quick selector for fictional business */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 hidden sm:inline">Demo Business:</span>
              <select
                value={selectedBusinessId}
                onChange={(e) => {
                  setSelectedBusinessId(e.target.value);
                  const b = DEMO_BUSINESSES.find(item => item.id === e.target.value);
                  if (b) {
                    setSelectedHighlights(b.highlights.slice(0, 2));
                    setVisitDetails(b.sampleDetails);
                  }
                }}
                className="bg-[#0A0F1D] text-slate-200 border border-[#22304C] rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-blue-500 cursor-pointer"
                aria-label="Select demo business"
              >
                {DEMO_BUSINESSES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({b.category})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Prototype Body: Two Column Layout */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-6 space-y-6">
              {viewMode === 'customer' ? (
                /* CUSTOMER MODE FORM CONTROLS */
                <>
                  {/* Star Rating Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                      1. Select Your Rating
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#090D18] border border-[#1E293B]">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setRating(star)}
                            className="p-1 rounded hover:scale-110 active:scale-95 transition-transform focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
                            aria-label={`Rate ${star} out of 5 stars`}
                          >
                            <Star
                              className={`w-6 h-6 transition-colors ${
                                (hoverRating || rating) >= star
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-slate-600'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      <span className="text-xs text-slate-400 pl-2">
                        {rating === 5 && '⭐️ Exceptional experience'}
                        {rating === 4 && '⭐️ Very good visit'}
                        {rating === 3 && '⭐️ Average — Private note recommended'}
                        {rating <= 2 && '⭐️ Disappointing — Direct to management'}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Selector */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                        2. Key Experience Highlights
                      </label>
                      <span className="text-[11px] text-slate-500">Pick 1–3</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentBusiness.highlights.map((h) => {
                        const isSelected = selectedHighlights.includes(h);
                        return (
                          <button
                            key={h}
                            type="button"
                            onClick={() => toggleHighlight(h)}
                            className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                              isSelected
                                ? 'bg-blue-600/20 text-blue-300 border-blue-500/60 shadow-sm'
                                : 'bg-[#11182A] text-slate-400 border-[#1E293B] hover:text-slate-200 hover:border-slate-700'
                            }`}
                            aria-pressed={isSelected}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {h}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tone Choice Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                      3. Draft Tone
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['Warm', 'Enthusiastic', 'Short & Direct', 'Detailed'] as ToneType[]).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTone(t)}
                          className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                            tone === t
                              ? 'bg-amber-500/15 text-amber-300 border-amber-500/50 shadow-sm'
                              : 'bg-[#11182A] text-slate-400 border-[#1E293B] hover:text-slate-200'
                          }`}
                          aria-pressed={tone === t}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Optional Visit Details & Language Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 block">
                        Optional Visit Details
                      </label>
                      <input
                        type="text"
                        value={visitDetails}
                        onChange={(e) => setVisitDetails(e.target.value)}
                        placeholder="e.g. Server Sarah was great, tried the seasonal special"
                        className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 placeholder:text-slate-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 block">
                        Language
                      </label>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        <option value="English">English</option>
                        <option value="Español">Español</option>
                        <option value="Français">Français</option>
                        <option value="Deutsch">Deutsch</option>
                        <option value="日本語">日本語</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                /* BUSINESS OWNER REPLY CONTROLS */
                <>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                      1. Customer Review to Answer
                    </label>
                    <textarea
                      rows={3}
                      value={ownerIncomingReview}
                      onChange={(e) => setOwnerIncomingReview(e.target.value)}
                      className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg p-3 focus:outline-none focus:border-blue-500 resize-none font-sans"
                      placeholder="Paste incoming Google review here..."
                    />
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setOwnerIncomingReview(
                            'We visited on Friday night. The food was sensational, but we waited nearly 25 minutes for our drinks to arrive from the bar.'
                          )
                        }
                        className="text-[11px] text-blue-400 hover:underline"
                      >
                        Load constructive review
                      </button>
                      <span className="text-slate-600">·</span>
                      <button
                        type="button"
                        onClick={() =>
                          setOwnerIncomingReview(
                            'Best dining experience we have had in years! Every dish was delicious and the ambiance was perfect.'
                          )
                        }
                        className="text-[11px] text-blue-400 hover:underline"
                      >
                        Load 5-star praise
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                      2. Reply Tone
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(
                        [
                          'Empathetic & Problem-Solving',
                          'Warm & Grateful',
                          'Professional & Courteous',
                          'Brief & Appreciative'
                        ] as OwnerReplyTone[]
                      ).map((rt) => (
                        <button
                          key={rt}
                          type="button"
                          onClick={() => setOwnerReplyTone(rt)}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border text-left transition-all ${
                            ownerReplyTone === rt
                              ? 'bg-blue-600/20 text-blue-300 border-blue-500/60 shadow-sm'
                              : 'bg-[#11182A] text-slate-400 border-[#1E293B] hover:text-slate-200'
                          }`}
                          aria-pressed={ownerReplyTone === rt}
                        >
                          {rt}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Action Buttons to trigger generation or test states */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={generateMockDraft}
                  disabled={isGenerating}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold shadow-md active:scale-95 transition-all disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{isGenerating ? 'Drafting...' : viewMode === 'customer' ? 'Generate Customer Draft' : 'Draft Owner Reply'}</span>
                </button>

                {/* State inspection button for reviewers */}
                <button
                  type="button"
                  onClick={triggerSimulatedError}
                  title="Test error boundary state"
                  className="text-[11px] text-slate-400 hover:text-slate-300 px-2 py-1 rounded bg-[#11182A] border border-[#1E293B] transition-colors"
                >
                  Simulate API Retry
                </button>
              </div>
            </div>

            {/* Right Column: Editable Output Card with States */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex-1 rounded-xl bg-[#090D18] border border-[#1E293B] p-4 sm:p-5 flex flex-col justify-between relative min-h-[340px]">
                {/* Header of output area */}
                <div className="flex items-center justify-between pb-3 border-b border-[#1A233A]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-semibold text-white">
                      {viewMode === 'customer' ? 'Customer Draft (Fully Editable)' : 'Suggested Business Reply'}
                    </span>
                  </div>

                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                    Ready to Edit
                  </span>
                </div>

                {/* Dynamic State Area */}
                <div className="py-4 flex-1 flex flex-col justify-center">
                  {isGenerating ? (
                    /* LOADING STATE */
                    <div className="py-10 text-center space-y-4">
                      <div className="inline-flex p-3 rounded-2xl bg-blue-600/10 text-blue-400 animate-spin">
                        <RefreshCw className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-slate-200">{generationStep}</p>
                        <p className="text-xs text-slate-500">Preparing natural, customer-owned wording</p>
                      </div>
                    </div>
                  ) : hasError ? (
                    /* ERROR & RETRY STATE */
                    <div className="py-8 px-4 rounded-xl bg-red-950/20 border border-red-900/40 text-center space-y-3">
                      <AlertTriangle className="w-8 h-8 text-red-400 mx-auto" />
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-red-200">Unable to generate draft</h4>
                        <p className="text-xs text-slate-400 max-w-sm mx-auto">
                          Simulated network delay or API interruption. Click retry to recover immediately.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={generateMockDraft}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-900/40 hover:bg-red-900/60 border border-red-700/50 text-xs font-semibold text-red-100 transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Retry Generation</span>
                      </button>
                    </div>
                  ) : (
                    /* SUCCESS STATE: EDITABLE TEXTAREA */
                    <div className="space-y-2 flex-1 flex flex-col">
                      <label htmlFor="draft-textarea" className="sr-only">
                        Generated draft text
                      </label>
                      <textarea
                        id="draft-textarea"
                        rows={7}
                        value={draftText}
                        onChange={(e) => setDraftText(e.target.value)}
                        className="w-full flex-1 bg-[#070A13] text-sm text-slate-100 p-3.5 rounded-lg border border-[#22304C] focus:border-blue-500 focus:outline-none resize-none leading-relaxed font-sans"
                        placeholder="Type or edit your draft here..."
                      />
                      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                        <span>{draftText.length} characters · Click to edit any sentence</span>
                        <span className="text-amber-400/90 font-medium">Customer retains full control</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-3 border-t border-[#1A233A] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopy}
                      disabled={isGenerating || hasError || !draftText}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-[#162035] hover:bg-[#1E293B] border border-[#263352] text-xs font-medium text-slate-200 transition-all disabled:opacity-40"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied to clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Draft</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={generateMockDraft}
                      disabled={isGenerating}
                      className="p-2 rounded-lg bg-[#162035] hover:bg-[#1E293B] border border-[#263352] text-slate-400 hover:text-white transition-colors"
                      title="Regenerate with same options"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {viewMode === 'customer' ? (
                    <button
                      type="button"
                      onClick={() => setShowHandoffModal(true)}
                      disabled={isGenerating || hasError}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-xs font-semibold text-white shadow transition-all disabled:opacity-40"
                    >
                      <span>Continue to Google</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-xs font-semibold text-white shadow transition-all"
                    >
                      <span>Copy Reply for Google Profile</span>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Prototype Footer Note */}
          <div className="px-6 py-3 bg-[#0A0F1D] border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Frontend prototype — Isolated mock state ready for production API integration</span>
            </div>
            <span className="font-mono text-[10px] text-slate-500">
              Drafts never auto-post · Customer makes the final submission
            </span>
          </div>
        </div>
      </div>

      {/* Educational Google Handoff Modal (Safe Demo Simulation) */}
      {showHandoffModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="handoff-title"
        >
          <div className="max-w-md w-full rounded-2xl bg-[#0D1322] border border-[#263352] p-6 shadow-2xl space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <BrandIcon size={32} />
                <h3 id="handoff-title" className="text-base font-semibold text-white">
                  How Google Handoff Works
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowHandoffModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                In the live 5-Star.AI product, clicking <strong>“Continue to Google”</strong> automatically copies the customer’s customized draft and securely opens their native Google Review modal for the verified business location.
              </p>
              <div className="p-3 rounded-xl bg-[#11182A] border border-[#1E293B] space-y-1.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Customer retains 100% control</span>
                </div>
                <p className="text-slate-400">
                  Google’s Terms of Service require that users authenticate and submit their own reviews. 5-Star.AI respects this completely by aiding formulation, never circumventing customer choice.
                </p>
              </div>
              <p className="text-[11px] text-slate-500 font-mono">
                (Demo Mode: Fictional business — no actual Google review is posted or redirected.)
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowHandoffModal(false)}
                className="px-4 py-2 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-xs font-semibold text-white transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
