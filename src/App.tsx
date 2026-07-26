/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { Hero } from './components/Hero';
import { UrgencyBar } from './components/UrgencyBar';
import { CredibilityBanner } from './components/CredibilityBanner';
import { PracticeAreas } from './components/PracticeAreas';
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
  const [selectedArea, setSelectedArea] = useState<string>('Golpe do PIX');

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
      {/* 1. Hero Section (100vh layout) */}
      <Hero onCtaClick={() => scrollToForm()} />

      {/* 2. Fixed/Sticky Urgency Bar */}
      <UrgencyBar onCtaClick={() => scrollToForm()} />

      {/* 3. Credibility Banner */}
      <CredibilityBanner />

      {/* 4. Practice Areas (Golpe do PIX, Ludopatia, Trabalhista) */}
      <PracticeAreas onSelectArea={(area) => scrollToForm(area)} />

      {/* 5. How It Works (Gold Timeline) */}
      <HowItWorks onCtaClick={() => scrollToForm()} />

      {/* 6. Differentials */}
      <Differentials />

      {/* 7. Video Section (Explicativos Dra. Larisse) */}
      <VideoSection onCtaClick={() => scrollToForm()} />

      {/* 8. Post Video Conversion CTA */}
      <PostVideoCTA onCtaClick={() => scrollToForm()} />

      {/* 9. FAQ Accordions */}
      <FAQSection />

      {/* 10. Lead Capture Form */}
      <LeadForm initialArea={selectedArea} formRef={formRef} />

      {/* 11. Floating WhatsApp Action */}
      <FloatingWhatsApp onCtaClick={() => scrollToForm()} />

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}

