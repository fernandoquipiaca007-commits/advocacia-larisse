/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { Hero } from './components/Hero';
import { UrgencyBar } from './components/UrgencyBar';
import { CredibilityBanner } from './components/CredibilityBanner';
import { PracticeAreas } from './components/PracticeAreas';
import { WhatIsLudopathy } from './components/WhatIsLudopathy';
import { HowItWorks } from './components/HowItWorks';
import { Differentials } from './components/Differentials';
import { VideoSection } from './components/VideoSection';
import { PostVideoCTA } from './components/PostVideoCTA';
import { FAQSection } from './components/FAQSection';
import { LeadForm } from './components/LeadForm';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [selectedArea, setSelectedArea] = useState<string>('Ludopatia');

  const scrollToForm = (area?: string) => {
    if (area) {
      setSelectedArea(area);
    }
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('formulario');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C8A45B] selection:text-black">
      {/* 1. Hero Section */}
      <Hero onCtaClick={() => scrollToForm('Ludopatia')} />

      {/* 2. Urgency Bar */}
      <UrgencyBar onCtaClick={() => scrollToForm()} />

      {/* 3. Credibility Banner */}
      <CredibilityBanner />

      {/* 4. Practice Areas (Ludopatia em destaque principal, PIX e Trabalhista como suporte) */}
      <PracticeAreas onSelectArea={(area) => scrollToForm(area)} />

      {/* 5. O que é Ludopatia? (Nova Seção Educativa) */}
      <WhatIsLudopathy onCtaClick={() => scrollToForm('Ludopatia')} />

      {/* 6. How It Works */}
      <HowItWorks onCtaClick={() => scrollToForm()} />

      {/* 7. Differentials */}
      <Differentials />

      {/* 8. Video Section */}
      <VideoSection onCtaClick={() => scrollToForm()} />

      {/* 9. Post Video CTA */}
      <PostVideoCTA onCtaClick={() => scrollToForm()} />

      {/* 10. FAQ */}
      <FAQSection />

      {/* 11. Lead Capture Form */}
      <LeadForm initialArea={selectedArea} formRef={formRef} />

      {/* 12. Floating WhatsApp */}
      <FloatingWhatsApp onCtaClick={() => scrollToForm()} />

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
