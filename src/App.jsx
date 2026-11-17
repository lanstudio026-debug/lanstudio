import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlansSection from './components/PlansSection';
import PlanComparison from './components/PlanComparison';
import IndividualServices from './components/IndividualServices';
import QuoteCalculator from './components/QuoteCalculator';
import Methodology from './components/Methodology';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-lan-cream text-neutral-800 font-sans selection:bg-lan-burgundy selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Monthly Social Media Plans */}
        <PlansSection />

        {/* Feature Comparison Table */}
        <PlanComparison />

        {/* Individual Services */}
        <IndividualServices />

        {/* Interactive Custom Quote Calculator */}
        <QuoteCalculator />

        {/* 4-Step Methodology */}
        <Methodology />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button (+57 302 4538645) */}
      <FloatingWhatsApp />
    </div>
  );
}
