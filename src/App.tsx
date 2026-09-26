/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductPreview } from './components/ProductPreview';
import { ReviewGeneratorDemo } from './components/ReviewGeneratorDemo';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { PricingSection } from './components/PricingSection';
import { TrialRequestSection } from './components/TrialRequestSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { PolicyModal, ModalContentType } from './components/PolicyModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [policyModalContent, setPolicyModalContent] = useState<ModalContentType>(null);

  const handleOpenTrialModal = () => {
    setTrialModalOpen(true);
  };

  const handleScrollToDemo = () => {
    const el = document.getElementById('demo-generator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenResources = () => {
    setPolicyModalContent('resources');
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-[#F3EFEA] font-sans selection:bg-[#1A73E8]/30 selection:text-white">
      {/* Sticky Header with 3-Zone Contract */}
      <Header
        onRequestTrial={handleOpenTrialModal}
        onOpenResources={handleOpenResources}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onRequestTrial={handleOpenTrialModal}
          onScrollToDemo={handleScrollToDemo}
        />

        {/* Product in Practice: Customer vs Business Owner Experience */}
        <ProductPreview />

        {/* Interactive AI Review Generator Prototype */}
        <ReviewGeneratorDemo />

        {/* 4-Step How It Works Workflow */}
        <HowItWorks onRequestTrial={handleOpenTrialModal} />

        {/* Comprehensive System Features (QR/NFC, Private Feedback, Replies, Insights, Agencies) */}
        <Features />

        {/* Pricing Tiers & Custom Quote Explanation */}
        <PricingSection onRequestTrial={handleOpenTrialModal} />

        {/* Guided-Trial On-Page Request Section */}
        <TrialRequestSection />

        {/* FAQ Section & Final Conversion CTA */}
        <FAQSection onRequestTrial={handleOpenTrialModal} />
      </main>

      {/* Footer with Real Legal & Documentation Modals */}
      <Footer
        onOpenModal={(type) => setPolicyModalContent(type)}
        onRequestTrial={handleOpenTrialModal}
      />

      {/* Pop-up Modals for Trial Request & Policy/Resources */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />

      <PolicyModal
        type={policyModalContent}
        onClose={() => setPolicyModalContent(null)}
      />
    </div>
  );
}
