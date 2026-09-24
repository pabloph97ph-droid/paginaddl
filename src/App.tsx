/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyDDL } from './components/WhyDDL';
import { AutonomyBlock } from './components/AutonomyBlock';
import { HowItWorks } from './components/HowItWorks';
import { CommunitySection } from './components/CommunitySection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { WhatYoureBuying } from './components/WhatYoureBuying';
import { Manifesto } from './components/Manifesto';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { VALID_COUPONS } from './config/pricing';
import { PlanType } from './types';

export default function App() {
  const [activeCoupon, setActiveCoupon] = useState<string | null>(null);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<PlanType>('individual');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyCoupon = (code: string): boolean => {
    const normalized = code.trim().toUpperCase();
    if (VALID_COUPONS[normalized]) {
      setActiveCoupon(normalized);
      return true;
    }
    return false;
  };

  const handleSelectPlan = (planId: PlanType, coupon: string | null) => {
    if (coupon && !activeCoupon) {
      handleApplyCoupon(coupon);
    }
    setSelectedPlanForModal(planId);
    setIsModalOpen(true);
  };

  const scrollToAccess = () => {
    const el = document.getElementById('escolha-seu-acesso');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070c18] text-[#f1f3f7] flex flex-col font-sans selection:bg-[#c5a880]/30 selection:text-white">
      {/* Top Bar Navigation */}
      <Header onNavigateToAccess={scrollToAccess} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreClick={scrollToAccess} />

        {/* O mundo ficou maior */}
        <WhyDDL />

        {/* Autonomia vs Dependência (3 a 4 meses) */}
        <AutonomyBlock />

        {/* Como Funciona: Os 4 Pilares */}
        <HowItWorks />

        {/* A Comunidade */}
        <CommunitySection />

        {/* Bônus Estruturados */}
        <BonusesSection />

        {/* Escolha Seu Acesso */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          activeCoupon={activeCoupon}
          onApplyCoupon={handleApplyCoupon}
        />

        {/* Não é apenas uma aula de inglês */}
        <WhatYoureBuying />

        {/* Manifesto: O mundo não é tão grande quando você consegue se comunicar */}
        <Manifesto />

        {/* Decisão Final */}
        <FinalCta
          onSelectPlan={handleSelectPlan}
          activeCoupon={activeCoupon}
          onApplyCoupon={handleApplyCoupon}
        />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Modal de Finalização / Checkout */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planId={selectedPlanForModal}
        activeCoupon={activeCoupon}
      />
    </div>
  );
}
